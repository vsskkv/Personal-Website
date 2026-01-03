import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Power Platform Consultant UK | Microsoft 365 Automation | Venture Consultancy',
  description: 'Senior Power Platform consultant specializing in Power Automate, Power Apps, and Power BI for UK businesses. Automate your admin and scale with Venture Consultancy.',
  keywords: [
    'Power Platform Consultant UK',
    'Power Automate Expert',
    'Power Apps Developer',
    'Power BI Specialist',
    'Microsoft 365 Automation',
    'Venture Consultancy',
    'Business Process Automation UK',
    'SharePoint Automation'
  ],
  alternates: {
    canonical: 'https://vikramsinghkainth.com/',
  },
  openGraph: {
    title: 'Power Platform Consultant UK | Venture Consultancy',
    description: 'Specialist Microsoft 365 and Power Platform automation for UK small businesses.',
    url: 'https://vikramsinghkainth.com/',
    siteName: 'Venture Consultancy',
    locale: 'en_GB',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}
