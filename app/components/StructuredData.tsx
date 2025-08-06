'use client'

import Script from 'next/script';

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GEM Coaching Network",
    "founder": {
      "@type": "Person",
      "name": "Eric Horwitz"
    },
    "url": "https://www.gem.coach",
    "alternateName": "Eric Horwitz Coaching",
    "logo": "https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png/v1/fill/w_1200,h_800,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/GEM%20LOGO.png",
    "sameAs": [
      "https://www.linkedin.com/in/gemllc/",
      "https://www.instagram.com/gemcoachingnetwork/",
      "https://www.gem.coach"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "telephone": "+1-917-525-0935",
      "email": "info@gem.coach",
      "url": "https://www.erichorwitz.ai/contact"
    },
    "description": "Executive coaching and leadership development programs by Eric Horwitz, helping professionals transform their careers and achieve lasting success.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "International Coaching Federation"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Eric Horwitz Executive Coaching - GEM Coaching",
    "image": "https://static.wixstatic.com/media/aa49a0_e469f3b49ab94248a35fc1b3c5f02673~mv2.jpeg/v1/crop/x_96,y_0,w_1843,h_1358/fill/w_912,h_672,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_63480F13E60D-1.jpeg",
    "url": "https://www.erichorwitz.ai",
    "telephone": "+1-917-525-0935",
    "email": "info@gem.coach",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.7589,
      "longitude": -73.9851
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "Available upon request",
    "serviceArea": {
      "@type": "Place",
      "name": "New York City and Global Virtual Services"
    },
    "memberOf": {
      "@type": "Organization",
      "name": "International Coaching Federation"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Executive Coaching Services",
    "provider": {
      "@type": "Person",
      "name": "Eric Horwitz",
      "jobTitle": "Executive Coach",
      "url": "https://www.erichorwitz.ai/about",
      "memberOf": {
        "@type": "Organization",
        "name": "International Coaching Federation"
      }
    },
    "serviceType": "Executive Coaching",
    "description": "Professional executive coaching services for career transitions, leadership development, and personal transformation including Treasure Chest community, Renaissance Academy, and individual coaching programs.",
    "areaServed": {
      "@type": "Place",
      "name": "New York City and Global Virtual Services"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Treasure Chest Community",
        "description": "Global self-improvement community for collective growth and reflection"
      },
      {
        "@type": "Offer", 
        "name": "Renaissance Academy",
        "description": "Comprehensive transformation program with coaching and strategic planning"
      },
      {
        "@type": "Offer",
        "name": "Individual Coaching",
        "description": "Personalized one-on-one coaching for sustained growth and development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is executive coaching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Executive coaching is a professional development process that helps leaders enhance their performance, develop leadership skills, navigate career transitions, and achieve their professional goals through personalized guidance and accountability."
        }
      },
      {
        "@type": "Question", 
        "name": "How can coaching help with career change in my 40s?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Midlife career transitions require strategic planning, clarity of purpose, and confidence building. Our coaching helps you identify transferable skills, explore new opportunities, and create a practical roadmap for career transformation."
        }
      },
      {
        "@type": "Question",
        "name": "What is a growth mindset and how do you develop it?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "A growth mindset is the belief that abilities and intelligence can be developed through effort and learning. We help you cultivate this mindset through practical exercises, reframing challenges as opportunities, and building resilience for continuous improvement."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer coaching services in New York City?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Eric Horwitz is based in NYC and offers both in-person coaching sessions and virtual coaching sessions for clients worldwide. Our programs are designed to accommodate busy executive schedules. Contact us at 917-525-0935 or info@gem.coach."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
    </>
  );
}
