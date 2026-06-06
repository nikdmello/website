'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import Image from 'next/image'
import SectionHeader from './SectionHeader'

type Project = {
  title: string
  subtitle: string
  description: string
  logo?: string
  githubUrl: string
  tags: string[]
  badge?: string
}

const projects: Project[] = [
  {
    title: 'Upside',
    subtitle: 'Creator <> Brand Marketplace',
    description: 'An iOS marketplace concept for connecting creators and brands in the GCC, built from curiosity about how modern creator partnerships could feel simpler and more direct.',
    logo: '/logos/upside_logo.png',
    githubUrl: 'https://github.com/nikdmello/upside',
    tags: ['Swift', 'iOS', 'Marketplace']
  },
  {
    title: 'Strongly',
    subtitle: 'Structured Workout Planning',
    description: 'A strength training app for structured workout planning, built around the idea that fitness software should make consistency feel easier, not more overwhelming.',
    logo: '/logos/strongly_logo.png',
    githubUrl: 'https://github.com/nikdmello/strongly',
    tags: ['Swift', 'iOS', 'Fitness']
  },
  {
    title: 'Open Signal',
    subtitle: 'Crypto Data and Signal Research',
    description: 'A research project for exploring crypto market data, signals, and decision workflows, with an emphasis on learning from patterns instead of reacting to noise.',
    githubUrl: 'https://github.com/nikdmello/open-signal',
    tags: ['TypeScript', 'Crypto', 'Research'],
    badge: 'OS'
  },
  {
    title: 'Source of Truth',
    subtitle: 'Structured Workflow System',
    description: 'A workflow system for turning scattered inputs into structured, reliable records that are easier to trust, revisit, and build from.',
    githubUrl: 'https://github.com/nikdmello/source-of-truth',
    tags: ['TypeScript', 'Workflow', 'Systems'],
    badge: 'ST'
  },
  {
    title: 'Zenesis Website',
    subtitle: 'Dubai Business Setup Site',
    description: 'A client-facing website for a Dubai business setup and advisory firm, focused on making complex services feel clear, credible, and easy to navigate.',
    githubUrl: 'https://github.com/nikdmello/zenesis-website',
    tags: ['TypeScript', 'Website', 'Business'],
    badge: 'ZW'
  },
  {
    title: 'Portfolio',
    subtitle: 'Personal Site',
    description: 'This site itself: a place to collect the projects, systems, experiments, and lessons that have shaped how I think and build.',
    githubUrl: 'https://github.com/nikdmello/portfolio',
    tags: ['TypeScript', 'Next.js', 'Portfolio'],
    badge: 'PF'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 xl:py-24">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Projects"
            description="A collection of things I’ve built, explored, or experimented with across apps, research tooling, workflow systems, and client-facing websites."
          />
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="cyber-border panel-sheen rainbow-glow rounded-3xl bg-card-bg px-7 py-7 transition-all duration-300 hover:glow-effect md:px-8"
            >
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-start gap-4">
                  {project.logo ? (
                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-black/80">
                      <Image
                        src={project.logo}
                        alt={`${project.title} logo`}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
                      {project.badge}
                    </div>
                  )}

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-base font-medium text-cyber-blue">{project.subtitle}</p>
                  </div>
                </div>

                <div className="flex h-full flex-col justify-between gap-6">
                  <p className="leading-relaxed text-white/88">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-1">
                    <div className="mb-4 h-px w-full bg-white/10" aria-hidden="true" />
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
    </section>
  )
}
