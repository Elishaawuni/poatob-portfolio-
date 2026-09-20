export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-3xl sm:text-4xl font-semibold tracking-tight ${
          light ? 'text-paper' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-paper/80' : 'text-ink-text/75'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
