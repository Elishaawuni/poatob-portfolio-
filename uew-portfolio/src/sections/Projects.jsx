import SectionHeading from '../components/SectionHeading'
import Badge from '../components/Badge'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading eyebrow="In the Field" title="Projects" />
        <div className="grid sm:grid-cols-2 gap-6">
          {projects?.map((p) => (
            <div key={p._id} className="card overflow-hidden flex flex-col">
              <div className="h-40 bg-navy/90 flex items-center justify-center">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
                ) : (
                  <span className="font-display text-paper/40 text-sm">Project photo coming soon</span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge tone={p.status === 'Ongoing' ? 'gold' : 'forest'}>{p.status}</Badge>
                  <span className="font-label text-xs text-ink-text/50">{p.year}</span>
                </div>
                <h3 className="font-display text-lg font-medium text-ink">{p.title}</h3>
                <p className="text-ink-text/75 text-sm mt-2 leading-relaxed flex-1">{p.summary}</p>
                {p.partners && <p className="text-xs text-ink-text/50 mt-3">Partners: {p.partners}</p>}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-forest text-sm font-medium mt-3">
                    Learn more <HiOutlineExternalLink />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
