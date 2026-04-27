import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="welcome"
      className={`transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="welcome-hero">
        <div className="welcome-hero-panel">
          <span className="welcome-badge"> title to change; Welcome to Sedona UI</span>
          <h1 className="welcome-title">
          title to change: {/*  it should always title to change */}
            Crafted with warmth,
            <br />
            <span className="welcome-title-accent">built for impact.</span>
          </h1>
          <p className="welcome-subtitle">
            A refined React starter tuned with earthy burgundy tones, subtle particle backdrops,
            and a design language that feels alive.
          </p>

          <div className="welcome-actions">
            <Link to="/about" className="welcome-btn welcome-btn--primary">
              Get Started
            </Link>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="welcome-btn welcome-btn--ghost"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      <div id="features" className="welcome-features">
        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>
          <h3>Philippine Scapes Realty</h3>
          <p>Professional property sales, leasing, and investment consulting. Finding the right property for your needs.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm1-5h-2V7h2z" />
            </svg>
          </div>
          <h3>AE Food Trading</h3>
          <p>Reliable food distribution and wholesale supply services. Consistency, affordability, and efficient delivery.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <h3>Trusted Across the Philippines</h3>
          <p>Building lasting partnerships with businesses, property owners, and communities nationwide since 2017.</p>
        </div>
      </div>
    </section>
  );
}
