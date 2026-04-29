import Link from "next/link";
import HeroCanvas from "@/components/3d/HeroCanvas";
import FeaturesSection from "@/components/ui/FeaturesSection";

export default function Home() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden pb-20">
      <main className="min-h-[100dvh] flex flex-col md:flex-row items-center justify-between relative w-full border-b border-maerx-cyan/10">
        {/* Background ambient light */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-maerx-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-96 h-96 bg-maerx-purple rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Left side: Intro content */}
        <div className="w-full md:w-1/2 p-8 md:pl-24 flex flex-col justify-center z-10 min-h-[50vh] md:min-h-screen">
          <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
            {/* Subtle inner flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-maerx-cyan/30 rounded-full blur-3xl"></div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Learn with <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Maerx</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-lg leading-relaxed font-light">
              Dismantle complex machines, explore 3D science concepts, and learn your way with personalized Local AI in a collaborative classroom environment.
            </p>
            <div>
              <Link href="/explore">
                <button className="px-8 py-4 rounded-xl font-bold text-maerx-dark bg-maerx-cyan shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:shadow-[0_0_35px_rgba(0,229,255,0.7)] transition-all duration-300 transform hover:-translate-y-1">
                  Enter Simulator
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right side: 3D Canvas */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[100dvh] absolute md:relative bottom-0 right-0 z-0">
          <HeroCanvas />
        </div>
      </main>
      
      <FeaturesSection />
    </div>
  );
}
