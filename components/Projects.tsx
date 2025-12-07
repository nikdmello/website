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
    title: 'Swift',
    subtitle: 'Atomic Coordination for AI Agents',
    description: 'AI agents can\'t coordinate reliably. Partial failures break workflows, payments need manual intervention, and there\'s no trust between organizations. Swift guarantees atomic execution: all agents succeed and get paid, or everything reverts with full refunds.',
    icon: <Bot className="w-8 h-8" />,
    tech: ['TypeScript', 'Blockchain', 'Smart Contracts', 'Next.js'],
    status: 'Active Development',
    gradient: 'from-cyber-blue to-blue-600'
  },
  {
    title: 'Database Schema Deployer',
    subtitle: 'Custom Deployment Platform',
    description: 'Associa was paying $140K+ annually for Octopus Deploy. Built a custom deployment platform from scratch that does the same job for ~$100/year in AWS costs.',
    icon: <Database className="w-8 h-8" />,
    tech: ['Angular', 'NestJS', 'DynamoDB', 'Step Functions'],
    status: 'Production @ Associa',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Message Pusher',
    subtitle: 'Event-Driven Sync System',
    description: 'Synchronous APIs were timing out on 1000+ record datasets, requiring constant manual intervention. Built an event-driven microservice that processes asynchronously with job tracking. Now handles 10K+ records/hour with 99.9% uptime.',
    icon: <Cloud className="w-8 h-8" />,
    tech: ['C# .NET', 'Lambda', 'EventBridge', 'DynamoDB', 'SQS'],
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Projects
          </h2>
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

              <div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
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