import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const baseLinkClass =
    'inline-block rounded-full border border-sedona-mushroom/40 bg-sedona-mushroom/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-sedona-mushroom transition hover:-translate-y-0.5 hover:bg-sedona-mushroom/20 hover:border-sedona-mushroom/70'

  return (
    <header className="sticky top-0 z-20 flex flex-col gap-3 border-y border-sedona-chili/45 bg-gradient-to-r from-sedona-burgundy/95 to-sedona-chili/90 px-4 py-3 shadow-[0_12px_28px_rgba(117,0,12,0.25)] backdrop-blur md:flex-row md:items-center md:justify-between md:px-5">
      <Link
        to="/"
        className="text-lg font-bold tracking-wide text-sedona-mushroom no-underline [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
      >
        AE Group of Companies
      </Link>
      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <NavLink
              to="/realty"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-sedona-mushroom/30 border-sedona-mushroom' : ''}`
              }
            >
              Philippine Scapes Realty
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/food-trading"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-sedona-mushroom/30 border-sedona-mushroom' : ''}`
              }
            >
              AE Food Trading
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-sedona-mushroom/30 border-sedona-mushroom' : ''}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? 'bg-sedona-mushroom/30 border-sedona-mushroom' : ''}`
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
