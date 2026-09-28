import { motion } from 'framer-motion'
import { Award, Briefcase, GraduationCap, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading.jsx'

const workHistory = [
  {
    period: '2022 - ปัจจุบัน',
    title: 'Marketplace Compliance Officer',
    company: 'บริษัท อีคอมเมิร์ซ โซลูชั่น จำกัด',
    description: 'ตรวจสอบและควบคุมมาตรฐานร้านค้าบนแพลตฟอร์ม Shopee, Lazada และ TikTok Shop ครอบคลุมกว่า 500 ร้านค้า',
  },
  {
    period: '2020 - 2022',
    title: 'E-commerce Quality Assurance',
    company: 'บริษัท ดิจิทัล เทรดดิ้ง จำกัด',
    description: 'ตรวจสอบคุณภาพสินค้าและบริการลูกค้า พัฒนาระบบ QA สำหรับทีมขายออนไลน์',
  },
  {
    period: '2019 - 2020',
    title: 'Customer Service Manager',
    company: 'บริษัท เซ็นเทอร์ เซอร์วิส จำกัด',
    description: 'บริหารทีมบริการลูกค้า แก้ไขปัญหาและลดอัตราการร้องเรียนของลูกค้า',
  },
]

const certifications = [
  {
    name: 'Certified E-commerce Professional (CEP)',
    issuer: 'Thailand E-Commerce Association',
    year: '2023',
  },
  {
    name: 'Marketplace Compliance Certification',
    issuer: 'Shopee University',
    year: '2022',
  },
  {
    name: 'Lazada Seller Certification',
    issuer: 'Lazada University',
    year: '2022',
  },
  {
    name: 'Digital Marketing & SEO',
    issuer: 'Google Digital Garage',
    year: '2021',
  },
]

const expertise = [
  'ตรวจสอบมาตรฐานร้านค้า Shopee, Lazada, TikTok Shop',
  'วิเคราะห์นโยบายและข้อกำหนดของแพลตฟอร์ม',
  'ตรวจสอบความปลอดภัยข้อมูลและธุรกรรม',
  'เตรียมเอกสารใบอนุญาตสำหรับร้านค้า',
  'ประเมินความเสี่ยงและแผนป้องกันปัญหา',
  'ฝึกอบรมทีมขายและเจ้าของร้านค้า',
  'ติดตามกฎระเบียบใหม่ๆ ของแพลตฟอร์ม',
  'แก้ไขปัญหาการระงับบัญชีร้านค้า',
]

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
            เกี่ยวกับ <span className="text-gold-500">ผม</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            เจ้าหน้าที่กำกับดูแลกฎระเบียบและความปลอดภัยบนแพลตฟอร์มตลาดออนไลน์
            ที่มุ่งมั่นช่วยให้ร้านค้าของคุณปลอดภัยและเติบโต
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function WorkHistorySection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ประวัติการทำงาน"
          highlight="Experience"
          subtitle="ประสบการณ์การทำงานที่สร้างความเชื่อถือ"
        />

        <div className="space-y-8">
          {workHistory.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-6"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-gold-500" size={24} />
                </div>
                {index < workHistory.length - 1 && (
                  <div className="w-0.5 h-full bg-gold-500/30 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <div className="text-sm text-gold-500 font-medium mb-1">
                  {work.period}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                  {work.title}
                </h3>
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {work.company}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ใบอนุญาต"
          highlight="Certifications"
          subtitle="คุณวุฒิและใบรับรองที่ได้รับ"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-gold-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gold-500 mt-1">
                    {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="py-20 bg-white dark:bg-dark-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="ความเชี่ยวชาญ"
          highlight="Expertise"
          subtitle="ทักษะและความเชี่ยวชาญที่ผมมี"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {expertise.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-dark-600"
            >
              <CheckCircle2 className="text-gold-500 flex-shrink-0 mt-0.5" size={20} />
              <span className="text-gray-700 dark:text-gray-300">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="การศึกษา"
          highlight="Education"
          subtitle="พื้นฐานการศึกษาที่แข็งแกร่ง"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-xl bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-500"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <GraduationCap className="text-gold-500" size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                ปริญญาตรี สาขาวิชาเทคโนโลยีสารสนเทศ
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ
              </p>
              <p className="text-sm text-gold-500 mt-1">
                2560 - 2564
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <>
      <PageHero />
      <WorkHistorySection />
      <CertificationsSection />
      <ExpertiseSection />
      <EducationSection />
    </>
  )
}
