
import type { Metadata } from 'next';
import QuotesClient from './quotes-client';

export const metadata: Metadata = {
  title: 'Inspirational Quotes & Wisdom | Eric Horwitz Coaching Philosophy | GEM Coaching',
  description: 'Discover inspirational quotes and wisdom from executive coach Eric Horwitz. Explore quotes on leadership, personal growth, career development, and transformation from 20+ years of coaching experience.',
  keywords: 'Eric Horwitz quotes, inspirational coaching quotes, leadership wisdom, personal growth quotes, career development quotes, executive coaching philosophy, motivational quotes, GEM coaching wisdom',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Inspirational Quotes & Wisdom | Eric Horwitz',
    description: 'Wisdom and inspiration from two decades of coaching transformational leaders',
    url: 'https://erichorwitz.ai/quotes',
  },
  alternates: {
    canonical: 'https://erichorwitz.ai/quotes',
  },
};

export default function QuotesPage() {
  return <QuotesClient />;
}
