import React from 'react';
import Head from 'next/head';
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

  return (
    <div>
      <Head>
        <title>About Eric Horwitz | Executive Coach for Career Change, Growth Mindset & Leadership</title>
        <meta name="description" content="Learn about Eric Horwitz, a leading NYC executive coach specializing in career change, growth mindset, leadership development, and professional identity counseling. Discover his approach to career growth plan templates, work goal setting, and midlife career transitions." />
        <meta name="keywords" content="about Eric Horwitz, executive coach, career growth plan template, growth mindset, leadership development, career change in 40s, professional identity counseling, work goals to set, goal setting at work, midlife career crisis, GEM coaching, NYC, career transitions, personal development, professional development committee, career path decide, career zen, career transition resume examples, interview training skills, growth mindset quotes, goal setting books, burnout recovery, coaching programs, leadership development programs" />
      </Head>
      <main className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-20">
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#001C3E] to-blue-900 rounded-3xl shadow-xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
                About Eric Horwitz
                <span className="block text-lg md:text-2xl font-semibold text-blue-200 mt-2">Executive Coach for Career Change, Growth Mindset & Leadership</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-4 font-medium">
                Eric Horwitz is a leading executive coach, growth mindset advocate, and founder of GEM Coaching in NYC. With over 20 years of experience, Eric empowers professionals, leaders, and organizations to achieve breakthrough results, navigate career transitions, and develop a resilient professional identity.
              </p>
              <p className="text-base md:text-lg text-blue-100 mb-2">
                <span className="font-semibold text-white">Specializing in career change in your 30s, 40s, and 50s</span>, Eric’s coaching blends strategic rigor, human insight, and proven frameworks for leadership development, goal setting at work, and burnout recovery. He is known for his work on career growth plan templates, professional identity counseling, and supporting clients through midlife career crisis symptoms.
              </p>
              <p className="text-base md:text-lg text-blue-100">
                Based in New York City, Eric serves clients globally, offering one-on-one executive coaching, group programs, and workshops for organizations seeking to foster a culture of growth, resilience, and purpose. Try his <a href="/resources" className="underline font-semibold text-white hover:text-blue-200">career growth plan template</a>, <a href="/resources" className="underline font-semibold text-white hover:text-blue-200">goal setting worksheet</a>, and <a href="/resources" className="underline font-semibold text-white hover:text-blue-200">free career quiz for students and professionals</a>.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Credentials & Experience in Leadership Development</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>20+ years coaching leaders, founders, and professionals on growth mindset and career transitions</li>
            <li>Certified Professional Coach (ICF, Columbia University)</li>
            <li>Founder of GEM Coaching and the Renaissance Academy for coaching-skills certification</li>
            <li>Facilitator for leadership development programs at Fortune 500 companies</li>
            <li>Featured in The New York Times, Vogue, and Columbia University</li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Coaching Philosophy: Growth Mindset & Purpose</h2>
          <p className="text-lg text-gray-600">
            Eric believes that purpose isn’t found—it’s forged. His coaching empowers clients to clarify their vision, set meaningful work goals, and develop the growth mindset needed to thrive in today’s dynamic world. Explore <a href="/programs" className="underline hover:text-blue-700">leadership development programs</a> and <a href="/resources" className="underline hover:text-blue-700">growth mindset activities</a> to accelerate your journey.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Signature Programs & Resources</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li><a href="/programs" className="underline hover:text-blue-700">Renaissance Academy</a>: Career transition resume examples, interview training skills, and professional identity counseling for aspiring coaches.</li>
            <li><a href="/programs" className="underline hover:text-blue-700">Thriver Program</a>: Deep-accountability mastermind for midlife career change, work goal setting, and burnout recovery.</li>
            <li><a href="/resources" className="underline hover:text-blue-700">Growth mindset quotes</a>, <a href="/resources" className="underline hover:text-blue-700">goal setting books</a>, and <a href="/resources" className="underline hover:text-blue-700">career quizzes</a> for ongoing development.</li>
          </ul>
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
