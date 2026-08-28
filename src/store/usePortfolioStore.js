import { create } from 'zustand'

export const usePortfolioStore = create((set) => ({
  // Active route section path or ID
  activeSection: 'about',
  
  // 3D coordinates of the raycasted mouse cursor in canvas space
  mouse3D: [0, 0, 0],
  
  // Camera transition targets
  cameraTargetPos: [0, 0, 10],
  cameraTargetLookAt: [0, 0, 0],
  
  // Hover state for cards
  hoveredCardId: null,
  
  // Particle burst coordinate for achievements
  particleBurst: null,
  
  // Floating cards default config positions (equilibrium coordinates)
  equilibriumPositions: {
    'about': [0, 0, 0],
    'skills': [6, 3, -2],
    'projects': [-6, -3, -2],
    'certifications': [6, -3, -1],
    'education': [-3, -8, -4],
    'achievements': [3, -8, -4],
    'contact': [0, -13, 0],
  },
  
  // Actions
  setActiveSection: (section) => {
    set((state) => {
      let targetPos = [0, 0, 10]
      let targetLookAt = [0, 0, 0]
      let storedSection = section

      // Normalize section name (remove leading slash if present)
      if (typeof section === 'string' && section.startsWith('/')) {
        storedSection = section === '/' ? 'about' : section.substring(1)
      }
      
      switch (storedSection) {
        case 'about':
          targetPos = [0, 0, 10]
          targetLookAt = [0, 0, 0]
          break
        case 'skills':
          targetPos = [6, 3, 6]
          targetLookAt = [6, 3, -2]
          break
        case 'projects':
          targetPos = [-6, -3, 6]
          targetLookAt = [-6, -3, -2]
          break
        case 'certifications':
          targetPos = [6, -3, 7]
          targetLookAt = [6, -3, -1]
          break
        case 'education':
          targetPos = [-3, -8, 4]
          targetLookAt = [-3, -8, -4]
          break
        case 'achievements':
          targetPos = [3, -8, 4]
          targetLookAt = [3, -8, -4]
          break
        case 'contact':
          targetPos = [0, -13, 8]
          targetLookAt = [0, -13, 0]
          break
        default:
          targetPos = [0, 0, 10]
          targetLookAt = [0, 0, 0]
      }
      
      return { 
        activeSection: storedSection,
        cameraTargetPos: targetPos,
        cameraTargetLookAt: targetLookAt
      }
    })
  },
  
  setMouse3D: (pos) => set({ mouse3D: pos }),
  
  setHoveredCardId: (id) => set({ hoveredCardId: id }),
  
  triggerParticleBurst: (pos) => {
    set({ particleBurst: pos })
    // Automatically reset burst trigger after 200ms
    setTimeout(() => {
      set({ particleBurst: null })
    }, 200)
  }
}))
