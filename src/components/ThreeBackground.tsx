"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Sphere } from "@react-three/drei";
import * as THREE from "three";

function AbstractShape() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.1;
    meshRef.current.rotation.y = time * 0.15;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#6B8F5E"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
      
      {/* Inner glowing core */}
      <mesh position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial
          color="#C4704A"
          emissive="#C4704A"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AbstractShape />
      </Canvas>
    </div>
  );
}
