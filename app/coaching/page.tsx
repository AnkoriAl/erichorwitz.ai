import type { Metadata } from 'next';
import { Users, Building, Lightbulb, Target, BarChart, Sparkles } from 'lucide-react';
import ServerSection from '../components/ServerSection';
import ServerCard from '../components/ServerCard';
import ServerBreadcrumb from '../components/ServerBreadcrumb';

export const metadata: Metadata = {
  title: 'Executive Coaching, Growth Mindset & Career Change Programs | Eric Horwitz | GEM Coaching',
  description: 'Unlock your potential with executive coaching, growth mindset programs, career change support, leadership development, and team workshops by Eric Horwitz. Explore the Thriver Program, Treasure Chest, and proven frameworks for career growth, goal setting, and professional identity counseling.',
  keywords: 'executive coaching, growth mindset, career change in 40s, leadership development, career growth plan template, goal setting at work, professional identity counseling, GEM Coaching, Eric Horwitz, Thriver Program, Treasure Chest, team development workshops, corporate leadership coaching, personal development, work goals to set, midlife career crisis, coaching programs, leadership development programs, career transition resume examples, interview training skills, growth mindset quotes, goal setting books, burnout recovery, NYC executive coach',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Executive Coaching & Career Change Programs | Eric Horwitz',
    description: 'Transform Purpose into Performance with personalized coaching',
    url: 'https://erichorwitz.ai/coaching',
  },
  alternates: {
    canonical: 'https://erichorwitz.ai/coaching',
  },
};

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
    "Ikigai", "Maslow's Hierarchy", "GEM Thriver Journal", 
    "StrengthsFinder", "360 Feedback"
  ];

  const clientLogos = [
    "Credit Suisse", "IDEO", "Google", "NYU", "Bloomberg", "NYC DOE", "Reuters", "Columbia", "Bank of America", "Yale University", "Johnson & Johnson"
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Transform Purpose into Performance</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Executive Coaching, Growth Mindset & Career Change Programs</h1>
          <p className="text-xl text-blue-100 mb-8">
            Unlock your potential with executive coaching, growth mindset activities, and career change programs. Eric Horwitz offers personalized coaching for professionals, leaders, and organizations seeking breakthrough results, leadership development, and work goal setting.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <ServerSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServerBreadcrumb items={[{ name: 'Coaching', href: '/coaching' }]} />
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Coaching Services: Executive, Career Change & Growth Mindset</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ServerCard key={index} className="p-8 group">
                  <div className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </ServerCard>
              );
            })}
          </div>
        </div>
      </ServerSection>

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

      {/* Coaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Coaching Philosophy</h2>
            <p className="mt-4 text-lg text-gray-600">Clarity, growth, and sustainable success are at the core of what we do.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Coaching is Architecture</h3>
              <p className="text-gray-600">Therapy often digs through the past. We build for the future. Together, we design the blueprint for the life and work you want.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Every Gem Has Potential</h3>
              <p className="text-gray-600">Clarity begins when you stop lying to yourself about what matters most. Coaching is the pressure and polish that helps you shine.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transformation is Collective</h3>
              <p className="text-gray-600">Coaching is not done in isolation. Our community-driven approach creates accountability, shared wisdom, and deeper impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="py-16 bg-gray-50">
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Signature Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thriver Program</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                12-week intensive with paired accountability partners for exponential growth, midlife career change, and breakthrough results. Ideal for professionals seeking work goal setting, burnout recovery, and leadership development.
              </p>
              <a
                href="https://gem.coach/thriver"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001C3E] font-semibold hover:underline bg-blue-50 px-4 py-2 rounded transition text-center"
              >
                Learn More →
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Treasure Chest</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                A living community for self-improvers. Members collaborate and learn through shared classes and group coaching. Access 8 classes monthly plus optional one-off sessions.
              </p>
              <a
                href="https://gem.coach/treasure-chest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001C3E] font-semibold hover:underline bg-blue-50 px-4 py-2 rounded transition text-center"
              >
                Explore The Community →
              </a>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Renaissance Academy</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                For aspiring and established coaches. The Academy offers a rigorous framework blending coaching philosophy, practice, and financial development to help coaches thrive.
              </p>
              <a
                href="https://www.gem.coach/renaissance-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#001C3E] font-semibold hover:underline bg-blue-50 px-4 py-2 rounded transition text-center"
              >
                Join The Academy →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Approaches */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Signature GEM Approaches</h2>
            <p className="mt-4 text-lg text-gray-600">Proven frameworks to build alignment and create authentic value.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Attractive Selling</h3>
              <p className="text-gray-600">A philosophy of creating value so authentic it attracts. We replace outdated sales tactics with presence, generosity, and integrity.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The GEM Navigator</h3>
              <p className="text-gray-600">A structured intake system that ensures clients are paired with the right coach and program for a seamless fit.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">The You-Me-Agree Framework</h3>
              <p className="text-gray-600">A simple communication tool to build alignment and resolve conflicts, ensuring progress is always collaborative.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Trusted by Individuals at Leading Organizations</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 opacity-70">
            {clientLogos.map((logo, index) => (
              <span key={index} className="text-gray-700 font-semibold text-lg">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose GEM?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Because we don’t just give advice—we partner with you to create transformation. Our blend of personal coaching, structured programs, and collective community means you’re not only guided—you’re supported, challenged, and held accountable.
          </p>
        </div>
      </section>

      {/* CTA */}
      <ServerSection className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
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
      </ServerSection>
    </>
  );
};

export default CoachingPage;