import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import SkipLink from '@/components/SkipLink'
import BackgroundSlideshow from '@/components/BackgroundSlideshow'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nikdmello.com'),
  title: 'Nik D\'Mello - Software Engineer',
  description: 'Software engineer building reliable systems and infrastructure.',
  openGraph: {
    title: 'Nik D\'Mello - Software Engineer',
    description: 'Software engineer building reliable systems and infrastructure.',
    url: 'https://nikdmello.com',
    siteName: 'Nik D\'Mello',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Nik D\'Mello - Software Engineer',
    description: 'Software engineer building reliable systems and infrastructure.',
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
    <html lang="en" className="scroll-smooth" style={{ background: 'transparent' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>
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