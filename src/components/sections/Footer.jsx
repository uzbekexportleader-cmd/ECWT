import {
  FaTelegramPlane,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 border-t border-white/10">

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-cyan-400 mb-4">
              ECWT
            </h2>

            <p className="text-slate-400 leading-8">
              O‘zbekistonni Global E-Commerce
              bozoriga olib chiqayotgan
              zamonaviy platforma.
            </p>

            <div className="flex gap-4 mt-8">

              <a href="#" className="text-cyan-400 text-2xl hover:scale-110 transition">
                <FaTelegramPlane />
              </a>

              <a href="#" className="text-cyan-400 text-2xl hover:scale-110 transition">
                <FaInstagram />
              </a>

              <a href="#" className="text-cyan-400 text-2xl hover:scale-110 transition">
                <FaLinkedin />
              </a>

              <a href="#" className="text-cyan-400 text-2xl hover:scale-110 transition">
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-white font-bold text-xl mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>About</li>
              <li>Marketplace</li>
              <li>Pricing</li>
              <li>Dashboard</li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-white font-bold text-xl mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Amazon</li>
              <li>eBay</li>
              <li>Walmart</li>
              <li>Shopify</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="flex items-center gap-3 text-slate-400 mb-4">

              <FaGlobe className="text-cyan-400"/>

              <span>www.ecwt.uz</span>

            </div>

            <div className="text-slate-400 mb-4">
              info@ecwt.uz
            </div>

            <div className="text-slate-400">
              +998 90 123 45 67
            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 ECWT. All Rights Reserved.
          </p>

          <p className="text-cyan-400 mt-4 md:mt-0">
            Made in Uzbekistan 🇺🇿
          </p>

        </div>

      </div>

    </footer>
  );
}