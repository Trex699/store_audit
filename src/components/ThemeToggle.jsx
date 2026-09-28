import { Sun, Moon } from 'lucide-react'
import { useApp } from '../context/AppContext.jsx'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useApp()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gold-500/10 text-gold-500 hover:bg-gold-500/20 transition-colors"
      aria-label="สลับธีม"
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
