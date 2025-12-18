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
    problem: '$50B+ AI services market lacks reliable coordination infrastructure. Current solutions have 40%+ failure rates in multi-agent workflows, costing enterprises millions in broken processes',
    solution: 'Founded Swift to capture first-mover advantage in agent coordination infrastructure. Building atomic execution guarantees that prevent partial failures in distributed AI workflows',
    highlights: [
      'Identified <Highlight>$50B+ market opportunity</Highlight> in AI agent coordination with <Highlight>25% annual growth</Highlight>',
      'Built production-ready system with <Highlight>smart contracts</Highlight>, <Highlight>orchestration engine</Highlight>, and <Highlight>TypeScript SDK</Highlight>',
      'Targeting <Highlight>algorithmic trading</Highlight> and <Highlight>cross-exchange arbitrage</Highlight> as initial use cases',
      'Developed atomic payment settlement preventing <Highlight>partial failure states</Highlight> in multi-agent workflows'
    ],
    metrics: '<Highlight>First-mover advantage</Highlight>, <Highlight>$50B+ TAM</Highlight>, <Highlight>atomic guarantees</Highlight>'
  },
  {
    title: 'Software Developer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    logo: '/logos/associa_logo.jpeg',
    problem: 'Octopus Deploy costing $140K+ annually while manual database deployments were error-prone. Synchronous APIs timing out on large datasets, requiring constant manual intervention',
    solution: 'Built two production systems: Database Schema Deployer replacing expensive third-party tool, and Message Pusher eliminating API timeout issues through event-driven architecture',
    highlights: [
      'Delivered <Highlight>$140K+ annual cost savings</Highlight> by replacing Octopus Deploy with custom DACPAC deployment platform',
      'Eliminated <Highlight>100% of API timeout issues</Highlight> by redesigning synchronous system as event-driven microservice',
      'Reduced manual deployment work by <Highlight>70%</Highlight> through automated DACPAC orchestration across 6 environments',
      'Built serverless architecture achieving <Highlight>10K+ records/hour</Highlight> processing capacity with automated scaling'
    ],
    metrics: '<Highlight>$140K+ saved annually</Highlight>, <Highlight>70% less manual work</Highlight>, <Highlight>10K+ records/hour</Highlight>'
  },
  {
    title: 'BI Developer',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    logo: '/logos/asics_digital_logo.jpeg',
    problem: 'E-commerce platform lacked data-driven insights for revenue optimization and customer behavior analysis',
    solution: 'Developed analytics framework to identify revenue opportunities and optimize customer conversion funnels',
    highlights: [
      'Delivered <Highlight>10% revenue increase</Highlight> through data-driven traffic pattern analysis and conversion optimization',
      'Built automated reporting dashboards reducing manual analysis time by <Highlight>75%</Highlight>',
      'Identified key customer segments and conversion opportunities through data analysis'
    ],
    metrics: '<Highlight>10% revenue increase</Highlight>, <Highlight>75% time savings</Highlight>'
  },
  {
    title: 'DevOps Engineer',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    logo: '/logos/panagora_asset_management_logo.jpeg',
    problem: 'Manual deployment processes were causing frequent production issues and delaying critical financial system updates',
    solution: 'Implemented automated CI/CD pipeline to improve deployment reliability and reduce time-to-market for trading systems',
    highlights: [
      'Reduced deployment time by <Highlight>80%</Highlight> through Jenkins automation, enabling faster feature delivery',
      'Eliminated <Highlight>90% of deployment-related incidents</Highlight>, improving system stability for trading operations',
      'Established deployment best practices and automated workflows for trading system releases'
    ],
    metrics: '<Highlight>80% faster deployments</Highlight>, <Highlight>90% fewer incidents</Highlight>'
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