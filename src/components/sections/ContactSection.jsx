import React from 'react'

export function ContactSection() {
  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-4xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="terminal-header justify-center">
          &gt;_ CONTACT.ME
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Reach Out // Connect // Let's Build Something
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        <a
          href="mailto:varunrohith.dev@gmail.com"
          className="cyber-card px-6 py-6 flex flex-col items-center text-center gap-3 hover:border-[#00d4aa]/60 hover:shadow-[0_0_20px_rgba(0,212,170,0.1)] group transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5 fill-current text-[#00d4aa]" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div>
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1">Email</span>
            <span className="text-xs font-bold text-white group-hover:text-[#00d4aa] transition-colors break-all">varunrohith.dev@gmail.com</span>
          </div>
        </a>

        <a
          href="tel:+918072206175"
          className="cyber-card px-6 py-6 flex flex-col items-center text-center gap-3 hover:border-[#b44fd4]/60 hover:shadow-[0_0_20px_rgba(180,79,212,0.1)] group transition-all duration-300"
        >
          <div className="w-12 h-12 rounded-full bg-[#b44fd4]/10 border border-[#b44fd4]/25 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg className="w-5 h-5 fill-current text-[#b44fd4]" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1">Phone</span>
            <span className="text-xs font-bold text-white group-hover:text-[#b44fd4] transition-colors">+91 80722 06175</span>
          </div>
        </a>

        <div className="cyber-card px-6 py-6 flex flex-col items-center text-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#ff007f]/10 border border-[#ff007f]/25 flex items-center justify-center">
            <svg className="w-5 h-5 fill-current text-[#ff007f]" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <span className="block text-[9px] font-mono text-slate-500 uppercase tracking-wider mb-1">Location</span>
            <span className="text-xs font-bold text-white">Chennai, Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      {/* Social Links Row */}
      <div className="cyber-card p-8 border-[#00d4aa]/20 shadow-[0_12px_35px_rgba(0,0,0,0.5)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4aa]/50 to-transparent" />

        <p className="text-center font-mono text-[9px] text-slate-500 uppercase tracking-widest mb-6">// CONNECT ON SOCIAL PLATFORMS</p>

        <div className="flex flex-wrap justify-center gap-5">
          {/* GitHub */}
          <a
            href="https://github.com/varunrohith-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-slate-950/60 border border-slate-800 hover:border-[#00d4aa]/50 hover:bg-[#00d4aa]/5 rounded-xl group transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-[#00d4aa] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold text-white uppercase group-hover:text-[#00d4aa] transition-colors">GitHub</span>
              <span className="block text-[9px] font-mono text-slate-500">@varunrohith-dev</span>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/varun-rohith"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 bg-slate-950/60 border border-slate-800 hover:border-[#b44fd4]/50 hover:bg-[#b44fd4]/5 rounded-xl group transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-[#b44fd4] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold text-white uppercase group-hover:text-[#b44fd4] transition-colors">LinkedIn</span>
              <span className="block text-[9px] font-mono text-slate-500">varun-rohith</span>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:varunrohith.dev@gmail.com"
            className="flex items-center gap-3 px-6 py-4 bg-slate-950/60 border border-slate-800 hover:border-[#ff007f]/50 hover:bg-[#ff007f]/5 rounded-xl group transition-all duration-300"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-[#ff007f] transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div>
              <span className="block text-xs font-bold text-white uppercase group-hover:text-[#ff007f] transition-colors">Email</span>
              <span className="block text-[9px] font-mono text-slate-500">varunrohith.dev@gmail.com</span>
            </div>
          </a>
        </div>

        {/* Status Footer */}
        <div className="flex justify-center items-center gap-2 mt-8 font-mono text-[9px] text-slate-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          AVAILABLE FOR HIRE · IMMEDIATE JOIN · CHENNAI, INDIA
        </div>
      </div>
    </div>
  )
}
