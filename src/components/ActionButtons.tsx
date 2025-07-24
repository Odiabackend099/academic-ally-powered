import { useState } from "react";
import { Button } from "@/components/ui/button";
import OdiaVoiceModal from "./DemoModal";
import CallScheduler from "./CallScheduler";
import { MessageCircle, Mic, Calendar } from "lucide-react";

const ActionButtons = () => {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);
  const [isCallSchedulerOpen, setIsCallSchedulerOpen] = useState(false);

  const handleWhatsAppOnboarding = () => {
    const message = encodeURIComponent(
      "Hello ODIA AI! I'm interested in your voice AI solutions. I'd like to start the onboarding process. Please connect me with your team to discuss how your voice agents can transform my business operations."
    );
    window.open(`https://wa.me/+2348123456789?text=${message}`, '_blank');
  };

  const handleStartVoiceChat = () => {
    setIsVoiceModalOpen(true);
  };

  const handleScheduleCall = () => {
    setIsCallSchedulerOpen(true);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={handleWhatsAppOnboarding}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Start WhatsApp Onboarding
        </Button>
        
        <Button 
          onClick={handleStartVoiceChat}
          className="bg-gold hover:bg-gold/90 text-navy"
        >
          <Mic className="w-4 h-4 mr-2" />
          Start Voice Chat
        </Button>
        
        <Button 
          onClick={handleScheduleCall}
          variant="outline"
          className="border-gold text-gold hover:bg-gold hover:text-navy"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule Call with CEO
        </Button>
      </div>

      <OdiaVoiceModal 
        isOpen={isVoiceModalOpen} 
        onClose={() => setIsVoiceModalOpen(false)} 
      />
      
      <CallScheduler 
        isOpen={isCallSchedulerOpen} 
        onClose={() => setIsCallSchedulerOpen(false)} 
      />
    </>
  );
};

export default ActionButtons;