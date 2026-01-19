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
    title: 'Software Engineer',
    company: 'Associa',
    period: 'Mar 2023 – Present',
    logo: '/logos/associa_logo.jpeg',
    intro: 'I worked on platform and backend systems that handle deployments, authentication, and event-driven data processing at scale. Some of my work focused on replacing tooling with systems that are reliable and easy to operate.',
    highlights: [
      'Built core parts of a custom database deployment platform to make schema changes safe and repeatable across environments',
      'Re-architected synchronous APIs into event-driven services to eliminate timeout-driven failures',
      'Designed and operated serverless AWS services (Lambda, EventBridge, DynamoDB, SQS) with retries, DLQs, and automated scaling'
    ],
    impact: [
      'Cut six figures in annual tooling costs',
      'Removed a whole class of production failures from blocking workflows',
      'Enabled processing of 10K+ records/hour without manual intervention'
    ]
  },
  {
    title: 'BI Developer',
    company: 'ASICS Digital',
    period: 'Jan 2022 – Jul 2022',
    logo: '/logos/asics_digital_logo.jpeg',
    highlights: [
      'Built automated analytics pipeline contributing to 10% revenue growth',
      'Reduced manual reporting overhead by 75% through dashboard automation'
    ]
  },
  {
    title: 'DevOps Engineer',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    logo: '/logos/panagora_asset_management_logo.jpeg',
    highlights: [
      'Implemented CI/CD automation reducing deployment time by 80%',
      'Eliminated 90% of deployment failures through automated testing and rollback'
    ]
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    period: 'Sep 2021 – Dec 2021',
    logo: '/logos/northeastern_university_logo.jpeg',
    highlights: [
      'Mentored 200+ students in statistical programming and data analysis'
    ]
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
                  {exp.intro && (
                    <div>
                      <p className="text-gray-300 leading-relaxed font-light">{exp.intro}</p>
                    </div>
                  )}
                  
                  {exp.highlights && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">What I did</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-gray-300 leading-relaxed font-light flex items-start">
                            <span className="text-cyber-blue mr-2 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.impact && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Why it mattered</p>
                      <ul className="space-y-2">
                        {exp.impact.map((item, i) => (
                          <li key={i} className="text-gray-300 leading-relaxed font-light flex items-start">
                            <span className="text-cyber-blue mr-2 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.philosophy && (
                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">How I Think About Engineering</p>
                      <ul className="space-y-2">
                        {exp.philosophy.map((item, i) => (
                          <li key={i} className="text-gray-400 leading-relaxed font-light flex items-start text-sm italic">
                            <span className="text-cyber-purple mr-2 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {exp.problem && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-gray-300 leading-relaxed font-light">{exp.problem}</p>
                    </div>
                  )}
                  
                  {exp.solution && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Approach</p>
                      <p className="text-gray-300 leading-relaxed font-light">{exp.solution}</p>
                    </div>
                  )}
                  
                  {exp.metrics && (
                    <div>
                      <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Results</p>
                      <p className="text-white leading-relaxed">{renderWhiteHighlightedText(exp.metrics)}</p>
                    </div>
                  )}
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