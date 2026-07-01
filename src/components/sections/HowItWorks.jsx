function HowItWorks() {
  const steps = [
    ["01", "Mahsulotni yuklang", "Rasm, narx, tavsif va mahsulot ma'lumotlarini ECWT platformasiga kiriting."],
    ["02", "Marketplace tanlang", "Amazon, eBay, Walmart, Shopify, Etsy, TikTok Shop, Facebook yoki Temu’ni tanlang."],
    ["03", "Avtomatik joylash", "ECWT mahsulotlaringizni tanlangan savdo kanallariga avtomatik tayyorlaydi."],
    ["04", "Savdolarni boshqaring", "Buyurtmalar, mahsulotlar va statistikani bitta dashboard orqali kuzating."],
  ];

  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 text-center">
          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 font-bold text-cyan-300">
            Qanday ishlaydi?
          </span>

          <h2 className="mt-7 text-5xl font-black text-white md:text-6xl">
            4 qadamda global savdo
          </h2>

          <p className="mt-5 text-xl text-slate-400">
            ECWT mahsulotlaringizni dunyo marketplace’lariga olib chiqishni soddalashtiradi.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([num, title, text]) => (
            <div
              key={num}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >
              <div className="mb-8 text-3xl font-black text-cyan-400">
                {num}
              </div>

              <h3 className="text-2xl font-black text-white">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;