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
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {/* Waveform bars */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className={`
            bg-gradient-to-t from-gold/80 to-gold 
            rounded-full transition-all duration-300
            ${isAnimating 
              ? `animate-[wave_1.5s_ease-in-out_infinite_${i * 0.1}s]` 
              : 'opacity-50'
            }
          `}
          style={{
            width: '3px',
            height: `${20 + Math.sin(i * 0.5) * 15}px`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      
      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent rounded-full blur-sm"></div>
    </div>
  );
};

export default AnimatedWaveform;