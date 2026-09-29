import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Award, Building2 } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Company() {
  const { companyInfo } = useApp()
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-dark-700">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-700 to-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold-500/10 border border-gold-500/30 rounded-full px-4 py-2 mb-8">
              <Building2 className="text-gold-500" size={20} />
              <span className="text-gold-500 text-sm font-medium">
                {t('company_highlight')}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('company_title')}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('company_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Address & Contact */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title={t('company_address')}
                highlight={t('company_highlight')}
                subtitle={t('company_address_detail')}
              />

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {companyInfo.companyName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('footer_phone')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gold-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {t('footer_email')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {companyInfo.email}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Licenses */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                title={t('company_licenses')}
                highlight={t('company_highlight')}
                subtitle={t('company_licenses_subtitle')}
              />

              <div className="space-y-4">
                {companyInfo.licenses.map((license, index) => (
                  <motion.div
                    key={license.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500"
                  >
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {license.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {license.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50 dark:bg-dark-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t('company_map')}
            highlight={t('company_highlight')}
            subtitle={t('company_map_subtitle')}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden border border-gray-200 dark:border-dark-500"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.0!2d${companyInfo.map.lng}!3d${companyInfo.map.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQzJzI0LjIiTiAxMDDCsDM0JzA0LjAiRQ!5e0!3m2!1sth!2sth!4v1234567890`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}
