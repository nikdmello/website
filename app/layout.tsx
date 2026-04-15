import type { Metadata } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import SkipLink from '@/components/SkipLink'
import BackgroundSlideshow from '@/components/BackgroundSlideshow'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display'
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500']
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
      className={`scroll-smooth ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
      style={{ background: '#000000' }}
    >
      <body suppressHydrationWarning className="font-sans" style={{ background: '#000000' }}>
        <BackgroundSlideshow />
        <div className="relative" style={{ zIndex: 10 }}>
          <SkipLink />
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
