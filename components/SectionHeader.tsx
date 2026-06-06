'use client'

type SectionHeaderProps = {
  title: string
  description: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 grid gap-4 border-b border-white/8 pb-6 md:mb-14 md:gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-end lg:gap-8 lg:pb-8">
      <h2 className="text-4xl font-bold leading-none text-white md:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-white/88 md:text-[1.05rem] lg:justify-self-end">
        {description}
      </p>
    </div>
  )
}
