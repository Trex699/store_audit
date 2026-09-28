import { useState } from 'react'
import { Save, CheckCircle2 } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'

export default function SiteSettings() {
  const { siteSettings, updateSiteSettings } = useApp()
  const [formData, setFormData] = useState(siteSettings)
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    updateSiteSettings(formData)
    setIsSaving(false)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-white mb-6">ตั้งค่าเว็บไซต์</h2>

      {isSaved && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 mb-6">
          <CheckCircle2 size={20} />
          บันทึกการตั้งค่าเรียบร้อยแล้ว
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info */}
        <div className="bg-dark-700 rounded-xl p-6 border border-dark-500">
          <h3 className="text-lg font-semibold text-white mb-4">ข้อมูลพื้นฐาน</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">ชื่อเว็บไซต์</label>
              <input
                type="text"
                name="siteName"
                value={formData.siteName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">ชื่อใน Hero Section</label>
              <input
                type="text"
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">คำโปรยใต้ Hero</label>
              <input
                type="text"
                name="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">รายละเอียด Hero</label>
              <textarea
                name="heroDescription"
                value={formData.heroDescription}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-dark-700 rounded-xl p-6 border border-dark-500">
          <h3 className="text-lg font-semibold text-white mb-4">ข้อมูลติดต่อ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">เบอร์โทรศัพท์</label>
              <input
                type="text"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">อีเมล</label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">LINE ID</label>
              <input
                type="text"
                name="lineId"
                value={formData.lineId}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">LINE URL</label>
              <input
                type="text"
                name="lineUrl"
                value={formData.lineUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Facebook URL</label>
              <input
                type="text"
                name="facebookUrl"
                value={formData.facebookUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">TikTok URL</label>
              <input
                type="text"
                name="tiktokUrl"
                value={formData.tiktokUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">เวลาทำการ</label>
              <input
                type="text"
                name="workingHours"
                value={formData.workingHours}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center gap-2 bg-gold-500 text-dark-700 px-6 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors disabled:opacity-50"
        >
          {isSaving ? (
            <>
              <div className="w-5 h-5 border-2 border-dark-700 border-t-transparent rounded-full animate-spin" />
              กำลังบันทึก...
            </>
          ) : (
            <>
              <Save size={20} />
              บันทึกการตั้งค่า
            </>
          )}
        </button>
      </form>
    </div>
  )
}
