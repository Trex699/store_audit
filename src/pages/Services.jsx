import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Eye } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { services } from '../data/sampleData.js'
import SectionHeading from '../components/SectionHeading.jsx'

function PageHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            บริการ & <span className="text-gold-500">ผลงาน</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            แพ็กเกจบริการตรวจสอบที่ตอบโจทย์ทุกความต้องการ พร้อมผลงานจริงที่พิสูจน์คุณภาพ
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="แพ็กเกจบริการ"
          highlight="Services"
          subtitle="เลือกแพ็กเกจที่เหมาะกับความต้องการของคุณ"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 hover:border-gold-500/50 transition-all hover:shadow-lg"
            >
              {index === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold-500 text-dark-700 text-xs font-bold px-4 py-1 rounded-full">
                  แนะนำ
                </div>
              )}

              <div className="text-4xl font-bold text-gold-500 mb-2">
                {service.price}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="text-gold-500 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="block text-center bg-gold-500 text-dark-700 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                เลือกแพ็กเกจนี้
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  const { portfolioProjects } = useApp()
  const [selectedProject, setSelectedProject] = useState(null)

  const publishedProjects = portfolioProjects.filter((p) => p.isPublished)

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ผลงานที่ภูมิใจ"
          highlight="Case Studies"
          subtitle="ตัวอย่างผลงานการปรับปรุงร้านค้า (เซ็นเซอร์ชื่อแบรนด์เพื่อความเป็นส่วนตัว)"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {publishedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl overflow-hidden bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500"
            >
              {/* Before/After Images */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.beforeImg}
                  alt={`Before - ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={project.afterImg}
                  alt={`After - ${project.title}`}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="absolute top-4 left-4 bg-gold-500 text-dark-700 text-xs font-bold px-3 py-1 rounded-full">
                  {project.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-dark-700/80 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                  <Eye size={14} />
                  Hover เพื่อดู Before/After
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gold-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-700 mb-4">
            พร้อมเริ่มต้นแล้วหรือยัง?
          </h2>
          <p className="text-dark-600 mb-8 max-w-2xl mx-auto">
            ติดต่อมาปรึกษาฟรี เราจะช่วยให้ร้านค้าของคุณผ่านเกณฑ์ตรวจสอบและปลอดภัยจากปัญหา
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-dark-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-dark-600 transition-colors"
          >
            ติดต่อเราเลย
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function Services() {
  return (
    <>
      <PageHero />
      <ServicesSection />
      <PortfolioSection />
      <CTASection />
    </>
  )
}
