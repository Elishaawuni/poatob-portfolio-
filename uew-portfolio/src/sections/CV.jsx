import SectionHeading from '../components/SectionHeading'
import { HiOutlineDownload, HiOutlineDocumentDownload } from 'react-icons/hi'

export default function CV({ settings }) {
  return (
    <section id="cv" className="section-pad bg-navy text-paper">
      <div className="container-narrow">
        <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-8 sm:p-12 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="eyebrow mb-3">Curriculum Vitae</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Full academic CV, always up to date
            </h2>
            <p className="text-paper/75 mt-3 max-w-xl">
              A complete record of qualifications, publications, teaching and professional
              service — kept current directly from the Studio, so it's always the latest version.
            </p>
          </div>
          <div className="shrink-0 flex flex-col items-center gap-3">
            <div className="h-24 w-20 rounded-lg bg-paper/10 border border-paper/20 flex items-center justify-center">
              <HiOutlineDocumentDownload className="text-3xl text-gold-light" />
            </div>
            {settings.cvFile ? (
              <a href={settings.cvFile} target="_blank" rel="noreferrer" download className="btn-primary whitespace-nowrap">
                <HiOutlineDownload /> Download CV (PDF)
              </a>
            ) : (
              <span className="text-sm text-paper/50 italic">CV will be available soon</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
