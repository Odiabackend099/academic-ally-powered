
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PressSection = () => {
  const articles = [
    {
      date: "January 15, 2025",
      title: "ODIA AI Partners with Mudiame International University for Research Excellence",
      image: "/api/placeholder/400/300",
      url: "https://odia.dev/press/mudiame-partnership"
    },
    {
      date: "December 20, 2024",
      title: "Nigeria's First Voice-Powered AI Infrastructure Company Launches",
      image: "/api/placeholder/400/300",
      url: "https://odia.dev/press/company-launch"
    },
    {
      date: "November 10, 2024",
      title: "ODIA AI Announces Global Partnerships with Cross AI International",
      image: "/api/placeholder/400/300",
      url: "https://odia.dev/press/global-partnerships"
    }
  ];

  const handleReadMore = (url: string) => {
    const route = url.replace('https://odia.dev', '');
    window.open(route, '_self');
  };

  return (
    <section id="press" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 bg-navy">
                {/* Mountain silhouette placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy-light to-navy">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <path 
                      d="M0,300 L0,200 L50,150 L100,180 L150,120 L200,140 L250,100 L300,130 L350,90 L400,110 L400,300 Z" 
                      fill="rgba(0,0,0,0.3)"
                    />
                    <path 
                      d="M0,300 L0,220 L80,170 L120,190 L180,140 L220,160 L280,120 L320,150 L400,130 L400,300 Z" 
                      fill="rgba(0,0,0,0.2)"
                    />
                  </svg>
                </div>
                
                {/* Content overlay */}
                <div className="absolute top-6 left-6 text-white">
                  <div className="text-lg font-semibold mb-1">ODIA AI</div>
                  <div className="text-sm opacity-80">{article.date}</div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-navy transition-colors duration-300">
                  {article.title}
                </h3>
                <Button 
                  variant="outline" 
                  className="w-full bg-gold text-gold-foreground border-gold hover:bg-gold/90"
                  onClick={() => handleReadMore(article.url)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
