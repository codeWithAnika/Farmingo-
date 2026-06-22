import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { ScrollTrigger } from '../../lib/gsap'
import fullMango from '../../assets/fullmango.png'
import GoldButton from '../ui/GoldButton'

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const mangoRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const label1Ref = useRef<HTMLDivElement>(null)
  const label2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.8 })

      tl.fromTo(glowRef.current,
        { opacity: 0, scale: 0.6 },
        { opacity: 1, scale: 1, duration: 2.4, ease: 'power3.out' }
      )
      tl.fromTo(mangoRef.current,
        { y: 100, opacity: 0, scale: 0.82, rotate: -4 },
        { y: 0, opacity: 1, scale: 1, rotate: 0, duration: 2.2, ease: 'power4.out' },
        '-=2'
      )
      tl.fromTo(badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=1.4'
      )
      tl.fromTo(headlineRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' },
        '-=1'
      )
      tl.fromTo(subRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      tl.fromTo(ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      tl.fromTo([label1Ref.current, label2Ref.current],
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' },
        '-=0.4'
      )

      // Floating loop
      gsap.to(mangoRef.current, {
        y: -20, rotate: 1.5, duration: 5,
        ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 3,
      })

      // Glow breathe
      gsap.to(glowRef.current, {
        opacity: 0.55, scale: 1.1, duration: 4,
        ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 3,
      })

      // Scroll parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          gsap.set(mangoRef.current, { y: self.progress * -90, opacity: 1 - self.progress * 0.7 })
          gsap.set(headlineRef.current, { y: self.progress * -55, opacity: 1 - self.progress * 0.9 })
          gsap.set(glowRef.current, { opacity: (1 - self.progress) * 0.8 })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#050807' }}
    >
      {/* Ambient radial glow */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 70% 65% at 62% 55%, rgba(246,179,50,0.13) 0%, rgba(246,179,50,0.05) 45%, transparent 72%)',
        opacity: 0,
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(246,179,50,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(246,179,50,0.03) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="container-luxury relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-0 items-center min-h-screen py-32">

          {/* Left – text */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div ref={badgeRef} className="flex items-center gap-3 mb-10" style={{ opacity: 0 }}>
              <div className="h-px w-12 bg-gold opacity-60" />
              <span className="label-xs text-gold tracking-[0.25em]">Ratnagiri · GI Tagged · Alphonso</span>
            </div>

            <div ref={headlineRef} style={{ opacity: 0 }}>
              <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3.8rem, 7.5vw, 7.5rem)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 0.92, color: '#F5F2EA' }}>
                The King
              </h1>
              <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3.8rem, 7.5vw, 7.5rem)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 0.92, color: '#F5F2EA' }}>
                of Mangoes.
              </h1>
              <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(3.8rem, 7.5vw, 7.5rem)', fontWeight: 300, fontStyle: 'italic', letterSpacing: '-0.02em', lineHeight: 0.92, background: 'linear-gradient(135deg,#F6B332,#C8952A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Reserved.
              </h1>
            </div>

            <div ref={subRef} className="mt-10 max-w-md" style={{ opacity: 0 }}>
              <p style={{ fontFamily: 'DM Sans, system-ui', fontSize: '1rem', color: 'rgba(245,242,234,0.55)', lineHeight: 1.75 }}>
                Handpicked at peak ripeness from the sun-drenched orchards of Ratnagiri.
                The Alphonso mango — saffron-hued, voluptuous, unrivalled — delivered to
                your door in a single precious season.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-6 mt-12" style={{ opacity: 0 }}>
              <GoldButton size="lg">
                <span>Reserve This Season</span>
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
                  <path d="M0 6h14M9 1l5 5-5 5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </GoldButton>
              <a href="#cinematic" className="label-xs flex items-center gap-2 group" style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.65rem', letterSpacing: '0.18em' }}>
                <span className="group-hover:text-gold transition-colors duration-300">Discover the story</span>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className="group-hover:translate-y-1 transition-transform duration-300">
                  <path d="M5 0v14M1 9l4 5 4-5" stroke="#F6B332" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 mt-16 pt-10" style={{ borderTop: '1px solid rgba(246,179,50,0.12)' }}>
              {[
                { value: '1 kg', label: 'Minimum Order' },
                { value: '6–12', label: 'Mangoes per kg' },
                { value: '4.9★', label: 'Customer Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.75rem', fontWeight: 300, color: '#F6B332' }}>{stat.value}</p>
                  <p className="label-xs mt-1" style={{ color: 'rgba(245,242,234,0.32)', fontSize: '0.6rem' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – real mango photo */}
          <div className="flex items-center justify-center order-1 lg:order-2 relative">
            {/* Decorative rings */}
            <div className="absolute rounded-full" style={{ width: 'clamp(320px,44vw,520px)', height: 'clamp(320px,44vw,520px)', border: '1px solid rgba(246,179,50,0.07)' }} />
            <div className="absolute rounded-full" style={{ width: 'clamp(260px,36vw,440px)', height: 'clamp(260px,36vw,440px)', border: '1px solid rgba(246,179,50,0.12)' }} />

            {/* Golden spotlight beneath mango */}
            <div className="absolute rounded-full" style={{ width: 'clamp(180px,26vw,340px)', height: 'clamp(180px,26vw,340px)', background: 'radial-gradient(ellipse, rgba(246,179,50,0.20) 0%, transparent 70%)' }} />

            {/* Real mango photo */}
            <div ref={mangoRef} className="relative z-10" style={{ opacity: 0, filter: 'drop-shadow(0 30px 60px rgba(246,179,50,0.18)) drop-shadow(0 0 80px rgba(246,179,50,0.08))' }}>
              <img
                src={fullMango}
                alt="Ratnagiri Alphonso Mango"
                style={{ width: 'clamp(280px, 36vw, 460px)', height: 'auto', objectFit: 'contain' }}
              />
            </div>

            {/* Floating labels */}
            <div ref={label1Ref} className="absolute left-0 top-1/3 hidden lg:block" style={{ opacity: 0 }}>
              <div className="glass-card px-4 py-3 rounded-sm">
                <p className="label-xs text-gold" style={{ fontSize: '0.55rem' }}>GI CERTIFIED</p>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '0.95rem', color: '#F5F2EA', marginTop: '2px' }}>Ratnagiri, Maharashtra</p>
              </div>
            </div>

            <div ref={label2Ref} className="absolute right-0 bottom-1/3 hidden lg:block" style={{ opacity: 0 }}>
              <div className="glass-card px-4 py-3 rounded-sm">
                <p className="label-xs text-gold" style={{ fontSize: '0.55rem' }}>SWEETNESS INDEX</p>
                <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '0.95rem', color: '#F5F2EA', marginTop: '2px' }}>22–24° Brix</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-16" style={{ background: 'linear-gradient(to bottom, rgba(246,179,50,0.6), transparent)', animation: 'scroll-line 2s ease-in-out infinite' }} />
      </div>
      <style>{`@keyframes scroll-line { 0%,100%{opacity:0;transform:scaleY(0);transform-origin:top} 50%{opacity:1;transform:scaleY(1);transform-origin:top} }`}</style>
    </section>
  )
}

export default HeroSection
