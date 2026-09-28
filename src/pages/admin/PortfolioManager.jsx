import { useState } from 'react'
import { Plus, Edit2, Trash2, X, Eye, EyeOff } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'

const emptyProject = {
  title: '',
  category: '',
  beforeImg: '',
  afterImg: '',
  description: '',
  isPublished: true,
}

export default function PortfolioManager() {
  const { portfolioProjects, addPortfolio, updatePortfolio, deletePortfolio } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyProject)

  const openModal = (project = null) => {
    if (project) {
      setEditingId(project.id)
      setFormData(project)
    } else {
      setEditingId(null)
      setFormData(emptyProject)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingId(null)
    setFormData(emptyProject)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      updatePortfolio(editingId, formData)
    } else {
      addPortfolio(formData)
    }
    closeModal()
  }

  const handleDelete = (id) => {
    if (confirm('ต้องการลบผลงานนี้?')) {
      deletePortfolio(id)
    }
  }

  const togglePublish = (id, currentStatus) => {
    updatePortfolio(id, { isPublished: !currentStatus })
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">จัดการผลงาน</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-gold-500 text-dark-700 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
        >
          <Plus size={20} />
          เพิ่มผลงาน
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="bg-dark-700 rounded-xl border border-dark-500 overflow-hidden"
          >
            <div className="relative h-40">
              <img
                src={project.afterImg}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <button
                  onClick={() => togglePublish(project.id, project.isPublished)}
                  className={`p-2 rounded-lg ${
                    project.isPublished
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}
                >
                  {project.isPublished ? <Eye size={16} /> : <EyeOff size={16} />}
                </button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-white">{project.title}</h3>
                  <span className="text-xs text-gold-500">{project.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openModal(project)}
                    className="p-2 text-gray-400 hover:text-gold-500 transition-colors"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
              <p className="text-gray-400 text-sm line-clamp-2">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-dark-700 rounded-xl w-full max-w-lg max-h-[90vh] overflow-y-auto border border-dark-500">
            <div className="flex items-center justify-between p-6 border-b border-dark-500">
              <h3 className="text-xl font-semibold text-white">
                {editingId ? 'แก้ไขผลงาน' : 'เพิ่มผลงานใหม่'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">ชื่อผลงาน</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">หมวดหมู่</label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData((prev) => ({ ...prev, category: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">URL ภาพ Before</label>
                <input
                  type="text"
                  value={formData.beforeImg}
                  onChange={(e) => setFormData((prev) => ({ ...prev, beforeImg: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">URL ภาพ After</label>
                <input
                  type="text"
                  value={formData.afterImg}
                  onChange={(e) => setFormData((prev) => ({ ...prev, afterImg: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">รายละเอียด</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none resize-none"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData((prev) => ({ ...prev, isPublished: e.target.checked }))}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="isPublished" className="text-gray-400">เผยแพร่ทันที</label>
              </div>

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="bg-gold-500 text-dark-700 px-6 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
                >
                  {editingId ? 'บันทึก' : 'เพิ่ม'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
