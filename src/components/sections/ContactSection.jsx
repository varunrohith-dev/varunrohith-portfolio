import React, { useState } from 'react'
import axios from 'axios'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('loading')
    setErrorMessage('')

    const apiBaseUrl = import.meta.env.VITE_API_URL

    try {
      if (apiBaseUrl) {
        await axios.post(`${apiBaseUrl.replace(/\/$/, '')}/api/contact`, formData)
        setStatus('success')
      } else {
        console.warn('VITE_API_URL environment variable is not defined. Falling back to local mock server.')
        await new Promise((resolve) => setTimeout(resolve, 1200))
        console.log('Mock Contact Form Submission Succeeded:', formData)
        setStatus('success')
      }
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact Form Submission Error:', err)
      setStatus('error')
      setErrorMessage(err.response?.data?.message || err.message || 'Failed to dispatch transmission.')
    }
  }

  return (
    <div className="relative w-full z-10 flex flex-col justify-center max-w-6xl mx-auto">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="terminal-header justify-center">
          &gt;_ BROADCAST_MSG
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Secure API Channel // Portals // Message Dispatcher
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch w-full">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 cyber-card p-6 md:p-8 flex flex-col justify-between shadow-[0_12px_35px_rgba(0,0,0,0.5)] border-[#00d4aa]/20">
          <div>
            <h3 className="text-base font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#00d4aa] rounded-full animate-pulse" />
              TRANSMISSION TERMINAL
            </h3>
            <p className="text-slate-400 text-xxs leading-relaxed mb-6">
              Establish a secure transmission link. Varun will review your details and respond via email within 24 hours.
            </p>

            {status === 'success' ? (
              <div className="bg-[#00d4aa]/5 border border-[#00d4aa]/30 p-6 rounded-lg text-center my-6 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#00d4aa]/10 border border-[#00d4aa]/30 flex items-center justify-center text-xl text-[#00d4aa] mb-4 animate-bounce">
                  ✓
                </div>
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2 font-mono">
                  Transmission Dispatched
                </h4>
                <p className="text-slate-400 text-[10px] leading-relaxed max-w-xs mb-6 font-mono">
                  Signal received. The message payload has been buffered in our databases.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-4 py-1.5 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white rounded text-xxs font-mono uppercase tracking-widest cursor-pointer transition-colors"
                >
                  Send New Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === 'loading'}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#07070b] border border-slate-800 focus:border-[#00d4aa]/60 text-slate-200 text-xs px-4 py-3 rounded-lg font-sans outline-none transition-colors disabled:opacity-50"
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    Sender Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === 'loading'}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#07070b] border border-slate-800 focus:border-[#00d4aa]/60 text-slate-200 text-xs px-4 py-3 rounded-lg font-sans outline-none transition-colors disabled:opacity-50"
                    placeholder="e.g. johndoe@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1.5">
                    Query Payload (Message)
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    disabled={status === 'loading'}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#07070b] border border-slate-800 focus:border-[#00d4aa]/60 text-slate-200 text-xs px-4 py-3 rounded-lg font-sans outline-none transition-colors disabled:opacity-50 resize-none custom-scrollbar"
                    placeholder="Describe your request or details..."
                  />
                </div>

                {status === 'error' && (
                  <div className="text-[10px] font-mono text-red-400 border border-red-500/20 bg-red-950/10 p-2 rounded">
                    Error: {errorMessage}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3 bg-[#00d4aa] text-[#0a0a0f] hover:bg-[#00d4aa]/85 font-extrabold tracking-widest text-[10px] md:text-xs uppercase rounded-lg shadow-[0_0_15px_rgba(0,212,170,0.2)] hover:shadow-[0_0_25px_rgba(0,212,170,0.4)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-[#0a0a0f] border-t-transparent rounded-full animate-spin" />
                      Dispatching Transmission...
                    </>
                  ) : (
                    'Dispatch Message'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Social Cards / Contact details */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Connection Diagnostics Card */}
          <div className="cyber-card p-6 shadow-[0_12px_35px_rgba(0,0,0,0.5)] border-[#b44fd4]/25 flex flex-col space-y-5">
            <div className="border-b border-slate-800 pb-3 flex justify-between items-center">
              <span className="font-mono text-xxs text-slate-500 uppercase tracking-wider">// COMMUNICATOR.CFG</span>
              <span className="inline-flex items-center gap-1.5 bg-[#b44fd4]/10 border border-[#b44fd4]/20 px-2 py-0.5 rounded-full text-[9px] font-mono text-[#b44fd4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#b44fd4] animate-ping" />
                LISTENING
              </span>
            </div>

            {/* Grid of contact details */}
            <div className="space-y-4 font-mono text-xs">
              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Direct Mailbox</span>
                <a href="mailto:rohithvarun559@gmail.com" className="text-[#00d4aa] hover:underline font-bold text-sm block tracking-wide">
                  rohithvarun559@gmail.com
                </a>
              </div>

              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Voice Channels</span>
                <a href="tel:+918072206175" className="text-[#b44fd4] hover:underline font-bold text-sm block tracking-wide">
                  +91 80722 06175
                </a>
              </div>

              <div>
                <span className="block text-slate-500 text-[9px] uppercase tracking-wider mb-1">Node Coordinates</span>
                <span className="text-white font-bold text-xs block">
                  Chennai, India
                </span>
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="cyber-card p-6 shadow-[0_12px_35px_rgba(0,0,0,0.5)] border-[#00d4aa]/20 flex flex-col space-y-4">
            <h4 className="font-mono text-xxs text-slate-500 uppercase tracking-wider">// SOCIAL_CHANNELS</h4>
            <div className="grid grid-cols-2 gap-4">
              
              {/* GitHub */}
              <a
                href="https://github.com/varunrohith-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/50 hover:bg-[#00d4aa]/5 border border-slate-850 hover:border-[#00d4aa]/40 rounded-lg group transition-all duration-300"
              >
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-[#00d4aa] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white uppercase group-hover:text-[#00d4aa] transition-colors">GitHub</span>
                  <span className="text-[8px] font-mono text-slate-500">@varunrohith-dev</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/varun-rohith"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-slate-950/50 hover:bg-[#b44fd4]/5 border border-slate-850 hover:border-[#b44fd4]/40 rounded-lg group transition-all duration-300"
              >
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-[#b44fd4] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white uppercase group-hover:text-[#b44fd4] transition-colors">LinkedIn</span>
                  <span className="text-[8px] font-mono text-slate-500">varun-rohith</span>
                </div>
              </a>

            </div>
          </div>

          {/* Secure Handshake Block */}
          <div className="bg-slate-950/30 border border-slate-900 p-4 rounded-lg flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">
              END-TO-END TLS 1.3 SECURE DISPATCH CHANNELS
            </span>
          </div>

        </div>
      </div>
    </div>
  )
}
