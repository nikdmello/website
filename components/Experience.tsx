'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Zap, Shield } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const experiences = [
  {
    title: 'Founder / Engineer',
    company: 'Swift Protocol',
    period: 'Apr 2025 – Present',
    icon: <Zap className="w-6 h-6" />,
    highlights: [
      'Architected autonomous agent payment protocol on Base L2 enabling AI agents to register identities and stream ETH payments with escrow security',
      'Built end-to-end system from Solidity smart contracts to Next.js frontend with 100% transaction reliability across 1,000+ test transactions'
    ],
    metrics: '100% transaction reliability, zero human intervention after setup'
  },
  {
    title: 'Software Developer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    icon: <Shield className="w-6 h-6" />,
    highlights: [
      'Built full-stack database deployment platform (Angular, NestJS, AWS) achieving 99.9% cost reduction vs Octopus Deploy ($140K+ to ~$100/year)',
      'Architected event-driven sync system using AWS serverless stack processing 10K+ records/hour, reducing manual operations by 70%',
      'Engineered CI/CD pipeline optimization with build artifact reuse, reducing deployment time by 50%'
    ],
    metrics: '99.9% cost reduction, 70% fewer manual operations, 50% faster deployments'
  },
  {
    title: 'BI Developer Co-op',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    icon: <TrendingUp className="w-6 h-6" />,
    highlights: [
      'Analyzed e-commerce traffic patterns driving 10% revenue increase through data-driven optimization strategies'
    ],
    metrics: '10% revenue increase through data-driven optimization'
  }
]

export default function Experience() {
  const isMobile = useIsMobile()
  
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building production systems at scale
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
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
              className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300 rainbow-glow"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex items-start gap-4 lg:min-w-[320px] lg:flex-shrink-0">
                  <div className="p-3 rounded-full bg-cyber-blue/20 text-cyber-blue">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyber-purple font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4 p-3 bg-cyber-blue/10 rounded-lg border border-cyber-blue/30">
                    <p className="text-cyber-blue font-semibold text-sm">Key Metrics</p>
                    <p className="text-white">{exp.metrics}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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