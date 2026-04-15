'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="px-4 pb-6 sm:px-6 sm:pb-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 rounded-[1.75rem] border border-white/12 bg-black/45 px-5 py-4 text-sm text-gray-400 shadow-lg shadow-black/20 backdrop-blur-md md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-sm text-white">
            ND
          </span>
          <p>© {currentYear} Nikhil D&apos;Mello</p>
        </div>
        <p className="eyebrow text-[11px] text-gray-500">Built with Next.js and deployed on Vercel</p>
      </div>
    </footer>
  )
}
