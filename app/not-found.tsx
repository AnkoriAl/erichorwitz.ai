import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404: Page Not Found | Eric Horwitz',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-[#001C3E] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you are looking for could not be found. It may have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="block w-full bg-[#001C3E] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200"
          >
            Go to Homepage
          </Link>
          
          <Link
            href="/about"
            className="block w-full border border-[#001C3E] text-[#001C3E] px-6 py-3 rounded-lg font-semibold hover:bg-[#001C3E] hover:text-white transition-colors duration-200"
          >
            Learn About Eric
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? <Link href="/contact" className="text-[#001C3E] hover:underline">Contact us</Link></p>
        </div>
      </div>
    </div>
  );
}
