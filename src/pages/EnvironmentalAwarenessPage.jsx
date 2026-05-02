import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Counter, Reveal } from '../components/motion'
import ImageLightbox from '../components/ImageLightbox'

const images = {
  volunteer: '/New%20folder/volunteer_coastal_forest.jpg',
  goals: '/New%20folder/environmental_goals_banner.jpg',
  collage: '/New%20folder/eco_action_collage.jpg',
  cleanup: '/New%20folder/international_coastal_cleanup_team.jpg',
}

export default function EnvironmentalAwarenessPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  useEffect(() => {
    setTimeout(() => setHeroLoaded(true), 80)
  }, [])

  return (
    <>
      <style>{`
        .ea-root {
          --burgundy: #75000C;
          --chili: #8D261F;
          --flax: #D4CFAE;
          --mushroom: #F0E5C1;
          font-family: 'DM Sans', sans-serif;
          color: var(--burgundy);
          min-height: 100vh;
        }

        .ea-label {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 10px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase;
          color: var(--chili); padding: 6px 14px;
          border: 1px solid rgba(141,38,31,0.35); border-radius: 999px;
          background: rgba(240,229,193,0.72);
        }
        .ea-label::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--chili); display: block;
        }

        .ea-divider { border: none; border-top: 1px solid rgba(141,38,31,0.2); margin: 0; }
        .ea-gold-line { width: 48px; height: 1px; background: linear-gradient(90deg, var(--chili), transparent); }

        .ea-card {
          background: rgba(240,229,193,0.8); border: 1px solid rgba(141,38,31,0.2);
          border-radius: 20px; overflow: hidden;
          box-shadow: 0 20px 46px rgba(117,0,12,0.12);
          transition: box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .ea-card:hover {
          border-color: rgba(141,38,31,0.38);
          box-shadow: 0 28px 56px rgba(117,0,12,0.18), 0 0 0 1px rgba(141,38,31,0.1);
        }

        .ea-img-wrap { position: relative; overflow: hidden; }
        .ea-img-wrap::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(117,0,12,0.08) 0%, transparent 60%);
          pointer-events: none;
        }
        .ea-img { width: 100%; object-fit: cover; display: block; aspect-ratio: 16/10; }
        .ea-img-click {
          transition: transform 0.25s ease;
        }
        .ea-card:hover .ea-img-click { transform: scale(1.02); }

        .ea-hero {
          position: relative; overflow: hidden; border-radius: 24px;
          background: linear-gradient(155deg, rgba(240,229,193,0.96), rgba(212,207,174,0.92));
          min-height: 500px; display: flex; align-items: flex-end;
        }
        .ea-hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(141,38,31,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(141,38,31,0.06) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .ea-hero-glow {
          position: absolute; top: -70px; right: -70px; width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(117,0,12,0.14) 0%, transparent 70%);
          pointer-events: none;
        }
        .ea-hero-content { position: relative; z-index: 2; padding: 52px; width: 100%; }
        .ea-hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 8vw, 84px);
          font-weight: 300; line-height: 0.95; letter-spacing: -2px;
          color: var(--burgundy);
        }
        .ea-hero-title span { color: var(--chili); display: block; font-style: italic; }

        .ea-stat {
          border: 1px solid rgba(141,38,31,0.22);
          background: linear-gradient(135deg, rgba(240,229,193,0.7), rgba(212,207,174,0.5));
          border-radius: 16px; padding: 28px 20px; text-align: center;
        }
        .ea-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 50px; font-weight: 300; color: var(--burgundy); line-height: 1;
        }
        .ea-stat-label {
          font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
          color: rgba(141,38,31,0.72); margin-top: 6px;
        }

        .ea-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(34px, 5vw, 50px); font-weight: 300;
          color: var(--burgundy); line-height: 1.1;
        }
        .ea-heading em { font-style: italic; color: var(--chili); }

        .ea-pill {
          font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase;
          padding: 5px 12px; border: 1px solid rgba(141,38,31,0.3);
          border-radius: 999px; color: var(--chili);
          background: rgba(240,229,193,0.8);
        }

        .ea-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 14px 32px; border-radius: 999px;
          background: linear-gradient(135deg, var(--burgundy), var(--chili));
          color: var(--mushroom); font-size: 13px; font-weight: 500;
          letter-spacing: 1.5px; text-transform: uppercase;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 8px 30px rgba(117,0,12,0.3);
        }
        .ea-cta:hover { transform: translateY(-2px); box-shadow: 0 16px 48px rgba(141,38,31,0.38); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }
        .delay-1 { animation-delay: 0.15s; }
        .delay-2 { animation-delay: 0.3s; }
      `}</style>

      <div className="ea-root">
        <div className="mx-auto max-w-5xl px-5 pb-24 pt-10">
          <div className="ea-hero mb-10" style={{ opacity: heroLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}>
            <div className="ea-hero-grid" />
            <div className="ea-hero-glow" />
            <div className="ea-hero-content">
              <div className="ea-label fade-up" style={{ marginBottom: 20 }}>Environmental Commitment</div>
              <h1 className="ea-hero-title fade-up delay-1">
                Ocean
                <span>Conservation.</span>
              </h1>
              <p className="fade-up delay-2" style={{ marginTop: 20, fontSize: 15, color: 'rgba(141,38,31,0.85)', maxWidth: 560, lineHeight: 1.85 }}>
                Ocean conservation is the protection, preservation, and sustainable management of the world's oceans and marine ecosystems. It focuses on keeping our seas healthy for biodiversity, climate stability, and human livelihoods.
              </p>
            </div>
          </div>

          <Reveal delay={0} className="grid grid-cols-2 gap-4 mb-10 md:grid-cols-4">
            {[
              { label: 'Major Activities', val: 4, suffix: '' },
              { label: 'Core Goals', val: 4, suffix: '' },
              { label: 'Community Partners', val: 2, suffix: '+' },
              { label: 'Shared Mission', val: 1, suffix: '' },
            ].map((item) => (
              <div key={item.label} className="ea-stat">
                <div className="ea-stat-num"><Counter to={item.val} suffix={item.suffix} /></div>
                <div className="ea-stat-label">{item.label}</div>
              </div>
            ))}
          </Reveal>

          <hr className="ea-divider mb-10" />

          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="ea-label mb-3">01 - Why It Matters</div>
              <h2 className="ea-heading">A Healthy Ocean Means a <em>Livable Planet</em></h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="ea-card p-8">
                <div className="ea-gold-line mb-4" />
                <p style={{ fontSize: 14, lineHeight: 1.9, color: 'rgba(141,38,31,0.85)', marginBottom: 20 }}>
                  A healthy ocean means a stable climate, food security, and thriving coastal communities. Conservation is not just about saving fish - it is about protecting the system that keeps the planet livable.
                </p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Climate Stability', 'Food Security', 'Biodiversity', 'Coastal Communities'].map((tag) => (
                    <span key={tag} className="ea-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>

          <hr className="ea-divider mb-14" />

          <section className="mb-14">
            <Reveal className="mb-7">
              <div className="ea-label mb-3">02 - Activities</div>
              <h2 className="ea-heading">Our Environmental <em>Awareness Actions</em></h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {[
                {
                  title: 'Individual Volunteer',
                  body: 'A portrait of a dedicated volunteer standing amidst a lush mangrove forest, representing the personal commitment of our team to environmental stewardship.',
                  image: images.volunteer,
                },
                {
                  title: 'Mission Statement Overlay',
                  body: 'A promotional visual highlighting our environmental objectives: creating green spaces, conserving local flora and fauna, reducing impact, and encouraging citizen participation.',
                  image: images.goals,
                },
                {
                  title: 'Activity Collage',
                  body: 'A collection of moments showing our team in action, including coastal waste collection, mangrove planting, and community engagement with the ISUFST Marine Biological Society.',
                  image: images.collage,
                  square: true,
                },
                {
                  title: 'Group Coastal Clean-up',
                  body: 'Our team collaborating with the Philippine Coast Guard and ISUFST volunteers during an International Coastal Clean-Up event to protect our shorelines.',
                  image: images.cleanup,
                },
              ].map((activity, index) => (
                <Reveal key={activity.title} delay={index * 90}>
                  <article className="ea-card h-full">
                    <div className="ea-img-wrap">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="ea-img ea-img-click clickable-image"
                        loading="lazy"
                        onClick={() => setActiveImage({ src: activity.image, alt: activity.title })}
                        style={activity.square ? { aspectRatio: '1/1', objectPosition: 'center center' } : undefined}
                      />
                    </div>
                    <div className="p-6">
                      <div className="ea-gold-line mb-3" />
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 400, color: 'var(--burgundy)', marginBottom: 10 }}>
                        {activity.title}
                      </h3>
                      <p style={{ fontSize: 14, lineHeight: 1.85, color: 'rgba(141,38,31,0.85)' }}>{activity.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <hr className="ea-divider mb-14" />

          <Reveal>
            <div
              className="rounded-2xl p-10 text-center"
              style={{
                background: 'linear-gradient(140deg, rgba(240,229,193,0.78), rgba(212,207,174,0.55))',
                border: '1px solid rgba(141,38,31,0.28)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className="ea-label mb-4 mx-auto" style={{ width: 'fit-content' }}>Get Involved</div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(30px,5vw,46px)', fontWeight: 300, color: 'var(--burgundy)', marginBottom: 8 }}>
                Join Our <em style={{ color: 'var(--chili)', fontStyle: 'italic' }}>Awareness Activities</em>
              </h2>
              <p style={{ fontSize: 14, color: 'rgba(141,38,31,0.82)', marginBottom: 30, lineHeight: 1.8, maxWidth: 540, margin: '0 auto 30px' }}>
                We believe meaningful environmental action happens through collaboration. Partner with us in creating cleaner and healthier coastlines for future generations.
              </p>
              <Link to="/contact" className="ea-cta">Contact Our Team</Link>
            </div>
          </Reveal>

        </div>
      </div>

      <ImageLightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </>
  )
}
