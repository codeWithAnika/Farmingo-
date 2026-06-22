import React, { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    if (!cursor || !ring) return

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1,
        ease: 'power2.out',
      })

      gsap.to(ring, {
        x: mouseX,
        y: mouseY,
        duration: 0.4,
        ease: 'power2.out',
      })
    }

    const onMouseEnterLink = () => {
      gsap.to(ring, {
        width: 64,
        height: 64,
        borderColor: 'rgba(246, 179, 50, 0.8)',
        duration: 0.3,
      })
      gsap.to(cursor, {
        scale: 1.5,
        duration: 0.3,
      })
    }

    const onMouseLeaveLink = () => {
      gsap.to(ring, {
        width: 40,
        height: 40,
        borderColor: 'rgba(246, 179, 50, 0.5)',
        duration: 0.3,
      })
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    const links = document.querySelectorAll('a, button, [data-cursor]')
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseEnterLink)
      link.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseEnterLink)
        link.removeEventListener('mouseleave', onMouseLeaveLink)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        id="cursor"
        style={{
          position: 'fixed',
          width: 10,
          height: 10,
          borderRadius: '50%',
          background: '#F6B332',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          mixBlendMode: 'difference',
        }}
      />
      <div
        ref={ringRef}
        id="cursor-ring"
        style={{
          position: 'fixed',
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1px solid rgba(246, 179, 50, 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  )
}

export default CustomCursor
