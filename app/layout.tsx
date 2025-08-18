import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://erichorwitz.ai'),
  title: 'Eric Horwitz • Executive Coach',
  description: 'Discover the official site of Eric Horwitz, Executive Coach. Learn how his coaching, programs, and community help leaders forge purpose and achieve lasting success.',
  keywords: 'executive coaching, life coaching, leadership development, career coaching, Eric Horwitz',
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'pIG0WcuE5z1QqEyjFc8wZjMeoYKJ5xmOPGAwDRALy-Q',
  },
  openGraph: {
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz. Specializing in career transitions, growth mindset development, and leadership coaching.',
    url: 'https://erichorwitz.ai',
    siteName: 'Eric Horwitz Coaching',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Eric Horwitz Executive Coach',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Horwitz • Executive Coach',
    description: 'Transform your career and leadership potential with NYC executive coach Eric Horwitz.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GSW578WSLS"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GSW578WSLS', {
              send_page_view: false
            });
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}