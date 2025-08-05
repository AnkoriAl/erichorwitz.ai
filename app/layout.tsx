import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'
import { GoogleAnalytics } from './components/GoogleAnalytics'
import AnalyticsDebugger from './components/AnalyticsDebugger'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eric Horwitz • Executive Coach',
  description: 'Discover the official site of Eric Horwitz, Executive Coach. Learn how his coaching, programs, and community help leaders forge purpose and achieve lasting success.',
  keywords: 'executive coaching, life coaching, leadership development, career coaching, Eric Horwitz',
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
        <AnalyticsDebugger />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}