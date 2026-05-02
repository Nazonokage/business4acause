import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function HiddenFooter() {
  const [isNearBottom, setIsNearBottom] = useState(false)

  useEffect(() => {
    const evaluateScrollPosition = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const viewportHeight = window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const remaining = pageHeight - (scrollTop + viewportHeight)
      setIsNearBottom(remaining < 180)
    }

    evaluateScrollPosition()
    window.addEventListener('scroll', evaluateScrollPosition, { passive: true })
    window.addEventListener('resize', evaluateScrollPosition)
    return () => {
      window.removeEventListener('scroll', evaluateScrollPosition)
      window.removeEventListener('resize', evaluateScrollPosition)
    }
  }, [])

  return (
    <>
      <style>{`
        .hidden-footer-shell {
          position: sticky;
          bottom: 8px;
          z-index: 40;
          margin: 0 auto 8px;
          width: min(100%, 1080px);
          padding: 0 12px;
          pointer-events: none;
          transform: translateY(140%);
          opacity: 0;
          transition: transform 0.28s ease, opacity 0.28s ease;
        }
        .hidden-footer-shell.visible {
          transform: translateY(0);
          opacity: 1;
          pointer-events: auto;
        }
        .hidden-footer-box {
          border: 1px solid rgba(141,38,31,0.26);
          background: linear-gradient(140deg, rgba(240,229,193,0.94), rgba(212,207,174,0.86));
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 34px rgba(117,0,12,0.2);
          backdrop-filter: blur(6px);
        }
        .hidden-footer-content {
          padding: 12px 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
        }
        .hidden-footer-link {
          text-decoration: none;
          font-size: 11px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(141,38,31,0.34);
          color: #8D261F;
          background: rgba(240,229,193,0.8);
        }
        .hidden-footer-link:hover {
          border-color: rgba(141,38,31,0.62);
          background: rgba(240,229,193,0.98);
        }
      `}</style>

      <section className={`hidden-footer-shell ${isNearBottom ? 'visible' : ''}`} aria-label="Hidden footer">
        <div className="hidden-footer-box">
          <div id="global-hidden-footer-links" className="hidden-footer-content">
            <Link to="/about" className="hidden-footer-link">About Us</Link>
            <Link to="/contact" className="hidden-footer-link">Contact Us</Link>
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
              className="hidden-footer-link"
            >
              Facebook Page
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
