import type { Metadata } from 'next';
import { Star, TrendingUp, Users, Award } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import ServerBreadcrumb from '../components/ServerBreadcrumb';

export const metadata: Metadata = {
  title: 'Client Success Stories & Testimonials | Eric Horwitz Executive Coaching | GEM Coaching',
  description: 'Read inspiring client success stories and testimonials from Eric Horwitz\'s executive coaching. See real transformations from career changes to leadership breakthroughs with GEM Coaching programs.',
  keywords: 'Eric Horwitz testimonials, executive coaching success stories, client transformations, GEM coaching reviews, leadership development results, career change success, coaching testimonials NYC',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Client Success Stories & Testimonials | Eric Horwitz',
    description: 'Real people, real results, real transformation through coaching',
    url: 'https://erichorwitz.ai/testimonials',
  },
  alternates: {
    canonical: 'https://erichorwitz.ai/testimonials',
  },
};

const TestimonialsPage: React.FC = () => {
  const successStories = [
    {
      name: "Sabrina Guttman",
      title: "Founder, Sagesse Communications",
      before: "Struggling with self-criticism about work habits",
      after: "Built a profitable business working with clients she enjoys",
      quote: "Eric has a way of turning self-criticism into a strength, helping me build a plan that works with my natural tendencies instead of against them.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
    },
    {
      name: "Dr. Tom H.",
      title: "NYC DOE",
      before: "Stalled STEM initiative",
      after: "Secured $2M funding & city-wide rollout",
      quote: "Eric's blend of strategic rigor and human insight turned our program around.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
    },
    {
      name: "Sanjay P.",
      title: "Founder",
      before: "Solo entrepreneur",
      after: "12-person team, Series A funding",
      quote: "The Thriver framework forced me to stop hiding from my own potential.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
    },
    {
      name: "Angela M.",
      title: "SVP Finance",
      before: "Overworked, unclear next step",
      after: "Promoted to CFO & reclaimed work-life balance",
      quote: "Eric helped me see possibilities I couldn't imagine and held me accountable until they were real.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
    }
  ];

  const additionalTestimonials = [
    {
      name: "Michael R.",
      title: "VP Marketing",
      quote: "Eric's coaching transformed not just my career trajectory, but my entire approach to leadership. The results speak for themselves."
    },
    {
      name: "Sabrina Guttman",
      title: "Founder, Sagesse Communications",
      quote: "In one year, with Eric's coaching, I've built a business I'm proud of, working with clients I enjoy, and actually making money."
    },
    {
      name: "David K.",
      title: "Senior Director",
      quote: "The Thriver Program pushed me beyond my comfort zone and into the executive role I always wanted but never thought possible."
    },
    {
      name: "Jennifer W.",
      title: "Non-Profit Leader",
      quote: "Eric helped me find my voice as a leader and create the impact I've always dreamed of making in my community."
    }
  ];

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eric Horwitz Executive Coaching - GEM Coaching",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "telephone": "+1-917-525-0935",
    "url": "https://erichorwitz.ai",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": successStories.length + additionalTestimonials.length
    },
    "review": [
      ...successStories.map(story => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": story.name
        },
        "reviewBody": story.quote,
        "datePublished": "2024-01-01"
      })),
      ...additionalTestimonials.map(testimonial => ({
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": testimonial.name
        },
        "reviewBody": testimonial.quote,
        "datePublished": "2024-01-01"
      }))
    ]
  };

  return (
    <div>
      <Script
        id="review-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema)
        }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories of Transformation</h1>
          <p className="text-xl text-blue-100">
            Real people, real results, real transformation through coaching
          </p>
        </div>
      </section>

      {/* Success Stories - Card Design */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServerBreadcrumb items={[{ name: 'Testimonials', href: '/testimonials' }]} />
          <h2 className="text-3xl font-bold text-center text-[#001C3E] mb-12">Featured Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-200 overflow-hidden flex flex-col">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-[#001C3E]">{story.name}</h3>
                    <span className="text-sm text-gray-500">{story.title}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-xs font-medium">
                      {story.before}
                    </span>
                    <span className="text-gray-400 mx-2">→</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {story.after}
                    </span>
                  </div>
                  <blockquote className="text-gray-700 italic text-base leading-relaxed mb-4 flex-1">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex justify-end">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Testimonials - Simple Card List */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-[#001C3E] mb-10">More Client Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col hover:shadow-lg transition-shadow duration-200">
                <blockquote className="text-gray-700 italic text-base leading-relaxed mb-4 flex-1">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#001C3E]">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.title}</div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Become the Next Success Story</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of leaders who have transformed their careers and lives through coaching
          </p>
          <Link
            href="/coaching"
            className="bg-white text-[#001C3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
