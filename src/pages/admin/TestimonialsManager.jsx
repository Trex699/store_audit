import { useState } from 'react'
import { Plus, Edit2, Trash2, X, Star } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'

const emptyTestimonial = {
  clientName: '',
  reviewText: '',
  rating: 5,
  avatarUrl: '',
}

export default function TestimonialsManager() {
  const { testimonials, addTestimonial, updateTestimonial, deleteTestimonial } = useApp()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState(emptyTestimonial)

  const openModal = (testimonial = null) => {
    if (testimonial) {
      setEditingId(testimonial.id)
      setFormData(testimonial)
    } else {
      setEditingId(null)
      setFormData(emptyTestimonial)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingId(null)
    setFormData(emptyTestimonial)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingId) {
      updateTestimonial(editingId, formData)
    } else {
      addTestimonial(formData)
    }
    closeModal()
  }

  const handleDelete = (id) => {
    if (confirm('ต้องการลบรีวิวนี้?')) {
      deleteTestimonial(id)
    }
  }

  return (
    <div className="max-w-6xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">จัดการรีวิว</h2>
        <button
          onClick={() => openModal()}
          className="flex items-center gap-2 bg-gold-500 text-dark-700 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
        >
          <Plus size={20} />
          เพิ่มรีวิว
        </button>
      </div>

      {/* Testimonials List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-dark-700 rounded-xl p-6 border border-dark-500"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatarUrl}
                  alt={testimonial.clientName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white">{testimonial.clientName}</h3>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openModal(testimonial)}
                  className="p-2 text-gray-400 hover:text-gold-500 transition-colors"
                >
                  <Edit2 size={18} />
                </button>
                <button
                  onClick={() => handleDelete(testimonial.id)}
                  className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{testimonial.reviewText}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-dark-700 rounded-xl w-full max-w-lg border border-dark-500">
            <div className="flex items-center justify-between p-6 border-b border-dark-500">
              <h3 className="text-xl font-semibold text-white">
                {editingId ? 'แก้ไขรีวิว' : 'เพิ่มรีวิวใหม่'}
              </h3>
              <button onClick={closeModal} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">ชื่อลูกค้า</label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, clientName: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">ข้อความรีวิว</label>
                <textarea
                  value={formData.reviewText}
                  onChange={(e) => setFormData((prev) => ({ ...prev, reviewText: e.target.value }))}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">คะแนน</label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
                      className="p-1"
                    >
                      <Star
                        size={24}
                        className={star <= formData.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">URL รูปโปรไฟล์</label>
                <input
                  type="text"
                  value={formData.avatarUrl}
                  onChange={(e) => setFormData((prev) => ({ ...prev, avatarUrl: e.target.value }))}
                  className="w-full px-4 py-2 rounded-lg bg-dark-600 border border-dark-500 text-white focus:border-gold-500 outline-none"
                  placeholder="https://..."
                />
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
