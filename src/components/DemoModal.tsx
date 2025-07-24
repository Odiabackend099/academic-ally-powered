import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useConversation } from "@11labs/react";
import { Mic, MicOff, Phone, PhoneOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface OdiaVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OdiaVoiceModal = ({ isOpen, onClose }: OdiaVoiceModalProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const conversation = useConversation({
    onConnect: () => {
      setIsConnecting(false);
      toast({
        title: "Connected to ODIA AI",
        description: "You're now speaking with our voice assistant",
      });
    },
    onDisconnect: () => {
      toast({
        title: "Conversation Ended",
        description: "Thank you for trying ODIA AI",
      });
    },
    onError: (error) => {
      setIsConnecting(false);
      toast({
        title: "Connection Error",
        description: "Failed to connect to ODIA AI. Please try again.",
        variant: "destructive"
      });
      console.error('Voice conversation error:', error);
    }
  });

  const startVoiceConversation = async () => {
    try {
      setIsConnecting(true);
      
      // Get signed URL from our Supabase function
      const { data, error } = await supabase.functions.invoke('odia-voice-chat');
      
      if (error) throw error;
      
      if (!data.signed_url) {
        throw new Error('No signed URL received');
      }

      // Start conversation with ElevenLabs using signed URL
      await conversation.startSession({
        agentId: data.signed_url.split('agent_id=')[1]?.split('&')[0] || 'your-agent-id'
      });
    } catch (error) {
      setIsConnecting(false);
      toast({
        title: "Setup Error",
        description: "Please ensure ElevenLabs API key is configured",
        variant: "destructive"
      });
      console.error('Setup error:', error);
    }
  };

  const endVoiceConversation = async () => {
    await conversation.endSession();
  };

  useEffect(() => {
    if (!isOpen && conversation.status === 'connected') {
      endVoiceConversation();
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-navy">
            ODIA AI Voice Assistant
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-navy/20 flex items-center justify-center border-4 border-gold/30">
            <div className={`w-20 h-20 rounded-full ${
              conversation.status === 'connected' ? 'bg-green-500 animate-pulse' : 
              isConnecting ? 'bg-yellow-500 animate-pulse' : 'bg-gold'
            } flex items-center justify-center`}>
              {conversation.status === 'connected' ? (
                <Phone className="w-8 h-8 text-white" />
              ) : isConnecting ? (
                <Mic className="w-8 h-8 text-navy animate-spin" />
              ) : (
                <Mic className="w-8 h-8 text-navy" />
              )}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-navy font-medium mb-2">
              {conversation.status === 'connected' ? "Connected - Speak now!" : 
               isConnecting ? "Connecting to ODIA AI..." : 
               "Ready to connect with ODIA AI"}
            </p>
            <p className="text-sm text-muted-foreground">
              {conversation.status === 'connected' ? 
                "Ask about our voice AI solutions, partnerships, or schedule a demo" :
                "Click to start a real-time voice conversation with our AI assistant"
              }
            </p>
          </div>
          
          <div className="flex gap-4">
            {conversation.status === 'connected' ? (
              <Button
                onClick={endVoiceConversation}
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <PhoneOff className="w-4 h-4 mr-2" />
                End Conversation
              </Button>
            ) : (
              <Button
                onClick={startVoiceConversation}
                disabled={isConnecting}
                className="bg-gold hover:bg-gold/90 text-navy"
              >
                <Phone className="w-4 h-4 mr-2" />
                {isConnecting ? "Connecting..." : "Start Voice Chat"}
              </Button>
            )}
          </div>
          
          {conversation.isSpeaking && (
            <div className="flex items-center space-x-2 text-sm text-navy">
              <div className="w-2 h-2 bg-navy rounded-full animate-pulse"></div>
              <span>ODIA AI is speaking...</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OdiaVoiceModal;