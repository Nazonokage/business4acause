export default function ContactPage() {
  return (
    <section className="px-6 pb-16 pt-14">
      <div className="mx-auto max-w-4xl rounded-3xl border border-sedona-chili/25 bg-sedona-mushroom/70 p-8 shadow-[0_20px_50px_rgba(117,0,12,0.14)] backdrop-blur-sm">
        <h1 className="mb-4 text-[clamp(42px,6vw,60px)] font-semibold leading-[1.02] text-sedona-burgundy">
          Contact Us
        </h1>
        <p className="mb-3 leading-8 text-sedona-chili/90">
          Reach out to us through our current contact channels below.
        </p>

        <div className="space-y-2 leading-8 text-sedona-chili/90">
          <p>Email: contact@aegroupcompanies.com</p>
          <p>
            Philippine Scapes Realty Facebook:{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
              className="font-semibold uppercase tracking-wider text-sedona-chili"
            >
              Visit Page
            </a>
          </p>
          <p>AE Food Trading Facebook: To be added soon.</p>
        </div>
      </div>
    </section>
  )
}
