import React from 'react'
import { motion } from 'framer-motion'

interface GoldButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'outline' | 'solid'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

const GoldButton: React.FC<GoldButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'outline',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'px-6 py-3 text-[0.65rem]',
    md: 'px-10 py-4 text-[0.7rem]',
    lg: 'px-14 py-5 text-[0.75rem]',
  }

  const baseProps = {
    className: `relative overflow-hidden inline-flex items-center gap-3 tracking-[0.2em] uppercase font-medium transition-all duration-500 ${sizeClasses[size]} ${className}`,
    onClick,
    style: { fontFamily: 'DM Sans, system-ui, sans-serif' },
  }

  if (variant === 'solid') {
    return (
      <motion.button
        {...baseProps}
        style={{ ...baseProps.style, background: '#F6B332', color: '#050807' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.button>
    )
  }

  return (
    <motion.button
      {...baseProps}
      style={{
        ...baseProps.style,
        border: '1px solid #F6B332',
        color: '#F6B332',
        background: 'transparent',
      }}
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <motion.span
        className="absolute inset-0"
        style={{ background: '#F6B332', zIndex: 0 }}
        initial={{ y: '100%' }}
        variants={{ hover: { y: '0%' } }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
      <motion.span
        className="relative z-10 flex items-center gap-3"
        variants={{ hover: { color: '#050807' } }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.span>
    </motion.button>
  )
}

export default GoldButton
