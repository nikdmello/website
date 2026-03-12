'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Code, Trophy } from 'lucide-react'
import Image from 'next/image'

type ExperienceItem = {
  company: string
  title: string
  period: string
  logo: string
  intro?: string
  summary?: string
  impact?: string[]
}

type AdditionalItem = {
  title: string
  subtitle: string
  period: string
  description: string
  logo?: string
  icon?: JSX.Element
  photos?: {
    src: string
    alt: string
  }[]
  cta?: {
    href: string
    label: string
  }
}

const experiences: ExperienceItem[] = [
  {
    company: 'Associa',
    title: 'Software Engineer',
    period: 'Mar 2023 - Jan 2026',
    logo: '/logos/associa_logo.jpeg',
    intro: 'Core engineer on backend services and internal platforms for TownSq across deployment automation, authentication, and event-driven processing in AWS.',
    impact: [
      'Owned key parts of a DACPAC-based database deployment platform that replaced third-party tooling, standardized database schema deployments across environments, and drove meaningful annual cost savings.',
      'Led the re-architecture of synchronous APIs into event-driven serverless workflows using AWS Lambda, EventBridge, DynamoDB, and SQS, eliminating timeout failures and enabling 10,000+ records per hour.',
      'Improved reliability and production debugging with retries, DLQs, autoscaling, structured logging, correlation IDs, and CloudWatch metrics.',
      'Partnered across teams on incidents and recurring operational pain points, turning support-heavy issues into durable engineering fixes.'
    ]
  },
  {
    company: 'ASICS Digital',
    title: 'BI Developer',
    period: 'Jan 2022 - Jul 2022',
    logo: '/logos/asics_digital_logo.jpeg',
    summary: 'Built analytics pipelines and dashboards for e-commerce reporting, contributing to 10% revenue growth and reducing manual reporting overhead.'
  },
  {
    company: 'PanAgora Asset Management',
    title: 'DevOps Engineer',
    period: 'Feb 2021 - Jul 2021',
    logo: '/logos/panagora_asset_management_logo.jpeg',
    summary: 'Implemented CI/CD automation for data science workflows, cutting deployment time by 80% and improving release reliability through automated testing and rollback.'
  }
]

const additionalItems: AdditionalItem[] = [
  {
    title: 'Northeastern University',
    subtitle: 'Teaching Assistant',
    period: 'Sep 2021 - Dec 2021',
    description: 'Mentored 200+ students in statistical programming and data analysis.',
    logo: '/logos/northeastern_university_logo.jpeg'
  },
  {
    title: 'Cubs ARcade',
    subtitle: 'Omnia x GENESIS AR Hackathon',
    period: 'Aug 2023',
    description: 'Built an AR experience for the Chicago Cubs in 30 hours using JavaScript and A-Frame. Won 2nd place and a $500 award.',
    icon: <Trophy className="h-7 w-7 text-yellow-400" />,
    photos: [
      {
        src: '/images/winning-photo.jpeg',
        alt: "Nikhil D'Mello presenting Cubs ARcade"
      },
      {
        src: '/images/hackathon-presentation-2.jpeg',
        alt: 'Cubs ARcade demo'
      },
      {
        src: '/images/hackathon-presentation-3.jpeg',
        alt: 'Team presentation'
      }
    ],
    cta: {
      href: 'https://www.youtube.com/shorts/phqxWoQm75M',
      label: 'Watch Demo'
    }
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20">
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
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-300 md:text-lg">
            Backend, cloud, analytics, and deployment engineering across product and internal platforms.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl space-y-6">
          <div className="cyber-border rainbow-glow rounded-3xl bg-card-bg transition-all duration-300 hover:glow-effect">
            {experiences.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.1 }}
                className={`border-t border-white/10 transition-colors duration-300 hover:bg-white/[0.03] first:border-t-0 ${
                  index === 0 ? 'px-8 py-8 md:px-10 md:py-10' : 'px-8 py-7 md:px-10'
                }`}
              >
                <div className="flex flex-col gap-6 md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-10">
                  <div className="flex items-start gap-4">
                    <div className={`${index === 0 ? 'h-16 w-16 md:h-20 md:w-20' : 'h-14 w-14'} flex-shrink-0 overflow-hidden rounded-lg bg-black/80`}>
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={72}
                        height={72}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className={`${index === 0 ? 'text-3xl' : 'text-2xl'} font-semibold text-white`}>
                        {exp.company}
                      </h3>
                      <p className="mt-1 text-base font-medium text-cyber-blue">{exp.title}</p>
                      <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>

                  <div className="max-w-3xl">
                    {exp.intro ? (
                      <p className="leading-relaxed text-gray-300">
                        {exp.intro}
                      </p>
                    ) : null}

                    {exp.summary ? (
                      <p className="leading-relaxed text-gray-300">
                        {exp.summary}
                      </p>
                    ) : null}

                    {exp.impact ? (
                      <div className="mt-5">
                        <p className="mb-3 text-xs uppercase tracking-[0.24em] text-gray-500">
                          Impact
                        </p>
                        <ul className="space-y-2">
                          {exp.impact.map((item) => (
                            <li key={item} className="flex items-start text-gray-300">
                              <span className="mr-3 mt-0.5 flex-shrink-0 text-cyber-blue">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.1 }}
            className="pt-4"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-gray-300">Other Highlights</p>
            <div className="cyber-border rainbow-glow rounded-3xl bg-card-bg transition-all duration-300 hover:glow-effect">
              {additionalItems.map((item) => (
                <div
                  key={item.title}
                  className="border-t border-white/10 px-6 py-6 opacity-90 transition-colors duration-300 hover:bg-white/[0.03] first:border-t-0 md:px-8"
                >
                  <div className="flex flex-col gap-5 md:grid md:grid-cols-[minmax(0,320px)_minmax(0,1fr)] md:gap-10">
                    <div className="flex items-start gap-4">
                      {item.logo ? (
                        <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-black/80">
                          <Image
                            src={item.logo}
                            alt={item.title}
                            width={56}
                            height={56}
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-black/80">
                          {item.icon ?? <Code className="h-7 w-7 text-cyber-blue" />}
                        </div>
                      )}

                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-base font-medium text-cyber-blue">{item.subtitle}</p>
                        <p className="mt-2 text-sm text-gray-400">{item.period}</p>
                      </div>
                    </div>

                    <div className="max-w-3xl">
                      <p className="leading-relaxed text-gray-300">{item.description}</p>

                      {item.photos ? (
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          {item.photos.map((photo) => (
                            <div
                              key={photo.src}
                              className="overflow-hidden rounded-xl border border-white/10 bg-black/60"
                            >
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={320}
                                height={240}
                                className="h-24 w-full object-cover transition-transform duration-300 hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {item.cta ? (
                        <div className="mt-4">
                          <a
                            href={item.cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-cyber-blue"
                          >
                            {item.cta.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
