'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

type Contribution = {
  title: string
  date: string
  status: string
  description: string
  pr: string
  prUrl: string
}

const contributions: Contribution[] = [
  {
    title: 'KaTeX Regex Fix for jQuery Expressions',
    date: 'Nov 2025',
    status: 'Merged and Released',
    description:
      'Fixed markdown preview parsing so jQuery expressions were not incorrectly treated as KaTeX delimiters.',
    pr: 'PR #269635',
    prUrl: 'https://github.com/microsoft/vscode/pull/269635'
  },
  {
    title: 'Screencast Mode Keyboard Shortcut Fix',
    date: 'Mar 2023',
    status: 'Merged and Released',
    description:
      'Fixed a screencast mode bug affecting keyboard shortcut display for developer recordings.',
    pr: 'PR #176149',
    prUrl: 'https://github.com/microsoft/vscode/pull/176149'
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
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold gradient-text md:text-5xl">
            Open Source
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Merged fixes to VS Code from issues I ran into while using it day to day.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <div className="cyber-border rainbow-glow rounded-3xl bg-card-bg transition-all duration-300 hover:glow-effect">
            {contributions.map((contrib) => (
              <motion.article
                key={contrib.pr}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                className="border-t border-white/10 px-8 py-8 transition-colors duration-300 hover:bg-white/[0.03] first:border-t-0 md:px-10"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="text-gray-500">VS Code</span>
                      <span className="text-gray-600">|</span>
                      <span className="text-gray-500">{contrib.date}</span>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-gray-300">
                        {contrib.status}
                      </span>
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                      {contrib.title}
                    </h3>

                    <p className="mt-3 leading-relaxed text-gray-300">
                      {contrib.description}
                    </p>
                  </div>

                  <div className="md:pl-8">
                    <a
                      href={contrib.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyber-blue"
                    >
                      {contrib.pr}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
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
