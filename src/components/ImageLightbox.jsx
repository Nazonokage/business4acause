import { useEffect } from 'react'

export default function ImageLightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [image, onClose])

  if (!image) return null

  return (
    <div className="global-lightbox" onClick={onClose} role="presentation">
      <div className="global-lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="global-lightbox-close"
          onClick={onClose}
          aria-label="Close image preview"
        >
          ×
        </button>
        <img src={image.src} alt={image.alt} className="global-lightbox-img" />
      </div>
    </div>
  )
}
