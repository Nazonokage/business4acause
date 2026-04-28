export default function ProductCard({ name, description, image, onOpen }) {
  return (
    <button
      type="button"
      className="rounded-xl border border-[#8b5e3c2e] bg-[#ffffff8a] p-4 text-left transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(60,36,21,0.12)]"
      onClick={onOpen}
    >
      <img src={image} alt={name} className="mb-3 block w-full rounded-lg object-cover [aspect-ratio:4/3]" />
      <h3 className="mb-2 text-lg font-semibold text-[#3C2415]">{name}</h3>
      <p className="mb-2 text-sm leading-6 text-[rgba(60,36,21,0.78)]">{description}</p>
      <span className="text-xs italic text-[rgba(60,36,21,0.6)]">Click to view details</span>
    </button>
  )
}
