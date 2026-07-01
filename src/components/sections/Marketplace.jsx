import amazonLogo from "../../assets/logos/amazon.png";
import walmartLogo from "../../assets/logos/walmart.png";
import ebayLogo from "../../assets/logos/ebay.png";
import etsyLogo from "../../assets/logos/Etsy.png";
import tiktokLogo from "../../assets/logos/tiktok-shop.png";
import temuLogo from "../../assets/logos/temu.png";
import shopifyLogo from "../../assets/logos/shopify.png";
import facebookLogo from "../../assets/logos/facebookmarketplace.png";

const marketplaces = [
  {
    name: "Amazon",
    logo: amazonLogo,
    text: "Dunyoning eng yirik e-commerce platformasi",
    logoClass: "h-28 w-28",
  },
  {
    name: "Walmart",
    logo: walmartLogo,
    text: "AQSHning yetakchi online marketplace’i",
    logoClass: "h-28 w-28",
  },
  {
    name: "eBay",
    logo: ebayLogo,
    text: "Global onlayn savdo va auksion platformasi",
    logoClass: "h-40 w-64 scale-[2.2]",
  },
  {
    name: "Etsy",
    logo: etsyLogo,
    text: "Qo‘l mehnati va kreativ mahsulotlar bozori",
    logoClass: "h-32 w-32",
  },
  {
    name: "TikTok Shop",
    logo: tiktokLogo,
    text: "Yangi avlod social-commerce savdosi",
    logoClass: "h-28 w-28",
  },
  {
    name: "Temu",
    logo: temuLogo,
    text: "Tez o‘sayotgan global e-commerce platforma",
    logoClass: "h-28 w-28",
  },
  {
    name: "Shopify",
    logo: shopifyLogo,
    text: "Brend uchun mustaqil online do‘kon",
    logoClass: "h-32 w-32",
  },
  {
    name: "Facebook Marketplace",
    logo: facebookLogo,
    text: "Mahalliy va xalqaro savdo platformasi",
    logoClass: "h-32 w-32",
  },
];

export default function Marketplace() {
  return (
    <section
      id="marketplace"
      className="relative scroll-mt-32 overflow-hidden bg-[#020617] px-6 py-28 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute bottom-10 left-10 h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-6 py-2 text-sm font-bold uppercase tracking-wide text-cyan-300">
            Global Marketplace Integratsiya
          </span>

          <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            8 ta <span className="text-cyan-300">global marketplace</span> —
            <br />
            bitta <span className="text-cyan-300">ECWT</span> platforma
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ECWT orqali mahsulotlaringizni dunyoning yetakchi marketplace
            platformalariga olib chiqamiz.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaces.map((marketplace) => (
            <div
              key={marketplace.name}
              className="group flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-cyan-400/20 bg-[#071225]/80 p-8 text-center shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-300/60 hover:shadow-cyan-500/20"
            >
              <div className="mb-6 flex h-36 w-56 items-center justify-center overflow-visible transition duration-300 group-hover:scale-110">
                <img
                  src={marketplace.logo}
                  alt={marketplace.name}
                  className={`${marketplace.logoClass} object-contain drop-shadow-2xl`}
                />
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                {marketplace.name}
              </h3>

              <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-slate-300">
                {marketplace.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-cyan-400/30 bg-[#061b2d]/80 p-8 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-black text-white">8+</h3>
              <p className="mt-2 text-sm text-slate-300">Marketplace</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">1M+</h3>
              <p className="mt-2 text-sm text-slate-300">Active Buyers</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">200+</h3>
              <p className="mt-2 text-sm text-slate-300">Mamlakat</p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">2x</h3>
              <p className="mt-2 text-sm text-slate-300">Ko‘proq savdo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}