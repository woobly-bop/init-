'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 pt-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Hi, I'm Deepkiran 👋
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-medium">
              I build thoughtful software & interactive experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Computer Science student who enjoys breaking systems just to rebuild them better.
              I focus on AI, Full Stack development, and system thinking.
            </p>
            <p className="text-base text-gray-600 italic">
              Good software feels invisible. Great software feels inevitable.
            </p>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Placeholder for profile photo - replace with actual image */}
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary shadow-2xl flex items-center justify-center text-white text-4xl font-bold">
                DK
              </div>
              {/* TODO: Replace with actual profile photo
              <Image
                src="/profile.jpg"
                alt="Deepkiran"
                fill
                className="rounded-full object-cover shadow-2xl"
              />
              */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

