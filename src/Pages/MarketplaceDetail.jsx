import { Link, useParams } from "react-router-dom";
import { marketplaces } from "../data/marketplaces";

const marketplaceStats = {
  amazon: ["300M+ Buyers", "180+ Countries", "12M+ Products", "8%–15% Fee"],
  walmart: ["120M+ Buyers", "USA Market", "150K+ Sellers", "6%–15% Fee"],
  ebay: ["183M+ Buyers", "190+ Countries", "1.4B+ Listings", "10%–15% Fee"],
  etsy: ["95M+ Buyers", "Handmade Focus", "7M+ Sellers", "Listing Fee"],
  tiktok: ["1B+ Users", "Video Sales", "Trend Products", "Region Fee"],
  temu: ["Global Traffic", "Fast Growth", "Mass Market", "Policy Based"],
  shopify: ["Own Store", "Full Control", "Analytics", "Monthly Plan"],
  "facebook-marketplace": ["Social Sales", "Big Audience", "Easy Start", "Region Fee"],
};

function MarketplaceDetail() {
  const { slug } = useParams();
  const marketplace = marketplaces.find((item) => item.slug === slug);

  if (!marketplace) {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-xl">
          <h1 className="text-3xl font-black text-slate-900">
            Marketplace topilmadi
          </h1>
          <Link to="/" className="mt-6 inline-block font-bold text-cyan-600">
            Bosh sahifaga qaytish
          </Link>
        </div>
      </main>
    );
  }

  const stats = marketplaceStats[marketplace.slug] || [];

  return (
    <main className="min-h-screen bg-slate-50 px-5 py-24 text-slate-900">
      <section className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-slate-300/40">
        <div className="relative overflow-hidden bg-[#020617] px-8 py-14 text-white md:px-12">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex h-56 items-center justify-center rounded-3xl border border-white/10 bg-white p-10 shadow-2xl">
              <img
                src={marketplace.logo}
                alt={marketplace.name}
                className={`object-contain ${
                  marketplace.slug === "ebay"
                    ? "h-24 w-48"
                    : marketplace.slug === "facebook-marketplace"
                    ? "h-32 w-32"
                    : "h-28 w-28"
                }`}
              />
            </div>

            <div>
              <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-bold text-cyan-300">
                ECWT Marketplace Integration
              </p>

              <h1 className="text-5xl font-black tracking-tight md:text-6xl">
                {marketplace.name}
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                {marketplace.description}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/#aloqa"
                  className="rounded-2xl bg-cyan-400 px-8 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Boshlash
                </Link>

                <a
                  href={marketplace.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/20 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-slate-950"
                >
                  Official marketplace link
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-b border-slate-200 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat}
              className="border-slate-200 p-7 text-center md:border-r last:border-r-0"
            >
              <h3 className="text-3xl font-black text-slate-950">{stat}</h3>
              <p className="mt-2 text-sm font-semibold text-slate-500">
                Platforma ko‘rsatkichi
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 p-6 md:p-10 lg:grid-cols-2">
          <InfoCard
            title="Afzalliklari"
            items={marketplace.advantages}
            color="cyan"
          />

          <InfoCard
            title="Sotish talablari"
            items={marketplace.requirements}
            color="green"
          />

          <InfoCard
            title="Qanday mahsulot sotish mumkin"
            items={marketplace.products}
            color="purple"
          />

          <div className="rounded-3xl border border-orange-200 bg-orange-50/60 p-8">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500 text-xl font-black text-white">
              %
            </div>

            <h2 className="text-3xl font-black text-slate-950">Komissiya</h2>

            <p className="mt-5 text-3xl font-black text-orange-600">
              {marketplace.commission}
            </p>

            <p className="mt-4 leading-7 text-slate-600">
              Komissiya marketplace siyosati, mahsulot kategoriyasi va sotuv
              hududiga qarab farq qilishi mumkin.
            </p>
          </div>
        </div>

        <div className="px-6 pb-10 md:px-10">
          <div className="rounded-3xl bg-[#020617] p-8 text-white md:p-10">
            <h2 className="text-3xl font-black">
              ECWT orqali {marketplace.name} platformasida savdoni boshlang
            </h2>

            <p className="mt-4 max-w-3xl text-slate-300">
              Biz mahsulot listing, marketing, kontent, marketplace setup va
              xalqaro savdoga tayyorlash jarayonlarini professional tarzda
              tashkil qilamiz.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/#aloqa"
                className="rounded-2xl bg-cyan-400 px-8 py-4 text-center font-black text-slate-950 transition hover:bg-cyan-300"
              >
                ECWT bilan boshlash
              </Link>

              <Link
                to="/"
                className="rounded-2xl border border-white/20 px-8 py-4 text-center font-black text-white transition hover:bg-white hover:text-slate-950"
              >
                Bosh sahifaga qaytish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, items, color }) {
  const colors = {
    cyan: "bg-cyan-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${colors[color]} text-xl font-black text-white`}
      >
        ✓
      </div>

      <h2 className="text-3xl font-black text-slate-950">{title}</h2>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-3 text-slate-700">
            <span className={`h-3 w-3 rounded-full ${colors[color]}`} />
            <span className="font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MarketplaceDetail;