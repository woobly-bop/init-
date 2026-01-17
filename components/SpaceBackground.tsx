'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function SpaceBackground() {
  const prefersReducedMotion = useReducedMotion()
  const [stars, setStars] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([])

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))
    setStars(newStars)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Deep space gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, #1a1f3a 0%, #0a0e27 50%, #050812 100%)',
        }}
      />

      {/* Floating abstract shapes - ambient motion */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          y: [0, -20, 0],
          x: [0, 10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4), transparent)',
        }}
      />

      <motion.div
        animate={prefersReducedMotion ? {} : {
          y: [0, 30, 0],
          x: [0, -15, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
        }}
      />

      <motion.div
        animate={prefersReducedMotion ? {} : {
          y: [0, -15, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.2), transparent)',
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0 }}
          animate={prefersReducedMotion ? { opacity: 0.8 } : {
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}

      {/* Moon or large celestial body */}
      <motion.div
        animate={prefersReducedMotion ? {} : {
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-10 right-20 w-32 h-32 rounded-full blur-xl opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.4), transparent)',
        }}
      />
    </div>
  )
}

