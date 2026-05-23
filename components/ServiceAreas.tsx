'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const areas = [
  { city: 'Miami', county: 'Miami-Dade' },
  { city: 'Hialeah Gardens', county: 'Miami-Dade', home: true },
  { city: 'Hialeah', county: 'Miami-Dade' },
  { city: 'Coral Gables', county: 'Miami-Dade' },
  { city: 'Miami Beach', county: 'Miami-Dade' },
  { city: 'Doral', county: 'Miami-Dade' },
  { city: 'Fort Lauderdale', county: 'Broward' },
  { city: 'Southwest Ranches', county: 'Broward' },
  { city: 'Homestead', county: 'Miami-Dade' },
  { city: 'Monroe County', county: 'Monroe' },
  { city: 'Kendall', county: 'Miami-Dade' },
  { city: '& Surrounding Areas', county: '', custom: true },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="relative py-24 bg-forge-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -bottom-60 right-0 w-[600px] h-[600px] rounded-full bg-forge-red/4 blur-[120px]" />

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-red" />
              <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
                Where We Work
              </span>
            </div>

            <h2
              className="font-display font-800 uppercase text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Serving All of<br />
              <span className="text-gradient-red">South Florida</span>
            </h2>

            <p className="text-forge-light leading-relaxed mb-8 max-w-md">
              Based in Hialeah Gardens, we travel across Miami-Dade, Broward, and Monroe County
              to deliver the same quality fabrication and installation — no matter where you are
              in South Florida.
            </p>

            <div className="p-5 bg-forge-charcoal border border-white/5 rounded-xl mb-8">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-forge-red mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-medium text-sm mb-0.5">Our Location</p>
                  <p className="text-forge-gray text-sm">
                    9921 NW 80th Ave, Unit 1J<br />
                    Hialeah Gardens, FL 33016
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-block gradient-red text-white font-bold uppercase tracking-wider text-sm px-7 py-3.5 rounded hover:opacity-90 transition-opacity"
            >
              Check Your Area
            </a>
          </motion.div>

          {/* Right — city list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area, i) => (
                <motion.div
                  key={area.city}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className={`flex items-center gap-3 p-4 rounded-lg border transition-colors duration-200 ${
                    area.home
                      ? 'bg-forge-red/10 border-forge-red/30'
                      : area.custom
                      ? 'bg-transparent border-dashed border-white/10 col-span-2'
                      : 'bg-forge-charcoal/50 border-white/5 hover:border-white/15'
                  }`}
                >
                  <MapPin
                    size={14}
                    className={area.home ? 'text-forge-red' : 'text-forge-gray'}
                  />
                  <div>
                    <p className={`text-sm font-medium ${area.home ? 'text-forge-red' : 'text-forge-light'}`}>
                      {area.city}
                      {area.home && (
                        <span className="ml-2 text-[10px] tracking-widest uppercase text-forge-red/70">
                          Base
                        </span>
                      )}
                    </p>
                    {area.county && (
                      <p className="text-forge-gray text-[11px]">{area.county} County</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-forge-gray text-xs mt-4 text-center">
              Don&apos;t see your city? Call us — we likely serve your area.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
