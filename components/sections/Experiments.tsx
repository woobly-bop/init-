'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../ProjectCard'

// TODO: Replace with your actual experiments
const experiments = [
  {
    id: 1,
    name: 'Experiment One',
    description: 'A small exploration into UI patterns and interactions.',
    github: 'https://github.com',
  },
  {
    id: 2,
    name: 'Experiment Two',
    description: 'Testing new frameworks and tools for rapid prototyping.',
    demo: 'https://example.com',
  },
  {
    id: 3,
    name: 'Experiment Three',
    description: 'A fun side project exploring creative coding techniques.',
    github: 'https://github.com',
  },
  {
    id: 4,
    name: 'Experiment Four',
    description: 'Mini project testing a new design system approach.',
  },
]

export default function Experiments() {
  return (
    <section id="experiments" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          EXPERIMENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={experiment} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
