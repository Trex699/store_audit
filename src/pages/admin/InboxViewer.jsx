import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MailOpen, Trash2, Clock, User, MessageSquare } from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'

export default function InboxViewer() {
  const { contactMessages, updateMessageStatus, deleteMessage } = useApp()
  const [selectedMessage, setSelectedMessage] = useState(null)

  const handleViewMessage = (message) => {
    setSelectedMessage(message)
    if (message.status === 'new') {
      updateMessageStatus(message.id, 'read')
    }
  }

  const handleDelete = (id) => {
    if (confirm('ต้องการลบข้อความนี้?')) {
      deleteMessage(id)
      if (selectedMessage?.id === id) {
        setSelectedMessage(null)
      }
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="max-w-6xl">
      <h2 className="text-2xl font-bold text-white mb-6">กล่องข้อความ</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <div className="lg:col-span-1 bg-dark-700 rounded-xl border border-dark-500 overflow-hidden">
          <div className="p-4 border-b border-dark-500">
            <h3 className="font-semibold text-white">ข้อความทั้งหมด ({contactMessages.length})</h3>
          </div>
          <div className="divide-y divide-dark-500 max-h-[600px] overflow-y-auto">
            {contactMessages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <Mail size={48} className="mx-auto mb-4 opacity-50" />
                <p>ไม่มีข้อความ</p>
              </div>
            ) : (
              contactMessages.map((message) => (
                <button
                  key={message.id}
                  onClick={() => handleViewMessage(message)}
                  className={`w-full text-left p-4 hover:bg-dark-600 transition-colors ${
                    selectedMessage?.id === message.id ? 'bg-dark-600' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        message.status === 'new' ? 'bg-gold-500' : 'bg-transparent'
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white truncate">
                          {message.senderName}
                        </span>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          {formatDate(message.createdAt)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">
                        {message.message}
                      </p>
                    </div>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-dark-700 rounded-xl border border-dark-500">
          {selectedMessage ? (
            <motion.div
              key={selectedMessage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-6"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {selectedMessage.senderName}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {selectedMessage.senderEmail}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {formatDate(selectedMessage.createdAt)}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateMessageStatus(selectedMessage.id, 'replied')}
                    className="px-3 py-1 text-sm bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors"
                  >
                    ตอบกลับแล้ว
                  </button>
                  <button
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>

              <div className="bg-dark-600 rounded-lg p-4">
                <div className="flex items-center gap-2 text-gold-500 mb-3">
                  <MessageSquare size={16} />
                  <span className="text-sm font-medium">ข้อความ</span>
                </div>
                <p className="text-gray-300 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <a
                  href={`mailto:${selectedMessage.senderEmail}`}
                  className="flex items-center gap-2 bg-gold-500 text-dark-700 px-4 py-2 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
                >
                  <MailOpen size={18} />
                  ตอบกลับทางอีเมล
                </a>
              </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-full min-h-[400px] text-gray-500">
              <div className="text-center">
                <Mail size={48} className="mx-auto mb-4 opacity-50" />
                <p>เลือกข้อความเพื่อดูรายละเอียด</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
