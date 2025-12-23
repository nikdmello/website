'use client'

import { motion } from 'framer-motion'
import { Database, Cloud } from 'lucide-react'
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
    title: 'Message Pusher',
    subtitle: 'High-Throughput Event Processing System',
    description: 'Event-driven microservice with C# .NET 8 Lambda functions, EventBridge orchestration, and SQS message queuing. Processes 6 entity types with strategy pattern implementation, DynamoDB job tracking, and correlation ID tracing for 10K+ records/hour throughput.',
    icon: <Cloud className="w-8 h-8" />,
    tech: ['C# .NET', 'AWS Lambda', 'EventBridge', 'SQS', 'DynamoDB', 'Microservices'],
    architecture: 'Event-Driven + Strategy Pattern + Job Tracking',
    gradient: 'from-cyber-purple to-purple-600',
    metrics: ['10K+ records/hour', '99.9% uptime', '6 entity types']
  },
  {
    title: 'Database Schema Deployer',
    subtitle: 'DACPAC Deployment Orchestration Platform',
    description: 'Full-stack deployment platform with Angular frontend, NestJS backend, and AWS Step Functions orchestration. Manages DACPAC deployments across 6 environments with intelligent hosted/non-hosted database routing, CodeArtifact package management, and automated security group configuration.',
    icon: <Database className="w-8 h-8" />,
    tech: ['TypeScript', 'Angular', 'NestJS', 'AWS Lambda', 'DynamoDB', 'CI/CD'],
    architecture: 'SPA + API + Step Functions + CodeBuild',
    gradient: 'from-green-400 to-emerald-600',
    metrics: ['6 environments', 'DACPAC automation', 'Hosted/non-hosted routing']
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
            Technical Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
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

                </div>
              </div>

              <div className="flex-1 mb-6">
                <p className="text-gray-300 leading-relaxed mb-4">{renderHighlightedText(project.description)}</p>
                
                <div className="mb-4">
                  <p className="text-cyber-blue text-sm font-semibold mb-2">Architecture</p>
                  <p className="text-gray-400 text-sm">{project.architecture}</p>
                </div>
                
                <div className="mb-4">
                  <p className="text-cyber-blue text-sm font-semibold mb-2">Performance</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyber-blue/10 text-cyber-blue text-xs rounded border border-cyber-blue/30"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Tech Stack</p>
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