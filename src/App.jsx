import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { usePortfolioStore } from './store/usePortfolioStore'
import { Navbar } from './components/Navbar'
import { SceneContainer } from './components/SceneContainer'
import { ScrollProgressBar } from './components/ScrollProgressBar'

import { AboutSection } from './components/sections/AboutSection'
import { SkillsSection } from './components/sections/SkillsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { CertificationsSection } from './components/sections/CertificationsSection'
import { EducationSection } from './components/sections/EducationSection'
import { AchievementsSection } from './components/sections/AchievementsSection'
import { ContactSection } from './components/sections/ContactSection'

function AppContent() {
  const containerRef = useRef(null)
  const setActiveSection = usePortfolioStore((state) => state.setActiveSection)

  useEffect(() => {
    const sections = containerRef.current?.querySelectorAll('section')
    if (!sections) return

    const observerOptions = {
      root: containerRef.current,
      rootMargin: '0px',
      threshold: 0.4
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          setActiveSection(id)

          // Run GSAP 3D Entrance Animation
          const content = entry.target.children[0]
          if (content) {
            gsap.set(entry.target, { perspective: 1000 })
            
            gsap.fromTo(content,
              { 
                opacity: 0, 
                y: 60, 
                rotateX: 15,
                transformOrigin: 'top center'
              },
              { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                duration: 0.8, 
                ease: 'power3.out',
                overwrite: 'auto'
              }
            )
          }

          // Section card entrance animations
          if (id === 'skills') {
            const skillCards = entry.target.querySelectorAll('.cyber-card')
            if (skillCards.length > 0) {
              gsap.fromTo(skillCards,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2, overwrite: 'auto' }
              )
            }
          } else if (id === 'projects') {
            const projectCards = entry.target.querySelectorAll('.cyber-card')
            if (projectCards.length > 0) {
              gsap.fromTo(projectCards,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2, overwrite: 'auto' }
              )
            }
          } else if (id === 'certifications') {
            const certCards = entry.target.querySelectorAll('.cyber-card')
            if (certCards.length > 0) {
              gsap.fromTo(certCards,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.2, overwrite: 'auto' }
              )
            }
          } else if (id === 'education') {
            const cards = entry.target.querySelectorAll('.cyber-card')
            if (cards.length >= 2) {
              gsap.fromTo(cards[0],
                { x: -80, rotateY: -15, opacity: 0 },
                { x: 0, rotateY: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, overwrite: 'auto' }
              )
              gsap.fromTo(cards[1],
                { x: 80, rotateY: 15, opacity: 0 },
                { x: 0, rotateY: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2, overwrite: 'auto' }
              )
            }
          } else if (id === 'achievements') {
            const achCards = entry.target.querySelectorAll('.cyber-card')
            if (achCards.length > 0) {
              gsap.fromTo(achCards,
                { scale: 0.8, boxShadow: '0 0 0px rgba(255, 170, 0, 0)', opacity: 0.3 },
                { 
                  scale: 1, 
                  opacity: 1,
                  boxShadow: '0 0 25px rgba(255, 170, 0, 0.45)',
                  duration: 0.7, 
                  stagger: 0.15,
                  ease: 'elastic.out(1, 0.75)',
                  delay: 0.2,
                  overwrite: 'auto',
                  onComplete: () => {
                    gsap.to(achCards, { boxShadow: '0 0 0px rgba(255, 170, 0, 0)', duration: 0.5 })
                  }
                }
              )
            }
          } else if (id === 'contact') {
            const contactCards = entry.target.querySelectorAll('.cyber-card')
            if (contactCards.length > 0) {
              gsap.fromTo(contactCards,
                { opacity: 0, y: 40 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2, overwrite: 'auto' }
              )
            }
          }
        }
      })
    }, observerOptions)

    sections.forEach((sec) => observer.observe(sec))

    return () => {
      observer.disconnect()
    }
  }, [setActiveSection])

  return (
    <div className="relative w-full h-screen overflow-hidden hero-bg-glow">
      {/* Scroll Progress Indicator */}
      <ScrollProgressBar scrollContainerRef={containerRef} />

      {/* 2D HUD Overlays */}
      <Navbar />

      {/* 3D Canvas Space Container */}
      <SceneContainer />

      {/* Scrollable SPA sections container */}
      <div 
        ref={containerRef}
        className="w-full h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory relative z-10 flex flex-col no-scrollbar"
      >
        <section id="about" className="full-page-section w-full snap-start">
          <AboutSection />
        </section>

        <div className="divider-line" />

        <section id="skills" className="full-page-section w-full snap-start">
          <SkillsSection />
        </section>

        <div className="divider-line" />

        <section id="projects" className="full-page-section w-full snap-start">
          <ProjectsSection />
        </section>

        <div className="divider-line" />

        <section id="certifications" className="full-page-section w-full snap-start">
          <CertificationsSection />
        </section>

        <div className="divider-line" />

        <section id="education" className="full-page-section w-full snap-start">
          <EducationSection />
        </section>

        <div className="divider-line" />

        <section id="achievements" className="full-page-section w-full snap-start">
          <AchievementsSection />
        </section>

        <div className="divider-line" />

        <section id="contact" className="full-page-section w-full snap-start">
          <ContactSection />
        </section>
      </div>
    </div>
  )
}

export default function App() {
  return <AppContent />
}
