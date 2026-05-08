import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/realty', label: 'Philippine Scapes Realty', short: 'Realty' },
  { to: '/food-trading', label: 'AE Food Trading', short: 'Food Trading' },
  { to: '/environmental-awareness', label: 'Environmental Awareness', short: 'Env. Awareness' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Handle scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close on outside click
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  // Shared link classes
  const linkClasses = ({ isActive }) => `
    relative px-4 py-2 rounded-md text-[11px] font-semibold tracking-[0.1em] uppercase
    transition-all duration-200 whitespace-nowrap
    ${isActive 
      ? 'text-[#F0E5C1] bg-[rgba(240,229,193,0.14)] border border-[rgba(240,229,193,0.35)]' 
      : 'text-[rgba(240,229,193,0.78)] hover:text-[#F0E5C1] hover:bg-[rgba(240,229,193,0.09)] hover:border hover:border-[rgba(240,229,193,0.18)]'
    }
  `

  const mobileLinkClasses = ({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-semibold tracking-[0.1em] uppercase
    transition-all duration-200
    ${isActive 
      ? 'text-[#F0E5C1] bg-[rgba(240,229,193,0.13)] border border-[rgba(240,229,193,0.35)]' 
      : 'text-[rgba(240,229,193,0.75)] hover:text-[#F0E5C1] hover:bg-[rgba(240,229,193,0.09)] hover:border hover:border-[rgba(240,229,193,0.18)]'
    }
  `

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 transition-shadow duration-350"
      style={{
        boxShadow: scrolled 
          ? '0 8px 32px rgba(117,0,12,0.38), 0 2px 8px rgba(0,0,0,0.25)' 
          : 'none'
      }}
    >
      {/* Main navbar bar */}
      <div className="relative bg-gradient-to-br from-[#75000C] to-[#8D261F] border-b border-[rgba(240,229,193,0.18)]">
        {/* Subtle diagonal grain overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(-55deg,transparent,transparent_3px,rgba(255,255,255,0.012)_3px,rgba(255,255,255,0.012)_4px)]" />
        
        <div className="flex items-center justify-between gap-4 px-5 h-[60px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="w-8 h-8 rounded-lg border border-[rgba(240,229,193,0.35)] bg-[rgba(240,229,193,0.1)] flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(240,229,193,0.18)] group-hover:border-[rgba(240,229,193,0.5)]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path 
                  d="M8 2C5 2 2.5 4.5 2.5 8c0 2.8 1.7 5.2 4 6.3V8.5L8 5l1.5 3.5v5.8c2.3-1.1 4-3.5 4-6.3C13.5 4.5 11 2 8 2Z"
                  fill="rgba(240,229,193,0.7)" 
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-['Playfair_Display',serif] font-semibold text-[15px] text-[#F0E5C1] tracking-[0.01em]">
                Business 4 a Cause
              </span>
              <span className="text-[10px] font-medium tracking-[0.18em] uppercase text-[#D4CFAE] opacity-75">
                Making an impact
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, index) => (
              <div key={link.to} className="flex items-center">
                {index > 0 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-[rgba(240,229,193,0.22)] mx-1" />
                )}
                <NavLink to={link.to} className={linkClasses}>
                  {link.label}
                </NavLink>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[rgba(240,229,193,0.18)] bg-[rgba(240,229,193,0.07)] text-[#F0E5C1] cursor-pointer transition-all duration-200 hover:bg-[rgba(240,229,193,0.15)] hover:border-[rgba(240,229,193,0.35)]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`
            overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            bg-gradient-to-b from-[rgba(100,0,10,0.98)] to-[rgba(117,0,12,0.97)]
            border-t border-[rgba(240,229,193,0.18)]
            ${menuOpen ? 'max-h-[320px] opacity-100 pb-2' : 'max-h-0 opacity-0'}
          `}
        >
          <nav className="flex flex-col gap-1 px-4 pt-2.5 pb-1">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.to} to={link.to} className={mobileLinkClasses}>
                <span className="w-1.5 h-1.5 rounded-full bg-[rgba(240,229,193,0.25)] transition-colors duration-200 group-[.active]:bg-[#D4CFAE]" />
                {link.label}
                <span className="ml-auto opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#D4CFAE]">
                  ›
                </span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}