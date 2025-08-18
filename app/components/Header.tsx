import Link from 'next/link';

const Header: React.FC = () => {
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png"
                alt="GEM Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-[#001C3E]">
                Eric Horwitz
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-3 py-2 rounded-md text-sm font-medium text-[#001C3E] hover:bg-gray-100 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#001C3E] to-blue-800 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu - simplified for now */}
          <div className="md:hidden">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md font-semibold bg-gradient-to-r from-[#001C3E] to-blue-800 text-white text-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;