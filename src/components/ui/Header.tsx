import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-maerx-dark/80 backdrop-blur-md border-b border-maerx-cyan/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(0,229,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,229,255,0.6)] transition-shadow">
            <Image src="/image.png" alt="Maerx Logo" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span className="text-xl font-extrabold text-white tracking-widest uppercase">Maerx</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/platform" className="text-gray-400 hover:text-white transition-colors">Platform</Link>
          <Link href="/ecosystem" className="text-gray-400 hover:text-white transition-colors">Ecosystem</Link>
          <Link href="/developers" className="text-gray-400 hover:text-white transition-colors">Developers</Link>
          <Link href="/company" className="text-gray-400 hover:text-white transition-colors">Company</Link>
        </nav>
        <Link 
          href="/explore"
          className="px-5 py-2 text-sm font-bold rounded-lg text-maerx-dark bg-maerx-cyan hover:bg-white transition-colors shadow-lg"
        >
          Enter Simulator
        </Link>
      </div>
    </header>
  );
}
