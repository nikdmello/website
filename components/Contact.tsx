'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's connect
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="cyber-border rounded-xl p-8 bg-card-bg rainbow-glow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href="mailto:nik.dmello@gmail.com"
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group text-center"
              >
                <div className="p-3 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Email</p>
                  <p className="text-gray-300 text-sm">nik.dmello@gmail.com</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/nikdmello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group text-center"
              >
                <div className="p-3 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">LinkedIn</p>
                  <p className="text-gray-300 text-sm">linkedin.com/in/nikdmello</p>
                </div>
              </a>

              <a 
                href="https://github.com/nikdmello"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group text-center"
              >
                <div className="p-3 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">GitHub</p>
                  <p className="text-gray-300 text-sm">github.com/nikdmello</p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 p-6 rounded-lg bg-gray-800 text-center">
                <div className="p-3 rounded-full bg-cyber-purple/20 text-cyber-purple">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Location</p>
                  <p className="text-gray-300 text-sm">Chicago, IL</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}