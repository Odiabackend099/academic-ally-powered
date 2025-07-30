import React from 'react';

interface WaveformProps {
  isAnimating?: boolean;
  className?: string;
}

const AnimatedWaveform: React.FC<WaveformProps> = ({ 
  isAnimating = true, 
  className = "" 
}) => {
  return (
    <div className={`relative flex items-center justify-center gap-1 ${className}`}>
      {/* Professional waveform bars */}
      {Array.from({ length: 16 }, (_, i) => (
        <div
          key={i}
          className={`
            bg-gradient-to-t from-gold/70 via-gold to-gold/80
            rounded-full transition-all duration-700 ease-out
            ${isAnimating 
              ? 'animate-wave-sophisticated' 
              : 'opacity-40 scale-75'
            }
          `}
          style={{
            width: '3px',
            height: `${15 + Math.sin(i * 0.6) * 25}px`,
            animationDelay: `${i * 0.1}s`,
            filter: 'drop-shadow(0 0 12px hsl(var(--gold) / 0.8))',
            transform: isAnimating ? 'scaleY(1)' : 'scaleY(0.3)',
          }}
        />
      ))}
      
      {/* Multi-layered glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-full blur-lg animate-glow-sophisticated" />
        
        {/* Secondary subtle glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent rounded-full blur-2xl scale-150 animate-glow-sophisticated" style={{ animationDelay: '0.5s' }} />
        
        {/* Outer rim glow */}
        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-full blur-3xl scale-200 animate-glow-sophisticated" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Sophisticated center orb with pulse */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Main orb */}
          <div className="w-3 h-3 bg-gradient-to-br from-gold to-gold/80 rounded-full animate-glow-sophisticated shadow-lg shadow-gold/50" />
          
          {/* Expanding ring effect */}
          <div className="absolute inset-0 w-3 h-3 border border-gold/30 rounded-full animate-ripple-effect" />
          <div className="absolute inset-0 w-3 h-3 border border-gold/20 rounded-full animate-ripple-effect" style={{ animationDelay: '0.7s' }} />
        </div>
      </div>
      
      {/* Floating micro-particles */}
      {isAnimating && (
        <div className="absolute -inset-4 pointer-events-none">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full animate-float-elegant opacity-50"
              style={{
                left: `${10 + i * 15}%`,
                top: `${30 + Math.sin(i * 2) * 30}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + i * 0.3}s`
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimatedWaveform;