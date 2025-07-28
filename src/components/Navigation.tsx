
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const navigate = useNavigate();
  
  const navItems = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "AI Solutions", href: "/ai-solutions", type: "navigate" },
    { name: "Voice Agents", href: "/voice-agents", type: "navigate" },
    { name: "Our Story", href: "/our-story", type: "navigate" },
    { name: "Team", href: "#team", type: "scroll" },
    { name: "Partnerships", href: "#partnerships", type: "scroll" },
    { name: "Press", href: "#press", type: "scroll" },
    { name: "Resources", href: "/resources", type: "navigate" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  const handleNavigation = (item: { name: string; href: string; type: string }) => {
    if (item.type === 'scroll') {
      // Handle scroll navigation for home page sections
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
      // Handle page navigation
      navigate(item.href);
    }
  };

  const handleDemoLogin = () => {
    // Open ChatWidget or navigate to demo page
    const chatWidget = document.querySelector('[data-chat-widget]') as HTMLButtonElement;
    if (chatWidget) {
      // Trigger chat widget open
      chatWidget.click();
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector('#voice-demo');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer"
               onClick={() => navigate('/')}>
            <img 
              src="/lovable-uploads/0464e30d-bd4b-47c1-8246-8503bd90c3d1.png" 
              alt="ODIA AI Logo" 
              className="w-10 h-10"
            />
            <div className="text-white text-2xl font-bold tracking-wider">
              ODIA AI
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item)}
                className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
            <div className="h-6 w-px bg-white/30 mx-4" />
            <Button 
              variant="ghost" 
              className="text-white hover:text-gold hover:bg-transparent"
              onClick={handleDemoLogin}
            >
              Start Voice Chat
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
