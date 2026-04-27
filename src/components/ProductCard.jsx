export default function ProductCard({ name, description, image, onOpen }) {
  return (
    <button
      type="button"
      className="product-card"
      onClick={onOpen}
    >
      <img src={image} alt={name} className="product-card__image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <span className="product-card__hint">Click to view details</span>
    </button>
  )
}
