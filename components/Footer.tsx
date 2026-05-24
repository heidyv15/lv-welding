'use client'

import Image from 'next/image'
import { Phone, MessageCircle, Instagram, MapPin, Clock, ExternalLink } from 'lucide-react'

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

const serviceLinks = [
  'Custom Gates & Fencing',
  'Railings & Balconies',
  'Staircases',
  'Structural Steel',
  'Ornamental Ironwork',
  'Metal Repairs',
  'Storm Damage',
  'Aluminum Fabrication',
]

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#060606] border-t border-white/5">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-forge-red/40 to-transparent" />

      {/* Main footer content */}
      <div className="container-max section-padding pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/LOGO.jpg"
                alt="LV Welding Services"
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </div>

            <p className="text-forge-gray text-sm leading-relaxed mb-6">
              Custom metal fabrication built to last. Serving South Florida since 2018
              with precision craftsmanship and uncompromising standards.
            </p>

            <div className="space-y-3">
              <a
                href="tel:7865066327"
                className="flex items-center gap-3 text-forge-light hover:text-white text-sm transition-colors group"
              >
                <Phone size={14} className="text-forge-red group-hover:text-forge-red" />
                (786) 506-6327
              </a>
              <a
                href="sms:7865066327"
                className="flex items-center gap-3 text-forge-light hover:text-white text-sm transition-colors group"
              >
                <MessageCircle size={14} className="text-forge-ember" />
                Text for a quick quote
              </a>
              <a
                href="https://www.instagram.com/lvwelding/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-forge-light hover:text-white text-sm transition-colors group"
              >
                <Instagram size={14} className="text-forge-gray" />
                @lvwelding
                <ExternalLink size={11} className="text-forge-gray" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-[0.15em] mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-forge-gray hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-[0.15em] mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-forge-gray hover:text-white text-sm transition-colors duration-200 text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-display font-700 text-white text-sm uppercase tracking-[0.15em] mb-5">
              Find Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-forge-red mt-0.5 shrink-0" />
                <p className="text-forge-gray text-sm leading-relaxed">
                  9921 NW 80th Ave, Unit 1J<br />
                  Hialeah Gardens, FL 33016
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={14} className="text-forge-gray mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Open 24 Hours</p>
                  <p className="text-forge-gray text-sm">7 Days a Week</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-forge-gray text-xs mb-2">Payment Accepted:</p>
                <div className="flex gap-2">
                  {['Zelle', 'Check'].map((p) => (
                    <span
                      key={p}
                      className="text-[11px] text-forge-light bg-forge-charcoal border border-white/5 px-2.5 py-1 rounded"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-forge-gray text-xs">
            © {new Date().getFullYear()} LV Welding Services Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-forge-gray text-xs">Licensed & Insured · South Florida</span>
            <a
              href="https://www.lvweldingservices.com"
              className="text-forge-gray hover:text-white text-xs transition-colors"
            >
              lvweldingservices.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
