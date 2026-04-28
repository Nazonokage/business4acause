import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductModal from '../components/ProductModal'

const placeholderProducts = [
  {
    id: 'product-1',
    name: 'Premium Rice Pack',
    description: 'High-quality staple product for regular wholesale and retail orders.',
    image:
      'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80',
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum euismod, lorem sed congue faucibus, turpis erat facilisis leo, in tincidunt justo neque sed mauris.',
  },
  {
    id: 'product-2',
    name: 'Cooking Oil Bundle',
    description: 'Reliable supply option designed for food service and partner stores.',
    image:
      'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    details:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Etiam vitae neque sit amet leo ultrices ullamcorper non non sem.',
  },
  {
    id: 'product-3',
    name: 'Canned Goods Set',
    description: 'Convenient mixed-item package for recurring monthly procurement.',
    image:
      'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&w=800&q=80',
    details:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Curabitur eget neque a magna aliquam sollicitudin.',
  },
  {
    id: 'product-4',
    name: 'Snack & Beverage Mix',
    description: 'Flexible inventory option for sari-sari stores and small markets.',
    image:
      'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80',
    details:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Aliquam erat volutpat, sed condimentum odio luctus non.',
  },
]

export default function FoodProductsPage() {
  const [modalProduct, setModalProduct] = useState(null)
  const isModalOpen = modalProduct !== null

  const openModal = (product) => setModalProduct(product)
  const closeModal = () => setModalProduct(null)

  return (
    <section className="px-6 pb-16 pt-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#8b5e3c2e] bg-[#f5ecd7ad] p-8">
        <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-bold text-[#3C2415]">
          AE Food Trading Products
        </h1>
        <p className="mb-3 leading-7 text-[rgba(60,36,21,0.8)]">
          Browse our current placeholder catalog below. Product names, images, and full specs will
          be replaced with finalized inventory details in the next update.
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {placeholderProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              onOpen={() => openModal(product)}
            />
          ))}
        </div>

        <p className="mt-4 italic text-[rgba(60,36,21,0.7)]">
          Need a specific item? Contact us and we can prepare a custom supply list.
        </p>
      </div>

      <ProductModal
        product={modalProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  )
}
