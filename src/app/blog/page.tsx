"use client";
import Link from "next/link";
import { blogPosts } from "./data";
import { motion } from "framer-motion";
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-white to-purple-50 py-16 px-4 relative">
      <BinaryBackground intensity="low" speed="medium" />
      <FloatingBinary intensity="low" speed="medium" color="text-purple-200" />
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-8 text-center uppercase tracking-wider">Blog</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Insights, tutorials, and stories from my journey in tech.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, idx) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <span className="font-semibold text-xl text-purple-800">{post.title}</span>
              <span className="text-xs text-gray-500">{post.date}</span>
              <p className="text-gray-700 flex-1">{post.excerpt}</p>
              <div className="mt-2 flex justify-end">
                <Link
                  href={`/blog/${post.slug}`}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-4 py-2 rounded shadow hover:from-indigo-700 hover:to-purple-700 transition-colors text-sm"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 