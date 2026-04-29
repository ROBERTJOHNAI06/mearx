import { Metadata } from "next";
import { ArrowRight, BookOpen, Cpu, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Vision & Expertise | Maerx",
  description: "The future of interactive education by Maerx.",
};

export default function VisionPage() {
  return (
    <div className="bg-maerx-dark min-h-screen text-maerx-text overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-maerx-cyan/10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-maerx-purple rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Transforming the <span className="text-transparent bg-clip-text bg-gradient-to-r from-maerx-cyan to-maerx-purple">Classroom</span>
          </h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
            For decades, education has been confined to textbooks and whiteboards. Our vision is to bring science and engineering to life through immersive 3D simulators, guided by personalized AI that adapts to every student&apos;s unique learning style.
          </p>
        </div>
      </section>

      {/* Expertise Grids */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-maerx-cyan rounded-full mix-blend-screen filter blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-wider uppercase text-white mb-4">Our Pillars</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maerx-cyan to-maerx-purple rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-panel p-10 rounded-3xl group hover:bg-maerx-card/60 transition-all border-maerx-cyan/20">
            <div className="w-16 h-16 rounded-2xl bg-maerx-cyan/10 flex items-center justify-center mb-8 border border-maerx-cyan/30 group-hover:scale-110 transition-transform">
              <Cpu className="w-8 h-8 text-maerx-cyan" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Local AI Models</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              We deploy personalized Local AI that understands how each student learns best. Clarify doubts instantly and customize the syllabus on the fly without relying on external servers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-panel p-10 rounded-3xl group hover:bg-maerx-card/60 transition-all border-maerx-cyan/20">
            <div className="w-16 h-16 rounded-2xl bg-maerx-purple/10 flex items-center justify-center mb-8 border border-maerx-purple/30 group-hover:scale-110 transition-transform">
              <BookOpen className="w-8 h-8 text-maerx-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Interactive Syllabus</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              Moving beyond static pages, we map out the school syllabus into interactive 3D concepts. From biological cells to mechanical engines, students can assemble and dismantle their subjects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-panel p-10 rounded-3xl group hover:bg-maerx-card/60 transition-all border-maerx-cyan/20">
            <div className="w-16 h-16 rounded-2xl bg-[#1E88E5]/10 flex items-center justify-center mb-8 border border-[#1E88E5]/30 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-[#1E88E5]" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Teacher Admin Controls</h3>
            <p className="text-gray-400 leading-relaxed font-light">
              We keep the classroom connected. Teachers can push specific 3D environments to all students simultaneously, guiding the entire class through complex visual demonstrations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-maerx-cyan/10 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Ready to modernize your school?</h2>
        <button className="px-8 py-4 rounded-xl font-bold text-maerx-dark bg-maerx-cyan shadow-[0_0_20px_rgba(0,229,255,0.2)] hover:shadow-[0_0_35px_rgba(0,229,255,0.5)] hover:bg-white transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3">
          Contact Us <ArrowRight className="w-5 h-5" />
        </button>
      </section>
    </div>
  );
}
