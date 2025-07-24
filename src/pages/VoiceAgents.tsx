import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Phone, MessageSquare, Shield, Users, Brain, Play, ArrowRight } from "lucide-react";

const VoiceAgents = () => {
  const agents = [
    {
      name: "Agent Lexi",
      role: "Customer Service Specialist",
      icon: <Users className="w-8 h-8 text-gold" />,
      description: "Handles customer inquiries, support tickets, and order management with empathetic responses and quick resolutions.",
      capabilities: ["Order Tracking", "Issue Resolution", "Product Information", "Refund Processing"],
      accent: "Nigerian English",
      availability: "24/7",
      languages: ["English", "Pidgin", "Hausa", "Yoruba", "Igbo"],
      industry: "E-commerce, Retail"
    },
    {
      name: "Agent ODIA",
      role: "Sales & Lead Generation",
      icon: <Phone className="w-8 h-8 text-gold" />,
      description: "Qualifies leads, schedules appointments, and drives sales conversations with natural persuasion techniques.",
      capabilities: ["Lead Qualification", "Appointment Scheduling", "Product Demos", "Sales Closing"],
      accent: "Professional Nigerian",
      availability: "24/7",
      languages: ["English", "Pidgin", "Hausa"],
      industry: "Real Estate, Insurance, Banking"
    },
    {
      name: "Agent MISS",
      role: "Healthcare Assistant",
      icon: <Brain className="w-8 h-8 text-gold" />,
      description: "Provides medical appointment scheduling, symptom assessment, and health information with HIPAA compliance.",
      capabilities: ["Appointment Booking", "Symptom Triage", "Health Information", "Prescription Reminders"],
      accent: "Caring Nigerian",
      availability: "24/7",
      languages: ["English", "Hausa", "Yoruba", "Igbo"],
      industry: "Healthcare, Telemedicine"
    },
    {
      name: "Agent Atlas",
      role: "Emergency Response Coordinator",
      icon: <Shield className="w-8 h-8 text-gold" />,
      description: "Coordinates emergency responses, dispatches first responders, and manages crisis communications.",
      capabilities: ["Emergency Triage", "Dispatch Coordination", "Crisis Management", "Multi-Agency Communication"],
      accent: "Authoritative Nigerian",
      availability: "24/7",
      languages: ["English", "Pidgin", "Hausa", "Yoruba", "Igbo"],
      industry: "Emergency Services, Government"
    },
    {
      name: "Agent Miss Legal",
      role: "Legal Assistant",
      icon: <MessageSquare className="w-8 h-8 text-gold" />,
      description: "Provides legal information, schedules consultations, and assists with document preparation and legal queries.",
      capabilities: ["Legal Information", "Document Preparation", "Consultation Scheduling", "Case Status Updates"],
      accent: "Professional Nigerian",
      availability: "Business Hours",
      languages: ["English", "Pidgin"],
      industry: "Legal Services, Law Firms"
    }
  ];

  const handleTryAgent = (agentName: string) => {
    const message = encodeURIComponent(
      `Hello! I'd like to try ${agentName} for my business. Can you provide more information about integration and pricing?`
    );
    window.open(`https://wa.me/+2348123456789?text=${message}`, '_blank');
  };

  const handleScheduleDemo = () => {
    window.open('mailto:demo@odia.ai?subject=Voice Agent Demo Request&body=I would like to schedule a demo of your voice agents.', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-gold/5">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-navy mb-6">
            Meet Our <span className="text-gold">Voice AI Agents</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our specialized voice AI agents are designed to handle specific business functions with 
            natural Nigerian accents and cultural understanding.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {agents.map((agent, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300 border-gold/20">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    {agent.icon}
                    <div>
                      <CardTitle className="text-navy text-xl">{agent.name}</CardTitle>
                      <p className="text-gold font-medium">{agent.role}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-gold text-gold">
                    {agent.availability}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  {agent.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-navy mb-3">Core Capabilities:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {agent.capabilities.map((capability, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full mr-2"></div>
                        {capability}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Languages:</h4>
                    <div className="flex flex-wrap gap-1">
                      {agent.languages.map((lang, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-2">Best For:</h4>
                    <p className="text-sm text-muted-foreground">{agent.industry}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button 
                    className="flex-1 bg-gold hover:bg-gold/90 text-navy"
                    onClick={() => handleTryAgent(agent.name)}
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Try {agent.name}
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-gold text-gold hover:bg-gold hover:text-navy"
                    onClick={handleScheduleDemo}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-navy text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Need a Custom Voice Agent?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            We can create specialized voice agents tailored to your specific industry, 
            use case, and business requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-navy"
              onClick={() => window.open('mailto:custom@odia.ai?subject=Custom Voice Agent Request', '_blank')}
            >
              Request Custom Agent
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-navy"
              onClick={handleScheduleDemo}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceAgents;