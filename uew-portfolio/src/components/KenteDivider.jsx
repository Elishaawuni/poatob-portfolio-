export default function KenteDivider({ thin = false }) {
  return <div className={`kente-band ${thin ? 'kente-band-thin' : ''}`} aria-hidden="true" />
}
