"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, ContactShadows, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function ChipModel() {
  const group = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (group.current) {
      group.current.rotation.y = Math.sin(time.current * 0.1) * 0.1;
      group.current.rotation.x = Math.cos(time.current * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1.5}>
        
        {/* Motherboard Base */}
        <mesh position={[0, -0.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <boxGeometry args={[4, 4, 0.1]} />
          <meshPhysicalMaterial
            color={0x050B14}
            metalness={0.8}
            roughness={0.4}
            clearcoat={0.5}
          />
        </mesh>

        {/* Central Processing Unit (Maerx OS Hub) */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[1.5, 0.3, 1.5]} />
          <meshPhysicalMaterial
            color={0x00E5FF}
            metalness={0.9}
            roughness={0.1}
            transmission={0.5}
            ior={1.5}
            emissive={0x00E5FF}
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Neural Engine Core */}
        <mesh position={[0, 0.3, 0]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshPhysicalMaterial
            color={0x7C4DFF}
            metalness={0.8}
            roughness={0.2}
            emissive={0x7C4DFF}
            emissiveIntensity={2}
          />
        </mesh>

        {/* Data Traces (Lines) */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i * Math.PI/4) * 1.5, -0.1, Math.sin(i * Math.PI/4) * 1.5]} rotation={[0, -i * Math.PI/4, 0]}>
            <boxGeometry args={[1, 0.05, 0.05]} />
            <meshStandardMaterial color={0x00E5FF} emissive={0x00E5FF} emissiveIntensity={1} />
          </mesh>
        ))}

        {/* Edge Connectors */}
        {[...Array(4)].map((_, i) => (
          <mesh key={i} position={[Math.cos(i * Math.PI/2) * 1.8, -0.15, Math.sin(i * Math.PI/2) * 1.8]} rotation={[0, -i * Math.PI/2, 0]}>
            <boxGeometry args={[0.2, 0.15, 1]} />
            <meshStandardMaterial color={0x1E88E5} metalness={1} roughness={0.2} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function HardwareCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 4, 6], fov: 45 }}>
        <Environment resolution={256} background={false}>
          <group>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#00E5FF" />
            <Lightformer intensity={2} color="#7C4DFF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
            <Lightformer intensity={2} color="#1E88E5" position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
          </group>
        </Environment>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#7C4DFF" />
        
        <ChipModel />
        
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} color="#00E5FF" />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 6} />
      </Canvas>
    </div>
  );
}
