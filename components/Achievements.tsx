'use client'

import { motion } from 'framer-motion'
import { Trophy, Code, Play } from 'lucide-react'
import { useEffect, useState } from 'react'
export default function Achievements() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const images = [
    {
      src: "/images/winning-photo.jpeg",
      alt: "Nik D'Mello presenting Cubs ARcade",
      badge: "🥈 2ND"
    },
    {
      src: "/images/hackathon-presentation-2.jpeg",
      alt: "Cubs ARcade demo",
      badge: null
    },
    {
      src: "/images/hackathon-presentation-3.jpeg",
      alt: "Team presentation",
      badge: null
    }
  ]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 3000) // Change every 3 seconds
    
    return () => clearInterval(interval)
  }, [])
  
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

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-border rounded-xl p-6 bg-card-bg rainbow-glow relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-4">
              <Trophy className="w-6 h-6 text-yellow-400" />
              <h3 className="text-xl font-bold text-white">Cubs ARcade</h3>
              <span className="px-3 py-1 bg-yellow-400/20 text-yellow-400 text-sm rounded-full">$500 Award</span>
            </div>
            
            {/* Mobile: Content first, then image below with upward fade */}
            <div className="md:hidden space-y-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/30">
                  <Code className="w-6 h-6 text-cyber-purple" />
                  <div className="text-left">
                    <p className="text-white font-semibold text-lg">Built AR app in 30 hours</p>
                    <p className="text-gray-300">JavaScript & A-Frame</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed text-center">
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
              
              <div className="relative -mx-6 mb-0 h-64 overflow-hidden" style={{maskImage: 'linear-gradient(to top, black 60%, transparent)', marginBottom: '-1.5rem'}}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop: Side by side */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 h-80 md:h-96">
              <div className="flex flex-col justify-center h-full space-y-6">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-3 px-4 py-3 bg-cyber-purple/10 rounded-lg border border-cyber-purple/30">
                    <Code className="w-6 h-6 text-cyber-purple" />
                    <div className="text-left">
                      <p className="text-white font-semibold text-lg">Built AR app in 30 hours</p>
                      <p className="text-gray-300">JavaScript & A-Frame</p>
                    </div>

                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
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
              
              <div className="absolute top-0 right-0 bottom-0 left-1/2">
                <div className="relative h-full overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 30%, black 100%)'}}>
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            

          </motion.div>
        </div>
      </div>
    </section>
  )
}