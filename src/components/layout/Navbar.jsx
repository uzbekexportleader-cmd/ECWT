export default function Navbar() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(34,211,238,0.12)]">
      <div className="flex h-20 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,1)]"></span>

          <span className="text-4xl font-black tracking-tight text-cyan-400">
            ECWT
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-300 lg:flex">
          <a href="#platform" className="transition hover:text-cyan-300">
            Platforma
          </a>

          <a href="#marketplace" className="transition hover:text-cyan-300">
            Marketplace
          </a>

          <a href="#solutions" className="transition hover:text-cyan-300">
            Yechimlar
          </a>

          <a href="#pricing" className="transition hover:text-cyan-300">
            Narxlar
          </a>

          <a href="#contact" className="transition hover:text-cyan-300">
            Aloqa
          </a>
        </nav>

        <a
          href="/login"
          className="rounded-2xl bg-cyan-400 px-7 py-3 font-bold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,.5)]"
        >
          Kirish
        </a>
      </div>
    </header>
  );
}