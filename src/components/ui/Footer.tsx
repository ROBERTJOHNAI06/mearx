import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-maerx-dark py-12 border-t border-maerx-cyan/10 text-gray-500 relative z-20">
      <div className="max-w-7xl mx-auto px-8 md:px-24 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-2xl font-extrabold text-white tracking-widest mb-1">
            MAERX
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-maerx-cyan">
            Interactive Education
          </p>
        </div>
        
        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium">
          <Link href="/platform" className="hover:text-white transition-colors">Platform</Link>
          <Link href="/ecosystem" className="hover:text-white transition-colors">Ecosystem</Link>
          <Link href="/developers" className="hover:text-white transition-colors">Developers</Link>
          <Link href="/company" className="hover:text-white transition-colors">Company</Link>
        </div>

        {/* Copyright */}
        <div className="text-xs font-light tracking-wider text-gray-500">
          &copy; {new Date().getFullYear()} Maerx.in. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
