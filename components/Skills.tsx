'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Cpu, Zap, Shield } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'

const skillCategories = [
  {
    title: 'Blockchain & AI Agents',
    icon: <Zap className="w-6 h-6" />,
    skills: ['Solidity', 'Hardhat', 'Ethers.js v6', 'Base L2', 'Agent Coordination', 'Cryptographic Protocols'],
    gradient: 'from-cyber-blue to-blue-600'
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cloud className="w-6 h-6" />,
    skills: ['AWS Lambda', 'EventBridge', 'DynamoDB', 'SQS', 'Serverless Architecture', 'Event-Driven Systems'],
    gradient: 'from-cyber-purple to-purple-600'
  },
  {
    title: 'Backend Development',
    icon: <Cpu className="w-6 h-6" />,
    skills: ['.NET 8', 'Node.js', 'Python', 'C#', 'RESTful APIs', 'Microservices'],
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    title: 'Database & Analytics',
    icon: <Database className="w-6 h-6" />,
    skills: ['MongoDB', 'BigQuery', 'SQL', 'Tableau', 'Data Pipelines', 'ETL Processes'],
    gradient: 'from-orange-400 to-red-600'
  },
  {
    title: 'Frontend & UI',
    icon: <Code className="w-6 h-6" />,
    skills: ['TypeScript', 'React', 'Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    gradient: 'from-pink-400 to-rose-600'
  },
  {
    title: 'DevOps & Quality',
    icon: <Shield className="w-6 h-6" />,
    skills: ['Jenkins', 'Bitbucket Pipelines', 'SonarCloud', 'Docker', 'CI/CD', 'Quality Gates'],
    gradient: 'from-indigo-400 to-blue-600'
  }
]



export default function Skills() {
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
            Skills
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Component = isMobile ? 'div' : motion.div
            const props = isMobile ? {} : {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.1 },
              viewport: { once: true }
            }
            
            return (
              <Component
                key={index}
                {...props}
                className="cyber-border rounded-xl p-6 bg-card-bg hover:glow-effect transition-all duration-300 rainbow-glow"
              >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${category.gradient} text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:border-cyber-blue/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              </Component>
            )
          })}
        </div>


      </div>
    </section>
  )
}