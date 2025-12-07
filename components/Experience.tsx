'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Zap, Shield, Users, GraduationCap } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const renderWhiteHighlightedText = (text: string) => {
  const parts = text.split(/(<Highlight[^>]*>[^<]+<\/Highlight>)/g)
  return parts.map((part, index) => {
    const match = part.match(/<Highlight[^>]*>([^<]+)<\/Highlight>/)
    if (match) {
      const [, content] = match
      return <span key={index} className="font-medium text-white">{content}</span>
    }
    return part
  })
}

const experiences = [
  {
    title: 'Founder / Engineer',
    company: 'Swift',
    period: 'Apr 2025 – Present',
    icon: <Zap className="w-6 h-6" />,
    problem: 'AI agents can\'t coordinate reliably. Partial failures break workflows, payments need manual intervention, and there\'s no trust between organizations',
    solution: 'Building atomic coordination infrastructure with blockchain settlement guaranteeing all-or-nothing execution across distributed agent networks',
    highlights: [
      'Architected blockchain settlement system preventing partial failures with <Highlight>automatic refunds</Highlight> on workflow failure',
      'Designed cross-organization payment layer processing <Highlight>sub-second transactions</Highlight> with <Highlight>100% success rate</Highlight>',
      'Built production system with smart contracts, orchestration engine, and TypeScript SDK for agent integration',
      'Enabling reliable multi-agent workflows where all agents succeed and get paid, or everything reverts'
    ],
    tech: ['TypeScript', 'Blockchain', 'Smart Contracts', 'Next.js', 'Solidity', 'Ethers.js'],
    metrics: '<Highlight>All-or-nothing execution</Highlight>, <Highlight>sub-second settlement</Highlight>, <Highlight>cross-org coordination</Highlight>'
  },
  {
    title: 'Software Developer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    icon: <Shield className="w-6 h-6" />,
    problem: 'Octopus Deploy was costing $140K+ annually while manual database deployments were error-prone across 5 environments',
    solution: 'Built full-stack Database Schema Deployer (DSD) with Angular frontend, NestJS backend, and AWS orchestration',
    highlights: [
      'Replaced expensive third-party tool achieving <Highlight>99.9% cost reduction</Highlight> (<Highlight>$140K+ to ~$100/year</Highlight>)',
      'Built event-driven sync system processing <Highlight>10K+ records/hour</Highlight> with <Highlight>99.9% uptime</Highlight>, eliminating API timeouts',
      'Automated DACPAC deployments across <Highlight>5 environments</Highlight> with intelligent hosted/non-hosted database routing',
      'Implemented multi-step deployment wizard with client selection, version management, and <Highlight>zero deployment errors</Highlight>'
    ],
    tech: ['Angular 20', 'NestJS', 'AWS Step Functions', 'CodeBuild', 'DynamoDB', 'CodeArtifact'],
    metrics: '<Highlight>$140K+ saved annually</Highlight>, <Highlight>5 environments</Highlight>, <Highlight>zero deployment errors</Highlight>'
  },
  {
    title: 'BI Developer',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    icon: <TrendingUp className="w-6 h-6" />,
    highlights: [
      'Analyzed e-commerce traffic patterns driving revenue optimization through data-driven strategies'
    ],
    metrics: '10% revenue increase through data-driven optimization'
  },
  {
    title: 'DevOps Engineer',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    icon: <Users className="w-6 h-6" />,
    highlights: [
      'Implemented Jenkins CI/CD pipeline automating deployment workflows and reducing deployment errors'
    ],
    metrics: '80% reduction in deployment time, improved release reliability'
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    period: 'Sep 2021 – Dec 2021',
    icon: <GraduationCap className="w-6 h-6" />,
    highlights: [
      'Provided 1-on-1 sessions and peer mentoring in Foundations of Data Science covering statistical concepts and programming challenges'
    ],
    metrics: 'Mentored <Highlight>200+ students</Highlight>'
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Experience
          </h2>
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
                
                <div className="flex-1 space-y-6">
                  {exp.problem && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Problem</p>
                      <p className="text-gray-300 leading-relaxed">{exp.problem}</p>
                    </div>
                  )}
                  
                  {exp.solution && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-gray-300 leading-relaxed">{exp.solution}</p>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Impact</p>
                    <p className="text-white leading-relaxed">{renderWhiteHighlightedText(exp.metrics)}</p>
                  </div>
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