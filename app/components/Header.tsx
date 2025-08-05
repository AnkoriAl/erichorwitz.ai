'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/programs', label: 'Programs' },
    { path: '/quotes', label: 'Quotes' },
    { path: '/resources', label: 'Resources' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  useEffect(() => {
    // Cleanup body overflow on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200/20' 
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group z-50">
              <div className="bg-transparent p-0 rounded-none transition-transform duration-200 group-hover:scale-105">
                <img
                  src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                  alt="GEM Logo"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div>
                <div className="font-semibold text-lg bg-gradient-to-r from-[#001C3E] to-blue-800 bg-clip-text text-transparent">Eric Horwitz</div>
                <div className="text-xs text-gray-500 -mt-1">Coach E</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:bg-gray-100/80 ${
                    isActive(item.path)
                      ? 'text-[#001C3E] bg-gray-100/60'
                      : 'text-gray-700 hover:text-[#001C3E]'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#001C3E] rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://gem.coach"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#001C3E] text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Visit GEM.Coach
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden relative z-50 p-2 rounded-full hover:bg-gray-100/80 transition-colors duration-200"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span 
                  className={`absolute top-1 left-0 w-5 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                />
                <span 
                  className={`absolute top-2.5 left-0 w-5 h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`absolute top-4 left-0 w-5 h-0.5 bg-gray-700 rounded-full transform transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200/20 transform transition-all duration-300 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : '-translate-y-4 opacity-0 pointer-events-none'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 transform ${
                    isActive(item.path)
                      ? 'text-[#001C3E] bg-gray-100/80 translate-x-1'
                      : 'text-gray-700 hover:text-[#001C3E] hover:bg-gray-50/80 hover:translate-x-1'
                  }`}
                  style={{
                    animationDelay: isMenuOpen ? `${index * 50}ms` : '0ms'
                  }}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/60 mt-4">
                <a
                  href="https://gem.coach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#001C3E] text-white px-4 py-3 rounded-xl text-base font-medium text-center hover:bg-blue-800 transition-all duration-200 transform hover:scale-105"
                  onClick={toggleMenu}
                >
                  Visit GEM.Coach
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;