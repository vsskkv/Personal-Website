import { Metadata } from 'next';
import HealthCheckClient from './HealthCheckClient';

export const metadata: Metadata = {
  title: 'Free Power Platform & Microsoft 365 Health Check | Venture Consultancy',
  description: 'Book a free 15-minute Power Platform and M365 audit. Discover how Power Automate and Power Apps can save your UK business time and money.',
  keywords: ['Power Platform Health Check', 'M365 Audit', 'Power Automate Review', 'Microsoft 365 Automation Audit', 'UK SME Tech Check'],
};

export default function HealthCheckPage() {
  return <HealthCheckClient />;
}
