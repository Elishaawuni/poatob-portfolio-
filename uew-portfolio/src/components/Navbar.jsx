import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const LINKS = [
  { label: 'About', to: '#about' },
  { label: 'Research', to: '#research' },
  { label: 'Teaching', to: '#teaching' },
  { label: 'Publications', to: '#publications' },
  { label: 'Projects', to: '#projects' },
  { label: 'Grants', to: '#grants' },
  { label: 'Insights', to: '#insights' },
  { label: 'CV', to: '#cv' },
  { label: 'Contact', to: '#contact' },
  {label: 'Gallery', to: '#gallery'}
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function goTo(hash) {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container-narrow flex items-center justify-between py-4">
        <Link to="/" className="font-display text-lg sm:text-xl font-semibold text-paper leading-tight">
          Dr. Samuel Poatob
          <span className="block font-label text-[10px] tracking-[0.18em] uppercase text-gold-light">
            UEW · Social Studies
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => goTo(l.to)}
              className="font-label text-sm text-paper/85 hover:text-gold-light px-3 py-2 rounded-md transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => goTo('#contact')} className="btn-primary ml-2 !py-2 !px-4 text-sm">
            Book a consultation
          </button>
        </div>

        <button
          className="lg:hidden text-paper text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-ink border-t border-paper/10 px-5 pb-6 pt-2">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => goTo(l.to)}
                className="text-left font-label text-paper/90 hover:text-gold-light py-2.5 border-b border-paper/5"
              >
                {l.label}
              </button>
            ))}
            <button onClick={() => goTo('#contact')} className="btn-primary mt-4 justify-center">
              Book a consultation
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
