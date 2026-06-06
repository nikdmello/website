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
import SectionHeader from '@/components/SectionHeader'
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
      <div className="relative z-10">
        <Hero />
        <Experience />
        <OpenSource />
        <Skills />
        <Projects />

        <section id="contact" className="px-0 pb-8 pt-8 md:pt-12">
          <div className="site-shell">
            <SectionHeader
              title="Contact"
              description="If there’s something thoughtful, useful, or ambitious worth building, I’d be happy to hear about it."
            />

            <div className="relative rounded-[2rem] rainbow-glow transition-all duration-300">
              <div className="relative overflow-hidden rounded-[2rem] cyber-border panel-sheen bg-card-bg">
                <div className="relative grid gap-10 px-6 py-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-12 lg:px-10 lg:py-10 xl:px-12 xl:py-12">
                  <div className="max-w-3xl">
                    <p className="text-sm font-medium text-white/65">Direct Contact</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-[2.6rem]">
                      Let&apos;s connect.
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
                      I&apos;m always interested in thoughtful products, useful systems, and teams building things that matter.
                    </p>
                  </div>

                  <div className="grid gap-8 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                      <div>
                        <p className="text-sm font-medium text-white/65">Links</p>
                        <div className="mt-4 grid gap-3 text-sm">
                          <button
                            type="button"
                            onClick={copyEmail}
                            className="inline-flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-left text-gray-200 transition-colors hover:text-white"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              Email
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                          <a
                            href="https://linkedin.com/in/nikdmello"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between gap-3 border-b border-white/10 pb-3 text-gray-200 transition-colors hover:text-white"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Linkedin className="h-4 w-4" />
                              LinkedIn
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                          <a
                            href="https://github.com/nikdmello"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-between gap-3 pb-1 text-gray-200 transition-colors hover:text-white"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Github className="h-4 w-4" />
                              GitHub
                            </span>
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-white/65">Location</p>
                        <div className="mt-4 flex items-start gap-4 text-sm text-white/86">
                          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.05] text-white">
                            <MapPin className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-base text-white">Dubai, UAE</p>
                            <p className="mt-1 text-sm leading-relaxed text-white/68">
                              Available across time zones for remote collaboration.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="site-shell flex justify-center py-12">
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
