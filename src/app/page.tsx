"use client";
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { Typewriter } from '@/components/Typewriter';
import { BinaryBackground } from '@/components/BinaryBackground';
import { HeroBackground } from '@/components/HeroBackground';
import { FloatingBinary } from '@/components/FloatingBinary';
import { SimpleAvatar } from '@/components/SimpleAvatar';
import ErrorBoundary, { FormErrorBoundary } from '@/components/ErrorBoundary';
import { powerIcons } from '@/lib/power-platform-icons';
import { projects } from './projects/data';
import { blogPosts } from './blog/data';
import { analytics } from '@/lib/analytics';


// --- Main Home Page Component ---
export default function Home() {
  // Set up scroll tracking
  useEffect(() => {
    if (typeof window !== 'undefined') {
      let maxScroll = 0;
      const milestones = [25, 50, 75, 90, 100];
      const tracked = new Set<number>();

      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;

          // Track milestones
          milestones.forEach(milestone => {
            if (scrollPercent >= milestone && !tracked.has(milestone)) {
              tracked.add(milestone);
              analytics.trackScrollDepth(milestone);
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  // Track time on page
  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 10) { // Only track if user spent more than 10 seconds
        analytics.trackTimeOnPage(timeSpent, 'home');
      }
    };
  }, []);





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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.a
          href="/#contact"
          onClick={() => analytics.trackContactClick('floating_button')}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="hidden sm:inline font-semibold text-sm">Let&apos;s Talk</span>
        </motion.a>
      </motion.div>

      {/* --- Hero Section --- */}
      {/* Animated name and hero area */}
      <motion.div
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* --- Background Animations --- */}
        <HeroBackground />
        <div className="text-center p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
          {/* Main name with curly braces - keeping them inline */}
          <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-2">
            <motion.div
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-white inline-flex items-center origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {'{'}
            </motion.div>
            {/* Name with typewriter effect */}
            <motion.div
              className="inline-block text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-mono text-white uppercase tracking-wider text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Typewriter text="VIKRAM SINGH KAINTH" speed={120} />
            </motion.div>
            <motion.div
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-mono text-white inline-flex items-center origin-right"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
            >
              {'}'}
            </motion.div>
          </div>

          {/* Tagline with curly brackets and typewriter */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center flex-wrap gap-1 sm:gap-2">
            <motion.div
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono text-indigo-200 inline-flex items-center origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 2.8, duration: 0.6, ease: 'easeOut' }}
            >
              {'{'}
            </motion.div>
            <motion.div
              className="inline-block text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-mono text-indigo-100 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.5 }}
            >
              <Typewriter text="Power Platform Specialist" speed={40} />
            </motion.div>
            <motion.div
              className="text-base sm:text-xl md:text-2xl lg:text-3xl font-mono text-indigo-200 inline-flex items-center origin-right"
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
        className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <BinaryBackground intensity="low" speed="slow" className="text-gray-400" />
        <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 order-2 md:order-1">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Developer Profile</h3>
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
          className="flex items-center justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ErrorBoundary>
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <SimpleAvatar
                src="/images/avatar.png"
                alt="Vikram Singh Kainth - Power Platform Specialist"
                fallbackInitials="VK"
              />
            </div>
          </ErrorBoundary>
        </motion.div>
      </motion.div>

      {/* --- Power Platform Auto-Scrolling Banner --- */}
      {/* Carousel of platform icons */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-purple-100 to-indigo-50 py-8 sm:py-12">
        <div
          className="flex gap-8 sm:gap-12 animate-scroll-x items-center"
          style={{ width: 'max-content' }}
        >
          {Array(3).fill(powerIcons).flat().map((icon, idx) => (
            <div key={idx} className="flex flex-col items-center min-w-[48px] sm:min-w-[64px]">
              <div className="scale-75 sm:scale-100">
                {icon.svg}
              </div>
              <span className="mt-1 sm:mt-2 text-xs text-gray-700 font-semibold text-center">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>



      {/* --- Featured Projects Showcase --- */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-indigo-100 to-purple-200 px-4 sm:px-6 relative overflow-hidden">
        <BinaryBackground intensity="low" speed="slow" className="text-indigo-300" />
        <FloatingBinary intensity="low" speed="slow" color="text-indigo-200" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700 mb-6 sm:mb-8 text-center relative z-10">Featured Projects</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
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
              <a
                href={`/projects/${project.slug}`}
                onClick={() => analytics.trackProjectView(project.slug)}
                className="mt-2 text-indigo-600 hover:underline font-semibold text-sm"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Latest Blog Excerpts --- */}
      <section className="w-full py-12 sm:py-16 md:py-20 bg-gradient-to-br from-purple-50 to-indigo-50 px-4 sm:px-6 relative overflow-hidden">
        <BinaryBackground intensity="medium" speed="medium" className="text-purple-400" />
        <FloatingBinary intensity="medium" speed="medium" color="text-purple-300" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Latest Insights & Thoughts</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">Sharing knowledge, experiences, and insights from my journey in Power Platform and modern web development.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
                <a
                  href={`/blog/${post.slug}`}
                  onClick={() => analytics.trackBlogView(post.slug)}
                  className="mt-4 text-purple-700 hover:text-purple-800 font-semibold text-sm flex items-center gap-2 group"
                >
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
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* --- Skills Snapshot & Statistics --- */}
      <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-purple-50 to-indigo-100 px-4 sm:px-6 relative overflow-hidden">
        <BinaryBackground intensity="low" speed="slow" className="text-indigo-300" />
        <FloatingBinary intensity="low" speed="slow" color="text-indigo-200" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700 mb-6 sm:mb-8 text-center relative z-10">Skills Snapshot</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 relative z-10">
          {/* Progress Bars */}
          <div className="flex flex-col gap-6">
            {[
              { name: 'Power Platform', projects: 25, colorClass: 'bg-indigo-500' },
              { name: 'React', projects: 8, colorClass: 'bg-blue-500' },
              { name: 'TypeScript', projects: 6, colorClass: 'bg-purple-500' },
              { name: 'SharePoint', projects: 12, colorClass: 'bg-emerald-500' },
              { name: 'Expo', projects: 3, colorClass: 'bg-gray-800' }
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
              {powerIcons.slice(0, 7).map((icon, idx) => (
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
      <section id="contact" className="w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-12 sm:py-16 md:py-24 px-4 sm:px-6 flex justify-center items-center relative overflow-hidden">
        <BinaryBackground intensity="low" speed="slow" className="text-indigo-300" />
        <FloatingBinary intensity="low" speed="slow" color="text-indigo-200" />
        <div className="w-full flex justify-center relative z-10">
          <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-indigo-700 mb-2 text-center">Contact Me</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 text-center">Let&apos;s work together! Reach out via the form below.</p>


            <FormErrorBoundary>
              <form
                action="https://formspree.io/f/xeozrore"
                method="POST"
                className="flex flex-col gap-4 sm:gap-6"
                onSubmit={() => analytics.trackFormSubmission('contact_form')}
              >
                <input type="hidden" name="_redirect" value="https://vikramsinghkainth.com/#contact" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />

                {/* Name and Contact Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                  <select
                    name="contactType"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 bg-white text-sm sm:text-base"
                    required
                  >
                    <option value="">I&apos;m reaching out as...</option>
                    <option value="recruiter">Recruiter / Hiring Manager</option>
                    <option value="industry">Industry Professional</option>
                    <option value="client">Potential Client</option>
                    <option value="collaboration">Collaboration Opportunity</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Company and Role (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    placeholder="Company (Optional)"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    name="role"
                    placeholder="Your Role (Optional)"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                {/* Project Type (for clients) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select
                    name="projectType"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 bg-white text-sm sm:text-base"
                  >
                    <option value="">Project Type (If applicable)</option>
                    <option value="power-platform">Power Platform Development</option>
                    <option value="web-development">Web Development</option>
                    <option value="automation">Process Automation</option>
                    <option value="consulting">Consulting</option>
                    <option value="training">Training</option>
                    <option value="other">Other</option>
                  </select>
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Timeline (Optional)"
                    className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Tell me about your opportunity, project, or how I can help you..."
                  rows={5}
                  className="border border-gray-300 rounded-md px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                  required
                />

                <button
                  type="submit"
                  className="mt-2 sm:mt-4 font-semibold py-2 sm:py-3 rounded-md shadow-md transition-colors bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 text-sm sm:text-base"
                >
                  Send Message
                </button>
              </form>
            </FormErrorBoundary>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-6 mt-0 relative overflow-hidden">
        <BinaryBackground intensity="medium" speed="slow" className="text-white opacity-20" />
        <FloatingBinary intensity="medium" speed="slow" color="text-white opacity-30" />
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-2 px-4 relative z-10">
          <span className="font-semibold">© 2024 Vikram Singh Kainth</span>
          <span className="text-sm opacity-80">Built with Next.js & React</span>
        </div>
      </footer>
    </>
  );
}
