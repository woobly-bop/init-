'use client'

import { motion } from 'framer-motion'
import Navbar from './Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Builds from './sections/Builds'
import Experiments from './sections/Experiments'
import Skills from './sections/Skills'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

export default function MainSite() {
  return (
    <div className="relative min-h-screen bg-background">
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        <Hero />
        <About />
        <Builds />
        <Experiments />
        <Skills />
        <Resume />
        <Contact />
      </motion.div>
    </div>
  )
}
