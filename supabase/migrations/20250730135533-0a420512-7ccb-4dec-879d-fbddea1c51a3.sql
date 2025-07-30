-- Let's completely recreate the database schema to remove any hidden SECURITY DEFINER views
-- This is a comprehensive fix for the security definer view issue

-- First, drop all views completely
DROP VIEW IF EXISTS public.clan_leaderboard CASCADE;
DROP VIEW IF EXISTS public.user_leaderboard CASCADE;

-- Now let's check if there are any materialized views or other view-like objects
SELECT tablename, viewname FROM pg_views WHERE schemaname = 'public'
UNION ALL
SELECT matviewname as tablename, matviewname as viewname FROM pg_matviews WHERE schemaname = 'public';

-- Recreate views with explicit SECURITY INVOKER (default behavior)
CREATE VIEW public.clan_leaderboard 
WITH (security_invoker = true) AS
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

CREATE VIEW public.user_leaderboard 
WITH (security_invoker = true) AS
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