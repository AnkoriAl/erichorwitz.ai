import type { Metadata } from 'next';
import ContactForm from './ContactForm';
import ServerSection from '../components/ServerSection';
import StaticCard from '../components/StaticCard';
import ServerBreadcrumb from '../components/ServerBreadcrumb';

export const metadata: Metadata = {
  title: 'Contact Eric Horwitz | Executive & Leadership Coaching Consultation',
  description: 'Request a consultation with executive & leadership coach Eric Horwitz. Submit your inquiry to explore personalized coaching, signature programs, and transformational workshops.',
  keywords: 'contact Eric Horwitz, executive coaching consultation, leadership coaching inquiry, GEM Coaching contact, coaching programs, professional development',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Contact Eric Horwitz | Executive Coaching',
    description: 'Request a consultation with executive & leadership coach Eric Horwitz',
    url: 'https://erichorwitz.ai/contact',
  },
  alternates: {
    canonical: 'https://erichorwitz.ai/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Architect Your Future Together</h1>
          <p className="text-xl text-blue-100">
            Ready to transform your purpose into performance? Let's start the conversation.<br />
            <span className="font-semibold">For additional resources, visit <a href="https://gem.coach" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">GEM Coaching website</a></span>
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <ServerSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServerBreadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <StaticCard className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Consultation</h2>
              <ContactForm />
            </StaticCard>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <StaticCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Professional Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#001C3E] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a
                      href="mailto:eric@gem.coach"
                      className="text-gray-700 hover:text-[#001C3E] transition-colors duration-200"
                    >
                      eric@gem.coach
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-[#001C3E] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">New York City</span>
                  </div>
                </div>
              </StaticCard>

              {/* Office Hours */}
              <StaticCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </StaticCard>
            </div>
          </div>
        </div>
      </ServerSection>

      {/* Quote Footer */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl md:text-3xl font-light italic mb-4">
            "Asking for help is a sign of strength, not weakness."
          </blockquote>
          <cite className="text-blue-200">— Eric Horwitz</cite>
        </div>
        <div className="mt-8 text-center">
          <a
            href="https://gem.coach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Visit GEM Coaching to learn more about our programs
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <ServerSection className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <StaticCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long is a typical coaching engagement?</h3>
              <p className="text-gray-700">Most clients work with Eric for 3-12 months, depending on their goals. We customize the engagement length to match your specific needs and objectives.</p>
            </StaticCard>
            <StaticCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer virtual coaching sessions?</h3>
              <p className="text-gray-700">Yes, we conduct coaching sessions both in-person in NYC and virtually via video conference for clients worldwide.</p>
            </StaticCard>
            <StaticCard className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Eric's coaching approach?</h3>
              <p className="text-gray-700">Eric uses his proprietary Architect Model (Vision → Plan → Practice → Impact) combined with proven frameworks like Ikigai and Maslow's Hierarchy to create personalized transformation journeys.</p>
            </StaticCard>
          </div>
        </div>
      </ServerSection>
    </>
  );
}
