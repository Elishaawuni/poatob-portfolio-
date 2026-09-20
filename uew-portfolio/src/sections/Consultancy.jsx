import SectionHeading from '../components/SectionHeading'
import {
  HiOutlineBookOpen,
  HiOutlineMicrophone,
  HiOutlineLightBulb,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
} from 'react-icons/hi'

const ICONS = {
  book: HiOutlineBookOpen,
  mic: HiOutlineMicrophone,
  compass: HiOutlineLightBulb,
  chart: HiOutlineChartBar,
  cap: HiOutlineAcademicCap,
}

export default function Consultancy({ services, settings }) {
  return (
    <section id="consultancy" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="Work Together"
          title="Consultancy & Speaking"
          description={
            settings.availableForConsultancy
              ? 'Currently accepting select consultancy engagements and speaking invitations.'
              : 'Consultancy availability varies by term — please enquire.'
          }
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services?.map((s) => {
            const Icon = ICONS[s.icon] || HiOutlineLightBulb
            return (
              <div key={s._id} className="card p-6">
                <div className="h-11 w-11 rounded-lg bg-gold/15 text-[#8a6a1f] flex items-center justify-center mb-4">
                  <Icon className="text-xl" />
                </div>
                <h3 className="font-display text-lg font-medium text-ink">{s.title}</h3>
                <p className="text-sm text-ink-text/75 mt-2 leading-relaxed">{s.description}</p>
              </div>
            )
          })}
        </div>
        <div className="mt-9">
          <a href="#contact" className="btn-primary !bg-forest !text-paper hover:!bg-forest-light">
            Enquire about an engagement
          </a>
        </div>
      </div>
    </section>
  )
}
