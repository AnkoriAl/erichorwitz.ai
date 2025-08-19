'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface MobileMenuProps {
  navItems: Array<{ path: string; label: string; }>;
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button with custom hamburger icon */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="relative p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#001C3E] focus:ring-opacity-50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 relative">
            {/* Hamburger lines with animation */}
            <span 
              className={`absolute block h-0.5 w-6 bg-[#001C3E] transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 top-3' : 'top-1'
              }`}
            />
            <span 
              className={`absolute block h-0.5 w-6 bg-[#001C3E] transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100 top-3'
              }`}
            />
            <span 
              className={`absolute block h-0.5 w-6 bg-[#001C3E] transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 top-3' : 'top-5'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu overlay with improved animations */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMenuOpen ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={toggleMenu} 
        />
        
        {/* Menu panel */}
        <div className={`fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#001C3E] to-blue-900">
            <div className="flex items-center space-x-3">
              <img
                src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                alt="GEM Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-lg font-bold text-white">Menu</span>
            </div>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Close menu"
            >
              <div className="w-6 h-6 relative">
                <span className="absolute block h-0.5 w-6 bg-white transform rotate-45 top-3" />
                <span className="absolute block h-0.5 w-6 bg-white transform -rotate-45 top-3" />
              </div>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="p-6 flex-1 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li 
                  key={item.path}
                  className={`transform transition-all duration-300 ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                      pathname === item.path
                        ? 'bg-gradient-to-r from-[#001C3E] to-blue-900 text-white shadow-lg'
                        : 'text-[#001C3E] hover:bg-gray-50 hover:shadow-md hover:translate-x-1'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <svg 
                      className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                        pathname === item.path ? 'text-white' : 'text-gray-400 group-hover:translate-x-1'
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA Button */}
            <div className={`mt-8 pt-6 border-t border-gray-200 transform transition-all duration-300 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`} style={{ transitionDelay: `${navItems.length * 50}ms` }}>
              <Link
                href="/contact"
                className="block w-full bg-gradient-to-r from-[#001C3E] to-blue-900 text-white px-6 py-4 rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
