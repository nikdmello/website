'use client'

import { motion } from 'framer-motion'
import { Trophy, Code, Play } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

export default function Achievements() {
  const isMobile = useIsMobile()
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Hackathon Winner
          </h2>
          <p className="text-lg text-gray-300">
            2nd place at Omnia x GENESIS AR Hackathon
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-border rounded-xl p-6 bg-card-bg rainbow-glow"
          >
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Cubs ARcade</h3>
              <span className="ml-auto px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full">$500 Award</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center h-full space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-3 px-4 py-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/30">
                    <Code className="w-6 h-6 text-cyber-purple" />
                    <div className="text-left">
                      <p className="text-white font-semibold text-lg">Built AR app in 30 hours</p>
                      <p className="text-gray-300">JavaScript & A-Frame</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    AR brand experience for Chicago Cubs
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <a 
                    href="https://www.youtube.com/shorts/phqxWoQm75M" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-red-600/25"
                  >
                    <Play className="w-5 h-5" />
                    Watch Demo
                  </a>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="relative">
                  <div className="cyber-border rounded-lg overflow-hidden">
                    <img
                      src="/images/winning-photo.jpeg"
                      alt="Nik D'Mello presenting Cubs ARcade"
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                    🥈 2ND
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="cyber-border rounded-lg overflow-hidden">
                    <img
                      src="/images/hackathon-presentation-2.jpeg"
                      alt="Cubs ARcade demo"
                      className="w-full h-20 object-cover"
                    />
                  </div>
                  <div className="cyber-border rounded-lg overflow-hidden">
                    <img
                      src="/images/hackathon-presentation-3.jpeg"
                      alt="Team presentation"
                      className="w-full h-20 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}