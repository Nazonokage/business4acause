import PageMeta from '../components/PageMeta'

export default function AboutPage() {
  return (
    <section id="about" className="px-6 pb-16 pt-14">
      <PageMeta
        title="About UgyunKita | AE Group of Companies Philippines"
        description="About AE Group of Companies — Philippine Scapes Realty and AE Food Trading united by quality, integrity, and community-focused service."
        path="/about"
      />
      <div className="mx-auto max-w-4xl rounded-3xl border border-sedona-chili/25 bg-sedona-mushroom/70 p-8 shadow-[0_20px_50px_rgba(117,0,12,0.14)] backdrop-blur-sm">
        <h1 className="mb-4 text-[clamp(42px,6vw,60px)] font-semibold leading-[1.02] text-sedona-burgundy">
          About Us
        </h1>
        <p className="mb-3 leading-8 text-sedona-chili/90">
          AE Group of Companies brings together two service-focused businesses with one shared
          mission: deliver dependable solutions that support families, communities, and partner
          businesses.
        </p>

        <h2 className="mb-2 mt-6 text-4xl font-semibold text-sedona-burgundy">Our Businesses</h2>
        <p className="mb-2 leading-8 text-sedona-chili/90">
          <strong>Philippine Scapes Realty</strong> provides real estate support for property
          sales, leasing, and investment opportunities.
        </p>
        <p className="mb-3 leading-8 text-sedona-chili/90">
          <strong>AE Food Trading</strong> delivers reliable food supply and distribution for
          wholesale and retail channels.
        </p>

        <h2 className="mb-2 mt-6 text-4xl font-semibold text-sedona-burgundy">Mission</h2>
        <p className="leading-8 text-sedona-chili/90">
          We aim to build lasting trust by offering practical services, transparent communication,
          and consistent customer support across both industries.
        </p>
      </div>
    </section>
  )
}