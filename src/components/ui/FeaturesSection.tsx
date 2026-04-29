"use client";

import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, View, PerspectiveCamera, Lightformer } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function MachinePrimitive() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (coreRef.current && ringRef.current && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      coreRef.current.rotation.x -= delta * 0.4;
      ringRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={coreRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial 
          color="#00E5FF" 
          metalness={0.8} 
          roughness={0.2} 
          transmission={0.4} 
        />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial 
          color="#1E88E5" 
          wireframe={true} 
        />
      </mesh>
    </group>
  );
}

function SciencePrimitive() {
  const groupRef = useRef<THREE.Group>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (ring1.current && ring2.current && ring3.current && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1;
      ring1.current.rotation.x += delta * 1.2;
      ring2.current.rotation.y += delta * 0.8;
      ring3.current.rotation.z += delta * 1.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1}>
        <torusGeometry args={[1.2, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00E5FF" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={ring2}>
        <torusGeometry args={[0.9, 0.08, 16, 100]} />
        <meshStandardMaterial color="#7C4DFF" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh ref={ring3}>
        <torusGeometry args={[0.6, 0.1, 16, 100]} />
        <meshStandardMaterial color="#1E88E5" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2} emissive="#00E5FF" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function AIPrimitive() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 1.5;
      meshRef.current.rotation.x += delta * 0.8;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial 
        color="#7C4DFF" 
        metalness={0.9}
        roughness={0.1}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        wireframe={true}
      />
    </mesh>
  );
}

function CollabPrimitive() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0.8, 0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial color="#00E5FF" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, -0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial color="#7C4DFF" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[-0.8, 0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial color="#1E88E5" metalness={0.5} roughness={0.2} />
      </mesh>
      <mesh position={[0.8, -0.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhysicalMaterial color="#ffffff" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  );
}

function AdvancedPrimitive({ type }: { type: "machine" | "science" | "ai" | "collab" }) {
  if (type === "machine") return <MachinePrimitive />;
  if (type === "science") return <SciencePrimitive />;
  if (type === "ai") return <AIPrimitive />;
  if (type === "collab") return <CollabPrimitive />;
  return null;
}

const features = [
  {
    id: "machine",
    title: "Machine Simulator",
    description: "Dismantle and assemble complex, true-to-life 3D machines to understand mechanics hands-on.",
    type: "machine" as const,
  },
  {
    id: "science",
    title: "Interactive Science",
    description: "Master difficult science concepts with immersive 3D explanations tailored exactly to your school syllabus.",
    type: "science" as const,
  },
  {
    id: "ai",
    title: "Personalized AI",
    description: "Converse with a Local AI model to clarify doubts and adapt subjects to your preferred learning style.",
    type: "ai" as const,
  },
  {
    id: "collab",
    title: "Collaborative Classrooms",
    description: "Connect the entire class in a single environment, with teachers controlling the rendering via admin devices.",
    type: "collab" as const,
  },
];

export default function FeaturesSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={containerRef} className="py-24 px-8 md:px-24 bg-transparent relative z-10 text-maerx-text">
      
      {/* Global Canvas for Views - Uses only 1 WebGL Context instead of 4 */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <Canvas eventSource={containerRef as React.MutableRefObject<HTMLElement>}>
          <View.Port />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Built from the ground up to deliver the ultimate mixed-reality learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              className="glass-panel p-8 rounded-3xl flex flex-col items-center text-center cursor-default bg-maerx-card/40 border-maerx-cyan/20"
              whileHover={{ 
                y: -8,
                boxShadow: "0px 15px 40px rgba(0, 229, 255, 0.15)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* 3D Canvas Container */}
              <div className="w-full h-48 mb-8 relative pointer-events-none">
                <View className="w-full h-full">
                  <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} />
                  <Environment resolution={256} background={false}>
                    <group>
                      <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                      <Lightformer intensity={2} color="#00E5FF" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={[10, 2, 1]} />
                      <Lightformer intensity={2} color="#7C4DFF" position={[5, 1, -1]} rotation-y={-Math.PI / 2} scale={[10, 2, 1]} />
                    </group>
                  </Environment>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1.5} />
                  <AdvancedPrimitive type={feature.type} />
                </View>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
