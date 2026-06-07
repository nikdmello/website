'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const navigationItems = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'open-source', label: 'Open Source' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
]

const scrollTrackedItems = navigationItems.filter((item) => item.id !== 'home')

export default function TopNav() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    setMobileMenuOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const updateActiveSection = () => {
      setIsScrolled(window.scrollY > 24)

      const pageBottom = window.innerHeight + window.scrollY
      const documentHeight = document.documentElement.scrollHeight

      if (documentHeight - pageBottom < 80) {
        setActiveSection(scrollTrackedItems[scrollTrackedItems.length - 1].id)
        return
      }

      const focusLine = Math.min(window.innerHeight * 0.38, 320)
      const firstSection = document.getElementById(scrollTrackedItems[0].id)

      if (firstSection && firstSection.getBoundingClientRect().top > focusLine) {
        setActiveSection('home')
        return
      }

      let currentSection = scrollTrackedItems[0].id
      let closestDistance = Number.POSITIVE_INFINITY

      for (const item of scrollTrackedItems) {
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
    const closeOnDesktop = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', closeOnDesktop)
    return () => window.removeEventListener('resize', closeOnDesktop)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="site-shell relative">
        <nav
          className={`pointer-events-auto flex items-center gap-3 border-b px-4 py-2.5 transition-all duration-300 sm:gap-5 sm:px-6 ${
          isScrolled
            ? 'border-white/10 bg-transparent shadow-none'
            : 'border-transparent bg-transparent shadow-none'
          }`}
        >
          <button
            type="button"
            onClick={() => scrollToSection('home')}
            className={`flex flex-shrink-0 items-center gap-3 px-1 py-1 text-left text-sm font-medium text-white transition-opacity ${
              isScrolled ? 'hover:opacity-100 sm:opacity-95' : 'opacity-90 hover:opacity-100'
            }`}
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
              <Image
                src="/images/PFP.webp"
                alt="Nikhil D'Mello"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="hidden text-left sm:block">
              <span className="block text-sm text-white">Nikhil D&apos;Mello</span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-white/85 transition-colors hover:bg-white/[0.06] hover:text-white sm:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <div className="hidden min-w-0 flex-1 items-center gap-1 text-sm text-white/80 sm:ml-auto sm:flex sm:min-w-fit sm:flex-none sm:overflow-visible">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link whitespace-nowrap px-2 py-1.5 text-[13px] sm:px-3 sm:text-sm ${
                    isActive ? 'nav-link-active text-white' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
                )
              })}
          </div>
        </nav>

        {mobileMenuOpen ? (
          <div className="pointer-events-auto absolute right-0 top-full mt-2 w-56 sm:hidden">
            <div className="overflow-hidden rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(26,26,26,0.9),rgba(18,18,18,0.82))] shadow-[0_18px_36px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
              <div className="flex flex-col gap-1.5 p-2">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center justify-between rounded-[0.9rem] px-3.5 py-3 text-left text-sm transition-colors ${
                      isActive ? 'bg-white/[0.07] text-white' : 'text-white/80 hover:bg-white/[0.045] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                  </button>
                )
              })}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}
