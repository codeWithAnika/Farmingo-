import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { motion } from 'framer-motion'

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#F6B332" strokeWidth="1"/>
        <path d="M14 7v7l4 4" stroke="#F6B332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="2" fill="#F6B332" opacity="0.4"/>
      </svg>
    ),
    title: 'Harvested to Order',
    body: 'We don\'t maintain inventory. Your box is picked the morning your order is confirmed. Freshness measured in hours, not days.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C8 3 3 8 3 14s5 11 11 11 11-5 11-11" stroke="#F6B332" strokeWidth="1" strokeLinecap="round"/>
        <path d="M21 3l4 4-4 4" stroke="#F6B332" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14l4 4 6-7" stroke="#F6B332" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'GI Certified Origin',
    body: 'Every box bears the Geographical Indication mark — the legal proof that what you\'re holding is a true Ratnagiri Alphonso. No imitation. No blending.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#F6B332" strokeWidth="1"/>
        <path d="M4 12h20" stroke="#F6B332" strokeWidth="0.8"/>
        <circle cx="9" cy="17" r="2" stroke="#F6B332" strokeWidth="1"/>
        <path d="M14 16h6M14 18h4" stroke="#F6B332" strokeWidth="0.8" strokeLinecap="round"/>
        <path d="M10 8V6a4 4 0 018 0v2" stroke="#F6B332" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Zero Artificial Ripening',
    body: 'Industry-standard carbide ripening is banned from our orchards by principle. Our mangoes ripen on the tree, or not at all. The difference is everything.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L16.6 9.4 22.4 10.2 18.2 14.3 19.2 20.1 14 17.4 8.8 20.1 9.8 14.3 5.6 10.2 11.4 9.4 14 4z" stroke="#F6B332" strokeWidth="1" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Grade A+ Selection',
    body: 'Out of every 100 mangoes harvested, we select fewer than 40 for our boxes. Size, colour uniformity, and Brix are measured individually for every fruit.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 14c0-2.5 1-5 3-7M23 14c0 2.5-1 5-3 7" stroke="#F6B332" strokeWidth="1" strokeLinecap="round"/>
        <rect x="10" y="10" width="8" height="8" rx="1" stroke="#F6B332" strokeWidth="1"/>
        <path d="M14 10V8M14 18v2M10 14H8M18 14h2" stroke="#F6B332" strokeWidth="0.8" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Temperature-Controlled',
    body: 'Picked in the cool of early morning, packed in food-safe insulated boxes, and dispatched same day. The cold chain begins at the tree.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14c4-6 12-6 16 0M6 14c4 6 12 6 16 0" stroke="#F6B332" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" stroke="#F6B332" strokeWidth="1"/>
        <circle cx="14" cy="14" r="1" fill="#F6B332"/>
      </svg>
    ),
    title: 'Transparent Provenance',
    body: 'Each box includes the orchard GPS coordinates, harvest date, and the name of the family who grew it. Luxury should be traceable.',
  },
]

const WhyFarmingo: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(headerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' })
        },
      })

      const items = gridRef.current?.querySelectorAll('.feature-item')
      if (items) {
        ScrollTrigger.create({
          trigger: gridRef.current,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            gsap.fromTo(items, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power4.out', stagger: 0.1 })
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="why"
      className="section-pad relative"
      style={{ background: '#07100D' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />

      <div className="container-luxury">
        {/* Header */}
        <div ref={headerRef} className="flex items-end justify-between mb-20 flex-wrap gap-8" style={{ opacity: 0 }}>
          <div>
            <p className="label-xs text-gold mb-5" style={{ fontSize: '0.62rem', letterSpacing: '0.25em' }}>
              THE FARMINGO STANDARD
            </p>
            <h2
              className="text-cream leading-tight max-w-lg"
              style={{
                fontFamily: 'Cormorant Garamond',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 300,
                fontStyle: 'italic',
              }}
            >
              Why once you taste<br />Farmingo, you can't go back.
            </h2>
          </div>
          <p
            className="max-w-xs"
            style={{ color: 'rgba(245,242,234,0.4)', fontSize: '0.88rem', lineHeight: 1.75 }}
          >
            Most mangoes you buy have been artificially ripened, chilled for weeks, or grown without attention to Brix. We don't.
          </p>
        </div>

        {/* Feature grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'rgba(246,179,50,0.08)' }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="feature-item p-8 relative group"
              style={{ background: '#07100D', opacity: 0 }}
              whileHover={{ background: 'rgba(246,179,50,0.03)' }}
              transition={{ duration: 0.3 }}
            >
              {/* Hover glow corner */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-px"
                style={{ background: '#F6B332', transformOrigin: 'left' }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute top-0 left-0 h-12 w-px"
                style={{ background: '#F6B332', transformOrigin: 'top' }}
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="mb-6">{feature.icon}</div>
              <h3
                className="text-cream mb-3"
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: '1.35rem',
                  fontWeight: 400,
                }}
              >
                {feature.title}
              </h3>
              <p style={{ color: 'rgba(245,242,234,0.45)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                {feature.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="mt-16 p-10 flex items-center justify-between flex-wrap gap-6"
          style={{ background: 'rgba(246,179,50,0.04)', border: '1px solid rgba(246,179,50,0.12)' }}
        >
          <div>
            <p
              className="text-cream"
              style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.6rem', fontStyle: 'italic', fontWeight: 300 }}
            >
              The season is short. Our allocation is finite.
            </p>
            <p className="mt-1" style={{ color: 'rgba(245,242,234,0.4)', fontSize: '0.88rem' }}>
              Reserve before the trees run out.
            </p>
          </div>
          <a
            href="#contact"
            className="label-xs px-8 py-4 border border-gold text-gold hover:bg-gold hover:text-bg transition-all duration-400 inline-block"
            style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
          >
            Reserve Your Box
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />
    </section>
  )
}

export default WhyFarmingo
