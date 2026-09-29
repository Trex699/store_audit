import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import {
  siteSettings as defaultSiteSettings,
  portfolioProjects as defaultPortfolio,
  articles as defaultArticles,
  testimonials as defaultTestimonials,
  contactMessages as defaultMessages,
  companyInfo as defaultCompanyInfo,
  adminCredentials,
} from '../data/sampleData.js'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [theme, setTheme] = useLocalStorage('qa-theme', 'dark')
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('qa-auth', false)
  const [siteSettings, setSiteSettings] = useLocalStorage('qa-settings', defaultSiteSettings)
  const [portfolioProjects, setPortfolioProjects] = useLocalStorage('qa-portfolio', defaultPortfolio)
  const [articles, setArticles] = useLocalStorage('qa-articles', defaultArticles)
  const [testimonials, setTestimonials] = useLocalStorage('qa-testimonials', defaultTestimonials)
  const [contactMessages, setContactMessages] = useLocalStorage('qa-messages', defaultMessages)
  const [companyInfo, setCompanyInfo] = useLocalStorage('qa-company', defaultCompanyInfo)

  // Theme - sync to DOM
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  // Theme
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  // Auth
  const login = useCallback(
    (email, password) => {
      if (email === adminCredentials.email && password === adminCredentials.password) {
        setIsAuthenticated(true)
        return { success: true }
      }
      return { success: false, error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' }
    },
    [setIsAuthenticated]
  )

  const logout = useCallback(() => {
    setIsAuthenticated(false)
  }, [setIsAuthenticated])

  // Site Settings
  const updateSiteSettings = useCallback(
    (newSettings) => {
      setSiteSettings((prev) => ({ ...prev, ...newSettings }))
    },
    [setSiteSettings]
  )

  // Portfolio CRUD
  const addPortfolio = useCallback(
    (project) => {
      const newProject = { ...project, id: Date.now() }
      setPortfolioProjects((prev) => [...prev, newProject])
    },
    [setPortfolioProjects]
  )

  const updatePortfolio = useCallback(
    (id, updates) => {
      setPortfolioProjects((prev) =>
        prev.map((p) => (p.id === id ? { ...p, ...updates } : p))
      )
    },
    [setPortfolioProjects]
  )

  const deletePortfolio = useCallback(
    (id) => {
      setPortfolioProjects((prev) => prev.filter((p) => p.id !== id))
    },
    [setPortfolioProjects]
  )

  // Articles CRUD
  const addArticle = useCallback(
    (article) => {
      const newArticle = { ...article, id: Date.now(), createdAt: new Date().toISOString().split('T')[0] }
      setArticles((prev) => [...prev, newArticle])
    },
    [setArticles]
  )

  const updateArticle = useCallback(
    (id, updates) => {
      setArticles((prev) =>
        prev.map((a) => (a.id === id ? { ...a, ...updates } : a))
      )
    },
    [setArticles]
  )

  const deleteArticle = useCallback(
    (id) => {
      setArticles((prev) => prev.filter((a) => a.id !== id))
    },
    [setArticles]
  )

  // Testimonials CRUD
  const addTestimonial = useCallback(
    (testimonial) => {
      const newTestimonial = { ...testimonial, id: Date.now() }
      setTestimonials((prev) => [...prev, newTestimonial])
    },
    [setTestimonials]
  )

  const updateTestimonial = useCallback(
    (id, updates) => {
      setTestimonials((prev) =>
        prev.map((t) => (t.id === id ? { ...t, ...updates } : t))
      )
    },
    [setTestimonials]
  )

  const deleteTestimonial = useCallback(
    (id) => {
      setTestimonials((prev) => prev.filter((t) => t.id !== id))
    },
    [setTestimonials]
  )

  // Contact Messages
  const addContactMessage = useCallback(
    (message) => {
      const newMessage = {
        ...message,
        id: Date.now(),
        status: 'new',
        createdAt: new Date().toISOString(),
      }
      setContactMessages((prev) => [newMessage, ...prev])
    },
    [setContactMessages]
  )

  const updateMessageStatus = useCallback(
    (id, status) => {
      setContactMessages((prev) =>
        prev.map((m) => (m.id === id ? { ...m, status } : m))
      )
    },
    [setContactMessages]
  )

  const deleteMessage = useCallback(
    (id) => {
      setContactMessages((prev) => prev.filter((m) => m.id !== id))
    },
    [setContactMessages]
  )

  // Company Info CRUD
  const updateCompanyInfo = useCallback(
    (updates) => {
      setCompanyInfo((prev) => ({ ...prev, ...updates }))
    },
    [setCompanyInfo]
  )

  const addLicense = useCallback(
    (license) => {
      const newLicense = { ...license, id: Date.now() }
      setCompanyInfo((prev) => ({
        ...prev,
        licenses: [...prev.licenses, newLicense],
      }))
    },
    [setCompanyInfo]
  )

  const updateLicense = useCallback(
    (id, updates) => {
      setCompanyInfo((prev) => ({
        ...prev,
        licenses: prev.licenses.map((l) => (l.id === id ? { ...l, ...updates } : l)),
      }))
    },
    [setCompanyInfo]
  )

  const deleteLicense = useCallback(
    (id) => {
      setCompanyInfo((prev) => ({
        ...prev,
        licenses: prev.licenses.filter((l) => l.id !== id),
      }))
    },
    [setCompanyInfo]
  )

  // Reset all data
  const resetAllData = useCallback(() => {
    setSiteSettings(defaultSiteSettings)
    setPortfolioProjects(defaultPortfolio)
    setArticles(defaultArticles)
    setTestimonials(defaultTestimonials)
    setContactMessages(defaultMessages)
    setCompanyInfo(defaultCompanyInfo)
  }, [setSiteSettings, setPortfolioProjects, setArticles, setTestimonials, setContactMessages, setCompanyInfo])

  const value = {
    theme,
    toggleTheme,
    isAuthenticated,
    login,
    logout,
    siteSettings,
    updateSiteSettings,
    portfolioProjects,
    addPortfolio,
    updatePortfolio,
    deletePortfolio,
    articles,
    addArticle,
    updateArticle,
    deleteArticle,
    testimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    contactMessages,
    addContactMessage,
    updateMessageStatus,
    deleteMessage,
    companyInfo,
    updateCompanyInfo,
    addLicense,
    updateLicense,
    deleteLicense,
    resetAllData,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
