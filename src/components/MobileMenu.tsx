import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import { Menu, X, Home, Bot, Mic, BookOpen, Users, Globe, FileText, MessageCircle } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" />, type: "navigate" },
    { name: "AI Solutions", href: "/ai-solutions", icon: <Bot className="w-4 h-4" />, type: "navigate" },
    { name: "Voice Agents", href: "/voice-agents", icon: <Mic className="w-4 h-4" />, type: "navigate" },
    { name: "Our Story", href: "/our-story", icon: <BookOpen className="w-4 h-4" />, type: "navigate" },
    { name: "Team", href: "#team", icon: <Users className="w-4 h-4" />, type: "scroll" },
    { name: "Partnerships", href: "#partnerships", icon: <Globe className="w-4 h-4" />, type: "scroll" },
    { name: "Press", href: "#press", icon: <FileText className="w-4 h-4" />, type: "scroll" },
    { name: "Resources", href: "/resources", icon: <FileText className="w-4 h-4" />, type: "navigate" },
    { name: "Contact", href: "#contact", icon: <MessageCircle className="w-4 h-4" />, type: "scroll" },
  ];

  const handleNavigation = (item: { name: string; href: string; type: string }) => {
    setIsOpen(false);
    
    if (item.type === 'scroll') {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(item.href);
    }
  };

  const handleStartVoiceChat = () => {
    setIsOpen(false);
    const chatWidget = document.querySelector('[data-chat-widget]') as HTMLButtonElement;
    if (chatWidget) {
      chatWidget.click();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden text-white hover:text-gold">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 bg-navy border-l border-navy-light">
        <SheetHeader className="mb-8">
          <SheetTitle className="flex items-center space-x-3 text-white">
            <img 
              src="/lovable-uploads/0464e30d-bd4b-47c1-8246-8503bd90c3d1.png" 
              alt="ODIA AI Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold">ODIA AI</span>
          </SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="w-full justify-start text-white hover:text-gold hover:bg-white/10 px-4 py-3 h-auto"
              onClick={() => handleNavigation(item)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </Button>
          ))}

          <div className="border-t border-white/20 pt-4 mt-6">
            <Button 
              className="w-full bg-gold hover:bg-gold/90 text-navy font-semibold py-3"
              onClick={handleStartVoiceChat}
            >
              <Mic className="w-4 h-4 mr-2" />
              Start Voice Chat
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-white/70 text-sm mb-4">
              Nigeria's First Voice AI Infrastructure
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-gold"
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://wa.me/+2348123456789?text=Hello%20ODIA%20AI!', '_blank');
                }}
              >
                WhatsApp
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/70 hover:text-gold"
                onClick={() => {
                  setIsOpen(false);
                  window.open('mailto:info@odia.ai', '_blank');
                }}
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;