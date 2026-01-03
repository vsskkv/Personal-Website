import { industries } from '../data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import IndustryClient from './IndustryClient';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);
  
  if (!industry) return { title: 'Industry Not Found' };

  return {
    title: `${industry.name} Automation Specialist | Venture Consultancy`,
    description: industry.heroText,
    keywords: [`${industry.name} automation`, `${industry.name} Microsoft 365`, `Power Platform for ${industry.name}`],
  };
}

export function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return <IndustryClient industry={industry} />;
}
