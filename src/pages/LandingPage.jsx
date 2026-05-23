import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter, Reveal } from '../components/motion'
import PageMeta from '../components/PageMeta'

export default function LandingPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  useEffect(() => { setTimeout(() => setHeroLoaded(true), 80) }, [])

  return (
    <>
      <PageMeta
        title="UgyunKita | Philippine Realty & Food Trading Philippines"
        description="UgyunKita official website — Philippine Scapes Realty, AE Food Trading, and environmental awareness initiatives across the Philippines."
        path="/"
      />
      <style>{`
        .land-root {
          --burgundy: #75000C;
          --chili: #8D261F;
          --flax: #D4CFAE;
          --mushroom: #F0E5C1;
          font-family: 'DM Sans', sans-serif;
          color: var(--burgundy);
          font-size: 1.05rem;
          min-height: 100vh;
        }

        .land-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
          color: var(--chili); padding: 6px 14px;
          border: 1px solid rgba(141,38,31,0.35); border-radius: 999px;
          background: rgba(240,229,193,0.72);
        }
        .land-label::before {
          content:''; width:6px; height:6px; border-radius:50%;
          background: var(--chili); display:block;
        }

        .land-divider { border: none; border-top: 1px solid rgba(141,38,31,0.2); margin: 0; }

        .land-card {
          background: rgba(240,229,193,0.8); border: 1px solid rgba(141,38,31,0.2);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 46px rgba(117,0,12,0.1);
          transition: box-shadow 0.4s ease, border-color 0.4s ease, transform 0.35s cubic-bezier(.22,1,.36,1);
          will-change: transform;
        }
        .land-card:hover {
          border-color: rgba(141,38,31,0.38);
          box-shadow: 0 30px 60px rgba(117,0,12,0.18), 0 0 0 1px rgba(141,38,31,0.1);
          transform: translateY(-4px);
        }

        .land-gold-line { width: 48px; height: 1px; background: linear-gradient(90deg, var(--chili), transparent); }

        .land-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; border-radius: 999px;
          background: linear-gradient(135deg, var(--burgundy), var(--chili));
          color: var(--mushroom); font-size: 13px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 30px rgba(117,0,12,0.3);
        }
        .land-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(141,38,31,0.38); }

        .land-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 999px;
          border: 1px solid rgba(141,38,31,0.4); color: var(--chili);
          font-size: 13px; font-weight: 400; letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none; transition: all 0.25s ease;
        }
        .land-ghost:hover { background: rgba(240,229,193,0.8); border-color: var(--chili); }

        /* Hero */
        .land-hero {
          position: relative; overflow: hidden; border-radius: 24px;
          background: linear-gradient(155deg, rgba(240,229,193,0.96), rgba(212,207,174,0.92));
          min-height: 500px; display: flex; align-items: flex-end;
        }
        .land-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(141,38,31,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,38,31,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .land-hero-glow-l {
          position: absolute; top: -60px; left: -60px; width: 360px; height: 360px;
          background: radial-gradient(circle, rgba(117,0,12,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .land-hero-glow-r {
          position: absolute; bottom: -40px; right: -40px; width: 280px; height: 280px;
          background: radial-gradient(circle, rgba(141,38,31,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .land-hero-diagonal {
          position: absolute; inset: 0;
          background: linear-gradient(115deg, transparent 55%, rgba(141,38,31,0.07) 100%);
          pointer-events: none;
        }
        .land-hero-content { position: relative; z-index: 2; padding: 52px; width: 100%; }
        .land-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 8vw, 80px);
          font-weight: 300; line-height: 0.95; letter-spacing: -2px;
          color: var(--burgundy);
        }
        .land-hero-title em { font-style: italic; color: var(--chili); display: block; }
        .land-hero-sep {
          display: inline-block; width: 3px; height: 3px; border-radius: 50%;
          background: var(--chili); margin: 0 10px; vertical-align: middle; opacity: 0.6;
        }

        /* Business cards */
        .biz-card-inner {
          display: flex; flex-direction: column; height: 100%; padding: 36px;
        }
        .biz-icon-wrap {
          width: 48px; height: 48px; border-radius: 12px;
          border: 1px solid rgba(141,38,31,0.25);
          background: linear-gradient(135deg, rgba(240,229,193,0.9), rgba(212,207,174,0.6));
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 20px;
        }
        .biz-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 400; color: var(--burgundy); line-height: 1.15;
          margin-bottom: 10px;
        }
        .biz-desc {
          font-size: 14px; line-height: 1.85;
          color: rgba(141,38,31,0.8); flex: 1;
        }
        .biz-tag {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: var(--chili); opacity: 0.7; margin-bottom: 6px;
        }

        /* Stat cards */
        .land-stat {
          border: 1px solid rgba(141,38,31,0.22);
          background: linear-gradient(135deg, rgba(240,229,193,0.7), rgba(212,207,174,0.5));
          border-radius: 16px; padding: 28px 20px; text-align: center; backdrop-filter: blur(8px);
        }
        .land-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 44px; font-weight: 300; color: var(--burgundy); line-height: 1;
        }
        .land-stat-label {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(141,38,31,0.7); margin-top: 6px;
        }

        /* Section heading */
        .land-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(30px, 4vw, 44px); font-weight: 300;
          color: var(--burgundy); line-height: 1.15;
        }
        .land-heading em { font-style: italic; color: var(--chili); }

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
        .delay-4 { animation-delay: 0.6s; }
      `}</style>

      <div className="land-root">
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-10">

          {/* ── HERO ── */}
          <div
            className="land-hero mb-10"
            style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
          >
            <div className="land-hero-grid" />
            <div className="land-hero-glow-l" />
            <div className="land-hero-glow-r" />
            <div className="land-hero-diagonal" />
            <div className="land-hero-content">
              <div className="land-label fade-up" style={{ marginBottom: 24 }}>
                AE Group of Companies
              </div>
              <h1 className="land-hero-title fade-up delay-1">
                Philippine Scapes
                <em>
                  Realty
                  <span className="land-hero-sep" />
                  Food Trading.
                </em>
              </h1>
              <p
                className="fade-up delay-2"
                style={{
                  marginTop: 22, fontSize: 15, color: 'rgba(141,38,31,0.82)',
                  maxWidth: 500, lineHeight: 1.85,
                }}
              >
                Two trusted businesses under one group — delivering reliable service
                in real estate solutions and food supply across the Philippines.
              </p>
              <div className="fade-up delay-3" style={{ marginTop: 34, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link to="/about" className="land-cta">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                  About Us
                </Link>
                <Link to="/realty" className="land-ghost">Explore Properties →</Link>
                <Link to="/environmental-awareness" className="land-ghost">Environmental Awareness →</Link>
              </div>
            </div>
          </div>

          {/* ── STATS ── */}
          <Reveal delay={0} className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {[
              { label: 'Years Active', val: 5, suffix: '+' },
              { label: 'Properties Listed', val: 12, suffix: '+' },
              { label: 'Trading Partners', val: 30, suffix: '+' },
              { label: 'Cities Served', val: 8, suffix: '' },
            ].map((s) => (
              <div key={s.label} className="land-stat">
                <div className="land-stat-num"><Counter to={s.val} suffix={s.suffix} /></div>
                <div className="land-stat-label">{s.label}</div>
              </div>
            ))}
          </Reveal>

          <hr className="land-divider mb-10" />

          {/* ── BUSINESSES ── */}
          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="land-label mb-4">01 — Our Companies</div>
              <h2 className="land-heading">Two Pillars, <em>One Group</em></h2>
              <p style={{ marginTop: 12, fontSize: 14, color: 'rgba(141,38,31,0.78)', maxWidth: 500, lineHeight: 1.85 }}>
                Each business operates with its own distinct identity, united by the same commitment to quality and trust.
              </p>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-2">
              {/* Realty Card */}
              <Reveal delay={0}>
                <div className="land-card" style={{ height: '100%' }}>
                  <div
                    style={{
                      height: 6,
                      background: 'linear-gradient(90deg, var(--burgundy), var(--chili), transparent)',
                    }}
                  />
                  <div className="biz-card-inner">
                    <div className="biz-tag">Real Estate</div>
                    <div className="biz-icon-wrap">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </div>
                    <div className="land-gold-line mb-4" />
                    <h3 className="biz-title">Philippine Scapes <em style={{ fontStyle: 'italic', color: 'var(--chili)' }}>Realty</em></h3>
                    <p className="biz-desc">
                      Professional support for property sales, leasing, and investment decisions.
                      From condominiums in Iloilo to prime real estate opportunities across the Philippines.
                    </p>
                    <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                      {['Property Sales', 'Leasing', 'Investment'].map((tag) => (
                        <span key={tag} style={{
                          fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase',
                          padding: '5px 12px', border: '1px solid rgba(141,38,31,0.28)',
                          borderRadius: 999, color: 'var(--chili)',
                          background: 'rgba(240,229,193,0.7)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <Link to="/realty" className="land-cta" style={{ alignSelf: 'flex-start', fontSize: 12 }}>
                      View Properties →
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Food Trading Card */}
              <Reveal delay={120}>
                <div className="land-card" style={{ height: '100%' }}>
                  <div
                    style={{
                      height: 6,
                      background: 'linear-gradient(90deg, var(--chili), rgba(212,207,174,0.8), transparent)',
                    }}
                  />
                  <div className="biz-card-inner">
                    <div className="biz-tag">Food & Distribution</div>
                    <div className="biz-icon-wrap">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
                      </svg>
                    </div>
                    <div className="land-gold-line mb-4" />
                    <h3 className="biz-title">AE Food <em style={{ fontStyle: 'italic', color: 'var(--chili)' }}>Trading</em></h3>
                    <p className="biz-desc">
                      Reliable food supply and distribution for wholesale and retail partners.
                      Consistent quality, flexible fulfillment, and dependable delivery across key areas.
                    </p>
                    <div style={{ marginTop: 28, display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                      {['Wholesale', 'Retail', 'Distribution'].map((tag) => (
                        <span key={tag} style={{
                          fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase',
                          padding: '5px 12px', border: '1px solid rgba(141,38,31,0.28)',
                          borderRadius: 999, color: 'var(--chili)',
                          background: 'rgba(240,229,193,0.7)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <Link to="/food-trading" className="land-ghost" style={{ alignSelf: 'flex-start', fontSize: 12 }}>
                      Learn More →
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          <hr className="land-divider mb-14" />

          {/* ── WHY AE GROUP ── */}
          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="land-label mb-4">02 — Our Values</div>
              <h2 className="land-heading">Built on <em>Trust</em></h2>
            </Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  ),
                  title: 'Integrity First',
                  body: 'Every transaction and partnership is built on transparency and honest dealings — no shortcuts, no compromise.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  ),
                  title: 'Consistent Quality',
                  body: 'Whether in real estate advisory or food supply, our standards remain high across every product and service we deliver.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--chili)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  title: 'Reliable Timelines',
                  body: 'We respect your time. From property viewings to order deliveries, we commit to schedules and honor them.',
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100}>
                  <div className="land-card" style={{ padding: 28, height: '100%' }}>
                    <div className="biz-icon-wrap">{item.icon}</div>
                    <div className="land-gold-line mb-3" />
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 20, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 10,
                    }}>{item.title}</h3>
                    <p style={{ fontSize: 13, lineHeight: 1.85, color: 'rgba(141,38,31,0.82)' }}>{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <hr className="land-divider mb-14" />

          {/* ── CTA BANNER ── */}
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
                width: 400, height: 240,
                background: 'radial-gradient(circle, rgba(117,0,12,0.12) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div className="land-label mb-5 mx-auto" style={{ width: 'fit-content' }}>Get Started</div>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(30px,5vw,46px)', fontWeight: 300,
                color: 'var(--burgundy)', marginBottom: 10,
              }}>
                Ready to Work <em style={{ fontStyle: 'italic', color: 'var(--chili)' }}>Together?</em>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(141,38,31,0.82)', marginBottom: 32, lineHeight: 1.8, maxWidth: 480, margin: '0 auto 32px' }}>
                Whether you're looking for your next property or a reliable supply partner — we're here to help.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/realty" className="land-cta">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                  Explore Realty
                </Link>
                <Link to="/food-trading" className="land-ghost">Food Trading →</Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </>
  )
}