'use client'

import { motion } from 'framer-motion'
import { Cloud, Code2, Database, Layers3, Rocket, ShieldCheck } from 'lucide-react'
import SectionHeader from './SectionHeader'

const skillCategories = [
  {
    title: 'Languages',
    icon: <Code2 className="h-5 w-5" />,
    summary: 'I enjoy moving between product work, backend services, and data-heavy problems, especially when it means learning the shape of a system from different angles.',
    skills: ['TypeScript', 'JavaScript', 'Java', 'C# .NET', 'SQL', 'Python']
  },
  {
    title: 'Cloud',
    icon: <Cloud className="h-5 w-5" />,
    summary: 'I’ve worked with event-driven AWS systems where scalability, reliability, and observability all have to be thought through together.',
    skills: ['AWS Lambda', 'DynamoDB', 'EventBridge', 'SQS', 'Step Functions', 'CloudWatch']
  },
  {
    title: 'Backend',
    icon: <Layers3 className="h-5 w-5" />,
    summary: 'I like building clean APIs and resilient workflows, especially when the result is a system that is easier to operate, debug, and trust.',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'Microservices', 'Event-Driven Architecture']
  },
  {
    title: 'Frontend',
    icon: <Rocket className="h-5 w-5" />,
    summary: 'I’m comfortable building clear, responsive product surfaces and care about the small interaction details that make software feel easier to use.',
    skills: ['React', 'Next.js', 'SwiftUI', 'Angular', 'Tailwind CSS', 'Responsive Design']
  },
  {
    title: 'Data',
    icon: <Database className="h-5 w-5" />,
    summary: 'I’ve worked across relational and NoSQL systems, from schema design and modeling to the reporting layers that help teams understand what is happening.',
    skills: ['SQL Server', 'DynamoDB', 'BigQuery', 'NoSQL', 'Data Modeling', 'Database Design']
  },
  {
    title: 'Delivery',
    icon: <ShieldCheck className="h-5 w-5" />,
    summary: 'I care about the habits around shipping: clear feedback loops, safe deployments, thoughtful automation, and systems that stay calm when real users depend on them.',
    skills: ['Git', 'Docker', 'CI/CD', 'CodeBuild', 'Bitbucket Pipelines', 'SonarCloud']
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 xl:py-24">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Skills"
            description="A mix of languages, cloud tools, backend systems, and delivery habits I’ve picked up through building, debugging, shipping, and learning from real systems."
          />
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
                className="cyber-border panel-sheen rainbow-glow flex min-h-[19rem] h-full flex-col rounded-3xl bg-card-bg p-6 transition-all duration-300 hover:glow-effect md:min-h-[20rem] md:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] md:h-13 md:w-13">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white md:text-[1.35rem]">{category.title}</h3>
                </div>

                <p className="mt-5 text-[0.98rem] leading-relaxed text-white/90 md:text-[1.05rem]">
                  {category.summary}
                </p>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/35 px-3.5 py-2 text-[0.95rem] text-white/88"
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
