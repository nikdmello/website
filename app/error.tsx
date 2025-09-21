'use client'

import { motion } from 'framer-motion'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="min-h-screen bg-dark-bg text-white flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="p-4 rounded-full bg-red-500/20 text-red-400">
              <AlertTriangle className="w-16 h-16" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            System Error Detected
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            An unexpected error occurred in the agent coordination system.
          </motion.p>
          
          <motion.p 
            className="text-sm text-gray-400 mb-8 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Error: {error.message}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              onClick={reset}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:glow-effect transition-all duration-300 rainbow-glow"
            >
              <RefreshCw className="w-5 h-5" />
              Restart System
            </button>
            
            <Link 
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 rainbow-glow"
            >
              <Home className="w-5 h-5" />
              Return to Base
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}