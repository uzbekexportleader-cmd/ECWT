export default function MarketplaceHero({ marketplace }) {
  return (
    <section className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#020617] via-[#071a2e] to-[#0c2744] px-10 py-16 text-white">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div className="flex items-center justify-center">
          <div className="flex h-80 w-full max-w-md items-center justify-center rounded-[32px] border border-white/10 bg-white shadow-2xl">
            <img
              src={marketplace.logo}
              alt={marketplace.name}
              className={`object-contain transition duration-300 hover:scale-105 ${
                marketplace.slug === "ebay"
                  ? "h-44 w-80"
                  : marketplace.slug === "facebook-marketplace"
                  ? "h-40 w-40"
                  : "h-36 w-36"
              }`}
            />
          </div>
        </div>

        <div>
          <span className="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300">
            ECWT Marketplace Integratsiyasi
          </span>

          <h1 className="mt-6 text-5xl font-black lg:text-6xl">
            {marketplace.name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {marketplace.description}
          </p>

          <div className="mt-8 flex items-center gap-2">
            <span className="text-2xl text-yellow-400">★★★★★</span>
            <span className="font-bold">4.8 reyting</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#aloqa"
              className="rounded-2xl bg-cyan-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-cyan-300"
            >
              Savdoni boshlash
            </a>

            <a
              href={marketplace.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white hover:text-slate-900"
            >
              Rasmiy Marketplace Sayti
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}