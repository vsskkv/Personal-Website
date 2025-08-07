"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingBinaryProps {
  intensity?: 'low' | 'medium' | 'high';
  speed?: 'slow' | 'medium' | 'fast';
  className?: string;
  color?: string;
}

export const FloatingBinary = ({ 
  intensity = 'low', 
  speed = 'medium',
  className = '',
  color = 'text-white/20'
}: FloatingBinaryProps) => {
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
      low: 6,
      medium: 12,
      high: 20
    }[intensity];

    const animationSpeed = {
      slow: { duration: 12, delay: 8 },
      medium: { duration: 8, delay: 6 },
      fast: { duration: 5, delay: 4 }
    }[speed];

    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: animationSpeed.duration + Math.random() * 3,
      delay: Math.random() * animationSpeed.delay,
      value: Math.random() > 0.5 ? '1' : '0'
    }));
    
    setParticles(newParticles);
  }, [intensity, speed]);

  if (!isClient) {
    return null;
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={`floating-binary-${particle.id}`}
          className={`absolute font-mono text-xs font-bold ${color}`}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [0, 0.4, 0],
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
