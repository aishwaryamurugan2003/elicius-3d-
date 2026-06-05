import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

interface AnimatedHeroBackgroundProps {
  image: string;
  overlayOpacity?: string;
  accentColor?: string;
}

const AnimatedHeroBackground: React.FC<AnimatedHeroBackgroundProps> = ({
  image,
  overlayOpacity = "bg-white/80 dark:bg-black/60",
  accentColor = "hsl(var(--primary))",
}) => {
  // Generate random particles for "Clean Air" representation
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
    }));
  }, []);

  // Generate some "Energy Lines" for intelligence representation
  const energyLines = useMemo(() => {
    return Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Cinematic Image Layer */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ 
          scale: [1.05, 1.15, 1.05],
          x: ['-1%', '1%', '-1%'],
          y: ['-0.5%', '0.5%', '-0.5%']
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Depth Overlay - Reduced opacity for better contrast */}
      <div className={`absolute inset-0 ${overlayOpacity}`} />

      {/* Energy Network Layer (SVG) */}
      <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
        {energyLines.map((line) => (
          <motion.line
            key={`line-${line.id}`}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={accentColor}
            strokeWidth="0.08"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{ 
              duration: Math.random() * 8 + 8, 
              repeat: Infinity, 
              delay: Math.random() * 5 
            }}
          />
        ))}
        {particles.map((p) => (
          <motion.circle
            key={`particle-${p.id}`}
            cx={p.x}
            cy={p.y}
            r={p.size / 15}
            fill={accentColor}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [p.y, p.y - 12], 
              x: [p.x, p.x + (Math.random() - 0.5) * 6]
            }}
            transition={{ 
              duration: p.duration * 0.8, 
              repeat: Infinity, 
              delay: p.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default AnimatedHeroBackground;
