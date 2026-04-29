"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, PresentationControls, Lightformer } from "@react-three/drei";

export default function HeroCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} className="w-full h-full">
      <Environment resolution={256} background={false}>
        <group>
          <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} color="#00E5FF" />
          <Lightformer intensity={3} color="#7C4DFF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
          <Lightformer intensity={3} color="#1E88E5" position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
        </group>
      </Environment>
      <PresentationControls
        global
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Float speed={2} rotationIntensity={1.5} floatIntensity={1.5}>
          <mesh>
            <torusKnotGeometry args={[1.5, 0.4, 256, 64]} />
            <meshPhysicalMaterial
              color="#00E5FF"
              transmission={0.9}
              opacity={1}
              metalness={0.5}
              roughness={0.15}
              ior={1.5}
              thickness={1.5}
              clearcoat={1}
              clearcoatRoughness={0.1}
            />
          </mesh>
        </Float>
      </PresentationControls>
    </Canvas>
  );
}
