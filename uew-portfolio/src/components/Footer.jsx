import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'

export default function Footer({ settings }) {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-paper">
      <div className="container-narrow section-pad !pt-16 !pb-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-display text-xl font-semibold">{settings.fullName}</p>
            <p className="text-paper/70 text-sm mt-2 leading-relaxed">
              {settings.title}, {settings.department}
              <br />
              {settings.institution}
            </p>
          </div>

          <div className="text-sm space-y-2.5">
            <p className="eyebrow !text-gold-light mb-1">Contact</p>
            {settings.email && (
              <a href={`mailto:${settings.email}`} className="flex items-center gap-2 text-paper/80 hover:text-gold-light">
                <HiOutlineMail /> {settings.email}
              </a>
            )}
            {settings.phone && (
              <a href={`tel:${settings.phone}`} className="flex items-center gap-2 text-paper/80 hover:text-gold-light">
                <HiOutlinePhone /> {settings.phone}
              </a>
            )}
            {settings.officeLocation && (
              <p className="flex items-start gap-2 text-paper/80">
                <HiOutlineLocationMarker className="mt-0.5 shrink-0" /> {settings.officeLocation}
              </p>
            )}
          </div>

          <div className="text-sm">
            <p className="eyebrow !text-gold-light mb-2.5">Elsewhere</p>
            <div className="flex flex-col gap-2">
              {settings.socialLinks?.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paper/80 hover:text-gold-light w-fit"
                >
                  {s.platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-paper/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-paper/50">
          <p>© {year} {settings.fullName}. All rights reserved.</p>
          <p>Department of Social Studies · University of Education, Winneba</p>
        </div>
      </div>
    </footer>
  )
}
