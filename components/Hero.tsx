'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Shield, Clock, Award } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: 'Available 24/7' },
  { icon: Award, label: 'Est. 2018' },
]

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forge-black">
      {/* Background layers */}
      <div className="absolute inset-0 z-0">
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-forge-dark to-forge-charcoal" />

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Red glow top-right */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-forge-red/8 blur-[120px]" />

        {/* Ember glow bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-forge-ember/5 blur-[100px]" />

        {/* Diagonal steel lines decorative */}
        <div className="absolute bottom-0 right-0 w-full h-full overflow-hidden opacity-10">
          <div
            className="absolute bottom-0 right-0 w-2/3 h-full"
            style={{
              background: 'linear-gradient(135deg, transparent 40%, rgba(220,38,38,0.15) 100%)',
            }}
          />
        </div>
      </div>

      {/* Hero image placeholder — replace src with real welding photo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forge-black via-forge-black/85 to-forge-black/60 z-10" />
        {/*
          PHOTO PLACEHOLDER:
          Replace the div below with an <Image> component pointing to a real welding project photo.
          Recommended: a cinematic shot of sparks flying or a finished custom gate/railing.

          Example:
          <Image src="/images/hero-bg.jpg" alt="LV Welding craftsmanship" fill className="object-cover object-center" priority />
        */}
        <div className="absolute inset-0 bg-gradient-to-br from-forge-charcoal/50 to-forge-dark z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding w-full pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="divider-red" />
            <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
              South Florida&apos;s Premier Fabricators
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display font-900 uppercase leading-[0.9] text-white mb-6"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
          >
            WHERE{' '}
            <span className="text-gradient-red">METAL</span>
            <br />
            MEETS
            <br />
            PERFECTION
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-forge-light text-lg md:text-xl font-300 leading-relaxed mb-10 max-w-xl"
          >
            Custom metal fabrication built to last. Gates, railings, staircases, structural steel —
            crafted with precision for residential and commercial clients across South Florida.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button
              onClick={scrollToContact}
              className="gradient-red text-white font-bold text-base px-8 py-4 rounded hover:opacity-90 active:scale-95 transition-all duration-200 shadow-xl hover:shadow-red-500/30 uppercase tracking-wider"
            >
              Get Free Estimate
            </button>
            <a
              href="tel:7867447479"
              className="flex items-center gap-3 border border-white/20 hover:border-white/50 text-white font-semibold text-base px-8 py-4 rounded transition-all duration-200 backdrop-blur-sm hover:bg-white/5"
            >
              <Phone size={16} className="text-forge-red" />
              (786) 744-7479
            </a>
            <a
              href="sms:7867447479"
              className="flex items-center gap-3 border border-white/10 hover:border-white/30 text-forge-light hover:text-white font-medium text-base px-6 py-4 rounded transition-all duration-200"
            >
              <MessageCircle size={16} className="text-forge-ember" />
              Text Us
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={15} className="text-forge-red" />
                <span className="text-forge-light text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-forge-gray"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
