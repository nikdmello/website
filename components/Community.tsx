'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Users, Code } from 'lucide-react'

export default function Community() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Community Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contributing to open source projects and sharing knowledge with the developer community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Open Source Contribution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyber-blue to-blue-600 text-white">
                <Code className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">VS Code Core Contributor</h3>
                <p className="text-cyber-blue font-semibold mb-2">Microsoft/vscode</p>
                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-sm rounded-full">
                  Merged & Released
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Fixed critical screencast mode bug affecting developer productivity. Identified and resolved 
              faulty logic in keyboard shortcut display functionality used by millions of developers worldwide.
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-white font-semibold mb-2">Impact</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                    Fixed bug affecting millions of VS Code users globally
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                    Improved developer experience for screencast recordings
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                    Merged into main branch and released in March 2023
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-3">
              <a 
                href="https://github.com/microsoft/vscode/pull/176149"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-cyber-blue/20 text-gray-300 hover:text-white text-sm rounded-lg transition-colors"
              >
                <Github className="w-4 h-4" />
                View PR
              </a>
              <a 
                href="https://github.com/microsoft/vscode/issues/173752"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-cyber-blue/20 text-gray-300 hover:text-white text-sm rounded-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Original Issue
              </a>
            </div>
          </motion.div>

          {/* Teaching & Mentoring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-full bg-gradient-to-r from-cyber-purple to-purple-600 text-white">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">Teaching & Mentoring</h3>
                <p className="text-cyber-purple font-semibold mb-2">Academic & Community Leadership</p>
                <div className="inline-block px-3 py-1 bg-cyber-purple/20 text-cyber-purple text-sm rounded-full">
                  200+ Students Impacted
                </div>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Passionate about sharing knowledge and helping others navigate complex technical concepts. 
              Experience teaching data science fundamentals and mentoring aspiring developers.
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">Teaching Experience</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full" />
                    TA for Foundations of Data Science (200+ students)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full" />
                    1-on-1 mentoring sessions for complex statistical concepts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full" />
                    Peer2Peer mentor helping students with programming challenges
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}