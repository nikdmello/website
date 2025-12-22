'use client'

import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Target } from 'lucide-react'

const visionPoints = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'Agent Economy Infrastructure',
    description: 'Building the "AWS of agent economies" - production-ready infrastructure enabling AI agents to coordinate and transact at machine speed.',
    gradient: 'from-cyber-blue to-blue-600'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Cryptographic Guarantees',
    description: 'Agent behavior becomes predictable through cryptographic proofs rather than explainable through natural language.',
    gradient: 'from-cyber-purple to-purple-600'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Byzantine Fault Tolerance',
    description: 'Consensus mechanisms that maintain security when coordinating millions of economically motivated agents with conflicting objectives.',
    gradient: 'from-green-400 to-emerald-600'
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Enterprise Infrastructure',
    description: 'Building the "AWS of agent economies" - production-ready infrastructure that enterprises can trust and regulators can understand.',
    gradient: 'from-orange-400 to-red-600'
  }
]

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,245,255,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Research & Industry Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Bridging the gap between theoretical multi-agent research and production-ready systems. 
            Swift demonstrates <span className="text-cyber-blue font-semibold">cryptographically guaranteed coordination</span> 
            at machine speed, while production systems at Associa prove scalability across millions of users.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-border rounded-xl p-8 bg-card-bg hover:glow-effect transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${point.gradient} text-white mb-6`}>
                {point.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{point.title}</h3>
              <p className="text-gray-300 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="cyber-border rounded-xl p-8 bg-gradient-to-r from-card-bg to-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Future Impact</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-cyber-blue font-semibold mb-4">Technical Focus</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0" />
                  <span>Multi-agent coordination systems with cryptographic security guarantees</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0" />
                  <span>Distributed consensus mechanisms for autonomous agent networks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2 flex-shrink-0" />
                  <span>Production-scale infrastructure for enterprise agent deployment</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyber-purple font-semibold mb-4">Industry Applications</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2 flex-shrink-0" />
                  <span>Supply chain optimization through autonomous agent coordination</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2 flex-shrink-0" />
                  <span>Financial systems with algorithmic consensus and real-time settlement</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2 flex-shrink-0" />
                  <span>Enterprise infrastructure enabling trustless agent economies</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}