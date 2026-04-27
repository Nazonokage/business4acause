import { Link } from 'react-router-dom'

export default function BusinessCard({ title, description, to }) {
  return (
    <Link to={to} className="business-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="business-card__cta">Learn More</span>
    </Link>
  )
}
