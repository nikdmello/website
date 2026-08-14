'use client'

import { useEffect } from 'react'

const clamp = (value: number) => Math.min(1, Math.max(0, value))
const ease = (value: number) => value * value * (3 - 2 * value)

export default function ScrollScenes() {
  useEffect(() => {
    const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-scene]'))
    const tracks = Array.from(document.querySelectorAll<HTMLElement>('[data-scroll-track]'))
    const groups = new Map<string, HTMLElement[]>()
    let frame = 0

    scenes.forEach((scene, index) => {
      const name = scene.dataset.scrollScene || `scene-${index}`
      groups.set(name, [...(groups.get(name) ?? []), scene])
    })

    const update = () => {
      frame = 0
      const viewport = window.innerHeight

      groups.forEach((elements, name) => {
        const rects = elements.map((element) => element.getBoundingClientRect())
        const top = Math.min(...rects.map((rect) => rect.top))
        const bottom = Math.max(...rects.map((rect) => rect.bottom))
        const isProfile = name === 'profile'
        const enter = isProfile ? 1 : ease(clamp((viewport * 0.35 - top) / (viewport * 0.2)))
        const leave = isProfile
          ? ease(clamp((bottom - viewport * 1.02) / (viewport * 0.18)))
          : ease(clamp((bottom - viewport * 0.35) / (viewport * 0.2)))
        const opacity = Math.min(enter, leave)

        elements.forEach((element) => element.style.setProperty('--scene-opacity', opacity.toFixed(3)))
      })

      tracks.forEach((track) => {
        const stage = track.querySelector<HTMLElement>('[data-scroll-stage]')
        if (!stage) return
        const rect = track.getBoundingClientRect()
        const distance = Math.max(1, rect.height - viewport)
        const progress = clamp(-rect.top / distance)
        const fadeIn = ease(clamp(progress / 0.16))
        const fadeOut = ease(clamp((1 - progress) / 0.16))
        stage.style.setProperty('--scene-opacity', Math.min(fadeIn, fadeOut).toFixed(3))
      })
    }

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      scenes.forEach((scene) => scene.style.removeProperty('--scene-opacity'))
      tracks.forEach((track) => track.querySelector<HTMLElement>('[data-scroll-stage]')?.style.removeProperty('--scene-opacity'))
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return null
}
