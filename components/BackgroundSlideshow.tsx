'use client'

import { useEffect, useState } from 'react'

const photos = [
  { src: '/images/IMG_0673.jpeg', location: 'Lower Antelope Canyon', date: 'Jun 2025' },
  { src: '/images/IMG_6650.jpeg', location: 'Chicago, IL', date: 'Apr 2025' },
  { src: '/images/IMG_7280.jpeg', location: 'Horseshoe Canyon', date: 'Jun 2025' },
  { src: '/images/IMG_8807.jpeg', location: 'Petra, Jordan', date: 'Oct 2025' },
  { src: '/images/IMG_8864.jpeg', location: 'Amman Citadel, Jordan', date: 'Oct 2025' }
]

export default function BackgroundSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const currentPhoto = photos[currentIndex]

  return (
    <div className="fixed inset-0" style={{ zIndex: 0 }}>
      {photos.map((photo, index) => (
        <div
          key={photo.src}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentIndex ? 1 : 0,
            transition: 'opacity 2s ease-in-out'
          }}
        >
          <img
            src={photo.src}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1 }} />
      
      <div style={{ position: 'absolute', bottom: '24px', left: '24px', color: 'rgba(255,255,255,0.4)', fontSize: '13px', zIndex: 2, fontWeight: 300 }}>
        <p>{currentPhoto.location}</p>
        <p>{currentPhoto.date}</p>
      </div>
    </div>
  )
}
