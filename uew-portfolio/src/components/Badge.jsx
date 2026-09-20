export default function Badge({ children, tone = 'gold' }) {
  const tones = {
    gold: 'bg-gold/15 text-[#8a6a1f] border-gold/30',
    forest: 'bg-forest/10 text-forest border-forest/25',
    navy: 'bg-navy/10 text-navy border-navy/25',
  }
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-label font-medium ${tones[tone]}`}
    >
      {children}
    </span>
  )
}
