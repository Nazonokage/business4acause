import { Link } from 'react-router-dom'
import BusinessCard from '../components/BusinessCard'

export default function LandingPage() {
  return (
    <section id="landing" className="flex flex-col gap-11 px-6 pb-16 pt-14">
      <div className="rounded-2xl border border-[#8b5e3c29] bg-[#f5ecd78f] px-5 py-7 text-center">
        <span className="inline-block rounded-full border border-[#6b442333] bg-[#6b44231a] px-5 py-2 text-xs font-semibold uppercase tracking-[1px] text-[#6B4423]">
          AE Group of Companies
        </span>
        <h1 className="mt-3 text-[clamp(32px,5vw,56px)] font-extrabold leading-[1.15] tracking-[-1px] text-[#75000C]">
          Philippine Scapes Realty
          <span className="mx-3 text-[#6B4423]">|</span>
          AE Food Trading
        </h1>
        <p className="mx-auto mt-4 max-w-[620px] text-lg leading-7 text-[rgba(60,36,21,0.82)]">
          Two trusted businesses under one group, delivering reliable service in real estate
          solutions and food trading.
        </p>
        <Link
          to="/about"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#6B4423] px-8 py-3.5 text-[15px] font-semibold text-[#F5ECD7] no-underline shadow-[0_4px_16px_rgba(107,68,35,0.35)] transition hover:-translate-y-0.5 hover:bg-[#5C3A21] hover:shadow-[0_6px_24px_rgba(92,58,33,0.45)]"
        >
          About Us
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <BusinessCard
          title="Philippine Scapes Realty"
          description="Professional support for property sales, leasing, and investment decisions."
          to="/realty"
        />
        <BusinessCard
          title="AE Food Trading"
          description="Reliable food supply and distribution for wholesale and retail partners."
          to="/food-trading"
        />
      </div>
    </section>
  )
}
