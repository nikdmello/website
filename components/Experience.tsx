'use client'

import { motion } from 'framer-motion'
import { Calendar, TrendingUp, Zap, Shield, Users } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const experiences = [
  {
    title: 'Founder / Engineer',
    company: 'Swift Protocol',
    period: 'Apr 2025 – Present',
    icon: <Zap className="w-6 h-6" />,
    highlights: [
      'Architected autonomous agent payment protocol on Base L2 enabling AI agents to register identities, exchange messages, and stream ETH payments with escrow security',
      'Developed smart contract suite with AgentRegistry for identity verification, AgentMessenger for coordination, and StreamManager for real-time payment streaming',
      'Built end-to-end autonomous system from smart contracts to Next.js frontend, demonstrating proven agent-to-agent payments with zero human intervention after setup',
      'Tech Stack: Solidity, Hardhat, Ethers.js v6, Node.js, TypeScript, Next.js 14, RainbowKit v2, Wagmi v2'
    ],
    metrics: '100% transaction reliability across 1,000+ test transactions on Base L2'
  },
  {
    title: 'Software Developer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    icon: <Shield className="w-6 h-6" />,
    highlights: [
      'Built full-stack database schema deployment platform using Angular, NestJS, and AWS DynamoDB, implementing scalable API services and intelligent deployment workflows that automated DACPAC distribution across multi-environment infrastructure',
      'Architected event-driven data synchronization system using AWS serverless stack (Lambda, EventBridge, DynamoDB, SQS) with .NET 8 API, processing 10K+ records/hour across 6 entity types and reducing manual resync operations by 70%',
      'Engineered CI/CD pipeline optimization by implementing build artifact reuse in Bitbucket, reducing deployment time by 50% while integrating SonarCloud quality gates and structured logging with correlation IDs',
      'Designed cloud governance pipeline mapping AWS CLI resource discovery to Port.io entities, enabling automated compliance audits and improving infrastructure visibility across 20+ cloud resources'
    ],
    metrics: '99.9% cost reduction vs Octopus Deploy, 70% reduction in manual operations, 50% faster deployments'
  },
  {
    title: 'BI Developer Co-op',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    icon: <TrendingUp className="w-6 h-6" />,
    highlights: [
      'Analyzed blog-driven e-commerce traffic identifying optimization opportunities that drove 10% revenue increase',
      'Automated consumer behavior reporting from BigQuery/SQL data pipelines, enabling data-driven marketing and merchandising decisions'
    ],
    metrics: '10% revenue increase through data-driven optimization'
  },
  {
    title: 'DevOps Engineer Co-op',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    icon: <Shield className="w-6 h-6" />,
    highlights: [
      'Implemented Jenkins CI/CD pipeline automating deployment workflows, eliminating 200+ hours of manual work and reducing deployment errors',
      'Developed PowerShell automation scripts for remote VM deployments, accelerating update workflows across distributed infrastructure'
    ],
    metrics: 'Eliminated 200+ hours of manual work, reduced deployment errors'
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    period: 'Jan 2021 – Apr 2021',
    icon: <Users className="w-6 h-6" />,
    highlights: [
      'Foundations of Data Science course with 200+ students',
      'Conducted 1-on-1 meetings to reinforce complex statistical concepts',
      'Guided students through data analysis assignments and programming challenges'
    ],
    metrics: 'Improved student performance through 1-on-1 support'
  }
]

export default function Experience() {
  const isMobile = useIsMobile()
  
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
            Production Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building systems that work reliably at scale
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