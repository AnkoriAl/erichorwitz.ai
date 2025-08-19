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

        {/* Client Logos */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center bg-[#001C3E]/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <span className="text-sm font-semibold text-[#001C3E] uppercase tracking-wide">Trusted Partnerships</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Be One of Many Individuals &<br />
                <span className="bg-gradient-to-r from-[#001C3E] to-blue-700 bg-clip-text text-transparent">
                  Corporations Coached by GEM
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From Fortune 500 companies to prestigious institutions, GEM has partnered with industry leaders worldwide
              </p>
            </div>
            
            {/* Premium Clients - Featured Row */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center h-16 md:h-20">
                    <img 
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/Google_2015_logo.svg?width=256" 
                      alt="Google" 
                      className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center h-16 md:h-20">
                    <img 
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/Goldman_Sachs_logo.svg?width=256" 
                      alt="Goldman Sachs" 
                      className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center h-16 md:h-20">
                    <img 
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/Netflix_2015_logo.svg?width=256" 
                      alt="Netflix" 
                      className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center h-16 md:h-20">
                    <img 
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/Blue_background_White_House_Logo_-_Washington,_D.C.png?width=256" 
                      alt="The White House" 
                      className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center justify-center h-16 md:h-20">
                    <img 
                      src="https://commons.wikimedia.org/wiki/Special:FilePath/Chanel_logo.svg?width=256" 
                      alt="Chanel" 
                      className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-90 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* All Clients Grid */}
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <span className="text-sm md:text-base font-semibold text-gray-700 opacity-80 group-hover:opacity-100 transition-colors text-center">Blink Fitness</span>
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/VOGUE_LOGO.svg?width=256" 
                    alt="Vogue" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Bank_of_America_logo.svg?width=256" 
                    alt="Bank of America" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Neuberger_Berman_logo.svg?width=256" 
                    alt="Neuberger Berman" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Columbia_University_1754_updated.svg?width=256" 
                    alt="Columbia University" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/NYC_DOE_Logo.png?width=256" 
                    alt="NYC Department of Education" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <span className="text-sm md:text-base font-semibold text-gray-700 opacity-80 group-hover:opacity-100 transition-colors text-center">Ali Forney Center</span>
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/JNJ_Logo_New.svg?width=256" 
                    alt="Johnson & Johnson" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Nyu_short_color.svg?width=256" 
                    alt="NYU" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Macquarie-logo.svg?width=256" 
                    alt="Macquarie" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_the_Ford_Foundation.svg?width=256" 
                    alt="Ford Foundation" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <span className="text-sm md:text-base font-semibold text-gray-700 opacity-80 group-hover:opacity-100 transition-colors text-center">EFCG</span>
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Penske_Logo.svg?width=256" 
                    alt="Penske" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_Deloitte.svg?width=256" 
                    alt="Deloitte" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/LifeBridge_Health_logo.svg?width=256" 
                    alt="LifeBridge Health" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <span className="text-sm md:text-base font-semibold text-gray-700 opacity-80 group-hover:opacity-100 transition-colors text-center">Trinity Church</span>
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/The_New_York_Times_logo.svg?width=256" 
                    alt="The New York Times" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/PwC_Company_Logo.svg?width=256" 
                    alt="PwC" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Louis_Vuitton_logo.svg?width=256" 
                    alt="Louis Vuitton" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="group bg-white/70 backdrop-blur-sm rounded-lg p-4 hover:bg-white hover:shadow-sm transition-all duration-300">
                <div className="flex items-center justify-center h-16 md:h-20">
                  <img 
                    src="https://commons.wikimedia.org/wiki/Special:FilePath/Russell_Reynolds_Associates_-_logo.svg?width=256" 
                    alt="Russell Reynolds Associates" 
                    className="max-h-12 md:max-h-14 w-auto object-contain filter grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <p className="text-lg text-gray-600 mb-6">
                Ready to join this prestigious community of leaders?
              </p>
              <Link
                href="/coaching"
                className="inline-flex items-center bg-[#001C3E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Transformation
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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