'use client'

import { motion } from 'framer-motion'
import { FileText, Github, Linkedin, Mail } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ScrollArrow from './ScrollArrow'

type HeadlineLayout = {
  prefixLines: string[]
  suffixLinesByOption: string[][]
  maxPrefixLines: number
  maxSuffixLines: number
}

const emailAddress = 'nik.dmello@gmail.com'
const typedIntroText = "Hi, I'm Nikhil D'Mello"
const headlinePrefix = 'Software Engineer building'
const headlineOptions = ['backend services.', 'distributed systems.', 'cool products.']
const finalHeadlineText = `${headlinePrefix} ${headlineOptions[headlineOptions.length - 1]}`
const introSpeed = 30
const headlineTypeSpeed = 40
const headlineDeleteSpeed = 24
const headlinePause = 900
const lineWrapBuffer = 18

const defaultHeadlineLayout: HeadlineLayout = {
  prefixLines: [headlinePrefix],
  suffixLinesByOption: headlineOptions.map((option) => [option]),
  maxPrefixLines: 1,
  maxSuffixLines: 1
}

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
  const [currentHeadlineIndex, setCurrentHeadlineIndex] = useState(0)
  const [headlineLayout, setHeadlineLayout] = useState<HeadlineLayout>(defaultHeadlineLayout)
  const [showActions, setShowActions] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    let isCancelled = false
    let timeoutId: number | undefined

    setTypedIntro('')
    setTypedHeadlinePrefix('')
    setTypedHeadlineSuffix('')
    setCurrentHeadlineIndex(0)
    setShowActions(false)

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
      setCurrentHeadlineIndex(wordIndex)
      setTypedHeadlineSuffix(currentWord.slice(0, charIndex))

      if (charIndex < currentWord.length) {
        timeoutId = window.setTimeout(
          () => typeHeadline(wordIndex, charIndex + 1),
          headlineTypeSpeed
        )
        return
      }

      if (wordIndex === headlineOptions.length - 1) {
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
    const splitPhraseToFit = (phrase: string, availableWidth: number) => {
      if (!headlineContainerRef.current || !headlineMeasureRef.current) return
      const measure = headlineMeasureRef.current
      measure.textContent = phrase
      const fullWidth = measure.getBoundingClientRect().width

      if (fullWidth + lineWrapBuffer <= availableWidth) {
        return [phrase]
      }

      const words = phrase.split(' ')
      if (words.length < 2) {
        return [phrase]
      }

      let bestSplit: string[] | null = null

      for (let index = 1; index < words.length; index += 1) {
        const firstLine = words.slice(0, index).join(' ')
        const secondLine = words.slice(index).join(' ')

        measure.textContent = firstLine
        const firstWidth = measure.getBoundingClientRect().width

        measure.textContent = secondLine
        const secondWidth = measure.getBoundingClientRect().width

        if (
          firstWidth + lineWrapBuffer <= availableWidth &&
          secondWidth + lineWrapBuffer <= availableWidth
        ) {
          bestSplit = [firstLine, secondLine]
        }
      }

      if (bestSplit) {
        return bestSplit
      }

      return [words.slice(0, -1).join(' '), words[words.length - 1]]
    }

    const updateHeadlineLayout = () => {
      if (!headlineContainerRef.current || !headlineMeasureRef.current) return

      const availableWidth = headlineContainerRef.current.getBoundingClientRect().width
      const prefixLines = splitPhraseToFit(headlinePrefix, availableWidth) ?? [headlinePrefix]
      const suffixLinesByOption = headlineOptions.map((option) => (
        splitPhraseToFit(option, availableWidth) ?? [option]
      ))

      setHeadlineLayout({
        prefixLines,
        suffixLinesByOption,
        maxPrefixLines: prefixLines.length,
        maxSuffixLines: Math.max(...suffixLinesByOption.map((lines) => lines.length))
      })
    }

    updateHeadlineLayout()

    const resizeObserver = new ResizeObserver(updateHeadlineLayout)
    if (headlineContainerRef.current) {
      resizeObserver.observe(headlineContainerRef.current)
    }

    window.addEventListener('resize', updateHeadlineLayout)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateHeadlineLayout)
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
  const suffixLayout = headlineLayout.suffixLinesByOption[currentHeadlineIndex] ?? [headlineOptions[currentHeadlineIndex]]

  const splitTypedByLines = (typedValue: string, lines: string[]) => {
    let cursor = 0

    return lines.map((line, index) => {
      const start = cursor
      const end = start + line.length
      const segment = typedValue.length <= start
        ? ''
        : typedValue.slice(start, Math.min(typedValue.length, end))

      cursor = end + (index < lines.length - 1 ? 1 : 0)
      return segment
    })
  }

  const getActiveLineIndex = (lines: string[]) => {
    for (let index = lines.length - 1; index >= 0; index -= 1) {
      if (lines[index].length > 0) {
        return index
      }
    }

    return 0
  }

  const prefixTypedLines = splitTypedByLines(typedHeadlinePrefix, headlineLayout.prefixLines)
  const suffixTypedLines = splitTypedByLines(typedHeadlineSuffix, suffixLayout)
  const activePrefixLineIndex = getActiveLineIndex(prefixTypedLines)
  const activeSuffixLineIndex = getActiveLineIndex(suffixTypedLines)

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
                  className="pointer-events-none absolute left-0 top-0 whitespace-nowrap text-4xl font-semibold tracking-tight text-white opacity-0 sm:text-5xl lg:text-7xl"
                >
                  {headlinePrefix}
                </span>

                <div
                  aria-hidden="true"
                  className="invisible text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]"
                >
                  {Array.from({ length: headlineLayout.maxPrefixLines }).map((_, index) => (
                    <span key={`prefix-reserve-${index}`} className="block min-h-[1.08em] sm:min-h-[1.02em]">
                      {headlineLayout.prefixLines[index] || '\u00A0'}
                    </span>
                  ))}
                  <div className="mt-1 sm:mt-2">
                    {Array.from({ length: headlineLayout.maxSuffixLines }).map((_, index) => (
                      <span key={`suffix-reserve-${index}`} className="block min-h-[1.08em] sm:min-h-[1.02em]">
                        {'\u00A0'}
                      </span>
                    ))}
                  </div>
                </div>

                <h1
                  className="absolute inset-0 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl lg:leading-[1.02]"
                  aria-label={finalHeadlineText}
                >
                  {Array.from({ length: headlineLayout.maxPrefixLines }).map((_, index) => (
                    <span key={`prefix-line-${index}`} className="block min-h-[1.08em] sm:min-h-[1.02em]">
                      {prefixTypedLines[index] || '\u00A0'}
                      {activeSegment === 'headline-prefix' && index === activePrefixLineIndex ? (
                        <span
                          aria-hidden="true"
                          className={caretClass}
                        />
                      ) : null}
                    </span>
                  ))}
                  <div className="mt-1 sm:mt-2">
                    {Array.from({ length: headlineLayout.maxSuffixLines }).map((_, index) => (
                      <span key={`suffix-line-${index}`} className="block min-h-[1.08em] sm:min-h-[1.02em]">
                        {suffixTypedLines[index] || '\u00A0'}
                        {activeSegment === 'headline' && index === activeSuffixLineIndex ? (
                          <span
                            aria-hidden="true"
                            className={caretClass}
                          />
                        ) : null}
                      </span>
                    ))}
                  </div>
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
