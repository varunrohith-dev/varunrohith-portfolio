import React, { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// List of all skills with categories and neon accent colors
const SKILLS_DATA = [
  // Frontend (Cyan)
  { name: 'HTML5', category: 'frontend', color: '#00d4aa' },
  { name: 'CSS3', category: 'frontend', color: '#00d4aa' },
  { name: 'JavaScript', category: 'frontend', color: '#00d4aa' },
  { name: 'React.js', category: 'frontend', color: '#00d4aa' },
  { name: 'Tailwind CSS', category: 'frontend', color: '#00d4aa' },
  { name: 'Bootstrap', category: 'frontend', color: '#00d4aa' },
  // Backend (Purple)
  { name: 'Node.js', category: 'backend', color: '#b44fd4' },
  { name: 'Express.js', category: 'backend', color: '#b44fd4' },
  { name: 'RESTful APIs', category: 'backend', color: '#b44fd4' },
  { name: 'JWT Auth', category: 'backend', color: '#b44fd4' },
  // Database (Magenta)
  { name: 'MongoDB', category: 'database', color: '#ff007f' },
  { name: 'Mongoose ODM', category: 'database', color: '#ff007f' },
  { name: 'MySQL', category: 'database', color: '#ff007f' },
  // Tools (Blue)
  { name: 'Git', category: 'tools', color: '#3b82f6' },
  { name: 'GitHub', category: 'tools', color: '#3b82f6' },
  { name: 'Postman', category: 'tools', color: '#3b82f6' },
  { name: 'VS Code', category: 'tools', color: '#3b82f6' },
  { name: 'MVC', category: 'tools', color: '#3b82f6' },
  { name: 'CRUD', category: 'tools', color: '#3b82f6' },
]

export function SkillsSection() {
  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Engine',
      accentColor: '#00d4aa',
      skills: [
        { name: 'React.js', pct: 85, icon: '⚛️' },
        { name: 'JavaScript', pct: 80, icon: '🟨' },
        { name: 'Tailwind CSS', pct: 90, icon: '🎨' },
        { name: 'HTML5 / CSS3', pct: 90, icon: '🌐' },
        { name: 'Bootstrap', pct: 75, icon: '🅱️' }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Systems',
      accentColor: '#b44fd4',
      skills: [
        { name: 'Node.js', pct: 80, icon: '🟢' },
        { name: 'Express.js', pct: 80, icon: '🚂' },
        { name: 'RESTful APIs', pct: 85, icon: '🔌' },
        { name: 'JWT Authentication', pct: 80, icon: '🔒' }
      ]
    },
    {
      id: 'database',
      title: 'Database & Schemas',
      accentColor: '#ff007f',
      skills: [
        { name: 'MongoDB', pct: 80, icon: '🍃' },
        { name: 'Mongoose ODM', pct: 75, icon: '📐' },
        { name: 'MySQL', pct: 70, icon: '🗄️' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Concepts',
      accentColor: '#3b82f6',
      skills: [
        { name: 'Git & GitHub', pct: 85, icon: '🐙' },
        { name: 'Postman', pct: 80, icon: '🚀' },
        { name: 'VS Code', pct: 90, icon: '💻' },
        { name: 'MVC & CRUD', pct: 85, icon: '⚙️' }
      ]
    }
  ]

  return (
    <div className="relative w-full z-10 flex flex-col justify-center">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="terminal-header justify-center">
          &gt;_ SKILLS.EXE
        </h2>
        <p className="text-xxs font-mono text-slate-500 uppercase tracking-[0.2em] -mt-2">
          Stack // Technologies // Performance Index
        </p>
      </div>

      {/* Grid of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="cyber-card p-6 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-slate-800/80"
          >
            <div>
              {/* Category Header */}
              <h3 
                className="font-mono text-xs font-black uppercase tracking-wider mb-5 pb-2 border-b border-slate-900"
                style={{ color: cat.accentColor }}
              >
                // {cat.title}
              </h3>

              {/* Skills list with progress bars */}
              <div className="space-y-3 pt-1">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="inline-flex items-center gap-1.5 text-xxs font-mono text-slate-300">
                        <span>{skill.icon}</span>
                        <span>{skill.name}</span>
                      </span>
                      <span className="text-[9px] font-mono font-bold" style={{ color: cat.accentColor }}>
                        {skill.pct}%
                      </span>
                    </div>
                    {/* Progress bar track */}
                    <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full skill-bar-fill"
                        style={{
                          width: `${skill.pct}%`,
                          background: `linear-gradient(90deg, ${cat.accentColor}99, ${cat.accentColor})`,
                          boxShadow: `0 0 6px ${cat.accentColor}66`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Futuristic status footer of card */}
            <div className="mt-6 pt-3 border-t border-slate-900 flex justify-between items-center font-mono text-[9px] text-slate-600">
              <span>SYS_OK: 100%</span>
              <span style={{ color: cat.accentColor }}>SECURE</span>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

// 3D Skill Orb helper component
function SkillOrb({ name, color, index, total }) {
  const orbRef = useRef()
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)

  // Unique orbital parameters
  const { radius, speed, phase, yOffset } = useMemo(() => {
    // Distribute radii so spheres don't clash (spiral shells)
    const layer = index % 3
    const radius = 2.0 + layer * 1.1 + Math.random() * 0.2
    
    // Distribute angles evenly around the card
    const phase = (index / total) * Math.PI * 2 + Math.random() * 0.5
    const speed = 0.25 + (index % 2 ? 0.08 : -0.08)
    const yOffset = (layer - 1) * 1.5 + (Math.random() - 0.5) * 0.5
    
    return { radius, speed, phase, yOffset }
  }, [index, total])

  useFrame((state) => {
    if (!orbRef.current) return
    const time = state.clock.getElapsedTime()
    
    // Orbital rotation around the parent card coordinate
    const angle = time * speed + phase
    
    // Update local coordinate offset relative to parent group [6, 3, -2]
    orbRef.current.position.x = Math.cos(angle) * radius
    orbRef.current.position.y = yOffset + Math.sin(time * 0.8 + phase) * 0.25
    orbRef.current.position.z = Math.sin(angle) * radius
    
    // Slow rotational drift of the orb itself
    orbRef.current.rotation.x = time * 0.2
    orbRef.current.rotation.y = time * 0.3

    // Face the text towards the camera
    if (textRef.current) {
      textRef.current.quaternion.copy(state.camera.quaternion)
    }
  })

  // Theme-colored glow properties
  const targetScale = hovered ? 1.4 : 1.0

  return (
    <group ref={orbRef}>
      {/* 3D Sphere Orb */}
      <mesh
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true) }}
        onPointerOut={() => setHovered(false)}
        scale={[targetScale * 0.35, targetScale * 0.35, targetScale * 0.35]}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          distort={0.35}
          speed={2.2}
          emissive={color}
          emissiveIntensity={hovered ? 2.5 : 0.8}
        />
      </mesh>

      {/* 3D Label above orb */}
      <group ref={textRef} position={[0, 0.65, 0]}>
        <Text
          fontSize={0.24}
          color={hovered ? '#ffffff' : '#cbd5e1'}
          font="https://fonts.gstatic.com/s/outfit/v11/Q3pwMmx9c1JI-d8oUtKB.woff" // Outfit font file URL fallback
          anchorX="center"
          anchorY="middle"
        >
          {name}
          {hovered && <meshBasicMaterial color="#ffffff" toneMapped={false} />}
        </Text>
      </group>
    </group>
  )
}

// Parent 3D container component mounted directly in SceneContainer inside the R3F Canvas
export function SkillsOrbCluster() {
  return (
    // Positioned centered on the Skills card equilibrium pos [6, 3, -2]
    <group position={[6, 3, -2]}>
      {SKILLS_DATA.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          name={skill.name}
          color={skill.color}
          index={index}
          total={SKILLS_DATA.length}
        />
      ))}
    </group>
  )
}
