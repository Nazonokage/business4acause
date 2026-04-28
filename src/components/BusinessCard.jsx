import { Link } from 'react-router-dom'

export default function BusinessCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block rounded-2xl border border-[#8b5e3c29] bg-[#f5ecd7ad] p-7 text-inherit no-underline shadow-[0_6px_22px_rgba(60,36,21,0.08)] transition hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(60,36,21,0.13)]"
    >
      <h3 className="m-0 text-2xl text-[#3C2415]">{title}</h3>
      <p className="mt-2 text-[rgba(60,36,21,0.74)]">{description}</p>
      <span className="mt-3 inline-block font-bold text-[#6B4423]">Learn More</span>
    </Link>
  )
}
