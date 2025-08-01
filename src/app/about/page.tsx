"use client";
import Link from "next/link";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-white to-purple-50 py-16 px-4">
      <motion.div 
        className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* 1. Engaging Introduction */}
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-6 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <img 
              src="/images/avatar.png" 
              alt="Vikram Singh Kainth - Power Platform Specialist" 
              className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-200 object-cover"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback placeholder */}
            <div className="w-32 h-32 rounded-full shadow-lg border-4 border-indigo-200 bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white text-2xl font-bold" style={{ display: 'none' }}>
              VK
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">Vikram Singh Kainth</h1>
            <h2 className="text-lg md:text-xl text-indigo-500 font-semibold mb-2">Senior Developer & Power Platform Specialist</h2>
            <p className="text-gray-700 mb-2">I help businesses automate, analyze, and grow with modern web and Power Platform solutions.</p>
            <motion.div 
              className="flex gap-3 mt-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/projects" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm">View Projects</Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/blog" className="bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-indigo-100">Read Blog</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 2. Personal Story & Professional Narrative */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">My Story</h3>
          <p className="text-gray-800 mb-4">
            With over 5 years of experience in software development, I’ve built solutions for startups, enterprises, and everything in between. My journey began with a passion for technology and a drive to solve real-world problems. Today, I specialize in Power Platform, React, and modern web technologies, blending technical expertise with a people-first approach.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Led automation projects that saved clients 1000+ hours annually</li>
            <li>Built data dashboards for actionable business insights</li>
            <li>Mentored junior developers and led cross-functional teams</li>
          </ul>
        </motion.section>

        {/* 3. Skills & Specializations */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Skills & Specializations</h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              { text: 'Power Apps', bg: 'bg-indigo-100', textColor: 'text-indigo-700' },
              { text: 'Power Automate', bg: 'bg-blue-100', textColor: 'text-blue-700' },
              { text: 'Power BI', bg: 'bg-yellow-100', textColor: 'text-yellow-700' },
              { text: 'React', bg: 'bg-purple-100', textColor: 'text-purple-700' },
              { text: 'SharePoint', bg: 'bg-green-100', textColor: 'text-green-700' },
              { text: 'TypeScript', bg: 'bg-gray-100', textColor: 'text-gray-700' },
              { text: 'Expo', bg: 'bg-black', textColor: 'text-white' }
            ].map((skill, index) => (
              <motion.span
                key={skill.text}
                className={`${skill.bg} ${skill.textColor} px-3 py-1 rounded text-xs font-mono`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                {skill.text}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* 4. Credibility & Social Proof */}
        <motion.section 
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">What Clients Say</h3>
          <div className="bg-indigo-50 rounded p-4 mb-3">
            <p className="italic text-indigo-900">“Vikram’s solutions transformed our workflow. We saved hundreds of hours and gained real-time insights.”</p>
            <span className="block text-xs text-indigo-700 mt-2">— Client, Acme Corp</span>
          </div>
          <div className="bg-purple-50 rounded p-4 mb-3">
            <p className="italic text-purple-900">“A true professional—creative, reliable, and always focused on results.”</p>
            <span className="block text-xs text-purple-700 mt-2">— Project Manager, Tech Solutions</span>
          </div>
        </motion.section>

        {/* 5. Next Steps & Contact */}
        <motion.section 
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <h3 className="text-xl font-bold text-indigo-700 mb-2">Let’s Connect</h3>
          <p className="text-gray-800 mb-4">Ready to collaborate or want to learn more? Reach out or explore my work below.</p>
          <motion.div 
            className="flex gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm">Contact Me</Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="mailto:your@email.com" className="bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-indigo-100">Email</a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded shadow text-sm hover:bg-blue-100">LinkedIn</a>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </main>
  );
} 