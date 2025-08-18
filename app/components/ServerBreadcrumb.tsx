import Link from 'next/link';
import Script from 'next/script';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ServerBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function ServerBreadcrumb({ items }: ServerBreadcrumbProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://erichorwitz.ai"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://erichorwitz.ai${item.href}`
      }))
    ]
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
        <Link href="/" className="flex items-center hover:text-[#001C3E] transition-colors">
          <Home className="h-4 w-4 mr-1" />
          Home
        </Link>
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-[#001C3E] font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-[#001C3E] transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}
