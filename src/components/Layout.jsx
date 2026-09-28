import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Shield } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const navLinks = [
  { path: '/', label: 'หน้าแรก' },
  { path: '/about', label: 'เกี่ยวกับ' },
  { path: '/services', label: 'บริการ' },
  { path: '/knowledge', label: 'คลังความรู้' },
  { path: '/contact', label: 'ติดต่อ' },
]

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { siteSettings } = useApp()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-white dark:bg-dark-700 transition-colors">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-dark-700/90 backdrop-blur-md border-b border-gray-200 dark:border-dark-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <Shield className="text-dark-700" size={24} />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {siteSettings.siteName}
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-gold-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 dark:text-gray-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-700 border-t border-gray-200 dark:border-dark-500">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-gold-500'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gold-500'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-dark-800 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Shield className="text-dark-700" size={24} />
                </div>
                <span className="text-xl font-bold text-white">
                  {siteSettings.siteName}
                </span>
              </div>
              <p className="text-sm">
                เจ้าหน้าที่กำกับดูแลกฎระเบียบและความปลอดภัยบนแพลตฟอร์มตลาดออนไลน์
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">ลิงก์ด่วน</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm hover:text-gold-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">ติดต่อ</h3>
              <div className="space-y-2 text-sm">
                <p>โทร: {siteSettings.contactPhone}</p>
                <p>อีเมล: {siteSettings.contactEmail}</p>
                <p>LINE: {siteSettings.lineId}</p>
                <p>เวลาทำการ: {siteSettings.workingHours}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-500 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}. สงวนลิขสิทธิ์</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
