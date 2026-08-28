import React from 'react'

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#b44fd4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="m9 12 2 2 4-4"/>
  </svg>
)

export function CertificationsSection() {
  const cert = {
    title: 'MERN Stack Development',
    issuer: 'Softlogic Systems, KK Nagar',
    date: '2025 – 2026',
    credId: 'SLS-MERN-2526-0849',
    bullets: [
      'Comprehensive hands-on training across the complete MERN stack architecture.',
      'Mastered database design, Mongoose schemas, and indexing optimizations with MongoDB.',
      'Built scalable RESTful backend servers utilizing Node.js, Express router, and custom middlewares.',
      'Engineered interactive frontend components using React.js, Tailwind CSS, and state management.',
      'Implemented robust application security protocols including JWT authentication and password hashing.'
    ],
    badge: 'MERN Stack Developer',
    skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS', 'RESTful APIs', 'Mongoose']
  }

  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="terminal-header justify-center" style={{ color: '#b44fd4' }}>
          &gt;_ CERTIFICATIONS.LOG
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Verified Credentials // System Logs // Competence Records
        </p>
      </div>

      {/* Full-width Cert Card */}
      <div className="cyber-card w-full shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-[#b44fd4]/30 hover:border-[#b44fd4]/60 hover:shadow-[0_15px_30px_rgba(180,79,212,0.2)] transition-all duration-300 relative overflow-hidden">

        {/* Neon glow accent background inside card */}
        <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-[#b44fd4]/8 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full bg-[#00d4aa]/5 blur-2xl pointer-events-none" />

        {/* Scanline effect */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#b44fd4]/60 to-transparent" />

        <div className="p-6 md:p-10 relative z-10">
          
          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#b44fd4]/10 border border-[#b44fd4]/25 rounded-xl">
                <ShieldIcon />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-[#00d4aa] uppercase tracking-widest mt-0.5">
                  {cert.issuer}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[9px] font-mono text-[#b44fd4] bg-[#b44fd4]/10 border border-[#b44fd4]/25 px-3 py-1 rounded-full uppercase tracking-wider">
                {cert.badge}
              </span>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                VERIFIED_NODE ✓
              </span>
            </div>
          </div>

          {/* Two-column layout: bullets + skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Left: Curriculum Bullets */}
            <div>
              <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider mb-4">// CURRICULUM_MODULES</span>
              <ul className="space-y-3">
                {cert.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs md:text-sm leading-relaxed">
                    <span className="text-[#b44fd4] font-mono text-sm mt-0.5 shrink-0">▹</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Skills + Credential Info */}
            <div className="flex flex-col justify-between space-y-6">
              <div>
                <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider mb-4">// SKILLS_ACQUIRED</span>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xxs font-mono bg-[#b44fd4]/5 border border-[#b44fd4]/20 text-[#b44fd4] px-2.5 py-1.5 rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Footer */}
              <div className="bg-slate-950/60 border border-slate-800/60 rounded-xl p-5 font-mono text-[10px] text-slate-500 space-y-2.5">
                <div className="flex justify-between items-center">
                  <span>CREDENTIAL_ID:</span>
                  <span className="text-slate-300 font-bold tracking-wider">{cert.credId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DATE_COMPLETED:</span>
                  <span className="text-[#b44fd4] font-bold">{cert.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ISSUED_BY:</span>
                  <span className="text-slate-300 font-bold">Softlogic Systems</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-slate-900">
                  <span>STATUS:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    ACTIVE & VALID
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
