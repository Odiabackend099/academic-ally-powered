import manExecutive from "@/assets/man-executive.jpg";
import { Button } from "@/components/ui/button";

const WhatWeDoSection = () => {
  return (
    <section id="what-we-do" className="py-20 bg-background">
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
                INVESTMENT
                <br />
                OFFICERS
              </h2>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Applying our expertise and leveraging our vast network, we strive to develop customized solutions 
                that can utilize both public markets and exclusive private investment opportunities. From sourcing, 
                negotiating, and structuring private investments, to monitoring portfolio performance and managing 
                risk tolerance, we are on a quest to surpass each client's financial objectives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                The IEQ Difference
              </Button>
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-gold-foreground"
              >
                Tech-Forward Experience
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={manExecutive} 
                alt="Executive speaking" 
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