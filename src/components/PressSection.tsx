import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PressSection = () => {
  const articles = [
    {
      date: "September 17, 2024",
      title: "IEQ Capital Recognized as a Top RIA by Barron's",
      image: "/api/placeholder/400/300"
    },
    {
      date: "January 03, 2025",
      title: "IEQ Capital Announces Key Partner Promotions",
      image: "/api/placeholder/400/300"
    },
    {
      date: "January 20, 2023",
      title: "IEQ Capital Welcomes Stone Point Capital as Strategic Partner",
      image: "/api/placeholder/400/300"
    }
  ];

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
                  <div className="text-lg font-semibold mb-1">IEQ Capital</div>
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