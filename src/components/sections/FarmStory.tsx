import React, { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'

interface TimelineEvent {
  year: string
  title: string
  body: string
  detail: string
}

const timeline: TimelineEvent[] = [
  {
    year: 'November',
    title: 'Flowering',
    body: 'The mango blossoms appear like ivory frost on the trees of Ratnagiri. Each panicle holds thousands of tiny flowers — only a few will become the mangoes you hold.',
    detail: 'Sea breeze from the Arabian coast keeps the orchard temperature between 24–28°C — the precise window for optimal set.',
  },
  {
    year: 'February',
    title: 'The Set',
    body: 'Fruit begins to form. Our orchard team walks every row, removing excess fruit to ensure the remaining mangoes receive the full force of each tree\'s energy.',
    detail: 'We thin to 3–4 fruits per panicle. Less fruit, more sweetness.',
  },
  {
    year: 'April',
    title: 'Maturation',
    body: 'The mangoes swell toward perfection over 10 weeks, fed by laterite-rich soil and winter rainfall stored deep in the earth. Their skin turns from green to a deep amber-gold.',
    detail: 'Brix levels rise daily. We measure each week. We wait for 22°.',
  },
  {
    year: 'May–June',
    title: 'The Harvest',
    body: 'Harvested before dawn, when temperatures are lowest, by hands that have picked this fruit for three generations. Each mango is cut with its stalk intact to prevent sap burn.',
    detail: 'Within 6 hours of harvest, every fruit is graded, wrapped, and refrigerated.',
  },
]

const FarmStory: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const timelineItemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header
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

      // Timeline line draw
      ScrollTrigger.create({
        trigger: lineRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
        onUpdate: (self) => {
          if (lineRef.current) {
            lineRef.current.style.backgroundSize = `1px ${self.progress * 100}%`
          }
        },
      })

      // Timeline items
      timelineItemRefs.current.forEach((item, i) => {
        if (!item) return
        ScrollTrigger.create({
          trigger: item,
          start: 'top 78%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              item,
              { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
              { opacity: 1, x: 0, duration: 1, ease: 'power4.out' }
            )
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="farm-story"
      className="section-pad relative"
      style={{ background: '#050807' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />

      <div className="container-luxury">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-24" style={{ opacity: 0 }}>
          <p className="label-xs text-gold mb-5" style={{ fontSize: '0.62rem', letterSpacing: '0.25em' }}>
            THREE GENERATIONS · RATNAGIRI · MAHARASHTRA
          </p>
          <h2
            className="text-cream leading-tight"
            style={{
              fontFamily: 'Cormorant Garamond',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
            }}
          >
            A year in one fruit.
          </h2>
          <p
            className="mt-6 mx-auto max-w-xl"
            style={{ color: 'rgba(245,242,234,0.45)', fontSize: '0.95rem', lineHeight: 1.75 }}
          >
            Every Farmingo Alphonso carries the memory of eight months of work,
            three seasons of rain, and a family that has grown nothing else since 1967.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
            style={{
              width: '1px',
              background: 'linear-gradient(to bottom, #F6B332, rgba(246,179,50,0.2))',
              backgroundSize: '1px 0%',
              backgroundRepeat: 'no-repeat',
            }}
          />

          {/* Events */}
          <div className="space-y-20">
            {timeline.map((event, i) => (
              <div
                key={event.year}
                ref={(el) => { timelineItemRefs.current[i] = el }}
                className={`relative grid grid-cols-2 gap-16 items-center ${i % 2 === 0 ? '' : ''}`}
                style={{ opacity: 0 }}
              >
                {/* Center dot */}
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border"
                  style={{ background: '#050807', borderColor: '#F6B332', zIndex: 10 }}
                />
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full"
                  style={{ background: 'rgba(246,179,50,0.08)', zIndex: 9 }}
                />

                {i % 2 === 0 ? (
                  <>
                    {/* Left content */}
                    <div className="text-right pr-10">
                      <p className="label-xs text-gold mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                        {event.year.toUpperCase()}
                      </p>
                      <h3
                        className="text-cream mb-3"
                        style={{
                          fontFamily: 'Cormorant Garamond',
                          fontSize: '2rem',
                          fontWeight: 300,
                          fontStyle: 'italic',
                        }}
                      >
                        {event.title}
                      </h3>
                      <p style={{ color: 'rgba(245,242,234,0.5)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                        {event.body}
                      </p>
                    </div>

                    {/* Right detail */}
                    <div className="pl-10">
                      <div
                        className="glass-card p-5 rounded-sm border-l-2"
                        style={{ borderLeftColor: 'rgba(246,179,50,0.4)' }}
                      >
                        <p
                          style={{
                            fontFamily: 'Cormorant Garamond',
                            fontSize: '1.05rem',
                            color: 'rgba(245,242,234,0.6)',
                            fontStyle: 'italic',
                            lineHeight: 1.65,
                          }}
                        >
                          "{event.detail}"
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left detail */}
                    <div className="text-right pr-10">
                      <div
                        className="glass-card p-5 rounded-sm border-r-2 ml-auto"
                        style={{ borderRightColor: 'rgba(246,179,50,0.4)' }}
                      >
                        <p
                          style={{
                            fontFamily: 'Cormorant Garamond',
                            fontSize: '1.05rem',
                            color: 'rgba(245,242,234,0.6)',
                            fontStyle: 'italic',
                            lineHeight: 1.65,
                          }}
                        >
                          "{event.detail}"
                        </p>
                      </div>
                    </div>

                    {/* Right content */}
                    <div className="pl-10">
                      <p className="label-xs text-gold mb-3" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                        {event.year.toUpperCase()}
                      </p>
                      <h3
                        className="text-cream mb-3"
                        style={{
                          fontFamily: 'Cormorant Garamond',
                          fontSize: '2rem',
                          fontWeight: 300,
                          fontStyle: 'italic',
                        }}
                      >
                        {event.title}
                      </h3>
                      <p style={{ color: 'rgba(245,242,234,0.5)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                        {event.body}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Farm credentials */}
        <div className="mt-28 pt-16 border-t" style={{ borderColor: 'rgba(246,179,50,0.1)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { value: '1967', label: 'Est. in Ratnagiri' },
              { value: '12 ac', label: 'Orchard area' },
              { value: '320+', label: 'Mango trees' },
              { value: '3rd', label: 'Generation farmers' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p
                  className="text-gold"
                  style={{ fontFamily: 'Cormorant Garamond', fontSize: '2.5rem', fontWeight: 300 }}
                >
                  {item.value}
                </p>
                <p className="label-xs mt-2" style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.6rem' }}>
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />
    </section>
  )
}

export default FarmStory
