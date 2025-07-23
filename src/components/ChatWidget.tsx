
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { X, MessageCircle, Send } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm ODIA AI Assistant. How can I help you learn about our voice AI solutions?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      text: inputMessage,
      isBot: false,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        text: "Thank you for your interest! Our team will connect you with the right AI solution. Would you like to schedule a demo with CEO Austyn Eguale?",
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 rounded-full bg-navy hover:bg-navy-light text-white shadow-lg"
            size="icon"
          >
            <MessageCircle className="w-8 h-8" />
          </Button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 h-96">
          <Card className="h-full flex flex-col shadow-xl border-2 border-navy/20">
            <CardHeader className="bg-navy text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">ODIA AI Assistant</h3>
                  <p className="text-xs text-white/80">We're here to help!</p>
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
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isBot
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-navy text-white'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isBot ? 'text-gray-500' : 'text-white/70'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="bg-navy hover:bg-navy-light text-white"
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
