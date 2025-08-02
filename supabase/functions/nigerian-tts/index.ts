import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    if (!ELEVENLABS_API_KEY) {
      throw new Error('ElevenLabs API key not configured');
    }

    const { text, language = 'nigerian_english' } = await req.json();

    // Validate input length and content
    if (!text || typeof text !== 'string') {
      throw new Error('Text is required and must be a string');
    }

    if (text.length > 5000) {
      throw new Error('Text too long. Maximum 5000 characters allowed.');
    }

    // Basic prompt injection protection
    const suspiciousPatterns = [
      /ignore\s+previous\s+instructions/i,
      /system\s*:/i,
      /assistant\s*:/i,
      /\[INST\]/i,
      /<\|system\|>/i
    ];

    if (suspiciousPatterns.some(pattern => pattern.test(text))) {
      throw new Error('Invalid text content detected');
    }

    // Get client IP for logging
    const clientIP = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 'unknown';
    
    console.log(`TTS request from IP: ${clientIP}, text length: ${text.length}, language: ${language}`);

    // Map languages to voice IDs and prompts
    const voiceConfig = {
      nigerian_english: {
        voiceId: "EXAVITQu4vr4xnSDxMaL", // Sarah
        prompt: "Speak with a natural Nigerian English accent, using local expressions and intonation patterns typical of educated Nigerians."
      },
      yoruba_accent_english: {
        voiceId: "9BWtsMINqrJLrRacOk9x", // Aria
        prompt: "Speak English with subtle Yoruba accent influences, incorporating Yoruba cultural context and expressions where appropriate."
      },
      igbo_accent_english: {
        voiceId: "XB0fDUnXU5powFXDhCwa", // Charlotte
        prompt: "Speak English with gentle Igbo accent characteristics, reflecting Eastern Nigerian speech patterns and cultural nuances."
      },
      hausa_accent_english: {
        voiceId: "TX3LPaxmHKxFdv7VOQHJ", // Liam
        prompt: "Speak English with Northern Nigerian Hausa accent influences, incorporating appropriate cultural context."
      },
      yoruba_native: {
        voiceId: "cgSgspJ2msm6clMCkdW9", // Jessica
        prompt: "Speak in fluent Yoruba with proper tonal pronunciation and cultural expressions."
      },
      igbo_native: {
        voiceId: "pFZP5JQG7iQjIQuC4Bku", // Lily
        prompt: "Speak in natural Igbo with correct tonal patterns and cultural expressions."
      },
      hausa_native: {
        voiceId: "nPczCjzI2devNBz1zQrb", // Brian
        prompt: "Speak in fluent Hausa with proper pronunciation and Northern Nigerian cultural context."
      }
    };

    const config = voiceConfig[language as keyof typeof voiceConfig] || voiceConfig.nigerian_english;

    // Generate speech with ElevenLabs
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + config.voiceId, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.8,
          style: 0.6,
          use_speaker_boost: true
        }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ElevenLabs API error: ${errorText}`);
    }

    // Convert audio to base64
    const audioBuffer = await response.arrayBuffer();
    const audioBase64 = btoa(String.fromCharCode(...new Uint8Array(audioBuffer)));

    return new Response(JSON.stringify({ 
      audioContent: audioBase64,
      language: language,
      voiceId: config.voiceId
    }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});