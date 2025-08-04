"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';
import { Typewriter } from '@/components/Typewriter';
import { powerIcons } from '@/lib/power-platform-icons';
import { projects } from './projects/data';
import { blogPosts } from './blog/data';
import { useState } from 'react';

// --- Main Home Page Component ---
export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  // About section code snippet (displayed with typewriter effect)
  const aboutText = [
    "type Developer = {",
    "  name: 'Vikram Singh Kainth',",
    "  role: 'Senior Developer',",
    "  experience: '5+ years',",
    "  skills: ['Power Platform', 'React', 'TypeScript', 'Next.js'],",
    "  certifications: [",
    "    'Power Platform Functional Consultant',",
    "    'Power Platform App Maker',",
    "    'Power Platform Fundamentals'",
    "  ],",
    "  focus: 'Business Automation & Web Development',",
    "  education: 'BSc Computer Science - Aston University',",
    "};",
  ].join('\n');

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage(result.message);
        e.currentTarget.reset();
      } else {
        setFormStatus('error');
        setFormMessage(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
    }
  };

  // Framer Motion animation variants for hero section

  // Animation variants for skill icons
  const skillIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <>
      {/* --- SEO Head --- */}
      <Head>
        <title>Vikram Singh Kainth | Developer Portfolio</title>
      </Head>

      {/* --- Floating Contact Button --- */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.a
          href="/#contact"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="hidden sm:inline font-semibold">Let&apos;s Talk</span>
        </motion.a>
      </motion.div>

      {/* --- Hero Section --- */}
      {/* Animated name and hero area */}
      <motion.div 
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="text-center p-4 sm:p-6 md:p-8">
          {/* Left curly brace animation */}
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono text-white inline-flex items-center origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {'{'}
          </motion.div>
          {/* Name with typewriter effect */}
          <motion.div
            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-white mx-1 sm:mx-2 uppercase tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Typewriter text="VIKRAM SINGH KAINTH" speed={120} />
          </motion.div>
          {/* Right curly brace animation */}
          <motion.div
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-mono text-white inline-flex items-center origin-right"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
          >
            {'}'}
          </motion.div>
          {/* Tagline with curly brackets and typewriter */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-1 sm:gap-2">
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-indigo-200 inline-flex items-center origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.8, duration: 0.6, ease: 'easeOut' }}
            >
              {'{'}
            </motion.div>
            <motion.div
              className="inline-block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-mono text-indigo-100 mx-1 sm:mx-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.5 }}
            >
              <Typewriter text="Power Platform Specialist" speed={40} />
            </motion.div>
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-mono text-indigo-200 inline-flex items-center origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 4, duration: 0.6, ease: 'easeOut' }}
            >
              {'}'}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* --- About Section --- */}
      {/* Animated code snippet about you */}
      <motion.div 
        className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Developer Profile</h3>
            <div className="space-y-4">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <span className="text-gray-600 font-medium">Name:</span>
                  <span className="text-gray-900 font-semibold ml-2">
                    <Typewriter text="Vikram Singh Kainth" speed={50} />
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div>
                  <span className="text-gray-600 font-medium">Role:</span>
                  <span className="text-gray-900 font-semibold ml-2">
                    <Typewriter text="Senior Developer" speed={50} />
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div>
                  <span className="text-gray-600 font-medium">Experience:</span>
                  <span className="text-gray-900 font-semibold ml-2">
                    <Typewriter text="5+ years" speed={50} />
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-600 font-medium">Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['Power Platform', 'React', 'TypeScript', 'Next.js'].map((skill, idx) => (
                      <motion.span 
                        key={idx} 
                        className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.9 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <span className="text-gray-600 font-medium">Certifications:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {['Power Platform Functional Consultant', 'Power Platform App Maker', 'Power Platform Fundamentals'].map((cert, idx) => (
                      <motion.span 
                        key={idx} 
                        className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.3 + idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {cert}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <span className="text-gray-600 font-medium">Focus:</span>
                  <span className="text-gray-900 font-semibold ml-2">
                    <Typewriter text="Business Automation & Web Development" speed={50} />
                  </span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
                viewport={{ once: true }}
              >
                <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                <div>
                  <span className="text-gray-600 font-medium">Education:</span>
                  <span className="text-gray-900 font-semibold ml-2">
                    <Typewriter text="BSc Computer Science - Aston University" speed={50} />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* Profile image */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <img 
              src="/images/avatar.png" 
              alt="Vikram Singh Kainth - Power Platform Specialist" 
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
                if (nextSibling) {
                  nextSibling.style.display = 'block';
                }
              }}
            />
            {/* Fallback placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-4xl font-bold" style={{ display: 'none' }}>
              VK
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* --- Power Platform Auto-Scrolling Banner --- */}
      {/* Carousel of platform icons */}
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



      {/* --- Featured Projects Showcase --- */}
      <section className="w-full py-16 bg-gradient-to-r from-indigo-100 to-purple-200 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-8 text-center">Featured Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: idx * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-indigo-500"></span>
                <span className="font-bold text-xl text-gray-900">{project.title}</span>
              </div>
              {project.date && (
                <span className="text-sm text-gray-500">{project.date}</span>
              )}
              <p className="text-gray-600 text-sm flex-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-mono">{tech}</span>
                ))}
                {project.tech.length > 3 && (
                  <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-mono">+{project.tech.length - 3} more</span>
                )}
              </div>
              <a href={`/projects/${project.slug}`} className="mt-2 text-indigo-600 hover:underline font-semibold text-sm">View Project →</a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Latest Blog Excerpts --- */}
      <section className="w-full py-20 bg-gradient-to-br from-purple-50 to-indigo-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights & Thoughts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Sharing knowledge, experiences, and insights from my journey in Power Platform and modern web development.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {blogPosts.slice(0, 3).map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.15, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{post.date}</span>
                  <span className="text-xs text-purple-600 font-medium">BLOG</span>
                </div>
                <span className="font-bold text-xl text-gray-900 leading-tight">{post.title}</span>
                <p className="text-gray-700 text-sm flex-1 leading-relaxed">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="mt-4 text-purple-700 hover:text-purple-800 font-semibold text-sm flex items-center gap-2 group">
                  Read Full Article 
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <a 
              href="/blog" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* --- Skills Snapshot & Statistics --- */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-50 to-indigo-100 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-8 text-center">Skills Snapshot</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Progress Bars */}
          <div className="flex flex-col gap-6">
            {[
              {name:'Power Platform',projects:25,colorClass:'bg-indigo-500'},
              {name:'React',projects:8,colorClass:'bg-blue-500'},
              {name:'TypeScript',projects:6,colorClass:'bg-purple-500'},
              {name:'SharePoint',projects:12,colorClass:'bg-emerald-500'},
              {name:'Expo',projects:3,colorClass:'bg-gray-800'}
            ].map((skill, idx) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-xs text-gray-500">{skill.projects}+ projects</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-3 rounded-full ${skill.colorClass}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill.projects / 25) * 100}%` }}
                    transition={{ duration: 1, delay: idx * 0.15, ease: 'easeOut' }}
                    viewport={{ once: false }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Icon Badges & Quick Stats */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {powerIcons.slice(0,7).map((icon, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center"
                  variants={skillIconVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: idx * 0.12, duration: 0.4, type: 'spring' }}
                  viewport={{ once: false }}
                >
                  {icon.svg}
                  <span className="text-xs mt-1 text-gray-700 font-semibold">{icon.name}</span>
                </motion.div>
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

      {/* --- Contact Me Section --- */}
      <section id="contact" className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-24 px-0 flex justify-center items-center">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-2 text-center">Contact Me</h2>
            <p className="text-gray-600 mb-8 text-center">Let’s work together! Reach out via the form below.</p>
            {/* Status Message */}
            {formMessage && (
              <div className={`mb-4 p-4 rounded-md ${
                formStatus === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200' 
                  : 'bg-red-100 text-red-700 border border-red-200'
              }`}>
                {formMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                required
                disabled={formStatus === 'loading'}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500"
                required
                disabled={formStatus === 'loading'}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-gray-900 placeholder-gray-500"
                required
                disabled={formStatus === 'loading'}
              />
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className={`mt-2 font-semibold py-2 rounded-md shadow-md transition-colors ${
                  formStatus === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                }`}
              >
                {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mt-0">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 px-4">
          <span className="font-semibold">© 2024 Vikram Singh Kainth</span>
          <span className="text-sm opacity-80">Built with Next.js & React</span>
        </div>
      </footer>
    </>
  );
}
