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
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    value: string;
  }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate particles only on client side
    const particleCount = {
      low: 8,
      medium: 15,
      high: 25
    }[intensity];

    const animationSpeed = {
      slow: { duration: 15, delay: 10 },
      medium: { duration: 10, delay: 8 },
      fast: { duration: 6, delay: 4 }
    }[speed];

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: animationSpeed.duration + Math.random() * 4,
      delay: Math.random() * animationSpeed.delay,
      value: Math.random() > 0.5 ? '1' : '0'
    }));

    setParticles(newParticles);
  }, [intensity, speed]);

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
      {particles.map((particle) => (
        <motion.div
          key={`binary-bg-${particle.id}`}
          className={`absolute font-mono text-sm font-bold ${opacity}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -200, -400],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
        >
          {particle.value}
        </motion.div>
      ))}
    </div>
  );
};
