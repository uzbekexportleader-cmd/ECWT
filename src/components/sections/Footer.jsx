import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <h2 className="mb-4 text-4xl font-black text-cyan-400">ECWT</h2>

            <p className="leading-8 text-slate-400">
              O‘zbekiston mahsulotlarini global e-commerce bozoriga olib
              chiqadigan zamonaviy raqamli platforma.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="#" className="text-2xl text-cyan-400 transition hover:scale-110">
                <FaTelegramPlane />
              </a>

              <a href="#" className="text-2xl text-cyan-400 transition hover:scale-110">
                <FaInstagram />
              </a>

              <a href="#" className="text-2xl text-cyan-400 transition hover:scale-110">
                <FaLinkedin />
              </a>

              <a href="#" className="text-2xl text-cyan-400 transition hover:scale-110">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Kompaniya</h3>

            <ul className="space-y-4 text-slate-400">
              <li>Biz haqimizda</li>
              <li>Platforma</li>
              <li>Marketplace</li>
              <li>Narxlar</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Xizmatlar</h3>

            <ul className="space-y-4 text-slate-400">
              <li>Marketplace’ga chiqarish</li>
              <li>Brend yaratish</li>
              <li>Foto va video kontent</li>
              <li>Online do‘kon yaratish</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-bold text-white">Aloqa</h3>

            <div className="mb-4 flex items-center gap-3 text-slate-400">
              <FaGlobe className="text-cyan-400" />
              <span>www.ecwt.uz</span>
            </div>

            <div className="mb-4 flex items-center gap-3 text-slate-400">
              <FaEnvelope className="text-cyan-400" />
              <span>info@ecwt.uz</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400">
              <FaPhoneAlt className="text-cyan-400" />
              <span>+998 97 711 51 77</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-slate-500">
            © 2026 ECWT. Barcha huquqlar himoyalangan.
          </p>

          <p className="mt-4 text-cyan-400 md:mt-0">
            O‘zbekistonda yaratilgan 🇺🇿
          </p>
        </div>
      </div>
    </footer>
  );
}