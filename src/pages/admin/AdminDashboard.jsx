import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield,
  Settings,
  FileText,
  MessageSquare,
  Image,
  Inbox,
  LogOut,
  Eye,
  Menu,
  X,
  Building2,
} from 'lucide-react'
import { useApp } from '../../context/AppContext.jsx'
import { useLanguage } from '../../context/LanguageContext.jsx'
import SiteSettings from './SiteSettings.jsx'
import ArticlesManager from './ArticlesManager.jsx'
import TestimonialsManager from './TestimonialsManager.jsx'
import PortfolioManager from './PortfolioManager.jsx'
import InboxViewer from './InboxViewer.jsx'
import CompanySettings from './CompanySettings.jsx'

const menuItems = [
  { id: 'settings', label: 'ตั้งค่าเว็บไซต์', icon: Settings },
  { id: 'articles', label: 'จัดการบทความ', icon: FileText },
  { id: 'testimonials', label: 'จัดการรีวิว', icon: MessageSquare },
  { id: 'portfolio', label: 'จัดการผลงาน', icon: Image },
  { id: 'company', label: 'ข้อมูลบริษัท', icon: Building2 },
  { id: 'inbox', label: 'กล่องข้อความ', icon: Inbox },
]

export default function AdminDashboard() {
  const { isAuthenticated, logout, contactMessages } = useApp()
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState('settings')
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navigate = useNavigate()

  const unreadCount = contactMessages.filter((m) => m.status === 'new').length

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin-login')
    }
  }, [isAuthenticated, navigate])

  const handleLogout = () => {
    logout()
    navigate('/admin-login')
  }

  if (!isAuthenticated) {
    return null
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'settings':
        return <SiteSettings />
      case 'articles':
        return <ArticlesManager />
      case 'testimonials':
        return <TestimonialsManager />
      case 'portfolio':
        return <PortfolioManager />
      case 'company':
        return <CompanySettings />
      case 'inbox':
        return <InboxViewer />
      default:
        return <SiteSettings />
    }
  }

  return (
    <div className="min-h-screen bg-dark-800">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-700 border-b border-dark-500">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gold-500 rounded-lg flex items-center justify-center">
                <Shield className="text-dark-700" size={18} />
              </div>
              <span className="text-white font-semibold">{t('admin_dashboard')}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors"
            >
              <Eye size={18} />
              <span className="hidden sm:inline">{t('admin_view_site')}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-red-400 transition-colors"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">{t('admin_logout')}</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-dark-700 border-r border-dark-500 transform transition-transform duration-300 pt-16 lg:pt-0 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id)
                  setIsSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-gold-500/10 text-gold-500'
                    : 'text-gray-400 hover:text-white hover:bg-dark-600'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
                {item.id === 'inbox' && unreadCount > 0 && (
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8 min-h-screen">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </main>
      </div>
    </div>
  )
}
