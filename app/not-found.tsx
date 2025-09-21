'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-bg text-white flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.h1 
            className="text-8xl md:text-9xl font-bold gradient-text mb-6"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Agent Not Found
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            This autonomous agent seems to have wandered off the network. 
            Let's get you back to the coordination hub.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:glow-effect transition-all duration-300 rainbow-glow"
            >
              <Home className="w-5 h-5" />
              Return to Base
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 rainbow-glow"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>
        
        {/* Animated background grid */}
        <div className="absolute inset-0 -z-10">
          <motion.div 
            className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        </div>
      </div>
    </main>
  )
}