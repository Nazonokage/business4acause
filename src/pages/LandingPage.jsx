import { Link } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'

export default function LandingPage() {
  return (
    <section id="landing" className="landing-page">
      <div className="landing-hero">
        <span className="welcome-badge">AE Group of Companies</span>
        <h1 className="landing-title">
          Philippine Scapes Realty
          <span className="landing-title-divider">|</span>
          AE Food Trading
        </h1>
        <p className="welcome-subtitle">
          Two trusted businesses under one group, delivering reliable service in real estate
          solutions and food trading.
        </p>
        <Link to="/about" className="welcome-btn welcome-btn--primary">
          About Us
        </Link>
      </div>

      <div className="business-card-grid">
        <BusinessCard
          title="Philippine Scapes Realty"
          description="Professional support for property sales, leasing, and investment decisions."
          to="/realty"
        />
        <BusinessCard
          title="AE Food Trading"
          description="Reliable food supply and distribution for wholesale and retail partners."
          to="/food-trading"
        />
      </div>
    </section>
  )
}
