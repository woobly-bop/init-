'use client'

import { motion } from 'framer-motion'

const aboutCards = [
  {
    title: 'Who I am',
    content: 'A Computer Science student passionate about building systems that matter. I enjoy the process of breaking things down to understand them, then rebuilding them better.',
  },
  {
    title: 'What I do',
    content: 'I build full-stack applications, work with AI/ML systems, and think deeply about architecture and design. I focus on creating solutions that are both elegant and practical.',
  },
  {
    title: 'What I care about',
    content: 'I care about writing clean, maintainable code. I believe in the power of good design and thoughtful engineering. Most importantly, I care about building things that solve real problems.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          About
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

