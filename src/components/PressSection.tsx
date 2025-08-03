
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PressSection = () => {
  const articles = [
    {
      date: "January 15, 2025",
      title: "ODIA AI Partners with Mudiame International University for Research Excellence",
      image: "/src/assets/university-research-collaboration.jpg",
      url: "https://odia.dev/press/mudiame-partnership"
    },
    {
      date: "December 20, 2024",
      title: "Nigeria's First Voice-Powered AI Infrastructure Company Launches",
      image: "/src/assets/odia-company-launch.jpg",
      url: "https://odia.dev/press/company-launch"
    },
    {
      date: "November 10, 2024",
      title: "ODIA AI Announces Global Partnerships with Cross AI International",
      image: "/src/assets/global-partnership-meeting.jpg",
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
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"></div>
                
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
