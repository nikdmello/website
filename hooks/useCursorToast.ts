'use client'

import { useEffect, useRef, useState, type MouseEvent } from 'react'

type CursorToastState = {
  visible: boolean
  x: number
  y: number
  message: string
}

const defaultToastState: CursorToastState = {
  visible: false,
  x: 0,
  y: 0,
  message: ''
}

type CursorToastAnchor =
  | MouseEvent<HTMLElement>
  | {
      target: HTMLElement | null
      clientX?: number
      clientY?: number
    }

export function useCursorToast(duration = 1400) {
  const [toast, setToast] = useState<CursorToastState>(defaultToastState)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const showToast = (anchor: CursorToastAnchor, message: string) => {
    const target = 'currentTarget' in anchor ? anchor.currentTarget : anchor.target
    if (!target) return

    const rect = target.getBoundingClientRect()
    const x = anchor.clientX || rect.left + rect.width / 2
    const y = anchor.clientY || rect.top + rect.height / 2

    setToast({
      visible: true,
      x,
      y,
      message
    })

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = window.setTimeout(() => {
      setToast((currentToast) => ({ ...currentToast, visible: false }))
    }, duration)
  }

  return {
    toast,
    showToast
  }
}
