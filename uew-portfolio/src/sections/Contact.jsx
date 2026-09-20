import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineCheckCircle } from 'react-icons/hi'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ''

export default function Contact({ settings }) {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: 'Consultation booking',
    message: '',
  })

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${settings.fullName} portfolio site: ${form.reason}`,
          from_name: form.name,
          name: form.name,
          email: form.email,
          reason: form.reason,
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', reason: 'Consultation booking', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-pad bg-paper-dim">
      <div className="container-narrow grid lg:grid-cols-[0.42fr_0.58fr] gap-12">
        <div>
          <SectionHeading
            eyebrow="Get in Touch"
            title="Contact & Consultation Booking"
            description="Reach out for consultancy, speaking engagements, thesis supervision enquiries, media requests, or general contact."
          />
          <div className="space-y-4 mt-6">
            {settings.email && (
              <a href={`mailto:${settings.email}`} className="flex items-center gap-3 text-ink-text/85 hover:text-forest">
                <HiOutlineMail className="text-lg text-forest" /> {settings.email}
              </a>
            )}
            {settings.phone && (
              <a href={`tel:${settings.phone}`} className="flex items-center gap-3 text-ink-text/85 hover:text-forest">
                <HiOutlinePhone className="text-lg text-forest" /> {settings.phone}
              </a>
            )}
            {settings.officeLocation && (
              <p className="flex items-start gap-3 text-ink-text/85">
                <HiOutlineLocationMarker className="text-lg text-forest mt-0.5 shrink-0" /> {settings.officeLocation}
              </p>
            )}
            {settings.officeHours && (
              <p className="text-sm text-ink-text/60 pl-8">Office hours: {settings.officeHours}</p>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card p-6 sm:p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-label font-medium text-ink mb-1.5" htmlFor="name">
                Full name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => update('name', e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-4 py-2.5 bg-paper focus:border-forest outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-label font-medium text-ink mb-1.5" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update('email', e.target.value)}
                className="w-full rounded-lg border border-ink/15 px-4 py-2.5 bg-paper focus:border-forest outline-none"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-label font-medium text-ink mb-1.5" htmlFor="reason">
              Reason for contact
            </label>
            <select
              id="reason"
              value={form.reason}
              onChange={(e) => update('reason', e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-4 py-2.5 bg-paper focus:border-forest outline-none"
            >
              <option>Consultation booking</option>
              <option>Speaking engagement</option>
              <option>Research collaboration</option>
              <option>Thesis / student supervision</option>
              <option>Media enquiry</option>
              <option>General contact</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-label font-medium text-ink mb-1.5" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              className="w-full rounded-lg border border-ink/15 px-4 py-2.5 bg-paper focus:border-forest outline-none resize-none"
              placeholder="Tell Dr. Poatob a little about what you'd like to discuss, and preferred dates/times if booking a consultation."
            />
          </div>

          <button type="submit" disabled={status === 'sending'} className="btn-primary w-full justify-center !bg-forest !text-paper hover:!bg-forest-light disabled:opacity-60">
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="flex items-center gap-2 text-forest text-sm font-medium">
              <HiOutlineCheckCircle className="text-lg" /> Thank you — your message has been sent. You'll hear back soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-clay text-sm">
              Something went wrong sending your message. Please try again, or email directly at{' '}
              {settings.email || 'the address above'}.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
