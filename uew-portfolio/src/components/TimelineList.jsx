/**
 * Reusable vertical timeline used by Employment History, Teaching
 * Experience and Positions Held — three sections that all share the same
 * "role, place, years, description" shape.
 */
export default function TimelineList({ items, renderTitle, renderSubtitle, renderYears, renderDescription }) {
  if (!items || items.length === 0) {
    return <p className="text-ink-text/60 italic">Details coming soon.</p>
  }

  return (
    <ol className="relative border-l-2 border-gold/40 pl-6 sm:pl-8 space-y-10">
      {items.map((item, idx) => (
        <li key={item._id || idx} className="relative">
          <span className="absolute -left-[31px] sm:-left-[39px] top-1 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-paper" />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-display text-lg sm:text-xl font-medium text-ink">
              {renderTitle(item)}
            </h3>
            <span className="font-label text-sm text-forest font-medium whitespace-nowrap">
              {renderYears(item)}
            </span>
          </div>
          {renderSubtitle && (
            <p className="text-sm text-ink-text/70 mt-0.5">{renderSubtitle(item)}</p>
          )}
          {renderDescription && item.description && (() => {
  const lines = String(renderDescription(item))
    .split('\n')
    .map((l) => l.trim().replace(/^[-•*]\s*/, ''))
    .filter(Boolean)

  return lines.length > 1 ? (
    <ul className="mt-2 space-y-1.5 list-disc pl-5 marker:text-gold text-ink-text/80 leading-relaxed">
      {lines.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  ) : (
    <p className="mt-2 text-ink-text/80 leading-relaxed">{lines[0]}</p>
  )
})()}
        </li>
      ))}
    </ol>
  )
}
