import { useMemo, useState, useEffect, useRef } from 'react'
import propertyImages from '../assets/info'

const byName = (filename) => propertyImages.find((item) => item.name === filename)
const byPrefix = (prefix) => propertyImages.filter((item) => item.name.startsWith(prefix))

const fallbackImage =
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80'

const buildImageCandidates = (filename) => {
  const normalized = filename.trim()
  const dotIndex = normalized.lastIndexOf('.')
  const base = dotIndex > -1 ? normalized.slice(0, dotIndex) : normalized
  return [
    `/realty/${normalized}`,
    `/realty/${base}.jpg`,
    `/realty/${base}.jpeg`,
    `/realty/${base}.png`,
    `/realty/${base}.webp`,
    fallbackImage,
  ].filter((value, index, arr) => arr.indexOf(value) === index)
}

function RealtyImage({ filename, alt, className }) {
  const candidates = useMemo(() => buildImageCandidates(filename), [filename])
  const [candidateIndex, setCandidateIndex] = useState(0)
  return (
    <img
      src={candidates[candidateIndex]}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() =>
        setCandidateIndex((c) => (c >= candidates.length - 1 ? c : c + 1))
      }
    />
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

const presentItem = (item, index) => ({
  id: `${item.name}-${index}`,
  title: item.title,
  description: item.description,
  imageName: item.name,
})

/* ─── tiny animated number counter ─── */
function Counter({ to, suffix = '', duration = 1800 }) {
  const [val, setVal] = useState(0)
  const [ref, inView] = useInView(0.5)
  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.floor(p * to))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])
  return <span ref={ref}>{val}{suffix}</span>
}

/* ─── section reveal wrapper ─── */
function Reveal({ children, delay = 0, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(36px)',
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s cubic-bezier(.22,1,.36,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ─── image card with parallax-ish hover ─── */
function HoverCard({ children, className = '' }) {
  const ref = useRef(null)
  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14
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

export default function RealtyPage() {
  const projectOverview = [byName('project-overview-main.jpg'), byName('project-overview-tower-details.jpg')]
    .filter(Boolean).map(presentItem)
  const amenities = byName('amenities-area.jpg')
  const entranceRotunda = byName('entrance-rotunda.jpg')
  const sohoUnits = byPrefix('soho').map(presentItem)

  const [heroLoaded, setHeroLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setHeroLoaded(true), 80) }, [])

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        .realty-root {
          --bg-main: #F0E5C1;
          --bg-alt: #D4CFAE;
          --ink-main: #75000C;
          --ink-soft: #8D261F;
          font-family: 'DM Sans', sans-serif;
          background: transparent;
          color: var(--ink-main);
          min-height: 100vh;
        }

        .label-tag {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
          color: var(--ink-soft); padding: 6px 14px; border: 1px solid rgba(141,38,31,0.35);
          border-radius: 999px; background: rgba(240,229,193,0.72);
        }
        .label-tag::before { content:''; width:6px; height:6px; border-radius:50%; background:var(--ink-soft); display:block; }

        .gold-line { width: 48px; height: 1px; background: linear-gradient(90deg, var(--ink-soft), transparent); }

        .img-shine {
          position: relative; overflow: hidden;
        }
        .img-shine::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(117,0,12,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        .stat-card {
          border: 1px solid rgba(141,38,31,0.25);
          background: linear-gradient(135deg, rgba(240,229,193,0.7), rgba(212,207,174,0.55));
          border-radius: 16px; padding: 28px 24px; text-align: center; backdrop-filter: blur(8px);
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 300; color: var(--ink-main); line-height: 1;
        }
        .stat-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(141,38,31,0.75); margin-top: 6px; }

        .section-heading {
          font-family: 'Cormorant Garamond', serif; font-weight: 300; color: var(--ink-main);
          font-size: clamp(36px, 5vw, 52px); line-height: 1.1; letter-spacing: -0.5px;
        }
        .section-heading em { font-style: italic; color: var(--ink-soft); }

        .card-dark {
          background: rgba(240,229,193,0.8); border: 1px solid rgba(141,38,31,0.2);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 46px rgba(117,0,12,0.12);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .card-dark:hover { border-color: rgba(141,38,31,0.4); box-shadow: 0 28px 56px rgba(117,0,12,0.18), 0 0 0 1px rgba(141,38,31,0.1); }

        .img-cover { width: 100%; object-fit: cover; display: block; aspect-ratio: 16/10; }

        .cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 28px; border-radius: 999px;
          background: linear-gradient(135deg, var(--ink-main), var(--ink-soft));
          color: #F0E5C1; font-size: 13px; font-weight: 500; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
          box-shadow: 0 8px 30px rgba(117,0,12,0.3);
        }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(141,38,31,0.35); opacity: 0.96; }
        .cta-btn svg { width: 16px; height: 16px; }

        .ghost-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 999px;
          border: 1px solid rgba(141,38,31,0.4); color: var(--ink-soft);
          font-size: 13px; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; transition: all 0.25s ease;
        }
        .ghost-btn:hover { background: rgba(240,229,193,0.8); border-color: var(--ink-soft); }

        .divider { border: none; border-top: 1px solid rgba(141,38,31,0.2); margin: 0; }

        /* hero */
        .hero-bg {
          position: relative; overflow: hidden; border-radius: 24px;
          background: linear-gradient(160deg, rgba(240,229,193,0.95), rgba(212,207,174,0.95));
          min-height: 480px; display: flex; align-items: flex-end;
        }
        .hero-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(141,38,31,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,38,31,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-glow {
          position: absolute; top: -80px; right: -80px; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(117,0,12,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content { position: relative; z-index: 2; padding: 48px; }
        .hero-title {
          font-family: 'Cormorant Garamond', serif; font-size: clamp(48px, 8vw, 88px);
          font-weight: 300; line-height: 0.95; letter-spacing: -2px; color: var(--ink-main);
        }
        .hero-title span { color: var(--ink-soft); display: block; font-style: italic; }

        /* soho alternating */
        .soho-img-right .soho-img { order: 2; }
        .soho-img-right .soho-text { order: 1; }

        /* scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: rgba(240,229,193,0.9); }
        ::-webkit-scrollbar-thumb { background: rgba(141,38,31,0.55); border-radius: 2px; }

        @keyframes fadeUp {
          from { opacity:0; transform: translateY(28px); }
          to   { opacity:1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.45s; }
        .delay-4 { animation-delay: 0.6s; }
      `}</style>

      <div className="realty-root">
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-10">

          {/* ── HERO ── */}
          <div
            className="hero-bg mb-10"
            style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
          >
            <div className="hero-grid" />
            <div className="hero-glow" />
            <div className="hero-content w-full">
              <div className={`label-tag fade-up`} style={{ marginBottom: 20 }}>
                Iloilo City, Philippines
              </div>
              <h1 className="hero-title fade-up delay-1">
                Avenir<span>Iloilo.</span>
              </h1>
              <p className="fade-up delay-2" style={{ marginTop: 20, fontSize: 15, color: 'rgba(141,38,31,0.85)', maxWidth: 480, lineHeight: 1.8 }}>
                A landmark vertical development by Philippine Scapes Realty — where refined architecture meets elevated island living.
              </p>
              <div className="fade-up delay-3" style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="mailto:contact@philippinescapesrealty.com" className="cta-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Inquire Now
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584272253847" target="_blank" rel="noreferrer" className="ghost-btn">
                  Facebook Page →
                </a>
              </div>
            </div>
          </div>

          {/* ── STATS ── */}
          <Reveal delay={0} className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {[
              { label: 'Floors', val: 32, suffix: '' },
              { label: 'Unit Types', val: 4, suffix: '+' },
              { label: 'Amenities', val: 18, suffix: '+' },
              { label: 'Sqm from', val: 28, suffix: '' },
            ].map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-num"><Counter to={s.val} suffix={s.suffix} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <hr className="divider mb-10" />

          {/* ── PROJECT OVERVIEW ── */}
          {projectOverview.length > 0 && (
            <section className="mb-14">
              <Reveal className="flex items-center gap-4 mb-7">
                <div>
                  <div className="label-tag mb-3">01 — Overview</div>
                  <h2 className="section-heading">The <em>Vision</em></h2>
                </div>
              </Reveal>
              <div className="grid gap-5 md:grid-cols-2">
                {projectOverview.map((item, i) => (
                  <Reveal key={item.id} delay={i * 120}>
                    <HoverCard className="card-dark h-full">
                      <div className="img-shine">
                        <RealtyImage filename={item.imageName} alt={item.title} className="img-cover" />
                      </div>
                      <div className="p-6">
                        <div className="gold-line mb-3" />
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 400, color: 'var(--ink-main)', marginBottom: 8 }}>{item.title}</h3>
                        <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(141,38,31,0.85)' }}>{item.description}</p>
                      </div>
                    </HoverCard>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <hr className="divider mb-14" />

          {/* ── AMENITIES ── */}
          {amenities && (
            <section className="mb-14">
              <Reveal className="flex items-center gap-4 mb-7">
                <div>
                  <div className="label-tag mb-3">02 — Lifestyle</div>
                  <h2 className="section-heading">World-Class <em>Amenities</em></h2>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <HoverCard className="card-dark">
                  <div className="md:grid" style={{ gridTemplateColumns: '1.3fr 1fr' }}>
                    <div className="img-shine">
                      <RealtyImage filename={amenities.name} alt={amenities.title} className="img-cover" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="gold-line mb-4" />
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: 'var(--ink-main)', marginBottom: 12 }}>{amenities.title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)' }}>{amenities.description}</p>
                      <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {['Pool Deck', 'Fitness Center', 'Sky Lounge', 'Co-working'].map((tag) => (
                          <span key={tag} style={{ fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', padding: '5px 12px', border: '1px solid rgba(141,38,31,0.3)', borderRadius: 999, color: 'var(--ink-soft)', background: 'rgba(240,229,193,0.8)' }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            </section>
          )}

          <hr className="divider mb-14" />

          {/* ── ENTRANCE ROTUNDA ── */}
          {entranceRotunda && (
            <section className="mb-14">
              <Reveal className="mb-7">
                <div className="label-tag mb-3">03 — Arrival</div>
                <h2 className="section-heading">The Grand <em>Entrance</em></h2>
              </Reveal>
              <Reveal delay={100}>
                <HoverCard className="card-dark">
                  <div className="md:grid" style={{ gridTemplateColumns: '1fr 1.3fr' }}>
                    <div className="p-8 flex flex-col justify-center" style={{ order: 1 }}>
                      <div className="gold-line mb-4" />
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 400, color: 'var(--ink-main)', marginBottom: 12 }}>{entranceRotunda.title}</h3>
                      <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)' }}>{entranceRotunda.description}</p>
                    </div>
                    <div className="img-shine" style={{ order: 2 }}>
                      <RealtyImage filename={entranceRotunda.name} alt={entranceRotunda.title} className="img-cover" />
                    </div>
                  </div>
                </HoverCard>
              </Reveal>
            </section>
          )}

          <hr className="divider mb-14" />

          {/* ── SOHO UNITS ── */}
          {sohoUnits.length > 0 && (
            <section className="mb-14">
              <Reveal className="mb-7">
                <div className="label-tag mb-3">04 — Residences</div>
                <h2 className="section-heading">SOHO <em>Units</em></h2>
                <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(141,38,31,0.8)', maxWidth: 520, lineHeight: 1.8 }}>
                  Thoughtfully designed live-work spaces with contemporary finishes, optimized for modern urban professionals.
                </p>
              </Reveal>
              <div className="flex flex-col gap-5">
                {sohoUnits.map((item, index) => {
                  const isRight = index % 2 === 1
                  return (
                    <Reveal key={item.id} delay={index * 80}>
                      <HoverCard className="card-dark">
                        <div
                          className="md:grid"
                          style={{ gridTemplateColumns: '1fr 1.1fr' }}
                        >
                          <div className={`img-shine ${isRight ? 'md:order-2' : 'md:order-1'}`}>
                            <RealtyImage filename={item.imageName} alt={item.title} className="img-cover" />
                          </div>
                          <div
                            className={`p-7 flex flex-col justify-center ${isRight ? 'md:order-1' : 'md:order-2'}`}
                          >
                            <span style={{ fontSize: 10, letterSpacing: '2px', color: 'rgba(141,38,31,0.8)', textTransform: 'uppercase', marginBottom: 8 }}>Unit {String(index + 1).padStart(2, '0')}</span>
                            <div className="gold-line mb-3" />
                            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--ink-main)', marginBottom: 10 }}>{item.title}</h3>
                            <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)' }}>{item.description}</p>
                          </div>
                        </div>
                      </HoverCard>
                    </Reveal>
                  )
                })}
              </div>
            </section>
          )}

          <hr className="divider mb-14" />

          {/* ── CONTACT ── */}
          <Reveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(140deg, rgba(240,229,193,0.75), rgba(212,207,174,0.55))',
                border: '1px solid rgba(141,38,31,0.3)',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 300, height: 200, background: 'radial-gradient(circle, rgba(117,0,12,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div className="label-tag mb-4 mx-auto" style={{ width: 'fit-content' }}>Get in Touch</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(32px,5vw,48px)', fontWeight: 300, color: 'var(--ink-main)', marginBottom: 8 }}>
                Begin Your <em style={{ color: 'var(--ink-soft)', fontStyle: 'italic' }}>Journey</em>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(141,38,31,0.85)', marginBottom: 32, lineHeight: 1.8 }}>
                Reach out to schedule a private viewing or request our full investment prospectus.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:contact@philippinescapesrealty.com" className="cta-btn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  Email Us
                </a>
                <a href="https://www.facebook.com/profile.php?id=61584272253847" target="_blank" rel="noreferrer" className="ghost-btn">
                  Facebook →
                </a>
              </div>
              <p style={{ marginTop: 24, fontSize: 12, color: 'rgba(141,38,31,0.7)', letterSpacing: '0.5px' }}>
                contact@philippinescapesrealty.com
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </>
  )
}