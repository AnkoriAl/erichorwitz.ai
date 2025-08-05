import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { Quote, Heart, Users, Lightbulb, Target, Sparkles, Award, BadgeCheck, Globe, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

export const metadata: Metadata = {
  title: 'About Eric Horwitz | NYC Executive Coach for Career Transitions & Leadership',
  description: 'Meet Eric Horwitz, founder of GEM Coaching and leader in career transformation, executive development, and burnout recovery. Discover his coaching philosophy, client success, and signature frameworks.',
  keywords: 'Eric Horwitz, executive coach, career transitions, leadership development, burnout recovery, GEM Coaching, New York City coaching',
  openGraph: {
    type: 'profile',
    title: 'About Eric Horwitz | GEM Coaching',
    description: 'Learn about Eric\'s story, credentials, and programs.',
    url: 'https://www.erichorwitz.ai/about',
  },
  alternates: {
    canonical: 'https://www.erichorwitz.ai/about',
  },
};

const AboutPage: React.FC = () => {
  const keystoneQuotes = [
    "Whatever you chase runs away. So don't chase anything.",
    "The universe knows the timing of everything. It's rooting for you if you believe it.",
    "Purpose isn't found — it's forged.",
    "You cannot think your way into winning the Super Bowl; you have to get on the field and practice."
  ];

  const values = [
    {
      icon: Heart,
      title: 'Empathy',
      description: 'Coaching with compassion, understanding, and respect for every client.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building networks of support, growth, and shared purpose.'
    },
    {
      icon: Lightbulb,
      title: 'Insight',
      description: 'Helping clients discover new perspectives and actionable strategies.'
    },
    {
      icon: Target,
      title: 'Results',
      description: 'Driving measurable progress and sustainable transformation.'
    }
  ];

  const credentials = [
    { icon: Award, text: 'Certified Professional Coach (ICF) with 20+ years of experience' },
    { icon: BadgeCheck, text: 'B.A. in Economics from Columbia University' },
    { icon: Globe, text: 'Founder & CEO of GEM Coaching ecosystem' },
    { icon: Briefcase, text: 'Former SVP at PwC with 14 years of HR leadership experience' }
  ];

  const programs = [
    { 
      icon: BookOpen, 
      href: 'https://gem.coach/treasure-chest', 
      title: 'The Treasure Chest', 
      description: 'A collaborative community of self-improvers who strengthen skills and expand quality connections through shared learning and collective wisdom.' 
    },
    { 
      icon: TrendingUp, 
      href: 'https://gem.coach/thriver', 
      title: 'Thriver Program', 
      description: 'Deep-accountability mastermind for midlife career change, goal setting, and burnout recovery.' 
    },
    { 
      icon: Sparkles, 
      href: 'https://gem.coach/blog', 
      title: 'Growth Resources', 
      description: 'Inspiring blog posts with growth mindset strategies, goal-setting frameworks, and career development tools.' 
    }
  ];

  return (
    <div>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Eric Horwitz",
            "jobTitle": "Executive Coach",
            "url": "https://www.erichorwitz.ai/about",
            "affiliation": {
              "@type": "Organization",
              "name": "GEM Coaching"
            },
            "sameAs": [
              "https://www.linkedin.com/in/erichorwitz",
              "https://www.gem.coach"
            ]
          })
        }}
      />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <section className="mb-20 grid gap-12 md:grid-cols-2 items-center">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://media.licdn.com/dms/image/sync/v2/D4E27AQEBwIKK59igGQ/articleshare-shrink_800/articleshare-shrink_800/0/1735395803533?e=2147483647&v=beta&t=k5j7jZldW3degFRM9eKhla5G9hJL2ftTMEsdFuJHoqc"
              alt="Portrait of Eric Horwitz, Executive Coach"
              loading="lazy"
              className="rounded-3xl shadow-xl object-cover w-[450px] h-[450px] border-4 border-[#001C3E]"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold text-[#001C3E] mb-6 leading-tight">About Eric Horwitz</h1>
            <p className="text-xl text-gray-700 mb-8">Executive Coach specializing in career transitions, leadership development, and burnout recovery</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Users className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Two decades empowering executives and change agents worldwide</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Sparkles className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Expert in midlife career transitions and leadership growth</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Briefcase className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Trusted advisor to leaders at Credit Suisse, IDEO, Google, and NYC DOE</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Award className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Chair of Columbia University Career Coaching Network (400k+ alumni)</p>
              </FloatingCard>
            </div>
          </div>
        </section>

        {/* Professional Background */}
        <section id="credentials" className="mb-20">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-8">Professional Background</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {credentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <FloatingCard key={index} className="flex gap-4 p-6 items-start group" delay={index * 0.1}>
                  <Icon className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </FloatingCard>
              );
            })}
          </div>
        </section>

        {/* Coaching Philosophy */}
        <section id="philosophy" className="mb-20">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-6">Coaching Philosophy</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Eric believes that purpose isn't found—it's forged. His coaching empowers clients to clarify their vision, 
            set meaningful goals, and develop the growth mindset needed to thrive in today's dynamic landscape. 
            Through proven frameworks and personalized guidance, he helps leaders transform challenges into opportunities 
            for sustainable growth and meaningful impact.
          </p>
        </section>

        {/* Programs */}
        <section id="programs" className="mb-20">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-8">Signature Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {programs.map((prog, index) => {
              const Icon = prog.icon;
              return (
                <FloatingCard key={index} className="p-6 text-center group" delay={index * 0.1}>
                  <div className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8" />
                  </div>
                  <Link href={prog.href} className="hover:underline">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{prog.title}</h3>
                  </Link>
                  <p className="text-gray-700">{prog.description}</p>
                </FloatingCard>
              );
            })}
          </div>
        </section>
      </main>

      {/* Detailed Biography */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Eric's Journey</h2>
          <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
              <img
                src="https://res.cloudinary.com/breather-com/image/upload/v1516308810/Breather_NYC_EricHorwitz-0108_wdgmyi.jpg"
                alt="Eric Horwitz speaking at a leadership workshop"
                loading="lazy"
                className="rounded-3xl shadow-xl object-cover w-[400px] h-[400px] border-4 border-[#001C3E]"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#001C3E] mb-3">From Economics to Executive Coaching</h3>
                <p className="text-gray-700 leading-relaxed">
                  Eric earned his B.A. in Economics from Columbia University, where he developed a fascination with human motivation 
                  and organizational behavior. This analytical foundation would later inform his systematic approach to leadership development.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#001C3E] mb-3">Corporate Leadership Experience</h3>
                <p className="text-gray-700 leading-relaxed">
                  For 14 years, Eric served as SVP and management consultant at PwC, specializing in large-scale talent development 
                  and organizational transformation. Following 9/11, he redirected his focus toward purpose-driven work that creates meaningful impact.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#001C3E] mb-3">Building GEM Coaching</h3>
                <p className="text-gray-700 leading-relaxed">
                  In February 2005, Eric founded GEM Coaching with a core philosophy: like a gem formed from coal through time and pressure, 
                  people can transform challenges into strength. Today, he leads a purpose-driven ecosystem committed to guiding transformation worldwide.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#001C3E] mb-3">Proven Methodology</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Eric integrates proven frameworks including Ikigai, Maslow's Hierarchy, and his proprietary Architect Model 
                  (Vision → Plan → Practice → Impact) to deliver measurable results for leaders across industries.
                </p>
                <Link href="/coaching" className="text-blue-700 underline font-semibold hover:text-blue-900 transition-all">
                  Explore Coaching with Eric →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Keystone Quotes */}
      <AnimatedSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Guiding Principles</h2>
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
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Core Values</h2>
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

      {/* How It Works */}
      <AnimatedSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How Executive Coaching Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">1. Discovery & Assessment</h3>
              <p className="text-gray-700">We begin with a comprehensive assessment of your goals, challenges, and leadership style to ensure every engagement is tailored to your unique needs.</p>
            </FloatingCard>
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">2. Strategic Roadmap</h3>
              <p className="text-gray-700">Together, we create a clear, actionable plan using proven frameworks. Milestones and metrics are defined for measurable progress.</p>
            </FloatingCard>
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">3. Ongoing Support & Results</h3>
              <p className="text-gray-700">Through regular sessions, feedback, and accountability, you'll develop new skills and achieve sustainable transformation.</p>
            </FloatingCard>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Leadership?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey from purpose to performance with personalized coaching
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
