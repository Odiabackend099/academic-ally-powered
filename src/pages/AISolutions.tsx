import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageSquare, Phone, Shield, Brain, Users, ArrowRight } from "lucide-react";

const AISolutions = () => {
  const solutions = [
    {
      icon: <Bot className="w-12 h-12 text-gold" />,
      title: "Voice AI Agents",
      description: "Deploy intelligent voice agents that handle customer service, sales, and support 24/7 with natural Nigerian English accents.",
      features: ["24/7 Availability", "Multilingual Support", "Natural Conversations", "Integration Ready"],
      cta: "Deploy Agent"
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-gold" />,
      title: "WhatsApp Automation",
      description: "Automate WhatsApp business communications with AI-powered chatbots that understand context and customer intent.",
      features: ["WhatsApp Business API", "Context Understanding", "Automated Responses", "Lead Qualification"],
      cta: "Start WhatsApp AI"
    },
    {
      icon: <Shield className="w-12 h-12 text-gold" />,
      title: "Emergency Response AI",
      description: "Cross AI Protect provides instant emergency response coordination with AI-powered triage and dispatch systems.",
      features: ["Instant Response", "Smart Triage", "Location Tracking", "Multi-Agency Coordination"],
      cta: "Learn More"
    },
    {
      icon: <Brain className="w-12 h-12 text-gold" />,
      title: "SmartBiz Intelligence",
      description: "Advanced business intelligence powered by AI to make data-driven decisions and optimize operations.",
      features: ["Real-time Analytics", "Predictive Insights", "Custom Dashboards", "Automated Reports"],
      cta: "Get Intelligence"
    },
    {
      icon: <Users className="w-12 h-12 text-gold" />,
      title: "Customer Experience AI",
      description: "Transform customer interactions with AI that understands emotions, context, and cultural nuances.",
      features: ["Emotion Detection", "Cultural Awareness", "Personalized Interactions", "Satisfaction Tracking"],
      cta: "Enhance CX"
    },
    {
      icon: <Phone className="w-12 h-12 text-gold" />,
      title: "Voice Infrastructure",
      description: "Complete voice AI infrastructure including telephony, speech recognition, and natural language processing.",
      features: ["Cloud-Based", "Scalable Architecture", "API Integration", "Real-time Processing"],
      cta: "Build Infrastructure"
    }
  ];

  const handleContactSales = () => {
    window.open('mailto:sales@odia.ai?subject=AI Solutions Inquiry&body=I am interested in learning more about ODIA AI solutions for my business.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            AI Solutions for <span className="text-gold">Modern Business</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your business operations with Nigeria's most advanced voice AI infrastructure. 
            From customer service to emergency response, we have the solutions you need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  {solution.icon}
                  <ArrowRight className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardTitle className="text-navy text-xl">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground mb-6 flex-grow">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-navy mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-navy"
                  onClick={handleContactSales}
                >
                  {solution.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join hundreds of Nigerian businesses already using ODIA AI to improve customer experience, 
            reduce costs, and scale operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy"
              onClick={handleContactSales}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={() => window.open('https://wa.me/+2348123456789', '_blank')}
            >
              WhatsApp Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISolutions;