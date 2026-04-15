'use client'

import { type MouseEvent } from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import ScrollArrow from '@/components/ScrollArrow'
import Footer from '@/components/Footer'
import TopNav from '@/components/TopNav'
import CursorToast from '@/components/CursorToast'
import { useCursorToast } from '@/hooks/useCursorToast'
import { copyTextToClipboard } from '@/lib/copyTextToClipboard'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Home() {
  const { toast, showToast } = useCursorToast()

  const copyEmail = async (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget
    const clientX = event.clientX
    const clientY = event.clientY

    await copyTextToClipboard('nik.dmello@gmail.com')
    showToast({ target, clientX, clientY }, 'Email copied')
  }

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-white relative overflow-hidden outline-none">
      <TopNav />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Hero />
        <Experience />
        <OpenSource />
        <Skills />
        <Projects />

        <section id="contact" className="px-6 pb-8 pt-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold gradient-text md:text-5xl">
              Contact
            </h2>
          </div>

          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] cyber-border rainbow-glow bg-card-bg transition-all duration-300 hover:glow-effect">
            <div className="relative grid gap-8 px-6 py-8 md:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] md:gap-10 md:px-10 md:py-10">
              <div className="max-w-2xl">
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Let&apos;s connect!
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-300 md:text-lg">
                  If you&apos;re working on a product, platform, or idea that needs thoughtful engineering, I&apos;d be happy to connect.
                </p>
              </div>

              <div className="grid gap-8 border-t border-white/10 pt-8 md:border-t-0 md:border-l md:border-white/10 md:pl-8 md:pt-0">
                <div className="grid gap-8 md:grid-cols-2 md:gap-6">
                <div>
                  <p className="eyebrow text-[11px] text-gray-500">Links</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm">
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-gray-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </button>
                    <a
                      href="https://linkedin.com/in/nikdmello"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-gray-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="https://github.com/nikdmello"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-gray-200 transition-colors hover:bg-white/[0.08] hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-8 md:border-t-0 md:border-l md:border-white/10 md:pl-6 md:pt-0">
                  <p className="eyebrow text-[11px] text-gray-500">Location</p>
                  <div className="mt-4 flex items-start gap-4 text-sm text-gray-300">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-base text-white">Dubai, UAE</p>
                      <p className="mt-1 text-sm leading-relaxed text-gray-400">
                        Available across time zones for remote collaboration.
                      </p>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="flex justify-center py-12">
          <ScrollArrow 
            direction="up" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          />
        </div>
      </div>
      <Footer />
      <CursorToast toast={toast} />
    </main>
  )
}
