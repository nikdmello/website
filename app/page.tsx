'use client'

import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import OpenSource from '@/components/OpenSource'
import Projects from '@/components/Projects'
import Achievements from '@/components/Achievements'
import ScrollArrow from '@/components/ScrollArrow'

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1} className="min-h-screen text-white relative overflow-hidden outline-none">
      <div className="relative z-10 max-w-6xl mx-auto">
        <Hero />
        <Experience />
        <Projects />
        <OpenSource />
        <Achievements />
        
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