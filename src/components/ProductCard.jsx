export default function ProductCard({ name, description, image, onOpen }) {
  return (
    <button
      type="button"
      className="rounded-2xl border border-sedona-chili/25 bg-sedona-mushroom/60 p-4 text-left backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-sedona-chili/45 hover:shadow-[0_14px_32px_rgba(117,0,12,0.2)]"
      onClick={onOpen}
    >
      <img src={image} alt={name} className="mb-3 block w-full rounded-lg object-cover [aspect-ratio:4/3]" />
      <h3 className="mb-2 text-3xl font-semibold text-sedona-burgundy">{name}</h3>
      <p className="mb-2 text-sm leading-7 text-sedona-chili/90">{description}</p>
      <span className="text-xs italic tracking-wide text-sedona-chili/80">Click to view details</span>
    </button>
  )
}
