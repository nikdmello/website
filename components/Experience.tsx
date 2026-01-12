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
    problem: null,
    solution: null,
    highlights: [
      'Built automated analytics pipeline contributing to <Highlight>10% revenue growth</Highlight>',
      'Reduced manual reporting overhead by <Highlight>75%</Highlight> through dashboard automation'
    ],
    metrics: '<Highlight>Revenue impact</Highlight>, <Highlight>automation efficiency</Highlight>'
  },
  {
    title: 'DevOps Engineer',
    company: 'PanAgora Asset Management',
    period: 'Feb 2021 – Jul 2021',
    logo: '/logos/panagora_asset_management_logo.jpeg',
    problem: null,
    solution: null,
    highlights: [
      'Implemented CI/CD automation reducing deployment time by <Highlight>80%</Highlight>',
      'Eliminated <Highlight>90% of deployment failures</Highlight> through automated testing and rollback'
    ],
    metrics: '<Highlight>Deployment reliability</Highlight>, <Highlight>operational efficiency</Highlight>'
  },
  {
    title: 'Teaching Assistant',
    company: 'Northeastern University',
    period: 'Sep 2021 – Dec 2021',
    logo: '/logos/northeastern_university_logo.jpeg',
    problem: null,
    solution: null,
    highlights: [
      'Mentored <Highlight>200+ students</Highlight> in statistical programming and data analysis'
    ],
    metrics: '<Highlight>Teaching and mentorship</Highlight>'
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
                            <span className="text-cyber-blue mr-2 flex-shrink-0">•</span>
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