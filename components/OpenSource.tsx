'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionHeader from './SectionHeader'

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
    <section id="open-source" className="py-20 xl:py-24">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Open Source"
            description="I contribute to tools I genuinely use and admire, usually by poking at edge cases, chasing weird bugs, and learning enough about the system to make small fixes that actually ship."
          />
        </motion.div>

        <div className="grid gap-6 xl:grid-cols-2">
          {contributions.map((contrib) => (
            <motion.article
              key={contrib.pr}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.1 }}
              className="cyber-border panel-sheen rainbow-glow rounded-3xl bg-card-bg px-8 py-8 transition-all duration-300 hover:glow-effect md:px-10"
            >
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3 text-sm">
                    <span className="text-white/62">VS Code</span>
                    <span className="text-white/38">|</span>
                    <span className="text-white/62">{contrib.date}</span>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white/82">
                      {contrib.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-white md:text-2xl">
                    {contrib.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-white/88">
                    {contrib.description}
                  </p>
                </div>

                <div>
                  <div className="mb-4 h-px w-full bg-white/10" aria-hidden="true" />
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
    </section>
  )
}
