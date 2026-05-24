'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Instagram } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Custom Driveway Gate',
    category: 'Gates & Entry',
    description: 'Heavy-duty ornamental iron driveway gate with automated opener integration.',
    image: '/customgate.png',
    size: 'large', // spans 2 columns on desktop
  },
  {
    id: 2,
    title: 'Interior Staircase Railing',
    category: 'Railings',
    description: 'Modern steel railing system for a residential staircase in Coral Gables.',
    image: '/interiorstaircase.png',
    size: 'normal',
  },
  {
    id: 3,
    title: 'Commercial Security Fencing',
    category: 'Fencing',
    description: 'Perimeter security fencing for commercial property — built to spec.',
    image: '/securityfence.png',
    size: 'normal',
  },
  {
    id: 4,
    title: 'Floating Steel Staircase',
    category: 'Staircases',
    description: 'Custom floating staircase fabricated and installed in a Miami residence.',
    image: '/floatingstair.png',
    size: 'normal',
  },
  {
    id: 5,
    title: 'Ornamental Balcony Railing',
    category: 'Railings',
    description: 'Decorative iron balcony railing with custom scrollwork in Fort Lauderdale.',
    image: '/ornamental.png',
    size: 'normal',
  },
  {
    id: 6,
    title: 'Structural Steel Frame',
    category: 'Structural',
    description: 'Steel frame fabrication for a commercial addition — code compliant.',
    image: '/steelframe.png',
    size: 'large',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-forge-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forge-red/30 to-transparent" />
      <div className="absolute -bottom-60 -left-60 w-[700px] h-[700px] rounded-full bg-forge-ember/4 blur-[120px]" />

      <div className="container-max section-padding">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-red" />
              <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
                Our Work
              </span>
            </div>
            <h2
              className="font-display font-800 uppercase text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Built by Hand.<br />Built to Last.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://www.instagram.com/lvwelding/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-forge-light hover:text-white text-sm font-medium border border-white/10 hover:border-white/30 px-5 py-2.5 rounded transition-all duration-200"
            >
              <Instagram size={15} />
              View All on Instagram
              <ExternalLink size={13} className="text-forge-gray" />
            </a>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative rounded-lg overflow-hidden ${
                project.size === 'large' ? 'sm:col-span-2' : ''
              }`}
            >
              {/* Project image */}
              <div
                className="relative w-full overflow-hidden bg-forge-charcoal"
                style={{ height: project.size === 'large' ? '360px' : '280px' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-6">
                <span className="text-forge-red text-xs font-bold tracking-widest uppercase mb-1">
                  {project.category}
                </span>
                <h3 className="font-display font-700 text-white text-xl uppercase tracking-wide mb-1">
                  {project.title}
                </h3>
                <p className="text-forge-light text-xs leading-relaxed">{project.description}</p>
              </div>

              {/* Category badge */}
              <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-black/60 backdrop-blur-sm border border-white/10 px-2.5 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center border border-white/5 rounded-xl p-8 bg-forge-charcoal/30"
        >
          <Instagram size={28} className="text-forge-red mx-auto mb-3" />
          <h3 className="font-display font-700 text-white text-xl uppercase tracking-wide mb-2">
            Follow Our Work
          </h3>
          <p className="text-forge-gray text-sm mb-5 max-w-md mx-auto">
            See our latest projects, in-progress fabrication, and finished installs on Instagram.
          </p>
          <a
            href="https://www.instagram.com/lvwelding/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-red text-white font-bold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity uppercase tracking-wider"
          >
            @lvwelding
            <ExternalLink size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
