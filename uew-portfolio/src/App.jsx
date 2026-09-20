import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PostPage from './pages/PostPage'
import { useSiteData } from './lib/useSiteData'

function ScrollToHashOrTop() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location])
  return null
}

function AppShell() {
  const data = useSiteData()

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToHashOrTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/posts/:slug" element={<PostPage />} />
        </Routes>
      </main>
      <Footer settings={data.settings} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}
