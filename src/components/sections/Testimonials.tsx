import React, { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "I've eaten Alphonso mangoes my whole life — in Pune, in London, everywhere. Nothing I've had even approaches what Farmingo delivered. The fragrance alone stopped conversation at the table.",
    name: 'Priya Mehta',
    title: 'Restaurateur, Mumbai',
    rating: 5,
  },
  {
    quote: "We sent three boxes to our most important clients this season. One of them called within hours just to say thank you. That has never happened with any other gesture we've made.",
    name: 'Rohit Singhania',
    title: 'Partner, Singhania Law',
    rating: 5,
  },
  {
    quote: "As someone who grew up in Ratnagiri, I am very particular. Farmingo is the only delivery I've found that actually tastes like picking it from the tree. The packaging is extraordinary.",
    name: 'Sonal Deshpande',
    title: 'Food Writer, Condé Nast Traveller India',
    rating: 5,
  },
  {
    quote: "We've ordered every season for four years. My children now refuse to eat any other mango. I consider this a personal inconvenience and a testament to Farmingo's quality.",
    name: 'Arun Krishnamurthy',
    title: 'Founder, Atelier Capital',
    rating: 5,
  },
  {
    quote: "The difference is the Brix. You can feel the sweetness — not sugary, but complex, almost floral. I compared it side by side with a market Alphonso. It was embarrassing for the market one.",
    name: 'Dr. Nandini Rao',
    title: 'Food Scientist, CFTRI Mysore',
    rating: 5,
  },
]

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            headerRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }
          )
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      style={{ background: '#050807' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />

      {/* Decorative large quote mark */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        style={{
          fontFamily: 'Cormorant Garamond',
          fontSize: 'clamp(12rem, 20vw, 20rem)',
          color: 'rgba(246,179,50,0.04)',
          lineHeight: 1,
          fontStyle: 'italic',
        }}
      >
        "
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20" style={{ opacity: 0 }}>
          <p className="label-xs text-gold mb-5" style={{ fontSize: '0.62rem', letterSpacing: '0.25em' }}>
            FROM OUR CUSTOMERS
          </p>
          <h2
            className="text-cream"
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            Words from those who know.
          </h2>
        </div>

        {/* Main testimonial display */}
        <div className="max-w-3xl mx-auto text-center mb-16 min-h-[280px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#F6B332">
                    <path d="M7 1l1.5 3.2 3.5.5-2.5 2.4.6 3.4L7 9 3.9 10.5l.6-3.4L2 4.7l3.5-.5L7 1z" />
                  </svg>
                ))}
              </div>

              <blockquote
                className="text-cream mb-10 leading-relaxed"
                style={{
                  fontFamily: 'Cormorant Garamond',
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.85rem)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: 'rgba(245,242,234,0.85)',
                  lineHeight: 1.6,
                }}
              >
                "{testimonials[active].quote}"
              </blockquote>

              <div className="flex flex-col items-center gap-1.5">
                <div className="h-px w-8 bg-gold opacity-40 mb-3" />
                <p
                  className="text-cream"
                  style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.05em' }}
                >
                  {testimonials[active].name}
                </p>
                <p className="label-xs" style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.6rem', letterSpacing: '0.18em' }}>
                  {testimonials[active].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="relative cursor-pointer transition-all duration-400"
              style={{
                width: i === active ? '32px' : '8px',
                height: '2px',
                background: i === active ? '#F6B332' : 'rgba(246,179,50,0.2)',
                border: 'none',
                padding: 0,
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Compact testimonial strip below */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'rgba(246,179,50,0.06)' }}>
          {[
            { label: 'Orders this season', value: '2,400+' },
            { label: 'Average rating', value: '4.9 / 5' },
            { label: 'Repeat customers', value: '78%' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-10 px-6"
              style={{ background: '#050807' }}
            >
              <p
                className="text-gold"
                style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.8rem', fontWeight: 300 }}
              >
                {stat.value}
              </p>
              <p className="label-xs mt-2" style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.6rem' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />
    </section>
  )
}

export default Testimonials
