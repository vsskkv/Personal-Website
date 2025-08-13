import { notFound } from "next/navigation";
import { blogPosts } from "../data";
import Link from "next/link";
import { BinaryBackground } from '@/components/BinaryBackground';
import { FloatingBinary } from '@/components/FloatingBinary';

// This tells Next.js which slugs to statically generate
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function renderBlock(block: { type: string; text?: string; src?: string; alt?: string; level?: number; code?: string }, i: number) {
  switch (block.type) {
    case "paragraph":
      return <p key={i} className="mb-4 text-gray-800 text-lg">{block.text}</p>;
    case "image":
      return (
        <div key={i} className="my-6 flex justify-center">
          <img src={block.src} alt={block.alt || ''} className="rounded-lg shadow max-h-64" />
        </div>
      );
    case "heading":
      if (block.level === 2) return <h2 key={i} className="text-2xl font-bold text-indigo-700 mt-8 mb-4">{block.text}</h2>;
      if (block.level === 3) return <h3 key={i} className="text-xl font-semibold text-indigo-600 mt-6 mb-3">{block.text}</h3>;
      return <h4 key={i} className="text-lg font-semibold text-indigo-500 mt-4 mb-2">{block.text}</h4>;
    case "code":
      return (
        <pre key={i} className="bg-gray-900 text-green-200 rounded p-4 overflow-x-auto my-4">
          <code>{block.code}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-white to-purple-50 py-16 px-4 relative overflow-hidden">
      <BinaryBackground intensity="low" speed="slow" className="text-purple-300" />
      <FloatingBinary intensity="low" speed="slow" color="text-purple-200" />
      {/* Back to Blog button in white space below nav */}
      <div className="max-w-5xl mx-auto mb-4 relative z-10">
        <Link href="/blog" className="inline-block text-indigo-700 hover:underline font-semibold text-sm bg-indigo-50 px-4 py-2 rounded shadow">
          ← Back to Blog
        </Link>
      </div>
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold text-purple-700 mb-2 uppercase tracking-wider">{post.title}</h1>
        <span className="text-xs text-gray-500 mb-4 block">{post.date}</span>
        {post.image && (
          <div className="mb-6 flex justify-center">
            <img src={post.image} alt={post.title} className="w-48 h-48 object-contain rounded-lg shadow" />
          </div>
        )}
        <p className="text-lg text-gray-700 mb-4">{post.excerpt}</p>
        <div className="prose max-w-none text-gray-800">
          {Array.isArray(post.content)
            ? post.content.map(renderBlock)
            : post.content}
        </div>
        {/* Bottom back button */}
        <div className="mt-12 flex justify-center">
          <Link href="/blog" className="text-indigo-700 hover:underline font-semibold text-lg bg-indigo-50 px-4 py-2 rounded shadow">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
} 