'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import Highlight from './Highlight'
import Image from 'next/image'

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
    title: 'Upside',
    subtitle: 'Creator-Brand Marketplace',
    description: 'SwiftUI marketplace app that matches creators and brands with a swipe-based feed, role-aware onboarding, and a polished match flow that turns interest into warm intros.',
    logo: '/logos/upside_logo.png',
    githubUrl: 'https://github.com/nikdmello/upside',
    tech: ['Swift 5', 'SwiftUI', 'Combine', 'Xcode', 'iOS'],
    architecture: 'SwiftUI + MVVM with role-aware flows and modular UI components',
    gradient: 'from-cyber-blue to-blue-600',
    metrics: ['Smooth swipe deck', 'Minimal view updates', 'Explicit animations']
  },
  {
    title: 'Strongly',
    subtitle: 'Strength Training System',
    description: 'SwiftUI strength-training app with a split builder, per-muscle volume engine, and adaptive schedule progression tied to workout completion. It turns weekly plans into dynamic workouts and keeps training on track when schedules change.',
    logo: '/logos/strongly_logo.png',
    githubUrl: 'https://github.com/nikdmello/strongly',
    tech: ['Swift 5', 'SwiftUI', 'Combine', 'Xcode', 'iOS'],
    architecture: 'SwiftUI + MVVM with domain models, services, and persisted plan state',
    gradient: 'from-emerald-400 to-teal-600',
    metrics: ['Local computation', 'Async local storage', 'Lazy list rendering']
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
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-black/80">
                  <Image
                    src={project.logo}
                    alt={`${project.title} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{project.subtitle}</p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-cyber-blue/20 text-gray-300 hover:text-white text-xs rounded-lg transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
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
