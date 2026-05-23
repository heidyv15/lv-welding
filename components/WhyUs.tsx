'use client'

import { motion } from 'framer-motion'
import {
  BadgeCheck,
  Clock3,
  Hammer,
  MessageSquare,
  MapPin,
  Ruler,
} from 'lucide-react'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Licensed & Insured',
    description:
      'Every project is backed by full licensing and insurance — protecting you and your property throughout the entire job.',
  },
  {
    icon: Clock3,
    title: 'Available 24/7',
    description:
      'We don\'t keep banker\'s hours. Whether it\'s a storm emergency or a project that can\'t wait, we\'re available around the clock.',
  },
  {
    icon: Hammer,
    title: 'Built to Last',
    description:
      'We use quality materials and tested fabrication methods to ensure everything we build survives South Florida\'s harsh climate for the long term.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description:
      'You\'ll always know where your project stands. No surprises, no ghosting — we keep you updated from estimate to final install.',
  },
  {
    icon: MapPin,
    title: 'Locally Rooted',
    description:
      'Based in Hialeah Gardens, we\'ve been serving Miami-Dade, Broward, and surrounding communities since 2018. We know this area.',
  },
  {
    icon: Ruler,
    title: 'Custom Fabrication',
    description:
      'Nothing is off-the-shelf. Every piece is designed and fabricated to your exact specifications — we don\'t do cookie-cutter work.',
  },
]

export default function WhyUs() {
  return (
    <section className="relative py-28 bg-forge-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forge-red/20 to-transparent" />

      {/* Full-width background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

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
              Why LV Welding
            </span>
            <div className="divider-red" />
          </div>
          <h2
            className="font-display font-800 uppercase text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            The Standard Others<br />Should Be Measured By
          </h2>
          <p className="text-forge-light text-lg max-w-xl mx-auto leading-relaxed">
            We built our reputation one weld at a time. Here&apos;s why contractors,
            homeowners, and businesses across South Florida trust us with their metal work.
          </p>
        </motion.div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-forge-charcoal/50 border border-white/5 rounded-xl p-7 hover:border-forge-red/20 hover:bg-forge-charcoal transition-all duration-300"
            >
              {/* Number */}
              <div className="absolute top-6 right-6 font-display font-800 text-5xl text-white/[0.03] leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-forge-red/10 border border-forge-red/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-forge-red/15 transition-colors duration-300">
                <reason.icon size={22} className="text-forge-red" />
              </div>

              <h3 className="font-display font-700 text-white text-xl uppercase tracking-wide mb-3">
                {reason.title}
              </h3>
              <p className="text-forge-gray text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 border border-white/5 rounded-2xl bg-forge-charcoal/30 p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2018', label: 'Year Founded' },
              { value: '14+', label: 'Services Offered' },
              { value: '24/7', label: 'Availability' },
              { value: '8+', label: 'Service Areas' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-900 text-gradient-red leading-none mb-2"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {stat.value}
                </div>
                <div className="text-forge-gray text-xs uppercase tracking-wider font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
