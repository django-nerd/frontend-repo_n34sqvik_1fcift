import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-orange-500 to-red-500 shadow-lg shadow-orange-500/30" />
          <span className="text-white font-semibold tracking-tight group-hover:text-orange-400 transition-colors">Ignite Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-slate-200/80 hover:text-white">Services</a>
          <a href="#portfolio" className="text-slate-200/80 hover:text-white">Portfolio</a>
          <a href="#about" className="text-slate-200/80 hover:text-white">About</a>
          <a href="#contact" className="text-slate-200/80 hover:text-white">Contact</a>
          <a href="#contact" className="px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-medium shadow ring-1 ring-white/10">Book Free Consultation</a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/10 text-white/90">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
