'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function CinematicIntro() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frame = 0

    const updateProgress = () => {
      frame = 0
      const distance = section.offsetHeight - window.innerHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance)) : 0
      const zoomProgress = Math.min(1, progress / 0.68)
      const skyProgress = Math.min(1, Math.max(0, (progress - 0.58) / 0.2))
      const messageProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.16))
      const exitProgress = Math.min(1, Math.max(0, (progress - 0.86) / 0.14))
      section.style.setProperty('--reveal', progress.toFixed(3))
      section.style.setProperty('--zoom', zoomProgress.toFixed(3))
      section.style.setProperty('--sky', skyProgress.toFixed(3))
      section.style.setProperty('--message', (messageProgress * (1 - exitProgress)).toFixed(3))
      section.style.setProperty('--exit', exitProgress.toFixed(3))
      document.documentElement.style.setProperty('--intro-exit', exitProgress.toFixed(3))
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress)
    }

    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2
      section.style.setProperty('--pointer-x', x.toFixed(3))
      section.style.setProperty('--pointer-y', y.toFixed(3))
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.style.removeProperty('--intro-exit')
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="cinematic-intro" id="landing" ref={sectionRef} aria-label="Introduction">
      <div className="cinematic-sticky">
        <div className="cinematic-frame">
          <Image
            className="cinematic-image"
            src="/images/intro-antelope-detail.webp"
            alt="Looking up through Lower Antelope Canyon"
            fill
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="cinematic-shade" />
        </div>
        <div className="cinematic-sky" aria-hidden="true" />
        <div className="cinematic-message">
          <h1>I find clarity<br />inside <em>complexity.</em></h1>
        </div>
      </div>
    </section>
  )
}
