import { useEffect, useCallback } from 'react'

export default function ProductModal({ product, isOpen, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(30,20,10,0.65)] p-6 backdrop-blur"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-[#8b5e3c40] bg-[rgba(245,236,215,0.96)] shadow-[0_20px_50px_rgba(60,36,21,0.35)]">
        <button
          type="button"
          className="absolute right-3 top-3 z-[2] flex h-9 w-9 items-center justify-center rounded-full border border-[#8b5e3c40] bg-[rgba(255,255,255,0.75)] text-[22px] leading-none text-[#3C2415] transition hover:scale-105 hover:bg-[rgba(255,255,255,0.95)]"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="grid gap-5 p-5 md:grid-cols-[1fr_1.2fr] md:p-7">
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl border border-[#8b5e3c26] object-cover [aspect-ratio:4/3]"
          />
          <div>
            <h2 id="modal-title" className="mb-2 text-2xl font-semibold text-[#3C2415]">
              {product.name}
            </h2>
            <p className="mb-4 text-sm leading-6 text-[rgba(60,36,21,0.82)]">{product.description}</p>

            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6B4423]">
                Details
              </h3>
              <p className="text-sm leading-6 text-[rgba(60,36,21,0.78)]">{product.details}</p>
            </div>

            {product.specifications && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6B4423]">
                  Specifications
                </h3>
                <ul className="ml-5 list-disc">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="text-sm leading-6 text-[rgba(60,36,21,0.78)]">
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {product.pricing && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6B4423]">
                  Pricing
                </h3>
                <p className="text-sm leading-6 text-[rgba(60,36,21,0.78)]">{product.pricing}</p>
              </div>
            )}

            {product.availability && (
              <div className="mt-4">
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6B4423]">
                  Availability
                </h3>
                <p className="text-sm leading-6 text-[rgba(60,36,21,0.78)]">{product.availability}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

