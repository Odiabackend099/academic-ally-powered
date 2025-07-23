import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PressArticleProps {
  date: string;
  title: string;
  author: string;
  content: string;
  imageUrl?: string;
}

const PressArticle = ({ date, title, author, content, imageUrl }: PressArticleProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-8 text-primary hover:text-primary/80"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {date}
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {author}
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground leading-tight">
              {title}
            </h1>
          </header>

          {imageUrl && (
            <div className="relative h-96 bg-navy rounded-lg overflow-hidden">
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
              <div className="absolute top-6 left-6 text-white">
                <div className="text-2xl font-bold">ODIA AI</div>
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none">
            <div 
              className="text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>

          <footer className="border-t border-border pt-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">About ODIA AI</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                ODIA AI is Nigeria's first voice-powered AI infrastructure company, 
                pioneering advanced conversational AI solutions that transform how 
                businesses interact with technology across Africa.
              </p>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default PressArticle;