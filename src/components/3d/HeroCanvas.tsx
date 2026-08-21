import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Icosahedron, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const HologramGlobe: React.FC = () => {
  const globeGroupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mouseX = state.mouse.x * 0.25;
    const mouseY = state.mouse.y * 0.25;

    if (globeGroupRef.current) {
      globeGroupRef.current.rotation.y = time * 0.18 + mouseX;
      globeGroupRef.current.rotation.x = Math.sin(time * 0.08) * 0.04 - mouseY * 0.25;
    }
    if (coreMeshRef.current) {
      coreMeshRef.current.rotation.y = -time * 0.25;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = time * 0.12;
      wireframeRef.current.rotation.z = time * 0.06;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.04;
      ring1Ref.current.rotation.y = time * 0.35;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 3.5 + Math.cos(time * 0.18) * 0.04;
      ring2Ref.current.rotation.y = -time * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.25;
      ring3Ref.current.rotation.x = Math.PI / 2.2 + Math.sin(time * 0.15) * 0.04;
    }
  });

  return (
    <group ref={globeGroupRef} position={[0, 0, 0]}>
      {/* 1. Glowing Inner Energy Core Sphere */}
      <Sphere ref={coreMeshRef} args={[0.78, 32, 32]}>
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#0891b2"
          emissiveIntensity={0.7}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.92}
        />
      </Sphere>

      {/* 2. Cyber Wireframe Latitude & Longitude Sphere */}
      <Sphere ref={wireframeRef} args={[0.96, 24, 24]}>
        <meshStandardMaterial
          wireframe
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.55}
          transparent
          opacity={0.7}
        />
      </Sphere>

      {/* 3. Holographic Icosahedron Cage */}
      <Icosahedron args={[1.12, 1]}>
        <meshStandardMaterial
          wireframe
          color="#a855f7"
          emissive="#7e22ce"
          emissiveIntensity={0.45}
          transparent
          opacity={0.45}
        />
      </Icosahedron>

      {/* 4. Primary Orbital Ring (Cyan Neon) */}
      <Torus ref={ring1Ref} args={[1.32, 0.018, 16, 120]}>
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.95}
          metalness={0.9}
        />
      </Torus>

      {/* 5. Secondary Orbital Ring (Electric Purple) */}
      <Torus ref={ring2Ref} args={[1.44, 0.016, 16, 120]}>
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={0.85}
          metalness={0.9}
        />
      </Torus>

      {/* 6. Outer Celestial Ring (Emerald Neon) */}
      <Torus ref={ring3Ref} args={[1.56, 0.014, 16, 120]}>
        <meshStandardMaterial
          color="#10b981"
          emissive="#10b981"
          emissiveIntensity={0.75}
          metalness={0.9}
        />
      </Torus>

      {/* 7. Surrounding Sparkles & Micro Hologram Particles */}
      <Sparkles
        count={50}
        scale={3.6}
        size={2.5}
        speed={0.4}
        opacity={0.85}
        color="#38bdf8"
      />
      <Sparkles
        count={35}
        scale={3.2}
        size={2.8}
        speed={0.5}
        opacity={0.9}
        color="#c084fc"
      />
    </group>
  );
};

export const HeroCanvas: React.FC = () => {
  return (
    <div className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] relative pointer-events-auto flex items-center justify-center mx-auto">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#00f5ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a855f7" />
        <pointLight position={[0, -10, 5]} intensity={1} color="#10b981" />
        <HologramGlobe />
      </Canvas>
    </div>
  );
};
