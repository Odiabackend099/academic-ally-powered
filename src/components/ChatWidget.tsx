
import { useState, useRef, useEffect } from 'react';
import { useConversation } from '@11labs/react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, MessageCircle, Mic, MicOff, Phone, PhoneOff, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; timestamp: Date }>>([
    {
      text: "Hello! I'm ODIA AI Assistant, Nigeria's first voice AI infrastructure. I can help you with voice agents, WhatsApp automation, emergency response solutions, and more. Try voice mode to experience our real-time voice AI!",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [isVoiceMode, setIsVoiceMode] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const conversation = useConversation({
    onConnect: () => {
      toast({
        title: "Voice Connected",
        description: "You can now speak with ODIA AI",
      });
      setIsVoiceMode(true);
    },
    onDisconnect: () => {
      toast({
        title: "Voice Disconnected", 
        description: "Voice conversation ended",
      });
      setIsVoiceMode(false);
    },
    onMessage: (message) => {
      if (message.source === 'ai' && message.message) {
        setMessages(prev => [...prev, {
          text: message.message,
          isUser: false,
          timestamp: new Date()
        }]);
      }
    },
    onError: (error) => {
      toast({
        title: "Voice Error",
        description: "Failed to connect voice AI. Please check your API key.",
        variant: "destructive"
      });
      console.error('Voice conversation error:', error);
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = {
      text: message,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');

    // Simulate AI response for text chat
    setTimeout(() => {
      const responses = [
        "Thank you for your interest! Our voice AI agents (Lexi, ODIA, MISS, Atlas, and Miss Legal) can transform your business operations. Would you like to schedule a demo with CEO Austyn Eguale?",
        "ODIA AI specializes in voice-powered solutions for Nigerian businesses. Our agents handle customer service, sales, healthcare, emergency response, and legal assistance 24/7 with natural Nigerian accents.",
        "We offer multilingual support (English, Pidgin, Hausa, Yoruba, Igbo) and can integrate with your existing systems. What specific use case are you interested in exploring?",
        "Our voice AI infrastructure is already helping businesses across Nigeria. We're partnered with Mudiame University, Cross AI International, and Intech Wealth. Let me connect you with our team for a personalized consultation.",
        "Cross AI Protect provides emergency response coordination, while our WhatsApp automation handles business communications. Which solution interests you most?",
        "As Nigeria's first voice AI infrastructure company, we understand local business contexts and cultural nuances. Try our voice mode to experience the difference!"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        text: randomResponse,
        isUser: false,
        timestamp: new Date()
      }]);
    }, 1000);
  };

  const handleVoiceToggle = async () => {
    try {
      if (conversation.status === 'connected') {
        await conversation.endSession();
      } else {
        // Request microphone permission
        await navigator.mediaDevices.getUserMedia({ audio: true });
        
        // Get signed URL from our Supabase function (API key handled server-side)
        const { data, error } = await supabase.functions.invoke('odia-voice-chat');
        
        if (error) throw error;
        
        if (!data.signed_url) {
          throw new Error('No signed URL received');
        }

        // Start conversation with ElevenLabs using signed URL
        const conversationId = await conversation.startSession({
          signedUrl: data.signed_url
        });
      }
    } catch (error) {
      toast({
        title: "Voice Error",
        description: "Failed to start voice conversation. Please check your microphone permissions.",
        variant: "destructive"
      });
    }
  };


  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-navy hover:bg-navy-light text-white shadow-lg relative"
            size="icon"
            data-chat-widget
          >
            <MessageCircle className="w-8 h-8" />
            {conversation.status === 'connected' && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
            )}
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px]">
          <Card className="h-full flex flex-col shadow-xl border-2 border-navy/20">
            <CardHeader className="bg-navy text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src="/lovable-uploads/0464e30d-bd4b-47c1-8246-8503bd90c3d1.png" 
                    alt="ODIA AI" 
                    className="w-8 h-8"
                  />
                  <div>
                    <h3 className="font-semibold">ODIA AI Assistant</h3>
                    <p className="text-xs text-white/80">
                      {conversation.status === 'connected' ? 'Voice Active' : 'Online'}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        msg.isUser
                          ? 'bg-navy text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${
                        msg.isUser ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>


              {/* Input Area */}
              <div className="p-4 border-t">
                <div className="flex space-x-2 mb-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                    disabled={conversation.status === 'connected'}
                  />
                  
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={!message.trim() || conversation.status === 'connected'}
                    className="bg-navy hover:bg-navy-light text-white"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>

                {/* Voice Controls */}
                <div className="flex items-center justify-between">
                  <Button
                    onClick={handleVoiceToggle}
                    variant={conversation.status === 'connected' ? "destructive" : "outline"}
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    {conversation.status === 'connected' ? (
                      <>
                        <PhoneOff className="w-4 h-4" />
                        <span>End Voice</span>
                      </>
                    ) : (
                      <>
                        <Phone className="w-4 h-4" />
                        <span>Start Voice</span>
                      </>
                    )}
                  </Button>
                  
                  {conversation.isSpeaking && (
                    <div className="flex items-center space-x-2 text-sm text-navy">
                      <div className="w-2 h-2 bg-navy rounded-full animate-pulse"></div>
                      <span>AI is speaking...</span>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
