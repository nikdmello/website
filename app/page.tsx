'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { initDebugMode } from './debug'

export default function Home() {
  useEffect(() => {
    initDebugMode();
  }, []);

  return (
    <main id="main-content" className="min-h-screen bg-dark-bg text-white">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}