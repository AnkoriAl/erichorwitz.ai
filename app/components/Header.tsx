'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Eric' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/programs', label: 'Programs' },
    { path: '/quotes', label: 'Quotes' },
    { path: '/resources', label: 'Resources' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-transparent p-0 rounded-none">
              <img
                src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                alt="GEM Logo"
                className="h-16 w-auto object-contain" // Increased size
              />
            </div>
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-[#001C3E] to-blue-800 bg-clip-text text-transparent">Eric Horwitz</div>
              <div className="text-sm text-gray-600">Coach E</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#001C3E] ${
                  isActive(item.path)
                    ? 'text-[#001C3E] border-b-2 border-[#001C3E] pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Work with Eric
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-[#001C3E] font-bold'
                      : 'text-gray-700 hover:text-[#001C3E]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#001C3E] to-blue-800 text-white px-6 py-2 rounded-xl font-medium hover:shadow-lg transition-all duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Work with Eric
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;