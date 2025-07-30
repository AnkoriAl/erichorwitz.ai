import React from 'react';
import Link from 'next/link';
import { Users, Building, Lightbulb, Target, BarChart, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';
import Head from 'next/head';

const CoachingPage: React.FC = () => {
  const services = [
    {
      icon: Users,
      title: "Private 1-to-1 Coaching",
      description: "Personalized life, career, and executive coaching tailored to your unique goals and challenges."
    },
    {
      icon: Building,
      title: "Corporate Leadership Coaching",
      description: "Executive coaching for senior leaders driving organizational transformation and growth."
    },
    {
      icon: Lightbulb,
      title: "Team Development Workshops",
      description: "Interactive workshops that build team cohesion, communication, and collective performance."
    }
  ];

  const methodology = [
    {
      icon: Target,
      title: "VISION",
      description: "Uncover your Ikigai & long-term objectives"
    },
    {
      icon: BarChart,
      title: "PLAN",
      description: "Design clear, measurable milestones"
    },
    {
      icon: Users,
      title: "PRACTICE",
      description: "Weekly accountability & skill building"
    },
    {
      icon: BarChart,
      title: "IMPACT",
      description: "Evaluate results; iterate for sustained growth"
    }
  ];

  const tools = [
    "Ikigai", "Maslow's Hierarchy", "Attractive Selling", "GEM Thriver Journal", 
    "StrengthsFinder", "360 Feedback"
  ];

  const clientLogos = [
    "Credit Suisse", "IDEO", "Google", "NYU", "Bloomberg", "NYC DOE", "Reuters", "Columbia"
  ];

  return (
    <>
      <Head>
        <title>Executive Coaching, Growth Mindset & Career Change Programs | Eric Horwitz | GEM Coaching</title>
        <meta
          name="description"
          content="Unlock your potential with executive coaching, growth mindset programs, career change support, leadership development, and team workshops by Eric Horwitz. Explore the Thriver Program, Treasure Chest, and proven frameworks for career growth, goal setting, and professional identity counseling."
        />
        <meta
          name="keywords"
          content="executive coaching, growth mindset, career change in 40s, leadership development, career growth plan template, goal setting at work, professional identity counseling, GEM Coaching, Eric Horwitz, Thriver Program, Treasure Chest, team development workshops, corporate leadership coaching, personal development, work goals to set, midlife career crisis, coaching programs, leadership development programs, career transition resume examples, interview training skills, growth mindset quotes, goal setting books, burnout recovery, NYC executive coach"
        />
        {/* Google Analytics */}
      </Head>
      <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Transform Purpose into Performance</span>
          </div>
          <h1 className="sr-only">Executive Coaching, Growth Mindset & Career Change Programs by Eric Horwitz — GEM Coaching</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Executive Coaching, Growth Mindset & Career Change</h1>
          <p className="text-xl text-blue-100 mb-8">
            Unlock your potential with executive coaching, growth mindset activities, and career change programs. Eric Horwitz offers personalized coaching for professionals, leaders, and organizations seeking breakthrough results, leadership development, and work goal setting.<br />
            <span className="font-semibold">For more, visit <a href="https://gem.coach" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">gem.coach</a></span>
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Coaching Services: Executive, Career Change & Growth Mindset</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FloatingCard key={index} className="p-8 group" delay={index * 0.2}>
                  <div className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* Methodology */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">The GEM Methodology: Vision, Growth & Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodology.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-[#001C3E] text-white p-4 rounded-xl w-fit mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Coaching Tools & Frameworks for Career Growth</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-[#001C3E] text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Programs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Signature Programs: Thriver, Treasure Chest & More</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thriver Program</h3>
              <p className="text-gray-600 mb-6">
                12-week intensive with paired accountability partners for exponential growth, midlife career change, and breakthrough results. Ideal for professionals seeking work goal setting, burnout recovery, and leadership development.
              </p>
              <a
                href="https://gem.coach/thriver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001C3E] font-semibold hover:underline bg-blue-50 px-4 py-2 rounded transition"
              >
                Learn More about the Thriver Program →
              </a>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Treasure Chest</h3>
              <p className="text-gray-600 mb-6">
                Global self-improvement community for collective growth, reflection, and monthly themed workshops. Join a supportive environment designed for continuous learning, growth mindset activities, and professional identity counseling.
              </p>
              <a
                href="https://gem.coach/treasure-chest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001C3E] font-semibold hover:underline bg-blue-50 px-4 py-2 rounded transition"
              >
                Learn More about the Treasure Chest →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Trusted by Leading Organizations & Career Development Committees</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-700 font-semibold text-sm">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Callout */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
            "Asking for help is a sign of strength, not weakness."
          </blockquote>
          <cite className="text-blue-200">— Eric Horwitz</cite>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore how personalized coaching can transform your life and career.
          </p>
          <a
            href="https://www.gem.coach/interest-form"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
          >
            Get in Touch
          </a>
        </div>
      </AnimatedSection>
    </>
  );
};

export default CoachingPage;