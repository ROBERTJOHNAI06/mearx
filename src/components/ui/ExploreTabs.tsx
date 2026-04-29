"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Layers, Globe, Hand, Cpu, GraduationCap, Timer, TestTube, Brain } from "lucide-react";

type Tab = "features" | "benefits";

const features = [
  {
    id: "physics",
    title: "Living Physics Engine",
    icon: Layers,
    description: "Digital objects possess physical weight, elasticity, and reactivity. Manipulate structures naturally—stretch membranes, break bonds, and feel the reaction of virtual matter right in your hands."
  },
  {
    id: "environment",
    title: "Environmental Context",
    icon: Globe,
    description: "Our optical systems continuously map your physical room. Virtual elements understand boundaries, meaning digital objects interact flawlessly with your real desk and walls."
  },
  {
    id: "ui",
    title: "Tangible Elements",
    icon: Hand,
    description: "Standard web-like flat menus are gone. Pull tools directly from a spatial belt, or close immersive windows by physically crushing them like paper."
  },
  {
    id: "companion",
    title: "Reactive AI Guidance",
    icon: Cpu,
    description: "A responsive spatial entity guides you based on your exact gaze and gestures, offering dynamic, context-aware assistance the moment you encounter friction."
  }
];

const benefits = [
  {
    id: "active",
    title: "Active Learning Paradigm",
    icon: GraduationCap,
    description: "Progress demands interaction. Shifting learning from passive observation to active, muscle-memory-driven execution transforms comprehension."
  },
  {
    id: "pacing",
    title: "Personalized Pacing",
    icon: Timer,
    description: "With an intelligent spatial system tracking hesitation, difficulty dynamically adjusts, creating a true 1-to-1 tailored experience for every user."
  },
  {
    id: "labs",
    title: "Zero-Risk Environments",
    icon: TestTube,
    description: "Unlock access to complex structures and expensive scenarios without physical material costs, allowing safe experimentation anywhere."
  },
  {
    id: "retention",
    title: "Spatial Retention",
    icon: Brain,
    description: "Human brains optimize memory through physical location. Pinning concepts into room-scale space dramatically fortifies neural pathways."
  }
];

export default function ExploreTabs() {
  const [activeTab, setActiveTab] = useState<Tab>("features");
  
  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-charcoal">
      
      {/* Switcher */}
      <div className="flex bg-white/40 backdrop-blur-md p-1.5 rounded-2xl mb-12 border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        <button 
          onClick={() => setActiveTab("features")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${activeTab === "features" ? "text-porcelain" : "text-gray-500 hover:text-charcoal"}`}
        >
          {activeTab === "features" && (
            <motion.div 
              layoutId="tab-bg"
              className="absolute inset-0 bg-liquid-amber rounded-xl shadow-[0_0_20px_rgba(255,107,53,0.4)]"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">System Features</span>
        </button>
        <button 
          onClick={() => setActiveTab("benefits")}
          className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 relative ${activeTab === "benefits" ? "text-porcelain" : "text-gray-500 hover:text-charcoal"}`}
        >
          {activeTab === "benefits" && (
            <motion.div 
              layoutId="tab-bg"
              className="absolute inset-0 bg-liquid-sage rounded-xl shadow-[0_0_20px_rgba(143,158,139,0.4)]"
              initial={false}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">The Classroom Impact</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="w-full relative min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "features" && (
            <motion.div 
              key="features-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full absolute inset-0"
            >
              {features.map((item, idx) => (
                <div key={item.id} className="glass-panel p-6 rounded-3xl flex gap-4 hover:bg-white/60 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-liquid-amber/10 flex items-center justify-center border border-liquid-amber/20">
                    <item.icon className="text-liquid-amber w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-charcoal">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "benefits" && (
            <motion.div 
              key="benefits-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full absolute inset-0"
            >
              {benefits.map((item, idx) => (
                <div key={item.id} className="glass-panel p-6 rounded-3xl flex gap-4 hover:bg-white/60 transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-liquid-sage/10 flex items-center justify-center border border-liquid-sage/20">
                    <item.icon className="text-liquid-sage w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-charcoal">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}
