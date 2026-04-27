import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="top-navbar">
      <Link to="/" className="top-navbar__brand" style={{ textDecoration: 'none' }}>
      Title to Change {/*  it should always title to change */}
      </Link>
      <nav aria-label="Primary">
        <ul className="top-navbar__links">
          <li>
            <Link to="/about">Philippine Scapes Realty</Link>
          </li>
          <li>
            <Link to="/about">AE Food Trading</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

