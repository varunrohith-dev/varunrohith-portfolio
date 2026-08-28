import React from 'react'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function Navbar() {
  const activeSection = usePortfolioStore((state) => state.activeSection)
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection)

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Education', id: 'education' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Contact', id: 'contact' },
  ]

  const handleNav = (id) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-3 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-slate-800/40 shadow-[0_2px_15px_rgba(0,0,0,0.4)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Brand Info */}
        <div 
          onClick={() => handleNav('about')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-black border border-neon-cyan/30 flex items-center justify-center text-lg font-bold text-neon-cyan shadow-[0_0_10px_rgba(0,212,170,0.15)] group-hover:border-neon-cyan transition-colors duration-300">
            Ω
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-bold tracking-widest text-slate-100 uppercase group-hover:text-neon-cyan transition-colors duration-300">
              Varun Rohith K V
            </span>
            <span className="text-[10px] font-mono text-neon-purple tracking-widest uppercase">
              MERN Stack Developer
            </span>
          </div>
        </div>

        {/* HUD Navigation Links */}
        <nav className="glass-panel px-3 py-1.5 rounded-full border border-slate-800/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex items-center gap-1 md:gap-2 overflow-x-auto no-scrollbar max-w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNav(item.id)
                }}
                className={`relative px-3 py-1 rounded-full text-[10px] md:text-xs font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer ${
                  isActive 
                    ? 'text-neon-cyan shadow-[0_0_15px_rgba(0,212,170,0.15)]' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {/* Glowing border underlay for active items */}
                {isActive && (
                  <span className="absolute inset-0 rounded-full border border-neon-cyan/40 bg-neon-cyan/5 -z-10 animate-pulse-glow" />
                )}
                {item.name}
              </a>
            )
          })}
        </nav>

        {/* Social Quicklinks Panel */}
        <div className="flex items-center gap-3">
          <a 
            href="https://github.com/varunrohith-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 shadow-md transition-all duration-300"
            title="GitHub Profile"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a 
            href="https://www.linkedin.com/in/varun-rohith" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-slate-800 bg-slate-950/80 flex items-center justify-center text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/50 shadow-md transition-all duration-300"
            title="LinkedIn Profile"
          >
            <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
        
      </div>
    </header>
  )
}
