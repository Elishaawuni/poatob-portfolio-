import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import { format } from 'date-fns'

const CATEGORY_LABEL = { blog: 'Blog', insight: 'Insight', update: 'Update', news: 'News' }
const TABS = ['All', 'Blog', 'Insight', 'Update']

export default function Insights({ posts }) {
  const [tab, setTab] = useState('All')

  const filtered = useMemo(() => {
    if (tab === 'All') return posts
    const key = tab.toLowerCase()
    return posts?.filter((p) => p.category === key)
  }, [posts, tab])

  return (
    <section id="insights" className="section-pad bg-paper-dim">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Writing"
          title="Blog, Insights & Updates"
          description="Short reflections, field updates and longer essays — all published and edited directly from the Studio."
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`font-label text-sm px-4 py-1.5 rounded-full border transition-colors ${
                tab === t
                  ? 'bg-forest text-paper border-forest'
                  : 'border-ink/20 text-ink-text/70 hover:border-forest hover:text-forest'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {(!filtered || filtered.length === 0) && (
          <p className="text-ink-text/60 italic">Nothing published in this category yet — check back soon.</p>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered?.map((p) => (
            <Link
              key={p._id}
              to={`/posts/${p.slug?.current}`}
              className="card overflow-hidden flex flex-col hover:shadow-xl transition-shadow group"
            >
              <div className="h-36 bg-navy overflow-hidden">
                {p.coverImage ? (
                  <img
                    src={p.coverImage}
                    alt=""
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center font-display text-paper/30">
                    {CATEGORY_LABEL[p.category] || 'Post'}
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge tone="forest">{CATEGORY_LABEL[p.category] || 'Post'}</Badge>
                  {p.publishedAt && (
                    <span className="text-xs text-ink-text/50 font-label">
                      {format(new Date(p.publishedAt), 'MMM d, yyyy')}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-lg font-medium text-ink leading-snug">{p.title}</h3>
                <p className="text-sm text-ink-text/70 mt-2 line-clamp-3 flex-1">{p.excerpt}</p>
                <span className="text-gold mt-3 text-sm font-label font-medium">Read more →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
