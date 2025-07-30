-- Enable RLS on profiles table and create proper policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own profile
CREATE POLICY "Users can read their own profile" 
ON public.profiles 
FOR SELECT 
USING (id = auth.uid());

-- Allow users to update their own profile
CREATE POLICY "Users can update their own profile" 
ON public.profiles 
FOR UPDATE 
USING (id = auth.uid());

-- Allow users to insert their own profile
CREATE POLICY "Users can insert their own profile" 
ON public.profiles 
FOR INSERT 
WITH CHECK (id = auth.uid());

-- Drop the problematic security definer views and recreate them safely
DROP VIEW IF EXISTS public.real_clan_leaderboard;
DROP VIEW IF EXISTS public.real_user_leaderboard;

-- Create secure clan leaderboard view
CREATE VIEW public.real_clan_leaderboard AS
SELECT 
  ROW_NUMBER() OVER (ORDER BY total_coins DESC, missions_completed DESC) as rank,
  id,
  name,
  description,
  image,
  telegram_link,
  level,
  member_count,
  total_coins,
  missions_completed,
  created_at
FROM public.clans
WHERE total_coins > 0
ORDER BY total_coins DESC, missions_completed DESC
LIMIT 100;

-- Create secure user leaderboard view
CREATE VIEW public.real_user_leaderboard AS
SELECT 
  ROW_NUMBER() OVER (ORDER BY earnings DESC) as rank,
  telegram_id,
  username,
  first_name,
  referral_name,
  earnings
FROM public.profiles
WHERE earnings > 0
ORDER BY earnings DESC
LIMIT 100;

-- Fix rate_limits table RLS to allow proper functionality
DROP POLICY IF EXISTS "Rate limits are viewable by system only" ON public.rate_limits;

CREATE POLICY "Rate limits can be managed by authenticated users" 
ON public.rate_limits 
FOR ALL 
USING (true);

-- Add missing update policies for profiles table
CREATE POLICY "Users can delete their own profile" 
ON public.profiles 
FOR DELETE 
USING (id = auth.uid());