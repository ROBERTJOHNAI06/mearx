"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, OrbitControls, Lightformer } from "@react-three/drei";
import * as THREE from "three";
import { useRef, useMemo } from "react";

function NetworkNodes() {
  const group = useRef<THREE.Group>(null);
  const time = useRef(0);

  // Generate node positions
  const nodePositions = useMemo(() => {
    const pos = [];
    for (let i = 0; i < 20; i++) {
      pos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
      ));
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    time.current += delta;
    if (group.current) {
      group.current.rotation.y = time.current * 0.05;
      group.current.rotation.z = Math.sin(time.current * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Central Hub */}
      <mesh>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial color={0x7C4DFF} metalness={0.8} roughness={0.2} emissive={0x7C4DFF} emissiveIntensity={0.8} />
      </mesh>

      {/* Connection Lines to center */}
      {nodePositions.map((pos, i) => {
        const distance = pos.length();
        return (
          <group key={`conn-${i}`}>
            <mesh position={pos}>
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color={0x00E5FF} emissive={0x00E5FF} emissiveIntensity={0.5} />
            </mesh>
            <mesh 
              position={pos.clone().multiplyScalar(0.5)}
              quaternion={new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), pos.clone().normalize())}
            >
              <cylinderGeometry args={[0.01, 0.01, distance, 8]} />
              <meshStandardMaterial color={0x1E88E5} transparent opacity={0.3} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function NetworkCanvas() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Environment resolution={256} background={false}>
          <group>
            <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#00E5FF" />
            <Lightformer intensity={2} color="#7C4DFF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
          </group>
        </Environment>
        <ambientLight intensity={0.2} />
        
        <NetworkNodes />
        
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
