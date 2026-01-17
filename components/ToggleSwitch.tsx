'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface ToggleSwitchProps {
  isOn: boolean
  onClick: () => void
  disabled?: boolean
}

export default function ToggleSwitch({ isOn, onClick, disabled }: ToggleSwitchProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [justClicked, setJustClicked] = useState(false)

  const handleClick = () => {
    if (!disabled && !isOn) {
      setJustClicked(true)
      // Trigger vibration if supported
      if (navigator.vibrate) {
        navigator.vibrate(50)
      }
      onClick()
      setTimeout(() => setJustClicked(false), 300)
    }
  }

  return (
    <div className="relative">
      {/* Premium glow effect - intensifies on hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.8 : 0.4,
          scale: isHovered ? 1.15 : 1,
          blur: isHovered ? 40 : 30,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(251, 191, 36, 0.6) 0%, rgba(99, 102, 241, 0.3) 50%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />

      {/* Pulse glow on click */}
      {justClicked && (
        <motion.div
          initial={{ opacity: 0, scale: 1 }}
          animate={{ 
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1.8],
          }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      )}

      {/* Premium glassy/neumorphic switch container */}
      <motion.button
        onClick={handleClick}
        disabled={disabled}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={justClicked ? {
          scale: [1, 1.05, 1],
        } : {}}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="relative w-28 h-14 rounded-full
                   focus:outline-none focus:ring-2 focus:ring-ignition focus:ring-offset-4 
                   focus:ring-offset-space disabled:opacity-50 disabled:cursor-not-allowed
                   backdrop-blur-sm"
        style={{
          background: isOn 
            ? 'linear-gradient(145deg, rgba(251, 191, 36, 0.2), rgba(251, 191, 36, 0.1))'
            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          border: '2px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isOn
            ? '0 8px 32px rgba(251, 191, 36, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)'
            : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.1)',
        }}
        aria-label="Activate system"
      >
        {/* Switch toggle - premium design */}
        <motion.div
          animate={{
            x: isOn ? 56 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="absolute top-1 left-1 w-12 h-12 rounded-full
                     flex items-center justify-center shadow-lg"
          style={{
            background: isOn
              ? 'linear-gradient(145deg, #fbbf24, #f59e0b)'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
            boxShadow: isOn
              ? '0 4px 16px rgba(251, 191, 36, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.3)'
              : '0 4px 16px rgba(0, 0, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Inner glow when on */}
          {isOn && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, transparent 70%)',
              }}
            />
          )}
          
          {/* Center dot */}
          <div 
            className="w-3 h-3 rounded-full"
            style={{
              background: isOn 
                ? 'rgba(255, 255, 255, 0.9)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
          />
        </motion.div>
      </motion.button>
    </div>
  )
}
