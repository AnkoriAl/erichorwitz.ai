'use client'

import { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  challengeArea: string;
  specificChallenge: string;
  additionalInfo: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    challengeArea: 'Executive Coaching',
    specificChallenge: '',
    additionalInfo: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://gem-cdhs.onrender.com/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          challengeArea: 'Executive Coaching',
          specificChallenge: '',
          additionalInfo: ''
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={formData.firstName}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={formData.lastName}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone (optional)</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClassName}
          />
        </div>
      </div>

      <div>
        <label htmlFor="challengeArea" className="block text-sm font-medium text-gray-700 mb-2">Which program are you interested in? *</label>
        <select
          id="challengeArea"
          name="challengeArea"
          required
          value={formData.challengeArea}
          onChange={handleChange}
          className={inputClassName}
        >
          <option value="Executive Coaching">Executive Coaching</option>
          <option value="The Treasure Chest">The Treasure Chest</option>
          <option value="The Renaissance Academy">The Renaissance Academy</option>
          <option value="Thriver">Thriver</option>
          <option value="Corporate Offsites">Corporate Offsites</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="specificChallenge" className="block text-sm font-medium text-gray-700 mb-2">Specific Challenge *</label>
        <textarea
          id="specificChallenge"
          name="specificChallenge"
          rows={4}
          required
          value={formData.specificChallenge}
          onChange={handleChange}
          className={inputClassName}
          placeholder="Describe your specific challenge..."
        />
      </div>

      <div>
        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">Additional Info</label>
        <textarea
          id="additionalInfo"
          name="additionalInfo"
          rows={4}
          value={formData.additionalInfo}
          onChange={handleChange}
          className={inputClassName}
          placeholder="Anything else you'd like us to know?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
      >
        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
        {status === 'loading' ? 'Submitting…' : 'Submit Inquiry'}
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-center">Thank you for your inquiry. We will contact you within 24 hours.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600 text-center">We apologize for the inconvenience. Please try again or contact us directly.</p>
      )}
    </form>
  );
}
