'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, MapPin, Mail, Clock, Send, ExternalLink } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '(786) 744-7479',
    href: 'tel:7867447479',
    sub: 'Available 24/7 for estimates & emergencies',
    cta: 'Call Now',
  },
  {
    icon: MessageCircle,
    label: 'Text Us',
    value: '(786) 744-7479',
    href: 'sms:7867447479',
    sub: 'Send photos of your project for a faster quote',
    cta: 'Send Text',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@lvwelding',
    href: 'https://www.instagram.com/lvwelding/',
    sub: 'DM us directly — we respond fast',
    cta: 'Open Instagram',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: '[email placeholder]',
    href: 'mailto:info@lvweldingservices.com',
    sub: 'For detailed project inquiries',
    cta: 'Send Email',
  },
]

type FormData = {
  name: string
  phone: string
  email: string
  service: string
  message: string
}

const services = [
  'Custom Gates & Fencing',
  'Railings & Balconies',
  'Custom Staircases',
  'Structural Steel',
  'Ornamental Ironwork',
  'Metal Repairs',
  'Storm Damage Repair',
  'Aluminum Fabrication',
  'Other / Custom Project',
]

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    /*
      FORM SUBMISSION PLACEHOLDER
      Connect to your preferred form handler:
      - Formspree: https://formspree.io
      - EmailJS: https://emailjs.com
      - Custom API route: /api/contact
      Replace this timeout with your actual submission logic.
    */
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="relative py-28 bg-forge-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forge-red/30 to-transparent" />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-forge-red/5 blur-[120px]" />

      <div className="container-max section-padding relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="divider-red" />
            <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
              Get In Touch
            </span>
            <div className="divider-red" />
          </div>
          <h2
            className="font-display font-800 uppercase text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Ready to Start<br />Your Project?
          </h2>
          <p className="text-forge-light text-lg max-w-lg mx-auto leading-relaxed">
            Get a free estimate — no obligation. Call, text, or fill out the form
            and we&apos;ll get back to you fast.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group flex items-start gap-4 p-5 bg-forge-charcoal border border-white/5 rounded-xl hover:border-forge-red/25 hover:bg-forge-charcoal/80 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-forge-red/10 border border-forge-red/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forge-red/20 transition-colors duration-300">
                  <method.icon size={18} className="text-forge-red" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="text-forge-gray text-xs uppercase tracking-wider">{method.label}</p>
                    {method.external && <ExternalLink size={10} className="text-forge-gray" />}
                  </div>
                  <p className="text-white font-semibold text-sm mb-1 truncate">{method.value}</p>
                  <p className="text-forge-gray text-xs leading-relaxed">{method.sub}</p>
                </div>
                <div className="shrink-0 self-center">
                  <span className="text-forge-red text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {method.cta} →
                  </span>
                </div>
              </a>
            ))}

            {/* Address & hours */}
            <div className="p-5 bg-forge-charcoal border border-white/5 rounded-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-forge-steel border border-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-forge-gray" />
                </div>
                <div>
                  <p className="text-forge-gray text-xs uppercase tracking-wider mb-1">Location</p>
                  <p className="text-white text-sm font-medium">9921 NW 80th Ave, Unit 1J</p>
                  <p className="text-forge-gray text-sm">Hialeah Gardens, FL 33016</p>
                </div>
              </div>
              <div className="border-t border-white/5 pt-4 flex items-start gap-4">
                <div className="w-11 h-11 bg-forge-steel border border-white/5 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-forge-gray" />
                </div>
                <div>
                  <p className="text-forge-gray text-xs uppercase tracking-wider mb-1">Hours</p>
                  <p className="text-white text-sm font-medium">Open 24 Hours</p>
                  <p className="text-forge-gray text-sm">7 Days a Week</p>
                </div>
              </div>
            </div>

            {/* Google Business link */}
            <a
              href="https://www.lvweldingservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/10 hover:border-white/25 rounded-xl text-forge-gray hover:text-white text-sm transition-all duration-200"
            >
              View Google Business Profile
              <ExternalLink size={13} />
            </a>
          </motion.div>

          {/* Estimate form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-forge-charcoal border border-white/5 rounded-2xl p-8">
              <h3 className="font-display font-700 text-white text-2xl uppercase tracking-wide mb-2">
                Free Project Estimate
              </h3>
              <p className="text-forge-gray text-sm mb-8">
                Fill out the form and we&apos;ll follow up within a few hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-16 h-16 gradient-red rounded-full flex items-center justify-center mx-auto mb-5">
                    <Send size={24} className="text-white" />
                  </div>
                  <h4 className="font-display font-700 text-white text-2xl uppercase mb-3">
                    Message Sent!
                  </h4>
                  <p className="text-forge-light text-sm max-w-sm mx-auto">
                    Thanks for reaching out. We&apos;ll review your request and get back to you shortly.
                    For urgent needs, call us directly at{' '}
                    <a href="tel:7867447479" className="text-forge-red font-semibold">
                      (786) 744-7479
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-forge-gray text-xs uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-forge-steel border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder:text-forge-iron focus:outline-none focus:border-forge-red/50 focus:bg-forge-steel/80 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-forge-gray text-xs uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(305) 000-0000"
                        className="w-full bg-forge-steel border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder:text-forge-iron focus:outline-none focus:border-forge-red/50 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-forge-gray text-xs uppercase tracking-wider mb-2">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-forge-steel border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder:text-forge-iron focus:outline-none focus:border-forge-red/50 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-forge-gray text-xs uppercase tracking-wider mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-forge-steel border border-white/8 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-forge-red/50 transition-all duration-200 appearance-none"
                    >
                      <option value="" className="bg-forge-charcoal text-forge-gray">
                        Select a service...
                      </option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-forge-charcoal">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-forge-gray text-xs uppercase tracking-wider mb-2">
                      Project Details
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project — location, size, materials, timeline..."
                      className="w-full bg-forge-steel border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder:text-forge-iron focus:outline-none focus:border-forge-red/50 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full gradient-red text-white font-bold uppercase tracking-wider text-sm py-4 rounded-lg hover:opacity-90 active:scale-[0.99] transition-all duration-200 disabled:opacity-60 flex items-center justify-center gap-3 shadow-lg hover:shadow-red-500/25"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Request Free Estimate
                      </>
                    )}
                  </button>

                  <p className="text-forge-gray text-xs text-center">
                    No spam, no obligation. We&apos;ll only use your info to follow up on your project.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
