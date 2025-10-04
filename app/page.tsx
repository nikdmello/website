'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
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
    <main id="main-content" className="min-h-screen text-white relative overflow-hidden">
      {/* Global animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-black">
        <motion.div 
          className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>
      <div className="relative z-10">
        <Hero />
        <Projects />
        <Experience />
        <Achievements />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}