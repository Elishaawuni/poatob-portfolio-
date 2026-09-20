import { useMemo, useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import { HiOutlineExternalLink, HiOutlineDocumentText } from 'react-icons/hi'

export default function Publications({ publications }) {
  const [filter, setFilter] = useState('All')

  const types = useMemo(() => {
    const set = new Set(publications?.map((p) => p.type).filter(Boolean))
    return ['All', ...set]
  }, [publications])

  const filtered =
    filter === 'All' ? publications : publications?.filter((p) => p.type === filter)

  return (
    <section id="publications" className="section-pad bg-navy text-paper">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Scholarship"
          title="Publications"
          light
          description="Journal articles, book chapters and conference papers."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`font-label text-sm px-4 py-1.5 rounded-full border transition-colors ${
                filter === t
                  ? 'bg-gold text-ink border-gold'
                  : 'border-paper/30 text-paper/80 hover:border-gold-light hover:text-gold-light'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <ul className="space-y-4">
          {filtered?.map((p) => (
            <li key={p._id} className="bg-paper/[0.04] border border-paper/10 rounded-xl p-5 flex items-start gap-4">
              <HiOutlineDocumentText className="text-gold-light text-2xl mt-1 shrink-0" />
              <div className="flex-1">
                <p className="font-display text-lg leading-snug">{p.title}</p>
                <p className="text-sm text-paper/65 mt-1">{p.authors} · {p.outlet} ({p.year})</p>
                <div className="flex items-center gap-2 mt-2">
                  <Badge tone="gold">{p.type}</Badge>
                  {(p.doiOrLink || p.file) && (
                    <a
                      href={p.doiOrLink || p.file}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-gold-light hover:underline"
                    >
                      View <HiOutlineExternalLink />
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
