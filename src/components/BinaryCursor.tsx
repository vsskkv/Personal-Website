"use client";
import { useEffect, useRef, useCallback } from 'react';

export const BinaryCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const charIndexRef = useRef(0);
  
  const chars = ['v', 's', 'k'];

  const updateCursorPosition = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
    }
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    positionRef.current = { x: e.clientX, y: e.clientY };
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    animationRef.current = requestAnimationFrame(updateCursorPosition);
    
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '1';
    }
  }, [updateCursorPosition]);

  const handleMouseLeave = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '0';
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (cursorRef.current) {
      cursorRef.current.style.opacity = '1';
    }
  }, []);

  useEffect(() => {
    // Cycle through characters
    const charInterval = setInterval(() => {
      charIndexRef.current = (charIndexRef.current + 1) % chars.length;
      if (cursorRef.current) {
        cursorRef.current.textContent = chars[charIndexRef.current];
      }
    }, 600);

    // Add event listeners with passive option for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearInterval(charInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  return (
    <div
      ref={cursorRef}
      className="vsk-cursor"
      style={{
        opacity: 0,
        transform: 'translate3d(0px, 0px, 0)',
      }}
    >
      v
    </div>
  );
};