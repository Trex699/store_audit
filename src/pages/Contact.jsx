import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
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
            ติดต่อ<span className="text-gold-500">เรา</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            พร้อมช่วยเหลือคุณ ติดต่อมาได้ทุกช่องทาง เราจะตอบกลับภายใน 24 ชั่วโมง
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ContactForm() {
  const { addContactMessage } = useApp()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('กรุณากรอกข้อมูลให้ครบถ้วน')
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    addContactMessage({
      senderName: formData.name,
      senderEmail: formData.email,
      message: formData.message,
    })

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-center"
      >
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
          ส่งข้อความสำเร็จ!
        </h3>
        <p className="text-green-600 dark:text-green-500 mb-6">
          ขอบคุณที่ติดต่อเรา เราจะตอบกลับภายใน 24 ชั่วโมง
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-gold-500 font-medium hover:text-gold-400 transition-colors"
        >
          ส่งข้อความอีกครั้ง
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 text-sm">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            ชื่อ-นามสกุล *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
            placeholder="กรุณากรอกชื่อ"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            อีเมล *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            เบอร์โทรศัพท์
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
            placeholder="081-234-5678"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            หัวข้อ
          </label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors"
          >
            <option value="">เลือกหัวข้อ</option>
            <option value="audit">ตรวจสอบร้านค้า</option>
            <option value="cyber">ตรวจสอบความปลอดภัย</option>
            <option value="consult">ปรึกษาทั่วไป</option>
            <option value="other">อื่นๆ</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          ข้อความ *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-600 border border-gray-200 dark:border-dark-500 text-gray-900 dark:text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-colors resize-none"
          placeholder="กรุณากรอกข้อความ..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gold-500 text-dark-700 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-dark-700 border-t-transparent rounded-full animate-spin" />
            กำลังส่ง...
          </>
        ) : (
          <>
            <Send size={20} />
            ส่งข้อความ
          </>
        )}
      </button>
    </form>
  )
}

function ContactInfo() {
  const { siteSettings } = useApp()

  const contactMethods = [
    {
      icon: Phone,
      title: 'โทรศัพท์',
      value: siteSettings.contactPhone,
      link: `tel:${siteSettings.contactPhone}`,
    },
    {
      icon: Mail,
      title: 'อีเมล',
      value: siteSettings.contactEmail,
      link: `mailto:${siteSettings.contactEmail}`,
    },
    {
      icon: MessageCircle,
      title: 'LINE OA',
      value: siteSettings.lineId,
      link: siteSettings.lineUrl,
    },
    {
      icon: Clock,
      title: 'เวลาทำการ',
      value: siteSettings.workingHours,
      link: null,
    },
  ]

  return (
    <div className="space-y-6">
      {contactMethods.map((method, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 dark:bg-dark-600"
        >
          <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
            <method.icon className="text-gold-500" size={24} />
          </div>
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white mb-1">
              {method.title}
            </h3>
            {method.link ? (
              <a
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                {method.value}
              </a>
            ) : (
              <p className="text-gray-600 dark:text-gray-400">{method.value}</p>
            )}
          </div>
        </motion.div>
      ))}

      {/* Social Links */}
      <div className="p-6 rounded-lg bg-gray-50 dark:bg-dark-600">
        <h3 className="font-medium text-gray-900 dark:text-white mb-4">
          ติดตามเรา
        </h3>
        <div className="flex gap-4">
          <a
            href={siteSettings.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 hover:bg-gold-500/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href={siteSettings.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center text-gold-500 hover:bg-gold-500/20 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Contact() {
  return (
    <>
      <PageHero />

      <section className="py-20 bg-white dark:bg-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="ส่งข้อความถึงเรา"
            highlight="Get in Touch"
            subtitle="เลือกช่องทางที่สะดวกสำหรับคุณ"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <ContactInfo />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
