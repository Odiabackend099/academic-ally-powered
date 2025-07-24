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
    const ELEVENLABS_API_KEY = Deno.env.get('ELEVENLABS_API_KEY');
    if (!ELEVENLABS_API_KEY) {
      throw new Error('ElevenLabs API key not configured');
    }

    // Create a signed URL for ElevenLabs Conversational AI
    const response = await fetch("https://api.elevenlabs.io/v1/convai/conversation/get_signed_url", {
      method: "POST",
      headers: {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        agent_id: "your-odia-agent-id", // Replace with your actual agent ID
        // Custom prompt for ODIA AI
        overrides: {
          agent: {
            prompt: {
              prompt: `You are ODIA AI Assistant, Nigeria's first voice-powered AI infrastructure company. You are knowledgeable about:
              - ODIA AI's voice agent solutions (Agent Lexi, Agent ODIA, Agent MISS, Agent Atlas, Agent Miss Legal)
              - Nigerian business context and culture
              - Voice AI technology and implementations
              - Our partnerships with Mudiame University, Cross AI International, and Intech Wealth
              - Emergency response systems and Cross AI Protect
              - WhatsApp automation and business intelligence
              
              Speak with a professional Nigerian English accent. Be helpful, knowledgeable, and always aim to connect users with the right solutions. If asked about scheduling, direct them to CEO Austyn Eguale. For technical questions, offer to connect them with our technical team.
              
              Always maintain a friendly but professional tone, and be proud of being Nigeria's first voice AI infrastructure company.`
            },
            firstMessage: "Hello! I'm ODIA AI Assistant. How can I help you explore Nigeria's most advanced voice AI solutions today?",
            language: "en"
          },
          tts: {
            voiceId: "EXAVITQu4vr4xnSDxMaL" // Sarah - professional female voice
          }
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`ElevenLabs API error: ${errorText}`);
    }

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
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