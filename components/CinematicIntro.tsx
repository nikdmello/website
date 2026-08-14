'use client'

import Image from 'next/image'
import { type ReactNode, useEffect, useRef } from 'react'

type CinematicIntroProps = { children: ReactNode }

const clamp = (value: number) => Math.min(1, Math.max(0, value))
const ease = (value: number) => value * value * (3 - 2 * value)

export default function CinematicIntro({ children }: CinematicIntroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const image = section.querySelector<HTMLElement>('.cinematic-image')

    let frame = 0
    let touchStart = 0
    let zoomStarted = false
    let zoomComplete = false
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const completeZoom = () => {
      zoomComplete = true
      section.dataset.zoom = 'complete'
    }

    const onZoomEnd = (event: AnimationEvent) => {
      if (event.animationName === 'canyon-dive') completeZoom()
    }

    const startZoom = () => {
      if (zoomStarted || window.scrollY > 2) return
      zoomStarted = true
      section.dataset.zoom = reducedMotion ? 'complete' : 'running'
      if (reducedMotion) {
        completeZoom()
        return
      }
    }

    const updateProgress = () => {
      frame = 0
      const distance = section.offsetHeight - window.innerHeight
      const progress = distance > 0 ? clamp(-section.getBoundingClientRect().top / distance) : 0
      const clarityIn = ease(clamp(progress / 0.08))
      const profileCrossfade = ease(clamp((progress - 0.26) / 0.2))
      const clarityOut = 1 - profileCrossfade
      const profileIn = profileCrossfade
      const light = ease(clamp((progress - 0.58) / 0.4))
      const profileOut = 1 - light

      section.style.setProperty('--clarity', (clarityIn * clarityOut).toFixed(3))
      section.style.setProperty('--profile', (profileIn * profileOut).toFixed(3))
      section.style.setProperty('--light', light.toFixed(3))
      section.style.setProperty('--light-y', `${((1 - light) * 100).toFixed(2)}%`)
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    const onWheel = (event: WheelEvent) => {
      if (window.scrollY <= 2 && event.deltaY > 0 && !zoomComplete) {
        event.preventDefault()
        startZoom()
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (window.scrollY > 2 || zoomComplete) return
      if (['ArrowDown', 'PageDown', ' ', 'End'].includes(event.key)) {
        event.preventDefault()
        startZoom()
      }
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStart = event.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (event: TouchEvent) => {
      const current = event.touches[0]?.clientY ?? touchStart
      if (window.scrollY <= 2 && touchStart - current > 18 && !zoomComplete) {
        event.preventDefault()
        startZoom()
      }
    }

    updateProgress()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    image?.addEventListener('animationend', onZoomEnd)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      image?.removeEventListener('animationend', onZoomEnd)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="cinematic-intro" id="landing" ref={sectionRef} aria-label="Introduction">
      <div className="cinematic-sticky">
        <div className="cinematic-frame">
          <Image className="cinematic-image" src="/images/intro-antelope-detail.webp" alt="Looking up through Lower Antelope Canyon" fill priority unoptimized sizes="100vw" />
          <div className="cinematic-shade" />
        </div>
        <div className="cinematic-message"><h1>I find clarity<br />inside <em>complexity.</em></h1></div>
        <div className="opening-profile">{children}</div>
        <div className="opening-light" aria-hidden="true" />
      </div>
    </section>
  )
}
