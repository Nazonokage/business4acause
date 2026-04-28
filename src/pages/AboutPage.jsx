export default function AboutPage() {
  return (
    <section id="about" className="px-6 pb-16 pt-14">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#8b5e3c2e] bg-[#f5ecd7ad] p-8">
        <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-bold text-[#3C2415]">About Us</h1>
        <p className="mb-3 leading-7 text-[rgba(60,36,21,0.8)]">
          AE Group of Companies brings together two service-focused businesses with one shared
          mission: deliver dependable solutions that support families, communities, and partner
          businesses.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold text-[#3C2415]">Our Businesses</h2>
        <p className="mb-2 leading-7 text-[rgba(60,36,21,0.8)]">
          <strong>Philippine Scapes Realty</strong> provides real estate support for property
          sales, leasing, and investment opportunities.
        </p>
        <p className="mb-3 leading-7 text-[rgba(60,36,21,0.8)]">
          <strong>AE Food Trading</strong> delivers reliable food supply and distribution for
          wholesale and retail channels.
        </p>

        <h2 className="mb-2 mt-6 text-2xl font-semibold text-[#3C2415]">Mission</h2>
        <p className="leading-7 text-[rgba(60,36,21,0.8)]">
          We aim to build lasting trust by offering practical services, transparent communication,
          and consistent customer support across both industries.
        </p>
      </div>
    </section>
  )
}