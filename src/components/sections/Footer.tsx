import React from 'react'

const WHATSAPP_NUMBER = '919004977167'

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer
      className="relative pt-24 pb-10"
      style={{ background: '#020504', borderTop: '1px solid rgba(246,179,50,0.1)' }}
    >
      {/* Main footer grid */}
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-16 mb-20">
          {/* Brand column */}
          <div>
            {/* Gold seal / logo mark */}
            <div className="mb-6">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <circle cx="28" cy="28" r="26" stroke="#F6B332" strokeWidth="0.75" opacity="0.4" />
                <circle cx="28" cy="28" r="22" stroke="#F6B332" strokeWidth="0.5" opacity="0.2" />
                {/* Stylised 'F' mark */}
                <path
                  d="M21 18h14M21 18v20M21 28h10"
                  stroke="#F6B332"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Small mango shape */}
                <path
                  d="M33 36 C33 32, 36 29, 36 26 C36 23, 34 21, 32 21 C30 21, 29 23, 29 26 C29 29, 32 32, 33 36Z"
                  stroke="#F6B332"
                  strokeWidth="0.75"
                  fill="none"
                  opacity="0.6"
                />
              </svg>
            </div>

            <p
              className="text-cream mb-1 tracking-widest"
              style={{ fontFamily: 'Cormorant Garamond', fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.2em' }}
            >
              FARMINGO
            </p>
            <p className="label-xs text-gold mb-6" style={{ fontSize: '0.58rem', letterSpacing: '0.2em' }}>
              RATNAGIRI ALPHONSO · EST. 2019
            </p>
            <p style={{ color: 'rgba(245,242,234,0.35)', fontSize: '0.85rem', lineHeight: 1.75, maxWidth: '260px' }}>
              Single-origin Alphonso mangoes from the laterite orchards of Ratnagiri,
              Maharashtra. Harvested once a year. Delivered to your door.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center transition-all duration-300 hover:border-gold"
                style={{ border: '1px solid rgba(246,179,50,0.2)' }}
                aria-label="WhatsApp"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(245,242,234,0.4)">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation columns */}
          {[
            {
              title: 'Order',
              links: ['1 Dozen Box', '2 Dozen Box', 'Customizable Box', 'Corporate Orders', 'Bulk Enquiry'],
            },
            {
              title: 'Story',
              links: ['Our Orchard', 'The Alphonso Variety', 'GI Certification', 'Our Process', 'Sustainability'],
            },
            {
              title: 'Contact',
              links: ['+91 90049 77167', 'Ratnagiri, Maharashtra', 'Track My Order', 'Returns Policy'],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="label-xs text-gold mb-6" style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}>
                {col.title.toUpperCase()}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link === '+91 90049 77167' ? `https://wa.me/${WHATSAPP_NUMBER}` : '#'}
                      target={link === '+91 90049 77167' ? '_blank' : undefined}
                      rel={link === '+91 90049 77167' ? 'noopener noreferrer' : undefined}
                      style={{
                        color: 'rgba(245,242,234,0.4)',
                        fontFamily: 'DM Sans',
                        fontSize: '0.88rem',
                        transition: 'color 0.3s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = '#F6B332' }}
                      onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(245,242,234,0.4)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* GI Badge strip */}
        <div
          className="flex items-center gap-6 py-8 mb-10 flex-wrap"
          style={{ borderTop: '1px solid rgba(246,179,50,0.08)', borderBottom: '1px solid rgba(246,179,50,0.08)' }}
        >
          {[
            'GI Tagged · Ratnagiri Alphonso',
            'APEDA Certified Export Quality',
            'Zero Artificial Ripening',
            'Farm-to-Door · 24 hr Cold Chain',
          ].map((badge, i) => (
            <React.Fragment key={badge}>
              <span
                className="label-xs"
                style={{ color: 'rgba(245,242,234,0.3)', fontSize: '0.6rem', letterSpacing: '0.15em' }}
              >
                {badge}
              </span>
              {i < 3 && (
                <span style={{ color: 'rgba(246,179,50,0.2)', fontSize: '0.5rem' }}>◆</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p style={{ color: 'rgba(245,242,234,0.2)', fontSize: '0.78rem', fontFamily: 'DM Sans' }}>
            © {year} Farmingo. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Sale', 'Shipping Policy'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  color: 'rgba(245,242,234,0.2)',
                  fontSize: '0.78rem',
                  fontFamily: 'DM Sans',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(246,179,50,0.6)' }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(245,242,234,0.2)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
