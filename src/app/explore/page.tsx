import HeadsetCanvas from "@/components/3d/HeadsetCanvas";
import ExploreTabs from "@/components/ui/ExploreTabs";

export default function ExplorePage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-x-hidden relative">
      {/* Abstract Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-96 h-96 bg-maerx-cyan rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-maerx-purple rounded-full mix-blend-screen filter blur-[180px] opacity-10"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYwIDBMMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20 block mix-blend-overlay"></div>
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-24 flex flex-col justify-center items-center font-sans mt-8">
        
        {/* Header Block */}
        <div className="text-center mb-10 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Simulator</span>
          </h1>
          <p className="text-lg text-gray-400 font-light leading-relaxed">
            Experience machines and science at scale. Dismantle hardware in a zero-risk 3D simulator and explore syllabus-aligned concepts enhanced by personalized Local AI.
          </p>
        </div>

        {/* 3D Visualizer block */}
        <div className="w-full max-w-5xl h-[400px] md:h-[500px] mb-16 relative rounded-3xl overflow-hidden glass-panel group border-maerx-cyan/20">
          {/* Subtle frame glow */}
          <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,229,255,0.05)] pointer-events-none z-10" />
          
          <HeadsetCanvas />
          
          {/* Tooltip hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-maerx-card/70 backdrop-blur-md border border-maerx-cyan/30 text-xs font-semibold text-white flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="w-2 h-2 rounded-full bg-maerx-cyan animate-pulse"></span>
            3D Simulator View
          </div>
        </div>

        {/* Interactive Features / Benefits */}
        <ExploreTabs />
        
      </main>
    </div>
  );
}
