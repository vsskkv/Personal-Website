"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';

// Simple typewriter effect
interface TypewriterProps {
  text: string;
  speed?: number;
  cursor?: boolean;
}
const Typewriter = ({ text, speed = 100, cursor = true }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

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

export default function Home() {
  // Lines for about section
  const aboutText = [
    "type Developer = {",
    "  name: 'Vikram Singh Kainth',",
    "  role: 'Senior Developer',",
    "  skills: ['Power Platform', 'Next.js', 'TypeScript'],",
    "};",
  ].join('\n');

  // Framer Motion variants for staggered line animations
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };
  const child = {
    hidden: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/pages/projects' },
    { name: 'Blog', href: '/pages/blog' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <Head>
        <title>Vikram Singh Kainth | Developer Portfolio</title>
      </Head>

      {/* Minimal Gradient Navigation Bar */}
      <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 flex items-center justify-between">
        <div className="flex-1" />
        <div className="flex gap-6">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white font-medium text-lg transition-colors hover:text-indigo-200 focus:text-indigo-200 focus:outline-none"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center p-8">
          <motion.div
            className="text-6xl md:text-8xl font-mono text-white inline-flex items-center origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {'{'}
          </motion.div>
          <motion.div
            className="inline-block text-4xl md:text-6xl font-mono text-white mx-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Typewriter text="Vikram Singh Kainth" speed={120} />
          </motion.div>
          <motion.div
            className="text-6xl md:text-8xl font-mono text-white inline-flex items-center origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
          >
            {'}'}
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="font-mono text-lg text-gray-800 bg-gray-100 p-6 rounded-lg">
          <Typewriter text={aboutText} speed={40} cursor={true} />
        </div>

        {/* Placeholder Image */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-48 h-48 bg-gray-300 rounded-full" />
        </motion.div>
      </motion.div>
    </>
  );
}
