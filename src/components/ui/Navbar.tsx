import React, { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { label: 'Story', href: '#farm-story' },
    { label: 'Products', href: '#products' },
    { label: 'Origin', href: '#why' },
    { label: 'Order', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    gsap.fromTo(
      nav,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    )
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
        style={{
          background: scrolled
            ? 'rgba(5, 8, 7, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(246, 179, 50, 0.1)' : 'none',
        }}
      >
        <div className="container-luxury flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex flex-col leading-none cursor-pointer">
            <span
              className="label-xs text-gold tracking-[0.3em]"
              style={{ fontFamily: 'DM Sans, system-ui', fontSize: '0.6rem' }}
            >
              RATNAGIRI
            </span>
            <span
              className="text-cream text-2xl font-light tracking-[0.15em]"
              style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.15em' }}
            >
              FARMINGO
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="label-xs text-cream-dim hover:text-gold transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500 ease-out" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="label-xs px-6 py-3 border border-gold text-gold hover:bg-gold hover:text-bg transition-all duration-400 tracking-[0.18em]"
              style={{ fontFamily: 'DM Sans, system-ui', fontSize: '0.65rem' }}
            >
              Reserve a Box
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
              className="block w-6 h-px bg-gold"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-px bg-gold"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
              className="block w-6 h-px bg-gold"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: 'rgba(5, 8, 7, 0.97)' }}
          >
            <ul className="flex flex-col items-center gap-10">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.2, duration: 0.5 }}
                >
                  <a
                    href={item.href}
                    className="text-display text-cream hover:text-gold transition-colors duration-300"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  className="label-xs px-8 py-4 border border-gold text-gold tracking-[0.2em]"
                  onClick={() => setMenuOpen(false)}
                >
                  Reserve a Box
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
