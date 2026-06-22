import React from 'react'

interface MangoSVGProps {
  width?: number
  height?: number
  className?: string
  id?: string
  showStem?: boolean
  opacity?: number
}

const MangoSVG: React.FC<MangoSVGProps> = ({
  width = 400,
  height = 460,
  className = '',
  id = 'mango-main',
  showStem = true,
  opacity = 1,
}) => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      viewBox="0 0 400 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <defs>
        <radialGradient id={`mg-body-${id}`} cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="30%" stopColor="#F6B332" />
          <stop offset="65%" stopColor="#E8921A" />
          <stop offset="85%" stopColor="#C97820" />
          <stop offset="100%" stopColor="#7A4A10" />
        </radialGradient>

        <radialGradient id={`mg-blush-${id}`} cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#F6B332" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#F6B332" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`mg-highlight-${id}`} cx="35%" cy="30%" r="35%">
          <stop offset="0%" stopColor="#FFFDE7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
        </radialGradient>

        <radialGradient id={`mg-shadow-${id}`} cx="70%" cy="80%" r="45%">
          <stop offset="0%" stopColor="#3A1A00" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#3A1A00" stopOpacity="0" />
        </radialGradient>

        <linearGradient id={`mg-stem-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A2800" />
          <stop offset="100%" stopColor="#2A1400" />
        </linearGradient>

        <filter id={`mg-glow-${id}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ambient glow behind mango */}
      <ellipse cx="195" cy="370" rx="130" ry="30" fill="#F6B332" opacity="0.08" />
      <ellipse cx="195" cy="380" rx="90" ry="18" fill="#F6B332" opacity="0.06" />

      {/* Main mango body - realistic kidney/oval shape */}
      <path
        d="M195 380
           C 110 380, 50 310, 48 230
           C 46 150, 90 55, 150 32
           C 170 24, 185 22, 200 22
           C 220 22, 240 28, 258 42
           C 290 66, 330 130, 334 210
           C 338 295, 290 380, 195 380 Z"
        fill={`url(#mg-body-${id})`}
      />

      {/* Red/orange blush on left upper */}
      <path
        d="M195 380
           C 110 380, 50 310, 48 230
           C 46 150, 90 55, 150 32
           C 170 24, 185 22, 200 22
           C 220 22, 240 28, 258 42
           C 290 66, 330 130, 334 210
           C 338 295, 290 380, 195 380 Z"
        fill={`url(#mg-blush-${id})`}
      />

      {/* Deep shadow - lower right */}
      <path
        d="M195 380
           C 110 380, 50 310, 48 230
           C 46 150, 90 55, 150 32
           C 170 24, 185 22, 200 22
           C 220 22, 240 28, 258 42
           C 290 66, 330 130, 334 210
           C 338 295, 290 380, 195 380 Z"
        fill={`url(#mg-shadow-${id})`}
      />

      {/* Specular highlight */}
      <ellipse
        cx="145"
        cy="105"
        rx="42"
        ry="60"
        fill={`url(#mg-highlight-${id})`}
        transform="rotate(-20, 145, 105)"
      />

      {/* Small secondary highlight */}
      <ellipse
        cx="175"
        cy="75"
        rx="18"
        ry="24"
        fill="#FFFDE7"
        opacity="0.25"
        transform="rotate(-15, 175, 75)"
      />

      {/* Skin texture lines - subtle */}
      <path
        d="M120 160 C 140 140, 170 130, 195 135"
        stroke="#E8921A"
        strokeWidth="0.8"
        strokeOpacity="0.3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M100 220 C 130 200, 165 195, 200 198"
        stroke="#E8921A"
        strokeWidth="0.6"
        strokeOpacity="0.2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M240 100 C 260 120, 275 155, 278 190"
        stroke="#C97820"
        strokeWidth="0.6"
        strokeOpacity="0.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Stem */}
      {showStem && (
        <>
          <path
            d="M200 22 C 198 12, 196 4, 194 0 C 193 -2, 196 -2, 198 0 C 200 4, 202 12, 203 22"
            fill={`url(#mg-stem-${id})`}
            opacity="0.9"
          />
          {/* Leaf */}
          <path
            d="M198 18 C 208 8, 228 4, 242 10 C 248 13, 248 18, 240 20 C 226 22, 210 20, 198 18 Z"
            fill="#1A3A18"
            opacity="0.85"
          />
          <path
            d="M198 18 C 208 8, 228 4, 242 10"
            stroke="#2A5A22"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          {/* Leaf vein */}
          <path
            d="M200 18 C 215 12, 232 10, 240 12"
            stroke="#2A5A22"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </>
      )}
    </svg>
  )
}

export default MangoSVG
