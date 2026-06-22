import React, { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { motion } from 'framer-motion'

const WHATSAPP_NUMBER = '919004977167'

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    box: '1dozen',
    quantity: '1',
    address: '',
    message: '',
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline()
          tl.fromTo(headerRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' })
          tl.fromTo(infoRef.current, { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 1, ease: 'power4.out' }, '-=0.8')
          tl.fromTo(formRef.current, { opacity: 0, x: 40 }, { opacity: 1, x: 0, duration: 1, ease: 'power4.out' }, '-=0.9')
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const BOX_LABELS: Record<string, string> = {
    '1dozen': '1 Dozen Box',
    '2dozen': '2 Dozen Box',
    'custom': 'Customizable Box',
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    const boxLabel = BOX_LABELS[formState.box] || formState.box
    const message = `Hello,\nI would like to place a mango order.\nName: ${formState.name}\nPhone: ${formState.phone}\nBox Type: ${boxLabel}\nQuantity: ${formState.quantity}\nAddress: ${formState.address}\nSpecial Requirements: ${formState.message || 'None'}\nPlease confirm my order.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank')
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(245,242,234,0.03)',
    border: '1px solid rgba(246,179,50,0.15)',
    color: '#F5F2EA',
    fontFamily: 'DM Sans, system-ui',
    fontSize: '0.9rem',
    padding: '14px 16px',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    appearance: 'none',
    WebkitAppearance: 'none',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'DM Sans',
    fontSize: '0.62rem',
    letterSpacing: '0.18em',
    textTransform: 'uppercase' as const,
    color: 'rgba(245,242,234,0.4)',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-pad relative"
      style={{ background: '#07100D' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />

      <div className="container-luxury">
        {/* Header */}
        <div ref={headerRef} className="mb-20" style={{ opacity: 0 }}>
          <p className="label-xs text-gold mb-5" style={{ fontSize: '0.62rem', letterSpacing: '0.25em' }}>
            RESERVE YOUR ALLOCATION
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
            Secure this season's mangoes.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left – info panel */}
          <div ref={infoRef} style={{ opacity: 0 }}>
            <div className="space-y-10">
              {/* Season info */}
              <div>
                <p className="label-xs text-gold mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>SEASON 2025</p>
                <p
                  className="text-cream mb-3"
                  style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.4rem', fontStyle: 'italic', fontWeight: 300 }}
                >
                  Limited to 500 boxes this season.
                </p>
                <p style={{ color: 'rgba(245,242,234,0.45)', fontSize: '0.88rem', lineHeight: 1.75 }}>
                  We harvest only what our 320 trees can produce. Once reserved quantities are met, the season is closed.
                </p>
              </div>

              {/* Delivery info */}
              <div className="space-y-4">
                {[
                  {
                    icon: '📍',
                    title: 'From Ratnagiri',
                    body: 'Shipped directly from the orchard. No warehousing, no middlemen.',
                  },
                  {
                    icon: '⚡',
                    title: '24–48 hr Delivery',
                    body: 'Same-day dispatch. Pan-India cold chain courier.',
                  },
                  {
                    icon: '🔒',
                    title: 'Reserve Now, Pay on Dispatch',
                    body: 'We confirm your reservation; payment processed when your box ships.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 items-start">
                    <div
                      className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                      style={{ border: '1px solid rgba(246,179,50,0.15)', fontSize: '1rem' }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '0.9rem', color: '#F5F2EA', fontWeight: 500 }}>
                        {item.title}
                      </p>
                      <p style={{ color: 'rgba(245,242,234,0.4)', fontSize: '0.82rem', lineHeight: 1.65, marginTop: '2px' }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="pt-8 border-t" style={{ borderColor: 'rgba(246,179,50,0.1)' }}>
                <p className="label-xs text-gold mb-4" style={{ fontSize: '0.6rem', letterSpacing: '0.2em' }}>WHATSAPP ORDERS & ENQUIRIES</p>
                <div className="space-y-2">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(245,242,234,0.55)', fontSize: '0.88rem', display: 'block', transition: 'color 0.3s' }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#F6B332' }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(245,242,234,0.55)' }}
                  >
                    +91 90049 77167
                  </a>
                  <p style={{ color: 'rgba(245,242,234,0.4)', fontSize: '0.82rem', lineHeight: 1.6, marginTop: '8px' }}>
                    Farmingo Orchards, Ratnagiri Taluka,<br />
                    Maharashtra 415612, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right – form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            <div
              className="p-10"
              style={{ background: 'rgba(245,242,234,0.02)', border: '1px solid rgba(246,179,50,0.12)' }}
            >
              <div className="space-y-6">
                {/* Name + Phone row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.5)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.15)' }}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.5)' }}
                      onBlur={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.15)' }}
                    />
                  </div>
                </div>

                {/* Box selection */}
                <div>
                  <label style={labelStyle}>Select Your Box</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: '1dozen', label: '1 Dozen Box', sub: '12 Mangoes' },
                      { id: '2dozen', label: '2 Dozen Box', sub: '24 Mangoes' },
                      { id: 'custom', label: 'Customizable Box', sub: 'Your Way' },
                    ].map((box) => (
                      <button
                        key={box.id}
                        onClick={() => setFormState({ ...formState, box: box.id })}
                        className="py-3 px-2 text-center transition-all duration-300"
                        style={{
                          border: formState.box === box.id
                            ? '1px solid #F6B332'
                            : '1px solid rgba(246,179,50,0.15)',
                          background: formState.box === box.id
                            ? 'rgba(246,179,50,0.08)'
                            : 'transparent',
                          cursor: 'pointer',
                        }}
                      >
                        <p
                          style={{
                            color: formState.box === box.id ? '#F6B332' : 'rgba(245,242,234,0.5)',
                            fontFamily: 'DM Sans',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                          }}
                        >
                          {box.label}
                        </p>
                        <p
                          style={{
                            color: 'rgba(245,242,234,0.3)',
                            fontFamily: 'DM Sans',
                            fontSize: '0.65rem',
                            marginTop: '2px',
                          }}
                        >
                          {box.sub}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label style={labelStyle}>Number of Boxes</label>
                  <div className="flex items-center gap-3">
                    {['1', '2', '3', '5', '10+'].map((q) => (
                      <button
                        key={q}
                        onClick={() => setFormState({ ...formState, quantity: q })}
                        className="w-10 h-10 text-center transition-all duration-300 label-xs"
                        style={{
                          border: formState.quantity === q
                            ? '1px solid #F6B332'
                            : '1px solid rgba(246,179,50,0.15)',
                          background: formState.quantity === q
                            ? 'rgba(246,179,50,0.08)'
                            : 'transparent',
                          color: formState.quantity === q ? '#F6B332' : 'rgba(245,242,234,0.4)',
                          fontSize: '0.7rem',
                          cursor: 'pointer',
                        }}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <label style={labelStyle}>Delivery Address</label>
                  <textarea
                    rows={3}
                    placeholder="Full delivery address including city and pincode"
                    value={formState.address}
                    onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.15)' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Special Instructions (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Delivery notes, ripeness preference..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: 'none',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.5)' }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(246,179,50,0.15)' }}
                  />
                </div>

                {/* Submit – WhatsApp */}
                <motion.button
                  onClick={handleSubmit}
                  className="w-full py-5 label-xs relative overflow-hidden flex items-center justify-center gap-3"
                  style={{
                    background: '#25D366',
                    color: '#fff',
                    border: 'none',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2em',
                    cursor: 'pointer',
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* WhatsApp icon */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order via WhatsApp
                </motion.button>

                <p className="text-center" style={{ color: 'rgba(245,242,234,0.25)', fontSize: '0.72rem' }}>
                  Tap to open WhatsApp with your order details pre-filled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(246,179,50,0.15), transparent)' }} />
    </section>
  )
}

export default ContactSection
