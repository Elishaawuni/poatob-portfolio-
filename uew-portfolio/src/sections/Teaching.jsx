import SectionHeading from '../components/SectionHeading'
import TimelineList from '../components/TimelineList'
import Badge from '../components/Badge'

function yearsLabel(item) {
  const end = item.current ? 'Present' : item.endYear || ''
  return end ? `${item.startYear} — ${end}` : item.startYear
}

export default function Teaching({ teaching }) {
  return (
    <section id="teaching" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading
          eyebrow="In the Classroom"
          title="Teaching Experience"
          description="Courses taught at undergraduate and postgraduate level in the Department of Social Studies."
        />
        <TimelineList
          items={teaching}
          renderTitle={(t) => t.courseTitle}
          renderSubtitle={(t) => (
            <span className="inline-flex items-center gap-2">
              {t.institution}
              {t.level && <Badge tone="forest">{t.level}</Badge>}
            </span>
          )}
          renderYears={yearsLabel}
          renderDescription={(t) => t.description}
        />
      </div>
    </section>
  )
}
