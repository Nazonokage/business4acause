import { Link } from 'react-router-dom'

export default function BusinessCard({ title, description, to }) {
  return (
    <Link
      to={to}
      className="block rounded-3xl border border-sedona-chili/25 bg-sedona-mushroom/70 p-7 text-inherit no-underline shadow-[0_10px_28px_rgba(117,0,12,0.12)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-sedona-chili/45 hover:shadow-[0_18px_36px_rgba(117,0,12,0.18)]"
    >
      <h3 className="m-0 text-4xl leading-tight text-sedona-burgundy">{title}</h3>
      <p className="mt-3 text-[15px] leading-7 text-sedona-chili/90">{description}</p>
      <span className="mt-4 inline-block font-semibold uppercase tracking-wider text-sedona-chili">
        Learn More
      </span>
    </Link>
  )
}
