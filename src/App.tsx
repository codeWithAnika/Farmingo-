import React, { useEffect } from 'react'
import './styles/globals.css'
import { gsap } from './lib/gsap'
import { ScrollTrigger } from './lib/gsap'

import CustomCursor from './components/ui/CustomCursor'
import Navbar from './components/ui/Navbar'
import HeroSection from './components/sections/HeroSection'
import CinematicSliceSection from './components/sections/CinematicSlice'
import ProductShowcase from './components/sections/ProductShowcase'
import FarmStory from './components/sections/FarmStory'
import WhyFarmingo from './components/sections/WhyFarmingo'
import Testimonials from './components/sections/Testimonials'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'

const App: React.FC = () => {
  useEffect(() => {
    // Initialise Lenis smooth scroll if available
    let lenis: any = null

    const initLenis = async () => {
      try {
        const LenisModule = await import('@studio-freight/lenis')
        const Lenis = LenisModule.default

        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          touchMultiplier: 2,
          
        })

        const raf = (time: number) => {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Sync GSAP ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update)
        gsap.ticker.add((time: number) => {
          lenis?.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)
      } catch {
        // Lenis not available, use native scroll — fine
      }
    }

    initLenis()

    // Page load animation
    gsap.set('body', { overflow: 'hidden' })
    const loadTl = gsap.timeline({
      onComplete: () => {
        gsap.set('body', { overflow: '' })
        ScrollTrigger.refresh()
      },
    })

    loadTl
      .fromTo(
        '#page-loader',
        { opacity: 1 },
        { opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.4 }
      )
      .set('#page-loader', { display: 'none' })

    return () => {
      lenis?.destroy()
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <>
      {/* Page loader */}
      <div
        id="page-loader"
        style={{
          position: 'fixed',
          inset: 0,
          background: '#050807',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '1.4rem',
            fontStyle: 'italic',
            fontWeight: 300,
            color: '#F6B332',
            letterSpacing: '0.15em',
          }}
        >
          Farmingo
        </p>
        <div
          style={{
            width: '48px',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, #F6B332, transparent)',
            animation: 'loader-line 1s ease-in-out infinite',
          }}
        />
        <style>{`
          @keyframes loader-line {
            0% { transform: scaleX(0); opacity: 0; }
            50% { transform: scaleX(1); opacity: 1; }
            100% { transform: scaleX(0); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Custom cursor (desktop only) */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Main site */}
      <div className="noise-overlay">
        <Navbar />
        <main>
          <HeroSection />
          <CinematicSliceSection />
          <ProductShowcase />
          <FarmStory />
          <WhyFarmingo />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
