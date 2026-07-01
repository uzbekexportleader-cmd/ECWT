const stats = [
  {
    number: "25 000+",
    label: "Hunarmandlar",
    text: "Global bozorga chiqish imkoniyatiga ega ijodkorlar",
  },
  {
    number: "100 000+",
    label: "Kichik biznes",
    text: "Eksport va online savdoga tayyor tadbirkorlar",
  },
  {
    number: "9",
    label: "Marketplace",
    text: "Amazon, eBay, Walmart, Shopify va boshqa platformalar",
  },
  {
    number: "$6.3T+",
    label: "Global bozor",
    text: "Dunyo e-commerce bozori hajmi",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),transparent_55%)]" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold mb-3">ECWT imkoniyati</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Katta bozor. Katta imkoniyat.
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            ECWT O‘zbekiston mahsulotlarini global e-commerce ekotizimiga
            olib chiqish uchun yaratilgan platformadir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl hover:border-cyan-400/60 hover:bg-cyan-400/[0.06] transition"
            >
              <h3 className="text-4xl font-extrabold text-cyan-400 mb-4">
                {item.number}
              </h3>
              <p className="text-xl font-bold mb-3">{item.label}</p>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}