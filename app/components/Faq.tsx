'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQPage, WithContext } from 'schema-dts';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How is coaching different from therapy or consulting?",
        answer: "Therapy digs into the past; consulting tells you what to do. Coaching is about building the blueprint for your future. GEM coaches help you clarify values, set goals, and hold you accountable, so you can design and live a more fulfilling life."
    },
    {
        question: "What areas does GEM coaching cover?",
        answer: "Our programs span career advancement, leadership development, life transitions, work/life balance, financial planning, team dynamics, and building networks. Whether you’re scaling a business, navigating a career shift, or seeking more joy and clarity, GEM offers structured pathways to help you thrive."
    },
    {
        question: "What coaching programs are available?",
        answer: "We offer Private Coaching (1:1 sessions), Corporate Coaching (leadership and culture-building), The Treasure Chest (a community membership), and the Renaissance Academy (coaching certification and training)."
    },
    {
        question: "How do I start?",
        answer: "Most clients begin with a Discovery Session—a short call to ensure coaching is the right fit. It’s not a free coaching session, but a mutual interview to test chemistry and learn how we work."
    },
    {
        question: "How are sessions held?",
        answer: "Most GEM coaches meet via Zoom, with some availability by phone or in-person. Clients typically purchase session packages (3, 6, or 12) for lasting results."
    },
    {
        question: "Who are the coaches?",
        answer: "GEM’s coaches include seasoned executives, certified life coaches, leadership trainers, and specialists in fields like career design, public speaking, and organizational development. Each has a unique style but shares the same values of clarity, accountability, and transformation."
    },
    {
        question: "What is the Treasure Chest?",
        answer: "The Treasure Chest is GEM’s collaborative learning community. Members join group sessions, expand their networks, and grow alongside others committed to personal and professional evolution."
    }
];

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const jsonLd: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-20 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 text-lg text-gray-600">Find answers to common questions about our coaching programs.</p>
        </div>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex justify-between items-center p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                <ChevronDown
                  className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="p-6 pt-0">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
