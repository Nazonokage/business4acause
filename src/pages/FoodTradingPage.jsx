import { Link } from 'react-router-dom'

export default function FoodTradingPage() {
  return (
    <section className="px-6 pb-16 pt-14">
      <div className="mx-auto max-w-5xl rounded-2xl border border-[#8b5e3c2e] bg-[#f5ecd7ad] p-8">
        <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-bold text-[#3C2415]">AE Food Trading</h1>
        <p className="mb-4 leading-7 text-[rgba(60,36,21,0.8)]">
          AE Food Trading supplies quality food products to businesses and partners with focus on
          consistency, affordability, and dependable delivery.
        </p>

        <div className="grid gap-5 rounded-2xl border border-[#8b5e3c2e] bg-[#ffffff8a] p-4 md:grid-cols-[1fr_1.2fr] md:p-5">
          <img
            className="block h-full w-full rounded-xl object-cover"
            src="https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=640&q=80"
            alt="Food trading products display"
          />
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-[#3C2415]">More About Our Food Trading Services</h2>
            <p className="mb-4 leading-7 text-[rgba(60,36,21,0.8)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link
              to="/food-trading/products"
              className="inline-flex items-center justify-center rounded-xl bg-[#6B4423] px-6 py-3 text-sm font-semibold text-[#F5ECD7] no-underline shadow-[0_4px_16px_rgba(107,68,35,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5C3A21]"
            >
              Check Products
            </Link>
          </div>
        </div>

        <h2 className="mb-3 mt-7 text-2xl font-semibold text-[#3C2415]">
          Why Businesses Choose AE Food Trading
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-xl border border-[#8b5e3c2e] bg-[#ffffff8a] p-4">
            <h3 className="m-0 text-lg font-semibold text-[#3C2415]">Consistent Supply</h3>
            <p className="mt-2 leading-7 text-[rgba(60,36,21,0.8)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </article>
          <article className="rounded-xl border border-[#8b5e3c2e] bg-[#ffffff8a] p-4">
            <h3 className="m-0 text-lg font-semibold text-[#3C2415]">Flexible Fulfillment</h3>
            <p className="mt-2 leading-7 text-[rgba(60,36,21,0.8)]">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </article>
          <article className="rounded-xl border border-[#8b5e3c2e] bg-[#ffffff8a] p-4">
            <h3 className="m-0 text-lg font-semibold text-[#3C2415]">Quality-Oriented Handling</h3>
            <p className="mt-2 leading-7 text-[rgba(60,36,21,0.8)]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </article>
        </div>

        <h2 className="mb-2 mt-7 text-2xl font-semibold text-[#3C2415]">Service Coverage</h2>
        <p className="leading-7 text-[rgba(60,36,21,0.8)]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit eros at augue
          suscipit, vitae hendrerit enim vulputate. Nulla facilisi. Curabitur dapibus, magna at
          facilisis consequat, lorem sem fermentum lacus, id commodo metus libero in nisi.
        </p>

        <div className="mt-5">
          <Link
            to="/food-trading/products"
            className="inline-flex items-center justify-center rounded-xl bg-[#6B4423] px-6 py-3 text-sm font-semibold text-[#F5ECD7] no-underline shadow-[0_4px_16px_rgba(107,68,35,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5C3A21]"
          >
            Go to Products Page
          </Link>
        </div>

        <p className="mt-4 italic text-[rgba(60,36,21,0.7)]">Facebook page link will be updated soon.</p>
      </div>
    </section>
  )
}
