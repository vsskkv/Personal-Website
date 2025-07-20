import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Simple typewriter effect
type TypewriterProps = { text: string; speed?: number };
const Typewriter = ({ text, speed = 100 }: TypewriterProps) => {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, idx + 1));
      idx++;
      if (idx >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
};

// Home page with braces animation + typewriter
export default function Home() {
  return (
    <>
      <Head>
        <title>Vikram Singh Kainth | Developer Portfolio</title>
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600">
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
      </div>
    </>
  );
}
