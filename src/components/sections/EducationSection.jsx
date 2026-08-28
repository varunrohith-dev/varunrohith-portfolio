import React from 'react'

export function EducationSection() {
  const education = [
    {
      degree: 'B.E. — Electronics & Communication Engineering',
      institution: 'Vels Institute of Science, Technology & Advanced Studies, Chennai',
      period: 'Aug 2022 – May 2025',
      type: 'Undergraduate',
      description: 'Focused on core engineering principles, signal systems, microcontrollers, communication hardware design, and software fundamentals.',
      scoreType: 'CGPA SCORE',
      score: '6.4 / 10',
      color: '#00d4aa'
    },
    {
      degree: 'Diploma — Electrical & Electronics Engineering',
      institution: 'Muthiah Polytechnic College, Chidambaram',
      period: 'Jun 2019 – Jul 2022',
      type: 'Diploma Core',
      description: 'Gained practical expertise in industrial systems, circuits, electrical distribution networks, electronics installations, and engineering logic.',
      scoreType: 'PERCENTAGE SCORE',
      score: '72 %',
      color: '#b44fd4'
    }
  ]

  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="terminal-header justify-center">
          &gt;_ EDUCATION.SYS
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Academic Timeline // Verified Educational Credentials
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative w-full">
        {/* Central Vertical Connector Line (hidden on small, centered on desktop) */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#00d4aa]/25 -translate-x-1/2" />

        <div className="space-y-12 md:space-y-16 w-full">
          {education.map((edu, idx) => {
            const isEven = idx % 2 === 0
            const accentColorClass = edu.color === '#00d4aa' 
              ? 'border-[#00d4aa]/20 hover:border-[#00d4aa]/60 hover:shadow-[0_0_20px_rgba(0,212,170,0.15)]' 
              : 'border-[#b44fd4]/20 hover:border-[#b44fd4]/60 hover:shadow-[0_0_20px_rgba(180,79,212,0.15)]'
            const badgeColorClass = edu.color === '#00d4aa' 
              ? 'text-[#00d4aa] bg-[#00d4aa]/10 border-[#00d4aa]/25' 
              : 'text-[#b44fd4] bg-[#b44fd4]/10 border-[#b44fd4]/25'

            return (
              <div 
                key={edu.degree} 
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} w-full`}
              >
                {/* Timeline Dot */}
                <div 
                  className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full border-2 bg-[#0a0a0f] z-20 -translate-x-1/2 top-6 transition-all duration-300"
                  style={{ 
                    borderColor: edu.color,
                    boxShadow: `0 0 10px ${edu.color}`
                  }}
                />

                {/* Content Panel (aligned to left or right of center) */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className={`cyber-card p-6 shadow-[0_12px_35px_rgba(0,0,0,0.5)] ${accentColorClass}`}>
                    
                    {/* Header: badge and year */}
                    <div className={`flex flex-wrap justify-between items-center gap-2 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`text-[9px] font-mono border px-2 py-0.5 rounded-full uppercase tracking-wider ${badgeColorClass}`}>
                        {edu.type}
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-bold">
                        {edu.period}
                      </span>
                    </div>

                    {/* Degree & Institution */}
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide leading-snug">
                      {edu.degree}
                    </h3>
                    <p 
                      className="text-xs font-mono uppercase tracking-widest mb-3"
                      style={{ color: edu.color }}
                    >
                      {edu.institution}
                    </p>

                    {/* Description */}
                    <p className="text-slate-400 text-xxs leading-relaxed mb-4 font-sans">
                      {edu.description}
                    </p>

                    {/* Score / Grade */}
                    <div className="border-t border-slate-900 pt-3 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-slate-500 uppercase">{edu.scoreType}</span>
                      <span 
                        className="text-xs font-mono font-bold"
                        style={{ color: edu.color, textShadow: `0 0 8px ${edu.color}33` }}
                      >
                        {edu.score}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Empty column to occupy space on other side on desktop */}
                <div className="hidden md:block w-[10%]"></div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

