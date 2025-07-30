

'use client'
import Head from 'next/head';

import React, { useState } from 'react';
import { Copy, Share2, Quote } from 'lucide-react';

const QuotesPage: React.FC = () => {
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);

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


  const copyToClipboard = async (quote: string) => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — Eric Horwitz`);
      setCopiedQuote(quote);
      setTimeout(() => setCopiedQuote(null), 2000);
    } catch (err) {
      console.error('Failed to copy quote:', err);
    }
  };

  const shareQuote = async (quote: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quote by Eric Horwitz',
          text: `"${quote}" — Eric Horwitz`,
          url: window.location.href,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      copyToClipboard(quote);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quotes Library</h1>
          <p className="text-xl text-blue-100">
            Wisdom and inspiration from two decades of coaching transformational leaders
          </p>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-3xl md:text-4xl font-light italic text-gray-800 mb-4">
            "Purpose isn't found — it's forged."
          </blockquote>
          <cite className="text-[#001C3E] text-lg">— Eric Horwitz</cite>
        </div>
      </section>

      {/* Quote Categories */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {quoteCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                {category.theme}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.quotes.map((quote, quoteIndex) => (
                  <div
                    key={quoteIndex}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100"
                  >
                    <Quote className="h-6 w-6 text-[#001C3E] mb-4" />
                    <blockquote className="text-lg text-gray-800 font-light italic leading-relaxed mb-4">
                      "{quote}"
                    </blockquote>
                    <cite className="text-[#001C3E] text-sm font-medium">— Eric Horwitz</cite>
                    
                    <div className="flex justify-end space-x-2 mt-4">
                      <button
                        onClick={() => copyToClipboard(quote)}
                        className="p-2 text-gray-500 hover:text-[#001C3E] hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Copy quote"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => shareQuote(quote)}
                        className="p-2 text-gray-500 hover:text-[#001C3E] hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        title="Share quote"
                      >
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {copiedQuote === quote && (
                      <div className="text-green-600 text-sm mt-2 text-center">
                        Quote copied to clipboard!
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001C3E] text-white">
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
      </section>
    </div>
  );
};

export default QuotesPage;
