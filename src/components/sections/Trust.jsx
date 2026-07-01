import {
  FaGlobe,
  FaRobot,
  FaShieldAlt,
  FaLock,
} from "react-icons/fa";

const items = [
  {
    title: "9 ta Marketplace",
    text: "Amazon, eBay, Walmart, Shopify va boshqa global platformalar bilan ishlash.",
    icon: <FaGlobe />,
  },
  {
    title: "AI Powered",
    text: "Sun'iy intellekt yordamida marketing va mahsulot optimizatsiyasi.",
    icon: <FaRobot />,
  },
  {
    title: "24/7 Support",
    text: "Mutaxassislarimiz doimo sizning biznesingizni qo'llab-quvvatlaydi.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Secure Platform",
    text: "Ma'lumotlaringiz zamonaviy xavfsizlik texnologiyalari bilan himoyalanadi.",
    icon: <FaLock />,
  },
];

export default function Trust() {
  return (
    <section className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold mb-3">
            Nima uchun ECWT?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sizning ishonchli eksport hamkoringiz
          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto text-lg">
            ECWT platformasi O‘zbekiston tadbirkorlarini global e-commerce
            bozoriga olib chiqish uchun zamonaviy texnologiyalarni taqdim etadi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8
              transition-all duration-300 hover:-translate-y-2
              hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="text-5xl text-cyan-400 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-slate-400 leading-8">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}