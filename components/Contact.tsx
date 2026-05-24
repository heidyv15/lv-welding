'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Instagram, MapPin, Mail, Clock, ExternalLink } from 'lucide-react'

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


export default function Contact() {
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
            Call, text, or message us directly. We respond fast and serve all of South Florida.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
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
        </div>
      </div>
    </section>
  )
}
