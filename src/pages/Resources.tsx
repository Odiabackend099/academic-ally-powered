import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Code, BookOpen, Download, ExternalLink, Mic, Settings } from "lucide-react";

const Resources = () => {
  const resources = [
    {
      category: "Documentation",
      icon: <FileText className="w-6 h-6 text-gold" />,
      items: [
        {
          title: "Getting Started Guide",
          description: "Complete guide to implementing ODIA AI voice agents in your business",
          type: "PDF Guide",
          link: "mailto:docs@odia.ai?subject=Getting Started Guide Request"
        },
        {
          title: "API Documentation",
          description: "Technical documentation for developers integrating our APIs",
          type: "Technical Docs",
          link: "mailto:api@odia.ai?subject=API Documentation Request"
        },
        {
          title: "Best Practices",
          description: "Industry best practices for voice AI implementation",
          type: "Best Practices",
          link: "mailto:docs@odia.ai?subject=Best Practices Guide Request"
        }
      ]
    },
    {
      category: "Video Tutorials",
      icon: <Video className="w-6 h-6 text-gold" />,
      items: [
        {
          title: "Voice Agent Setup",
          description: "Step-by-step video guide for setting up your first voice agent",
          type: "Video Tutorial",
          link: "mailto:videos@odia.ai?subject=Video Tutorial Request"
        },
        {
          title: "WhatsApp Integration",
          description: "How to integrate voice AI with WhatsApp Business API",
          type: "Integration Guide",
          link: "mailto:videos@odia.ai?subject=WhatsApp Integration Video"
        },
        {
          title: "Emergency Response Setup",
          description: "Configuring Cross AI Protect for emergency services",
          type: "Security Training",
          link: "mailto:videos@odia.ai?subject=Emergency Response Training"
        }
      ]
    },
    {
      category: "Developer Tools",
      icon: <Code className="w-6 h-6 text-gold" />,
      items: [
        {
          title: "SDK & Libraries",
          description: "Software development kits for popular programming languages",
          type: "Development Tools",
          link: "mailto:sdk@odia.ai?subject=SDK Request"
        },
        {
          title: "Code Examples",
          description: "Sample code and implementation examples",
          type: "Code Samples",
          link: "mailto:examples@odia.ai?subject=Code Examples Request"
        },
        {
          title: "Testing Tools",
          description: "Tools for testing and validating voice AI implementations",
          type: "Testing Suite",
          link: "mailto:testing@odia.ai?subject=Testing Tools Request"
        }
      ]
    },
    {
      category: "Training Materials",
      icon: <BookOpen className="w-6 h-6 text-gold" />,
      items: [
        {
          title: "Voice AI Fundamentals",
          description: "Understanding voice AI technology and its applications",
          type: "Training Course",
          link: "mailto:training@odia.ai?subject=Training Course Request"
        },
        {
          title: "Customer Service Training",
          description: "Training materials for customer service voice agents",
          type: "Service Training",
          link: "mailto:training@odia.ai?subject=Customer Service Training"
        },
        {
          title: "Emergency Response Training",
          description: "Specialized training for emergency response coordination",
          type: "Emergency Training",
          link: "mailto:training@odia.ai?subject=Emergency Training Request"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Live Demo",
      description: "Try our voice AI agents in real-time",
      icon: <Mic className="w-5 h-5" />,
      action: "Start Demo",
      link: "#voice-demo"
    },
    {
      title: "System Status",
      description: "Check the current status of all ODIA AI services",
      icon: <Settings className="w-5 h-5" />,
      action: "Check Status",
      link: "https://status.odia.ai"
    },
    {
      title: "Support Portal",
      description: "Get help from our technical support team",
      icon: <ExternalLink className="w-5 h-5" />,
      action: "Get Support",
      link: "mailto:support@odia.ai?subject=Support Request"
    }
  ];

  const handleResourceRequest = (link: string) => {
    if (link.startsWith('mailto:')) {
      window.open(link, '_blank');
    } else if (link.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      // Handle internal links
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            Developer <span className="text-gold">Resources</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale voice AI solutions with ODIA AI. 
            From documentation to training materials, we've got you covered.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-gold/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  {link.icon}
                  <div>
                    <h3 className="font-semibold text-navy">{link.title}</h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </div>
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-navy"
                  onClick={() => handleResourceRequest(link.link)}
                >
                  {link.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center space-x-3 mb-8">
                {category.icon}
                <h2 className="text-2xl font-bold text-navy">{category.category}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className="h-full hover:shadow-lg transition-shadow duration-300 border-gold/20">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-navy text-lg">{item.title}</CardTitle>
                        <Badge variant="outline" className="border-gold text-gold">
                          {item.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col h-full">
                      <p className="text-muted-foreground mb-6 flex-grow">
                        {item.description}
                      </p>
                      <Button 
                        className="w-full bg-gold hover:bg-gold/90 text-navy"
                        onClick={() => handleResourceRequest(item.link)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Request Access
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Need Additional Resources?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Our team is ready to provide custom documentation, training, and support 
            tailored to your specific implementation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy"
              onClick={() => window.open('mailto:resources@odia.ai?subject=Custom Resource Request', '_blank')}
            >
              Request Custom Resources
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={() => window.open('https://wa.me/+2348123456789?text=I need help with ODIA AI resources', '_blank')}
            >
              WhatsApp Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;