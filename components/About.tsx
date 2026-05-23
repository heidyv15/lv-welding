'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Licensed & fully insured — every project',
  'Serving South Florida since 2018',
  'Residential and commercial clients',
  'Precise craftsmanship on projects of all sizes',
  'Compliant with local building codes',
  'Built to withstand Florida\'s climate',
  'Bilingual team — English & Spanish',
  'Transparent communication, start to finish',
]

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-forge-dark overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-forge-red/5 blur-[100px]" />

      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/*
              PHOTO PLACEHOLDER
              Replace with a real team or shop photo:
              <Image src="/images/about-shop.jpg" alt="LV Welding team" fill className="object-cover rounded-xl" />
            */}
            <div className="relative w-full rounded-xl overflow-hidden bg-forge-charcoal border border-white/5"
              style={{ height: '480px' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-forge-steel to-forge-dark flex items-center justify-center">
                <div className="text-center opacity-20">
                  <div className="w-20 h-20 border-2 border-forge-gray rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-display font-800 text-4xl text-forge-gray">LV</span>
                  </div>
                  <p className="text-forge-gray text-xs tracking-widest uppercase">Team Photo</p>
                </div>
              </div>

              {/* Stat cards overlaid */}
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[
                  { value: '2018', label: 'Est.' },
                  { value: '24/7', label: 'Available' },
                  { value: '14+', label: 'Services' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-black/70 backdrop-blur-md border border-white/10 rounded-lg p-3 text-center"
                  >
                    <div className="font-display font-800 text-forge-red text-xl leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-forge-gray text-[10px] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-forge-red rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-forge-red rounded-br-lg" />
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="divider-red" />
              <span className="text-forge-red text-xs font-semibold tracking-[0.25em] uppercase">
                Our Story
              </span>
            </div>

            <h2
              className="font-display font-800 uppercase text-white leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
            >
              Crafted in South Florida.<br />
              <span className="text-gradient-red">Built to Outlast.</span>
            </h2>

            <div className="space-y-4 text-forge-light leading-relaxed mb-8">
              <p>
                LV Welding Services was founded with one goal: to deliver the highest level of
                quality metalwork in South Florida. Since 2018, we&apos;ve been bringing precise
                craftsmanship to residential and commercial clients who demand work that actually lasts.
              </p>
              <p>
                Florida&apos;s climate is unforgiving — salt air, humidity, tropical storms. Every
                piece we fabricate is engineered to withstand those conditions. No shortcuts, no
                compromises. We build durable solutions that resist corrosion, wear, and environmental
                stress year after year.
              </p>
              <p>
                From custom driveway gates and ornamental ironwork to structural steel and full
                staircase installations — our team approaches every project with the same attention
                to detail, regardless of scope. We serve Miami, Hialeah, Coral Gables, Fort
                Lauderdale, and all of South Florida.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-forge-red mt-0.5 shrink-0" />
                  <span className="text-forge-light text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Language note */}
            <div className="mt-8 p-4 bg-forge-charcoal border border-white/5 rounded-lg">
              <p className="text-forge-gray text-sm">
                <span className="text-white font-medium">Hablamos Español.</span>{' '}
                We proudly serve South Florida&apos;s bilingual community — communication in both
                English and Spanish throughout your entire project.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
