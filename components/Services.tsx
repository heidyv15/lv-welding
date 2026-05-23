'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  Zap,
  Grid,
  Layers,
  Wrench,
  Triangle,
  Shield,
  Wind,
  Settings,
} from 'lucide-react'

const services = [
  {
    icon: Grid,
    title: 'Custom Gates & Fencing',
    description:
      'Handcrafted driveway gates, entry gates, and security fencing designed to your exact specifications. Built to enhance curb appeal and stand up to Florida weather.',
    tag: 'Most Requested',
  },
  {
    icon: Layers,
    title: 'Railings & Balconies',
    description:
      'Interior and exterior railings for staircases, balconies, and decks. Steel, iron, and aluminum options — built to code and finished with precision.',
  },
  {
    icon: Triangle,
    title: 'Custom Staircases',
    description:
      'Floating staircases, spiral designs, and straight runs fabricated with structural integrity and architectural style. Residential and commercial.',
  },
  {
    icon: Zap,
    title: 'Structural Steel Fabrication',
    description:
      'Heavy-duty structural steel work for commercial and industrial projects. Compliant with local building codes and engineered for long-term performance.',
  },
  {
    icon: Settings,
    title: 'Ornamental Ironwork',
    description:
      'Decorative iron elements including window guards, door frames, pergolas, and custom architectural details that blend function with craftsmanship.',
  },
  {
    icon: Wrench,
    title: 'Metal Repairs & Restoration',
    description:
      'Weld cracks, repair storm damage, reinforce aging structures, and restore metal work to like-new condition — fast turnaround, no shortcuts.',
  },
  {
    icon: Wind,
    title: 'Storm Damage Repairs',
    description:
      'Hurricane and storm-damaged gates, fences, and structural elements repaired and reinforced. Available 24/7 for emergency response.',
    tag: 'Emergency',
  },
  {
    icon: Shield,
    title: 'Aluminum Fabrication',
    description:
      'Lightweight, corrosion-resistant aluminum solutions for coastal properties. Ideal for South Florida\'s salt air and humidity conditions.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="relative py-28 bg-forge-dark overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forge-red/40 to-transparent" />
      <div className="absolute -top-60 -right-60 w-[600px] h-[600px] rounded-full bg-forge-red/4 blur-[100px]" />

      <div className="container-max section-padding">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="divider-red" />
            <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
              What We Build
            </span>
          </div>
          <h2 className="font-display font-800 uppercase text-white leading-tight mb-4"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            Full-Service Metal<br />Fabrication
          </h2>
          <p className="text-forge-light text-lg max-w-xl leading-relaxed">
            From custom gates to structural steel — we handle every phase of metal fabrication
            with the same standard of excellence, regardless of project size.
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="relative group bg-forge-charcoal border border-white/5 rounded-lg p-6 hover:border-forge-red/30 transition-all duration-300 card-hover"
            >
              {/* Tag */}
              {service.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase text-forge-red bg-forge-red/10 border border-forge-red/20 px-2 py-0.5 rounded-full">
                  {service.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-11 h-11 bg-forge-steel border border-white/5 rounded-lg flex items-center justify-center mb-5 group-hover:bg-forge-red/10 group-hover:border-forge-red/20 transition-all duration-300">
                <service.icon size={20} className="text-forge-red" />
              </div>

              {/* Text */}
              <h3 className="font-display font-700 text-white text-xl uppercase tracking-wide mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-forge-gray text-sm leading-relaxed">{service.description}</p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-forge-red to-forge-ember transition-all duration-500 rounded-b-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-forge-gray text-sm mb-5">
            Don&apos;t see what you need? We handle custom requests.
          </p>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-block gradient-red text-white font-bold uppercase tracking-wider text-sm px-8 py-3.5 rounded hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  )
}
