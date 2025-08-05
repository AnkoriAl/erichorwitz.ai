'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AnalyticsDebugger() {
  const [isGA4Loaded, setIsGA4Loaded] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [pageViews, setPageViews] = useState(0);
  const [lastNavigation, setLastNavigation] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    // Set client-side flag to prevent hydration issues
    setIsClient(true);
    
    // Check if GA4 is loaded
    const checkGA4 = setInterval(() => {
      if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
        setIsGA4Loaded(true);
        clearInterval(checkGA4);
      }
    }, 100);

    // Track current path - only on client side
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    return () => clearInterval(checkGA4);
  }, []);

  // Track navigation changes
  useEffect(() => {
    if (isClient) {
      setCurrentPath(pathname);
      setPageViews(prev => prev + 1);
      setLastNavigation(new Date().toLocaleTimeString());
    }
  }, [pathname, isClient]);

  // Only show in development and after client hydration
  if (process.env.NODE_ENV !== 'development' || !isClient) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs max-w-xs z-50">
      <div className="font-bold mb-1">Analytics Debug</div>
      <div>GA4 Loaded: {isGA4Loaded ? '✅' : '❌'}</div>
      <div>Current Path: {currentPath}</div>
      <div>Page Views: {pageViews}</div>
      <div>Last Nav: {lastNavigation}</div>
      <div>Page Title: {isClient && typeof document !== 'undefined' ? document.title : ''}</div>
    </div>
  );
}
