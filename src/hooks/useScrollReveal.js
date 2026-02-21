import { useEffect, useRef } from 'react'

/**
 * Adds .animateFadeUp to children with `.reveal` when they enter viewport.
 */
export function useScrollReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('animateFadeUp')
          entry.target.classList.remove('opacity0Init')
          observer.unobserve(entry.target)
        })
      },
      { threshold }
    )

    const nodes = root.querySelectorAll('.reveal')
    nodes.forEach((n) => observer.observe(n))

    return () => observer.disconnect()
  }, [threshold])

  return ref
}
