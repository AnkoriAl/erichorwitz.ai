'use client'

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, Users, Award, Building, Sparkles, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import AnimatedSection from './AnimatedSection';
import FloatingCard from './FloatingCard';

export default function HomepageClient() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('https://gem-cdhs.onrender.com/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          source: 'EricHorwitz.ai Homepage',
          submittedAt: new Date().toISOString()
        }),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Welcome to the community.');
        setEmail('');
        setFirstName('');
      } else {
        setSubmitMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#001C3E] to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Transform Your Career.
              <br />
              <span className="text-blue-300">Unlock Your Potential.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto"
            >
              Executive coaching that helps driven professionals navigate career transitions, 
              overcome burnout, and build the leadership skills needed for lasting success.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact" 
                className="bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/programs" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#001C3E] transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" /> Explore Programs
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full backdrop-blur-sm"
        ></motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
        ></motion.div>
      </section>

      {/* Value Proposition Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3E] mb-6">
              Why Choose Eric Horwitz Coaching?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With proven methodologies and personalized approaches, we help you navigate 
              the complexities of career transformation and leadership development.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FloatingCard className="text-center p-8">
              <div className="bg-[#001C3E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">Strategic Clarity</h3>
              <p className="text-gray-600">
                Cut through the confusion and gain crystal-clear direction for your career 
                and leadership journey with personalized strategic planning.
              </p>
            </FloatingCard>

            <FloatingCard className="text-center p-8">
              <div className="bg-[#001C3E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">Accelerated Growth</h3>
              <p className="text-gray-600">
                Develop essential leadership skills and breakthrough limiting beliefs 
                that have been holding you back from your full potential.
              </p>
            </FloatingCard>

            <FloatingCard className="text-center p-8">
              <div className="bg-[#001C3E] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">Sustainable Success</h3>
              <p className="text-gray-600">
                Build lasting change with proven frameworks and ongoing support 
                that ensures your transformation sticks for years to come.
              </p>
            </FloatingCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Programs Preview Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3E] mb-6">
              Choose Your Path to Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From community-based learning to intensive personal transformation, 
              find the program that fits your goals and commitment level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Treasure Chest */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full flex flex-col">
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">The Treasure Chest</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Join a supportive community of growth-minded professionals. Monthly themes, 
                  weekly coaching, and peer connections to accelerate your development.
                </p>
                <Link 
                  href="/programs#treasure-chest" 
                  className="bg-[#001C3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-300 text-center"
                >
                  Learn More
                </Link>
              </FloatingCard>
            </motion.div>

            {/* Renaissance Academy */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full flex flex-col border-2 border-[#001C3E] relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#001C3E] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  MOST POPULAR
                </div>
                <div className="bg-gradient-to-br from-[#001C3E] to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">Renaissance Academy</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Comprehensive 12-week transformation program. One-on-one coaching, 
                  group masterminds, and strategic planning for major career pivots.
                </p>
                <Link 
                  href="/programs#renaissance-academy" 
                  className="bg-[#001C3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-300 text-center"
                >
                  Transform Now
                </Link>
              </FloatingCard>
            </motion.div>

            {/* Thriver Program */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full flex flex-col">
                <div className="bg-gradient-to-br from-green-500 to-green-700 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#001C3E]">Thriver Program</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Ongoing individual coaching for sustained growth. Monthly sessions, 
                  accountability, and continuous support for long-term success.
                </p>
                <Link 
                  href="/programs#thriver-program" 
                  className="bg-[#001C3E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-300 text-center"
                >
                  Start Thriving
                </Link>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3E] mb-6">
              What Clients Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from professionals who have worked with Eric to 
              achieve breakthrough results in their careers and leadership.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Sarah Chen" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#001C3E]">Sarah Chen</h4>
                    <p className="text-gray-600">Marketing Director → VP Strategy</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Eric helped me transition from marketing to strategy leadership. 
                  The Renaissance Academy gave me the frameworks and confidence to 
                  make a bold career move that increased my salary by 40%."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </FloatingCard>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Michael Rodriguez" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#001C3E]">Michael Rodriguez</h4>
                    <p className="text-gray-600">Burned Out Executive → Fulfilled Leader</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "I was completely burned out and considering leaving my industry entirely. 
                  Eric's coaching helped me rediscover my passion for leadership and 
                  transform my approach to work-life balance."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </FloatingCard>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <img 
                    src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Amanda Foster" 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-[#001C3E]">Amanda Foster</h4>
                    <p className="text-gray-600">Corporate Manager → Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-700 italic mb-4">
                  "The Treasure Chest community was exactly what I needed when 
                  starting my entrepreneurial journey. The support and weekly 
                  coaching gave me the courage to make the leap."
                </p>
                <div className="flex text-yellow-400">
                  ⭐⭐⭐⭐⭐
                </div>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Newsletter Signup Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-[#001C3E] to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <Mail className="w-16 h-16 mx-auto mb-6 text-blue-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join The Transformation Community
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get weekly insights, career strategies, and exclusive content 
              to accelerate your professional growth journey.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="px-6 py-4 rounded-xl text-[#001C3E] text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-6 py-4 rounded-xl text-[#001C3E] text-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Joining...' : 'Join the Community'}
                </button>
              </div>
              {submitMessage && (
                <p className={`mt-4 text-lg ${submitMessage.includes('Thank you') ? 'text-green-300' : 'text-red-300'}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3E] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get answers to common questions about executive coaching and our programs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#001C3E]">What is executive coaching?</h3>
                <p className="text-gray-700">
                  Executive coaching is a professional development process that helps leaders enhance their performance, 
                  develop leadership skills, navigate career transitions, and achieve their professional goals through 
                  personalized guidance and accountability.
                </p>
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#001C3E]">How can coaching help with career change in my 40s?</h3>
                <p className="text-gray-700">
                  Midlife career transitions require strategic planning, clarity of purpose, and confidence building. 
                  Our coaching helps you identify transferable skills, explore new opportunities, and create a 
                  practical roadmap for career transformation.
                </p>
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#001C3E]">What is a growth mindset and how do you develop it?</h3>
                <p className="text-gray-700">
                  A growth mindset is the belief that abilities and intelligence can be developed through effort and learning. 
                  We help you cultivate this mindset through practical exercises, reframing challenges as opportunities, 
                  and building resilience for continuous improvement.
                </p>
              </FloatingCard>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <FloatingCard className="p-8">
                <h3 className="text-xl font-bold mb-4 text-[#001C3E]">Do you offer coaching services in New York City?</h3>
                <p className="text-gray-700">
                  Yes, Eric Horwitz is based in NYC and offers both in-person coaching sessions and virtual coaching 
                  sessions for clients worldwide. Our programs are designed to accommodate busy executive schedules. 
                  Contact us at 917-525-0935 or info@gem.coach.
                </p>
              </FloatingCard>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#001C3E] mb-6">
              Ready to Transform Your Career?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Book a free consultation to discuss your goals and discover how 
              our coaching programs can accelerate your professional growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#001C3E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-900 transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Schedule Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/programs" 
                className="border-2 border-[#001C3E] text-[#001C3E] px-8 py-4 rounded-xl font-semibold hover:bg-[#001C3E] hover:text-white transition-colors duration-300"
              >
                View All Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}
