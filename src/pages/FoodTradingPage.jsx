import { Link } from 'react-router-dom'

export default function FoodTradingPage() {
  return (
    <section className="info-page">
      <div className="info-page__panel">
        <h1>AE Food Trading</h1>
        <p>
          AE Food Trading supplies quality food products to businesses and partners with focus on
          consistency, affordability, and dependable delivery.
        </p>

        <div className="food-intro-card">
          <img
            className="food-intro-card__image"
            src="https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=640&q=80"
            alt="Food trading products display"
          />
          <div className="food-intro-card__content">
            <h2>More About Our Food Trading Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to="/food-trading/products" className="welcome-btn welcome-btn--primary">
              Check Products
            </Link>
          </div>
        </div>

        <h2>Why Businesses Choose AE Food Trading</h2>
        <div className="details-grid">
          <article className="detail-card">
            <h3>Consistent Supply</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article className="detail-card">
            <h3>Flexible Fulfillment</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </article>
          <article className="detail-card">
            <h3>Quality-Oriented Handling</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </article>
        </div>

        <h2>Service Coverage</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit eros at augue
          suscipit, vitae hendrerit enim vulputate. Nulla facilisi. Curabitur dapibus, magna at
          facilisis consequat, lorem sem fermentum lacus, id commodo metus libero in nisi.
        </p>

        <div className="info-page__actions">
          <Link to="/food-trading/products" className="welcome-btn welcome-btn--primary">
            Go to Products Page
          </Link>
        </div>

        <p className="info-page__note">Facebook page link will be updated soon.</p>
      </div>
    </section>
  )
}
