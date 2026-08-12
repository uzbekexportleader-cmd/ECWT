export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-[104px] w-full max-w-[1600px] items-center justify-between px-8 lg:px-12">
        <a href="/" className="flex items-center gap-4 text-white">
          <span className="grid h-14 w-14 place-items-center rounded-xl border border-blue-400/70 bg-[#07143d] text-[29px] font-extrabold tracking-[-0.08em] shadow-[0_0_24px_rgba(59,130,246,.55)]">EC</span>
          <span className="text-[28px] font-extrabold tracking-[-0.04em]">ECWT</span>
          <span className="hidden h-10 w-px bg-white/20 sm:block" />
          <span className="hidden text-[13px] font-medium leading-5 tracking-wide text-slate-300 sm:block">O‘ZBEKISTON ELEKTRON<br/>TIJORAT KOMPANIYASI</span>
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-950/20 px-5 py-2.5 text-sm text-slate-300 backdrop-blur-xl lg:flex">
          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(96,165,250,1)]" />
          O‘zbek biznesi uchun yaratilgan
        </div>
        <div className="flex items-center gap-4">
          <a href="/auth" className="hidden rounded-xl border border-blue-400/35 bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,.25)] transition hover:scale-[1.02] md:inline-flex">Ro‘yxatdan o‘tish →</a>
          <div className="flex rounded-xl border border-blue-400/25 bg-[#050d2c]/70 p-1 text-sm backdrop-blur-xl">
            <button className="rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 font-semibold text-white">UZ</button>
            <button className="px-5 py-2.5 text-slate-400 transition hover:text-white">RU</button>
            <button className="px-5 py-2.5 text-slate-400 transition hover:text-white">EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
