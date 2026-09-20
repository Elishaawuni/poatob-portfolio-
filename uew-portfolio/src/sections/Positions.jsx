import SectionHeading from '../components/SectionHeading'
import TimelineList from '../components/TimelineList'

function yearsLabel(item) {
  const end = item.current ? 'Present' : item.endYear || ''
  return end ? `${item.startYear} — ${end}` : item.startYear
}

export default function Positions({ positions }) {
  return (
    <section id="positions" className="section-pad bg-paper-dim">
      <div className="container-narrow">
        <SectionHeading eyebrow="Service" title="Positions Held" />
        <TimelineList
          items={positions}
          renderTitle={(p) => p.title}
          renderSubtitle={(p) => p.organization}
          renderYears={yearsLabel}
          renderDescription={(p) => p.description}
        />
      </div>
    </section>
  )
}
