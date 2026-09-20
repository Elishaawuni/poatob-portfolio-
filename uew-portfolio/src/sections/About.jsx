import SectionHeading from '../components/SectionHeading'

export default function About({ settings }) {
  const paragraphs = (settings.bio || '').split('\n').filter(Boolean)
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="container-narrow grid lg:grid-cols-[0.35fr_0.65fr] gap-12">
        <div>
          <p className="eyebrow mb-3">About</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink">Biography</h2>
          <p className="mt-4 text-ink-text/70 leading-relaxed">
            A brief look at the path from classroom teacher to civic-education researcher.
          </p>
        </div>
        <div className="prose-cv text-ink-text/90 leading-relaxed text-[1.05rem] space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
