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

        console.log('GA: Page view tracked successfully', { 
          title: document.title, 
          path: url, 
          location: window.location.href,
          timestamp: new Date().toISOString()
        });
        
        return true; // Success
      } else {
        retryCountRef.current++;
        
        if (retryCountRef.current < maxRetries) {
          console.log(`GA: Waiting for gtag to load... (attempt ${retryCountRef.current}/${maxRetries})`);
          setTimeout(trackPageView, 100);
        } else {
          console.error('GA: Failed to load gtag after maximum retries');
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
    
    console.log('GA: Event tracked', { action, category, label, value });
  } else {
    console.warn('GA: gtag not available for event tracking', { action, category, label, value });
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
    
    console.log('GA: Manual page view tracked', { path, title: title || document.title });
  } else {
    console.warn('GA: gtag not available for manual page view tracking', { path, title });
  }
};
