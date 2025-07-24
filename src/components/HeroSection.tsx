
import heroMountains from "@/assets/hero-mountains.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/01faf042-717a-47b7-98cc-6b68dc00bf59.png)` }}
      />
      
      {/* Enhanced Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/70 to-navy/90" />
      
      {/* Content Container - Optimized for Mobile */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Primary Content - Progressive Disclosure Layer 1 */}
        <div className="mb-8 sm:mb-12">
          {/* University Badge - Credibility First */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
            <span className="text-gold text-sm font-medium tracking-wide">🏛️ UNIVERSITY BACKED</span>
          </div>
          
          {/* Main Headline - Mobile Optimized */}
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-6">
            NIGERIA'S FIRST
            <br />
            <span className="block text-gold font-medium">VOICE AI INFRASTRUCTURE</span>
          </h1>
          
          {/* Clear Value Proposition */}
          <p className="text-white/90 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
            Transform your business with university-backed AI that speaks your language
          </p>
          
          {/* Primary CTAs - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-navy font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Free Demo
            </button>
            <a 
              href="https://wa.me/+2348123456789?text=Hello%20ODIA%20AI!%20I'm%20interested%20in%20your%20voice%20AI%20solutions%20for%20my%20business.%20Please%20tell%20me%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg text-lg border border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              WhatsApp Demo
            </a>
          </div>
          
          {/* Quick Stats - Social Proof */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>University Research Grade</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>24/7 Nigerian Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gold rounded-full"></div>
              <span>Enterprise Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progressive Disclosure Layer 2 - Partnership Details */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-dark/95 to-transparent backdrop-blur-sm py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Academic Excellence */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-gold text-lg">🎓</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Mudiame International University</p>
                  <p className="text-white/60 text-xs sm:text-sm">Academic Research Foundation</p>
                </div>
              </div>
              
              {/* Global Partnerships */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-gold text-lg">🌍</span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Global AI Partners</p>
                  <p className="text-white/60 text-xs sm:text-sm">Cross AI International Network</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
