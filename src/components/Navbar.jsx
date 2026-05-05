import { Fragment, useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { to: '/realty',                  label: 'Philippine Scapes Realty' },
  { to: '/food-trading',            label: 'AE Food Trading'          },
  { to: '/environmental-awareness', label: 'Environmental Awareness'  },
]

// Only things Tailwind can't express: pseudo-elements (::before texture, ::after active underline)
// and the data-scrolled attribute selector. Everything else is utility classes.
const MICRO_CSS = `
  .nb-bar::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      -55deg, transparent, transparent 3px,
      rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px
    );
    pointer-events: none;
  }
  .nb-link-desktop.active::after {
    content: '';
    position: absolute;
    bottom: 4px; left: 14px; right: 14px;
    height: 1.5px;
    background: #D4CFAE;
    border-radius: 999px;
    opacity: 0.6;
  }
  [data-scrolled] .nb-bar {
    box-shadow: 0 8px 32px rgba(117,0,12,0.38), 0 2px 8px rgba(0,0,0,0.25);
  }
`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]   = useState(false)
  const location = useLocation()
  const navRef   = useRef(null)

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [menuOpen])

  return (
    <>
      <style>{MICRO_CSS}</style>

      <header
        ref={navRef}
        data-scrolled={scrolled || undefined}
        className="sticky top-0 z-50 font-sans transition-shadow duration-300"
      >
        {/* ── Main bar ── */}
        <div
          className="nb-bar relative flex items-center justify-between gap-4 px-5 h-[60px]
                     bg-gradient-to-br from-sedona-burgundy to-sedona-chili
                     border-b border-sedona-flax/20"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline flex-shrink-0 group">
            <span
              className="w-8 h-8 rounded-lg border border-sedona-flax/35 bg-sedona-mushroom/10
                         flex items-center justify-center
                         transition-colors duration-200
                         group-hover:bg-sedona-mushroom/18 group-hover:border-sedona-flax/50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2C5 2 2.5 4.5 2.5 8c0 2.8 1.7 5.2 4 6.3V8.5L8 5l1.5 3.5v5.8c2.3-1.1 4-3.5 4-6.3C13.5 4.5 11 2 8 2Z"
                  fill="rgba(240,229,193,0.7)"
                />
              </svg>
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display font-semibold text-[20px] text-sedona-mushroom tracking-wide">
                Business 4 a Cause
              </span>
              <span className="text-[13px] font-medium tracking-widest uppercase text-sedona-flax opacity-90">
                Making an impact
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1.5">
            {NAV_LINKS.map((link, i) => (
              <Fragment key={link.to}>
                {i > 0 && (
                  <span className="w-[3px] h-[3px] rounded-full bg-sedona-flax/25 flex-shrink-0" aria-hidden="true" />
                )}
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nb-link-desktop relative px-3.5 py-2 rounded-md text-[14px] font-semibold tracking-[0.04em]
                     no-underline border whitespace-nowrap
                     transition-all duration-200
                     ${isActive
                       ? 'text-sedona-mushroom bg-sedona-mushroom/14 border-sedona-flax/35'
                       : 'text-sedona-mushroom/90 border-transparent hover:text-sedona-mushroom hover:bg-sedona-mushroom/9 hover:border-sedona-flax/18 hover:-translate-y-px'
                     }`
                  }
                >
                  {link.label}
                </NavLink>
              </Fragment>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-[38px] h-[38px]
                       rounded-lg border border-sedona-flax/18 bg-sedona-mushroom/7
                       text-sedona-mushroom cursor-pointer flex-shrink-0
                       transition-colors duration-200
                       hover:bg-sedona-mushroom/15 hover:border-sedona-flax/35"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <nav
          aria-label="Primary mobile"
          className={`overflow-hidden transition-all duration-300 ease-in-out
                      bg-gradient-to-b from-[#64000a] to-sedona-burgundy
                      border-t border-sedona-flax/18
                      ${menuOpen ? 'max-h-80 opacity-100 pb-2' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col gap-1 px-4 pt-2.5 pb-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3.5 py-3 rounded-lg text-[14px] font-semibold
                   tracking-[0.03em] no-underline border
                   transition-colors duration-200
                   ${isActive
                     ? 'text-sedona-mushroom bg-sedona-mushroom/13 border-sedona-flax/35'
                     : 'text-sedona-mushroom/94 border-transparent hover:text-sedona-mushroom hover:bg-sedona-mushroom/9 hover:border-sedona-flax/18'
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200
                                  ${isActive ? 'bg-sedona-flax' : 'bg-sedona-flax/25'}`}
                      aria-hidden="true"
                    />
                    {link.label}
                    <span
                      className={`ml-auto text-sedona-flax text-[14px] transition-all duration-200
                                  ${isActive ? 'opacity-100 translate-x-0.5' : 'opacity-0'}`}
                      aria-hidden="true"
                    >
                      ›
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}