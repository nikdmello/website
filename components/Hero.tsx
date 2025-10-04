'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-gray-900 to-black">
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
      
      <div className="container mx-auto px-6 z-10">
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
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Software Engineer<br />
            <span className="text-lg text-gray-400">Building reliable systems at scale</span>
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="cyber-border rounded-lg p-4 bg-card-bg rainbow-glow">
              <p className="text-sm text-gray-400 mb-1">Experience</p>
              <p className="text-cyber-blue font-semibold text-sm">Production infrastructure • Blockchain • Full-stack development</p>
            </div>
          </motion.div>
          
          <motion.nav 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            aria-label="Social media links"
          >
            <a 
              href="mailto:nik.dmello@gmail.com" 
              className="p-3 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors rainbow-glow"
              aria-label="Send email to Nik D'Mello"
            >
              <Mail className="w-6 h-6 text-cyber-blue" aria-hidden="true" />
            </a>
            <a 
              href="https://linkedin.com/in/nikdmello" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors rainbow-glow"
              aria-label="View Nik D'Mello's LinkedIn profile (opens in new tab)"
            >
              <Linkedin className="w-6 h-6 text-cyber-blue" aria-hidden="true" />
            </a>
            <a 
              href="https://github.com/nikdmello" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card-bg hover:bg-cyber-blue/20 transition-colors rainbow-glow"
              aria-label="View Nik D'Mello's GitHub profile (opens in new tab)"
            >
              <Github className="w-6 h-6 text-cyber-blue" aria-hidden="true" />
            </a>
          </motion.nav>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="w-6 h-6 text-cyber-blue" />
      </motion.div>
    </section>
  )
}