function WhyECWT() {
  const features = [
    {
      title: "Global Marketplace",
      desc: "Amazon, eBay, Walmart, Shopify va boshqa marketplace'larni bitta dashboard orqali boshqaring.",
      icon: "🌍",
    },
    {
      title: "Sun'iy Intellekt",
      desc: "AI mahsulot tavsifi, SEO va marketing jarayonlarini avtomatlashtiradi.",
      icon: "🤖",
    },
    {
      title: "Analytics",
      desc: "Real vaqt statistikasi, buyurtmalar va daromadni kuzating.",
      icon: "📊",
    },
    {
      title: "Eksport Yechimi",
      desc: "O'zbekiston mahsulotlarini global bozorlarga tez va oson olib chiqing.",
      icon: "🚀",
    },
  ];

  return (
    <section className="w-full py-32">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-20">

          <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-bold">
            Why ECWT
          </span>

          <h2 className="text-5xl md:text-6xl font-black text-white mt-7">
            Nima uchun ECWT?
          </h2>

          <p className="mt-5 text-xl text-slate-400">
            Barcha eksport jarayonlarini bitta platformada boshqaring.
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-9 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(0,255,255,.15)]"
            >

              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-300 leading-8">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyECWT;