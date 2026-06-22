import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin)

export { gsap, ScrollTrigger }

export const EASING = {
  luxury: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  smooth: 'power3.out',
  reveal: 'power4.out',
  slow: 'power2.inOut',
}

export const DURATIONS = {
  fast: 0.6,
  medium: 1.0,
  slow: 1.6,
  cinematic: 2.4,
}
