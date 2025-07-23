
import africanManExecutive from "@/assets/african-man-executive.jpg";
import { Button } from "@/components/ui/button";

const WhatWeDoSection = () => {
  return (
    <section id="ai-solutions" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
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

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Applying our university-backed research expertise and leveraging our vast AI network, we develop 
                customized voice AI solutions that utilize both public cloud infrastructure and exclusive private 
                AI models. From Agent Lexi to Agent ODIA, from emergency response systems to intelligent business 
                automation, we are on a quest to revolutionize how Nigeria experiences artificial intelligence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                The ODIA Difference
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                AI-Forward Experience
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={africanManExecutive} 
                alt="African AI Executive presenting voice AI solutions" 
                className="w-full h-[600px] object-cover"
              />
              
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
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
