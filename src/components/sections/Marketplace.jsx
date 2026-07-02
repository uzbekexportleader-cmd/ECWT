import { Link } from "react-router-dom";

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
    slug: "amazon",
    logo: amazonLogo,
    text: "Dunyoning eng yirik e-commerce platformasi",
    logoClass: "h-28 w-28",
  },
  {
    name: "Walmart",
    slug: "walmart",
    logo: walmartLogo,
    text: "AQSHning yetakchi online marketplace’i",
    logoClass: "h-28 w-28",
  },
  {
    name: "eBay",
    slug: "ebay",
    logo: ebayLogo,
    text: "Global onlayn savdo va auksion platformasi",
    logoClass: "h-40 w-64 scale-[2.2]",
  },
  {
    name: "Etsy",
    slug: "etsy",
    logo: etsyLogo,
    text: "Qo‘l mehnati va kreativ mahsulotlar bozori",
    logoClass: "h-32 w-32",
  },
  {
    name: "TikTok Shop",
    slug: "tiktok",
    logo: tiktokLogo,
    text: "Yangi avlod social-commerce savdosi",
    logoClass: "h-28 w-28",
  },
  {
    name: "Temu",
    slug: "temu",
    logo: temuLogo,
    text: "Tez o‘sayotgan global e-commerce platforma",
    logoClass: "h-28 w-28",
  },
  {
    name: "Shopify",
    slug: "shopify",
    logo: shopifyLogo,
    text: "Brend uchun mustaqil online do‘kon",
    logoClass: "h-32 w-32",
  },
  {
    name: "Facebook Marketplace",
    slug: "facebook-marketplace",
    logo: facebookLogo,
    text: "Mahalliy va xalqaro savdo platformasi",
    logoClass: "h-32 w-32",
  },
];

export default function Marketplace() {
  return (
    <section
      id="marketplace"
      className="relative scroll-mt-32 overflow-hidden bg-[#020617] px-6 py-20 text-white sm:px-10 lg:px-20"
    >
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketplaces.map((marketplace) => (
            <Link
              key={marketplace.name}
              to={`/marketplace/${marketplace.slug}`}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}