import { useMemo, useState } from 'react'
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
      onError={() => {
        setCandidateIndex((current) => {
          if (current >= candidates.length - 1) return current
          return current + 1
        })
      }}
    />
  )
}

const presentItem = (item, index) => ({
  id: `${item.name}-${index}`,
  title: item.title,
  description: item.description,
  imageName: item.name,
})

export default function RealtyPage() {
  const projectOverview = [byName('project-overview-main.jpg'), byName('project-overview-tower-details.jpg')]
    .filter(Boolean)
    .map(presentItem)

  const amenities = byName('amenities-area.jpg')
  const entranceRotunda = byName('entrance-rotunda.jpg')
  const sohoUnits = byPrefix('soho').map(presentItem)

  return (
    <section className="px-6 pb-16 pt-14">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 rounded-2xl border border-[#8b5e3c2e] bg-[#f5ecd7ad] p-8">
        <header className="rounded-2xl border border-[#8b5e3c33] bg-[linear-gradient(140deg,rgba(117,0,12,0.08),rgba(107,68,35,0.08))] p-5">
          <p className="mb-2 text-xs font-bold uppercase tracking-[1px] text-[#6B4423]">
            Avenir Iloilo Presentation
          </p>
          <h1 className="mb-3 text-[clamp(32px,5vw,48px)] font-bold text-[#3C2415]">
            Philippine Scapes Realty
          </h1>
          <p className="leading-7 text-[rgba(60,36,21,0.8)]">
            A guided walkthrough of the development: project overview, lifestyle amenities,
            entrance rotunda, and SOHO unit offerings.
          </p>
        </header>

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-[#3C2415]">Project Overview</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {projectOverview.map((item) => (
              <article
                key={item.id}
                className="overflow-hidden rounded-2xl border border-[#8b5e3c2e] bg-[#ffffff8a] shadow-[0_10px_26px_rgba(60,36,21,0.08)]"
              >
                <RealtyImage
                  filename={item.imageName}
                  alt={item.title}
                  className="block w-full object-cover [aspect-ratio:16/10]"
                />
                <div className="px-4 py-4">
                  <h3 className="m-0 text-xl font-semibold text-[#3C2415]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[rgba(60,36,21,0.78)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {amenities && (
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-[#3C2415]">Amenities</h2>
            <article className="grid overflow-hidden rounded-2xl border border-[#8b5e3c2e] bg-[#ffffff8a] shadow-[0_10px_26px_rgba(60,36,21,0.08)] md:grid-cols-[1.2fr_1fr]">
              <RealtyImage
                filename={amenities.name}
                alt={amenities.title}
                className="block w-full object-cover [aspect-ratio:16/10]"
              />
              <div className="px-4 py-4">
                <h3 className="m-0 text-xl font-semibold text-[#3C2415]">{amenities.title}</h3>
                <p className="mt-2 leading-7 text-[rgba(60,36,21,0.78)]">{amenities.description}</p>
              </div>
            </article>
          </section>
        )}

        {entranceRotunda && (
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-semibold text-[#3C2415]">Entrance Rotunda</h2>
            <article className="grid overflow-hidden rounded-2xl border border-[#8b5e3c2e] bg-[#ffffff8a] shadow-[0_10px_26px_rgba(60,36,21,0.08)] md:grid-cols-[1.2fr_1fr]">
              <RealtyImage
                filename={entranceRotunda.name}
                alt={entranceRotunda.title}
                className="block w-full object-cover [aspect-ratio:16/10]"
              />
              <div className="px-4 py-4">
                <h3 className="m-0 text-xl font-semibold text-[#3C2415]">{entranceRotunda.title}</h3>
                <p className="mt-2 leading-7 text-[rgba(60,36,21,0.78)]">
                  {entranceRotunda.description}
                </p>
              </div>
            </article>
          </section>
        )}

        <section className="flex flex-col gap-4">
          <h2 className="text-3xl font-semibold text-[#3C2415]">SOHO Units</h2>
          <div className="flex flex-col gap-3.5">
            {sohoUnits.map((item, index) => (
              <article
                key={item.id}
                className="grid overflow-hidden rounded-2xl border border-[#8b5e3c2e] bg-[#ffffff8a] shadow-[0_10px_26px_rgba(60,36,21,0.08)] md:grid-cols-[1fr_1.1fr]"
              >
                <RealtyImage
                  filename={item.imageName}
                  alt={item.title}
                  className={`block w-full object-cover [aspect-ratio:16/10] ${index % 2 === 1 ? 'md:order-2' : ''}`}
                />
                <div className={`p-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="m-0 text-xl font-semibold text-[#3C2415]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[rgba(60,36,21,0.78)]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="leading-7 text-[rgba(60,36,21,0.8)]">
          <h2 className="mb-2 text-3xl font-semibold text-[#3C2415]">Contact</h2>
          <p>Email: contact@philippinescapesrealty.com</p>
          <p>
            Facebook:{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#6B4423]"
            >
              Philippine Scapes Realty
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
