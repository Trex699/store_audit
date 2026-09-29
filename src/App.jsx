import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { LanguageProvider } from './context/LanguageContext.jsx'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Knowledge from './pages/Knowledge.jsx'
import Contact from './pages/Contact.jsx'
import Company from './pages/Company.jsx'
import AdminLogin from './pages/admin/AdminLogin.jsx'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'

function KnowledgeWrapper() {
  const { slug } = useParams()
  return <Knowledge slug={slug} />
}

function App() {
  return (
    <AppProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="knowledge" element={<Knowledge />} />
              <Route path="knowledge/:slug" element={<KnowledgeWrapper />} />
              <Route path="contact" element={<Contact />} />
              <Route path="company" element={<Company />} />
            </Route>
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </AppProvider>
  )
}

export default App
