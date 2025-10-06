'use client'

export default function SkipLink() {
  return (
    <button 
      onClick={() => document.getElementById('main-content')?.focus()}
      className="skip-to-content"
    >
      Skip to main content
    </button>
  )
}