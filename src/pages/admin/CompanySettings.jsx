import { useState } from 'react'
import { Save, CheckCircle2, Plus, Trash2 } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'

export default function CompanySettings() {
  const { companyInfo, updateCompanyInfo, addLicense, updateLicense, deleteLicense } = useApp()
  const { t } = useLanguage()
  const [formData, setFormData] = useState(companyInfo)
  const [isSaving, setIsSaving] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleMapChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      map: { ...prev.map, [name]: parseFloat(value) },
    }))
  }

  const handleAddLicense = () => {
    addLicense({
      name: '',
      description: '',
      image: '',
    })
  }

  const handleUpdateLicense = (id, field, value) => {
    updateLicense(id, { [field]: value })
  }

  const handleDeleteLicense = (id) => {
    deleteLicense(id)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    updateCompanyInfo(formData)
    setIsSaving(false)
    setIsSaved(true)
    setTimeout(() => setIsSaved(false), 3000)
  }

  return (
    <div className="max-w-4xl">
      <h2 className="text-2xl font-bold text-white mb-6">{t('admin_company')}</h2>

      {isSaved && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 mb-6">
          <CheckCircle2 size={20} />
          {t('admin_saved')}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Company Info */}
        <div className="bg-dark-700 rounded-xl p-6 border border-dark-500">
          <h3 className="text-lg font-semibold text-white mb-4">{t('admin_basic_info')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_company_name')}</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_company_phone')}</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_company_email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_company_address_detail')}</label>
              <input
                type="text"
                name="addressDetail"
                value={formData.addressDetail}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-gray-400 mb-2">{t('admin_company_address')}</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none resize-none"
              />
            </div>
          </div>
        </div>

        {/* Licenses */}
        <div className="bg-dark-700 rounded-xl p-6 border border-dark-500">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">{t('admin_company_licenses')}</h3>
            <button
              type="button"
              onClick={handleAddLicense}
              className="flex items-center gap-2 px-3 py-2 bg-gold-500/10 text-gold-500 rounded-lg hover:bg-gold-500/20 transition-colors"
            >
              <Plus size={16} />
              {t('admin_add_license')}
            </button>
          </div>
          <div className="space-y-4">
            {formData.licenses.map((license) => (
              <div key={license.id} className="p-4 bg-dark-600 rounded-lg border border-dark-500">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm text-gray-400">#{license.id}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteLicense(license.id)}
                    className="p-1 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">{t('admin_license_name')}</label>
                    <input
                      type="text"
                      value={license.name}
                      onChange={(e) => handleUpdateLicense(license.id, 'name', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-500 text-white text-sm focus:border-gold-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">{t('admin_license_image')}</label>
                    <input
                      type="text"
                      value={license.image}
                      onChange={(e) => handleUpdateLicense(license.id, 'image', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-500 text-white text-sm focus:border-gold-500 outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs text-gray-400 mb-1">{t('admin_license_description')}</label>
                    <input
                      type="text"
                      value={license.description}
                      onChange={(e) => handleUpdateLicense(license.id, 'description', e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-dark-700 border border-dark-500 text-white text-sm focus:border-gold-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Settings */}
        <div className="bg-dark-700 rounded-xl p-6 border border-dark-500">
          <h3 className="text-lg font-semibold text-white mb-4">{t('company_map')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_map_lat')}</label>
              <input
                type="number"
                step="0.0001"
                name="lat"
                value={formData.map.lat}
                onChange={handleMapChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_map_lng')}</label>
              <input
                type="number"
                step="0.0001"
                name="lng"
                value={formData.map.lng}
                onChange={handleMapChange}
                className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">{t('admin_map_zoom')}</label>
              <input
                type="number"
                name="zoom"
                value={formData.map.zoom}
                onChange={handleMapChange}
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
              {t('admin_saving')}
            </>
          ) : (
            <>
              <Save size={20} />
              {t('admin_save')}
            </>
          )}
        </button>
      </form>
    </div>
  )
}
