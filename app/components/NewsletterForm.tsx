'use client';

import { useState } from 'react';

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className = '' }) => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('https://gem-cdhs.onrender.com/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          firstName,
          source: 'Eric Horwitz Website'
        })
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
        setFirstName('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md w-full items-center">
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full sm:flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#001C3E] focus:border-transparent transition-all duration-300"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto sm:flex-initial bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-green-300 mt-4">Thanks for subscribing! Check your inbox.</p>
      )}
      {status === 'error' && (
        <p className="text-red-300 mt-4">Sorry, something went wrong. Please try again.</p>
      )}
    </div>
  );
};

export default NewsletterForm;
