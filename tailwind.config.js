/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050807',
        layer1: '#07100D',
        layer2: '#0A110F',
        gold: '#F6B332',
        'gold-muted': '#C8952A',
        'gold-dark': '#8B6B1A',
        cream: '#F5F2EA',
        'cream-dim': 'rgba(245,242,234,0.6)',
        'glass': 'rgba(245,242,234,0.04)',
        'glass-border': 'rgba(246,179,50,0.15)',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['clamp(3.5rem, 8vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.75rem, 3vw, 3rem)', { lineHeight: '1.15' }],
        'label': ['0.75rem', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'particle': 'particle 3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-18px) rotate(1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
        particle: {
          '0%': { transform: 'translate(0,0) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(var(--tx), var(--ty)) scale(0)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F6B332 0%, #C8952A 50%, #F6B332 100%)',
        'radial-glow': 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(246,179,50,0.12) 0%, transparent 70%)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
}
