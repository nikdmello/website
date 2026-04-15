'use client'

import { motion } from 'framer-motion'
import { Cloud, Code2, Database, Layers3, Rocket, ShieldCheck } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="h-5 w-5" />,
    summary: 'Comfortable moving between product work, backend services, and data-heavy problems.',
    skills: ['TypeScript', 'JavaScript', 'Java', 'C# .NET', 'SQL', 'Python']
  },
  {
    title: 'Cloud',
    icon: <Cloud className="h-5 w-5" />,
    summary: 'Experienced with event-driven AWS systems that need to scale cleanly and stay observable.',
    skills: ['AWS Lambda', 'DynamoDB', 'EventBridge', 'SQS', 'Step Functions', 'CloudWatch']
  },
  {
    title: 'Backend',
    icon: <Layers3 className="h-5 w-5" />,
    summary: 'Focused on clean APIs, resilient workflows, and backend designs that reduce operational drag.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Microservices', 'Event-Driven Architecture']
  },
  {
    title: 'Frontend',
    icon: <Rocket className="h-5 w-5" />,
    summary: 'Comfortable shipping product surfaces with strong responsiveness, clarity, and motion.',
    skills: ['React', 'Next.js', 'SwiftUI', 'Angular', 'Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Data',
    icon: <Database className="h-5 w-5" />,
    summary: 'Strong with relational and NoSQL systems, from schema design to analytics-oriented modeling.',
    skills: ['SQL Server', 'DynamoDB', 'BigQuery', 'NoSQL', 'Data Modeling', 'Database Design']
  },
  {
    title: 'Delivery',
    icon: <ShieldCheck className="h-5 w-5" />,
    summary: 'I care about deployability, feedback loops, and the reliability work that keeps systems calm.',
    skills: ['Git', 'Docker', 'CI/CD', 'CodeBuild', 'Bitbucket Pipelines', 'SonarCloud']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
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

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            return (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true, amount: 0.15 }}
                className="cyber-border rainbow-glow rounded-3xl bg-card-bg p-6 transition-all duration-300 hover:glow-effect md:p-7"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.04] text-white">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  {category.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-sm text-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
