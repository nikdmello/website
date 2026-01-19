'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import ScrollArrow from './ScrollArrow'

export default function Hero() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  
  const companies = [
    { src: "/logos/associa_logo.jpeg", name: "Associa" },
    { src: "/logos/panagora_asset_management_logo.jpeg", name: "PanAgora Asset Management" },
    { src: "/logos/asics_digital_logo.jpeg", name: "ASICS Digital" },
    { src: "/logos/northeastern_university_logo.jpeg", name: "Northeastern University" },
    { src: "/logos/vscode_logo.png", name: "Microsoft VS Code" }
  ]

  useEffect(() => {
    const marquee = marqueeRef.current
    if (!marquee) return

    let animationId: number
    let startTime: number
    let totalWidth: number
    const duration = 16000

    const updateWidth = () => {
      setTimeout(() => {
        totalWidth = marquee.scrollWidth / 4
      }, 100)
    }

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      if (!totalWidth) {
        animationId = requestAnimationFrame(animate)
        return
      }
      
      const elapsed = currentTime - startTime
      const progress = (elapsed % duration) / duration
      const translateX = -progress * totalWidth
      
      marquee.style.transform = `translate3d(${translateX}px, 0, 0)`
      animationId = requestAnimationFrame(animate)
    }
    
    setTimeout(() => {
      updateWidth()
      setTimeout(() => {
        animationId = requestAnimationFrame(animate)
      }, 200)
    }, 800)
    
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

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
            className="text-5xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Nikhil D'Mello</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-16 font-light"
          >
            Software Engineer
          </motion.p>
          
          <div className="flex justify-center space-x-6 mb-20">
            {[
              { href: "mailto:nik.dmello@gmail.com", icon: Mail, label: "Send email to Nikhil D'Mello" },
              { href: "https://linkedin.com/in/nikdmello", icon: Linkedin, label: "View Nikhil D'Mello's LinkedIn profile (opens in new tab)", external: true },
              { href: "https://github.com/nikdmello", icon: Github, label: "View Nikhil D'Mello's GitHub profile (opens in new tab)", external: true }
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
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-cyber-blue" aria-hidden="true" />
                </motion.a>
              )
            })}
          </div>
          
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <div className="relative w-full overflow-hidden h-32" style={{maskImage: 'linear-gradient(to right, transparent, white 30%, white 70%, transparent)'}}>
              <div ref={marqueeRef} className="flex items-center">
                {[...companies, ...companies, ...companies, ...companies].map((company, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image 
                      src={company.src} 
                      alt={company.name} 
                      width={400} 
                      height={160} 
                      className="h-32 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -ml-3">
        <ScrollArrow 
          direction="down" 
          onClick={() => document.querySelector('section')?.nextElementSibling?.scrollIntoView({ behavior: 'smooth' })} 
        />
      </div>
    </section>
  )
}