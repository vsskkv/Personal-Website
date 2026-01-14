import { Metadata } from 'next';
import ProjectsPageClient from './ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Projects | Academic Research & Game Development | Vikram Singh Kainth',
  description: 'A showcase of featured work across academic research and game development. Explore projects in robotics, AI, and software engineering.',
  keywords: ['software projects', 'academic research', 'game development', 'robotics projects', 'AI research'],
  alternates: {
    canonical: 'https://vikramsinghkainth.com/projects/',
  },
  openGraph: {
    title: 'Projects | Academic Research & Game Development',
    description: 'A showcase of featured work across academic research and game development.',
    url: 'https://vikramsinghkainth.com/projects/',
    type: 'website',
  },
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
} 