const logos = ["Amazon", "eBay", "Walmart", "Shopify"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-6 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.22),transparent_45%)]" />
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <div className="mx-auto mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400" />
          Global Marketplace Platform
        </div>

        <h1 className="mx-auto max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          O‘zbekiston mahsulotlarini
          <span className="block bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text text-transparent">
            global e-commerce bozoriga olib chiqamiz
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400 md:text-xl">
          ECWT hunarmandlar, textile, agro va ishlab chiqaruvchilarni Amazon,
          eBay, Walmart, Shopify va boshqa xalqaro platformalarda sotuvga tayyorlaydi.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <button className="rounded-2xl bg-cyan-400 px-9 py-4 font-bold text-slate-950">
            Bepul konsultatsiya
          </button>

          <button className="rounded-2xl border border-white/15 bg-white/5 px-9 py-4 font-bold text-white">
            Platformani ko‘rish
          </button>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {logos.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-bold text-slate-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}