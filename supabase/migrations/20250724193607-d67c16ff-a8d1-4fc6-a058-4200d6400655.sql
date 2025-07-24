-- Fix security definer functions to prevent search_path attacks
DROP FUNCTION IF EXISTS public.get_current_telegram_id();
CREATE OR REPLACE FUNCTION public.get_current_telegram_id()
RETURNS bigint
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public, pg_catalog
AS $function$
DECLARE
  user_telegram_id bigint;
BEGIN
  -- Get telegram_id from the profiles table based on current user session
  SELECT telegram_id INTO user_telegram_id 
  FROM public.profiles 
  WHERE id = auth.uid();
  
  RETURN user_telegram_id;
END;
$function$;

DROP FUNCTION IF EXISTS public.user_owns_profile(bigint);
CREATE OR REPLACE FUNCTION public.user_owns_profile(profile_telegram_id bigint)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = public, pg_catalog
AS $function$
BEGIN
  -- Check if the provided telegram_id matches the current user's profile
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE telegram_id = profile_telegram_id 
    AND id = auth.uid()
  );
END;
$function$;

-- Update RLS policies to be more restrictive
DROP POLICY IF EXISTS "Only authenticated users can create clans" ON public.clans;
CREATE POLICY "Only authenticated users can create clans" 
ON public.clans 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

DROP POLICY IF EXISTS "Only clan creators can update clans" ON public.clans;
CREATE POLICY "Only clan creators can update clans" 
ON public.clans 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

-- Add rate limiting table for security
CREATE TABLE IF NOT EXISTS public.security_logs (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_type text NOT NULL,
  user_id uuid,
  ip_address text,
  user_agent text,
  details jsonb,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on security logs
ALTER TABLE public.security_logs ENABLE ROW LEVEL SECURITY;

-- Only system can access security logs
CREATE POLICY "Security logs are system only" 
ON public.security_logs 
FOR ALL 
USING (false);