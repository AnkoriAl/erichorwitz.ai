import type { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contact Eric Horwitz | Executive & Leadership Coaching Consultation',
  description: 'Request a consultation with executive & leadership coach Eric Horwitz. Submit your inquiry to explore personalized coaching, signature programs, and transformational workshops.',
  keywords: 'contact Eric Horwitz, executive coaching consultation, leadership coaching inquiry, GEM Coaching contact, coaching programs, professional development',
  openGraph: {
    title: 'Contact Eric Horwitz | Executive Coaching',
    description: 'Request a consultation with executive & leadership coach Eric Horwitz',
    url: 'https://erichorwitz.ai/contact',
  },
  alternates: {
    canonical: 'https://erichorwitz.ai/contact',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
