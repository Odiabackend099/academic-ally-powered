import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, MessageCircle, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { sanitizeInput, checkRateLimit } from "@/utils/validation";
import { useIsMobile } from "@/hooks/use-mobile";
import nigerianFemaleAvatar from "@/assets/nigerian-female-avatar.jpg";

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm ODIA AI, your Nigerian AI Assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!message.trim() || isLoading) return;

    // Rate limiting check
    if (!checkRateLimit('chat_message', 10)) {
      toast({
        title: "Rate Limited",
        description: "Please wait before sending another message.",
        variant: "destructive"
      });
      return;
    }

    // Sanitize input
    const sanitizedMessage = sanitizeInput(message);
    
    const userMessage: Message = {
      text: sanitizedMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    try {
      // Call your production AI endpoint here
      const { data, error } = await supabase.functions.invoke('odia-voice-chat', {
        body: { 
          message: sanitizedMessage,
          context: 'chat'
        }
      });

      if (error) throw error;

      const aiMessage: Message = {
        text: data?.response || "Thank you for your message. Our team will get back to you soon!",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      // Fallback responses for production
      const fallbackResponses = [
        "Thank you for your interest! Our AI solutions can transform your business operations. Would you like to schedule a demo?",
        "ODIA specializes in AI-powered solutions for Nigerian businesses. How can we help your organization?",
        "We offer multilingual AI support and can integrate with your existing systems. What specific use case interests you?",
        "Our AI infrastructure is helping businesses across Nigeria. Let's discuss how we can help your company grow.",
        "As Nigeria's leading AI company, we understand local business needs. How can we assist you today?"
      ];
      
      const aiMessage: Message = {
        text: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatWidgetSize = isMobile 
    ? "fixed inset-x-4 bottom-4 top-16 z-50" 
    : "fixed bottom-6 right-6 z-50 w-96 h-[500px] max-h-[80vh]";

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-200"
            size="icon"
            data-chat-widget
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={chatWidgetSize}>
          <Card className="h-full flex flex-col shadow-xl border-2 border-border bg-background">
            <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img 
                    src={nigerianFemaleAvatar} 
                    alt="ODIA AI Assistant" 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">ODIA AI Assistant</h3>
                    <p className="text-xs text-primary-foreground/80">Online</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground hover:bg-primary-foreground/20"
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
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 opacity-70`}>
                        {msg.timestamp.toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-border">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-background"
                    disabled={isLoading}
                  />
                  
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    disabled={!message.trim() || isLoading}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
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