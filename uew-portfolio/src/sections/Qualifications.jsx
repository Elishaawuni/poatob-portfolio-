import SectionHeading from '../components/SectionHeading'
import TimelineList from '../components/TimelineList'

export default function Qualifications({ education }) {
  return (
    <section id="qualifications" className="section-pad bg-paper">
      <div className="container-narrow">
        <SectionHeading eyebrow="Academic Background" title="Qualifications" />
        <TimelineList
          items={education}
          renderTitle={(e) => e.degree}
          renderSubtitle={(e) => `${e.institution}${e.location ? ', ' + e.location : ''}`}
          renderYears={(e) => e.year}
          renderDescription={(e) => e.details}
        />
      </div>
    </section>
  )
}
