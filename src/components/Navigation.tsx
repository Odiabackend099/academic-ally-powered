
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-bold tracking-wider">
            ODIA AI
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-gold transition-colors duration-300 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="h-6 w-px bg-white/30 mx-4" />
            <Button 
              variant="ghost" 
              className="text-white hover:text-gold hover:bg-transparent"
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
