'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,245,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
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
            Let's connect and build the future of autonomous systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="cyber-border rounded-xl p-8 bg-card-bg rainbow-glow">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <a 
                  href="mailto:nik.dmello@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">nik.dmello@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://linkedin.com/in/nikdmello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">LinkedIn</p>
                    <p className="text-gray-300">linkedin.com/in/nikdmello</p>
                  </div>
                </a>

                <a 
                  href="https://github.com/nikdmello"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-cyber-blue/20 transition-colors group"
                >
                  <div className="p-2 rounded-full bg-cyber-blue/20 text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">GitHub</p>
                    <p className="text-gray-300">github.com/nikdmello</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-gray-800">
                  <div className="p-2 rounded-full bg-cyber-purple/20 text-cyber-purple">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Chicago, IL</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="cyber-border rounded-xl p-8 bg-card-bg rainbow-glow">
              <h3 className="text-2xl font-bold text-white mb-6">Open Source & Teaching</h3>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30">
                  <h4 className="text-cyber-blue font-semibold mb-3">Open Source Contributor</h4>
                  <p className="text-gray-300 text-sm mb-2">Fixed critical screencast mode bug affecting millions of developers</p>
                  <a href="https://github.com/microsoft/vscode/pull/176149" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-white text-sm transition-colors">View Merged PR →</a>
                </div>

                <div className="p-4 rounded-lg bg-gradient-to-r from-cyber-purple/10 to-pink-500/10 border border-cyber-purple/30">
                  <h4 className="text-cyber-purple font-semibold mb-3">Teaching Assistant</h4>
                  <p className="text-gray-300 text-sm">Foundations of Data Science (200+ students) • 1-on-1 mentoring • Python programming and data analysis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}