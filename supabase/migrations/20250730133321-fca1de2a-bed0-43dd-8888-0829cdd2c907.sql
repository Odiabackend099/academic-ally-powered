-- Fix security definer views by recreating them as regular views without SECURITY DEFINER

-- Drop the existing views
DROP VIEW IF EXISTS public.clan_leaderboard;
DROP VIEW IF EXISTS public.user_leaderboard;

-- Create regular views (without SECURITY DEFINER) that respect RLS
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

-- For user leaderboard, we'll make it show all users since the original table was meant to be public
-- but with proper RLS it will only show what the user is allowed to see
CREATE VIEW public.user_leaderboard AS
SELECT 
  p.telegram_id,
  p.username,
  p.first_name,
  p.referral_name,
  p.earnings,
  ROW_NUMBER() OVER (ORDER BY p.earnings DESC) as rank
FROM public.profiles p
ORDER BY p.earnings DESC;