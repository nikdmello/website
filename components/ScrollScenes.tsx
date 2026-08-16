'use client'

import { useEffect } from 'react'

const clamp = (value: number) => Math.min(1, Math.max(0, value))
const ease = (value: number) => value * value * (3 - 2 * value)

export default function ScrollScenes() {
  useEffect(() => {
    const tracks = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-track]'))
    let frame = 0
    let snapIndex = window.scrollY <= 2 ? -1 : 0
    let snapLocked = false
    let snapTimer = 0
    let snapFrame = 0
    let touchStart = 0

    const getStops = () => {
      const intro = document.querySelector<HTMLElement>('.cinematic-intro')
      if (!intro) return []
      const viewport = window.innerHeight
      const introDistance = Math.max(1, intro.offsetHeight - viewport)
      const stops = [introDistance * 0.14, introDistance * 0.58]

      tracks.forEach((track) => {
        const distance = Math.max(1, track.offsetHeight - viewport)
        stops.push(track.offsetTop + distance * 0.5)
      })

      return stops
    }

    const nearestStop = (stops: number[]) => stops.reduce((nearest, stop, index) => (
      Math.abs(stop - window.scrollY) < Math.abs(stops[nearest] - window.scrollY) ? index : nearest
    ), 0)

    const animateTo = (top: number) => {
      const start = window.scrollY
      const distance = top - start
      const startedAt = performance.now()
      const duration = window.matchMedia('(max-width: 800px)').matches ? 560 : 900
      const previousScrollBehavior = document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'

      const tick = (now: number) => {
        const progress = clamp((now - startedAt) / duration)
        window.scrollTo(0, start + distance * ease(progress))
        if (progress < 1) {
          snapFrame = window.requestAnimationFrame(tick)
        } else {
          document.documentElement.style.scrollBehavior = previousScrollBehavior
        }
      }

      if (snapFrame) window.cancelAnimationFrame(snapFrame)
      snapFrame = window.requestAnimationFrame(tick)
    }

    const moveToStop = (direction: 1 | -1) => {
      const intro = document.querySelector<HTMLElement>('.cinematic-intro')
      if (intro?.dataset.zoom !== 'complete') return false
      const stops = getStops()
      if (!stops.length) return false

      if (window.scrollY > 2 && !snapLocked) snapIndex = nearestStop(stops)
      snapIndex = Math.min(stops.length - 1, Math.max(-1, snapIndex + direction))
      const top = snapIndex < 0 ? 0 : stops[snapIndex]
      animateTo(top)
      snapLocked = true
      window.clearTimeout(snapTimer)
      const lockDuration = window.matchMedia('(max-width: 800px)').matches ? 650 : 1000
      snapTimer = window.setTimeout(() => { snapLocked = false }, lockDuration)
      return true
    }

    const update = () => {
      frame = 0
      const viewport = window.innerHeight

      tracks.forEach((track) => {
        const stage = track.querySelector<HTMLElement>('[data-scroll-stage]')
        if (!stage) return
        const rect = track.getBoundingClientRect()
        const distance = Math.max(1, rect.height - viewport)
        const progress = clamp(-rect.top / distance)
        const trackName = track.dataset.scrollTrack
        const fadeIn = trackName === 'experience'
          ? ease(clamp((progress - 0.06) / 0.08))
          : ease(clamp(progress / 0.16))
        const fadeOut = trackName === 'contact' ? 1 : ease(clamp((1 - progress) / 0.16))
        stage.style.setProperty('--scene-opacity', Math.min(fadeIn, fadeOut).toFixed(3))
      })
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 8) return
      const intro = document.querySelector<HTMLElement>('.cinematic-intro')
      if (intro?.dataset.zoom !== 'complete') return
      event.preventDefault()
      if (!snapLocked) moveToStop(event.deltaY > 0 ? 1 : -1)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      const direction = ['ArrowDown', 'PageDown', ' '].includes(event.key)
        ? 1
        : ['ArrowUp', 'PageUp'].includes(event.key) ? -1 : 0
      if (!direction || snapLocked) return
      if (moveToStop(direction)) event.preventDefault()
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStart = event.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (event: TouchEvent) => {
      const intro = document.querySelector<HTMLElement>('.cinematic-intro')
      if (intro?.dataset.zoom === 'complete') event.preventDefault()
    }

    const onTouchEnd = (event: TouchEvent) => {
      if (snapLocked) return
      const end = event.changedTouches[0]?.clientY ?? touchStart
      const delta = touchStart - end
      if (Math.abs(delta) > 24) moveToStop(delta > 0 ? 1 : -1)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('touchend', onTouchEnd)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
      tracks.forEach((track) => track.querySelector<HTMLElement>('[data-scroll-stage]')?.style.removeProperty('--scene-opacity'))
      window.clearTimeout(snapTimer)
      if (snapFrame) window.cancelAnimationFrame(snapFrame)
      document.documentElement.style.removeProperty('scroll-behavior')
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
