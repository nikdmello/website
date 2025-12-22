'use client'

import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-white relative overflow-hidden outline-none">
      <div className="fixed inset-0 bg-black" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Achievements />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}