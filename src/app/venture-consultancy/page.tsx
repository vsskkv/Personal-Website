import { Metadata } from 'next';
import VentureConsultancyClient from './VentureConsultancyClient';

export const metadata: Metadata = {
  title: 'Power Platform Consultant UK | M365 Automation | Venture Consultancy',
  description: 'Specialist Power Platform consultant helping UK businesses automate processes with Power Automate, Power Apps, and Power BI. Save time and scale with Venture Consultancy.',
  keywords: ['Power Platform Consultant UK', 'Power Automate Expert', 'Microsoft 365 Automation', 'SharePoint Automation UK', 'Power Apps Developer'],
  alternates: {
    canonical: 'https://vikramsinghkainth.com/venture-consultancy/',
  },
  openGraph: {
    title: 'Power Platform Consultant UK | M365 Automation | Venture Consultancy',
    description: 'Specialist Power Platform consultant helping UK businesses automate processes with Power Automate, Power Apps, and Power BI.',
    url: 'https://vikramsinghkainth.com/venture-consultancy/',
    type: 'website',
  },
};

export default function VentureConsultancyPage() {
  return <VentureConsultancyClient />;
}
