
import ceoAustinHeadshot from "@/assets/ceo-austin-headshot.jpg";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatWeDoSection = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation({ threshold: 0.2 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="ai-solutions" className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef}>
            <div 
              ref={titleRef}
              className={`mb-6 transition-all duration-1000 ${
                titleVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-60px]'
              }`}
            >
              <p className="text-muted-foreground text-sm font-medium tracking-wide uppercase mb-4">
                What We Do
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
                WE ARE YOUR CHIEF
                <br />
                AI
                <br />
                OFFICERS
              </h2>
            </div>

            <div 
              className={`prose prose-lg max-w-none mb-8 transition-all duration-1000 delay-200 ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[60px]'
              }`}
            >
              <p className="text-muted-foreground leading-relaxed mb-6">
                Led by CEO Austyn Eguale, we apply our university-backed research expertise and leverage our vast AI network 
                to develop customized voice AI solutions that utilize both public cloud infrastructure and exclusive private 
                AI models. From Agent Lexi to Agent ODIA, from emergency response systems to intelligent business 
                automation, we are on a quest to revolutionize how Nigeria experiences artificial intelligence.
              </p>
            </div>

            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                contentVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[60px]'
              }`}
            >
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group"
              >
                <span className="group-hover:animate-pulse">The ODIA Difference</span>
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg group"
              >
                <span className="group-hover:animate-pulse">AI-Forward Experience</span>
              </Button>
            </div>
          </div>

          {/* CEO Image */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 delay-300 ${
              imageVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[60px]'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src="/src/assets/ceo-austyn-presenting.jpg" 
                alt="CEO Austyn Eguale presenting ODIA AI's voice AI solutions" 
                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-navy/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-navy-light transition-all duration-500 hover:scale-125 hover:rotate-12 animate-float group-hover:shadow-2xl">
                  <svg className="w-8 h-8 text-white ml-1 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-gold rounded-full animate-float opacity-60"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-gold rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
