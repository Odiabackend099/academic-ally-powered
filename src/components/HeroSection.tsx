
import heroMountains from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/01faf042-717a-47b7-98cc-6b68dc00bf59.png)` }}
      />
      
      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-navy/70" />
      
      {/* Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <pattern id="zigzag" patternUnits="userSpaceOnUse" width="20" height="20">
                <path d="M0,10 L10,0 L20,10 L20,20 L10,10 L0,20 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zigzag)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8">
          <p className="text-white/80 text-lg mb-4 tracking-wide">
            Powered by Mudiame International University
          </p>
          <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light tracking-wider leading-tight">
            NIGERIA'S FIRST
            <br />
            <span className="block">VOICE AI INFRASTRUCTURE</span>
          </h1>
        </div>
      </div>

      {/* Awards Section */}
      <div className="absolute bottom-0 left-0 right-0 bg-navy-dark/90 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-4 md:mb-0">
              <h3 className="text-lg font-medium mb-2">Academic Excellence & Global Partnerships</h3>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">🏛️ UNIVERSITY BACKED</div>
                <p className="text-white/80 text-sm">Powered by Mudiame International University</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-navy font-bold text-xs">Global Partners</span>
                </div>
                <p className="text-white/80 text-sm">Cross AI International & Intech Wealth Advisory AI</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-white/60 text-xs italic">
              ODIA AI is Nigeria's first voice-powered AI infrastructure company, backed by academic excellence and international partnerships. 
              Our university foundation ensures research-grade innovation and global standards. 
              <span className="underline cursor-pointer">Learn More</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
