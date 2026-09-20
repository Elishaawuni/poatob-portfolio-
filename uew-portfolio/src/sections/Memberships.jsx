import SectionHeading from '../components/SectionHeading'
import { HiOutlineUserGroup } from 'react-icons/hi'

export default function Memberships({ memberships }) {
  return (
    <section id="memberships" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading eyebrow="Affiliations" title="Professional Memberships" />
        <div className="grid sm:grid-cols-2 gap-5">
          {memberships?.map((m) => (
            <div key={m._id} className="card p-6 flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 rounded-full bg-forest/10 text-forest flex items-center justify-center">
                <HiOutlineUserGroup className="text-xl" />
              </div>
              <div>
                <p className="font-display text-lg font-medium text-ink">
                  {m.organization} {m.acronym && <span className="text-gold font-label text-sm">({m.acronym})</span>}
                </p>
                <p className="text-sm text-ink-text/70 mt-1">
                  {m.role || 'Member'}{m.sinceYear ? ` · since ${m.sinceYear}` : ''}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
