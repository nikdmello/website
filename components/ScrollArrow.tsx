'use client'

import { motion } from 'framer-motion'
import { ArrowDown, ArrowUp } from 'lucide-react'

type ScrollArrowProps = {
  direction: 'up' | 'down'
  onClick: () => void
}

export default function ScrollArrow({ direction, onClick }: ScrollArrowProps) {
  const Icon = direction === 'up' ? ArrowUp : ArrowDown
  const animateY = direction === 'up' ? [0, -10, 0] : [0, 10, 0]
  
  return (
    <button
      onClick={onClick}
      className="w-6 h-6 cursor-pointer hover:text-white transition-colors"
      aria-label={`Scroll to ${direction === 'up' ? 'top' : 'next section'}`}
    >
      <motion.div
        animate={{ y: animateY }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <Icon className="w-6 h-6 text-cyber-blue hover:text-white transition-colors" />
      </motion.div>
    </button>
  )
}
