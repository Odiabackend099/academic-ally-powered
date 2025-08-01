
import heroAiBackground from "@/assets/hero-ai-background.jpg";
import AnimatedWaveform from "@/components/AnimatedWaveform";
import Hero3DBackground from "@/components/Hero3DBackground";
import { useParallaxEffect, useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const offsetY = useParallaxEffect();
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation({ threshold: 0.1 });
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation({ 
    threshold: 0.2, 
    rootMargin: '0px 0px -50px 0px' 
  });
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${heroAiBackground})`,
          transform: `translateY(${offsetY * 0.3}px) scale(${1.05 + offsetY * 0.0001})`,
          filter: `blur(${Math.min(offsetY * 0.02, 3)}px)`
        }}
      />
      
      {/* Sophisticated overlay with depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/95"
        style={{
          background: `
            radial-gradient(ellipse at center top, hsl(var(--navy) / 0.7) 0%, hsl(var(--navy) / 0.9) 70%),
            linear-gradient(135deg, hsl(var(--navy) / 0.8) 0%, hsl(var(--navy-dark) / 0.95) 100%)
          `
        }}
      />
      
      {/* 3D Background Layer */}
      <Hero3DBackground className="opacity-60 mix-blend-screen" />
      
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gold rounded-full animate-float-elegant opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Content Container with professional animations */}
      <div 
        ref={contentRef}
        className={`
          relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
          transition-all duration-1500 ease-out
          ${contentVisible ? 'animate-fade-in-elegant' : 'opacity-0 translate-y-12'}
        `}
      >
        {/* Primary Content with staggered animations */}
        <div className="mb-8 sm:mb-12">
          {/* University Badge with magnetic hover */}
          <div 
            className={`
              inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 
              border border-white/30 hover:border-gold/50 transition-all duration-500 
              hover:bg-white/20 hover:scale-105 hover:shadow-lg hover:shadow-gold/20
              group cursor-pointer
              ${contentVisible ? 'animate-scale-in-bounce' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.2s' }}
          >
            <span className="text-gold text-sm font-semibold tracking-wider group-hover:scale-110 transition-transform duration-300">
              🏛️ UNIVERSITY BACKED
            </span>
          </div>
          
          {/* Main Headline with text reveal animation */}
          <div className="overflow-hidden">
            <h1 
              className={`
                text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight mb-8
                ${contentVisible ? 'animate-text-reveal' : 'opacity-0'}
              `}
              style={{ animationDelay: '0.4s' }}
            >
              <span className="block">WELCOME TO ODIA.DEV</span>
              <span className="block text-gold font-medium mt-2 hover:scale-105 transition-transform duration-500">
                NIGERIA'S VOICE AI PLATFORM
              </span>
            </h1>
          </div>
          
          {/* Value Proposition with sophisticated animations */}
          <div 
            className={`
              relative mb-10 
              ${contentVisible ? 'animate-slide-up-reveal' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.6s' }}
          >
            <p className="text-white/95 text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto mb-6 leading-relaxed font-light">
              Talk in Nigerian English, Yoruba, Hausa, Igbo accents—just type or speak with our AI agent ODIA.DEV
            </p>
            
            {/* Professional Waveform Container */}
            <div className="flex justify-center items-center mb-6 relative">
              <div className="relative group">
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gold/20 rounded-full blur-xl scale-150 animate-glow-sophisticated" />
                
                <AnimatedWaveform isAnimating={contentVisible} className="w-40 h-10 relative z-10" />
                
                {/* Sophisticated floating particles */}
                <div className="absolute -inset-4 pointer-events-none">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute w-1.5 h-1.5 bg-gold rounded-full animate-float-elegant opacity-60"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${20 + Math.sin(i) * 40}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${3 + i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <p className="text-white/80 text-sm font-medium">🎤 Switch to voice mode to hear natural pronunciation</p>
          </div>
          
          {/* Professional CTAs with magnetic hover */}
          <div 
            className={`
              flex flex-col sm:flex-row gap-6 justify-center items-center mb-10
              ${contentVisible ? 'animate-scale-reveal' : 'opacity-0'}
            `}
            style={{ animationDelay: '0.8s' }}
          >
            <button 
              onClick={() => scrollToSection('contact')}
              className="
                group w-full sm:w-auto bg-gradient-to-r from-gold to-gold/90 hover:from-gold/90 hover:to-gold 
                text-navy font-bold py-5 px-10 rounded-xl text-lg 
                transition-all duration-500 ease-out
                shadow-2xl shadow-gold/30 hover:shadow-gold/50 hover:shadow-2xl
                transform hover:scale-105 hover:-translate-y-2 active:scale-95
                relative overflow-hidden
                before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] 
                hover:before:translate-x-[100%] before:transition-transform before:duration-700
              "
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                Start Chat in Nigerian English
              </span>
            </button>
            
            <a 
              href="https://wa.me/+2348123456789?text=Hello%20ODIA%20AI!%20I'm%20interested%20in%20your%20voice%20AI%20solutions%20for%20my%20business.%20Please%20tell%20me%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="
                group w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-5 px-10 
                rounded-xl text-lg border-2 border-white/30 hover:border-white/60 backdrop-blur-md
                transition-all duration-500 ease-out
                hover:shadow-xl hover:shadow-white/20
                transform hover:scale-105 hover:-translate-y-2 active:scale-95
                relative overflow-hidden
              "
            >
              <span className="relative z-10 group-hover:scale-105 transition-transform duration-300">
                WhatsApp Demo
              </span>
            </a>
          </div>
          
          {/* Enhanced Social Proof with animations */}
          <div 
            className={`
              flex flex-col sm:flex-row justify-center items-center gap-8 text-white/90 text-sm font-medium
              ${contentVisible ? 'animate-fade-in-stagger' : 'opacity-0'}
            `}
            style={{ animationDelay: '1s' }}
          >
            {[
              { icon: '🎓', text: 'University Research Grade' },
              { icon: '🌍', text: '24/7 Nigerian Languages' },
              { icon: '🔒', text: 'Enterprise Security' }
            ].map((item, index) => (
              <div 
                key={index}
                className="
                  flex items-center gap-3 group hover:scale-110 transition-all duration-300
                  hover:text-white cursor-pointer
                "
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-gold rounded-full animate-glow-sophisticated group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute inset-0 w-3 h-3 bg-gold/50 rounded-full animate-ripple-effect" />
                </div>
                <span className="group-hover:tracking-wider transition-all duration-300">
                  {item.text}
                </span>
              </div>
            ))}
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
