'use client'

import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <section id="resume" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            Resume
          </h2>
          
          {/* Resume Preview Card */}
          <div className="bg-background border-2 border-gray-200 rounded-xl p-8 mb-8 shadow-sm">
            <div className="space-y-4 text-left">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Deepkiran</h3>
                <p className="text-gray-600">Builder / Thinker / Engineer</p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="text-gray-700">
                  Download my resume to see my full experience, education, and projects.
                </p>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

