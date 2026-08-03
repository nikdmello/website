'use client'

import { type ReactNode, useState } from 'react'
import { Check, Mail } from 'lucide-react'

type ScrollButtonProps = {
  children: ReactNode
  className?: string
  targetId: string
  ariaLabel?: string
}

export function ScrollButton({ children, className, targetId, ariaLabel }: ScrollButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
    >
      {children}
    </button>
  )
}

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('nik.dmello@gmail.com')
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <button className="primary" type="button" onClick={copyEmail}>
      {copied ? <Check /> : <Mail />}
      {copied ? 'Email copied' : 'Copy my email'}
    </button>
  )
}
