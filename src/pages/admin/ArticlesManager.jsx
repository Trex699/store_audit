import { useState } from 'react'
import { Plus, Edit2, Trash2, Eye, EyeOff, X } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'

const emptyArticle = {
  title: '',
  slug: '',
  content: '',
  coverImg: '',
  isPublished: false,
}

export default function ArticlesManager() {
  const { articles, addArticle, updateArticle, deleteArticle } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyArticle)

  const openModal = (article = null) => {
    if (article) {
      setEditingId(article.id)
      setFormData(article)
    } else {
      setEditingId(null)
      setFormData(emptyArticle)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingId(null)
    setFormData(emptyArticle)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      updateArticle(editingId, formData)
    } else {
      addArticle(formData)
    }
    closeModal()
  }

  const handleDelete = (id) => {
    if (confirm('ต้องการลบบทความนี้?')) {
      deleteArticle(id)
    }
  }

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9ก-๙]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">จัดการบทความ</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-gold-500 text-dark-700 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
        >
          <Plus size={20} />
          เพิ่มบทความ
        </button>
      </div>

      {/* Articles List */}
      <div className="bg-dark-700 rounded-xl border border-dark-500 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dark-500">
                <th className="text-left p-4 text-gray-400 font-medium">ชื่อบทความ</th>
                <th className="text-left p-4 text-gray-400 font-medium">Slug</th>
                <th className="text-left p-4 text-gray-400 font-medium">สถานะ</th>
                <th className="text-left p-4 text-gray-400 font-medium">วันที่</th>
                <th className="text-right p-4 text-gray-400 font-medium">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article.id} className="border-b border-dark-500/50 hover:bg-dark-600/50">
                  <td className="p-4 text-white">{article.title}</td>
                  <td className="p-4 text-gray-400 text-sm">{article.slug}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        article.isPublished
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}
                    >
                      {article.isPublished ? 'เผยแพร่' : 'ฉบับร่าง'}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400 text-sm">{article.createdAt}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => openModal(article)}
                        className="p-2 text-gray-400 hover:text-gold-500 transition-colors"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-dark-700 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-dark-500">
            <div className="flex items-center justify-between p-6 border-b border-dark-500">
              <h3 className="text-xl font-semibold text-white">
                {editingId ? 'แก้ไขบทความ' : 'เพิ่มบทความใหม่'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">ชื่อบทความ</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => {
                    const title = e.target.value
                    setFormData((prev) => ({
                      ...prev,
                      title,
                      slug: generateSlug(title),
                    }))
                  }}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Slug</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">URL รูปภาพปก</label>
                <input
                  type="text"
                  value={formData.coverImg}
                  onChange={(e) => setFormData((prev) => ({ ...prev, coverImg: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">เนื้อหา</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                  rows={10}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none resize-none"
                  required
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
