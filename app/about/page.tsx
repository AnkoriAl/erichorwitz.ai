import React from 'react';
import Link from 'next/link';
import { Quote, Heart, Users, Lightbulb, Target, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

const AboutPage: React.FC = () => {
  const keystoneQuotes = [
    "Whatever you chase runs away. So don't chase anything.",
    "The universe knows the timing of everything. It's rooting for you if you believe it.",
    "Purpose isn't found — it's forged.",
    "You cannot think your way into winning the Super Bowl; you have to get on the field and practice."
  ];

  const values = [
    {
      icon: Target,
      title: "Evolution",
      description: "Continuous growth over static perfection."
    },
    {
      icon: Users,
      title: "Community",
      description: "Collective wisdom multiplies individual potential."
    },
    {
      icon: Heart,
      title: "Accountability",
      description: "Dreams become reality through committed follow-through."
    },
    {
      icon: Lightbulb,
      title: "Playfulness",
      description: "A child-like sense of wonder fuels creativity and joy."
    }
  ]; // <-- Make sure this semicolon is present and there are no stray characters after this line

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Coach • Storyteller • Visionary</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meet Eric Horwitz</h1>
          <p className="text-xl text-blue-100">Transforming leaders through purpose-driven coaching</p>
        </div>
      </section>

      {/* Biography */}
      <AnimatedSection className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16 bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
              <img
                src="https://media.licdn.com/dms/image/sync/v2/D4E27AQEBwIKK59igGQ/articleshare-shrink_800/articleshare-shrink_800/0/1735395803533?e=2147483647&v=beta&t=k5j7jZldW3degFRM9eKhla5G9hJL2ftTMEsdFuJHoqc"
                alt="Eric Horwitz"
                className="rounded-3xl shadow-xl object-cover w-[400px] h-[400px] border-4 border-[#001C3E]"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="md:w-1/2 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Educational Foundation</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Eric earned his <span className="font-semibold">B.A. in Economics from Columbia University</span>, where he developed a deep fascination with human motivation and organizational behavior. 
                  His academic foundation in economics provided analytical rigor that would later inform his systematic approach to leadership development and transformation.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Executive Leadership Experience</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Eric brings <span className="font-semibold">14 years of senior HR leadership experience as SVP and management consultant at PwC</span>, where he specialized in large-scale talent development and organizational transformation.
                  His diverse background includes expertise in storytelling and communication, skills that enhance his ability to connect with and inspire leaders at all levels.
                  A pivotal moment in his career came following 9/11, when Eric redirected his focus toward purpose-driven work that creates meaningful impact.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Founding His Practice</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  In <span className="font-semibold">February 2005</span>, Eric launched his coaching practice to help individuals and teams transform under pressure.
                  <span className="italic"> The core philosophy:</span> like a gem formed from coal through time and pressure, people can transform challenges into strength.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Coaching Achievements</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Eric has coached leaders at <span className="font-semibold">Credit Suisse, Reuters, IDEO, Google, NYC DOE, and beyond</span>.
                  He chairs the <span className="font-semibold">Columbia University Career Coaching Network (400k+ alumni)</span> and has built a referral-only practice spanning 9 client "layers" worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Professional Expertise & Approach</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Eric integrates <span className="font-semibold">proven frameworks including Ikigai, Maslow's Hierarchy, Attractive Selling, and his proprietary Architect Model (Vision → Plan → Practice → Impact)</span> to deliver measurable results.
                  Based in New York City, he brings a collaborative, optimistic approach to leadership development, guided by his core belief that sustainable transformation requires both strategic thinking and practical application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Keystone Quotes */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Keystone Quotes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keystoneQuotes.map((quote, index) => (
              <FloatingCard key={index} className="p-8" delay={index * 0.2}>
                <Quote className="h-8 w-8 text-[#001C3E] mb-4 hover:scale-110 transition-transform duration-300" />
                <blockquote className="text-lg text-gray-800 italic font-light leading-relaxed">
                  "{quote}"
                </blockquote>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Values & Vision */}
      <AnimatedSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Values & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <FloatingCard key={index} className="text-center p-6 group" delay={index * 0.1}>
                  <div className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </FloatingCard>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work with Eric?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your purpose into performance with personalized coaching
          </p>
          <Link
            href="/coaching"
            className="bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl inline-block"
          >
            Explore Coaching Options
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};
export default AboutPage;
