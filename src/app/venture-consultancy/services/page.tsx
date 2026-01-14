import { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Power Platform Consulting & M365 Automation Services | Venture Consultancy',
  description: 'Specialist Power Platform services including Power Automate workflows, custom Power Apps, and Power BI dashboards. Professional M365 automation for UK SMEs.',
  keywords: ['Power Platform Consulting', 'Power Automate Services', 'Custom Power Apps Development', 'Power BI Dashboards', 'M365 Automation UK'],
  alternates: {
    canonical: 'https://vikramsinghkainth.com/venture-consultancy/services/',
  },
  openGraph: {
    title: 'Power Platform Consulting & M365 Automation Services',
    description: 'Specialist Power Platform services including Power Automate workflows, custom Power Apps, and Power BI dashboards.',
    url: 'https://vikramsinghkainth.com/venture-consultancy/services/',
    type: 'website',
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
