'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [currentLogo, setCurrentLogo] = useState(0)
  const [direction, setDirection] = useState(1)
  const companies = [
    { src: "/logos/associa_logo.jpeg", name: "Associa" },
    { src: "/logos/panagora_asset_management_logo.jpeg", name: "PanAgora Asset Management" },
    { src: "/logos/asics_digital_logo.jpeg", name: "ASICS Digital" },
    { src: "/logos/northeastern_university_logo.jpeg", name: "Northeastern University" }
  ]

  const nextLogo = () => {
    setDirection(1)
    setCurrentLogo((prev) => (prev + 1) % companies.length)
  }
  const prevLogo = () => {
    setDirection(-1)
    setCurrentLogo((prev) => (prev - 1 + companies.length) % companies.length)
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Nik D'Mello</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Engineer
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            4+ Years Experience • 4 Companies • Production Systems
          </motion.p>
          
          <motion.div 
            className="mb-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-sm text-gray-400 mb-6">Places I've Worked</p>
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <button 
                onClick={prevLogo}
                className="p-2 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors"
                aria-label="Previous company"
              >
                <ChevronLeft className="w-4 h-4 text-cyber-blue" />
              </button>
              
              <div className="flex flex-col items-center gap-4 w-40 md:w-48">
                <div className="h-24 md:h-28 w-full flex items-center justify-center relative overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentLogo}
                      custom={direction}
                      initial={(custom) => ({ x: custom > 0 ? 250 : -250 })}
                      animate={{ x: 0 }}
                      exit={(custom) => ({ x: custom > 0 ? -250 : 250 })}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <Image 
                        src={companies[currentLogo].src} 
                        alt={companies[currentLogo].name} 
                        width={280} 
                        height={96} 
                        className="h-24 md:h-28 w-auto opacity-80 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300" 
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="h-8 flex items-center justify-center">
                  <p className="text-xs text-gray-400 font-medium text-center px-2 leading-tight">
                    {companies[currentLogo].name}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={nextLogo}
                className="p-2 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors"
                aria-label="Next company"
              >
                <ChevronRight className="w-4 h-4 text-cyber-blue" />
              </button>
            </div>
          </motion.div>
          
          <div className="flex justify-center space-x-6 mb-16">
            {[
              { href: "mailto:nik.dmello@gmail.com", icon: Mail, label: "Send email to Nik D'Mello" },
              { href: "https://linkedin.com/in/nikdmello", icon: Linkedin, label: "View Nik D'Mello's LinkedIn profile (opens in new tab)", external: true },
              { href: "https://github.com/nikdmello", icon: Github, label: "View Nik D'Mello's GitHub profile (opens in new tab)", external: true }
            ].map((social, index) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors rainbow-glow"
                  aria-label={social.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-cyber-blue" aria-hidden="true" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
      
      <button 
        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 w-6 h-6 -ml-3 cursor-pointer hover:text-white transition-colors"
        aria-label="Scroll to projects section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="w-6 h-6 text-cyber-blue hover:text-white transition-colors" />
        </motion.div>
      </button>
    </section>
  )
}