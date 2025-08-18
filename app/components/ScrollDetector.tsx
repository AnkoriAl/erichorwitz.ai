'use client'

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ScrollDetectorProps {
  children: (isScrolled: boolean, pathname: string) => React.ReactNode;
}

export default function ScrollDetector({ children }: ScrollDetectorProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>{children(isScrolled, pathname)}</>;
}
