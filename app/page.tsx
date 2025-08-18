import type { Metadata } from 'next';
import StructuredData from './components/StructuredData';

export const metadata: Metadata = {
  title: 'Eric Horwitz • Executive Coach',
  description: 'Discover the official site of Eric Horwitz, Executive Coach. Learn how his coaching, programs, and community help leaders forge purpose and achieve lasting success.',
  keywords: 'executive coaching, life coaching, leadership development, career coaching, Eric Horwitz',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz.',
    url: 'https://erichorwitz.ai',
    siteName: 'Eric Horwitz Coaching',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Horwitz Executive Coach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white">
        <main className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Eric Horwitz • Executive Coach
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your career and leadership potential with proven frameworks and strategic guidance.
            </p>
            <div className="space-y-4">
              <a
                href="/coaching"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Journey
              </a>
              <br />
              <a
                href="/about"
                className="inline-block border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Meet Eric
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}