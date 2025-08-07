"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const HeroBackground = () => {
  const [isClient, setIsClient] = useState(false);
  const [binaryParticles, setBinaryParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    duration: number;
    delay: number;
    value: string;
  }>>([]);

  useEffect(() => {
    setIsClient(true);
    
    // Generate binary particles only on client side
    const particles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 10 + Math.random() * 6,
      delay: Math.random() * 8,
      value: Math.random() > 0.5 ? '1' : '0'
    }));
    
    setBinaryParticles(particles);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Floating Binary Code (1s and 0s) */}
      {binaryParticles.map((particle) => (
        <motion.div
          key={`binary-${particle.id}`}
          className="absolute text-white/30 font-mono text-sm font-bold"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -150, -300],
            opacity: [0, 0.8, 0],
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

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-white/10 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-white/10 transform rotate-45"
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Code Symbols */}
      <motion.div
        className="absolute top-1/3 right-1/3 text-white/10 text-4xl font-mono"
        animate={{
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'{'}
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 text-white/10 text-4xl font-mono"
        animate={{
          y: [0, 20, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        {'}'}
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/2 right-1/6 w-48 h-48 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </>
  );
};
