'use client'

import { motion } from 'framer-motion'
import { Database, Cloud } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import Highlight from './Highlight'

const renderHighlightedText = (text: string) => {
  const parts = text.split(/(<Highlight[^>]*>[^<]+<\/Highlight>)/g)
  return parts.map((part, index) => {
    const match = part.match(/<Highlight[^>]*>([^<]+)<\/Highlight>/)
    if (match) {
      const [, content] = match
      return <Highlight key={index}>{content}</Highlight>
    }
    return part
  })
}

const projects = [
  {
    title: 'Swift Protocol',
    subtitle: 'Atomic Coordination for AI Agents',
    description: 'Blockchain-based coordination infrastructure with Solidity smart contracts on Base L2 and Express.js orchestration engine. Implements atomic workflow execution with automatic rollback, preventing partial failures in multi-agent workflows through guaranteed all-or-nothing execution.',
    icon: <Database className="w-8 h-8" />,
    tech: ['Solidity', 'JavaScript', 'Node.js', 'Express.js', 'Docker', 'Git'],
    architecture: 'Smart Contracts + Orchestrator + Client SDK',
    gradient: 'from-cyber-blue to-blue-600',
    metrics: ['Atomic guarantees', 'Base L2 deployment', 'All-or-nothing execution']
  }
]

export default function Projects() {
  const isMobile = useIsMobile()
  
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Component = isMobile ? 'div' : motion.div
            const props = isMobile ? {} : {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              transition: { duration: 0.3, ease: "easeOut" },
              viewport: { once: true, amount: 0.1 }
            }
            
            return (
            <Component
              key={index}
              {...props}
              className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300 group rainbow-glow flex flex-col"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{project.subtitle}</p>

                </div>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">{renderHighlightedText(project.description)}</p>
                
                <div className="mb-4">
                  <p className="text-cyber-blue text-sm font-semibold mb-2">Architecture</p>
                  <p className="text-gray-400 text-sm">{project.architecture}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-cyber-blue text-sm font-semibold mb-2">Performance</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded border border-cyber-blue/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Component>
            )
          })}
        </div>
      </div>
    </section>
  )
}