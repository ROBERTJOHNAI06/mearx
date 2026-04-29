import { Metadata } from "next";
import HardwareCanvas from "@/components/3d/HardwareCanvas";

export const metadata: Metadata = {
  title: "Platform & Hardware | Maerx",
  description: "Discover the Maerx custom Operating System and MR Hardware device.",
};

export default function PlatformPage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden pt-24 pb-20">
      <main className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative w-full">
        {/* Background ambient light */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-maerx-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
          <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-maerx-purple rounded-full mix-blend-screen filter blur-[200px] opacity-10"></div>
        </div>

        {/* Left side: Intro content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 min-h-[50vh]">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            The Maerx <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Platform</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed font-light">
            We realized early on that general-purpose operating systems were fundamentally unsuited for the demands of true Mixed Reality education.
          </p>

          <div className="space-y-8 mt-4">
            <div className="glass-panel p-6 rounded-2xl border-maerx-cyan/20">
              <h3 className="text-2xl font-bold mb-2 text-white">Maerx OS</h3>
              <p className="text-gray-400 font-light">
                Built from the kernel up, Maerx OS is specifically optimized for spatial memory management, zero-latency volumetric rendering, and native Local AI integration. It processes student interactions and environmental mapping without the overhead of legacy desktop layers.
              </p>
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border-maerx-purple/20">
              <h3 className="text-2xl font-bold mb-2 text-white">Custom MR Hardware</h3>
              <p className="text-gray-400 font-light">
                Software is only half the equation. Our custom spatial device ensures hardware-software symbiosis. With dedicated silicon for our Local AI models and high-frequency optical sensors, the Maerx headset delivers an uncompromising educational experience.
              </p>
            </div>
          </div>
        </div>

        {/* Right side: 3D Hardware Canvas */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] relative z-10 mt-12 md:mt-0 glass-panel rounded-3xl overflow-hidden border-maerx-cyan/10">
          <HardwareCanvas />
        </div>
      </main>
    </div>
  );
}
