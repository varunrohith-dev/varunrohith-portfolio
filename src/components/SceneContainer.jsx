import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Bvh, Preload } from '@react-three/drei'
import * as THREE from 'three'
import { usePortfolioStore } from '../store/usePortfolioStore'
import { VoidSky } from './VoidSky'
import { SkillsOrbCluster } from './sections/SkillsSection'

// Subcomponent to project mouse coordinates into the 3D scene depth matching the active section
function MouseTracker() {
  const setMouse3D = usePortfolioStore((state) => state.setMouse3D)
  const activeSection = usePortfolioStore((state) => state.activeSection)
  const equilibriumPositions = usePortfolioStore((state) => state.equilibriumPositions)

  useFrame((state) => {
    // Project mouse screen-space [-1, 1] into 3D world space
    const vec = new THREE.Vector3(state.pointer.x, state.pointer.y, 0.5)
    vec.unproject(state.camera)
    
    const dir = vec.sub(state.camera.position).normalize()
    
    // Find intersection depth (Z plane) matching the active section's equilibrium Z
    const activeZ = equilibriumPositions[activeSection]?.[2] || 0
    
    // Guard against divide by zero (camera looking perpendicular to vector)
    if (Math.abs(dir.z) > 0.0001) {
      const distance = (activeZ - state.camera.position.z) / dir.z
      const intersectPoint = state.camera.position.clone().add(dir.multiplyScalar(distance))
      setMouse3D([intersectPoint.x, intersectPoint.y, intersectPoint.z])
    }
  })

  return null
}

// Subcomponent to smoothly interpolate the camera's position and orientation (lookAt)
function CameraController() {
  const cameraTargetPos = usePortfolioStore((state) => state.cameraTargetPos)
  const cameraTargetLookAt = usePortfolioStore((state) => state.cameraTargetLookAt)
  const currentLookAt = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((state) => {
    // Interpolate camera position
    const targetPos = new THREE.Vector3(...cameraTargetPos)
    state.camera.position.lerp(targetPos, 0.075) // Ease factor
    
    // Interpolate camera look-at target vector
    const targetLook = new THREE.Vector3(...cameraTargetLookAt)
    currentLookAt.current.lerp(targetLook, 0.075)
    state.camera.lookAt(currentLookAt.current)
  })

  return null
}

export function SceneContainer() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-0 bg-dark-bg">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        camera={{ fov: 60, near: 0.1, far: 100, position: [0, 0, 10] }}
        eventSource={document.getElementById('root')}
        eventPrefix="client"
      >
        {/* Deep near-black background and exponential fog */}
        <color attach="background" args={['#020205']} />
        <fogExp2 attach="fog" args={['#020205', 0.022]} />

        {/* Ambient Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#bc34fa" />

        {/* BVH helper for fast raycasting / pointer interaction optimization */}
        <Bvh firstHitOnly>
          {/* Background Shader Starfield */}
          <VoidSky />

          {/* 3D Glowing Orb Skills Cluster (orbiting next to skills card) */}
          <SkillsOrbCluster />
        </Bvh>

        {/* Dynamic Controllers */}
        <MouseTracker />
        <CameraController />
        
        {/* Preload resources to minimize frame drops */}
        <Preload all />
      </Canvas>
    </div>
  )
}
