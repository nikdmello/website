import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import SkipLink from '@/components/SkipLink'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://nikdmello.com'),
  title: 'Nik D\'Mello - Portfolio',
  description: 'Software engineer building production systems at scale.',
  keywords: ['AI agents', 'blockchain', 'infrastructure', 'software engineer', 'autonomous systems', 'Base L2', 'event-driven architecture'],
  authors: [{ name: 'Nik D\'Mello', url: 'https://nikdmello.com' }],
  creator: 'Nik D\'Mello',
  publisher: 'Nik D\'Mello',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikdmello.com',
    title: 'Nik D\'Mello - Portfolio',
    description: 'Software engineer building production systems at scale.',
    siteName: 'Nik D\'Mello Portfolio',
    images: [{
      url: '/images/pp.png',
      width: 800,
      height: 800,
      alt: 'Nik D\'Mello - Software Engineer',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nik D\'Mello - Portfolio',
    description: 'Software engineer building production systems at scale',
    creator: '@nikdmello',
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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nik D'Mello",
              "jobTitle": "Software Engineer",
              "description": "Software engineer building production systems at scale",
              "url": "https://nikdmello.com",
              "sameAs": [
                "https://linkedin.com/in/nikdmello",
                "https://github.com/nikdmello"
              ],
              "knowsAbout": [
                "Blockchain Development",
                "AI Agent Coordination",
                "Event-Driven Architecture",
                "AWS Serverless",
                "Production Infrastructure"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SkipLink />
        {children}
        <Analytics />
      </body>
    </html>
  )
}