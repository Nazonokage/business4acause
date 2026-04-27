import ProductCard from '../components/ProductCard'

const placeholderProducts = [
  {
    name: 'Product Placeholder 1',
    description: 'Sample item for future product listing and specifications.',
  },
  {
    name: 'Product Placeholder 2',
    description: 'Sample item for pricing, packaging, and supply details.',
  },
  {
    name: 'Product Placeholder 3',
    description: 'Sample item to be replaced with actual product data.',
  },
]

export default function FoodTradingPage() {
  return (
    <section className="info-page">
      <div className="info-page__panel">
        <h1>AE Food Trading</h1>
        <p>
          AE Food Trading supplies quality food products to businesses and partners with focus on
          consistency, affordability, and dependable delivery.
        </p>

        <h2>Featured Products</h2>
        <div className="product-grid">
          {placeholderProducts.map((product) => (
            <ProductCard key={product.name} name={product.name} description={product.description} />
          ))}
        </div>

        <p className="info-page__note">Facebook page link will be updated soon.</p>
      </div>
    </section>
  )
}
