import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import fullMango from '../../assets/fullmango.png'
import firstSlice from '../../assets/firstslice.png'
import secondSlice from '../../assets/secondslice.png'
import lastSlice from '../../assets/lastslice.png'

const CinematicSliceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  // Stage refs
  const wholeMangoRef = useRef<HTMLDivElement>(null)
  const bladeRef = useRef<HTMLDivElement>(null)
  const slicesContainerRef = useRef<HTMLDivElement>(null)
  const slice1Ref = useRef<HTMLDivElement>(null)
  const slice2Ref = useRef<HTMLDivElement>(null)
  const slice3Ref = useRef<HTMLDivElement>(null)
  const label1Ref = useRef<HTMLDivElement>(null)
  const label2Ref = useRef<HTMLDivElement>(null)
  const label3Ref = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=500%',
          scrub: 2,
          pin: pinRef.current,
          pinSpacing: true,
          anticipatePin: 1,
        },
      })

      // ── Stage 1 (0–20%): whole mango + headline appear ──
      tl.fromTo(wholeMangoRef.current,
        { opacity: 0, scale: 0.75, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power3.out' }, 0)
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.2)

      // ── Stage 2 (20–40%): blade sweeps across ──
      tl.fromTo(bladeRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.8, ease: 'power2.inOut' }, 1)
      tl.to(headlineRef.current,
        { opacity: 0, y: -20, duration: 0.4 }, 1.5)
      tl.to(bladeRef.current,
        { opacity: 0, duration: 0.3 }, 1.8)

      // ── Stage 3 (40–65%): whole fades, 3 slices explode apart ──
      tl.to(wholeMangoRef.current,
        { opacity: 0, scale: 0.9, duration: 0.4 }, 1.9)
      tl.fromTo(slicesContainerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.1 }, 2.0)
      tl.fromTo(slice1Ref.current,
        { y: 0, x: 0, rotate: 0, opacity: 0 },
        { y: -120, x: -30, rotate: -8, opacity: 1, duration: 1, ease: 'power4.out' }, 2.0)
      tl.fromTo(slice2Ref.current,
        { y: 0, x: 0, rotate: 0, opacity: 0 },
        { y: 0, x: 0, rotate: 2, opacity: 1, duration: 1, ease: 'power4.out' }, 2.1)
      tl.fromTo(slice3Ref.current,
        { y: 0, x: 0, rotate: 0, opacity: 0 },
        { y: 110, x: 20, rotate: 10, opacity: 1, duration: 1, ease: 'power4.out' }, 2.2)

      // ── Stage 4 (65–85%): quality labels slide in ──
      tl.fromTo(label1Ref.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 2.9)
      tl.fromTo(label2Ref.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 3.1)
      tl.fromTo(label3Ref.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, 3.3)

      // ── Stage 5 (85–100%): particle burst ──
      tl.fromTo(particlesRef.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }, 3.7)

    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const qualityLabels = [
    {
      ref: label1Ref,
      stage: 'FIRST SLICE',
      title: 'GI Tagged',
      sub: 'Ratnagiri Origin · Certified',
      body: 'Geographical indication\nprotected since 2018',
      align: 'right' as const,
    },
    {
      ref: label2Ref,
      stage: 'SECOND SLICE',
      title: 'Naturally Ripened',
      sub: 'Peak Sweetness',
      body: '22–24° Brix sweetness,\nnever artificially ripened',
      align: 'left' as const,
    },
    {
      ref: label3Ref,
      stage: 'THIRD SLICE',
      title: 'Farm Fresh',
      sub: 'Luxury Packaging',
      body: 'Harvested & delivered\nwithin 24 hours',
      align: 'right' as const,
    },
  ]

  return (
    <section ref={sectionRef} id="cinematic" style={{ background: '#050807' }}>
      <div
        ref={pinRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: '#050807' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(246,179,50,0.07) 0%, transparent 70%)',
        }} />

        {/* Section headline */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-20 w-full pointer-events-none px-6">
          <p className="label-xs text-gold mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.28em' }}>
            THE FARMINGO DIFFERENCE
          </p>
        </div>

        {/* Main stage — centered */}
        <div className="relative flex items-center justify-center z-10" style={{ width: '100%', maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

          {/* Left labels column */}
          <div className="hidden lg:flex flex-col gap-10 items-end flex-1 pr-12">
            {/* Label 1 */}
            <div ref={label1Ref} style={{ opacity: 0 }} className="text-right">
              <p className="label-xs text-gold mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>FIRST SLICE</p>
              <div className="glass-card px-5 py-4 rounded-sm text-right inline-block" style={{ minWidth: '190px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.35rem', fontStyle: 'italic', color: '#F5F2EA' }}>GI Tagged</p>
                <p className="label-xs mt-1" style={{ color: 'rgba(245,242,234,0.38)', fontSize: '0.58rem' }}>Ratnagiri Origin · Certified</p>
                <div style={{ height: '1px', background: 'rgba(246,179,50,0.18)', margin: '10px 0' }} />
                <p style={{ color: 'rgba(245,242,234,0.48)', fontSize: '0.8rem', lineHeight: 1.65 }}>Geographical indication<br/>protected since 2018</p>
              </div>
            </div>

            {/* Label 3 */}
            <div ref={label3Ref} style={{ opacity: 0 }} className="text-right">
              <p className="label-xs text-gold mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>THIRD SLICE</p>
              <div className="glass-card px-5 py-4 rounded-sm text-right inline-block" style={{ minWidth: '190px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.35rem', fontStyle: 'italic', color: '#F5F2EA' }}>Farm Fresh</p>
                <p className="label-xs mt-1" style={{ color: 'rgba(245,242,234,0.38)', fontSize: '0.58rem' }}>Luxury Packaging</p>
                <div style={{ height: '1px', background: 'rgba(246,179,50,0.18)', margin: '10px 0' }} />
                <p style={{ color: 'rgba(245,242,234,0.48)', fontSize: '0.8rem', lineHeight: 1.65 }}>Harvested & delivered<br/>within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Centre — mango animation stage */}
          <div className="relative flex-shrink-0" style={{ width: '340px', height: '440px' }}>

            {/* Headline overlay (Stage 1) */}
            <div ref={headlineRef} className="absolute -top-20 left-1/2 -translate-x-1/2 text-center whitespace-nowrap" style={{ opacity: 0, zIndex: 30 }}>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontStyle: 'italic', fontWeight: 300, color: '#F5F2EA' }}>
                Crafted by nature.
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, background: 'linear-gradient(135deg,#F6B332,#C8952A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Perfected by us.
              </p>
            </div>

            {/* Whole mango photo — Stage 1 */}
            <div
              ref={wholeMangoRef}
              className="absolute inset-0 flex items-center justify-center"
              style={{ opacity: 0, zIndex: 10 }}
            >
              <img
                src={fullMango}
                alt="Whole Alphonso Mango"
                style={{
                  width: '300px',
                  height: 'auto',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 40px rgba(246,179,50,0.25)) drop-shadow(0 0 60px rgba(246,179,50,0.10))',
                }}
              />
            </div>

            {/* Blade of light — Stage 2 */}
            <div
              ref={bladeRef}
              className="absolute left-0 right-0"
              style={{
                top: '50%',
                height: '3px',
                transformOrigin: 'left center',
                transform: 'scaleX(0)',
                opacity: 0,
                zIndex: 20,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,220,80,0.6) 20%, #FFFFFF 50%, rgba(255,220,80,0.6) 80%, transparent 100%)',
                boxShadow: '0 0 20px 4px rgba(246,179,50,0.6), 0 0 60px 12px rgba(246,179,50,0.2)',
                borderRadius: '2px',
              }}
            />

            {/* Three real slice photos — Stage 3 */}
            <div ref={slicesContainerRef} className="absolute inset-0 flex items-center justify-center" style={{ opacity: 0, zIndex: 15 }}>

              {/* Slice 1 — top */}
              <div ref={slice1Ref} className="absolute" style={{ opacity: 0, top: '30px', left: '50%', transform: 'translateX(-50%)' }}>
                <img
                  src={firstSlice}
                  alt="Mango slice 1"
                  style={{
                    width: '220px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 12px 28px rgba(246,179,50,0.3)) drop-shadow(0 0 40px rgba(246,179,50,0.12))',
                  }}
                />
              </div>

              {/* Slice 2 — middle */}
              <div ref={slice2Ref} className="absolute" style={{ opacity: 0, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <img
                  src={lastSlice}
                  alt="Mango slice 2"
                  style={{
                    width: '240px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 16px 32px rgba(246,179,50,0.35)) drop-shadow(0 0 50px rgba(246,179,50,0.15))',
                  }}
                />
              </div>

              {/* Slice 3 — bottom */}
              <div ref={slice3Ref} className="absolute" style={{ opacity: 0, bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
                <img
                  src={secondSlice}
                  alt="Mango slice 3"
                  style={{
                    width: '200px',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 10px 24px rgba(246,179,50,0.28)) drop-shadow(0 0 36px rgba(246,179,50,0.1))',
                  }}
                />
              </div>
            </div>

            {/* Stage 5: golden particles burst */}
            <div ref={particlesRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0, zIndex: 25 }}>
              {Array.from({ length: 18 }).map((_, i) => {
                const angle = (i / 18) * 360
                const dist = 80 + Math.random() * 80
                const size = 2 + Math.random() * 4
                const tx = Math.cos((angle * Math.PI) / 180) * dist
                const ty = Math.sin((angle * Math.PI) / 180) * dist
                return (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      width: `${size}px`,
                      height: `${size}px`,
                      borderRadius: '50%',
                      background: '#F6B332',
                      transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px))`,
                      opacity: 0.4 + Math.random() * 0.5,
                    }}
                  />
                )
              })}
            </div>
          </div>

          {/* Right label column */}
          <div className="hidden lg:flex flex-col justify-center items-start flex-1 pl-12">
            <div ref={label2Ref} style={{ opacity: 0 }}>
              <p className="label-xs text-gold mb-2" style={{ fontSize: '0.58rem', letterSpacing: '0.22em' }}>SECOND SLICE</p>
              <div className="glass-card px-5 py-4 rounded-sm inline-block" style={{ minWidth: '190px' }}>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.35rem', fontStyle: 'italic', color: '#F5F2EA' }}>Naturally Ripened</p>
                <p className="label-xs mt-1" style={{ color: 'rgba(245,242,234,0.38)', fontSize: '0.58rem' }}>Peak Sweetness</p>
                <div style={{ height: '1px', background: 'rgba(246,179,50,0.18)', margin: '10px 0' }} />
                <p style={{ color: 'rgba(245,242,234,0.48)', fontSize: '0.8rem', lineHeight: 1.65 }}>22–24° Brix sweetness,<br/>never artificially ripened</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile labels — shown below on small screens */}
        <div className="lg:hidden absolute bottom-8 left-0 right-0 flex justify-around px-4">
          {['GI Tagged', 'Naturally Ripened', 'Farm Fresh'].map((label) => (
            <div key={label} className="text-center glass-card px-3 py-2 rounded-sm">
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '0.9rem', fontStyle: 'italic', color: '#F5F2EA' }}>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CinematicSliceSection
