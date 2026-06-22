import React from 'react'
import { motion } from 'framer-motion'

interface LuxuryCardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hover?: boolean
}

const LuxuryCard: React.FC<LuxuryCardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  if (!hover) {
    return (
      <div
        className={`glass-card rounded-sm p-8 ${className}`}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={`glass-card rounded-sm p-8 cursor-pointer relative group ${className}`}
      onClick={onClick}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: 'rgba(245, 242, 234, 0.03)',
        border: '1px solid rgba(246, 179, 50, 0.12)',
      }}
    >
      {/* Gold shimmer on hover */}
      <motion.div
        className="absolute inset-0 rounded-sm opacity-0"
        style={{
          background: 'linear-gradient(135deg, rgba(246,179,50,0.06) 0%, transparent 60%)',
          border: '1px solid rgba(246, 179, 50, 0.35)',
        }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}

export default LuxuryCard
