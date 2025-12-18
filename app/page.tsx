'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

import { initDebugMode } from './debug'

export default function Home() {
  useEffect(() => {
    initDebugMode();
  }, []);

  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-white relative overflow-hidden outline-none">
      {/* Minimal background */}
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