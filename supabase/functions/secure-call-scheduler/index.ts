import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check content length to prevent large payloads
    const contentLength = req.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) {
      return new Response(
        JSON.stringify({ error: 'Request too large' }),
        { status: 413, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const body = await req.json();
    
    // Extract client information for rate limiting and security
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';
    
    // Validate required fields
    const { name, email, company, phone, date, time, businessType, message } = body;
    
    if (!name || !email || !date || !time) {
      return new Response(
        JSON.stringify({ error: 'Name, email, date, and time are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate date is in the future
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
      return new Response(
        JSON.stringify({ error: 'Selected date must be in the future' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Server-side validation using existing function
    const { data: isValid } = await supabase.rpc('validate_input_safety', { 
      input_text: `${name} ${email} ${company || ''} ${phone || ''} ${message || ''}` 
    });
    
    if (!isValid) {
      return new Response(
        JSON.stringify({ error: 'Invalid input detected' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check rate limit using existing function
    const { data: rateLimitOk } = await supabase.rpc('check_rate_limit', {
      user_identifier: clientIP,
      action_type: 'call_scheduler',
      max_attempts: 2,
      window_minutes: 60
    });

    if (!rateLimitOk) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Insert call scheduler submission with server-side validation
    const { data, error } = await supabase
      .from('call_scheduler_submissions')
      .insert({
        name: name.trim().substring(0, 100),
        email: email.trim().substring(0, 255),
        company: company?.trim().substring(0, 255) || null,
        phone: phone?.trim().substring(0, 20) || null,
        preferred_date: date,
        preferred_time: time,
        business_type: businessType?.trim().substring(0, 255) || null,
        message: message?.trim().substring(0, 1000) || null,
        ip_address: clientIP,
        user_agent: userAgent.substring(0, 255)
      })
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to schedule call' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Call scheduled successfully:', data.id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Call scheduled successfully',
        submissionId: data.id 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in secure-call-scheduler function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});