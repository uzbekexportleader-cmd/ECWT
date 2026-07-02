import Orbit from "./Orbit";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020617] pt-[120px] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(34,211,238,0.22),transparent_32%),radial-gradient(circle_at_82%_30%,rgba(99,102,241,0.24),transparent_34%),radial-gradient(circle_at_52%_88%,rgba(16,185,129,0.14),transparent_36%)]" />

      <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-[1480px] grid-cols-1 items-center gap-8 px-8 pb-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-20">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-white/5 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_35px_rgba(34,211,238,.16)] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,1)]" />
            AI-powered global selling
          </div>

          <h1 className="max-w-3xl text-[46px] font-semibold leading-[1.03] tracking-[-0.055em] md:text-[58px] xl:text-[66px]">
            Mahsulotingizni yuklang.{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
              AI
            </span>{" "}
            uni global marketplace’larda avtomatik joylaydi.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-[19px]">
            ECWT sun’iy intellekti mahsulotingizni tahlil qiladi,
            optimallashtiradi va xalqaro platformalarda sotuvga tayyorlaydi —
            tezroq, osonroq va professional tarzda.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-7 py-4 text-center font-semibold text-slate-950 shadow-[0_0_45px_rgba(34,211,238,.42)] transition hover:scale-[1.03]"
            >
              Loyihani boshlash →
            </a>

            <a
              href="#marketplaces"
              className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-center font-semibold text-white backdrop-blur-xl transition hover:border-cyan-300/50 hover:bg-white/10"
            >
              Marketplace’larni ko‘rish
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-4">
            {[
              ["8+", "Marketplace"],
              ["24/7", "Dashboard"],
              ["AI", "Automation"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-cyan-300/15 bg-white/[0.045] p-4 backdrop-blur-xl"
              >
                <div className="text-[28px] font-semibold leading-none">
                  {number}
                </div>
                <div className="mt-2 text-sm text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-[690px] items-center justify-center overflow-visible lg:-mt-4 lg:scale-[0.92] xl:scale-[0.96]">
          <Orbit />
        </div>
      </div>
    </section>
  );
}