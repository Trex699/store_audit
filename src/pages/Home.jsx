import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Store,
  ClipboardCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Phone,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { stats, skills, services, auditChecklist } from '../data/sampleData.js'
import SectionHeading from '../components/SectionHeading.jsx'

const iconMap = {
  store: Store,
  shield: Shield,
  clipboard: ClipboardCheck,
  alert: AlertTriangle,
}

function HeroSection() {
  const { siteSettings } = useApp()
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-8">
            <Shield className="text-gold-500" size={20} />
            <span className="text-gold-500 text-sm font-medium">
              {siteSettings.heroSubtitle}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {siteSettings.heroTitle}
            <br />
            <span className="text-gold-500">QA Store Audit</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            {siteSettings.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 text-dark-700 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
            >
              {t('hero_cta')}
              <ArrowRight size={20} />
            </Link>
            <a
              href={`tel:${siteSettings.contactPhone}`}
              className="inline-flex items-center gap-2 border border-gold-500 text-gold-500 px-8 py-4 rounded-lg font-semibold hover:bg-gold-500/10 transition-colors"
            >
              <Phone size={20} />
              {siteSettings.contactPhone}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gold-500 rounded-full" />
        </div>
      </div>
    </section>
  )
}

function StatsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gold-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-dark-700 mb-2">
                {stat.value}
              </div>
              <div className="text-dark-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('skills_title')}
          highlight={t('skills_highlight')}
          subtitle={t('skills_subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                  <Icon className="text-gold-500" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('services_title')}
          highlight={t('services_highlight')}
          subtitle={t('services_subtitle')}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-8 border border-gray-200 dark:border-dark-500 hover:border-gold-500/50 transition-colors"
            >
              <div className="text-3xl font-bold text-gold-500 mb-2">
                {service.price}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle2 className="text-gold-500 flex-shrink-0" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gold-500 font-semibold hover:text-gold-400 transition-colors"
          >
            {t('services_view_more')}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function AuditChecklistSection() {
  const [answers, setAnswers] = useState({})
  const [showResult, setShowResult] = useState(false)
  const { t } = useLanguage()

  const handleChange = (id) => {
    setAnswers((prev) => ({ ...prev, [id]: !prev[id] }))
    setShowResult(false)
  }

  const score = Object.values(answers).filter(Boolean).length
  const percentage = Math.round((score / auditChecklist.length) * 100)

  const getResultColor = () => {
    if (percentage >= 80) return 'text-green-500'
    if (percentage >= 50) return 'text-gold-500'
    return 'text-red-500'
  }

  const getResultText = () => {
    if (percentage >= 80) return t('audit_excellent')
    if (percentage >= 50) return t('audit_good')
    return t('audit_risk')
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t('audit_title')}
          highlight={t('audit_highlight')}
          subtitle={t('audit_subtitle')}
        />

        <div className="space-y-4">
          {auditChecklist.map((item) => (
            <label
              key={item.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 cursor-pointer hover:border-gold-500/50 transition-colors"
            >
              <input
                type="checkbox"
                checked={answers[item.id] || false}
                onChange={() => handleChange(item.id)}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-gold-500 focus:ring-gold-500"
              />
              <div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {item.question}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.category}
                </div>
              </div>
            </label>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => setShowResult(true)}
            className="bg-gold-500 text-dark-700 px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            {t('audit_view_result')}
          </button>
        </div>

        {showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-center"
          >
            <div className={`text-5xl font-bold mb-4 ${getResultColor()}`}>
              {percentage}%
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {getResultText()}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {t('audit_score', { score, total: auditChecklist.length })}
            </p>
            {percentage < 80 && (
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 mt-4 text-gold-500 font-semibold hover:text-gold-400 transition-colors"
              >
                {t('audit_consult')}
                <ArrowRight size={16} />
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SkillsSection />
      <ServicesPreview />
      <AuditChecklistSection />
    </>
  )
}
