'use client'

import { motion } from 'framer-motion'
import { Database, Cloud, Bot } from 'lucide-react'
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
    subtitle: 'AI Agent Payment System',
    description: 'The problem: AI agents need to pay each other but can\'t use traditional banking. My solution: A blockchain payment system where AI agents can send money automatically, verify each other\'s identity, and stream payments in real-time.',
    icon: <Bot className="w-8 h-8" />,
    tech: ['Solidity', 'Hardhat', 'TypeScript', 'Next.js 14', 'Ethers.js v6', 'Base L2'],
    metrics: ['<Highlight>100% reliability</Highlight> across <Highlight>1,000+ test transactions</Highlight>', '<Highlight>Zero human intervention</Highlight> after setup'],
    highlights: ['Identity verification system', 'Real-time payment streaming', 'Developer tools and SDK'],
    status: 'Live on Base Testnet',
    gradient: 'from-cyber-blue to-blue-600'
  },
  {
    title: 'Database Schema Deployer',
    subtitle: 'Custom Deployment Platform',
    description: 'The problem: Associa was paying $140K+ annually for Octopus Deploy. My solution: Built a custom deployment platform from scratch that does the same job for ~$100/year in AWS costs.',
    icon: <Database className="w-8 h-8" />,
    tech: ['Angular 20', 'NestJS', 'DynamoDB', 'CodeBuild', 'Step Functions', 'TypeScript'],
    metrics: ['<Highlight>99.9% cost reduction</Highlight> (<Highlight>$140K+ to ~$100/year</Highlight>)', 'Multi-environment support (QA/UAT/Prod)'],
    highlights: ['Smart version management', 'Automated AWS workflows', 'Prevents duplicate deployments'],
    status: 'Production @ Associa',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Event-Driven Sync System',
    subtitle: 'Data Synchronization Service',
    description: 'The problem: Property management data was getting out of sync between systems, causing manual work. My solution: An automated system that keeps 6 different data types synchronized across multiple systems in real-time.',
    icon: <Cloud className="w-8 h-8" />,
    tech: ['C# .NET 8', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'SQS', 'CloudWatch'],
    metrics: ['<Highlight>70% reduction in manual operations</Highlight>', 'Eliminated API timeout issues'],
    highlights: ['Event-driven architecture', 'Handles 6 different data types', 'Full request tracing'],
    status: 'Production @ Associa',
    gradient: 'from-cyber-purple to-purple-600'
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
            What I've Built
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real systems solving real problems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
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
              className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300 group rainbow-glow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                  <p className="text-cyber-blue font-semibold mb-2">{project.subtitle}</p>
                  <div className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full">
                    {project.status}
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{renderHighlightedText(project.description)}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
                  <ul className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                        <span>{renderHighlightedText(metric)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Technical Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyber-purple rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
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