
import womanExecutive from "@/assets/woman-executive.jpg";
import { Button } from "@/components/ui/button";

const IntellectualExcellenceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <img 
                src={womanExecutive} 
                alt="AI Research Professional" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Geometric Pattern Overlay */}
              <div className="absolute bottom-0 left-0 w-1/3 h-1/3 opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <pattern id="chevron" patternUnits="userSpaceOnUse" width="10" height="10">
                      <path d="M0,5 L5,0 L10,5 L5,10 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#chevron)" />
                </svg>
              </div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-navy rounded-full flex items-center justify-center hover:bg-navy-light transition-colors duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
                University-Backed Innovation
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
                INTELLECTUAL
                <br />
                EXCELLENCE.
                <br />
                EMOTIONAL
                <br />
                CONNECTION.
              </h2>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our difference is defined by the alignment of deep university research with the human 
                side of artificial intelligence. It is our academic foundation that drives the pursuit 
                of AI excellence – and equally important is our empathy, which guides us in understanding 
                each client's individual circumstances and creating voice AI that truly connects with Nigerian culture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                Our Story
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                ODIA AI Solutions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualExcellenceSection;
