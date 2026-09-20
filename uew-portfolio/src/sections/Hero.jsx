import { HiOutlineDownload, HiOutlineCalendar } from 'react-icons/hi'
import KenteDivider from '../components/KenteDivider'

export default function Hero({ settings }) {
  return (
    <section className="relative bg-ink text-paper overflow-hidden">
      {/* Ambient background texture: soft radial glow, subtle grid — quiet, not competing with the kente signature */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(248,244,234,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(248,244,234,.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #c89b3c, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-narrow relative pt-36 pb-20 sm:pt-44 sm:pb-24 grid lg:grid-cols-[1.3fr_0.9fr] gap-14 items-center">
        <div>
          <p className="eyebrow mb-5">{settings.department} · {settings.institution}</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] font-semibold">
            {settings.fullName}
          </h1>
          <p className="mt-4 font-label text-gold-light text-lg">{settings.title}</p>
          <p className="mt-6 text-lg text-paper/80 leading-relaxed max-w-xl">
            {settings.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              <HiOutlineCalendar /> Book a consultation
            </a>
            {settings.cvFile ? (
              <a href={settings.cvFile} target="_blank" rel="noreferrer" className="btn-outline">
                <HiOutlineDownload /> Download CV
              </a>
            ) : (
              <a href="#cv" className="btn-outline">
                <HiOutlineDownload /> View CV
              </a>
            )}
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72">
            <div className="absolute inset-0 rounded-2xl rotate-3 bg-gold/25" aria-hidden="true" />
            <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-gold/40 bg-navy">
              {settings.profileImage ? (
                <img
                  src={settings.profileImage}
                  alt={settings.fullName}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center font-display text-6xl text-gold-light/70">
                  {settings.fullName
                    ?.split(' ')
                    .filter((w) => w[0] === w[0]?.toUpperCase())
                    .slice(-2)
                    .map((w) => w[0])
                    .join('')}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <KenteDivider />
    </section>
  )
}
