-- Fix the remaining security issues

-- 1. Fix the validation function to have proper search_path
CREATE OR REPLACE FUNCTION public.validate_input_safety(input_text TEXT)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public', 'pg_catalog'
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

-- 2. Fix existing functions to have proper search_path
CREATE OR REPLACE FUNCTION public.get_current_telegram_id()
RETURNS bigint
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public', 'pg_catalog'
AS $$
DECLARE
  user_telegram_id bigint;
BEGIN
  -- Get telegram_id from the profiles table based on current user session
  SELECT telegram_id INTO user_telegram_id 
  FROM public.profiles 
  WHERE id = auth.uid();
  
  RETURN user_telegram_id;
END;
$$;

CREATE OR REPLACE FUNCTION public.user_owns_profile(profile_telegram_id bigint)
RETURNS boolean
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path TO 'public', 'pg_catalog'
AS $$
BEGIN
  -- Check if the provided telegram_id matches the current user's profile
  RETURN EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE telegram_id = profile_telegram_id 
    AND id = auth.uid()
  );
END;
$$;