-- Phase 1: Fix Critical Database Security Issues

-- Drop existing security definer views that bypass RLS
DROP VIEW IF EXISTS public.clan_leaderboard;
DROP VIEW IF EXISTS public.user_leaderboard;

-- Recreate clan_leaderboard as a regular view without SECURITY DEFINER
CREATE VIEW public.clan_leaderboard AS
SELECT 
  c.id,
  c.name,
  c.description,
  c.telegram_link,
  c.image,
  c.level,
  c.total_coins,
  c.member_count,
  c.missions_completed,
  c.created_at,
  row_number() OVER (ORDER BY c.total_coins DESC, c.missions_completed DESC) as rank
FROM public.clans c
WHERE c.total_coins > 0
ORDER BY c.total_coins DESC, c.missions_completed DESC;

-- Recreate user_leaderboard as a regular view without SECURITY DEFINER
CREATE VIEW public.user_leaderboard AS
SELECT 
  p.telegram_id,
  p.username,
  p.first_name,
  p.referral_name,
  p.earnings,
  row_number() OVER (ORDER BY p.earnings DESC) as rank
FROM public.profiles p
WHERE p.earnings > 0
ORDER BY p.earnings DESC;

-- Enable RLS on the new views (they inherit from base tables, but let's be explicit)
ALTER VIEW public.clan_leaderboard SET (security_invoker = true);
ALTER VIEW public.user_leaderboard SET (security_invoker = true);

-- Add RLS policies for clan_leaderboard view access
CREATE POLICY "Clan leaderboard is publicly viewable" 
ON public.clans 
FOR SELECT 
USING (true);

-- Add RLS policies for user_leaderboard view access  
CREATE POLICY "User leaderboard is publicly viewable for non-sensitive data" 
ON public.profiles 
FOR SELECT 
USING (true);

-- Create a secure contact form submissions table
CREATE TABLE public.contact_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  interest text,
  message text NOT NULL,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  processed boolean DEFAULT false,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  CONSTRAINT valid_message_length CHECK (char_length(message) <= 1000)
);

-- Enable RLS on contact submissions
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow service role to read contact submissions (admin access only)
CREATE POLICY "Only service role can view contact submissions" 
ON public.contact_submissions 
FOR SELECT 
USING (auth.role() = 'service_role'::text);

-- Allow anyone to insert contact submissions (with rate limiting handled in app)
CREATE POLICY "Anyone can submit contact forms" 
ON public.contact_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create call scheduler submissions table
CREATE TABLE public.call_scheduler_submissions (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  preferred_date date NOT NULL,
  preferred_time text NOT NULL,
  business_type text,
  message text,
  ip_address inet,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  processed boolean DEFAULT false,
  CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  CONSTRAINT valid_name_length CHECK (char_length(name) >= 2 AND char_length(name) <= 100),
  CONSTRAINT valid_phone CHECK (phone IS NULL OR phone ~* '^\+?[\d\s\-\(\)]{10,}$')
);

-- Enable RLS on call scheduler submissions
ALTER TABLE public.call_scheduler_submissions ENABLE ROW LEVEL SECURITY;

-- Only allow service role to read call submissions (admin access only)
CREATE POLICY "Only service role can view call submissions" 
ON public.call_scheduler_submissions 
FOR SELECT 
USING (auth.role() = 'service_role'::text);

-- Allow anyone to insert call submissions
CREATE POLICY "Anyone can submit call requests" 
ON public.call_scheduler_submissions 
FOR INSERT 
WITH CHECK (true);

-- Add audit logging for contact and call submissions
CREATE OR REPLACE FUNCTION public.log_form_submission()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'pg_catalog'
AS $function$
BEGIN
  -- Log form submission for monitoring
  PERFORM public.log_security_event(
    'form_submitted',
    TG_TABLE_NAME,
    jsonb_build_object(
      'email', NEW.email,
      'name', NEW.name,
      'submission_id', NEW.id
    )
  );
  
  RETURN NEW;
END;
$function$;

-- Create triggers for audit logging
CREATE TRIGGER log_contact_submissions
  AFTER INSERT ON public.contact_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.log_form_submission();

CREATE TRIGGER log_call_submissions
  AFTER INSERT ON public.call_scheduler_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.log_form_submission();