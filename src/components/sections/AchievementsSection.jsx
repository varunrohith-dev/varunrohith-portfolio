import React, { useState } from 'react'
import { usePortfolioStore } from '../../store/usePortfolioStore'

const TrophyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ffaa00] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 0-6 6v5a6 6 0 0 0 12 0V8a6 6 0 0 0-6-6Z" />
  </svg>
)

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#00d4aa] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const ACHIEVEMENTS_LIST = [
  {
    id: 'languages',
    title: 'Language Interfaces',
    subtitle: 'Communication Channels',
    desc: 'Bilingual proficiency in English (Professional Working) and Tamil (Native Tongue) facilitating seamless team collaboration and reporting.',
    iconType: 'star-cyan',
    color: '#00d4aa',
    badge: 'LANGUAGES'
  },
  {
    id: 'availability',
    title: 'Immediate Onboarding',
    subtitle: 'Deployment Readiness',
    desc: 'Readily available for immediate joining. Open to full-time, on-site, or hybrid opportunities located in Chennai, India.',
    iconType: 'trophy',
    color: '#ffaa00',
    badge: 'AVAILABILITY'
  },
  {
    id: 'softskills',
    title: 'Professional Core',
    subtitle: 'Operational Competence',
    desc: 'Strong capacity for analytical problem-solving, structured team collaboration, keen attention to technical detail, and a rapid learning curve.',
    iconType: 'star-amber',
    color: '#ffaa00',
    badge: 'SOFT SKILLS'
  }
]

export function AchievementsSection() {
  const triggerParticleBurst = usePortfolioStore((state) => state.triggerParticleBurst)
  const equilibriumPositions = usePortfolioStore((state) => state.equilibriumPositions)
  const [clickedId, setClickedId] = useState(null)

  const handleAchievementClick = (id) => {
    setClickedId(id)
    setTimeout(() => setClickedId(null), 400)

    const baseCoords = equilibriumPositions['achievements'] || [3, -8, -4]
    const burstX = baseCoords[0] + (Math.random() - 0.5) * 3
    const burstY = baseCoords[1] + (Math.random() - 0.5) * 2
    const burstZ = baseCoords[2] + (Math.random() - 0.5) * 1

    triggerParticleBurst([burstX, burstY, burstZ])
  }

  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="terminal-header justify-center text-[#ffaa00]!">
          &gt;_ SPECIFICATIONS.DAT
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Additional Information // Operational Metrics // System Diagnostics
        </p>
      </div>

      <p className="text-xs text-slate-400 text-center max-w-2xl mx-auto mb-10 leading-relaxed">
        Click on each spec card below to release a physical particle-burst shockwave into the surrounding galactic void.
      </p>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {ACHIEVEMENTS_LIST.map((item) => {
          const isClicked = clickedId === item.id
          const isAmber = item.color === '#ffaa00'
          const accentColorClass = isAmber
            ? 'border-[#ffaa00]/20 hover:border-[#ffaa00]/60 hover:shadow-[0_0_20px_rgba(255,170,0,0.15)]'
            : 'border-[#00d4aa]/20 hover:border-[#00d4aa]/60 hover:shadow-[0_0_20px_rgba(0,212,170,0.15)]'
          
          const clickedGlow = isAmber
            ? 'border-[#ffaa00]/80 bg-[#ffaa00]/5 shadow-[0_0_25px_rgba(255,170,0,0.25)]'
            : 'border-[#00d4aa]/80 bg-[#00d4aa]/5 shadow-[0_0_25px_rgba(0,212,170,0.25)]'

          const badgeColorClass = isAmber
            ? 'text-[#ffaa00] bg-[#ffaa00]/10 border-[#ffaa00]/25'
            : 'text-[#00d4aa] bg-[#00d4aa]/10 border-[#00d4aa]/25'

          return (
            <div
              key={item.id}
              onClick={() => handleAchievementClick(item.id)}
              className={`cyber-card p-6 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.5)] cursor-pointer select-none transition-all duration-300 min-h-[340px] ${accentColorClass} ${
                isClicked ? `burst-active ${clickedGlow}` : ''
              }`}
            >
              <div>
                {/* Icon & Badge Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-2 bg-slate-900/50 rounded-lg border border-slate-800">
                    {item.iconType === 'trophy' ? (
                      <TrophyIcon />
                    ) : item.iconType === 'star-cyan' ? (
                      <StarIcon />
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#ffaa00] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-[8px] font-mono border px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeColorClass}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Subtitle / Category */}
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">
                  {item.subtitle}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white uppercase tracking-wide leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xxs leading-relaxed font-sans mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Particle Trigger Prompt */}
              <div className="border-t border-slate-900/60 pt-4 flex justify-between items-center font-mono text-[9px] text-slate-500">
                <span>STATUS:</span>
                <span className="text-slate-400 uppercase tracking-wider animate-pulse">
                  CLICK TO TRIGGER BURST
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

