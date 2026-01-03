"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';
import { Industry } from '../data';

export default function IndustryClient({ industry }: { industry: Industry }) {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative">
      <BinaryBackground intensity="low" speed="slow" className="text-gray-400" />
      <FloatingBinary intensity="low" speed="slow" color="text-gray-300" />

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img 
                src="/Venture Consultancy logo RB.png" 
                alt="Venture Consultancy Logo" 
                className="max-w-[150px] sm:max-w-[200px] h-auto"
              />
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {industry.title}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-indigo-600 font-semibold mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {industry.heroText}
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/venture-consultancy/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center text-lg"
              >
                {industry.ctaText}
              </Link>
              <Link
                href="/venture-consultancy/health-check"
                className="bg-white text-indigo-600 border-2 border-indigo-600 font-bold px-8 py-4 rounded-lg hover:bg-indigo-50 transition-all duration-300 text-center text-lg"
              >
                Free 15-Min Health Check
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Common Challenges for {industry.name}
          </motion.h2>
          
          <div className="grid gap-4">
            {industry.problems.map((problem, idx) => (
              <motion.div
                key={idx}
                className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400 flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-red-500 text-2xl font-bold">×</span>
                <p className="text-red-900 text-lg font-medium">{problem}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-indigo-50/30">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            How I help {industry.name} scale with Microsoft 365
          </motion.h2>
          <p className="text-gray-600 text-lg">Practical, fixed-scope automation built for your specific needs.</p>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          {industry.solutions.map((solution, idx) => (
            <motion.div
              key={solution.title}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="relative z-10 py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Result: A more efficient, profitable practice.
          </motion.h2>
          
          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {industry.outcomes.map((outcome, idx) => (
              <motion.div
                key={idx}
                className="bg-green-50 p-6 rounded-xl border border-green-100 flex items-start gap-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-green-600 text-2xl">✓</span>
                <p className="text-green-900 font-bold text-lg">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4 sm:px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Reclaim your team&apos;s time.
          </motion.h2>
          <motion.p
            className="text-xl mb-10 opacity-90 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Book a free 15-minute consultation. I&apos;ll show you exactly how to automate your manual processes using the tools you already pay for.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4"
          >
            <Link
              href="/venture-consultancy/contact"
              className="bg-white text-indigo-600 font-bold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block text-lg"
            >
              {industry.ctaText}
            </Link>
            <p className="text-sm font-semibold italic text-indigo-100 opacity-90">No sales pitch • No pressure • Just practical advice</p>
          </motion.div>
        </div>
      </section>

      {/* Footer Navigation */}
      <footer className="relative z-10 py-12 px-4 sm:px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img src="/Venture Consultancy logo RB.png" alt="Venture Consultancy Logo" className="h-8 w-auto" />
            <p className="text-gray-500 font-medium">Industry-Specific Solutions</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/venture-consultancy" className="text-gray-600 hover:text-indigo-600 font-medium">Home</Link>
            <Link href="/venture-consultancy/services" className="text-gray-600 hover:text-indigo-600 font-medium">Services</Link>
            <Link href="/venture-consultancy/health-check" className="text-gray-600 hover:text-indigo-600 font-medium">Health Check</Link>
            <Link href="/venture-consultancy/contact" className="text-gray-600 hover:text-indigo-600 font-medium">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
