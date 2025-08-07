"use client";
import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
}

export const Typewriter = ({ text, speed = 100, cursor = true }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isClient]);

  // Don't render anything until client-side to avoid hydration mismatch
  if (!isClient) {
    return <span className="font-mono">{text}</span>;
  }

  return (
    <span className="font-mono">
      {displayText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
}; 