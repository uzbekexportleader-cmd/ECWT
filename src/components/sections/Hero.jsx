const marketplaces = [
  { name: "amazon", cls: "text-white font-black text-[25px]" },
  { name: "ebay", cls: "font-black text-[28px] bg-gradient-to-r from-red-500 via-blue-500 to-lime-400 bg-clip-text text-transparent" },
  { name: "Walmart✦", cls: "text-white font-bold text-[21px]" },
  { name: "G Google", cls: "text-white font-semibold text-[19px]" },
  { name: "f facebook", cls: "text-white font-semibold text-[18px]" },
  { name: "M mercari", cls: "text-white font-semibold text-[18px]" },
  { name: "bonanza", cls: "text-lime-500 font-black text-[21px]" },
  { name: "P POSHMARK", cls: "text-white font-semibold text-[17px]" },
  { name: "S shopify", cls: "text-white font-bold text-[20px]" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#020817] pt-[104px] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(12,61,170,.18),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(22,87,255,.10),transparent_35%),radial-gradient(circle_at_85%_42%,rgba(35,94,255,.12),transparent_34%)]" />
      <div className="absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle,rgba(44,130,255,.85)_1px,transparent_1.6px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,transparent_8%,black_32%,black_72%,transparent_100%)]" />

      <div className="absolute -left-20 top-[18%] h-[420px] w-[420px] opacity-70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(56,189,248,.7)_0_2px,transparent_3px),radial-gradient(circle_at_60%_34%,rgba(59,130,246,.75)_0_2px,transparent_3px),radial-gradient(circle_at_42%_63%,rgba(99,102,241,.75)_0_2px,transparent_3px)]" />
        <div className="absolute left-14 top-16 h-px w-64 rotate-[28deg] bg-blue-500/50" />
        <div className="absolute left-8 top-44 h-px w-72 -rotate-[18deg] bg-blue-500/40" />
        <div className="absolute left-24 top-72 h-px w-60 rotate-[8deg] bg-blue-500/35" />
      </div>

      <div className="absolute -right-24 top-[12%] h-[560px] w-[560px] opacity-85">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(56,189,248,.95)_0_2px,transparent_3px),radial-gradient(circle_at_55%_32%,rgba(59,130,246,.9)_0_2px,transparent_3px),radial-gradient(circle_at_70%_50%,rgba(99,102,241,.9)_0_2px,transparent_3px),radial-gradient(circle_at_38%_72%,rgba(37,99,235,.9)_0_2px,transparent_3px)]" />
        <div className="absolute right-28 top-24 h-px w-72 rotate-[20deg] bg-blue-500/55" />
        <div className="absolute right-16 top-52 h-px w-80 -rotate-[24deg] bg-blue-500/45" />
        <div className="absolute right-28 top-80 h-px w-72 rotate-[16deg] bg-blue-500/40" />
      </div>

      <div className="absolute bottom-[92px] left-1/2 h-[310px] w-[1200px] -translate-x-1/2 rounded-[50%] border-t border-blue-400/70 bg-[radial-gradient(ellipse_at_top,rgba(0,119,255,.28),rgba(3,15,59,.08)_48%,transparent_68%)] shadow-[0_-16px_60px_rgba(0,132,255,.22)]" />
      <div className="absolute bottom-[170px] left-1/2 h-px w-[980px] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400/70 to-transparent shadow-[0_0_24px_rgba(59,130,246,.9)]" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-104px)] max-w-[1600px] flex-col items-center px-8 pb-6 pt-16 text-center lg:px-12">
        <div className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.32em] text-slate-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,1)]" />
          GLOBAL COMMERCE INFRASTRUCTURE
        </div>

        <h1 className="mt-8 max-w-[980px] text-[46px] font-semibold leading-[1.02] tracking-[-0.05em] md:text-[58px] xl:text-[66px]">
          O‘zbekiston mahsulotlarini<br/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">dunyoga olib chiqamiz.</span>
        </h1>

        <p className="mt-7 max-w-[700px] text-[17px] leading-8 text-slate-300">ECWT AI mahsulotingizni tahlil qiladi, xalqaro savdoga tayyorlaydi va mos marketplace’larni tavsiya qiladi.</p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a href="/auth" className="inline-flex min-w-[285px] items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-blue-500 via-blue-600 to-violet-600 px-8 py-4 text-[18px] font-semibold shadow-[0_0_35px_rgba(59,130,246,.35)] transition hover:scale-[1.025]">Ro‘yxatdan o‘tish <span className="text-2xl font-light">→</span></a>
          <a href="#how" className="border-b border-blue-400/60 pb-1 text-[15px] text-slate-300 transition hover:text-white">Qanday ishlashini ko‘rish</a>
        </div>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[["◎","9+","Global marketplace"],["▥","100K+","Biznes imkoniyati"],["☆","24/7","AI smart yordamchi"]].map(([icon,value,label],index)=>(
            <div key={label} className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-blue-400/25 bg-blue-950/45 text-3xl text-cyan-400 shadow-[0_0_20px_rgba(37,99,235,.18)]">{icon}</div>
              <div className="text-left"><div className="text-[28px] font-semibold leading-none">{value}</div><div className="mt-2 text-sm text-slate-400">{label}</div></div>
              {index < 2 && <div className="ml-6 hidden h-14 w-px bg-blue-400/20 md:block" />}
            </div>
          ))}
        </div>

        <div className="mt-auto grid w-full grid-cols-3 gap-2 pb-2 sm:grid-cols-5 lg:grid-cols-9 lg:gap-3">
          {marketplaces.map((item)=>(
            <div key={item.name} className="flex h-[86px] items-center justify-center rounded-xl border border-blue-400/30 bg-[#06102e]/80 px-3 backdrop-blur-md shadow-[inset_0_0_20px_rgba(30,64,175,.06)]"><span className={item.cls}>{item.name}</span></div>
          ))}
        </div>

        <div className="pt-4 text-[14px] tracking-[0.06em] text-slate-500">ECWT — O‘zbekistonni <span className="text-cyan-400">global e-commerce</span> bozoriga olib chiqamiz</div>
      </div>
    </section>
  );
}
