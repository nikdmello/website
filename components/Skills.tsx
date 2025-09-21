'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Cpu, Zap, Shield } from 'lucide-react'

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

const achievements = [
  { metric: '70%', description: 'Reduction in manual operations' },
  { metric: '50%', description: 'Faster deployment times' },
  { metric: '90%', description: 'Elimination of manual processes' },
  { metric: '100%', description: 'Transaction reliability on testnet' }
]

export default function Skills() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies I use to build reliable systems
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cyber-border rounded-xl p-8 bg-gradient-to-r from-card-bg to-gray-800 rainbow-glow"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {achievement.metric}
                </div>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}