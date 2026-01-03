import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Book Your Free M365 Audit | Venture Consultancy',
  description: 'Take the first step towards a more efficient business. Book your free 15-minute Microsoft 365 audit today. No sales pitch, just honest advice.',
  keywords: ['contact consultant', 'book M365 audit', 'Microsoft 365 consultation', 'automation expert contact'],
};

export default function ContactPage() {
  return <ContactClient />;
}
