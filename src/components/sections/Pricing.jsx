const plans = [
  {
    title: "Start",
    price: "Boshlang‘ich",
    desc: "Yangi tadbirkorlar va hunarmandlar uchun",
    features: [
      "Mahsulot tahlili",
      "Marketplace konsultatsiya",
      "Boshlang‘ich listing",
      "Brend yo‘nalishi"
    ],
  },
  {
    title: "Business",
    price: "Professional",
    desc: "Eksportga tayyor bizneslar uchun",
    features: [
      "Amazon, eBay, Walmart listing",
      "Foto/video kontent",
      "Shopify do‘kon",
      "Marketing strategiya",
      "Analytics dashboard"
    ],
    popular: true,
  },
  {
    title: "Enterprise",
    price: "Maxsus",
    desc: "Katta ishlab chiqaruvchilar uchun",
    features: [
      "To‘liq marketplace boshqaruvi",
      "AI marketing system",
      "ERP integratsiya",
      "Xalqaro brend strategiyasi",
      "Shaxsiy menejer"
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-slate-950 py-24 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold mb-3">Biznes Model</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Har bir biznes uchun mos yechim
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            ECWT tadbirkorlarni global marketplace’larga olib chiqish orqali
            xizmat paketi, obuna va savdo komissiyasi asosida daromad yaratadi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border ${
                plan.popular
                  ? "border-cyan-400 bg-cyan-400/10 shadow-2xl shadow-cyan-500/20"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 px-5 py-2 rounded-full text-sm font-bold">
                  Eng ommabop
                </div>
              )}

              <h3 className="text-2xl font-bold mb-3">{plan.title}</h3>
              <p className="text-3xl font-bold text-cyan-400 mb-3">
                {plan.price}
              </p>
              <p className="text-slate-400 mb-8">{plan.desc}</p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="text-cyan-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-xl bg-white text-slate-950 font-bold hover:bg-cyan-400 transition">
                Paketni tanlash
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}