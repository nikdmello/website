'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import Image from 'next/image'

const contributions = [
  {
    title: 'KaTeX Regex Fix for jQuery Expressions',
    repo: 'microsoft/vscode',
    pr: '#269635',
    prUrl: 'https://github.com/microsoft/vscode/pull/269635',
    issueUrl: 'https://github.com/microsoft/vscode/issues/268378',
    date: 'Nov 2025',
    status: 'Merged',
    description: 'Fixed KaTeX regex to prevent jQuery expressions from being incorrectly parsed as math delimiters',
    impact: [
      'Resolved parsing conflicts between jQuery syntax and KaTeX math rendering',
      'Fixed edge cases with multiple dollar signs in code blocks',
      'Improved markdown preview accuracy for technical documentation'
    ]
  },
  {
    title: 'Screencast Mode Keyboard Shortcut Fix',
    repo: 'microsoft/vscode',
    pr: '#176149',
    prUrl: 'https://github.com/microsoft/vscode/pull/176149',
    issueUrl: 'https://github.com/microsoft/vscode/issues/173752',
    date: 'Mar 2023',
    status: 'Merged & Released',
    description: 'Fixed critical bug in screencast mode affecting keyboard shortcut display for developer recordings',
    impact: [
      'Improved developer experience for screencast recordings',
      'Released in March 2023 update'
    ]
  }
]

export default function OpenSource() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Open Source
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {contributions.map((contrib, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300 rainbow-glow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src="/logos/vscode_logo.png"
                    alt="VS Code"
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">{contrib.title}</h3>
                  <p className="text-cyber-purple font-semibold mb-2">{contrib.repo}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-gray-400">{contrib.date}</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full">
                      {contrib.status}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-4">{contrib.description}</p>

              <ul className="space-y-2 mb-6">
                {contrib.impact.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full mt-2.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a
                  href={contrib.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-cyber-blue/20 text-gray-300 hover:text-white text-sm rounded-lg transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {contrib.pr}
                </a>
                <a
                  href={contrib.issueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-cyber-blue/20 text-gray-300 hover:text-white text-sm rounded-lg transition-colors"
                >
                  View Issue
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
