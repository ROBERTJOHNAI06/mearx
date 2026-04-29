import { Metadata } from "next";
import NetworkCanvas from "@/components/3d/NetworkCanvas";
import { Users, Server, Globe2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Ecosystem | Maerx",
  description: "Explore the unified ecosystem connecting teachers, students, and content creators on Maerx.",
};

export default function EcosystemPage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden pt-24 pb-20">
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-maerx-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center relative w-full">
        <div className="text-center mb-16 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            A Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Ecosystem</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            Maerx isn't just a headset—it's a fully connected learning environment. By tightly integrating the Maerx OS with our custom hardware, we enable flawless real-time collaboration between teachers, students, and third-party educational content creators.
          </p>
        </div>

        {/* 3D Visualizer block */}
        <div className="w-full h-[400px] mb-16 relative rounded-3xl overflow-hidden glass-panel border-maerx-cyan/20">
          <NetworkCanvas />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Node 1 */}
          <div className="glass-panel p-8 rounded-3xl border-maerx-cyan/20">
            <Users className="w-10 h-10 text-maerx-cyan mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Students & Teachers</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Every participant shares a perfectly synchronized spatial state. Teachers can pause local rendering, highlight specific mechanical parts, and instantly broadcast interactive 3D elements to every student in the room simultaneously.
            </p>
          </div>

          {/* Node 2 */}
          <div className="glass-panel p-8 rounded-3xl border-maerx-purple/20">
            <Server className="w-10 h-10 text-maerx-purple mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Distributed Local AI</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Instead of relying on fragile cloud connections, the Maerx ecosystem leverages edge computing. Devices pool their processing power in the classroom to run advanced conversational AI models entirely locally.
            </p>
          </div>

          {/* Node 3 */}
          <div className="glass-panel p-8 rounded-3xl border-[#1E88E5]/20">
            <Globe2 className="w-10 h-10 text-[#1E88E5] mb-6" />
            <h3 className="text-2xl font-bold mb-4 text-white">Content Creators</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Publishers and educators can build directly onto the Maerx platform. Transform standard PDF syllabuses into interactive, explorable 3D mechanics that instantly populate across the Maerx hardware network.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
