"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface BinaryBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
}

export const BinaryBackground = ({ 
  intensity = 'low', 
  speed = 'medium',
  className = ''
}: BinaryBackgroundProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Configure based on intensity
  const particleCount = {
    low: 8,
    medium: 15,
    high: 25
  }[intensity];

  // Configure based on speed
  const animationSpeed = {
    slow: { duration: 15, delay: 10 },
    medium: { duration: 10, delay: 8 },
    fast: { duration: 6, delay: 4 }
  }[speed];

  const opacity = {
    low: 'text-white/10',
    medium: 'text-white/20',
    high: 'text-white/30'
  }[intensity];

  // Don't render anything on the server to avoid hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(particleCount)].map((_, i) => (
        <motion.div
          key={`binary-bg-${i}`}
          className={`absolute font-mono text-sm font-bold ${opacity}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -200, -400],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: animationSpeed.duration + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * animationSpeed.delay,
            ease: "linear",
          }}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </motion.div>
      ))}
    </div>
  );
};
