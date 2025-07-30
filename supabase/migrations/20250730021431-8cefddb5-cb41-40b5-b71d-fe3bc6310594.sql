-- Remove the remaining security definer views completely and recreate as regular views
DROP VIEW IF EXISTS public.real_clan_leaderboard CASCADE;
DROP VIEW IF EXISTS public.real_user_leaderboard CASCADE;

-- Create regular views without security definer
CREATE OR REPLACE VIEW public.real_clan_leaderboard AS
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

CREATE OR REPLACE VIEW public.real_user_leaderboard AS
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