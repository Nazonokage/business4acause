import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter, Reveal } from '../components/motion'
import ImageLightbox from '../components/ImageLightbox'

/* ── Hover card with 3D tilt ── */
function HoverCard({ children, className = '' }) {
  const ref = useRef(null)
  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 12
    el.style.transform = `perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) scale(1.012)`
  }
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }
  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: 'transform 0.35s cubic-bezier(.22,1,.36,1)', willChange: 'transform' }}
    >
      {children}
    </div>
  )
}

export default function FoodTradingPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [activeImage, setActiveImage] = useState(null)
  useEffect(() => { setTimeout(() => setHeroLoaded(true), 80) }, [])

  return (
    <>
      <style>{`
        .ft-root {
          --burgundy: #75000C;
          --chili: #8D261F;
          --flax: #D4CFAE;
          --mushroom: #F0E5C1;
          font-family: 'DM Sans', sans-serif;
          color: var(--burgundy);
          font-size: 1.05rem;
          min-height: 100vh;
        }

        .ft-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
          color: var(--chili); padding: 6px 14px;
          border: 1px solid rgba(141,38,31,0.35); border-radius: 999px;
          background: rgba(240,229,193,0.72);
        }
        .ft-label::before {
          content:''; width:6px; height:6px; border-radius:50%;
          background: var(--chili); display:block;
        }

        .ft-divider { border: none; border-top: 1px solid rgba(141,38,31,0.2); margin: 0; }
        .ft-gold-line { width: 48px; height: 1px; background: linear-gradient(90deg, var(--chili), transparent); }

        .ft-card {
          background: rgba(240,229,193,0.8); border: 1px solid rgba(141,38,31,0.2);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 46px rgba(117,0,12,0.12);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .ft-card:hover {
          border-color: rgba(141,38,31,0.4);
          box-shadow: 0 28px 56px rgba(117,0,12,0.18), 0 0 0 1px rgba(141,38,31,0.1);
        }

        .ft-img { width: 100%; object-fit: cover; display: block; aspect-ratio: 16/10; }

        .ft-img-shine { position: relative; overflow: hidden; }
        .ft-img-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(117,0,12,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .ft-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; border-radius: 999px;
          background: linear-gradient(135deg, var(--burgundy), var(--chili));
          color: var(--mushroom); font-size: 13px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 30px rgba(117,0,12,0.3);
        }
        .ft-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(141,38,31,0.38); }

        .ft-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 999px;
          border: 1px solid rgba(141,38,31,0.4); color: var(--chili);
          font-size: 13px; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; transition: all 0.25s ease;
        }
        .ft-ghost:hover { background: rgba(240,229,193,0.8); border-color: var(--chili); }

        /* Hero */
        .ft-hero {
          position: relative; overflow: hidden; border-radius: 24px;
          background: linear-gradient(155deg, rgba(240,229,193,0.96), rgba(212,207,174,0.9));
          min-height: 480px; display: flex; align-items: flex-end;
        }
        .ft-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(141,38,31,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,38,31,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ft-hero-glow {
          position: absolute; top: -80px; right: -80px; width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(117,0,12,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-hero-glow-bl {
          position: absolute; bottom: -40px; left: -40px; width: 260px; height: 260px;
          background: radial-gradient(circle, rgba(212,207,174,0.5) 0%, transparent 70%);
          pointer-events: none;
        }
        .ft-hero-content { position: relative; z-index: 2; padding: 52px; width: 100%; }
        .ft-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 8vw, 88px);
          font-weight: 300; line-height: 0.95; letter-spacing: -2px;
          color: var(--burgundy);
        }
        .ft-hero-title span { color: var(--chili); display: block; font-style: italic; }

        /* Stat cards */
        .ft-stat {
          border: 1px solid rgba(141,38,31,0.22);
          background: linear-gradient(135deg, rgba(240,229,193,0.7), rgba(212,207,174,0.5));
          border-radius: 16px; padding: 28px 20px; text-align: center; backdrop-filter: blur(8px);
        }
        .ft-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 50px; font-weight: 300; color: var(--burgundy); line-height: 1;
        }
        .ft-stat-label {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(141,38,31,0.72); margin-top: 6px;
        }

        .ft-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 50px); font-weight: 300;
          color: var(--burgundy); line-height: 1.1; letter-spacing: -0.5px;
        }
        .ft-heading em { font-style: italic; color: var(--chili); }

        /* Pill tags */
        .ft-pill {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 12px; border: 1px solid rgba(141,38,31,0.3);
          border-radius: 999px; color: var(--chili);
          background: rgba(240,229,193,0.8);
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(240,229,193,0.9); }
        ::-webkit-scrollbar-thumb { background: rgba(141,38,31,0.5); border-radius: 2px; }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(28px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
      `}</style>

      <div className="ft-root">
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-10">

          {/* ── HERO ── */}
          <div
            className="ft-hero mb-10"
            style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
          >
            <div className="ft-hero-grid" />
            <div className="ft-hero-glow" />
            <div className="ft-hero-glow-bl" />
            <div className="ft-hero-content">
              <div className="ft-label fade-up" style={{ marginBottom: 20 }}>
                AE Group of Companies
              </div>
              <h1 className="ft-hero-title fade-up delay-1">
                AE Food
                <span>Trading.</span>
              </h1>
              <p className="fade-up delay-2" style={{ marginTop: 20, fontSize: 15, color: 'rgba(141,38,31,0.85)', maxWidth: 480, lineHeight: 1.85 }}>
                Quality food products supplied with consistency, affordability, and dependable delivery to businesses and partners across the Philippines.
              </p>
              <div className="fade-up delay-3" style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/food-trading/products" className="ft-cta">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                  Browse Products
                </Link>
                <a href="#" className="ft-ghost">Facebook Page →</a>
              </div>
            </div>
          </div>

          {/* ── STATS ── */}
          <Reveal delay={0} className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {[
              { label: 'Product Lines', val: 20, suffix: '+' },
              { label: 'Partner Stores', val: 50, suffix: '+' },
              { label: 'Orders Monthly', val: 200, suffix: '+' },
              { label: 'Cities Reached', val: 6, suffix: '' },
            ].map((s) => (
              <div key={s.label} className="ft-stat">
                <div className="ft-stat-num"><Counter to={s.val} suffix={s.suffix} /></div>
                <div className="ft-stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <hr className="ft-divider mb-10" />

          {/* ── ABOUT / FEATURE IMAGE ── */}
          <section className="mb-14">
            <Reveal className="flex items-center gap-4 mb-7">
              <div>
                <div className="ft-label mb-3">01 — About</div>
                <h2 className="ft-heading">What We <em>Offer</em></h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <HoverCard className="ft-card">
                <div className="md:grid" style={{ gridTemplateColumns: '1.3fr 1fr' }}>
                  <div className="ft-img-shine">
                    <img
                      src="https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80"
                      alt="Food trading products"
                      className="ft-img clickable-image"
                      onClick={() =>
                        setActiveImage({
                          src: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&w=800&q=80',
                          alt: 'Food trading products',
                        })
                      }
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="ft-gold-line mb-4" />
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 12 }}>
                      About AE Food Trading
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)' }}>
                      AE Food Trading is the dedicated food distribution arm of AE Group of Companies, focused on sourcing and delivering quality pantry essentials and fast-moving food items for retail and food-service clients.
                    </p>
                    <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Wholesale', 'Retail', 'Custom Orders', 'Monthly Supply'].map((tag) => (
                        <span key={tag} className="ft-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          </section>

          <hr className="ft-divider mb-14" />

          {/* ── MISSION ── */}
          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="ft-label mb-3">02 — Mission</div>
              <h2 className="ft-heading">Our Business <em>Mission</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <HoverCard className="ft-card">
                <div style={{ padding: 28 }}>
                  <div className="ft-gold-line mb-4" />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 12 }}>
                    To Keep Communities Supplied
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)', marginBottom: 16 }}>
                    Our mission is to provide dependable, fairly priced, and quality-assured food products that help local stores, restaurants, and resellers serve their customers consistently.
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.82)' }}>
                    We build long-term partnerships through responsive service, ethical sourcing, and delivery reliability that businesses can trust every order cycle.
                  </p>
                </div>
              </HoverCard>
            </Reveal>
          </section>

          <hr className="ft-divider mb-14" />

          {/* ── WHY CHOOSE US ── */}
          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="ft-label mb-3">03 — Why Us</div>
              <h2 className="ft-heading">Why Businesses Choose <em>AE Food Trading</em></h2>
              <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(141,38,31,0.8)', maxWidth: 520, lineHeight: 1.8 }}>
                Our partners stay with us because we deliver on what matters most — quality, consistency, and trust.
              </p>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  num: '01',
                  title: 'Consistent Supply',
                  body: 'We maintain reliable stock levels so your business never faces unexpected shortages. Dependable sourcing you can plan around.',
                  tags: ['Stable Stock', 'On-time'],
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  ),
                },
                {
                  num: '02',
                  title: 'Flexible Fulfillment',
                  body: 'From one-time bulk orders to recurring monthly procurement, we tailor our fulfillment to match your operational rhythm.',
                  tags: ['Bulk Orders', 'Recurring'],
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                    </svg>
                  ),
                },
                {
                  num: '03',
                  title: 'Quality Handling',
                  body: 'Products are handled and stored with care from source to delivery — ensuring freshness, integrity, and compliance every time.',
                  tags: ['Fresh', 'Compliant'],
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <HoverCard className="ft-card" style={{ height: '100%' }}>
                    <div style={{ padding: 28, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                        <span style={{ fontSize: 10, letterSpacing: '2px', color: 'rgba(141,38,31,0.65)', textTransform: 'uppercase' }}>{item.num}</span>
                        <div style={{
                          width: 40, height: 40, borderRadius: 10,
                          border: '1px solid rgba(141,38,31,0.25)',
                          background: 'linear-gradient(135deg, rgba(240,229,193,0.9), rgba(212,207,174,0.6))',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {item.icon}
                        </div>
                      </div>
                      <div className="ft-gold-line mb-3" />
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 10 }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(141,38,31,0.82)', flex: 1 }}>{item.body}</p>
                      <div style={{ marginTop: 20, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {item.tags.map((tag) => (
                          <span key={tag} className="ft-pill">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </HoverCard>
                </Reveal>
              ))}
            </div>
          </section>

          <hr className="ft-divider mb-14" />

          {/* ── SERVICE COVERAGE ── */}
          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="ft-label mb-3">04 — Coverage</div>
              <h2 className="ft-heading">Service <em>Coverage</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <HoverCard className="ft-card">
                <div className="md:grid" style={{ gridTemplateColumns: '1fr 1.3fr' }}>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="ft-gold-line mb-4" />
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 12 }}>
                      Serving Key Areas Across the Philippines
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)', marginBottom: 20 }}>
                      Our distribution network spans multiple cities and municipalities, ensuring timely delivery to both urban centers and surrounding communities. Contact us to confirm coverage in your area.
                    </p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {['Metro Areas', 'Provincial', 'Island Delivery'].map((tag) => (
                        <span key={tag} className="ft-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="ft-img-shine">
                    <img
                      src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                      alt="Food distribution"
                      className="ft-img clickable-image"
                      style={{ aspectRatio: '4/3' }}
                      onClick={() =>
                        setActiveImage({
                          src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
                          alt: 'Food distribution',
                        })
                      }
                    />
                  </div>
                </div>
              </HoverCard>
            </Reveal>
          </section>

          <hr className="ft-divider mb-14" />

          {/* ── CTA / CONTACT ── */}
          <Reveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(140deg, rgba(240,229,193,0.78), rgba(212,207,174,0.55))',
                border: '1px solid rgba(141,38,31,0.28)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
                width: 380, height: 220,
                background: 'radial-gradient(circle, rgba(117,0,12,0.13) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div className="ft-label mb-4 mx-auto" style={{ width: 'fit-content' }}>Start an Order</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px,5vw,46px)', fontWeight: 300,
                color: 'var(--burgundy)', marginBottom: 8,
              }}>
                Ready to <em style={{ fontStyle: 'italic', color: 'var(--chili)' }}>Partner With Us?</em>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(141,38,31,0.82)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 32px' }}>
                Reach out to discuss your supply needs, get a custom quote, or check product availability for your business.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/food-trading/products" className="ft-cta">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                  View Products
                </Link>
                <a href="#" className="ft-ghost">Facebook Page →</a>
              </div>
              <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(141,38,31,0.65)', letterSpacing: '0.5px' }}>
                Facebook page link will be updated soon.
              </p>
            </div>
          </Reveal>

        </div>
      </div>

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  )
}