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

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close on outside click */
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap');

        .nb-root {
          --burgundy: #75000C;
          --chili:    #8D261F;
          --flax:     #D4CFAE;
          --mushroom: #F0E5C1;
          --ink:      rgba(240,229,193,0.92);
          --border-dim: rgba(240,229,193,0.18);
          --border-mid: rgba(240,229,193,0.35);
          font-family: 'DM Sans', sans-serif;
        }

        /* ── header ── */
        .nb-header {
          position: sticky;
          top: 0;
          z-index: 50;
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .nb-header.scrolled {
          box-shadow: 0 8px 32px rgba(117,0,12,0.38), 0 2px 8px rgba(0,0,0,0.25);
        }

        /* ── inner bar ── */
        .nb-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0 1.25rem;
          height: 60px;
          background:
            linear-gradient(135deg, rgba(117,0,12,0.97) 0%, rgba(141,38,31,0.94) 100%);
          border-bottom: 1px solid var(--border-dim);
          position: relative;
        }

        /* subtle diagonal grain overlay */
        .nb-bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 3px,
            rgba(255,255,255,0.012) 3px,
            rgba(255,255,255,0.012) 4px
          );
          pointer-events: none;
        }

        /* ── logo ── */
        .nb-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .nb-logo-mark {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          border: 1.5px solid var(--border-mid);
          background: rgba(240,229,193,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, border-color 0.2s;
        }
        .nb-logo:hover .nb-logo-mark {
          background: rgba(240,229,193,0.18);
          border-color: rgba(240,229,193,0.5);
        }
        .nb-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }
        .nb-logo-top {
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 15px;
          color: var(--mushroom);
          letter-spacing: 0.01em;
        }
        .nb-logo-sub {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--flax);
          opacity: 0.75;
        }

        /* ── desktop nav ── */
        .nb-nav-desktop {
          display: none;
        }
        @media (min-width: 768px) {
          .nb-nav-desktop { display: flex; align-items: center; gap: 6px; }
        }

        .nb-link {
          position: relative;
          padding: 7px 14px;
          border-radius: 6px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(240,229,193,0.78);
          text-decoration: none;
          border: 1px solid transparent;
          transition: color 0.2s, background 0.2s, border-color 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .nb-link:hover {
          color: var(--mushroom);
          background: rgba(240,229,193,0.09);
          border-color: var(--border-dim);
          transform: translateY(-1px);
        }
        .nb-link.active {
          color: var(--mushroom);
          background: rgba(240,229,193,0.14);
          border-color: var(--border-mid);
        }
        /* animated underline on active */
        .nb-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 14px;
          right: 14px;
          height: 1.5px;
          background: var(--flax);
          border-radius: 999px;
          opacity: 0.6;
        }

        /* ── divider dots between links ── */
        .nb-sep {
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(240,229,193,0.22);
          flex-shrink: 0;
        }

        /* ── hamburger ── */
        .nb-burger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          border: 1px solid var(--border-dim);
          background: rgba(240,229,193,0.07);
          color: var(--mushroom);
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .nb-burger:hover {
          background: rgba(240,229,193,0.15);
          border-color: var(--border-mid);
        }
        @media (min-width: 768px) {
          .nb-burger { display: none; }
        }

        /* ── mobile drawer ── */
        .nb-drawer {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.32s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.25s ease,
                      padding 0.25s ease;
          background: linear-gradient(180deg, rgba(100,0,10,0.98) 0%, rgba(117,0,12,0.97) 100%);
          border-top: 1px solid var(--border-dim);
        }
        .nb-drawer.open {
          max-height: 320px;
          opacity: 1;
          padding-bottom: 8px;
        }
        .nb-drawer-inner {
          display: flex;
          flex-direction: column;
          gap: 4px;
          padding: 10px 16px 4px;
        }
        .nb-link-mobile {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(240,229,193,0.75);
          text-decoration: none;
          border: 1px solid transparent;
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
        .nb-link-mobile:hover {
          color: var(--mushroom);
          background: rgba(240,229,193,0.09);
          border-color: var(--border-dim);
        }
        .nb-link-mobile.active {
          color: var(--mushroom);
          background: rgba(240,229,193,0.13);
          border-color: var(--border-mid);
        }
        .nb-link-mobile-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
          background: rgba(240,229,193,0.25);
          transition: background 0.2s;
        }
        .nb-link-mobile.active .nb-link-mobile-dot {
          background: var(--flax);
        }
        .nb-link-mobile-arrow {
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          font-size: 14px;
          color: var(--flax);
        }
        .nb-link-mobile:hover .nb-link-mobile-arrow,
        .nb-link-mobile.active .nb-link-mobile-arrow {
          opacity: 1;
          transform: translateX(2px);
        }
      `}</style>

      <header className="nb-root nb-header" ref={navRef} data-scrolled={scrolled || undefined}
        style={{ boxShadow: scrolled ? '0 8px 32px rgba(117,0,12,0.38), 0 2px 8px rgba(0,0,0,0.25)' : 'none' }}>

        <div className="nb-bar">
          {/* Logo */}
          <Link to="/" className="nb-logo">
            <span className="nb-logo-mark">
              {/* minimal leaf / cause icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2C5 2 2.5 4.5 2.5 8c0 2.8 1.7 5.2 4 6.3V8.5L8 5l1.5 3.5v5.8c2.3-1.1 4-3.5 4-6.3C13.5 4.5 11 2 8 2Z"
                  fill="rgba(240,229,193,0.7)" />
              </svg>
            </span>
            <span className="nb-logo-text">
              <span className="nb-logo-top">Business 4 a Cause</span>
              <span className="nb-logo-sub">Making an impact</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="nb-nav-desktop">
            {NAV_LINKS.map((link, i) => (
              <>
                {i > 0 && <span key={`sep-${i}`} className="nb-sep" aria-hidden="true" />}
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => `nb-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </NavLink>
              </>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            className="nb-burger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12" />
                : <path d="M3 7h18M3 12h18M3 17h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile drawer */}
        <nav aria-label="Primary mobile" className={`nb-drawer${menuOpen ? ' open' : ''}`}>
          <div className="nb-drawer-inner">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) => `nb-link-mobile${isActive ? ' active' : ''}`}
              >
                <span className="nb-link-mobile-dot" aria-hidden="true" />
                {link.label}
                <span className="nb-link-mobile-arrow" aria-hidden="true">›</span>
              </NavLink>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}