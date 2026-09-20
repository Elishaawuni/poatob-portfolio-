import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'

export default function Grants({ grants }) {
  return (
    <section id="grants" className="section-pad bg-paper-dim">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Funded Research"
          title="Grants — Ongoing & Awarded"
          description="Externally and internally funded research and outreach projects."
        />
        <div className="space-y-5">
          {grants?.map((g) => (
            <div key={g._id} className="card p-6 sm:flex sm:items-start sm:justify-between gap-6">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge tone={g.status === 'ongoing' ? 'gold' : 'forest'}>
                    {g.status === 'ongoing' ? 'Ongoing' : 'Awarded / Completed'}
                  </Badge>
                  <span className="font-label text-xs text-ink-text/50">{g.year}</span>
                </div>
                <h3 className="font-display text-xl font-medium text-ink">{g.title}</h3>
                <p className="text-sm text-ink-text/70 mt-1">
                  {g.funder}{g.role ? ` · ${g.role}` : ''}
                </p>
                {g.description && <p className="text-ink-text/80 mt-2 leading-relaxed">{g.description}</p>}
              </div>
              {g.amount && (
                <div className="mt-4 sm:mt-0 shrink-0 text-right">
                  <p className="font-label text-2xl font-semibold text-forest">
                    {g.currency || ''} {g.amount}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
