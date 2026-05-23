import PageMeta from '../components/PageMeta'

export default function ContactPage() {
  const copy = (text) => navigator.clipboard.writeText(text)

  const contacts = [
    {
      label: 'General Enquiries',
      items: [
        { icon: '✉', text: 'contact@aegroupcompanies.com', href: 'mailto:contact@aegroupcompanies.com' },
        { icon: '✉', text: 'baldecanasgladwin864@gmail.com', href: 'mailto:baldecanasgladwin864@gmail.com' },
        { icon: '☎', text: '0912 724 0107', copy: '09127240107' },
        {
          icon: '⊞',
          text: 'Philippine Scapes Realty — Facebook',
          href: 'https://www.facebook.com/profile.php?id=61584272253847',
        },
        { icon: '⊞', text: 'AE Food Trading — Facebook (coming soon)' },
      ],
    },
    {
      label: 'Developer',
      note: 'Project inquiries & collaborations',
      items: [
        { icon: '✉', text: 'joshinfotech48@gmail.com', href: 'mailto:joshinfotech48@gmail.com' },
        { icon: '⌥', text: 'github.com/Nazonokage', href: 'https://github.com/Nazonokage' },
      ],
    },
  ]

  return (
    <section className="min-h-screen px-6 pb-20 pt-14">
      <PageMeta
        title="Contact UgyunKita | Realty & Food Trading Enquiries"
        description="Contact AE Group of Companies for Philippine Scapes Realty, AE Food Trading, and general enquiries — email, phone, and social links."
        path="/contact"
      />
      <div className="mx-auto max-w-2xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sedona-chili/60">
            AE Group of Companies
          </p>
          <h1 className="text-[clamp(48px,8vw,72px)] font-semibold leading-none text-sedona-burgundy">
            Contact Us
          </h1>
          <div className="mt-4 h-px w-16 bg-sedona-chili/40" />
        </div>

        {/* Contact cards */}
        <div className="space-y-6">
          {contacts.map((section) => (
            <div
              key={section.label}
              className="rounded-2xl border border-sedona-chili/20 bg-sedona-mushroom/70 px-7 py-6 shadow-[0_8px_32px_rgba(117,0,12,0.10)] backdrop-blur-sm"
            >
              <div className="mb-5 flex items-baseline gap-3">
                <h2 className="text-lg font-semibold text-sedona-burgundy">{section.label}</h2>
                {section.note && (
                  <span className="text-sm text-sedona-chili/60">{section.note}</span>
                )}
              </div>

              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-0.5 w-6 text-center text-lg text-sedona-chili/50 select-none">
                      {item.icon}
                    </span>
                    <div className="flex flex-1 flex-wrap items-center gap-3">
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer"
                          className="text-base font-medium text-sedona-burgundy underline underline-offset-4 decoration-sedona-chili/30 hover:decoration-sedona-chili transition-all"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-base font-medium text-sedona-chili/80">{item.text}</span>
                      )}
                      {item.copy && (
                        <button
                          onClick={() => copy(item.copy)}
                          className="rounded-md border border-sedona-chili/25 bg-sedona-mushroom px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sedona-chili transition-all hover:bg-sedona-chili hover:text-sedona-mushroom"
                        >
                          Copy
                        </button>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-sedona-chili/50">
          We typically respond within 1–2 business days.
        </p>
      </div>
    </section>
  )
}