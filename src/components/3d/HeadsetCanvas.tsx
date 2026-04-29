"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, ContactShadows, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

// Procedurally modeled abstracted MR headset
function DeviceModel() {
  const group = useRef<THREE.Group>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (group.current) {
      group.current.rotation.y = Math.sin(time.current * 0.2) * 0.2;
    }
  });

  return (
    <group ref={group} dispose={null}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        
        {/* Main Visor Glass */}
        <mesh position={[0, 0, 0.5]} scale={[1, 0.4, 0.2]}>
          <boxGeometry args={[3, 1, 1, 16, 16, 16]} />
          <meshPhysicalMaterial
            color={0x00E5FF}
            metalness={0.5}
            roughness={0.2}
            transmission={0.9}
            ior={1.5}
            thickness={0.5}
            clearcoat={1.0}
            opacity={1}
          />
        </mesh>

        {/* Visor Frame/Housing */}
        <mesh position={[0, 0, 0.35]} scale={[1.05, 0.45, 0.1]}>
          <boxGeometry args={[3, 1, 1, 4, 4, 4]} />
          <meshStandardMaterial
            color={0x0D1829}
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>

        {/* Side Arms/Strap anchors */}
        <mesh position={[-1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
          <meshStandardMaterial
            color={0x1E88E5}
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>
        <mesh position={[1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 1, 16]} />
          <meshStandardMaterial
            color={0x1E88E5}
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>

        {/* Head Strap (Half Ring) */}
        <mesh position={[0, 0, -1]} rotation={[Math.PI / 2, 0, 0]} scale={[1.5, 1.2, 1]}>
          <torusGeometry args={[1, 0.1, 16, 64, Math.PI]} />
          <meshStandardMaterial
            color={0x050B14}
            roughness={0.9}
          />
        </mesh>

        {/* Sensory/Camera Nodes (Accents) */}
        <mesh position={[-1, -0.15, 0.61]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={0x7C4DFF}
            emissive={0x7C4DFF}
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[1, -0.15, 0.61]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color={0x7C4DFF}
            emissive={0x7C4DFF}
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0, 0.15, 0.61]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial
            color={0x7C4DFF}
            emissive={0x7C4DFF}
            emissiveIntensity={1}
            toneMapped={false}
          />
        </mesh>
        
      </Float>
    </group>
  );
}

export default function HeadsetCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 1, 5], fov: 45 }}>
        <Environment resolution={256} background={false}>
          <group>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#00E5FF" />
            <Lightformer intensity={2} color="#7C4DFF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
            <Lightformer intensity={2} color="#1E88E5" position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
          </group>
        </Environment>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight position={[-10, 10, 10]} angle={0.3} penumbra={1} intensity={2} color="#00E5FF" />
        
        <DeviceModel />
        
        <ContactShadows position={[0, -2, 0]} opacity={0.3} scale={10} blur={2.5} far={4} color="#00E5FF" />
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      </Canvas>
    </div>
  );
}
