const bars = [35, 55, 48, 72, 84, 100];

const marketplaces = [
  { name: "Amazon", status: "Faol" },
  { name: "eBay", status: "Faol" },
  { name: "Walmart", status: "Sinxronlanmoqda" },
  { name: "Shopify", status: "Faol" },
];

export default function HeroDashboard() {
  return (
    <section className="relative -mt-8 bg-slate-950 px-6 pb-24">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-white/[0.03] shadow-[0_0_90px_rgba(34,211,238,0.14)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-8 py-5">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              <span className="h-3 w-3 rounded-full bg-green-500"></span>
            </div>
            <p className="text-sm text-slate-400">ECWT Boshqaruv Paneli</p>
          </div>

          <div className="grid grid-cols-12">
            <aside className="hidden border-r border-white/10 bg-slate-900/40 p-6 md:col-span-3 md:block">
              <h2 className="mb-8 text-2xl font-black text-cyan-400">ECWT</h2>

              {["Boshqaruv paneli", "Marketplacelar", "Mahsulotlar", "Buyurtmalar", "Tahlillar"].map((item, index) => (
                <div
                  key={item}
                  className={`mb-3 rounded-xl px-4 py-3 ${
                    index === 0 ? "bg-cyan-400/15 text-cyan-300" : "text-slate-400"
                  }`}
                >
                  {item}
                </div>
              ))}
            </aside>

            <main className="col-span-12 p-6 md:col-span-9 md:p-8">
              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-cyan-400/10 p-6">
                  <p className="text-slate-400">Jami savdo</p>
                  <h3 className="mt-3 text-4xl font-black text-cyan-400">$82K</h3>
                  <p className="mt-3 text-sm text-cyan-300">Bu oy +24%</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6">
                  <p className="text-slate-400">Buyurtmalar</p>
                  <h3 className="mt-3 text-4xl font-black text-white">4,812</h3>
                  <p className="mt-3 text-sm text-slate-400">Xalqaro buyurtmalar</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6">
                  <p className="text-slate-400">Mahsulotlar</p>
                  <h3 className="mt-3 text-4xl font-black text-white">1,240</h3>
                  <p className="mt-3 text-sm text-slate-400">Joylashtirilgan mahsulotlar</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-5">
                <div className="rounded-3xl bg-gradient-to-br from-cyan-400/20 via-slate-900 to-slate-950 p-6 lg:col-span-3">
                  <div className="mb-8 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">Savdo o‘sishi</h3>
                      <p className="text-sm text-slate-400">Marketplace savdo tahlili</p>
                    </div>
                    <span className="rounded-full bg-cyan-400/15 px-4 py-2 text-sm font-bold text-cyan-300">
                      Jonli
                    </span>
                  </div>

                  <div className="relative h-56">
                    <div className="absolute inset-0 flex items-end gap-4">
                      {bars.map((height, index) => (
                        <div key={index} className="flex flex-1 items-end rounded-xl bg-white/5">
                          <div
                            className="w-full rounded-xl bg-gradient-to-t from-cyan-500 to-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                            style={{ height: `${height}%` }}
                          ></div>
                        </div>
                      ))}
                    </div>

                    <div className="absolute -bottom-7 flex w-full justify-between text-xs text-slate-500">
                      <span>Yan</span>
                      <span>Fev</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Iyun</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 lg:col-span-2">
                  <h3 className="mb-5 text-xl font-bold text-white">Marketplace holati</h3>

                  <div className="space-y-4">
                    {marketplaces.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-4"
                      >
                        <span className="font-bold text-white">{item.name}</span>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            item.status === "Sinxronlanmoqda"
                              ? "bg-yellow-400/15 text-yellow-300"
                              : "bg-cyan-400/15 text-cyan-300"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}