import SectionHeading from '../components/SectionHeading'
import KenteDivider from '../components/KenteDivider'

export default function Research({ settings, specializations }) {
  return (
    <section id="research" className="bg-navy text-paper">
      <div className="container-narrow section-pad">
        <SectionHeading
          eyebrow="Research"
          title="Research Interests & Areas of Specialization"
          light
          description="The questions and communities that anchor Dr. Poatob's scholarship."
        />

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-label text-sm uppercase tracking-wider text-gold-light mb-4">
              Research Interests
            </h3>
            <ul className="space-y-3">
              {settings.researchInterests?.map((r, i) => (
                <li key={i} className="flex items-start gap-3 text-paper/90">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-label text-sm uppercase tracking-wider text-gold-light mb-4">
              Areas of Specialization
            </h3>
            <div className="space-y-4">
              {specializations?.map((s) => (
                <div key={s._id} className="border-l-2 border-gold/50 pl-4">
                  <p className="font-display text-lg font-medium">{s.title}</p>
                  {s.description && <p className="text-paper/70 text-sm mt-1">{s.description}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <KenteDivider thin />
    </section>
  )
}
