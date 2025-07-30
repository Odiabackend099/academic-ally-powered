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
      {/* Waveform bars */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className={`
            bg-gradient-to-t from-gold/80 via-gold to-gold/90
            rounded-full transition-all duration-500
            ${isAnimating 
              ? 'animate-wave' 
              : 'opacity-50'
            }
          `}
          style={{
            width: '4px',
            height: `${20 + Math.sin(i * 0.8) * 18}px`,
            animationDelay: `${i * 0.15}s`,
            filter: 'drop-shadow(0 0 8px hsl(var(--gold) / 0.6))',
          }}
        />
      ))}
      
      {/* Enhanced Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/30 to-transparent rounded-full blur-md animate-glow-pulse"></div>
      
      {/* Pulsing orb in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 bg-gold rounded-full animate-glow-pulse opacity-80"></div>
      </div>
    </div>
  );
};

export default AnimatedWaveform;