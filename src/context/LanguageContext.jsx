import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'
import translations from '../lib/i18n.js'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useLocalStorage('qa-lang', 'th')

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'th' ? 'en' : 'th'))
  }, [setLang])

  const t = useCallback(
    (key, params = {}) => {
      const text = translations[lang]?.[key] || translations.th[key] || key
      return Object.entries(params).reduce(
        (acc, [k, v]) => acc.replace(`{${k}}`, v),
        text
      )
    },
    [lang]
  )

  const value = {
    lang,
    setLang,
    toggleLang,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
