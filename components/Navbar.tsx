'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-forge-dark/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="container-max section-padding py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center group"
          >
            <Image
              src="/LOGO.jpg"
              alt="LV Welding Services"
              width={160}
              height={56}
              className="h-12 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-forge-light hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-forge-red group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7867447479"
              className="flex items-center gap-2 text-forge-light hover:text-white text-sm font-medium transition-colors duration-200"
            >
              <Phone size={14} className="text-forge-red" />
              (786) 744-7479
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-forge-dark/98 backdrop-blur-xl flex flex-col pt-24 pb-12 px-8"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-4xl font-800 text-white text-left hover:text-forge-red transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            <div className="mt-auto space-y-4">
              <a
                href="tel:7867447479"
                className="flex items-center gap-3 text-white text-lg font-medium"
              >
                <div className="w-10 h-10 gradient-red rounded-full flex items-center justify-center">
                  <Phone size={16} />
                </div>
                (786) 744-7479
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
