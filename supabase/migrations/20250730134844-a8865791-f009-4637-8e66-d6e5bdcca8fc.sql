-- Check for any remaining SECURITY DEFINER views and fix them
-- First, let's see what views exist
SELECT schemaname, viewname, definition 
FROM pg_views 
WHERE schemaname = 'public';

-- Drop and recreate ALL views to ensure no SECURITY DEFINER remains
DROP VIEW IF EXISTS public.clan_leaderboard CASCADE;
DROP VIEW IF EXISTS public.user_leaderboard CASCADE;

-- Recreate views without SECURITY DEFINER
CREATE VIEW public.clan_leaderboard AS
SELECT 
  c.id,
  c.name,
  c.description,
  c.level,
  c.total_coins,
  c.member_count,
  c.missions_completed,
  c.created_at,
  c.telegram_link,
  c.image,
  RANK() OVER (ORDER BY c.total_coins DESC, c.missions_completed DESC) as rank
FROM public.clans c
WHERE c.total_coins > 0
ORDER BY c.total_coins DESC, c.missions_completed DESC;

CREATE VIEW public.user_leaderboard AS
SELECT 
  p.telegram_id,
  p.username,
  p.first_name,
  p.referral_name,
  p.earnings,
  RANK() OVER (ORDER BY p.earnings DESC) as rank
FROM public.profiles p
WHERE p.earnings > 0
ORDER BY p.earnings DESC;

-- Ensure views have proper RLS policies
-- Views inherit RLS from underlying tables, so no additional policies needed