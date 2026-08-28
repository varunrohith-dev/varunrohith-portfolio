import React, { useState } from 'react'

const PROJECTS_DATA = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Full-Stack Retail System',
    desc: 'Designed and built a full-stack e-commerce engine featuring dynamic product catalogs, secure shopping cart management, and streamlined order processing pipelines.',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS', 'Mongoose'],
    liveUrl: 'https://github.com/varunrohith-dev',
    gitUrl: 'https://github.com/varunrohith-dev',
    badge: 'Enterprise Retail',
    metrics: [
      { label: 'API Endpoints', value: '15+ REST Routes' },
      { label: 'Role Security', value: 'RBAC (Admin/User)' },
      { label: 'Data Model', value: 'Mongoose Schemas' },
      { label: 'Auth Protocol', value: 'JWT Bearer Token' }
    ],
    features: [
      'Built secure user authentication with role-based access control (RBAC) separating administrative controls from customers.',
      'Designed 15+ RESTful endpoints utilizing Express router, structured input validation middlewares, and error handlers.',
      'Created responsive client dashboards with dynamic product listings, live cart counters, and summary checklists.'
    ]
  },
  {
    title: 'Blog & CMS Hub',
    subtitle: 'Rich Editor & Multi-User Platform',
    desc: 'Implemented a multi-user content publication platform featuring rich-text editing controls, structured content directories, and dynamic pagination.',
    techs: ['MERN Stack', 'React Quill', 'Multer', 'JWT', 'MongoDB Aggregation'],
    liveUrl: 'https://github.com/varunrohith-dev',
    gitUrl: 'https://github.com/varunrohith-dev',
    badge: 'Content Engine',
    metrics: [
      { label: 'Editor Module', value: 'React Quill' },
      { label: 'File Uploads', value: 'Multer Pipeline' },
      { label: 'Queries', value: 'Aggregations' },
      { label: 'Navigation', value: 'Cursor Pagination' }
    ],
    features: [
      'Integrated React Quill rich text editor, enabling styled content formatting and custom inline HTML asset rendering.',
      'Constructed backend image upload pipelines with Multer middleware storing assets securely.',
      'Utilized MongoDB aggregation pipelines to process post categorization, text search indexing, and paginated delivery.'
    ]
  },
  {
    title: 'Real-Time Kanban',
    subtitle: 'Collaborative Project Tracker',
    desc: 'Developed a collaborative workspace platform featuring interactive Kanban board workflows, synchronized project cards, and instant user updates.',
    techs: ['MERN Stack', 'Socket.io', 'Tailwind CSS', 'JWT Authentication'],
    liveUrl: 'https://github.com/varunrohith-dev',
    gitUrl: 'https://github.com/varunrohith-dev',
    badge: 'WebSockets Node',
    metrics: [
      { label: 'Concurrency', value: 'Real-Time WebSockets' },
      { label: 'Board System', value: 'Drag-and-Drop' },
      { label: 'Sync State', value: 'Socket.io Events' },
      { label: 'APIs Secure', value: 'JWT Access Keys' }
    ],
    features: [
      'Integrated Socket.io to synchronize board mutations, column movements, and ticket updates instantly across all active clients.',
      'Built team coordination interfaces allowing task assignment, priority level labels, and due-date calendars.',
      'Protected real-time socket connection handshakes and RESTful APIs using secure JWT authorization headers.'
    ]
  },
  {
    title: 'Weather Telemetry',
    subtitle: 'Dynamic Forecast Portal',
    desc: 'Created a responsive weather telemetry dashboard displaying real-time weather details and comprehensive 5-day predictive forecasts.',
    techs: ['React.js', 'Node.js', 'Express.js', 'OpenWeatherMap API', 'Axios', 'Tailwind CSS'],
    liveUrl: 'https://github.com/varunrohith-dev',
    gitUrl: 'https://github.com/varunrohith-dev',
    badge: 'API Integration',
    metrics: [
      { label: 'Data Source', value: 'OpenWeatherMap' },
      { label: 'Credentials', value: 'Secure Node Proxy' },
      { label: 'Unit Systems', value: 'Celsius / Fahrenheit' },
      { label: 'UI Feed', value: 'Dynamic SVG Icons' }
    ],
    features: [
      'Engineered a backend Node.js proxy to route OpenWeatherMap API queries and keep developer API credentials hidden.',
      'Implemented real-time city autocomplete searches alongside prompt measurement toggles between Celsius and Fahrenheit.',
      'Designed clean, responsive interfaces that dynamically change backgrounds and visual icons based on telemetry conditions.'
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

      {/* Selector Tabs toolbar */}
      <div className="flex flex-wrap justify-center gap-2 mb-6 font-mono text-xxs max-w-full overflow-x-auto no-scrollbar">
        {PROJECTS_DATA.map((proj, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2 border rounded-lg uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'border-[#00d4aa] text-[#00d4aa] bg-[#00d4aa]/10 shadow-[0_0_12px_rgba(0,212,170,0.15)]'
                  : 'border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700 bg-slate-950/40'
              }`}
            >
              [{String(idx + 1).padStart(2, '0')}] {proj.title.split(' ')[0]}
            </button>
          )
        })}
      </div>

      {/* Elegant Frame Layout */}
      <div 
        key={activeIdx}
        className="cyber-card w-full shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[#00d4aa]/30 p-6 md:p-8 flex flex-col lg:flex-row gap-8 items-stretch relative overflow-hidden project-card-enter"
      >
        {/* Hologram aesthetic light scanning line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d4aa]/65 to-transparent" />

        {/* Left Side: Summary, Description, and CTAs */}
        <div className="lg:w-7/12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            
            {/* Header Badge Row */}
            <div className="flex justify-between items-center">
              <span className="text-[9px] font-mono text-[#00d4aa] bg-[#00d4aa]/10 border border-[#00d4aa]/25 px-2 py-0.5 rounded-full uppercase tracking-wider">
                {project.badge}
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-[#00d4aa]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00d4aa] animate-pulse" />
                ACTIVE ENGINE
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

            {/* Long Description */}
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-sans font-light min-h-[50px]">
              {project.desc}
            </p>

            {/* Bullet Features */}
            <div className="space-y-2 mt-4 pt-4 border-t border-slate-900">
              <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider">// CORE FUNCTIONALITIES</span>
              <ul className="space-y-1.5">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="text-xxs text-slate-400 flex items-start gap-2 leading-relaxed">
                    <span className="text-[#00d4aa] font-mono mt-0.5">&gt;</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Action Links */}
          <div className="flex gap-4 pt-4 border-t border-slate-900/60">
            <a 
              href={project.gitUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 py-3 bg-[#00d4aa] text-[#0a0a0f] hover:bg-[#00d4aa]/85 font-mono font-extrabold tracking-wider text-xs uppercase text-center rounded-lg shadow-[0_0_15px_rgba(0,212,170,0.15)] hover:shadow-[0_0_20px_rgba(0,212,170,0.3)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              VIEW ON GITHUB
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-slate-900 border border-slate-850 hover:border-slate-700 text-slate-300 hover:text-white font-mono font-bold tracking-wider text-xs uppercase text-center rounded-lg transition-all duration-300 cursor-pointer"
            >
              MORE REPOS
            </a>
          </div>
        </div>

        {/* Right Side: Tech Spec Telemetry Dashboard */}
        <div className="lg:w-5/12 bg-slate-950/65 border border-slate-900 p-6 rounded-xl flex flex-col justify-between space-y-6">
          
          {/* Tech Spec Header */}
          <div className="space-y-4">
            <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider block">// SYSTEM_METRICS.CFG</span>
            
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-3 bg-black/45 border border-slate-900 rounded-lg">
                  <span className="block text-[8px] font-mono text-slate-500 uppercase tracking-wider">{metric.label}</span>
                  <span className="text-xs font-mono text-white font-bold block mt-1">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Pile */}
          <div className="space-y-2">
            <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider block">// COMPONENT_STACK</span>
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span 
                  key={tech}
                  className="text-xxs font-mono bg-[#00d4aa]/5 border border-[#00d4aa]/15 text-[#00d4aa] px-2.5 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Secure Node Status */}
          <div className="border-t border-slate-900 pt-4 font-mono text-[9px] text-slate-500 space-y-1.5">
            <div className="flex justify-between">
              <span>DEPLOYED_ZONE:</span>
              <span className="text-slate-300 font-bold uppercase">VERCEL / RENDER</span>
            </div>
            <div className="flex justify-between">
              <span>DB_CLUSTER:</span>
              <span className="text-slate-300 font-bold font-mono uppercase">MongoDB Atlas</span>
            </div>
            <div className="flex justify-between">
              <span>SOURCE_CODE:</span>
              <a 
                href="https://github.com/varunrohith-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00d4aa] font-bold uppercase hover:underline"
              >
                github/varunrohith-dev
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
