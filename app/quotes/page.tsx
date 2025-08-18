
import type { Metadata } from 'next';
import { Quote } from 'lucide-react';
import Script from 'next/script';
import ServerBreadcrumb from '../components/ServerBreadcrumb';
import ServerSection from '../components/ServerSection';
import ServerCard from '../components/ServerCard';
import QuoteInteractions from './quote-interactions';

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
  const quoteCategories = [
    {
      theme: "Inspiration & Motivation",
      quotes: [
        "The universe knows the timing of everything. It's rooting for you if you believe it.",
        "Purpose isn't found — it's forged.",
        "When I look ahead, I see possibilities and then I plan for them with clear resolve.",
        "Why introduce negative?"
      ]
    },
    {
      theme: "Leadership & Teamwork",
      quotes: [
        "Our collective wisdom empowers us.",
        "You cannot achieve this alone… community will enhance your ability to shine.",
        "By exchanging knowledge, we build support and trust.",
        "A gem is coal forged by time and pressure."
      ]
    },
    {
      theme: "Personal Growth & Mindset",
      quotes: [
        "Whatever you chase runs away. So don't chase anything.",
        "You can't think your way into winning the Super Bowl; you have to practice.",
        "I wake up every morning feeling like I'm still 10 — life is a playground.",
        "Asking for help is a sign of strength, not weakness."
      ]
    },
    {
      theme: "Career & Professional Development",
      quotes: [
        "Financial success is a journey, not a sprint.",
        "If you find yourself complacent and apathetic at work, reassess.",
        "I built this practice one person at a time… nine layers deep in referrals.",
        "Even if you get wiser with age, the world changes, so some wisdom becomes pointless."
      ]
    },
    {
      theme: "Resilience & Overcoming Challenges",
      quotes: [
        "Asking for help is a sign of strength, not weakness.",
        "A gem is coal forged by time and pressure.",
        "Even if you get wiser with age, the world changes, so some wisdom becomes pointless.",
        "Purpose isn't found — it's forged."
      ]
    }
  ];

  const quotesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Eric Horwitz Quotes",
    "description": "Inspirational quotes and wisdom from executive coach Eric Horwitz",
    "url": "https://erichorwitz.ai/quotes",
    "itemListElement": quoteCategories.flatMap((category, categoryIndex) =>
      category.quotes.map((quote, quoteIndex) => ({
        "@type": "Quotation",
        "position": categoryIndex * 10 + quoteIndex + 1,
        "text": quote,
        "author": {
          "@type": "Person",
          "name": "Eric Horwitz"
        },
        "about": category.theme
      }))
    )
  };

  return (
    <div>
      <Script
        id="quotes-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(quotesSchema)
        }}
      />

      {/* Hero */}
      <ServerSection className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quotes Library</h1>
          <p className="text-xl text-blue-100">
            Wisdom and inspiration from two decades of coaching transformational leaders
          </p>
        </div>
      </ServerSection>

      {/* Featured Quote */}
      <ServerSection className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-light italic text-gray-800 mb-4">
            "Purpose isn't found — it's forged."
          </blockquote>
          <cite className="text-[#001C3E] text-lg">— Eric Horwitz</cite>
        </div>
      </ServerSection>

      {/* Quote Categories */}
      <ServerSection className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServerBreadcrumb items={[{ name: 'Quotes', href: '/quotes' }]} />
          {quoteCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.theme}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.quotes.map((quote, quoteIndex) => (
                  <ServerCard
                    key={quoteIndex}
                    className="p-6 border border-gray-100"
                  >
                    <Quote className="h-6 w-6 text-[#001C3E] mb-4" />
                    <blockquote className="text-lg text-gray-800 font-light italic leading-relaxed mb-4">
                      "{quote}"
                    </blockquote>
                    <cite className="text-[#001C3E] text-sm font-medium">— Eric Horwitz</cite>
                    <QuoteInteractions quote={quote} />
                  </ServerCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ServerSection>

      {/* CTA */}
      <ServerSection className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Forge Your Own Purpose?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform these insights into action with personalized coaching
          </p>
          <a
            href="/contact"
            className="bg-white text-[#001C3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </ServerSection>
    </div>
  );
}
