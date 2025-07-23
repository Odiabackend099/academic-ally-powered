
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PartnershipsSection = () => {
  const partnerships = [
    {
      name: "Mudiame International University",
      type: "Primary Academic Partner",
      description: "Our foundational partnership providing research excellence, academic credibility, and access to cutting-edge AI research programs.",
      benefits: ["Research Excellence", "Academic Credibility", "Student Programs", "Innovation Labs"],
      icon: "🏛️",
      gradient: "from-yellow-400 to-yellow-600",
      isPrimary: true
    },
    {
      name: "Cross AI International",
      type: "Global AI Partnership",
      description: "International collaboration bringing global AI standards and cross-border artificial intelligence solutions to Nigeria.",
      benefits: ["Global Standards", "International Reach", "AI Innovation", "Cross-Border Solutions"],
      icon: "🌍",
      gradient: "from-blue-400 to-blue-600",
      isPrimary: false
    },
    {
      name: "Intech Wealth Advisory AI",
      type: "Financial AI Partnership",
      description: "Strategic partnership specializing in financial AI applications, wealth management systems, and intelligent advisory services.",
      benefits: ["Financial AI", "Wealth Management", "Advisory Systems", "FinTech Integration"],
      icon: "💰",
      gradient: "from-green-400 to-green-600",
      isPrimary: false
    }
  ];

  return (
    <section id="partnerships" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
            Strategic Partnerships
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
            ACADEMIC EXCELLENCE
            <br />
            MEETS GLOBAL INNOVATION
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Our partnerships with leading academic institutions and international AI companies provide 
            the foundation for research-grade innovation and global-standard solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {partnerships.map((partnership, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                partnership.isPrimary ? 'ring-2 ring-gold/30 bg-gradient-to-br from-gold/5 to-transparent' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${partnership.gradient} flex items-center justify-center text-2xl mb-6 mx-auto`}>
                  {partnership.icon}
                </div>
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {partnership.name}
                  </h3>
                  <p className="text-sm text-gold font-medium mb-4">
                    {partnership.type}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partnership.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Key Benefits:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {partnership.benefits.map((benefit, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground bg-muted/30 px-2 py-1 rounded">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-gold text-gold hover:bg-gold hover:text-gold-foreground"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground mr-4"
          >
            Partnership Opportunities
          </Button>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
          >
            Contact Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
