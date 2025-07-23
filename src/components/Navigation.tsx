
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "AI Solutions", href: "#ai-solutions" },
    { name: "Voice Agents", href: "#voice-agents" },
    { name: "Our Story", href: "#our-story" },
    { name: "Team", href: "#team" },
    { name: "Partnerships", href: "#partnerships" },
    { name: "Press", href: "#press" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoLogin = () => {
    window.open('https://odia.dev/demo', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wider cursor-pointer"
               onClick={() => scrollToSection('#home')}>
            ODIA AI
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
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
              Demo Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
