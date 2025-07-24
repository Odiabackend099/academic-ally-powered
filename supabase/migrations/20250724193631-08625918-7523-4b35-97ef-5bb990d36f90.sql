-- First drop policies that depend on the functions
DROP POLICY IF EXISTS "Clan members viewable by clan members" ON public.clan_members;
DROP POLICY IF EXISTS "Users can join clans" ON public.clan_members;
DROP POLICY IF EXISTS "Users can leave clans" ON public.clan_members;

-- Now drop and recreate the functions with proper security
DROP FUNCTION IF EXISTS public.get_current_telegram_id() CASCADE;
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

DROP FUNCTION IF EXISTS public.user_owns_profile(bigint) CASCADE;
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

-- Recreate the policies with the updated functions
CREATE POLICY "Clan members viewable by clan members" 
ON public.clan_members 
FOR SELECT
USING (
  (clan_id IN ( 
    SELECT cm2.clan_id
    FROM clan_members cm2
    WHERE (cm2.telegram_id = get_current_telegram_id())
  )) OR (clan_id IS NULL)
);

CREATE POLICY "Users can join clans" 
ON public.clan_members 
FOR INSERT 
WITH CHECK (telegram_id = get_current_telegram_id());

CREATE POLICY "Users can leave clans" 
ON public.clan_members 
FOR DELETE 
USING (telegram_id = get_current_telegram_id());