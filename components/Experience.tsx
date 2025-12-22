'use client'

import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useIsMobile } from '@/hooks/useIsMobile'
import Image from 'next/image'

const renderWhiteHighlightedText = (text: string) => {
  const parts = text.split(/(<Highlight[^>]*>[^<]+<\/Highlight>)/g)
  return parts.map((part, index) => {
    const match = part.match(/<Highlight[^>]*>([^<]+)<\/Highlight>/)
    if (match) {
      const [, content] = match
      return <span key={index} className="font-medium text-white">{content}</span>
    }
    return part
  })
}

const experiences = [
  {
    title: 'Founder / Engineer',
    company: 'Swift',
    period: 'Apr 2024 – Present',
    logo: null,
    problem: 'AI agent coordination infrastructure lacks reliable execution guarantees, leading to partial failures, inconsistent state, and brittle recovery in multi-agent workflows',
    solution: 'Founded Swift to design production-grade coordination infrastructure with atomic execution guarantees for distributed AI systems, prioritizing correctness and failure recovery over throughput and latency in early designs',
    highlights: [
      'Designed and built a production system combining <Highlight>smart contracts</Highlight>, <Highlight>orchestration engine</Highlight>, and <Highlight>TypeScript SDK</Highlight>',
      'Implemented atomic workflow and payment settlement, preventing <Highlight>partial failure states</Highlight> in multi-agent executions',
      'Defined coordination primitives to support <Highlight>failure recovery</Highlight> and <Highlight>consistency</Highlight> across distributed agents',
      'Focused initial use cases on high-reliability domains such as <Highlight>trading</Highlight> and <Highlight>cross-system automation</Highlight>'
    ],
    metrics: '<Highlight>Atomic guarantees</Highlight> and <Highlight>reliable coordination</Highlight> for multi-agent AI workflows'
  },
  {
    title: 'Software Developer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    logo: '/logos/associa_logo.jpeg',
    problem: 'Deployment workflows and data-processing APIs did not scale with growing environment complexity and data volume, resulting in high tooling costs, operational risk during schema changes, and frequent failures in synchronous processing paths',
    solution: 'Served as core engineer on two production systems, collaborating with platform teams to design and implement: custom deployment platform and event-driven processing service',
    highlights: [
      'Implemented core components of custom DACPAC deployment platform, contributing to <Highlight>six-figure annual cost savings</Highlight>',
      'Helped redesign synchronous APIs into event-driven microservice, eliminating <Highlight>timeout-related failures</Highlight> in production workloads',
      'Built serverless architecture components processing <Highlight>10K+ records/hour</Highlight> with automated scaling and fault tolerance'
    ],
    metrics: '<Highlight>Six-figure cost reduction</Highlight>, <Highlight>timeout elimination</Highlight>, <Highlight>10K+ records/hour</Highlight>'
  },
  {
    title: 'BI Developer',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    logo: '/logos/asics_digital_logo.jpeg',
    problem: 'E-commerce platform lacked data-driven insights for revenue optimization and customer behavior analysis',
    solution: 'Developed analytics framework in collaboration with product teams to identify revenue opportunities and optimize conversion funnels',
    highlights: [
      'Contributed to <Highlight>10% revenue growth</Highlight> through data-driven traffic analysis and conversion optimization',
      'Built automated reporting dashboards reducing manual analysis time by <Highlight>75%</Highlight>',
      'Identified key customer segments and conversion opportunities through comprehensive data analysis'
    ],
    metrics: '<Highlight>10% revenue contribution</Highlight>, <Highlight>75% time savings</Highlight>, <Highlight>automated insights</Highlight>'
  },
  {
    title: 'DevOps Engineer',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    logo: '/logos/panagora_asset_management_logo.jpeg',
    problem: 'Manual deployment processes caused production issues and delayed critical financial system updates',
    solution: 'Implemented automated CI/CD pipeline to improve deployment reliability and reduce time-to-market for trading systems',
    highlights: [
      'Reduced deployment time by <Highlight>80%</Highlight> through Jenkins automation, enabling faster feature delivery',
      'Improved system stability by eliminating <Highlight>90% of deployment-related incidents</Highlight>',
      'Established deployment best practices and automated workflows for financial system releases'
    ],
    metrics: '<Highlight>80% faster deployments</Highlight>, <Highlight>90% fewer incidents</Highlight>, <Highlight>automated workflows</Highlight>'
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    period: 'Sep 2021 – Dec 2021',
    logo: '/logos/northeastern_university_logo.jpeg',
    problem: 'Large class sizes made it difficult for students to get personalized help with complex data science concepts',
    solution: 'Provided structured mentoring and office hours to help students master statistical programming and data analysis',
    highlights: [
      'Mentored <Highlight>200+ students</Highlight> in Foundations of Data Science through 1-on-1 sessions and office hours',
      'Provided guidance on statistical concepts, Python programming, and data analysis techniques',
      'Supported students with coursework challenges and programming assignments'
    ],
    metrics: '<Highlight>200+ students mentored</Highlight>'
  }
]

export default function Experience() {
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
            Experience
          </h2>
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
                  {exp.logo ? (
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-white">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={64}
                        height={64}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-white to-gray-300 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-black">{exp.company[0]}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-cyber-purple font-semibold">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-6">
                  {exp.problem && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-gray-300 leading-relaxed">{exp.problem}</p>
                    </div>
                  )}
                  
                  {exp.solution && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Approach</p>
                      <p className="text-gray-300 leading-relaxed">{exp.solution}</p>
                    </div>
                  )}
                  
                  {exp.highlights && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Key Achievements</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 leading-relaxed flex items-start">
                            <span className="text-cyber-blue mr-2 mt-1.5 flex-shrink-0">•</span>
                            <span>{renderWhiteHighlightedText(highlight)}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Business Impact</p>
                    <p className="text-white leading-relaxed">{renderWhiteHighlightedText(exp.metrics)}</p>
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