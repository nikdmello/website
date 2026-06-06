'use client'

import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 pb-6 pt-2 sm:px-6 sm:pb-8">
      <div className="site-shell flex items-center gap-3 border-t border-white/10 px-4 py-3 text-sm text-white/68 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/10">
            <Image
              src="/images/PFP.webp"
              alt="Nikhil D'Mello"
              fill
              sizes="36px"
              className="object-cover"
            />
          </span>
          <p>© {currentYear} Nikhil D&apos;Mello</p>
        </div>
      </div>
    </footer>
  )
}
