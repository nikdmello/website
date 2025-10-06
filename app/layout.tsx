import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nikdmello.com'),
  title: 'Nik D\'Mello - Infrastructure Engineer',
  description: 'Architecting foundational infrastructure that enables AI agents to form autonomous economic networks. Production systems serving 8M+ residents with 70% efficiency gains.',
  keywords: ['AI agents', 'blockchain', 'infrastructure', 'software engineer', 'autonomous systems', 'Base L2', 'event-driven architecture'],
  authors: [{ name: 'Nik D\'Mello', url: 'https://nikdmello.com' }],
  creator: 'Nik D\'Mello',
  publisher: 'Nik D\'Mello',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikdmello.com',
    title: 'Nik D\'Mello - Infrastructure Engineer',
    description: 'Architecting foundational infrastructure that enables AI agents to form autonomous economic networks.',
    siteName: 'Nik D\'Mello Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nik D\'Mello - Infrastructure Engineer',
    description: 'Building production infrastructure for autonomous AI agent coordination',
    creator: '@nikdmello',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00f5ff',
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
              "description": "Infrastructure engineer building autonomous AI agent coordination systems",
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
      <body className={jetbrainsMono.className} suppressHydrationWarning>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}