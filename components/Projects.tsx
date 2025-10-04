'use client'

import { motion } from 'framer-motion'
import { Cpu, Database, Cloud, Bot } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const projects = [
  {
    title: 'Swift Protocol',
    subtitle: 'Autonomous Agent Payment Infrastructure',
    description: 'Payment infrastructure enabling AI agents to transact autonomously on Base L2 with cryptographic identity verification and streaming payments.',
    icon: <Bot className="w-8 h-8" />,
    tech: ['Solidity', 'Hardhat', 'TypeScript', 'Next.js 14', 'Ethers.js v6', 'Base L2'],
    metrics: ['100% reliability across 1,000+ test transactions', 'Zero human intervention after setup'],
    highlights: ['AgentRegistry for identity verification', 'StreamManager for real-time payments', 'TypeScript SDK + headless CLI'],
    status: 'Live on Base Testnet',
    gradient: 'from-cyber-blue to-blue-600'
  },
  {
    title: 'Database Schema Deployer',
    subtitle: 'Full-Stack Deployment Platform',
    description: 'Full-stack platform automating DACPAC deployments across multiple environments with Angular frontend, NestJS backend, and AWS orchestration.',
    icon: <Database className="w-8 h-8" />,
    tech: ['Angular 20', 'NestJS', 'DynamoDB', 'CodeBuild', 'Step Functions', 'TypeScript'],
    metrics: ['99.9% cost reduction ($140K+ to ~$100/year)', 'Multi-environment support (QA/UAT/Prod)'],
    highlights: ['Version-aware client filtering', 'AWS workflow orchestration', 'Intelligent redundancy prevention'],
    status: 'Production @ Associa',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Event-Driven Sync System',
    subtitle: 'AWS Serverless Microservice',
    description: 'Event-driven microservice synchronizing 6 entity types between property management systems using AWS Lambda, EventBridge, and DynamoDB.',
    icon: <Cloud className="w-8 h-8" />,
    tech: ['C# .NET 8', 'AWS Lambda', 'EventBridge', 'DynamoDB', 'SQS', 'CloudWatch'],
    metrics: ['70% reduction in manual operations', 'Eliminated API timeout issues'],
    highlights: ['EventBridge decoupling architecture', 'Strategy pattern for 6 entity types', 'Correlation IDs for tracing'],
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
            Technical Deep Dive
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production systems and research projects
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

              <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Metrics</h4>
                  <ul className="space-y-2">
                    {project.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-cyber-blue rounded-full" />
                        {metric}
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