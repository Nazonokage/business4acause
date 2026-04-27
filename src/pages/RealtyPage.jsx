export default function RealtyPage() {
  return (
    <section className="info-page">
      <div className="info-page__panel">
        <h1>Philippine Scapes Realty</h1>
        <p>
          Philippine Scapes Realty provides dependable support for property buyers, sellers, and
          investors. We focus on helping clients make informed decisions for residential,
          commercial, and investment properties.
        </p>

        <div className="food-intro-card">
          <img
            className="food-intro-card__image"
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=640&q=80"
            alt="Real estate property"
          />
          <div className="food-intro-card__content">
            <h2>More About Our Realty Services</h2>
            <p>
              We connect clients with the right properties through personalized assistance,
              market insights, and transparent transactions. Whether you are looking for a home,
              selling a property, or expanding your investment portfolio, our team is ready to
              guide you every step of the way.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
              className="welcome-btn welcome-btn--primary"
            >
              Visit Facebook Page
            </a>
          </div>
        </div>

        <h2>Why Clients Choose Philippine Scapes Realty</h2>
        <div className="details-grid">
          <article className="detail-card">
            <h3>Trusted Guidance</h3>
            <p>
              Our agents provide honest advice and thorough market analysis so you can make
              confident property decisions.
            </p>
          </article>
          <article className="detail-card">
            <h3>Wide Property Network</h3>
            <p>
              Access a broad selection of residential, commercial, and investment properties
              across key locations.
            </p>
          </article>
          <article className="detail-card">
            <h3>End-to-End Support</h3>
            <p>
              From property viewing to documentation and closing, we handle the details so you
              don't have to worry.
            </p>
          </article>
        </div>

        <h2>Service Coverage</h2>
        <p>
          Philippine Scapes Realty operates in major cities and developing areas, offering
          property listings, buyer representation, seller assistance, and investment consulting.
          We tailor our services to match your goals and ensure a smooth real estate experience
          from start to finish.
        </p>

        <div className="info-page__contact">
          <h2>Contact</h2>
          <p>Email: contact@philippinescapesrealty.com</p>
          <p>
            Facebook:{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
            >
              Philippine Scapes Realty
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
