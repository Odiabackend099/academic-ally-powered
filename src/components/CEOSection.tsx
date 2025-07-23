
import ceoAustin from "@/assets/ceo-austin.jpg";
import { Button } from "@/components/ui/button";

const CEOSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-navy to-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* CEO Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg">
              <img 
                src={ceoAustin} 
                alt="CEO Austyn Eguale of ODIA AI - Leading Nigeria's Voice AI Revolution" 
                className="w-full h-[600px] object-cover"
              />
              
              {/* Speech Quote Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/95 to-transparent p-8">
                <blockquote className="text-white text-lg italic">
                  "We are not just building AI for Nigeria – we are building Nigeria's AI future."
                </blockquote>
                <p className="text-gold font-medium mt-2">- CEO Austyn Eguale</p>
              </div>
            </div>
          </div>

          {/* CEO Content */}
          <div>
            <div className="mb-6">
              <p className="text-white/60 text-sm font-medium tracking-wide uppercase mb-4">
                Leadership & Vision
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
                MEET CEO
                <br />
                <span className="text-gold">AUSTYN EGUALE</span>
                <br />
                LEADING NIGERIA'S
                <br />
                AI REVOLUTION
              </h2>
            </div>

            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-white/80 leading-relaxed mb-6">
                As CEO of ODIA AI, Austyn Eguale leads Nigeria's first voice-powered AI infrastructure company. 
                Under his visionary leadership, ODIA AI has pioneered African-centric AI solutions that understand 
                and serve Nigerian culture, languages, and business needs.
              </p>
              <p className="text-white/70 leading-relaxed">
                Backed by Mudiame International University's research excellence and international partnerships, 
                CEO Eguale drives innovation that puts Nigeria at the forefront of the global AI revolution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                className="border-gold text-gold hover:bg-gold hover:text-navy"
              >
                CEO's Vision Speech
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Leadership Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
