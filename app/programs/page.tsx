import React from 'react';
import { Award, Users, Gem } from 'lucide-react';
import Link from 'next/link';

const ProgramsPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#001C3E] to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">GEM Programs</h1>
          <p className="text-xl text-blue-100">
            Transform your potential through community, certification, and deep accountability
          </p>
        {/* Google Analytics */}
        </div>
      </section>

      {/* Programs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Treasure Chest */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Gem className="h-8 w-8 text-[#001C3E] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">The Treasure Chest</h2>
              </div>
              <p className="text-lg text-[#001C3E] font-semibold mb-4">
                "Collective self-improvement. Reflect, grow, and shine."
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Global virtual community founded in 2020. Monthly themed workshops, peer masterminds, 
                and live Q&A sessions with Eric. Experience the power of collective wisdom in a 
                supportive environment designed for continuous growth.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Features:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Group coaching sessions</li>
                  <li>• Resource vault with tools and templates</li>
                  <li>• Accountability partners matching</li>
                  <li>• Monthly live Q&A with Eric</li>
                </ul>
              </div>

              <blockquote className="bg-gray-50 border-l-4 border-[#001C3E] p-4 italic text-gray-700 mb-6">
                "Our collective wisdom empowers us."
              </blockquote>

              <a
                href="https://gem.coach/treasure-chest"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#001C3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block"
              >
                Learn More at gem.coach
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Community gathering"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Renaissance Academy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg"
                alt="Learning and development"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-[#001C3E] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Renaissance Academy</h2>
              </div>
              <p className="text-lg text-[#001C3E] font-semibold mb-4">
                "Turn helping instincts into coaching mastery."
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                6-month certification covering core coaching competencies, ethics, and business-building 
                under Eric's direct mentorship. Transform your natural helping abilities into professional 
                coaching skills.
              </p>
              
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Curriculum Snapshot:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Module 1: Coaching Fundamentals</li>
                  <li>• Module 2: Neuroscience of Change</li>
                  <li>• Module 3: Business of Coaching</li>
                  <li>• Module 4: Practicum & Assessment</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-800 font-medium">
                  <strong>Outcome:</strong> Graduates become GEM-Certified Coaches, eligible for our referral network.
                </p>
              </div>

              <blockquote className="bg-gray-50 border-l-4 border-[#001C3E] p-4 italic text-gray-700 mb-6">
                "Purpose isn't found — it's forged, then shared."
              </blockquote>

              <a
                href="https://gem.coach/renaissance-academy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#001C3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block"
              >
                Learn More at gem.coach
              </a>
            </div>
          </div>

          {/* Thriver Program */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Users className="h-8 w-8 text-[#001C3E] mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Thriver Program</h2>
              </div>
              <p className="text-lg text-[#001C3E] font-semibold mb-4">
                "Deep accountability. Exponential growth."
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                12-week micro-mastermind pairing 4–6 leaders with Eric for structured goal-tracking, 
                weekly "pressure tests," and progress metrics. This intensive program is designed for 
                high-achievers ready to break through to their next level of success.
              </p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">What You Get:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Weekly 90-minute group sessions with Eric</li>
                  <li>• Paired accountability partnerships</li>
                  <li>• Custom goal-tracking system</li>
                  <li>• Progress measurement and iteration</li>
                  <li>• Access to GEM's full methodology</li>
                </ul>
              </div>

              <a
                href="https://gem.coach/thriver"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#001C3E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-block"
              >
                Learn More at gem.coach
              </a>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Team collaboration"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001C3E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Choose the program that aligns with your growth goals and join a community of purpose-driven individuals.
          </p>
          <a
            href="https://gem.coach"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#001C3E] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Visit gem.coach for all programs
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
