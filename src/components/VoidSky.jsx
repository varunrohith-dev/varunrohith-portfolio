import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { usePortfolioStore } from '../store/usePortfolioStore'

const VoidSkyShader = {
  uniforms: {
    uTime: { value: 0 },
    uMouse3D: { value: new THREE.Vector3(0, 0, 0) },
    uMouseRadius: { value: 3.5 },
    uBurstPos: { value: new THREE.Vector3(0, 0, 0) },
    uBurstTime: { value: -1.0 }, // -1.0 means inactive
  },
  vertexShader: `
    uniform float uTime;
    uniform vec3 uMouse3D;
    uniform float uMouseRadius;
    uniform vec3 uBurstPos;
    uniform float uBurstTime;

    attribute vec4 aRandom; // x: speed, y: phase, z: orbit radius, w: scale
    attribute vec3 aCenter; // attractor center

    varying vec2 vUv;
    varying vec4 vRandom;
    varying float vDistToMouse;

    void main() {
      vUv = uv;
      vRandom = aRandom;

      // 1. Orbital calculations
      float speed = aRandom.x * 0.08 + 0.02;
      float theta = uTime * speed + aRandom.y;
      
      // Orbit in elliptical planes
      vec3 localPos = vec3(
        cos(theta) * aRandom.z,
        sin(theta) * aRandom.z * 0.6,
        sin(theta * 1.5) * aRandom.z * 0.35
      );
      
      vec3 worldPos = aCenter + localPos;

      // 2. Mouse attractor displacement (pushing particles away & behind)
      vec3 toParticle = worldPos - uMouse3D;
      float distToMouse = length(toParticle);
      vDistToMouse = distToMouse;

      if (distToMouse < uMouseRadius) {
        float force = 1.0 - (distToMouse / uMouseRadius);
        // Exponential falloff for dynamic ripple
        force = pow(force, 2.0);
        
        // Push particles outward in 3D space, and significantly push back in Z (depth displacement)
        worldPos += normalize(toParticle) * force * 1.8;
        worldPos.z -= force * 3.5; 
      }

      // 3. Achievement burst wave
      if (uBurstTime >= 0.0 && uBurstTime <= 1.0) {
        vec3 toBurst = worldPos - uBurstPos;
        float distToBurst = length(toBurst);
        if (distToBurst < 8.0) {
          // Circular shockwave expanding over time
          float waveFront = uBurstTime * 8.0;
          float waveWidth = 1.5;
          float diff = abs(distToBurst - waveFront);
          
          if (diff < waveWidth) {
            float burstForce = (1.0 - (diff / waveWidth)) * (1.0 - uBurstTime);
            worldPos += normalize(toBurst) * burstForce * 3.0;
          }
        }
      }

      // 4. Projection
      vec4 mvPosition = modelViewMatrix * vec4(worldPos, 1.0);
      
      // Size scaling - scale individual instance dimensions
      float scaleVal = aRandom.w * 0.06;
      mvPosition.xyz += position * scaleVal;

      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec4 vRandom;
    varying float vDistToMouse;

    void main() {
      // Soft radial glow circle
      float dist = length(vUv - vec2(0.5));
      if (dist > 0.5) {
        discard;
      }

      // Fade alpha towards edges
      float alpha = smoothstep(0.5, 0.08, dist);

      // Color mapping: mix neon cyan and deep purple based on random attribute
      vec3 neonCyan = vec3(0.0, 0.94, 1.0);
      vec3 neonPurple = vec3(0.74, 0.2, 0.98);
      vec3 color = mix(neonCyan, neonPurple, vRandom.x);

      // Mouse proximity interaction: glow brighter when close to mouse
      if (vDistToMouse < 3.5) {
        float glowFactor = 1.0 - (vDistToMouse / 3.5);
        color = mix(color, vec3(1.0, 1.0, 1.0), glowFactor * 0.4);
        alpha *= (1.0 + glowFactor * 0.5);
      }

      // Core bright center
      if (dist < 0.1) {
        color = mix(color, vec3(1.0, 1.0, 1.0), (0.1 - dist) * 10.0);
      }

      gl_FragColor = vec4(color, alpha * 0.8);
    }
  `
}

export function VoidSky() {
  const meshRef = useRef()
  const matRef = useRef()
  const count = 55000
  
  const mouse3DStore = usePortfolioStore((state) => state.mouse3D)
  const particleBurst = usePortfolioStore((state) => state.particleBurst)
  
  // Track burst animation timing locally
  const burstTimer = useRef(-1.0)
  const burstPos = useRef(new THREE.Vector3(0, 0, 0))

  // Define 3 galaxial attractors in space
  const attractors = useMemo(() => [
    new THREE.Vector3(0, 0, -3),      // Central Galaxy
    new THREE.Vector3(-12, 5, -5),    // Upper Left Galaxy
    new THREE.Vector3(12, -6, -4)     // Lower Right Galaxy
  ], [])

  // Create geometry with custom attributes
  const [geometry, material] = useMemo(() => {
    const geom = new THREE.PlaneGeometry(1, 1)
    
    const randoms = new Float32Array(count * 4) // x: speed, y: phase, z: orbit radius, w: scale
    const centers = new Float32Array(count * 3) // x, y, z

    for (let i = 0; i < count; i++) {
      // Pick attractor (galaxy index)
      // 55% center, 22.5% left, 22.5% right
      const rand = Math.random()
      let attractorIndex = 0
      if (rand > 0.55 && rand <= 0.775) attractorIndex = 1
      else if (rand > 0.775) attractorIndex = 2
      
      const attractor = attractors[attractorIndex]

      centers[i * 3] = attractor.x
      centers[i * 3 + 1] = attractor.y
      centers[i * 3 + 2] = attractor.z

      // Orbit radius - denser towards the core
      let radius = Math.pow(Math.random(), 2.2) * 15.0 + 0.5
      if (attractorIndex === 0) {
        radius = Math.pow(Math.random(), 1.8) * 18.0 + 0.8
      } else {
        radius = Math.pow(Math.random(), 1.5) * 8.0 + 0.3
      }

      randoms[i * 4] = Math.random() * 0.8 + 0.2          // Speed scaling
      randoms[i * 4 + 1] = Math.random() * Math.PI * 2    // Phase offset
      randoms[i * 4 + 2] = radius                         // Orbit radius
      randoms[i * 4 + 3] = Math.random() * 1.5 + 0.2      // Scale multiplier
    }

    geom.setAttribute('aRandom', new THREE.InstancedBufferAttribute(randoms, 4))
    geom.setAttribute('aCenter', new THREE.InstancedBufferAttribute(centers, 3))

    // Create shader material
    const mat = new THREE.ShaderMaterial({
      uniforms: THREE.UniformsUtils.clone(VoidSkyShader.uniforms),
      vertexShader: VoidSkyShader.vertexShader,
      fragmentShader: VoidSkyShader.fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    return [geom, mat]
  }, [count, attractors])

  // Watch global trigger for particle burst
  useEffect(() => {
    if (particleBurst) {
      burstPos.current.set(particleBurst[0], particleBurst[1], particleBurst[2])
      burstTimer.current = 0.0 // Reset timer to start animation
    }
  }, [particleBurst])

  useFrame((state, delta) => {
    if (!matRef.current) return

    // Update uniform values
    matRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    
    // Smoothly interpolate mouse coordinate uniform to avoid physics jitters
    const currentMouse = matRef.current.uniforms.uMouse3D.value
    currentMouse.x += (mouse3DStore[0] - currentMouse.x) * 0.15
    currentMouse.y += (mouse3DStore[1] - currentMouse.y) * 0.15
    currentMouse.z += (mouse3DStore[2] - currentMouse.z) * 0.15
    
    // Manage burst timer progression
    if (burstTimer.current >= 0.0 && burstTimer.current <= 1.0) {
      matRef.current.uniforms.uBurstPos.value.copy(burstPos.current)
      matRef.current.uniforms.uBurstTime.value = burstTimer.current
      burstTimer.current += delta * 1.2 // Animation duration ~0.8s
    } else {
      matRef.current.uniforms.uBurstTime.value = -1.0 // Inactive
    }
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, count]}
      frustumCulled={false}
    />
  )
}
