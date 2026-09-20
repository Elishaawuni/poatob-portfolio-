import SectionHeading from '../components/SectionHeading'
import TimelineList from '../components/TimelineList'

function yearsLabel(item) {
  const end = item.current ? 'Present' : item.endYear || ''
  return end ? `${item.startYear} — ${end}` : item.startYear
}

export default function Employment({ employment }) {
  return (
    <section id="employment" className="section-pad bg-paper-dim">
      <div className="container-narrow">
        <SectionHeading eyebrow="Career" title="Employment History" />
        <TimelineList
          items={employment}
          renderTitle={(e) => e.role}
          renderSubtitle={(e) => `${e.institution}${e.location ? ', ' + e.location : ''}`}
          renderYears={yearsLabel}
          renderDescription={(e) => e.description}
        />
      </div>
    </section>
  )
}
