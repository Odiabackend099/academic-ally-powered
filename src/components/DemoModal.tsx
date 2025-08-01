import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, PhoneOff, Mic } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface OdiaVoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OdiaVoiceModal = ({ isOpen, onClose }: OdiaVoiceModalProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const { toast } = useToast();

  const startVoiceConversation = async () => {
    try {
      setIsConnecting(true);
      
      // Simulate connection for demo purposes
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        toast({
          title: "Demo Mode",
          description: "Voice AI feature coming soon! Contact us for early access.",
        });
      }, 2000);
      
    } catch (error) {
      setIsConnecting(false);
      toast({
        title: "Demo Mode",
        description: "Voice AI feature coming soon! Contact us for early access.",
        variant: "destructive"
      });
      console.error('Demo mode:', error);
    }
  };

  const endVoiceConversation = () => {
    setIsConnected(false);
    toast({
      title: "Demo Ended",
      description: "Thanks for trying our demo! Contact us for full access.",
    });
  };

  const handleClose = () => {
    setIsConnected(false);
    setIsConnecting(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-foreground">
            ODIA AI Voice Assistant
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border-4 border-primary/30">
            <div className={`w-20 h-20 rounded-full ${
              isConnected ? 'bg-green-500 animate-pulse' : 
              isConnecting ? 'bg-yellow-500 animate-pulse' : 'bg-primary'
            } flex items-center justify-center`}>
              {isConnected ? (
                <Phone className="w-8 h-8 text-white" />
              ) : isConnecting ? (
                <Mic className="w-8 h-8 text-white animate-spin" />
              ) : (
                <Mic className="w-8 h-8 text-white" />
              )}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-foreground font-medium mb-2">
              {isConnected ? "Demo Mode - Voice AI Coming Soon!" : 
               isConnecting ? "Connecting to ODIA AI..." : 
               "Ready to try ODIA AI Demo"}
            </p>
            <p className="text-sm text-muted-foreground">
              {isConnected ? 
                "Contact our team for early access to full voice AI capabilities" :
                "Experience our next-generation voice AI technology"
              }
            </p>
          </div>
          
          <div className="flex gap-4">
            {isConnected ? (
              <Button
                onClick={endVoiceConversation}
                variant="destructive"
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                <PhoneOff className="w-4 h-4 mr-2" />
                End Demo
              </Button>
            ) : (
              <Button
                onClick={startVoiceConversation}
                disabled={isConnecting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Phone className="w-4 h-4 mr-2" />
                {isConnecting ? "Connecting..." : "Try Voice Demo"}
              </Button>
            )}
          </div>
          
          {isConnected && (
            <div className="flex items-center space-x-2 text-sm text-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span>Demo mode active - Contact us for full access</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OdiaVoiceModal;