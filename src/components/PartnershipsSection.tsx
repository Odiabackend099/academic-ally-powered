
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PartnershipsSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation({ threshold: 0.1 });

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

  const handlePartnershipOpportunities = () => {
    window.open('mailto:partnerships@odia.dev?subject=Partnership Opportunity Inquiry', '_blank');
  };

  const handleContactPartnerships = () => {
    window.open('mailto:partnerships@odia.dev?subject=Partnership Contact Request', '_blank');
  };

  const handleLearnMore = (partnershipName: string) => {
    const routes: { [key: string]: string } = {
      'Mudiame International University': '/partnerships/mudiame',
      'Cross AI International': '/partnerships/cross-ai', 
      'Intech Wealth Advisory AI': '/partnerships/intech-wealth'
    };
    window.location.href = routes[partnershipName] || '/';
  };

  return (
    <section id="partnerships" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[60px]'
          }`}
        >
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

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-1000 delay-200 ${
            cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[60px]'
          }`}
        >
          {partnerships.map((partnership, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                partnership.isPrimary ? 'ring-2 ring-gold/30 bg-gradient-to-br from-gold/5 to-transparent animate-glow-pulse' : ''
              } ${cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[60px]'}`}
              style={{ animationDelay: `${index * 200 + 400}ms` }}
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
                  className="w-full border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group/btn"
                  onClick={() => handleLearnMore(partnership.name)}
                >
                  <span className="group-hover/btn:animate-pulse">Learn More</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground mr-4"
            onClick={handlePartnershipOpportunities}
          >
            Partnership Opportunities
          </Button>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
            onClick={handleContactPartnerships}
          >
            Contact Partnerships
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
