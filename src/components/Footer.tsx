
import { useNavigate } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, MessageCircle } from "lucide-react";
import nigerianFemaleAvatar from "@/assets/nigerian-female-avatar.jpg";

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "Voice AI Agents", action: () => navigate('/voice-agents') },
        { name: "AI Solutions", action: () => navigate('/ai-solutions') },
        { name: "WhatsApp Automation", action: () => scrollToSection('#contact') },
        { name: "Emergency Response", action: () => scrollToSection('#contact') },
        { name: "Custom Development", action: () => scrollToSection('#contact') }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Our Story", action: () => navigate('/our-story') },
        { name: "Leadership", action: () => navigate('/leadership-journey') },
        { name: "CEO Vision", action: () => navigate('/ceo-vision') },
        { name: "Partnerships", action: () => scrollToSection('#partnerships') },
        { name: "Press & Media", action: () => navigate('/press') }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Developer Resources", action: () => navigate('/resources') },
        { name: "Documentation", action: () => navigate('/resources') },
        { name: "API Reference", action: () => navigate('/resources') },
        { name: "System Status", action: () => handleExternalLink('https://status.odia.ai') },
        { name: "Support Portal", action: () => handleExternalLink('mailto:support@odia.ai') }
      ]
    },
    {
      title: "Contact",
      links: [
        { 
          name: "Lagos Office", 
          action: () => {}, 
          content: "Victoria Island, Lagos, Nigeria",
          icon: <MapPin className="w-4 h-4" />
        },
        { 
          name: "General Inquiries", 
          action: () => handleExternalLink('mailto:info@odia.ai'),
          content: "info@odia.ai",
          icon: <Mail className="w-4 h-4" />
        },
        { 
          name: "Sales & Partnerships", 
          action: () => handleExternalLink('mailto:sales@odia.ai'),
          content: "sales@odia.ai",
          icon: <Mail className="w-4 h-4" />
        },
        { 
          name: "WhatsApp", 
          action: () => handleExternalLink('https://wa.me/+2348123456789'),
          content: "+234 812 345 6789",
          icon: <MessageCircle className="w-4 h-4" />
        }
      ]
    }
  ];

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={nigerianFemaleAvatar} 
                alt="ODIA AI Logo" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-2xl font-bold tracking-wider">
                ODIA AI
              </div>
            </div>
            <p className="text-white/70 mb-6 text-sm leading-relaxed">
              Nigeria's first voice-powered AI infrastructure company. 
              Transforming businesses with intelligent voice agents and cultural AI.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => handleExternalLink('https://linkedin.com/company/odia-ai')}
                className="text-white/60 hover:text-gold transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleExternalLink('https://wa.me/+2348123456789')}
                className="text-white/60 hover:text-gold transition-colors duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-gold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.content ? (
                      <div className="flex items-start space-x-2">
                        {link.icon}
                        <div>
                          <button
                            onClick={link.action}
                            className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
                          >
                            {link.name}
                          </button>
                          <p className="text-white/50 text-xs mt-1">{link.content}</p>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={link.action}
                        className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-white/60 mb-4 md:mb-0 text-sm">
              © 2025 INTECH.ODIA LTD (Brand: ODIA AI). All Rights Reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <button 
                onClick={() => navigate('/privacy')} 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => navigate('/terms')} 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => navigate('/cookies')} 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Cookie Policy
              </button>
              <button 
                onClick={() => navigate('/security')} 
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                Security
              </button>
            </div>
          </div>

          {/* Compliance & University Backing */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <div className="grid md:grid-cols-2 gap-8 text-xs text-white/40">
              <div>
                <h4 className="text-white/60 font-medium mb-2">University Backed Innovation</h4>
                <p className="leading-relaxed">
                  ODIA AI is backed by Mudiame International University, ensuring research-grade 
                  innovation and academic excellence in artificial intelligence development.
                </p>
              </div>
              <div>
                <h4 className="text-white/60 font-medium mb-2">Compliance & Security</h4>
                <p className="leading-relaxed">
                  Fully compliant with NDPR (Nigeria Data Protection Regulation), GDPR, 
                  and international data privacy standards. Enterprise-grade security for all voice AI solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
