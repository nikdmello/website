'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useState, type MouseEvent } from 'react'
import ScrollArrow from './ScrollArrow'
import CursorToast from './CursorToast'
import { useCursorToast } from '@/hooks/useCursorToast'
import { copyTextToClipboard } from '@/lib/copyTextToClipboard'

const emailAddress = 'nik.dmello@gmail.com'
const rotatingWords = ['build', 'create', 'explore', 'test']

const socialLinks = [
  {
    href: 'https://linkedin.com/in/nikdmello',
    icon: Linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'https://github.com/nikdmello',
    icon: Github,
    label: 'GitHub'
  }
]

export default function Hero() {
  const { toast, showToast } = useCursorToast()
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [typedLength, setTypedLength] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = `${rotatingWords[activeWordIndex]}.`

    if (!isDeleting && typedLength < currentWord.length) {
      const typeTimeout = window.setTimeout(() => {
        setTypedLength((currentLength) => currentLength + 1)
      }, 45)

      return () => window.clearTimeout(typeTimeout)
    }

    if (!isDeleting && typedLength === currentWord.length) {
      const holdTimeout = window.setTimeout(() => {
        setIsDeleting(true)
      }, 2000)

      return () => window.clearTimeout(holdTimeout)
    }

    if (isDeleting && typedLength > 0) {
      const deleteTimeout = window.setTimeout(() => {
        setTypedLength((currentLength) => currentLength - 1)
      }, 28)

      return () => window.clearTimeout(deleteTimeout)
    }

    if (isDeleting && typedLength === 0) {
      const nextWordTimeout = window.setTimeout(() => {
        setIsDeleting(false)
        setActiveWordIndex((currentIndex) => (currentIndex + 1) % rotatingWords.length)
      }, 70)

      return () => window.clearTimeout(nextWordTimeout)
    }

    return undefined
  }, [activeWordIndex, typedLength, isDeleting])

  const copyEmail = async (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget
    const clientX = event.clientX
    const clientY = event.clientY

    await copyTextToClipboard(emailAddress)
    showToast({ target, clientX, clientY }, 'Email copied')
  }

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const animatedWord = rotatingWords[activeWordIndex]
  const currentWord = `${animatedWord}.`
  const visibleText = currentWord.slice(0, typedLength)
  const visibleWord = visibleText.replace(/\.$/, '')
  const showPeriod = visibleText.endsWith('.')
  const underlineWidth = Math.max(animatedWord.length * 0.48, 1.1)
  const underlineRightInset = animatedWord === 'build' ? '0.18em' : '0.12em'
  const periodOffsetClass = animatedWord === 'build' ? '-ml-[0.08em]' : '-ml-[0.02em]'

  return (
    <section id="home" className="relative flex min-h-[100svh] items-start pb-16 pt-24 sm:min-h-screen sm:items-center sm:pb-28 sm:pt-32">
      <div className="site-shell">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mx-auto grid max-w-[1180px] items-start gap-8 py-4 md:gap-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(250px,0.8fr)] lg:items-center lg:gap-12 xl:gap-14"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-4%] inset-y-[-3%] rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.68)_44%,rgba(0,0,0,0.34)_76%,rgba(0,0,0,0.14)_100%)] blur-2xl lg:inset-y-0 lg:left-[-6%] lg:right-[24%] lg:bg-[linear-gradient(90deg,rgba(0,0,0,0.86)_0%,rgba(0,0,0,0.74)_46%,rgba(0,0,0,0.34)_82%,rgba(0,0,0,0.08)_100%)]"
          />

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.06 }}
            className="relative order-1 w-full max-w-[280px] justify-self-center sm:max-w-[320px] lg:order-2 lg:max-w-[300px] lg:self-start lg:justify-self-end"
          >
            <div className="relative mx-auto flex w-full items-center justify-center lg:translate-y-28 xl:translate-y-24">
              <div className="absolute inset-[-18px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1),rgba(255,255,255,0)_70%)] blur-lg" />
              <div className="relative h-[236px] w-[236px] sm:h-[268px] sm:w-[268px] lg:h-[280px] lg:w-[280px]">
                <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_28px_70px_rgba(0,0,0,0.42)]">
                  <Image
                    src="/images/PFP.webp"
                    alt="Nikhil D'Mello"
                    fill
                    sizes="(min-width: 1024px) 280px, (min-width: 640px) 268px, 236px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

          </motion.div>

          <div className="relative order-2 max-w-[820px] pt-2 text-center sm:pt-4 lg:order-1 lg:text-left">
            <p className="text-[0.96rem] font-medium text-white/88 md:text-lg">
              Hi, I&apos;m Nikhil D&apos;Mello
            </p>

            <h1 className="mx-auto mt-4 max-w-[15ch] text-[2.22rem] font-semibold leading-[0.99] tracking-[-0.045em] text-white sm:mt-5 sm:max-w-[15ch] sm:text-[3.1rem] lg:mx-0 lg:max-w-none lg:text-[4.2rem] xl:text-[4.7rem]">
              <span className="block">Software Engineer</span>
              <span className="block">with a curious mind</span>
              <span className="block">
                and an instinct to{' '}
                <motion.span
                  animate={{ width: `${underlineWidth}em` }}
                  transition={{ duration: 0.16, ease: [0.2, 0.8, 0.2, 1] }}
                  className="relative inline-flex h-[1.1em] items-end overflow-hidden align-baseline"
                >
                  <span className="absolute bottom-[3px] left-0 block whitespace-nowrap leading-none">
                    {visibleWord}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[1px] left-0 h-[4px] rounded-full bg-white"
                    style={{ right: underlineRightInset }}
                  />
                </motion.span>
                {showPeriod ? <span className={`relative ${periodOffsetClass} -top-[0.16em] text-[0.72em] text-white/78`}>.</span> : null}
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[32rem] text-[1rem] leading-relaxed text-white/90 sm:hidden">
              I like learning deeply, asking better questions, and turning messy problems into useful, reliable systems.
            </p>

            <p className="mx-auto mt-5 hidden max-w-[38rem] text-[0.98rem] leading-relaxed text-white/90 sm:mt-6 sm:block md:text-lg lg:mx-0 lg:text-[1.15rem]">
              I like learning deeply, asking better questions, and figuring out how things work by building, testing, and occasionally breaking them.
            </p>

            <div className="mt-6 sm:mt-8">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200 sm:w-auto sm:px-6"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-7 hidden flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm text-white/85 sm:mt-8 sm:flex sm:gap-x-5 lg:justify-start">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              })}

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 text-white/85 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email
              </button>
            </div>

            <div className="mx-auto mt-7 grid max-w-[24rem] grid-cols-2 gap-3 text-sm text-white/85 sm:hidden">
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-center transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-center transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              })}

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-center text-white/85 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -ml-3 sm:block">
        <ScrollArrow
          direction="down"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
      <CursorToast toast={toast} />
    </section>
  )
}
