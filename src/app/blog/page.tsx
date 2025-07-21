"use client";
import Link from "next/link";
import { blogPosts } from "./data";

export default function BlogPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-white to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-8 text-center uppercase tracking-wider">Blog</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">Insights, tutorials, and stories from my journey in tech.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              <span className="font-semibold text-xl text-purple-800">{post.title}</span>
              <span className="text-xs text-gray-500">{post.date}</span>
              <p className="text-gray-700 flex-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
} 