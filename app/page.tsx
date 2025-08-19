import type { Metadata } from 'next';
import StructuredData from './components/StructuredData';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Eric Horwitz • Executive Coach',
  description: 'Discover the official site of Eric Horwitz, Executive Coach. Learn how his coaching, programs, and community help leaders forge purpose and achieve lasting success.',
  keywords: 'executive coaching, life coaching, leadership development, career coaching, Eric Horwitz',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz.',
    url: 'https://erichorwitz.ai',
    siteName: 'Eric Horwitz Coaching',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Horwitz Executive Coach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium">Purpose-Driven Transformation Since 2005</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <span className="block text-white">Architect Your</span>
                  <span className="block bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                    Future
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  Transform your career and leadership potential with NYC executive coach Eric Horwitz. From purpose to performance, forge your path to lasting success.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/coaching"
                    className="bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 text-center"
                  >
                    Start Your Transformation
                  </Link>
                  
                  <Link
                    href="/about"
                    className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-center backdrop-blur-sm"
                  >
                    Meet Eric
                  </Link>
                </div>
              </div>
              
              {/* Professional Photo */}
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://media.licdn.com/dms/image/sync/v2/D4E27AQEBwIKK59igGQ/articleshare-shrink_800/articleshare-shrink_800/0/1735395803533?e=2147483647&v=beta&t=k5j7jZldW3degFRM9eKhla5G9hJL2ftTMEsdFuJHoqc"
                    alt="Eric Horwitz, Executive Coach"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-white/20 shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#001C3E] mb-2">20+</div>
                <div className="text-gray-600">Years of Coaching</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#001C3E] mb-2">400k+</div>
                <div className="text-gray-600">Columbia Alumni Served</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#001C3E] mb-2">200+</div>
                <div className="text-gray-600">Corporate Workshops</div>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#001C3E] mb-2">2,500+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Signature Programs</h2>
              <p className="text-xl text-gray-600">
                Join thousands of leaders who have transformed their careers through Eric's proven frameworks.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Treasure Chest</h3>
                <p className="text-gray-600 mb-6">A collaborative community of self-improvers strengthening skills and expanding connections.</p>
                <Link href="https://gem.coach/treasure-chest" className="text-[#001C3E] font-semibold hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-[#001C3E] to-blue-900 text-white p-8 rounded-xl shadow-lg text-center border-2 border-[#001C3E]">
                <h3 className="text-2xl font-bold mb-4">Executive Coaching</h3>
                <p className="text-blue-100 mb-6">Personalized 1:1 coaching using the Architect Model for career transitions and leadership growth.</p>
                <Link href="/coaching" className="bg-white text-[#001C3E] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
                  Start Your Journey
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Thriver Program</h3>
                <p className="text-gray-600 mb-6">Deep-accountability mastermind for midlife career change and burnout recovery.</p>
                <Link href="https://gem.coach/thriver" className="text-[#001C3E] font-semibold hover:underline">
                  Explore Program →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-[#001C3E] to-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Leadership?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Take the first step toward purposeful growth and lasting success.
            </p>
            <Link
              href="/coaching"
              className="inline-block bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Start Your Journey
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}