export default function ContactPage() {
  return (
    <section className="px-6 pb-16 pt-14">
      <div className="mx-auto max-w-4xl rounded-2xl border border-[#8b5e3c2e] bg-[#f5ecd7ad] p-8">
        <h1 className="mb-4 text-[clamp(32px,5vw,48px)] font-bold text-[#3C2415]">Contact Us</h1>
        <p className="mb-3 leading-7 text-[rgba(60,36,21,0.8)]">
          Reach out to us through our current contact channels below.
        </p>

        <div className="space-y-2 leading-7 text-[rgba(60,36,21,0.8)]">
          <p>Email: contact@aegroupcompanies.com</p>
          <p>
            Philippine Scapes Realty Facebook:{' '}
            <a
              href="https://www.facebook.com/profile.php?id=61584272253847"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-[#6B4423]"
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
