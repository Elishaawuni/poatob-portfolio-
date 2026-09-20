import SectionHeading from '../components/SectionHeading'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

export default function Awards({ awards }) {
  return (
    <section id="awards" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading eyebrow="Recognition" title="Awards & Honours" />
        <div className="grid sm:grid-cols-2 gap-5">
          {awards?.map((a) => (
            <div key={a._id} className="card p-6 flex items-start gap-4">
              <div className="h-11 w-11 shrink-0 rounded-full bg-gold/15 text-[#8a6a1f] flex items-center justify-center">
                <HiOutlineBadgeCheck className="text-xl" />
              </div>
              <div>
                <p className="font-display text-lg font-medium text-ink">{a.title}</p>
                <p className="text-sm text-ink-text/70 mt-1">{a.awardingBody} · {a.year}</p>
                {a.description && <p className="text-ink-text/80 text-sm mt-2">{a.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
