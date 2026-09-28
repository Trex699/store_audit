import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
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
            คลัง<span className="text-gold-500">ความรู้</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            บทความเทคนิคการทำ Store Audit เพื่อให้คุณเข้าใจและป้องกันปัญหาเองได้
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ArticleCard({ article, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group rounded-xl overflow-hidden bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500 hover:border-gold-500/50 transition-all hover:shadow-lg"
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.coverImg}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <Calendar size={14} />
            <span>{article.createdAt}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {article.content.substring(0, 150)}...
        </p>
        <Link
          to={`/knowledge/${article.slug}`}
          className="inline-flex items-center gap-2 text-gold-500 font-medium text-sm hover:text-gold-400 transition-colors"
        >
          อ่านเพิ่มเติม
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  )
}

function ArticlesList() {
  const { articles } = useApp()
  const publishedArticles = articles.filter((a) => a.isPublished)

  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="บทความล่าสุด"
          highlight="Latest Articles"
          subtitle="ความรู้เทคนิคการทำ Store Audit อัปเดตล่าสุด"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedArticles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArticleDetail({ slug }) {
  const { articles } = useApp()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <section className="py-20 bg-white dark:bg-dark-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            ไม่พบบทความ
          </h2>
          <Link to="/knowledge" className="text-gold-500 hover:text-gold-400">
            กลับไปหน้าคลังความรู้
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-8">
            <Link
              to="/knowledge"
              className="inline-flex items-center gap-2 text-gold-500 text-sm mb-6 hover:text-gold-400 transition-colors"
            >
              <ArrowRight size={16} className="rotate-180" />
              กลับไปหน้าคลังความรู้
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar size={16} />
                {article.createdAt}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={16} />
                5 นาที
              </span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={article.coverImg}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                    {paragraph.replace('## ', '')}
                  </h2>
                )
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-3">
                    {paragraph.replace('### ', '')}
                  </h3>
                )
              }
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                    {paragraph.replace(/^\d+\.\s*/, '')}
                  </li>
                )
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 dark:text-gray-300 ml-4 mb-2">
                    {paragraph.replace('- ', '')}
                  </li>
                )
              }
              if (paragraph.trim() === '') return null
              return (
                <p key={index} className="text-gray-700 dark:text-gray-300 mb-4">
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-dark-500">
            <div className="flex items-center gap-2">
              <Tag size={16} className="text-gray-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Store Audit, Compliance, E-commerce
              </span>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            ต้องการความช่วยเหลือเฉพาะทาง?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            ปรึกษาผู้เชี่ยวชาญของเราเพื่อรับคำแนะนำที่ตรงประเด็นที่สุด
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold-500 text-dark-700 px-8 py-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
          >
            ติดต่อเรา
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function Knowledge({ slug }) {
  if (slug) {
    return <ArticleDetail slug={slug} />
  }

  return (
    <>
      <PageHero />
      <ArticlesList />
      <CTASection />
    </>
  )
}
