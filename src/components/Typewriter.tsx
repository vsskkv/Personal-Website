"use client";
import { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
}

export const Typewriter = ({ text, speed = 100, cursor = true }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  // Typing animation effect
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, idx + 1));
      idx++;
      if (idx >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  // Blinking cursor effect
  useEffect(() => {
    if (!cursor || isComplete) return;
    const blink = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(blink);
  }, [cursor, isComplete]);

  // Support multiline text
  const lines = displayed.split('\n');

  return (
    <span className="whitespace-pre-wrap break-words">
      {lines.map((line, i) => (
        <span key={i}>
          {line}
          {i < lines.length - 1 && '\n'}
        </span>
      ))}
      {cursor && showCursor && !isComplete && <span className="animate-blink">|</span>}
    </span>
  );
}; 