"use client";
import { useState, useEffect } from 'react';
import { SkeletonLoader } from './SkeletonLoader';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
  showSkeleton?: boolean;
}

export const Typewriter = ({ text, speed = 100, cursor = true, showSkeleton = true }: TypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);
    // Small delay to show skeleton before starting typewriter
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isClient || isLoading) return;
    
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, speed, isClient, isLoading]);

  // Show skeleton loader while loading
  if (!isClient || (isLoading && showSkeleton)) {
    return (
      <span className="inline-block">
        <SkeletonLoader 
          width={`w-${Math.min(Math.floor(text.length * 0.5), 96)}`}
          height="h-6" 
          className="rounded-md"
        />
      </span>
    );
  }

  return (
    <span className="font-mono">
      {displayText}
      {cursor && currentIndex < text.length && <span className="animate-blink">|</span>}
    </span>
  );
}; 