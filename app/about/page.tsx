import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Quote, Heart, Users, Lightbulb, Target, Sparkles, Award, BadgeCheck, Globe, Briefcase, BookOpen, TrendingUp } from 'lucide-react';
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
      icon: Heart,
      title: 'Empathy',
      description: 'Coaching with compassion, understanding, and respect for every client.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a network of support, growth, and shared purpose.'
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
    { icon: Award,    text: '20+ years coaching leaders, founders, and professionals on growth mindset and career transitions' },
    { icon: BadgeCheck, text: 'Certified Professional Coach (ICF, Columbia University)' },
    { icon: Globe,    text: 'Founder & CEO of GEM Coaching' },
    { icon: Briefcase, text: 'Facilitator for tailored leadership‑development programs across multiple industries' }
  ];

  const programs = [
    { icon: BookOpen, href: 'https://gem.coach/treasure-chest',  title: 'The Treasure Chest', description: 'A collaborative community of self-improvers who strengthen skills and expand quality connections through shared learning and collective wisdom.' },
    { icon: TrendingUp, href: 'https://gem.coach/thriver', title: 'Thriver Program',     description: 'Deep‑accountability mastermind for midlife career change, work goal setting, and burnout recovery.' },
    { icon: Sparkles,  href: 'https://gem.coach/blog', title: 'Growth Resources',    description: 'Explore inspiring blog posts filled with growth mindset quotes, goal-setting strategies, and career development tools—curated to help you improve and thrive.' }
  ];

  return (
    <div>
      <Head>
        <title>About Eric Horwitz | NYC Executive Coach for Career Transitions & Leadership</title>
        <meta name="description" content="Meet Eric Horwitz, founder of GEM Coaching and leader in career transformation, executive development, and burnout recovery. Discover his coaching philosophy, client success, and signature frameworks." />
        <meta name="keywords" content="Eric Horwitz, executive coach, career transitions, leadership development, burnout recovery, GEM Coaching, New York City coaching" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="About Eric Horwitz | GEM Coaching" />
        <meta property="og:description" content="Learn about Eric's story, credentials, and programs." />
        <script
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
      </Head>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero */}
        <section className="mb-20 grid gap-10 md:grid-cols-2 items-center">
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
            <p className="text-xl text-gray-700 mb-4">Executive Coach for Career Change, Growth Mindset &amp; Leadership</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Users className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">20+ years empowering high‑performers, executives &amp; change agents globally.</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Sparkles className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Expert in midlife career transitions, burnout recovery &amp; leadership growth.</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Briefcase className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Trusted advisor to leaders and changemakers at organizations including Credit Suisse, IDEO, NYC DOE, Google, and more.</p>
              </FloatingCard>
              <FloatingCard className="flex gap-4 p-6 items-center group">
                <Award className="h-8 w-8 text-[#001C3E] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-700 leading-relaxed">Founder of GEM Coaching &amp; creator of the Renaissance Academy and Treasure Chest community.</p>
              </FloatingCard>
            </div>
          </div>
        </section>
        <section id="credentials" className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Credentials & Experience in Leadership Development</h2>
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
        <section id="philosophy" className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Coaching Philosophy: Growth Mindset & Purpose</h2>
          <p className="text-lg text-gray-600">
            Eric believes that purpose isn’t found—it’s forged. His coaching empowers clients to clarify their vision, set meaningful work goals, and develop the growth mindset needed to thrive in today’s dynamic world. Explore <a href="/programs" className="underline hover:text-blue-700">leadership development programs</a> and <a href="/resources" className="underline hover:text-blue-700">growth mindset activities</a> to accelerate your journey.
          </p>

        </section>
        <section id="programs" className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Signature Programs & Resources</h2>
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
        <section>
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Ready to Start Your Career Growth Journey?</h2>
          <p className="text-lg text-gray-600 mb-4">
            Whether you’re considering a career change, seeking leadership development, or looking to overcome burnout, Eric offers a proven framework for growth. <a href="/coaching" className="text-blue-700 underline">Explore coaching programs</a> or <a href="/contact" className="text-blue-700 underline">contact Eric</a> to get started.
          </p>
        </section>
      </main>

      {/* Biography */}
      <AnimatedSection className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16 bg-white rounded-3xl shadow-2xl p-8">
            <div className="flex-shrink-0 flex justify-center items-center w-full md:w-1/2">
              <img
                src="https://res.cloudinary.com/breather-com/image/upload/v1516308810/Breather_NYC_EricHorwitz-0108_wdgmyi.jpg"
                alt="Eric Horwitz speaking at a leadership workshop"
                loading="lazy"
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
                  Eric brings <span className="font-semibold">14 years of senior HR leadership experience as SVP and management consultant at PwC</span>, where he specialized in large-scale talent development and organizational transformation for Fortune 500 companies and high-growth startups in New York City and globally.
                  His diverse background includes expertise in storytelling and communication, skills that enhance his ability to connect with and inspire leaders at all levels, including healthcare, finance, and technology sectors.
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
                  He chairs the <span className="font-semibold">Columbia University Career Coaching Network (400k+ alumni)</span> and founded <span className="font-semibold">GEM (Gennex Management)</span>, a purpose-driven ecosystem and coaching network committed to guiding individuals and organizations through transformation, evolution, and meaningful connection worldwide.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#001C3E] mb-2">Professional Expertise & Approach</h2>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  Eric integrates <span className="font-semibold">proven frameworks including Ikigai, Maslow's Hierarchy, Attractive Selling, and his proprietary Architect Model (Vision → Plan → Practice → Impact)</span> to deliver measurable results.
                  Based in New York City, he brings a collaborative, optimistic approach to leadership development, guided by his core belief that sustainable transformation requires both strategic thinking and practical application.
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

      {/* How It Works Section for SEO */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How Executive Coaching with Eric Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">1. Discovery & Assessment</h3>
              <p className="text-gray-700">We begin with a comprehensive assessment of your goals, challenges, and leadership style. This ensures every coaching engagement is tailored to your unique needs and aspirations.</p>
            </FloatingCard>
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">2. Strategic Roadmap</h3>
              <p className="text-gray-700">Together, we co-create a clear, actionable plan using proven frameworks like Ikigai, Maslow's Hierarchy, and the Architect Model. Milestones and metrics are defined for measurable progress.</p>
            </FloatingCard>
            <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-[#001C3E] mb-4">3. Ongoing Support & Results</h3>
              <p className="text-gray-700">Through regular sessions, feedback, and accountability, you’ll develop new skills, overcome obstacles, and achieve sustainable transformation—both professionally and personally.</p>
            </FloatingCard>
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
