import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section id="about" className="about-page">
      <div className="about-page__header">
        <Link to="/" className="about-page__back">
          ← Back to Home
        </Link>
        <h1>About Us</h1>
      </div>

      <div className="about-page__layout">
        <aside className="about-page__sidebar">
          <div className="about-page__avatar">
            <div className="about-page__avatar-placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>

          <div className="about-page__info">
            <h2>AE Food Trading</h2>
            <p className="about-page__role">Food Supply & Distribution</p>

            <div className="about-page__tags">
              <span>Wholesale</span>
              <span>Logistics</span>
              <span>Retail Supply</span>
            </div>

            <h2 style={{ marginTop: '20px' }}>Philippine Scapes Realty</h2>
            <p className="about-page__role">Real Estate & Property Solutions</p>

            <div className="about-page__tags">
              <span>Property Sales</span>
              <span>Leasing</span>
              <span>Investments</span>
            </div>
          </div>
        </aside>

        <article className="about-page__content">
          <div className="about-page__section">
            <h3>Company Overview</h3>
            <p>
              <strong>AE Food Trading</strong> is a trusted supplier of quality food products,
              providing reliable distribution services to businesses, retailers, and partners.
              The company focuses on consistency, affordability, and efficient delivery to meet
              the growing demands of the food industry.
            </p>

            <p>
              <strong>Philippine Scapes Realty</strong> delivers professional real estate services,
              helping clients find the right properties for residential, commercial, and investment
              purposes. With a strong understanding of the local market, the company ensures
              smart and secure property transactions.
            </p>
          </div>

          <div className="about-page__section">
            <h3>Experience</h3>
            <div className="about-page__timeline">

              <div className="about-page__timeline-item">
                <div className="about-page__timeline-dot" />
                <div className="about-page__timeline-body">
                  <h4>Expansion & Growth</h4>
                  <span className="about-page__timeline-meta">2022 — Present</span>
                  <p>
                    Strengthening operations in both food trading and real estate sectors,
                    expanding client networks and improving service efficiency.
                  </p>
                </div>
              </div>

              <div className="about-page__timeline-item">
                <div className="about-page__timeline-dot" />
                <div className="about-page__timeline-body">
                  <h4>Market Establishment</h4>
                  <span className="about-page__timeline-meta">2019 — 2022</span>
                  <p>
                    Built strong foundations in supply chain management and property services,
                    gaining trust from clients and partners.
                  </p>
                </div>
              </div>

              <div className="about-page__timeline-item">
                <div className="about-page__timeline-dot" />
                <div className="about-page__timeline-body">
                  <h4>Company Formation</h4>
                  <span className="about-page__timeline-meta">2017 — 2019</span>
                  <p>
                    Started operations with a vision to provide reliable food distribution
                    and accessible real estate solutions in the Philippines.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="about-page__section">
            <h3>Core Services</h3>
            <div className="about-page__skills">
              {[
                'Food Distribution',
                'Wholesale Supply',
                'Logistics Management',
                'Property Sales',
                'Real Estate Leasing',
                'Investment Consulting',
                'Client Support',
                'Market Analysis'
              ].map((service) => (
                <span key={service} className="about-page__skill-tag">
                  {service}
                </span>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}