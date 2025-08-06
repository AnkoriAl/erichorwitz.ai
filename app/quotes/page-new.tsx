import type { Metadata } from 'next';
import { Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Inspirational Quotes & Wisdom | Eric Horwitz Executive Coach | GEM Coaching',
  description: 'Discover inspiring quotes and wisdom from Eric Horwitz on leadership, personal growth, motivation, and life transformation. Share powerful insights on purpose, success, and overcoming challenges.',
  keywords: 'inspirational quotes, Eric Horwitz quotes, leadership quotes, motivational quotes, executive coaching wisdom, personal growth quotes, success quotes, life transformation, GEM coaching philosophy',
  openGraph: {
    type: 'website',
    title: 'Inspirational Quotes & Wisdom | Eric Horwitz',
    description: 'Discover inspiring quotes and wisdom on leadership, growth, and transformation.',
    url: 'https://www.erichorwitz.ai/quotes',
    siteName: 'Eric Horwitz Coaching',
    images: [
      {
        url: 'https://www.erichorwitz.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Inspirational Quotes - Eric Horwitz',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inspirational Quotes & Wisdom | Eric Horwitz',
    description: 'Discover inspiring quotes and wisdom on leadership, growth, and transformation.',
    images: ['https://www.erichorwitz.ai/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.erichorwitz.ai/quotes',
  },
};

const QuotesPage: React.FC = () => {
  const quotes = [
    {
      text: "Purpose is not found, it is forged.",
      author: "Eric Horwitz"
    },
    {
      text: "Growth happens at the intersection of challenge and support.",
      author: "Eric Horwitz"
    },
    {
      text: "Leadership is not about being perfect; it's about being authentic.",
      author: "Eric Horwitz"
    },
    {
      text: "The biggest risk is not taking any risk at all.",
      author: "Eric Horwitz"
    },
    {
      text: "Success is not a destination, it's a way of traveling.",
      author: "Eric Horwitz"
    },
    {
      text: "Your comfort zone is a beautiful place, but nothing grows there.",
      author: "Eric Horwitz"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspirational Quotes & Wisdom</h1>
          <p className="text-xl text-blue-100">
            Discover powerful insights on leadership, growth, and transformation from Eric Horwitz.
          </p>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <Quote className="h-8 w-8 text-[#001C3E] mb-4" />
                <blockquote className="text-lg text-gray-900 mb-4 italic">
                  "{quote.text}"
                </blockquote>
                <cite className="text-[#001C3E] font-semibold">— {quote.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let these insights guide you on your journey to personal and professional growth.
          </p>
          <a
            href="/coaching"
            className="inline-flex items-center bg-white text-[#001C3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Explore Coaching Programs
          </a>
        </div>
      </section>
    </div>
  );
};

export default QuotesPage;
