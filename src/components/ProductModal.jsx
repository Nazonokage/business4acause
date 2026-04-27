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
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal">
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="modal__body">
          <img
            src={product.image}
            alt={product.name}
            className="modal__image"
          />
          <div className="modal__content">
            <h2 id="modal-title">{product.name}</h2>
            <p className="modal__description">{product.description}</p>

            <div className="modal__details">
              <h3>Details</h3>
              <p>{product.details}</p>
            </div>

            {/* Extensible detail sections — add more fields here easily */}
            {product.specifications && (
              <div className="modal__section">
                <h3>Specifications</h3>
                <ul>
                  {product.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.pricing && (
              <div className="modal__section">
                <h3>Pricing</h3>
                <p>{product.pricing}</p>
              </div>
            )}

            {product.availability && (
              <div className="modal__section">
                <h3>Availability</h3>
                <p>{product.availability}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

