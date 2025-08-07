"use client";
import Link from "next/link";
import { projects } from "./data";
import { motion } from "framer-motion";
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-4 relative">
      <BinaryBackground intensity="low" speed="medium" />
      <FloatingBinary intensity="low" speed="medium" color="text-indigo-200" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-8 text-center uppercase tracking-wider">Projects</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">A showcase of my featured work across academic research and game development.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <span className="font-semibold text-xl text-indigo-800">{project.title}</span>
              {project.date && (
                <span className="text-sm text-gray-500">{project.date}</span>
              )}
              {project.institution && (
                <span className="text-sm text-indigo-600 font-medium">{project.institution}</span>
              )}
              <p className="text-gray-700 flex-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-mono">{tech}</span>
                ))}
              </div>
              <div className="mt-2 flex justify-end">
                <Link
                  href={`/projects/${project.slug}`}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm"
                >
                  View Project
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 