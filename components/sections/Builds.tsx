'use client'

import { motion } from 'framer-motion'
import ProjectCard from '../ProjectCard'

// TODO: Replace with your actual projects
const projects = [
  {
    id: 1,
    name: 'Project One',
    description: 'A full-stack application that solves a real problem with elegant design and thoughtful engineering.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 2,
    name: 'Project Two',
    description: 'An AI-powered tool that helps users make better decisions through intelligent recommendations.',
    github: 'https://github.com',
  },
  {
    id: 3,
    name: 'Project Three',
    description: 'A system that processes data at scale while maintaining performance and reliability.',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 4,
    name: 'Project Four',
    description: 'A beautiful web application with modern UI/UX and smooth interactions.',
    github: 'https://github.com',
  },
]

export default function Builds() {
  return (
    <section id="builds" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900"
        >
          BUILDS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
