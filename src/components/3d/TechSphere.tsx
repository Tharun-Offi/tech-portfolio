import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { techCloudSkills } from '../../data/portfolioData';
import { sounds } from '../../utils/sound';

interface WordProps {
  text: string;
  position: [number, number, number];
  color: string;
}

const Word: React.FC<WordProps> = ({ text, position, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Html
      position={position}
      center
      distanceFactor={7.5}
      zIndexRange={[100, 0]}
    >
      <div
        onMouseEnter={() => {
          setHovered(true);
          sounds.playHover();
        }}
        onMouseLeave={() => setHovered(false)}
        className={`px-3.5 py-2 rounded-full text-xs font-mono font-bold transition-all duration-300 cursor-pointer select-none whitespace-nowrap shadow-xl ${
          hovered
            ? 'scale-125 bg-cyan-500 text-black border border-white shadow-[0_0_25px_#06b6d4]'
            : 'bg-slate-900/90 text-slate-100 border border-slate-700/80 backdrop-blur-md hover:border-cyan-400'
        }`}
        style={{
          color: hovered ? '#000000' : color,
        }}
      >
        {text}
      </div>
    </Html>
  );
};

const CloudGroup: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 3.3; // Prominently enlarged radius

  // Compute spherical coordinates distribution
  const words = useMemo(() => {
    const count = techCloudSkills.length;
    const items: { text: string; position: [number, number, number]; color: string }[] = [];
    const colors = ['#06b6d4', '#38bdf8', '#a855f7', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#3b82f6'];

    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      items.push({
        text: techCloudSkills[i],
        position: [x, y, z],
        color: colors[i % colors.length]
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.08) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Wireframe Polyhedron - Enlarged */}
      <mesh>
        <icosahedronGeometry args={[2.5, 1]} />
        <meshStandardMaterial
          wireframe
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.2}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Nodes in 3D space */}
      {words.map((w, idx) => (
        <Word key={idx} text={w.text} position={w.position} color={w.color} />
      ))}
    </group>
  );
};

export const TechSphere: React.FC = () => {
  return (
    <div className="w-full h-[480px] sm:h-[540px] relative rounded-2xl overflow-hidden glass-card border border-cyan-500/30 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
      <div className="absolute top-4 left-4 z-10">
        <span className="px-3.5 py-1.5 text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 rounded-full backdrop-blur-md shadow-md">
          3D Interactive Globe (Drag to rotate 360°)
        </span>
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 52 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -10]} intensity={1.2} color="#a855f7" />
        <CloudGroup />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          rotateSpeed={0.7}
        />
      </Canvas>
    </div>
  );
};
