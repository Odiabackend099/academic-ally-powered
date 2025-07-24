import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, MicOff, Play, Pause } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In production, implement actual voice recording here
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    // In production, implement AI voice response playback here
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-navy">
            Try ODIA AI Voice Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex flex-col items-center space-y-6 py-6">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gold/20 to-navy/20 flex items-center justify-center border-4 border-gold/30">
            <div className={`w-20 h-20 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gold'} flex items-center justify-center`}>
              {isRecording ? (
                <MicOff className="w-8 h-8 text-white" />
              ) : (
                <Mic className="w-8 h-8 text-navy" />
              )}
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-navy font-medium mb-2">
              {isRecording ? "Listening..." : "Click to speak with ODIA AI"}
            </p>
            <p className="text-sm text-muted-foreground">
              Say "Hello ODIA" to start the conversation
            </p>
          </div>
          
          <div className="flex gap-4">
            <Button
              onClick={toggleRecording}
              variant={isRecording ? "destructive" : "default"}
              className="bg-gold hover:bg-gold/90 text-navy"
            >
              {isRecording ? "Stop Recording" : "Start Demo"}
            </Button>
            
            {!isRecording && (
              <Button
                onClick={togglePlayback}
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-navy"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play Sample"}
              </Button>
            )}
          </div>
          
          <div className="text-xs text-center text-muted-foreground">
            <p>This is a demo version. Full functionality requires API integration.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;