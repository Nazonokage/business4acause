import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="top-navbar">
      <Link to="/" className="top-navbar__brand" style={{ textDecoration: 'none' }}>
        AE Group of Companies
      </Link>
      <nav aria-label="Primary">
        <ul className="top-navbar__links">
          <li>
            <Link to="/realty">Philippine Scapes Realty</Link>
          </li>
          <li>
            <Link to="/food-trading">AE Food Trading</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

