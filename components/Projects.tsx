'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string
  subtitle: string
  description: string
  logo: string
  githubUrl: string
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Upside',
    subtitle: 'Creator-Brand Marketplace',
    description: 'SwiftUI marketplace app with role-aware onboarding, swipe-based discovery, and a polished match flow.',
    logo: '/logos/upside_logo.png',
    githubUrl: 'https://github.com/nikdmello/upside',
    tags: ['SwiftUI', 'Combine', 'iOS']
  },
  {
    title: 'Strongly',
    subtitle: 'Strength Training System',
    description: 'SwiftUI training app with adaptive scheduling, workout generation, and persisted plan state.',
    logo: '/logos/strongly_logo.png',
    githubUrl: 'https://github.com/nikdmello/strongly',
    tags: ['SwiftUI', 'Combine', 'iOS']
  }
]

export default function Projects() {
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
            Selected Projects
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="cyber-border rainbow-glow rounded-3xl bg-card-bg transition-all duration-300 hover:glow-effect">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                className="border-t border-white/10 px-8 py-8 transition-colors duration-300 hover:bg-white/[0.03] first:border-t-0 md:px-10"
              >
                <div className="flex flex-col gap-5 md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-10">
                  <div className="flex items-start gap-4">
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-black/80">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-base font-medium text-cyber-blue">{project.subtitle}</p>
                      <p className="mt-2 text-sm text-gray-400">{project.tags.join(' | ')}</p>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    <p className="leading-relaxed text-gray-300">
                      {project.description}
                    </p>

                    <div className="mt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyber-blue"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
