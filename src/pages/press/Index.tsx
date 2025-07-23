import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PressIndex = () => {
  const navigate = useNavigate();

  const articles = [
    {
      date: "January 15, 2025",
      title: "ODIA AI Partners with Mudiame International University for Research Excellence",
      excerpt: "Strategic partnership establishes ODIA-Mudiame AI Research Center to advance AI research and development across West Africa.",
      url: "/press/mudiame-partnership"
    },
    {
      date: "December 20, 2024",
      title: "Nigeria's First Voice-Powered AI Infrastructure Company Launches",
      excerpt: "ODIA AI officially launches as Nigeria's pioneering voice AI company, introducing groundbreaking conversational AI agents for African markets.",
      url: "/press/company-launch"
    },
    {
      date: "November 10, 2024",
      title: "ODIA AI Announces Global Partnerships with Cross AI International",
      excerpt: "Strategic alliance with Cross AI International accelerates global expansion while maintaining commitment to African-centric AI development.",
      url: "/press/global-partnerships"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Press & News
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Latest updates and announcements from ODIA AI, Nigeria's first voice-powered AI infrastructure company.
            </p>
          </div>

          <div className="space-y-8">
            {articles.map((article, index) => (
              <Card key={index} className="group overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                        <Calendar className="h-4 w-4" />
                        {article.date}
                      </div>
                      
                      <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {article.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <Button 
                      onClick={() => navigate(article.url)}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 group-hover:scale-105 transition-transform duration-300"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Media Inquiries</h3>
              <p className="text-muted-foreground mb-6">
                For press inquiries, interviews, or additional information, please contact our media relations team.
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate("/#contact")}
              >
                Contact Media Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressIndex;