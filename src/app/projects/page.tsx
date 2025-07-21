"use client";
import Link from "next/link";

const projects = [
  {
    title: "Power Platform Automation Suite",
    description: "A suite of tools built on Power Apps and Power Automate to streamline business workflows and reporting.",
    tech: ["Power Apps", "Power Automate", "Dataverse"],
    link: "#",
  },
  {
    title: "SharePoint Knowledge Hub",
    description: "A modern SharePoint site for document management, team collaboration, and knowledge sharing.",
    tech: ["SharePoint", "React", "TypeScript"],
    link: "#",
  },
  {
    title: "BI Dashboard Portal",
    description: "Interactive Power BI dashboards for real-time business intelligence and analytics.",
    tech: ["Power BI", "DAX", "Power Platform"],
    link: "#",
  },
  {
    title: "Mobile Field App",
    description: "A React Native & Expo app for field workers to log data and sync with Dataverse.",
    tech: ["React Native", "Expo", "Dataverse"],
    link: "#",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-indigo-50 to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-8 text-center uppercase tracking-wider">Projects</h1>
        <p className="text-center text-gray-600 mb-12 text-lg">A showcase of my featured work across the Power Platform, SharePoint, and modern web technologies.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
              <span className="font-semibold text-xl text-indigo-800">{project.title}</span>
              <p className="text-gray-700 flex-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-mono">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="mt-2 text-indigo-600 hover:underline font-semibold text-sm">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 