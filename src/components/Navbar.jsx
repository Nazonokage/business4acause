import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const baseLinkClass =
    'inline-block rounded-lg border border-[#f5ecd733] bg-[#f5ecd714] px-4 py-2 text-sm font-medium text-[#F5ECD7] transition hover:-translate-y-0.5 hover:bg-[#f5ecd729] hover:border-[#f5ecd766]'

  return (
    <header className="sticky top-0 z-20 flex flex-col gap-3 border-y border-[#8b5e3c47] bg-[#8a493de6] px-4 py-3 shadow-[0_6px_16px_rgba(60,36,21,0.18)] backdrop-blur md:flex-row md:items-center md:justify-between md:px-5">
      <Link
        to="/"
        className="text-lg font-bold tracking-wide text-[#F5ECD7] no-underline [text-shadow:0_1px_2px_rgba(60,36,21,0.3)]"
      >
        AE Group of Companies
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <NavLink
              to="/realty"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-[#f5ecd733] border-[#f5ecd777]' : ''}`
              }
            >
              Philippine Scapes Realty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-trading"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-[#f5ecd733] border-[#f5ecd777]' : ''}`
              }
            >
              AE Food Trading
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-[#f5ecd733] border-[#f5ecd777]' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-[#f5ecd733] border-[#f5ecd777]' : ''}`
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
