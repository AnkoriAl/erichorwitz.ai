import Script from 'next/script';

export default function StructuredData() {
  const structuredData = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "GEM Coaching Network",
      "founder": {
        "@type": "Person",
        "name": "Eric Horwitz",
        "jobTitle": "Executive Coach"
      },
      "url": "https://erichorwitz.ai",
      "logo": "https://static.wixstatic.com/media/a372b4_34d13eb76f1d466992a52772a58bc5e3~mv2.png",
      "description": "Executive coaching services for career transitions and leadership development"
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Eric Horwitz",
      "jobTitle": "Executive Coach",
      "url": "https://erichorwitz.ai",
      "sameAs": [
        "https://www.linkedin.com/in/erichorwitz/",
        "https://gem.coach"
      ]
    }
  ]);

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="beforeInteractive"
    >
      {structuredData}
    </Script>
  );
}
