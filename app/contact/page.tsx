'use client'

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import FloatingCard from '../components/FloatingCard';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    challengeArea: 'Career',
    specificChallenge: '',
    timeline: '',
    previousCoaching: 'No',
    additionalInfo: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('https://gem-cdhs.onrender.com/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          challengeArea: formData.challengeArea,
          specificChallenge: formData.specificChallenge,
          timeline: formData.timeline,
          previousCoaching: formData.previousCoaching,
          additionalInfo: formData.additionalInfo,
          submittedAt: new Date().toISOString()
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          challengeArea: 'Career',
          specificChallenge: '',
          timeline: '',
          previousCoaching: 'No',
          additionalInfo: ''
        });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }; // <-- Make sure this line ends with a semicolon

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001C3E] via-blue-900 to-indigo-900 text-white py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"
        ></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Ready to Transform?</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Let's Architect Your Future Together</h1>
          <p className="text-xl text-blue-100">
            Ready to transform your purpose into performance? Let's start the conversation.<br />
            <span className="font-semibold">For more, visit <a href="https://gem.coach" className="underline hover:text-blue-200" target="_blank" rel="noopener noreferrer">gem.coach</a></span>
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <FloatingCard className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Challenge Area */}
                <div>
                  <label htmlFor="challengeArea" className="block text-sm font-medium text-gray-700 mb-2">
                    Challenge Area *
                  </label>
                  <select
                    id="challengeArea"
                    name="challengeArea"
                    required
                    value={formData.challengeArea}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                  >
                    <option value="Career">Career</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Life Design">Life Design</option>
                    <option value="Relationship">Relationship</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Specific Challenge */}
                <div>
                  <label htmlFor="specificChallenge" className="block text-sm font-medium text-gray-700 mb-2">
                    Specific Challenge *
                  </label>
                  <textarea
                    id="specificChallenge"
                    name="specificChallenge"
                    rows={4}
                    required
                    value={formData.specificChallenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    placeholder="Describe your specific challenge..."
                  ></textarea>
                </div>
                {/* Additional Info */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Info
                  </label>
                  <textarea
                    id="additionalInfo"
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
                    placeholder="Anything else you'd like us to know?"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {status === 'loading' ? 'Submitting…' : 'Contact Coach E Now'}
                </button>

                {status === 'success' && (
                  <p className="text-green-600 text-center">Thank you! We will be in touch soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-600 text-center">Something went wrong. Please try again.</p>
                )}
              </form>
            </FloatingCard>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              
              {/* Direct Contact */}
              <FloatingCard className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#001C3E] mr-3" />
                  <a
                    href="mailto:eric@gem.coach"
                    className="text-gray-700 hover:text-[#001C3E] transition-colors duration-200"
                  >
                    eric@gem.coach
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-[#001C3E] mr-3" />
                  <span className="text-gray-700">New York City</span>
                </div>
              </div>
            </FloatingCard>

              {/* Office Hours */}
              <FloatingCard className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
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
              </FloatingCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

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
            Visit gem.coach for more info or to book a session
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FloatingCard className="p-6" delay={0.1}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long is a typical coaching engagement?</h3>
              <p className="text-gray-700">Most clients work with Eric for 3-12 months, depending on their goals. We customize the engagement length to match your specific needs and objectives.</p>
            </FloatingCard>
            <FloatingCard className="p-6" delay={0.2}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer virtual coaching sessions?</h3>
              <p className="text-gray-700">Yes, we conduct coaching sessions both in-person in NYC and virtually via video conference for clients worldwide.</p>
            </FloatingCard>
            <FloatingCard className="p-6" delay={0.3}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's Eric's coaching approach?</h3>
              <p className="text-gray-700">Eric uses his proprietary Architect Model (Vision → Plan → Practice → Impact) combined with proven frameworks like Ikigai and Maslow's Hierarchy to create personalized transformation journeys.</p>
            </FloatingCard>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
};

export default ContactPage;