-- Phase 1: Fix Critical Database Security Issues

-- 1. Drop the problematic security definer views that bypass RLS
DROP VIEW IF EXISTS public.real_clan_leaderboard;
DROP VIEW IF EXISTS public.real_user_leaderboard;

-- 2. Create secure replacement views with proper RLS compliance
CREATE VIEW public.clan_leaderboard AS
SELECT 
  c.id,
  c.name,
  c.description,
  c.level,
  c.member_count,
  c.total_coins,
  c.missions_completed,
  c.image,
  c.telegram_link,
  c.created_at,
  ROW_NUMBER() OVER (ORDER BY c.total_coins DESC, c.missions_completed DESC) as rank
FROM public.clans c
ORDER BY c.total_coins DESC, c.missions_completed DESC;

CREATE VIEW public.user_leaderboard AS
SELECT 
  p.telegram_id,
  p.username,
  p.first_name,
  p.referral_name,
  p.earnings,
  ROW_NUMBER() OVER (ORDER BY p.earnings DESC) as rank
FROM public.profiles p
WHERE p.id = auth.uid() -- Only show current user's data due to RLS
ORDER BY p.earnings DESC;

-- 3. Fix overly permissive RLS policy on rate_limits table
DROP POLICY IF EXISTS "Rate limits can be managed by authenticated users" ON public.rate_limits;

-- Create more restrictive policies for rate_limits
CREATE POLICY "Users can view their own rate limits" 
ON public.rate_limits 
FOR SELECT 
USING (identifier = COALESCE(auth.jwt() ->> 'sub', ''));

CREATE POLICY "Users can create their own rate limits" 
ON public.rate_limits 
FOR INSERT 
WITH CHECK (identifier = COALESCE(auth.jwt() ->> 'sub', ''));

CREATE POLICY "Users can update their own rate limits" 
ON public.rate_limits 
FOR UPDATE 
USING (identifier = COALESCE(auth.jwt() ->> 'sub', ''));

-- 4. Add missing RLS policies for tables that need them
CREATE POLICY "Users can create tasks" 
ON public.tasks 
FOR INSERT 
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Users can update tasks" 
ON public.tasks 
FOR UPDATE 
USING (auth.role() = 'authenticated');

-- 5. Add server-side validation function for inputs
CREATE OR REPLACE FUNCTION public.validate_input_safety(input_text TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Check for common XSS patterns
  IF input_text ~* '<script|javascript:|data:|vbscript:|onload=|onerror=' THEN
    RETURN FALSE;
  END IF;
  
  -- Check for SQL injection patterns
  IF input_text ~* '(union|select|insert|update|delete|drop|create|alter)\s' THEN
    RETURN FALSE;
  END IF;
  
  -- Check for excessive length
  IF LENGTH(input_text) > 10000 THEN
    RETURN FALSE;
  END IF;
  
  RETURN TRUE;
END;
$$;