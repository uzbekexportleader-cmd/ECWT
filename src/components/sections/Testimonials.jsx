function Testimonials() {
  const users = [
    {
      name: "Abdulaziz Karimov",
      company: "Textile Export",
      text: "ECWT orqali mahsulotlarimizni Amazon va eBay'da sotishni boshladik. Juda qulay platforma."
    },
    {
      name: "Dilshod Rahimov",
      company: "Handmade Craft",
      text: "Oldin har bir marketplace uchun alohida ishlardik. Endi hammasi bitta dashboardda."
    },
    {
      name: "Malika Ismoilova",
      company: "Agro Export",
      text: "Mahsulotlarni dunyo bozoriga chiqarish ancha osonlashdi."
    }
  ];

  return (
    <section className="w-full py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center mb-16">

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2 font-bold text-cyan-300">
            Testimonials
          </span>

          <h2 className="mt-7 text-5xl font-black text-white">
            Mijozlar nima deydi?
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {users.map((user) => (

            <div
              key={user.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-cyan-400/40 transition"
            >

              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-2xl font-bold text-white">
                {user.name[0]}
              </div>

              <h3 className="mt-6 text-2xl font-black text-white">
                {user.name}
              </h3>

              <p className="text-cyan-400">
                {user.company}
              </p>

              <p className="mt-6 text-slate-300 leading-8">
                "{user.text}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;