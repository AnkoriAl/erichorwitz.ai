'use client'

import { useState } from 'react';
import { Copy, Share2 } from 'lucide-react';

interface QuoteInteractionsProps {
  quote: string;
}

export default function QuoteInteractions({ quote }: QuoteInteractionsProps) {
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);

  const copyToClipboard = async (quote: string) => {
    try {
      await navigator.clipboard.writeText(`"${quote}" — Eric Horwitz`);
      setCopiedQuote(quote);
      setTimeout(() => setCopiedQuote(null), 2000);
    } catch (err) {
      // Silent error handling - copy failed
    }
  };

  const shareQuote = async (quote: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Quote by Eric Horwitz',
          text: `"${quote}" — Eric Horwitz`,
          url: window.location.href,
        });
      } catch (err) {
        // Silent error handling - sharing failed
      }
    } else {
      copyToClipboard(quote);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => copyToClipboard(quote)}
          className="p-2 text-gray-500 hover:text-[#001C3E] hover:bg-gray-100 rounded-lg transition-colors duration-200"
          title="Copy quote"
        >
          <Copy className="h-4 w-4" />
        </button>
        <button
          onClick={() => shareQuote(quote)}
          className="p-2 text-gray-500 hover:text-[#001C3E] hover:bg-gray-100 rounded-lg transition-colors duration-200"
          title="Share quote"
        >
          <Share2 className="h-4 w-4" />
        </button>
      </div>
      
      {copiedQuote === quote && (
        <div className="text-green-600 text-sm mt-2 text-center">
          Quote copied to clipboard!
        </div>
      )}
    </div>
  );
}
