export default function ProductCard({ name, description }) {
  return (
    <article className="product-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  )
}
