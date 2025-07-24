import React from 'react';
import Link from 'next/link';
import { Linkedin, Youtube, Headphones } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001C3E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-white to-gray-100 p-2 rounded-xl shadow-lg">
                <img
                  src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                  alt="GEM Logo"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-xl">Eric Horwitz</div>
                <div className="text-gray-300">Executive Coach</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforming leaders and entrepreneurs through purpose-driven coaching. Helping you architect your future since 2005.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/coaching" className="hover:text-white transition-colors">Coaching</Link></li>
              <li><Link href="/programs" className="hover:text-white transition-colors">Programs</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/company/gem-coaching"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://youtube.com/gemchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </a>
              <a
                href="https://open.spotify.com/show/shiny-things"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-white hover:scale-105 transition-all duration-300"
              >
                <Headphones className="h-4 w-4" />
                <span>Podcast (Shiny Things)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2005-2025 Eric Horwitz. All rights reserved.
          </div>
          <div className="text-gray-300 text-sm">
            <a href="mailto:hello@gem.coach" className="hover:text-white transition-colors mr-4">
              hello@gem.coach
            </a>
            <a href="tel:+12125550190" className="hover:text-white transition-colors">
              +1 (212) 555-0190
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;