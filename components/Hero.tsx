'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Shield, Clock, Award } from 'lucide-react'
import Image from 'next/image'

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
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.png"
          alt="LV Welding craftsmanship"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-forge-black/90 via-forge-black/70 to-forge-black/40" />
      </div>

      {/* Decorative overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
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
            <a
              href="tel:7867447479"
              className="flex items-center gap-2 border border-white/20 text-white font-bold text-base px-8 py-4 rounded hover:bg-white/10 active:scale-95 transition-all duration-200 uppercase tracking-wider"
            >
              <Phone size={18} />
              (786) 744-7479
            </a>

            <button
              onClick={scrollToContact}
              className="flex items-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded hover:bg-white/10 active:scale-95 transition-all duration-200"
            >
              <MessageCircle size={18} />
              Text Us
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-6"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-forge-gray text-sm">
                <Icon size={15} className="text-forge-red" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-forge-gray z-10"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  )
}
