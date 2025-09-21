'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 border-2 border-cyber-blue border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-300">Loading...</p>
      </div>
    </div>
  )
}