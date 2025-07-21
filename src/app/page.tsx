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

  // Power Platform and related icon SVGs (placeholders)
  const powerIcons = [
    {
      name: 'Power Apps',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#742774" />
          <text x="24" y="28" textAnchor="middle" fontSize="12" fill="white" fontFamily="sans-serif">Apps</text>
        </svg>
      ),
    },
    {
      name: 'Power Automate',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#0066FF" />
          <text x="24" y="28" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">Automate</text>
        </svg>
      ),
    },
    {
      name: 'Power BI',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#F2C811" />
          <text x="24" y="28" textAnchor="middle" fontSize="14" fill="#333" fontFamily="sans-serif">BI</text>
        </svg>
      ),
    },
    {
      name: 'Power Pages',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#0078D4" />
          <text x="24" y="28" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">Pages</text>
        </svg>
      ),
    },
    {
      name: 'Dataverse',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#8A2DA5" />
          <text x="24" y="28" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">Dataverse</text>
        </svg>
      ),
    },
    {
      name: 'SharePoint',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#007C70" />
          <text x="24" y="28" textAnchor="middle" fontSize="10" fill="white" fontFamily="sans-serif">SharePoint</text>
        </svg>
      ),
    },
    {
      name: 'React Native',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#61DAFB" />
          <text x="24" y="28" textAnchor="middle" fontSize="10" fill="#222" fontFamily="sans-serif">React</text>
        </svg>
      ),
    },
    {
      name: 'Expo',
      svg: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="#000" />
          <text x="24" y="28" textAnchor="middle" fontSize="12" fill="#fff" fontFamily="sans-serif">Expo</text>
        </svg>
      ),
    },
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
            className="inline-block text-5xl md:text-8xl font-mono text-white mx-2 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Typewriter text="VIKRAM SINGH KAINTH" speed={120} />
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

      {/* Power Platform Auto-Scrolling Banner */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-purple-100 to-indigo-50 py-12">
        <div
          className="flex gap-12 animate-scroll-x items-center"
          style={{ width: 'max-content' }}
        >
          {Array(3).fill(powerIcons).flat().map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[64px]">
              {icon.svg}
              <span className="mt-2 text-xs text-gray-700 font-semibold">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects Showcase */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-100 to-purple-200 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-8 text-center">Featured Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-semibold text-lg">Project Title {i}</span>
              </div>
              <p className="text-gray-600 text-sm flex-1">Short description of the project goes here. Highlight the tech and impact.</p>
              <div className="flex gap-2 flex-wrap">
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-mono">React</span>
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-mono">Power Apps</span>
                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-mono">TypeScript</span>
              </div>
              <a href="#" className="mt-2 text-indigo-600 hover:underline font-semibold text-sm">View Project →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Blog Excerpts */}
      <section className="w-full py-16 bg-white px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-8 text-center">Latest Blog Excerpts</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-xl shadow p-6 flex flex-col gap-4">
              <span className="text-xs text-gray-500">2024-06-0{i}</span>
              <span className="font-semibold text-lg">Blog Post Title {i}</span>
              <p className="text-gray-700 text-sm flex-1">A short excerpt from the blog post goes here. This should entice the reader to click through.</p>
              <a href="#" className="mt-2 text-purple-700 hover:underline font-semibold text-sm">Read More →</a>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Snapshot & Statistics */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-50 to-indigo-100 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-8 text-center">Skills Snapshot</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Progress Bars */}
          <div className="flex flex-col gap-6">
            {[{name:'Power Platform',val:95,color:'indigo'},{name:'React',val:90,color:'blue'},{name:'TypeScript',val:85,color:'purple'},{name:'SharePoint',val:80,color:'emerald'},{name:'Expo',val:75,color:'black'}].map(skill => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.val}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className={`h-3 rounded-full bg-${skill.color}-500`} style={{width: `${skill.val}%`}}></div>
                </div>
              </div>
            ))}
          </div>
          {/* Icon Badges & Quick Stats */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {powerIcons.slice(0,7).map((icon, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  {icon.svg}
                  <span className="text-xs mt-1 text-gray-700 font-semibold">{icon.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-xs">
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <span className="block text-xl font-bold text-indigo-700">5+</span>
                <span className="text-xs text-gray-500">Years Experience</span>
              </div>
              <div className="bg-white rounded-lg shadow p-4 text-center">
                <span className="block text-xl font-bold text-indigo-700">20+</span>
                <span className="text-xs text-gray-500">Projects</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Me Section */}
      <section id="contact" className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-24 px-0 flex justify-center items-center">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2 text-center">Contact Me</h2>
            <p className="text-gray-600 mb-8 text-center">Let’s work together! Reach out via the form below.</p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                required
              />
              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2 rounded-md shadow-md hover:from-indigo-700 hover:to-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mt-0">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 px-4">
          <span className="font-semibold">© {new Date().getFullYear()} Vikram Singh Kainth</span>
          <span className="text-sm opacity-80">Built with Next.js & React</span>
        </div>
      </footer>

    </>
  );
}
