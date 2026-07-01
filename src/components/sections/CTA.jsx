export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.20),transparent_60%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="rounded-[36px] border border-cyan-400/20 bg-white/[0.03] backdrop-blur-xl px-8 py-16 text-center">
          <p className="text-cyan-400 font-semibold tracking-wide mb-4">
            ECWT PLATFORM
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
            O‘zbekistonni Global E-Commerce Bozoriga Olib Chiqamiz
          </h2>

          <p className="mt-6 text-slate-400 text-lg max-w-3xl mx-auto leading-8">
            ECWT hunarmandlar, ishlab chiqaruvchilar va tadbirkorlarni Amazon,
            eBay, Walmart, Shopify va boshqa global marketplace’larda
            muvaffaqiyatli savdo qilishiga yordam beradi.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-5">
            <button className="px-9 py-4 rounded-2xl bg-cyan-400 text-slate-950 font-bold text-lg hover:scale-105 transition duration-300">
              Boshlash
            </button>

            <button className="px-9 py-4 rounded-2xl border border-cyan-400 text-cyan-400 font-bold text-lg hover:bg-cyan-400 hover:text-slate-950 transition duration-300">
              Demo Ko‘rish
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}