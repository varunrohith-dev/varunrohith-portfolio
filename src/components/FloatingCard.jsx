import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { usePortfolioStore } from '../store/usePortfolioStore'

export function FloatingCard({ 
  id, 
  equilibriumPos, 
  width = 6, 
  height = 5.2, 
  children 
}) {
  const groupRef = useRef()
  const mouse3DStore = usePortfolioStore((state) => state.mouse3D)
  const hoveredCardId = usePortfolioStore((state) => state.hoveredCardId)
  const setHoveredCardId = usePortfolioStore((state) => state.setHoveredCardId)
  const setMouse3D = usePortfolioStore((state) => state.setMouse3D)
  const activeSection = usePortfolioStore((state) => state.activeSection)

  const { raycaster, camera } = useThree()

  // Generate a random phase offset for unique float behaviors
  const phaseOffset = useMemo(() => Math.random() * Math.PI * 2, [])

  // Local physical quantities
  const pos = useRef(new THREE.Vector3(...equilibriumPos))
  const vel = useRef(new THREE.Vector3(0, 0, 0))

  useFrame((state, delta) => {
    if (!groupRef.current) return

    const time = state.clock.getElapsedTime()
    const eq = new THREE.Vector3(...equilibriumPos)
    const mouse3D = new THREE.Vector3(...mouse3DStore)

    // 1. Restoring spring force (F = -k * x)
    // If this is the active section, make it slightly stiffer to snap it into place in front of the camera
    const isCurrentActive = activeSection === id
    const k = isCurrentActive ? 0.08 : 0.04
    const restoringForce = new THREE.Vector3().subVectors(eq, pos.current).multiplyScalar(k)

    // 2. Upward anti-gravity buoyancy lift (sinusoidal periodic wave)
    const liftY = Math.sin(time * 1.3 + phaseOffset) * 0.012
    restoringForce.y += liftY

    // 3. Mouse Attractor physics
    const distToMouse = pos.current.distanceTo(mouse3D)
    const attractRadius = 8.0

    if (distToMouse < attractRadius) {
      let pullFactor = 0
      if (hoveredCardId === id) {
        // Direct hover - strong pull
        pullFactor = 0.22
      } else {
        // Neighboring card hover - soft proportional pull
        // If some card is hovered, apply proximity displacement to neighbor
        const overlap = 1.0 - (distToMouse / attractRadius)
        pullFactor = Math.pow(overlap, 2.0) * 0.06
      }

      if (pullFactor > 0) {
        const pullDir = new THREE.Vector3().subVectors(mouse3D, pos.current).normalize()
        restoringForce.add(pullDir.multiplyScalar(pullFactor))
      }
    }

    // 4. Solve physics step (Euler integration with damping)
    vel.current.add(restoringForce)
    // Reduce frame rate dependency by adjusting damping factor to delta
    const damping = Math.max(0.75, 0.88 - (delta * 0.1))
    vel.current.multiplyScalar(damping)
    pos.current.add(vel.current)

    // Update object transform
    groupRef.current.position.copy(pos.current)

    // 5. Rotational drift - slow wobble to mimic weightlessness
    // Active card has reduced wobble to keep text legible
    const rotScale = isCurrentActive ? 0.15 : 1.0
    groupRef.current.rotation.x = Math.sin(time * 0.7 + phaseOffset) * 0.035 * rotScale
    groupRef.current.rotation.y = Math.cos(time * 0.5 + phaseOffset) * 0.035 * rotScale
    groupRef.current.rotation.z = Math.sin(time * 0.3 + phaseOffset) * 0.015 * rotScale
  })

  // Raycasting helper to translate pointer coordinates into the 3D Canvas
  const handlePointerMove = (e) => {
    // Stop event propagation to prevent hitting underlying particles
    e.stopPropagation()
    
    // Update mouse positions in 3D store
    if (e.point) {
      setMouse3D([e.point.x, e.point.y, e.point.z])
    }
  }

  const handlePointerOver = (e) => {
    e.stopPropagation()
    setHoveredCardId(id)
  }

  const handlePointerOut = () => {
    setHoveredCardId(null)
  }

  return (
    <group ref={groupRef}>
      {/* Invisible plane mesh acting as physical 3D raycasting target */}
      <mesh
        position={[0, 0, 0]}
        onPointerMove={handlePointerMove}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* Actual HTML component styled via Tailwind inside Drei's transform layer */}
      <Html
        transform
        distanceFactor={6}
        position={[0, 0, 0.05]} // Positioned slightly in front of the collider mesh
        className="pointer-events-none select-none" // R3F HTML wrapper overlay setup
      >
        <div className="pointer-events-auto select-text w-[450px]">
          {children}
        </div>
      </Html>
    </group>
  )
}
