import { notFound } from "next/navigation";
import { projects } from "../data";

// This tells Next.js which slugs to statically generate
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4 uppercase tracking-wider">{project.title}</h1>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-mono">{tech}</span>
          ))}
        </div>
        {project.image && (
          <div className="mb-6 flex justify-center">
            <img src={project.image} alt={project.title} className="w-48 h-48 object-contain rounded-lg shadow" />
          </div>
        )}
        <p className="text-lg text-gray-700 mb-4">{project.description}</p>
        <div className="prose max-w-none text-gray-800">
          {project.details}
        </div>
      </div>
    </main>
  );
} 