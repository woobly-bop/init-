'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import ToggleSwitch from './ToggleSwitch'
import EntryAnimation from './EntryAnimation'
import SpaceBackground from './SpaceBackground'

interface BootScreenProps {
  isBooted: boolean
  onBoot: () => void
  onSkip?: () => void
}

export default function BootScreen({ isBooted, onBoot, onSkip }: BootScreenProps) {
  const prefersReducedMotion = useReducedMotion()
  const [showIgnition, setShowIgnition] = useState(false)
  const [screenLift, setScreenLift] = useState(false)

  const handleSwitchClick = () => {
    if (!isBooted) {
      setShowIgnition(true)
      // Start screen lift after brief delay
      setTimeout(() => {
        setScreenLift(true)
      }, prefersReducedMotion ? 100 : 300)
      // Trigger boot after animation
      setTimeout(() => {
        onBoot()
      }, prefersReducedMotion ? 500 : 2500)
    }
  }

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      animate={screenLift ? {
        y: '-100vh',
        opacity: [1, 1, 0],
      } : {}}
      transition={{
        duration: prefersReducedMotion ? 0.5 : 2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {/* Space background with ambient motion */}
      <SpaceBackground />

      {/* Skip intro button */}
      {onSkip && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={onSkip}
          className="absolute top-6 right-6 z-50 px-4 py-2 text-sm text-white/60 
                     hover:text-white transition-colors duration-200
                     backdrop-blur-sm bg-white/5 rounded-lg border border-white/10
                     hover:border-white/20"
        >
          Skip Intro
        </motion.button>
      )}

      {/* Entry animation effects */}
      <EntryAnimation 
        isActive={showIgnition} 
        onComplete={() => {}} 
      />

      {/* Main content - toggle switch */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ 
          opacity: showIgnition ? 0 : 1,
          scale: showIgnition ? 1.1 : 1,
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.3 : 0.5,
          ease: 'easeOut',
        }}
        className="flex flex-col items-center justify-center relative z-10"
      >
        <ToggleSwitch 
          isOn={isBooted || showIgnition} 
          onClick={handleSwitchClick}
          disabled={isBooted || showIgnition}
        />
      </motion.div>

      {/* Screen bloom/overexposure effect on ignition */}
      {showIgnition && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.1, 0],
          }}
          transition={{ 
            duration: 0.8,
            times: [0, 0.2, 0.5, 1],
          }}
          className="absolute inset-0 bg-white pointer-events-none"
        />
      )}
    </motion.div>
  )
}
