'use client'

import { motion } from 'framer-motion'
import { Trophy, Users, Code } from 'lucide-react'

export default function Achievements() {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-bg to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hackathon Winner</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            2nd place at Omnia x GENESIS AR Hackathon — built Cubs ARcade in 30 hours
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Achievement Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cyber-border rounded-xl p-8 bg-card-bg rainbow-glow">
              <div className="flex items-center mb-6">
                <Trophy className="w-8 h-8 text-silver mr-3" />
                <h3 className="text-2xl font-bold text-cyber-blue">Cubs ARcade - 2nd Place 🥈</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <Code className="w-5 h-5 text-cyber-purple mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">AR app in 30 hours using JavaScript & A-Frame</p>
                    <p className="text-gray-400 text-sm">Cubs-themed AR experience with player stats and minigames</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="w-5 h-5 text-cyber-green mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">$500 Best Use of 8th Wall Award</p>
                    <p className="text-gray-400 text-sm">Omnia x GENESIS AR Hackathon</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-lg p-4">
                <p className="text-sm text-gray-300 italic">
                  "30-hour sprint building AR experiences with JavaScript — 
                  proving I can rapidly learn new tech and deliver under pressure."
                </p>
              </div>
            </div>
          </motion.div>

          {/* Presentation Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="cyber-border rounded-xl overflow-hidden rainbow-glow">
                <img
                  src="/images/winning-photo.jpeg"
                  alt="Nik D'Mello presenting Cubs ARcade at Omnia x GENESIS AR Hackathon"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gray-300 text-black px-3 py-1 rounded-full text-sm font-bold">
                🥈 2ND PLACE
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-border rounded-lg overflow-hidden">
                <img
                  src="/images/hackathon-presentation-2.jpeg"
                  alt="Nik D'Mello demonstrating Cubs ARcade AR features"
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="cyber-border rounded-lg overflow-hidden">
                <img
                  src="/images/hackathon-presentation-3.jpeg"
                  alt="Nik D'Mello and team winning 2nd place at AR hackathon"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}