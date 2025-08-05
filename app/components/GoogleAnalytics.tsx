'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_TRACKING_ID = 'G-GSW578WSLS';

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const retryCountRef = useRef(0);
  const maxRetries = 50; // 5 seconds max wait time

  useEffect(() => {
    // Reset retry count on each navigation
    retryCountRef.current = 0;
    
    const trackPageView = () => {
      if (typeof window !== 'undefined' && window.gtag && typeof document !== 'undefined') {
        const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
        
        // Clear previous page data
        window.gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
          page_path: url,
          send_page_view: true // Explicitly send page view
        });
        
        return true; // Success
      } else {
        retryCountRef.current++;
        
        if (retryCountRef.current < maxRetries) {
          setTimeout(trackPageView, 100);
        } else {
          // Failed to load after maximum retries
        }
        
        return false; // Failed
      }
    };

    // Add a small delay to ensure DOM is fully updated
    const timeoutId = setTimeout(() => {
      trackPageView();
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [pathname, searchParams]);

  return null;
}

// Utility function for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Utility function for tracking page views manually
export const trackPageView = (path: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag && typeof document !== 'undefined') {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: path,
      page_title: title || document.title,
      page_location: window.location.href,
      send_page_view: true
    });
  }
};
