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
    subtitle: 'Stripe for AI Agents',
    description: 'The problem: AI agents need autonomous payment infrastructure but existing systems require human intervention and can\'t handle micro-transactions. My solution: Production payment infrastructure enabling agents to transact sub-cent payments with cryptographic identity verification.',
    icon: <Bot className="w-8 h-8" />,
    tech: ['Solidity ^0.8.20', 'Next.js 14', 'TypeScript', 'Base L2', 'Ethers.js v6', 'Hardhat'],
    metrics: ['<Highlight>96% success rate</Highlight>', '<Highlight>Sub-cent payments</Highlight>', '<Highlight>20+ TPS</Highlight>'],
    highlights: ['3 smart contracts deployed', 'Autonomous agent economy', '100x cost reduction'],
    status: 'Production on Base L2',
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
    title: 'Message Pusher',
    subtitle: 'Event-Driven Sync System',
    description: 'The problem: Synchronous APIs were timing out on large datasets (1000+ records), causing manual intervention. My solution: Built an event-driven microservice that processes data asynchronously with job tracking and real-time status updates.',
    icon: <Cloud className="w-8 h-8" />,
    tech: ['C# .NET 8', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'SQS', 'CDK', 'CloudWatch'],
    metrics: ['<Highlight>10K+ records/hour</Highlight> processing', '<Highlight>99.9% uptime</Highlight>', '<Highlight>70% less manual work</Highlight>'],
    highlights: ['Strategy pattern for 6 entity types', 'Correlation IDs for tracing', 'Auto-scaling serverless architecture'],
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

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
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
                  <div className="inline-block px-3 py-1 bg-cyber-blue/20 text-cyber-blue text-sm rounded-full">
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-gray-300 leading-relaxed">{renderHighlightedText(project.description)}</p>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
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
                <div className="flex-1">
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
                <div className="flex-1">
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