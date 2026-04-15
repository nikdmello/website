'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'

type CursorToastProps = {
  toast: {
    visible: boolean
    x: number
    y: number
    message: string
  }
}

export default function CursorToast({ toast }: CursorToastProps) {
  return (
    <AnimatePresence>
      {toast.visible ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 4 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="pointer-events-none fixed z-[90]"
          style={{
            left: toast.x + 18,
            top: toast.y - 18
          }}
        >
          <div className="flex items-center gap-2 rounded-full border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] px-2.5 py-2 text-white shadow-[0_14px_34px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black">
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="pr-1 text-[12px] font-medium tracking-[0.01em] text-white/95">
              {toast.message}
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
