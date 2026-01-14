import { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Tech Blog | Power Platform Insights & Tutorials | Vikram Singh Kainth',
  description: 'Insights, tutorials, and stories about Power Platform, Microsoft 365 automation, and software development. Learn from real-world experiences and technical deep-dives.',
  keywords: ['Power Platform blog', 'Microsoft 365 tutorials', 'Power Automate guides', 'tech blog UK', 'software development insights'],
  alternates: {
    canonical: 'https://vikramsinghkainth.com/blog/',
  },
  openGraph: {
    title: 'Tech Blog | Power Platform Insights & Tutorials',
    description: 'Insights, tutorials, and stories about Power Platform, Microsoft 365 automation, and software development.',
    url: 'https://vikramsinghkainth.com/blog/',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogPageClient />;
} 