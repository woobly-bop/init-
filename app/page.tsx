'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import BootScreen from '@/components/BootScreen'
import MainSite from '@/components/MainSite'

export default function Home() {
  const [isBooted, setIsBooted] = useState(false)
  const [showMain, setShowMain] = useState(false)

  const handleBoot = () => {
    setIsBooted(true)
    // Delay showing main site to allow cinematic animation
    setTimeout(() => {
      setShowMain(true)
    }, 500) // Small delay for smooth transition
  }

  const handleSkip = () => {
    setIsBooted(true)
    setShowMain(true)
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {!showMain && (
        <BootScreen 
          isBooted={isBooted} 
          onBoot={handleBoot}
          onSkip={handleSkip}
        />
      )}
      {showMain && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <MainSite />
        </motion.div>
      )}
    </main>
  )
}

