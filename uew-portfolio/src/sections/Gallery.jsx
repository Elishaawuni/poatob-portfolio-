import { useEffect, useMemo, useState, useCallback } from 'react'
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import SectionHeading from '../components/SectionHeading'

// Sanity's image CDN resizes on the fly when you add ?w=...&auto=format
const thumb = (url) => `${url}?w=800&auto=format`
const full = (url) => `${url}?w=1800&auto=format`

export default function Gallery({ gallery }) {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(null) // index within `visible`

  const categories = useMemo(() => {
    const set = new Set(gallery?.map((g) => g.category).filter(Boolean))
    return ['All', ...set]
  }, [gallery])

  const visible = useMemo(
    () => (filter === 'All' ? gallery : gallery?.filter((g) => g.category === filter)) || [],
    [gallery, filter]
  )

  const close = useCallback(() => setActive(null), [])
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % visible.length)),
    [visible.length]
  )
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i - 1 + visible.length) % visible.length)),
    [visible.length]
  )

  // Keyboard controls + stop the page scrolling behind the lightbox
  useEffect(() => {
    if (active === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  const current = active !== null ? visible[active] : null

  return (
    <section id="gallery" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Moments"
          title="Gallery"
          description="Conferences, fieldwork, classroom moments and events."
        />

        {categories.length > 2 && (
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setFilter(c)
                  setActive(null)
                }}
                className={`font-label text-sm px-4 py-1.5 rounded-full border transition-colors ${
                  filter === c
                    ? 'bg-forest text-paper border-forest'
                    : 'border-ink/20 text-ink-text/70 hover:border-forest hover:text-forest'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        )}

        {visible.length === 0 ? (
          <p className="text-ink-text/60 italic">Photos will appear here soon.</p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {visible.map((g, i) => (
              <button
                key={g._id}
                onClick={() => setActive(i)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl bg-navy text-left"
                aria-label={`Open photo${g.title ? ': ' + g.title : ''}`}
              >
                <img
                  src={thumb(g.image)}
                  alt={g.title || g.caption || 'Gallery photo'}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
                {(g.title || g.caption) && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10 opacity-0 group-hover:opacity-100 focus-visible:opacity-100 transition-opacity">
                    {g.title && <p className="font-display text-paper text-base">{g.title}</p>}
                    {g.caption && (
                      <p className="text-paper/75 text-xs mt-1 line-clamp-2">{g.caption}</p>
                    )}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[60] bg-ink/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 text-paper text-3xl p-2 hover:text-gold-light"
            aria-label="Close"
          >
            <HiX />
          </button>

          {visible.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-paper text-4xl p-2 hover:text-gold-light"
                aria-label="Previous photo"
              >
                <HiChevronLeft />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-paper text-4xl p-2 hover:text-gold-light"
                aria-label="Next photo"
              >
                <HiChevronRight />
              </button>
            </>
          )}

          <figure className="max-w-4xl max-h-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={full(current.image)}
              alt={current.title || current.caption || 'Gallery photo'}
              className="max-h-[75vh] w-auto rounded-lg"
            />
            {(current.title || current.caption) && (
              <figcaption className="mt-4 text-center max-w-2xl">
                {current.title && <p className="font-display text-paper text-lg">{current.title}</p>}
                {current.caption && (
                  <p className="text-paper/75 text-sm mt-1 whitespace-pre-line">{current.caption}</p>
                )}
              </figcaption>
            )}
          </figure>
        </div>
      )}
    </section>
  )
}
