import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, highlight }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gold-500">{highlight}</span>{' '}
        <span className="text-gray-900 dark:text-white">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-gold-500 mx-auto mt-6 rounded-full" />
    </motion.div>
  )
}
