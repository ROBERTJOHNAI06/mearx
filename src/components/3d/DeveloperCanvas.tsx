"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function SandboxPrimitive() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (group.current && core.current) {
      group.current.rotation.y = time.current * 0.2;
      group.current.rotation.x = time.current * 0.1;
      core.current.rotation.x = -time.current * 0.3;
      core.current.rotation.z = time.current * 0.2;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        
        {/* Outer bounds / Sandbox */}
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshPhysicalMaterial
            color={0x1E88E5}
            metalness={0.9}
            roughness={0.1}
            transmission={0.95}
            transparent
            opacity={0.3}
            wireframe={true}
          />
        </mesh>

        {/* Inner dynamic core */}
        <mesh ref={core}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color={0x00E5FF}
            metalness={0.5}
            roughness={0.1}
            clearcoat={1.0}
            emissive={0x00E5FF}
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Orbiting fragments representing code modules */}
        {[...Array(6)].map((_, i) => (
          <mesh 
            key={i} 
            position={[
              Math.cos(i * Math.PI / 3) * 2, 
              Math.sin(i * Math.PI / 3) * 2, 
              0
            ]}
          >
            <boxGeometry args={[0.3, 0.3, 0.3]} />
            <meshStandardMaterial color={0x7C4DFF} emissive={0x7C4DFF} emissiveIntensity={0.8} />
          </mesh>
        ))}

      </Float>
    </group>
  );
}

export default function DeveloperCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Environment resolution={256} background={false}>
          <group>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#00E5FF" />
            <Lightformer intensity={2} color="#7C4DFF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
          </group>
        </Environment>
        <ambientLight intensity={0.5} />
        
        <SandboxPrimitive />
        
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
