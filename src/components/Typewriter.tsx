"use client";
import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
  sound?: boolean;
}

export const Typewriter = ({ text, speed = 100, cursor = true, sound = false }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  // Initialize audio context for typewriter sound
  useEffect(() => {
    if (sound && typeof window !== 'undefined') {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }, [sound]);

  // Play typewriter sound
  const playTypewriterSound = () => {
    if (!sound || !audioContextRef.current) return;

    try {
      const audioContext = audioContextRef.current;
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
      oscillator.type = 'sine';

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.1);
    } catch (error) {
      console.log('Audio not supported or user interaction required');
    }
  };

  // Typing animation effect
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, idx + 1));
      
      // Play sound for each character (except spaces)
      if (sound && text[idx] !== ' ') {
        playTypewriterSound();
      }
      
      idx++;
      if (idx >= text.length) {
        clearInterval(interval);
        setIsComplete(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed, sound]);

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