'use client'

import { motion } from 'framer-motion'

export const HandDrawnArrow = ({ className = "", direction = "right" }: { className?: string, direction?: "right" | "left" | "up" | "down" }) => {
  const paths = {
    right: "M2 12 L18 12 M14 8 L18 12 L14 16",
    left: "M18 12 L2 12 M6 8 L2 12 L6 16", 
    up: "M12 18 L12 2 M8 6 L12 2 L16 6",
    down: "M12 2 L12 18 M8 14 L12 18 L16 14"
  }
  
  return (
    <motion.svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={`text-cyber-blue ${className}`}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
      <motion.path 
        d={paths[direction]}
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        style={{
          filter: "url(#roughen)"
        }}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <defs>
        <filter id="roughen">
          <feTurbulence baseFrequency="0.04" numOctaves="3" result="noise" seed="1"/>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
        </filter>
      </defs>
    </motion.svg>
  )
}

export const HandDrawnUnderline = ({ className = "" }: { className?: string }) => (
  <motion.svg 
    width="100%" 
    height="12" 
    viewBox="0 0 100 12" 
    className={`absolute -bottom-2 left-0 ${className}`}
    preserveAspectRatio="none"
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  >
    <motion.path 
      d="M2 6 Q25 4 50 6 T98 6"
      stroke="#00d4ff" 
      strokeWidth="2.5" 
      fill="none"
      strokeLinecap="round"
      style={{
        filter: "url(#roughen2)"
      }}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
    />
    <defs>
      <filter id="roughen2">
        <feTurbulence baseFrequency="0.02" numOctaves="2" result="noise" seed="2"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8"/>
      </filter>
    </defs>
  </motion.svg>
)

export const HandDrawnCircle = ({ className = "" }: { className?: string }) => (
  <motion.svg 
    width="100%" 
    height="100%" 
    viewBox="0 0 100 100" 
    className={`absolute inset-0 pointer-events-none ${className}`}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 1 }}
    transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
  >
    <motion.ellipse 
      cx="50" 
      cy="50" 
      rx="45" 
      ry="40"
      stroke="#00d4ff" 
      strokeWidth="2" 
      fill="none"
      style={{
        filter: "url(#roughen3)"
      }}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
    />
    <defs>
      <filter id="roughen3">
        <feTurbulence baseFrequency="0.03" numOctaves="2" result="noise" seed="3"/>
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2"/>
      </filter>
    </defs>
  </motion.svg>
)