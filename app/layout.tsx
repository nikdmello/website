import type { Metadata } from 'next'
import { Instrument_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SkipLink from '@/components/SkipLink'
import './globals.css'

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display'
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nikdmello.com'),
  title: 'Nikhil D\'Mello | Software Engineer',
  description: 'Software engineer building backend services, distributed systems, and thoughtful products.',
  keywords: [
    'Nikhil D\'Mello',
    'software engineer',
    'backend engineer',
    'distributed systems',
    'AWS',
    'portfolio'
  ],
  authors: [{ name: 'Nikhil D\'Mello', url: 'https://nikdmello.com' }],
  creator: 'Nikhil D\'Mello',
  alternates: {
    canonical: 'https://nikdmello.com'
  },
  openGraph: {
    title: 'Nikhil D\'Mello | Software Engineer',
    description: 'Software engineer building backend services, distributed systems, and thoughtful products.',
    url: 'https://nikdmello.com',
    siteName: 'Nikhil D\'Mello',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nikhil D\'Mello | Software Engineer',
    description: 'Software engineer building backend services, distributed systems, and thoughtful products.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfairDisplay.variable} ${instrumentSans.variable}`}
      style={{ background: '#f4f1e8' }}
    >
      <body suppressHydrationWarning className="font-sans">
        <div>
          <SkipLink />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
