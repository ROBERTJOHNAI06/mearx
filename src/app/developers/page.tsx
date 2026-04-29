import { Metadata } from "next";
import DeveloperCanvas from "@/components/3d/DeveloperCanvas";
import { Code2, Terminal, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers | Maerx",
  description: "Build immersive educational experiences directly on Maerx OS.",
};

export default function DevelopersPage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative w-full">
        {/* Background ambient light */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-40 right-20 w-[400px] h-[400px] bg-maerx-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
          <div className="absolute bottom-40 left-20 w-[400px] h-[400px] bg-[#1E88E5] rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
        </div>

        {/* Left side: Intro content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 min-h-[50vh]">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-[#1E88E5]">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light">
            Maerx OS is built for creators. Access native spatial APIs, hook directly into our Local AI engine, and deploy interactive syllabuses without touching WebXR boilerplate.
          </p>

          <div className="space-y-6 mt-4">
            <div className="flex gap-4">
              <div className="mt-1">
                <Code2 className="w-6 h-6 text-maerx-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Spatial SDK</h3>
                <p className="text-gray-400 text-sm font-light">
                  Direct hardware access to depth sensors and volumetric bounds via our streamlined SDK. Build machines that students can physically assemble.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <Cpu className="w-6 h-6 text-maerx-purple" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Local AI Hooks</h3>
                <p className="text-gray-400 text-sm font-light">
                  Don't build your own conversational models. Hook into our native on-device Local AI to handle student queries, grading, and dynamic content generation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <Terminal className="w-6 h-6 text-[#1E88E5]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white">Multiplayer Real-time Sync</h3>
                <p className="text-gray-400 text-sm font-light">
                  Zero configuration needed for classroom-wide networking. The Maerx OS handles the Teacher-Student state syncing out of the box.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-10">
            <button className="px-8 py-3 rounded-lg font-bold text-maerx-dark bg-[#1E88E5] shadow-[0_0_15px_rgba(30,136,229,0.3)] hover:shadow-[0_0_25px_rgba(30,136,229,0.6)] transition-all transform hover:-translate-y-1">
              Read the Documentation
            </button>
          </div>
        </div>

        {/* Right side: 3D Hardware Canvas */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative z-10 mt-12 md:mt-0 glass-panel rounded-3xl overflow-hidden border-[#1E88E5]/20">
          <DeveloperCanvas />
        </div>
      </main>
    </div>
  );
}
