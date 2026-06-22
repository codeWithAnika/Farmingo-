import React, { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { motion, AnimatePresence } from 'framer-motion'
import productBox from '../../assets/product-box.png'

const ProductShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const boxImageRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  // Customise state
  const [customQty, setCustomQty] = useState(3)
  const [customWeight, setCustomWeight] = useState<'500g' | '1kg' | '2kg'>('1kg')
  const [customMessage, setCustomMessage] = useState(false)
  const [customPremiumWrap, setCustomPremiumWrap] = useState(false)

  const weightPrice: Record<string, number> = { '500g': 700, '1kg': 1200, '2kg': 2200 }
  const customTotal =
    customQty * weightPrice[customWeight] +
    (customMessage ? 150 : 0) +
    (customPremiumWrap ? 300 : 0)

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
      ScrollTrigger.create({
        trigger: boxImageRef.current,
        start: 'top 78%',
        once: true,
        onEnter: () => {
          gsap.fromTo(boxImageRef.current, { opacity: 0, scale: 0.88, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1.4, ease: 'power4.out' })
        },
      })
      ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current!.querySelectorAll('.prod-card'),
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1, ease: 'power4.out', stagger: 0.14 }
          )
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="products"
      className="section-pad relative"
      style={{ background: '#07100D' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />

      <div className="container-luxury">

        {/* Header */}
        <div ref={headerRef} className="mb-16 max-w-2xl" style={{ opacity: 0 }}>
          <p className="label-xs text-gold mb-5" style={{ fontSize: '0.62rem', letterSpacing: '0.25em' }}>
            SEASON 2025 · LIMITED ALLOCATION
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 300, fontStyle: 'italic', color: '#F5F2EA', lineHeight: 1.05 }}>
            Select Your Reserve
          </h2>
          <p className="mt-6" style={{ color: 'rgba(245,242,234,0.48)', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: '520px' }}>
            Every box is assembled by hand at the farm. We harvest only what we can deliver perfectly. Quantities are finite. Once the season ends, it ends.
          </p>
        </div>

        {/* Product box photo — centred showcase */}
        <div ref={boxImageRef} className="relative mb-20 rounded-sm overflow-hidden" style={{ opacity: 0 }}>
          <div className="relative" style={{ maxHeight: '480px', overflow: 'hidden' }}>
            <img
              src={productBox}
              alt="Farmingo Alphonso Mango Box"
              style={{
                width: '100%',
                height: '480px',
                objectFit: 'cover',
                objectPosition: 'center 30%',
                display: 'block',
              }}
            />
            {/* Gradient overlays for dark blending */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(5,8,7,0.55) 0%, transparent 40%, transparent 60%, rgba(5,8,7,0.55) 100%)' }} />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,8,7,0.2) 0%, transparent 30%, transparent 70%, rgba(7,16,13,0.9) 100%)' }} />
            {/* Overlay text */}
            <div className="absolute bottom-0 left-0 right-0 p-10 flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className="label-xs text-gold mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>THE FARMINGO BOX</p>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(1.6rem,3vw,2.5rem)', fontWeight: 300, fontStyle: 'italic', color: '#F5F2EA', lineHeight: 1.1 }}>
                  Luxury from orchard<br/>to your doorstep.
                </p>
              </div>
              <div className="flex items-center gap-6">
                {['Velvet-lined interior', 'Temperature-safe courier', 'Handwritten card included'].map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <div className="w-4 h-px bg-gold opacity-60" />
                    <span className="label-xs" style={{ color: 'rgba(245,242,234,0.55)', fontSize: '0.58rem' }}>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Three product cards */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">

          {/* ─── 1 Dozen ─── */}
          <motion.div
            className="prod-card relative"
            style={{ opacity: 0, background: 'rgba(246,179,50,0.035)', border: '1px solid rgba(246,179,50,0.28)' }}
            whileHover={{ y: -8, borderColor: 'rgba(246,179,50,0.55)' }}
            transition={{ duration: 0.5, ease: [0.25,0.46,0.45,0.94] }}
          >
            {/* Featured glow */}
            <motion.div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(246,179,50,0.07) 0%, transparent 55%)' }} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4 }} />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <span style={{ fontFamily: 'DM Sans', fontSize: '0.55rem', letterSpacing: '0.18em', color: '#F6B332', border: '1px solid rgba(246,179,50,0.3)', padding: '5px 10px' }}>
                  MOST POPULAR
                </span>
                <div className="w-2 h-2 rounded-full bg-gold" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
              </div>

              {/* Visual bar chart */}
              <div className="flex items-end gap-1 mb-6 h-14">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="flex-1 rounded-full" style={{ height: `${40 + Math.sin(i) * 20}%`, background: i % 4 === 0 ? '#F6B332' : 'rgba(246,179,50,0.25)', transition: 'background 0.3s' }} />
                ))}
              </div>

              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.7rem', fontWeight: 300, fontStyle: 'italic', color: '#F5F2EA' }}>1 Dozen</h3>
              <p className="label-xs text-gold mt-1 mb-4" style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}>12 MANGOES · ~1.5 KG</p>

              <p style={{ color: 'rgba(245,242,234,0.5)', fontSize: '0.88rem', lineHeight: 1.7, flexGrow: 1 }}>
                The perfect introduction. Twelve hand-graded Alphonso mangoes — the ideal first order for the season.
              </p>

              <ul className="my-6 space-y-2">
                {['GI-certified Alphonso', 'Velvet tissue wrap', 'Sealed airtight', 'Same-day dispatch'].map((d) => (
                  <li key={d} className="flex items-center gap-2.5">
                    <div className="w-3 h-px bg-gold opacity-60 flex-shrink-0" />
                    <span style={{ color: 'rgba(245,242,234,0.42)', fontSize: '0.62rem', letterSpacing: '0.1em', fontFamily: 'DM Sans', textTransform: 'uppercase' }}>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px mb-6" style={{ background: 'rgba(246,179,50,0.12)' }} />
              <div className="flex items-end justify-between">
                <div>
                  <p style={{ color: 'rgba(245,242,234,0.28)', fontSize: '0.55rem', fontFamily: 'DM Sans', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>Starting from</p>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.1rem', fontWeight: 300, color: '#F6B332' }}>₹ 1,600</p>
                </div>
                <a href="#contact" style={{ fontFamily: 'DM Sans', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '10px 18px', border: '1px solid #F6B332', color: '#F6B332', cursor: 'pointer', transition: 'all 0.3s', display: 'inline-block', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#F6B332'; (e.target as HTMLElement).style.color = '#050807' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#F6B332' }}>
                  Reserve →
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─── 2 Dozen ─── */}
          <motion.div
            className="prod-card relative"
            style={{ opacity: 0, background: 'rgba(245,242,234,0.018)', border: '1px solid rgba(246,179,50,0.12)' }}
            whileHover={{ y: -8, borderColor: 'rgba(246,179,50,0.45)' }}
            transition={{ duration: 0.5, ease: [0.25,0.46,0.45,0.94] }}
          >
            <motion.div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(246,179,50,0.05) 0%, transparent 55%)' }} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4 }} />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="mb-8">
                <span style={{ fontFamily: 'DM Sans', fontSize: '0.55rem', letterSpacing: '0.18em', color: 'rgba(245,242,234,0.5)', border: '1px solid rgba(246,179,50,0.15)', padding: '5px 10px' }}>
                  BEST VALUE
                </span>
              </div>

              <div className="flex items-end gap-1 mb-6 h-14">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="flex-1 rounded-full" style={{ height: `${35 + Math.cos(i*0.5) * 25}%`, background: i % 6 === 0 ? '#F6B332' : 'rgba(246,179,50,0.2)' }} />
                ))}
              </div>

              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.7rem', fontWeight: 300, fontStyle: 'italic', color: '#F5F2EA' }}>2 Dozen</h3>
              <p className="label-xs text-gold mt-1 mb-4" style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}>24 MANGOES · ~3 KG</p>

              <p style={{ color: 'rgba(245,242,234,0.5)', fontSize: '0.88rem', lineHeight: 1.7, flexGrow: 1 }}>
                For families who take their summer seriously. Twenty-four perfectly ripened mangoes, enough for two unforgettable weeks.
              </p>

              <ul className="my-6 space-y-2">
                {['Hand-graded sizing', 'Double-layer cushioning', 'Temperature-safe courier', 'Same-day dispatch'].map((d) => (
                  <li key={d} className="flex items-center gap-2.5">
                    <div className="w-3 h-px bg-gold opacity-60 flex-shrink-0" />
                    <span style={{ color: 'rgba(245,242,234,0.42)', fontSize: '0.62rem', letterSpacing: '0.1em', fontFamily: 'DM Sans', textTransform: 'uppercase' }}>{d}</span>
                  </li>
                ))}
              </ul>

              <div className="h-px mb-6" style={{ background: 'rgba(246,179,50,0.1)' }} />
              <div className="flex items-end justify-between">
                <div>
                  <p style={{ color: 'rgba(245,242,234,0.28)', fontSize: '0.55rem', fontFamily: 'DM Sans', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>Starting from</p>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.1rem', fontWeight: 300, color: '#F6B332' }}>₹ 2,900</p>
                </div>
                <a href="#contact" style={{ fontFamily: 'DM Sans', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '10px 18px', border: '1px solid #F6B332', color: '#F6B332', cursor: 'pointer', transition: 'all 0.3s', display: 'inline-block', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#F6B332'; (e.target as HTMLElement).style.color = '#050807' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#F6B332' }}>
                  Reserve →
                </a>
              </div>
            </div>
          </motion.div>

          {/* ─── Customizable ─── */}
          <motion.div
            className="prod-card relative"
            style={{ opacity: 0, background: 'rgba(245,242,234,0.018)', border: '1px solid rgba(246,179,50,0.12)' }}
            whileHover={{ y: -8, borderColor: 'rgba(246,179,50,0.45)' }}
            transition={{ duration: 0.5, ease: [0.25,0.46,0.45,0.94] }}
          >
            <motion.div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(246,179,50,0.05) 0%, transparent 55%)' }} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.4 }} />

            <div className="relative z-10 p-8 flex flex-col h-full">
              <div className="mb-8">
                <span style={{ fontFamily: 'DM Sans', fontSize: '0.55rem', letterSpacing: '0.18em', color: '#F6B332', border: '1px solid rgba(246,179,50,0.3)', padding: '5px 10px' }}>
                  BUILD YOUR BOX
                </span>
              </div>

              <h3 style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.7rem', fontWeight: 300, fontStyle: 'italic', color: '#F5F2EA' }}>Customizable</h3>
              <p className="label-xs text-gold mt-1 mb-5" style={{ fontSize: '0.58rem', letterSpacing: '0.15em' }}>YOUR QUANTITY · YOUR WAY</p>

              <p style={{ color: 'rgba(245,242,234,0.5)', fontSize: '0.85rem', lineHeight: 1.7, marginBottom: '20px' }}>
                Corporate orders, bulk purchases, or simply a bespoke arrangement. You choose quantity and add-ons.
              </p>

              {/* Interactive configurator */}
              <div className="space-y-4 flex-grow">

                {/* Quantity selector */}
                <div>
                  <p style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'DM Sans', marginBottom: '8px' }}>
                    Dozens: <span style={{ color: '#F6B332' }}>{customQty}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCustomQty(Math.max(1, customQty - 1))}
                      style={{ width: '28px', height: '28px', border: '1px solid rgba(246,179,50,0.25)', color: '#F6B332', background: 'transparent', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}
                    >−</button>
                    <div className="flex-1 h-1 rounded-full" style={{ background: 'rgba(246,179,50,0.12)', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${(customQty / 10) * 100}%`, background: '#F6B332', borderRadius: '2px', transition: 'width 0.3s' }} />
                    </div>
                    <button
                      onClick={() => setCustomQty(Math.min(10, customQty + 1))}
                      style={{ width: '28px', height: '28px', border: '1px solid rgba(246,179,50,0.25)', color: '#F6B332', background: 'transparent', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}
                    >+</button>
                  </div>
                </div>

                {/* Weight selector */}
                <div>
                  <p style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontFamily: 'DM Sans', marginBottom: '8px' }}>Box size</p>
                  <div className="flex gap-2">
                    {(['500g', '1kg', '2kg'] as const).map((w) => (
                      <button
                        key={w}
                        onClick={() => setCustomWeight(w)}
                        style={{
                          flex: 1,
                          padding: '7px 0',
                          border: customWeight === w ? '1px solid #F6B332' : '1px solid rgba(246,179,50,0.18)',
                          background: customWeight === w ? 'rgba(246,179,50,0.1)' : 'transparent',
                          color: customWeight === w ? '#F6B332' : 'rgba(245,242,234,0.4)',
                          cursor: 'pointer',
                          fontFamily: 'DM Sans',
                          fontSize: '0.7rem',
                          letterSpacing: '0.1em',
                          transition: 'all 0.25s',
                        }}
                      >{w}</button>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div className="space-y-2">
                  {[
                    { label: 'Handwritten note', price: '+₹150', key: 'msg' },
                    { label: 'Premium wrap', price: '+₹300', key: 'wrap' },
                  ].map((addon) => (
                    <button
                      key={addon.key}
                      onClick={() => addon.key === 'msg' ? setCustomMessage(!customMessage) : setCustomPremiumWrap(!customPremiumWrap)}
                      className="w-full flex items-center justify-between p-2.5 transition-all duration-250"
                      style={{
                        border: (addon.key === 'msg' ? customMessage : customPremiumWrap)
                          ? '1px solid rgba(246,179,50,0.4)'
                          : '1px solid rgba(246,179,50,0.1)',
                        background: (addon.key === 'msg' ? customMessage : customPremiumWrap)
                          ? 'rgba(246,179,50,0.06)'
                          : 'transparent',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ color: 'rgba(245,242,234,0.55)', fontSize: '0.75rem', fontFamily: 'DM Sans' }}>{addon.label}</span>
                      <span style={{ color: '#F6B332', fontSize: '0.7rem', fontFamily: 'DM Sans' }}>{addon.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px mt-5 mb-5" style={{ background: 'rgba(246,179,50,0.1)' }} />

              {/* Live price */}
              <div className="flex items-end justify-between">
                <div>
                  <p style={{ color: 'rgba(245,242,234,0.28)', fontSize: '0.55rem', fontFamily: 'DM Sans', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '4px' }}>Estimated total</p>
                  <motion.p
                    key={customTotal}
                    initial={{ scale: 0.95, opacity: 0.6 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.1rem', fontWeight: 300, color: '#F6B332' }}
                  >
                    ₹ {customTotal.toLocaleString('en-IN')}
                  </motion.p>
                </div>
                <a href="#contact" style={{ fontFamily: 'DM Sans', fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '10px 18px', border: '1px solid #F6B332', color: '#F6B332', cursor: 'pointer', transition: 'all 0.3s', display: 'inline-block', textDecoration: 'none' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#F6B332'; (e.target as HTMLElement).style.color = '#050807' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'transparent'; (e.target as HTMLElement).style.color = '#F6B332' }}>
                  Reserve →
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer note */}
        <div className="mt-14 flex items-center justify-center gap-8">
          <div className="h-px flex-1" style={{ background: 'rgba(246,179,50,0.08)' }} />
          <p className="label-xs text-center" style={{ color: 'rgba(245,242,234,0.28)', fontSize: '0.6rem' }}>
            All prices include insulated packaging · Pan-India delivery · Season closes June 2025
          </p>
          <div className="h-px flex-1" style={{ background: 'rgba(246,179,50,0.08)' }} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />
    </section>
  )
}

export default ProductShowcase
