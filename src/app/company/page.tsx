import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Company | Maerx",
  description: "The story and mission behind Maerx Mixed AI Education Research X.",
};

export default function CompanyPage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden pt-32 pb-24 relative">
      
      {/* Background ambient lighting */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-maerx-cyan rounded-full mix-blend-screen filter blur-[250px] opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-maerx-purple rounded-full mix-blend-screen filter blur-[250px] opacity-10"></div>
      </div>

      <main className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Prominent Logo */}
        <div className="mb-12 relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-maerx-cyan to-maerx-purple rounded-3xl blur-2xl opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="relative glass-panel p-4 md:p-8 rounded-3xl border-maerx-cyan/20 flex items-center justify-center">
            <Image 
              src="/image.png" 
              alt="Maerx Logo" 
              width={600} 
              height={300} 
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Story Content */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Mixed AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Education</span> Research X
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">
            Our mission is simple: to completely rethink how the world learns by bringing physical intuition back to abstraction.
          </p>
        </div>

        <div className="space-y-10 w-full">
          <div className="glass-panel p-8 md:p-12 rounded-3xl border-maerx-cyan/20">
            <h2 className="text-3xl font-bold mb-4 text-white">The Problem</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-4">
              For generations, students have been asked to understand complex, three-dimensional physical realities—like internal combustion engines, cellular biology, and gravitational physics—using only flat, two-dimensional textbooks and screens.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Additionally, education has historically followed a "one size fits all" approach. A single teacher cannot instantly adapt a lesson to 30 different learning styles simultaneously.
            </p>
          </div>

          <div className="glass-panel p-8 md:p-12 rounded-3xl border-maerx-purple/20">
            <h2 className="text-3xl font-bold mb-4 text-white">The Maerx Solution</h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-4">
              We decided that rather than forcing human minds to adapt to flat screens, we should build hardware and software that adapts to human space. 
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg mb-4">
              By engineering our own **Mixed Reality Hardware** and the custom **Maerx OS**, we removed the latency and bottlenecks of traditional systems. We built a true 3D simulator where students can dismantle and assemble machines with their own hands.
            </p>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              We paired this with **Local AI**. Operating on the device itself, our conversational AI learns how each student learns, clarifying doubts and adjusting the syllabus on the fly. Meanwhile, teachers maintain complete control via admin devices, ensuring the classroom remains a unified, collaborative environment.
            </p>
          </div>
          
          {/* Leadership Section */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border-[#1E88E5]/20 mt-12">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Founder */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-maerx-cyan/30 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  <Image 
                    src="/founder.png" 
                    alt="Founder" 
                    width={200} 
                    height={200} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Shree Rama Victor</h3>
                <p className="text-maerx-cyan uppercase tracking-widest text-sm font-semibold">Founder</p>
              </div>

              {/* Co-Founder */}
              <div className="flex flex-col items-center text-center">
                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-maerx-purple/30 shadow-[0_0_15px_rgba(124,77,255,0.2)]">
                  <Image 
                    src="/cofounder.png" 
                    alt="Co-Founder" 
                    width={200} 
                    height={200} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Robert John</h3>
                <p className="text-maerx-purple uppercase tracking-widest text-sm font-semibold">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
