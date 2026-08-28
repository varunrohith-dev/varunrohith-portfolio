import React, { useState } from 'react'

const PROJECTS_DATA = [
  {
    title: 'Plan Board',
    subtitle: 'MERN SaaS Application Stack',
    desc: 'A full-featured project management SaaS platform built on the MERN stack. Features drag-and-drop Kanban boards, team workspaces, role-based access control, and real-time collaboration tools for modern engineering teams.',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS', 'Mongoose', 'REST API'],
    liveUrl: 'https://plan-board-mern-saa-s-application-s.vercel.app/',
    gitUrl: 'https://github.com/varunrohith-dev/Plan-Board-MERN-SaaS-Application-Stack',
    badge: 'SaaS Platform',
    metrics: [
      { label: 'Architecture', value: 'MERN Full-Stack' },
      { label: 'Role Security', value: 'RBAC (Admin/User)' },
      { label: 'Data Model', value: 'Mongoose Schemas' },
      { label: 'Auth Protocol', value: 'JWT Bearer Token' }
    ],
    features: [
      'Built a full SaaS Kanban board with drag-and-drop task cards, column management, and multi-workspace support.',
      'Implemented RBAC with JWT-secured REST APIs, separating admin controls from standard team member permissions.',
      'Designed responsive React dashboards with real-time task updates, priority labels, and deadline tracking.'
    ]
  },
  {
    title: 'ChatHub TeamWork',
    subtitle: 'Real-Time Team Collaboration Chat',
    desc: 'A production-grade real-time team chat application supporting channel-based messaging, direct messages, and file sharing — built for seamless team collaboration with secure authentication and instant updates.',
    techs: ['MERN Stack', 'Socket.io', 'JWT Authentication', 'Tailwind CSS', 'MongoDB', 'Express.js'],
    liveUrl: 'https://chat-hub-team-work-8dlx.vercel.app/login',
    gitUrl: 'https://github.com/varunrohith-dev/ChatHub_TeamWork',
    badge: 'Real-Time Chat',
    metrics: [
      { label: 'Concurrency', value: 'Real-Time WebSockets' },
      { label: 'Messaging', value: 'Channel + DM Rooms' },
      { label: 'Sync Engine', value: 'Socket.io Events' },
      { label: 'Auth System', value: 'JWT Secure Login' }
    ],
    features: [
      'Integrated Socket.io for real-time bidirectional messaging with instant delivery across all connected clients.',
      'Built channel-based and direct message rooms with user presence indicators and read-receipt tracking.',
      'Secured all API routes and WebSocket handshakes using JWT authentication with refresh token rotation.'
    ]
  }
]

export function ProjectsSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const project = PROJECTS_DATA[activeIdx]

  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="terminal-header justify-center">
          &gt;_ SHIPPED_PROJECTS
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Production Deployments // System Nodes // Codebases
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6 font-mono text-xxs max-w-full overflow-x-auto no-scrollbar">
        {PROJECTS_DATA.map((proj, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-5 py-2.5 border rounded-lg uppercase tracking-wider transition-all duration-300 cursor-pointer text-xs ${
                isActive
                  ? 'border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10 shadow-[0_0_12px_rgba(0,212,170,0.15)]'
                  : 'border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 bg-slate-950/40'
              }`}
            >
              [{String(idx + 1).padStart(2, '0')}] {proj.title}
            </button>
          )
        })}
      </div>

      {/* Project Card */}
      <div
        key={activeIdx}
        className="cyber-card w-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[#00d4aa]/30 p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch relative overflow-hidden project-card-enter"
      >
        {/* Top scanning line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4aa]/65 to-transparent" />

        {/* Left: Description + Features + CTAs */}
        <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">

            {/* Header Badge Row */}
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/25 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {project.badge}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#00d4aa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                LIVE & DEPLOYED
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-[#b44fd4] uppercase tracking-widest">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light min-h-[50px]">
              {project.desc}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2 mt-4 pt-4 border-t border-slate-900">
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">// CORE FUNCTIONALITIES</span>
              <ul className="space-y-1.5">
                {project.features.map((feat, i) => (
                  <li key={i} className="text-xxs text-slate-400 flex items-start gap-2 leading-relaxed">
                    <span className="text-[#00d4aa] font-mono mt-0.5">&gt;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4 border-t border-slate-900/60">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-[#00d4aa] text-[#0a0a0f] hover:bg-[#00d4aa]/85 font-mono font-extrabold tracking-wider text-xs uppercase text-center rounded-lg shadow-[0_0_15px_rgba(0,212,170,0.15)] hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
              </svg>
              LIVE DEMO
            </a>
            <a
              href={project.gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono font-bold tracking-wider text-xs uppercase text-center rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              SOURCE CODE
            </a>
          </div>
        </div>

        {/* Right: Tech Spec Dashboard */}
        <div className="lg:w-5/12 bg-slate-950/65 border border-slate-900 p-6 rounded-xl flex flex-col justify-between space-y-6">

          <div className="space-y-4">
            <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider block">// SYSTEM_METRICS.CFG</span>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-3 bg-black/45 border border-slate-900 rounded-lg">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</span>
                  <span className="text-xs font-mono text-white font-bold block mt-1">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider block">// COMPONENT_STACK</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span key={tech} className="text-xxs font-mono bg-[#00d4aa]/5 border border-[#00d4aa]/15 text-[#00d4aa] px-2.5 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-900 pt-4 font-mono text-[9px] text-slate-500 space-y-1.5">
            <div className="flex justify-between">
              <span>DEPLOYED_ZONE:</span>
              <span className="text-slate-300 font-bold uppercase">Vercel</span>
            </div>
            <div className="flex justify-between">
              <span>DB_CLUSTER:</span>
              <span className="text-slate-300 font-bold">MongoDB Atlas</span>
            </div>
            <div className="flex justify-between">
              <span>LIVE_URL:</span>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-[#00d4aa] font-bold hover:underline truncate max-w-[150px]">
                VIEW DEMO ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
