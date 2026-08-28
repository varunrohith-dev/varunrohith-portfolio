import React, { useEffect, useState } from 'react'

/**
 * ScrollProgressBar — thin neon-cyan bar at the very top of the viewport
 * that fills as the user scrolls through the snapped sections.
 */
export function ScrollProgressBar({ scrollContainerRef }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const container = scrollContainerRef?.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const maxScroll = scrollHeight - clientHeight
      if (maxScroll <= 0) return
      const pct = (scrollTop / maxScroll) * 100
      setProgress(Math.min(100, Math.max(0, pct)))
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => container.removeEventListener('scroll', handleScroll)
  }, [scrollContainerRef])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[100] bg-transparent">
      <div
        className="h-full transition-all duration-100 ease-out"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #00d4aa, #b44fd4)',
          boxShadow: '0 0 8px rgba(0, 212, 170, 0.7), 0 0 16px rgba(0, 212, 170, 0.3)'
        }}
      />
    </div>
  )
}
