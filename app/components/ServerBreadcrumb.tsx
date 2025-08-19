import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface ServerBreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function ServerBreadcrumb({ items }: ServerBreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <Link href="/" className="flex items-center hover:text-[#001C3E] transition-colors">
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <svg className="h-4 w-4 mx-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
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
  );
}
