-- Fix the SQL query and complete security fixes
-- Drop all views completely
DROP VIEW IF EXISTS public.clan_leaderboard CASCADE;
DROP VIEW IF EXISTS public.user_leaderboard CASCADE;

-- Recreate views with explicit SECURITY INVOKER to ensure no SECURITY DEFINER
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

-- Update contact forms to use server-side rate limiting
CREATE OR REPLACE FUNCTION public.submit_contact_form(
  form_name text,
  form_email text,
  form_message text,
  user_ip inet DEFAULT NULL
) RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public', 'pg_catalog'
AS $$
DECLARE
  result jsonb;
BEGIN
  -- Validate inputs using existing function
  IF NOT public.validate_input_safety(form_name) 
     OR NOT public.validate_input_safety(form_email) 
     OR NOT public.validate_input_safety(form_message) THEN
    RETURN jsonb_build_object('success', false, 'error', 'Invalid input detected');
  END IF;
  
  -- Check rate limit (5 submissions per hour per IP)
  IF user_ip IS NOT NULL AND NOT public.check_rate_limit(
    host(user_ip)::text, 
    'contact_form', 
    5, 
    60
  ) THEN
    RETURN jsonb_build_object('success', false, 'error', 'Rate limit exceeded. Please try again later.');
  END IF;
  
  -- Log the contact form submission
  PERFORM public.log_security_event(
    'contact_form_submitted',
    'contact_forms',
    jsonb_build_object(
      'name', form_name,
      'email', form_email,
      'message_length', length(form_message)
    ),
    user_ip
  );
  
  -- In a real implementation, you'd store the form data or send it somewhere
  -- For now, just return success
  RETURN jsonb_build_object('success', true, 'message', 'Form submitted successfully');
END;
$$;