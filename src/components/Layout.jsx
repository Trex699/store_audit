import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Globe } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const navLinks = [
  { path: '/', key: 'nav_home' },
  { path: '/about', key: 'nav_about' },
  { path: '/services', key: 'nav_services' },
  { path: '/knowledge', key: 'nav_knowledge' },
  { path: '/contact', key: 'nav_contact' },
  { path: '/company', key: 'nav_company' },
]

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { siteSettings } = useApp()
  const { t, lang, toggleLang } = useLanguage()
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
                  {t(link.key)}
                </Link>
              ))}
              <LanguageToggle />
              <ThemeToggle />
              <ProfileImage />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <LanguageToggle />
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
                  {t(link.key)}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200 dark:border-dark-500">
                <ProfileImage />
              </div>
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
                {t('about_subtitle')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer_quick_links')}</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm hover:text-gold-500 transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer_contact')}</h3>
              <div className="space-y-2 text-sm">
                <p>{t('footer_phone')}: {siteSettings.contactPhone}</p>
                <p>{t('footer_email')}: {siteSettings.contactEmail}</p>
                <p>{t('footer_line')}: {siteSettings.lineId}</p>
                <p>{t('footer_hours')}: {siteSettings.workingHours}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-dark-500 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} {siteSettings.siteName}. {t('footer_rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LanguageToggle() {
  const { t, lang, toggleLang } = useLanguage()

  return (
    <button
      onClick={toggleLang}
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gold-500/10 text-gold-500 hover:bg-gold-500/20 transition-colors text-sm font-medium"
      aria-label="Switch language"
    >
      <Globe size={16} />
      {lang === 'th' ? t('lang_en') : t('lang_th')}
    </button>
  )
}

function ProfileImage() {
  const { siteSettings } = useApp()
  const profileImage = siteSettings.profileImage

  if (!profileImage) {
    return null
  }

  return (
    <img
      src={profileImage}
      alt="Profile"
      className="w-8 h-8 rounded-full object-cover border-2 border-gold-500/30"
    />
  )
}
