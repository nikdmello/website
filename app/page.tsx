'use client'

import { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import ScrollArrow from '@/components/ScrollArrow'
import { FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    if (!copiedEmail) return

    const timeoutId = window.setTimeout(() => setCopiedEmail(false), 1600)
    return () => window.clearTimeout(timeoutId)
  }, [copiedEmail])

  const copyEmail = async () => {
    await navigator.clipboard.writeText('nik.dmello@gmail.com')
    setCopiedEmail(true)
  }

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-white relative overflow-hidden outline-none">
      <div className="relative z-10 max-w-6xl mx-auto">
        <Hero />
        <Experience />
        <OpenSource />
        <Projects />

        <div className="px-6 pb-4 pt-2">
          <div className="mx-auto max-w-5xl border-t border-white/10 pt-6">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Dubai, UAE</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href="https://linkedin.com/in/nikdmello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/nikdmello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {copiedEmail ? 'Copied' : 'Email'}
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center py-12">
          <ScrollArrow 
            direction="up" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          />
        </div>
      </div>
    </main>
  )
}
