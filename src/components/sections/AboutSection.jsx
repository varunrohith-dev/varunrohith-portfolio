import React from 'react'
import { usePortfolioStore } from '../../store/usePortfolioStore'

export function AboutSection() {
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection)

  const handleCTA = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative w-full h-full min-h-[calc(100vh-140px)] flex flex-col justify-center items-center z-10">
      
      {/* Subtle animated dot grid background locally restricted to this section */}
      <div className="absolute inset-0 dot-grid-bg-animated pointer-events-none opacity-50 z-0 rounded-2xl" />

      {/* Main Grid Content */}
      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          
          {/* Status Badge */}
          <div className="self-start inline-flex items-center gap-2 bg-[#00d4aa]/15 border border-[#00d4aa]/30 px-3 py-1 rounded-full text-[10px] font-mono text-[#00d4aa] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
            SYSTEM ONLINE · AVAILABLE FOR HIRE
          </div>

          {/* Large Name */}
          <h1 
            className="text-white font-extrabold leading-none uppercase select-none tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(28px, 4.2vw, 56px)' }}
          >
            VARUN ROHITH K V
          </h1>

          {/* Subtitle */}
          <p className="font-mono font-bold tracking-[0.25em] text-[#00d4aa] text-sm md:text-base uppercase">
            MERN STACK DEVELOPER
          </p>

          {/* Location */}
          <p className="text-xs text-slate-400 tracking-wider flex items-center gap-1.5 font-mono">
            <svg className="w-4 h-4 text-[#b44fd4] fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Chennai, Tamil Nadu, India
          </p>

          {/* Bio Description */}
          <div className="text-sm md:text-base text-slate-300 leading-relaxed max-w-xl space-y-3 font-light">
            <p>
              Crafting high-performance, interactive, and responsive full-stack web applications utilizing the MERN stack.
            </p>
            <p className="text-xs border-l-2 border-[#b44fd4] pl-3 py-1.5 bg-[#b44fd4]/5 font-mono text-slate-400 italic">
              Motivated MERN Stack Developer with hands-on experience building full-stack web applications. Proficient in RESTful APIs, JWT authentication, and responsive UI development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => handleCTA('projects')}
              className="px-6 py-3 bg-[#00d4aa]/10 text-[#00d4aa] border border-[#00d4aa]/40 hover:bg-[#00d4aa]/25 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_15px_rgba(0,212,170,0.1)] hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] cursor-pointer"
            >
              Explore Projects
            </button>
            <button
              onClick={() => handleCTA('contact')}
              className="px-6 py-3 bg-slate-900/60 text-slate-300 border border-slate-700 hover:text-white hover:border-slate-500 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer"
            >
              Get In Touch
            </button>
            <a
              href="https://drive.google.com/file/d/1gP1YyeWyQ8knm2bOmmzSFza_DFrYaZ5l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-slate-900/60 text-slate-300 border border-slate-700 hover:text-white hover:border-slate-500 rounded-lg text-xs font-bold tracking-widest uppercase transition-all duration-300 cursor-pointer flex items-center gap-2"
              title="Download Resume"
            >
              {/* Resume / Download icon */}
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Resume
            </a>
          </div>

          {/* Social Icon Row */}
          <div className="flex items-center gap-3 pt-1">
            <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">CONNECT //</span>
            <a
              href="https://github.com/varunrohith-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-slate-400 hover:text-[#00d4aa] hover:border-[#00d4aa]/50 transition-all duration-300"
              title="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/varun-rohith"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-slate-400 hover:text-[#b44fd4] hover:border-[#b44fd4]/50 transition-all duration-300"
              title="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:varunrohith.dev@gmail.com"
              className="w-8 h-8 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-slate-400 hover:text-[#ff007f] hover:border-[#ff007f]/50 transition-all duration-300"
              title="Email"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Right Column: Info Panel Card */}
        <div className="lg:col-span-5 w-full">
          <div className="cyber-card p-6 md:p-8 flex flex-col space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Card Header / Diagnostics */}
            <div className="border-b border-slate-800/80 pb-4 flex justify-between items-center">
              <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider">// CONNECTION DIAGNOSTICS</span>
              <div className="inline-flex items-center gap-1.5 bg-[#00d4aa]/10 border border-[#00d4aa]/25 px-2 py-0.5 rounded-full text-[9px] font-mono text-[#00d4aa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-ping" />
                ONLINE
              </div>
            </div>

            {/* Info details */}
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Direct Connection</span>
                <a href="mailto:varunrohith.dev@gmail.com" className="text-[#00d4aa] hover:underline font-bold text-sm block">
                  varunrohith.dev@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Voice Channel</span>
                <a href="tel:+918072206175" className="text-[#b44fd4] hover:underline font-bold text-sm block">
                  +91 80722 06175
                </a>
              </div>

              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Role Classification</span>
                <span className="text-white font-bold text-sm block uppercase tracking-wide">
                  MERN STACK DEVELOPER
                </span>
              </div>

              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Academic Core</span>
                <span className="text-slate-300 block">
                  B.E. Electronics & Communication
                </span>
                <span className="text-[#b44fd4] text-[10px] font-bold block mt-0.5">
                  CGPA: 6.4 / 10
                </span>
              </div>
            </div>

            {/* Objectives Block */}
            <div className="bg-slate-950/50 border border-slate-800/60 p-4 rounded-lg space-y-2">
              <span className="font-mono text-[9px] text-slate-500 block uppercase tracking-wider">// OBJ.LOG</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Seeking an entry-level software developer role to contribute clean, efficient code, build interactive full-stack applications, and design scalable MERN architectures.
              </p>
            </div>

            {/* Matrix Status Footer */}
            <div className="flex justify-between items-center text-[9px] font-mono text-slate-600 pt-2 border-t border-slate-900">
              <span>LOC: 12.9716° N, 80.2437° E</span>
              <span className="text-emerald-600 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                IMMEDIATE JOIN
              </span>
            </div>

          </div>
        </div>

      </div>
      
    </div>
  )
}
