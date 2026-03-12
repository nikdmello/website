'use client'

import { motion } from 'framer-motion'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ScrollArrow from './ScrollArrow'

const emailAddress = 'nik.dmello@gmail.com'
const typedIntroText = "Hi, I'm Nikhil D'Mello"
const headlinePrefix = 'Software Engineer building'
const headlineOptions = ['backend services.', 'distributed systems.', 'cool products.']
const finalHeadlineText = `${headlinePrefix} ${headlineOptions[headlineOptions.length - 1]}`
const headlineReserveText = 'distributed systems.'
const introSpeed = 30
const headlineTypeSpeed = 40
const headlineDeleteSpeed = 24
const headlinePause = 900
const mobileSuffixWrapBuffer = 18

const actions = [
  {
    href: '/resume.pdf',
    icon: FileText,
    label: 'Resume',
    primary: true,
    external: true
  },
  {
    href: 'https://linkedin.com/in/nikdmello',
    icon: Linkedin,
    label: 'LinkedIn',
    external: true
  },
  {
    href: 'https://github.com/nikdmello',
    icon: Github,
    label: 'GitHub',
    external: true
  },
  {
    href: emailAddress,
    icon: Mail,
    label: 'Email',
    copy: true
  }
]

export default function Hero() {
  const headlineContainerRef = useRef<HTMLDivElement>(null)
  const headlineMeasureRef = useRef<HTMLSpanElement>(null)
  const [typedIntro, setTypedIntro] = useState('')
  const [typedHeadlinePrefix, setTypedHeadlinePrefix] = useState('')
  const [typedHeadlineSuffix, setTypedHeadlineSuffix] = useState('')
  const [wrappedMobileOptions, setWrappedMobileOptions] = useState<string[]>([])
  const [showActions, setShowActions] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [headlineSequenceComplete, setHeadlineSequenceComplete] = useState(false)

  useEffect(() => {
    let isCancelled = false
    let timeoutId: number | undefined

    setTypedIntro('')
    setTypedHeadlinePrefix('')
    setTypedHeadlineSuffix('')
    setShowActions(false)
    setHeadlineSequenceComplete(false)

    const typeIntro = (index: number) => {
      if (isCancelled) return

      if (index <= typedIntroText.length) {
        setTypedIntro(typedIntroText.slice(0, index))
        timeoutId = window.setTimeout(() => typeIntro(index + 1), introSpeed)
        return
      }

      timeoutId = window.setTimeout(() => typeHeadlinePrefix(1), 180)
    }

    const typeHeadlinePrefix = (index: number) => {
      if (isCancelled) return

      if (index <= headlinePrefix.length) {
        setTypedHeadlinePrefix(headlinePrefix.slice(0, index))
        timeoutId = window.setTimeout(() => typeHeadlinePrefix(index + 1), headlineTypeSpeed)
        return
      }

      timeoutId = window.setTimeout(() => typeHeadline(0, 0), 20)
    }

    const typeHeadline = (wordIndex: number, charIndex: number) => {
      if (isCancelled) return

      const currentWord = headlineOptions[wordIndex]
      setTypedHeadlineSuffix(currentWord.slice(0, charIndex))

      if (charIndex < currentWord.length) {
        timeoutId = window.setTimeout(
          () => typeHeadline(wordIndex, charIndex + 1),
          headlineTypeSpeed
        )
        return
      }

      if (wordIndex === headlineOptions.length - 1) {
        setHeadlineSequenceComplete(true)
        return
      }

      if (wordIndex === 0) {
        setShowActions(true)
      }

      timeoutId = window.setTimeout(() => deleteHeadline(wordIndex, currentWord.length - 1), headlinePause)
    }

    const deleteHeadline = (wordIndex: number, charIndex: number) => {
      if (isCancelled) return

      const currentWord = headlineOptions[wordIndex]
      setTypedHeadlineSuffix(currentWord.slice(0, charIndex))

      if (charIndex > 0) {
        timeoutId = window.setTimeout(
          () => deleteHeadline(wordIndex, charIndex - 1),
          headlineDeleteSpeed
        )
        return
      }

      timeoutId = window.setTimeout(() => typeHeadline(wordIndex + 1, 0), 180)
    }

    timeoutId = window.setTimeout(() => typeIntro(1), 250)

    return () => {
      isCancelled = true
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    const updateSuffixLayout = () => {
      if (window.innerWidth >= 640) {
        setWrappedMobileOptions([])
        return
      }

      if (!headlineContainerRef.current || !headlineMeasureRef.current) return

      const availableWidth = headlineContainerRef.current.getBoundingClientRect().width
      const wrapped = headlineOptions.filter((option) => {
        headlineMeasureRef.current!.textContent = option
        const requiredWidth = headlineMeasureRef.current!.getBoundingClientRect().width
        return requiredWidth + mobileSuffixWrapBuffer > availableWidth
      })

      setWrappedMobileOptions(wrapped)
    }

    updateSuffixLayout()

    const resizeObserver = new ResizeObserver(updateSuffixLayout)
    if (headlineContainerRef.current) {
      resizeObserver.observe(headlineContainerRef.current)
    }

    window.addEventListener('resize', updateSuffixLayout)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateSuffixLayout)
    }
  }, [])

  useEffect(() => {
    if (!copiedEmail) return

    const timeoutId = window.setTimeout(() => setCopiedEmail(false), 1600)
    return () => window.clearTimeout(timeoutId)
  }, [copiedEmail])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress)
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = emailAddress
      textArea.setAttribute('readonly', '')
      textArea.style.position = 'absolute'
      textArea.style.left = '-9999px'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
    }

    setCopiedEmail(true)
  }

  const introComplete = typedIntro.length === typedIntroText.length
  const prefixComplete = typedHeadlinePrefix.length === headlinePrefix.length
  const activeSegment = !introComplete ? 'intro' : !prefixComplete ? 'headline-prefix' : 'headline'
  const caretClass = 'caret-blink ml-1 inline-block h-[0.92em] w-[0.08em] translate-y-[0.08em] bg-cyber-blue align-baseline'
  const shouldUseTwoLineMobile = wrappedMobileOptions.length > 0
  const splitMobileSuffix = (value: string) => {
    const wrappedOption = wrappedMobileOptions.find((option) => option.startsWith(value))

    if (!wrappedOption) {
      return [value, '']
    }

    const spaceIndex = wrappedOption.lastIndexOf(' ')
    if (spaceIndex === -1) {
      return [value, '']
    }

    const safePrefix = value.slice(0, Math.min(spaceIndex, value.length))
    const safeSuffix = value.length > spaceIndex ? value.slice(spaceIndex + 1) : ''

    return [safePrefix, safeSuffix]
  }
  const reserveHeadlineLines = splitMobileSuffix(headlineReserveText)
  const typedHeadlineLines = splitMobileSuffix(typedHeadlineSuffix)
  const mobileSecondLineActive = typedHeadlineLines[1].length > 0
  const desktopSuffixClass = 'mt-2 hidden min-h-[1.02em] sm:block sm:w-auto sm:leading-[1.02]'

  return (
    <section className="relative flex min-h-screen items-center py-24 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          <div className="hero-panel rainbow-glow rounded-3xl p-8 md:p-12 lg:p-14">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <div className="relative max-w-4xl">
              <div
                aria-hidden="true"
                className="invisible text-lg font-medium text-gray-300 md:text-xl"
              >
                {typedIntroText}
              </div>

              <p
                className="absolute inset-0 text-lg font-medium text-gray-300 md:text-xl"
                aria-label={typedIntroText}
              >
                {typedIntro}
                {activeSegment === 'intro' ? (
                  <span
                    aria-hidden="true"
                    className={caretClass}
                  />
                ) : null}
              </p>
            </div>

            <div ref={headlineContainerRef} className="relative mt-6 max-w-4xl">
              <span
                ref={headlineMeasureRef}
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-4xl font-semibold tracking-tight text-white opacity-0 sm:hidden"
              >
                {headlineReserveText}
              </span>

              <div
                aria-hidden="true"
                className="invisible text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]"
              >
                <span className="block min-h-[1.08em]">{headlinePrefix}</span>
                <span className="mt-1 block leading-[1.05] sm:hidden">
                  <span className="block min-h-[1.08em]">{reserveHeadlineLines[0] || '\u00A0'}</span>
                  {shouldUseTwoLineMobile ? (
                    <span className="block min-h-[1.08em]">{reserveHeadlineLines[1] || '\u00A0'}</span>
                  ) : null}
                </span>
                <span className={desktopSuffixClass}>
                  {headlineReserveText}
                </span>
              </div>

              <h1
                className="absolute inset-0 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]"
                aria-label={finalHeadlineText}
              >
                <span className="block min-h-[1.08em]">
                  {typedHeadlinePrefix}
                  {activeSegment === 'headline-prefix' ? (
                    <span
                      aria-hidden="true"
                      className={caretClass}
                    />
                  ) : null}
                </span>
                <span className="mt-1 block leading-[1.05] sm:hidden">
                  <span className="block min-h-[1.08em]">
                    {typedHeadlineLines[0] || '\u00A0'}
                    {activeSegment === 'headline' && !mobileSecondLineActive ? (
                      <span
                        aria-hidden="true"
                        className={caretClass}
                      />
                    ) : null}
                  </span>
                  {shouldUseTwoLineMobile ? (
                    <span className="block min-h-[1.08em]">
                      {typedHeadlineLines[1] || '\u00A0'}
                      {activeSegment === 'headline' && mobileSecondLineActive ? (
                        <span
                          aria-hidden="true"
                          className={caretClass}
                        />
                      ) : null}
                    </span>
                  ) : null}
                </span>
                <span className={desktopSuffixClass}>
                  {typedHeadlineSuffix || '\u00A0'}
                  {activeSegment === 'headline' ? (
                    <span
                      aria-hidden="true"
                      className={caretClass}
                    />
                  ) : null}
                </span>
              </h1>
            </div>

            <motion.div
              initial={false}
              animate={showActions ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.35 }}
              className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:flex sm:flex-wrap"
            >
              {actions.map((action) => {
                const Icon = action.icon
                const mobileTileClass = action.primary
                  ? 'border-white/20 bg-white text-black hover:bg-gray-200'
                  : 'border-white/10 bg-white/[0.03] text-gray-200 hover:bg-white/[0.08] hover:text-white'

                if (action.copy) {
                  return (
                    <button
                      key={action.label}
                      type="button"
                      onClick={copyEmail}
                      className={`inline-flex w-full min-h-[56px] items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors sm:min-h-0 sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-1 ${
                        copiedEmail
                          ? 'border-cyber-blue/40 bg-cyber-blue/15 text-white'
                          : mobileTileClass
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {copiedEmail ? 'Copied' : action.label}
                    </button>
                  )
                }

                return (
                  <a
                    key={action.label}
                    href={action.href}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noopener noreferrer' : undefined}
                    className={
                      action.primary
                        ? 'inline-flex w-full min-h-[56px] items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-gray-200 sm:min-h-0 sm:w-auto sm:justify-start sm:rounded-xl sm:border-0 sm:px-5'
                        : 'inline-flex w-full min-h-[56px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-gray-200 transition-colors hover:bg-white/[0.08] hover:text-white sm:min-h-0 sm:w-auto sm:justify-start sm:border-0 sm:bg-transparent sm:px-1'
                    }
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {action.label}
                  </a>
                )
              })}
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -ml-3">
        <ScrollArrow
          direction="down"
          onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  )
}
