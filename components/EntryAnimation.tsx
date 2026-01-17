'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface EntryAnimationProps {
  isActive: boolean
  onComplete: () => void
}

export default function EntryAnimation({ isActive, onComplete }: EntryAnimationProps) {
  const prefersReducedMotion = useReducedMotion()
  const [phase, setPhase] = useState<'idle' | 'ignition' | 'lift' | 'complete'>('idle')

  useEffect(() => {
    if (isActive) {
      // Phase 1: Ignition (0-0.5s)
      setPhase('ignition')
      const ignitionTimer = setTimeout(() => {
        // Phase 2: Lift (0.5s-2.5s)
        setPhase('lift')
        const liftTimer = setTimeout(() => {
          setPhase('complete')
          onComplete()
        }, prefersReducedMotion ? 500 : 2000)
        
        return () => clearTimeout(liftTimer)
      }, prefersReducedMotion ? 100 : 500)
      
      return () => clearTimeout(ignitionTimer)
    } else {
      setPhase('idle')
    }
  }, [isActive, onComplete, prefersReducedMotion])

  if (!isActive) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      {/* Golden/Yellow Light Ignition - expands from bottom */}
      <motion.div
        initial={{ 
          height: '0%',
          opacity: 0,
        }}
        animate={phase === 'ignition' || phase === 'lift' ? {
          height: '100%',
          opacity: [0, 0.6, 0.4],
        } : {}}
        transition={{
          duration: prefersReducedMotion ? 0.3 : 0.5,
          ease: 'easeOut',
        }}
        className="absolute bottom-0 left-0 right-0"
        style={{
          background: 'linear-gradient(to top, #fbbf24, #fcd34d, transparent)',
          filter: 'blur(40px)',
        }}
      />

      {/* Energy Column / Abstract Rocket - vertical beam */}
      <motion.div
        initial={{ 
          y: '100vh',
          height: '0%',
          opacity: 0,
        }}
        animate={phase === 'ignition' || phase === 'lift' ? {
          y: '50vh',
          height: '50%',
          opacity: [0, 1, 0.8],
        } : {}}
        transition={{
          duration: prefersReducedMotion ? 0.5 : 2,
          ease: 'easeOut',
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32"
        style={{
          background: 'linear-gradient(to top, #fbbf24, #fcd34d, rgba(99, 102, 241, 0.5), transparent)',
          filter: 'blur(20px)',
        }}
      />

      {/* Sparks and particles rising */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            y: '100vh',
            x: '50%',
            opacity: 0,
            scale: 0,
          }}
          animate={phase === 'ignition' || phase === 'lift' ? {
            y: '-20vh',
            x: `calc(50% + ${(i - 10) * 30}px)`,
            opacity: [0, 1, 0],
            scale: [0, 1, 0.5],
          } : {}}
          transition={{
            duration: prefersReducedMotion ? 0.5 : 1.5 + Math.random() * 0.5,
            delay: i * 0.05,
            ease: 'easeOut',
          }}
          className="absolute"
        >
          <div 
            className="w-2 h-2 rounded-full"
            style={{
              background: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#fcd34d' : '#818cf8',
              boxShadow: `0 0 10px ${i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#fcd34d' : '#818cf8'}`,
            }}
          />
        </motion.div>
      ))}

      {/* Smoke/cloud particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`smoke-${i}`}
          initial={{ 
            y: '100vh',
            x: '50%',
            opacity: 0,
            scale: 0.5,
          }}
          animate={phase === 'ignition' || phase === 'lift' ? {
            y: '-30vh',
            x: `calc(50% + ${(i - 7) * 40}px)`,
            opacity: [0, 0.6, 0],
            scale: [0.5, 2, 3],
          } : {}}
          transition={{
            duration: prefersReducedMotion ? 0.5 : 2 + Math.random() * 0.5,
            delay: i * 0.08,
            ease: 'easeOut',
          }}
          className="absolute"
        >
          <div 
            className="w-16 h-16 rounded-full blur-xl"
            style={{
              background: 'rgba(156, 163, 175, 0.4)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}

