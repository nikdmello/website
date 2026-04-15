'use client'

import { useEffect, useRef, useState } from 'react'

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

export default function TopNav() {
  const [activeSection, setActiveSection] = useState('home')
  const navItemRefs = useRef<Record<string, HTMLButtonElement | null>>({})

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const updateActiveSection = () => {
      const pageBottom = window.innerHeight + window.scrollY
      const documentHeight = document.documentElement.scrollHeight

      if (documentHeight - pageBottom < 80) {
        setActiveSection(navigationItems[navigationItems.length - 1].id)
        return
      }

      const focusLine = Math.min(window.innerHeight * 0.38, 320)
      let currentSection = navigationItems[0].id
      let closestDistance = Number.POSITIVE_INFINITY

      for (const item of navigationItems) {
        const section = document.getElementById(item.id)
        if (!section) continue

        const rect = section.getBoundingClientRect()

        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          setActiveSection(item.id)
          return
        }

        const distance = Math.abs(rect.top - focusLine)
        if (distance < closestDistance) {
          closestDistance = distance
          currentSection = item.id
        }
      }

      setActiveSection(currentSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [])

  useEffect(() => {
    navItemRefs.current[activeSection]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest'
    })
  }, [activeSection])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="pointer-events-auto mx-auto flex max-w-6xl items-center gap-3 rounded-full border border-white/12 bg-black/45 px-3 py-3 shadow-lg shadow-black/20 backdrop-blur-md sm:gap-4 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToSection('home')}
          className="flex flex-shrink-0 items-center gap-3 text-left text-sm font-medium text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-sm">
            ND
          </span>
          <span className="hidden text-left sm:block">
            <span className="block text-sm">Nikhil D&apos;Mello</span>
            <span className="eyebrow block text-[10px] text-gray-400">Software Engineer</span>
          </span>
        </button>

        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto text-sm text-gray-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:ml-auto sm:min-w-fit sm:flex-none sm:overflow-visible">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                ref={(element) => {
                  navItemRefs.current[item.id] = element
                }}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] transition-colors sm:px-3 sm:text-sm ${
                  isActive ? 'bg-white text-black' : 'hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}
