import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Sparkles } from 'lucide-react';
import FloatingCard from '../components/FloatingCard';

export const metadata: Metadata = {
  title: 'Contact Eric Horwitz | Schedule Executive Coaching Consultation | GEM Coaching',
  description: 'Get in touch with Eric Horwitz for executive coaching, leadership development, and career transformation. Schedule a consultation to discuss your goals and explore coaching programs.',
  keywords: 'contact Eric Horwitz, executive coaching consultation, schedule coaching session, leadership development consultation, career coaching contact, GEM coaching contact, NYC executive coach',
  openGraph: {
    type: 'website',
    title: 'Contact Eric Horwitz | Executive Coaching Consultation',
    description: 'Get in touch to schedule your executive coaching consultation.',
    url: 'https://www.erichorwitz.ai/contact',
    siteName: 'Eric Horwitz Coaching',
    images: [
      {
        url: 'https://www.erichorwitz.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Eric Horwitz - Executive Coach',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Eric Horwitz | Executive Coaching Consultation',
    description: 'Get in touch to schedule your executive coaching consultation.',
    images: ['https://www.erichorwitz.ai/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.erichorwitz.ai/contact',
  },
};

const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Get in Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Eric Horwitz</h1>
          <p className="text-xl text-blue-100">
            Ready to transform your career and leadership potential? Let's discuss how coaching can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <FloatingCard className="p-6 text-center">
              <Mail className="h-8 w-8 text-[#001C3E] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600">info@gem.coach</p>
            </FloatingCard>
            <FloatingCard className="p-6 text-center">
              <Phone className="h-8 w-8 text-[#001C3E] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">917-525-0935</p>
            </FloatingCard>
            <FloatingCard className="p-6 text-center">
              <MapPin className="h-8 w-8 text-[#001C3E] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">New York City & Virtual</p>
            </FloatingCard>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#001C3E] mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact Eric directly to schedule a consultation and explore how coaching can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@gem.coach"
                className="bg-[#001C3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
              >
                Send Email
              </a>
              <a
                href="tel:917-525-0935"
                className="border-2 border-[#001C3E] text-[#001C3E] px-8 py-3 rounded-lg font-semibold hover:bg-[#001C3E] hover:text-white transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
