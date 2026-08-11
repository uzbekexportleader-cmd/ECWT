import { useState } from "react";

const texts = {
  uz: {
    hero1: "Mahsulotingizni",
    hero2: "dunyoga olib chiqing",
    heroDesc:
      "O‘zbekiston mahsulotlarini global marketplace’larda soting va brendingizni dunyoga taniting.",
    register: "RO‘YXATDAN O‘TISH",
    login: "KIRISH",
    phoneTitleRegister: "Ro‘yxatdan o‘tish",
    phoneTitleLogin: "ECWT’ga kirish",
    phoneDesc: "Telefon raqamingizni kiriting",
    continue: "DAVOM ETISH →",
    back: "← Orqaga",
    secure: "Ma’lumotlaringiz xavfsiz himoyalanadi",
  },
  ru: {
    hero1: "Выведите свой товар",
    hero2: "на мировой рынок",
    heroDesc:
      "Продавайте товары из Узбекистана на глобальных marketplace и развивайте свой бренд.",
    register: "РЕГИСТРАЦИЯ",
    login: "ВОЙТИ",
    phoneTitleRegister: "Регистрация",
    phoneTitleLogin: "Войти в ECWT",
    phoneDesc: "Введите номер телефона",
    continue: "ПРОДОЛЖИТЬ →",
    back: "← Назад",
    secure: "Ваши данные надёжно защищены",
  },
  en: {
    hero1: "Take your products",
    hero2: "to the world",
    heroDesc:
      "Sell products from Uzbekistan on global marketplaces and grow your brand internationally.",
    register: "CREATE ACCOUNT",
    login: "SIGN IN",
    phoneTitleRegister: "Create account",
    phoneTitleLogin: "Sign in to ECWT",
    phoneDesc: "Enter your phone number",
    continue: "CONTINUE →",
    back: "← Back",
    secure: "Your information is securely protected",
  },
};

function Auth() {
  const [language, setLanguage] = useState("uz");
  const [step, setStep] = useState("welcome");
  const [mode, setMode] = useState("register");
  const [phone, setPhone] = useState("");

  const t = texts[language];

  const openPhone = (selectedMode) => {
    setMode(selectedMode);
    setStep("phone");
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
        }

        body {
          background: #020714;
          font-family: Inter, Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        .auth-page {
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          color: white;
          background:
            radial-gradient(circle at 78% 34%, rgba(0, 123, 255, 0.18), transparent 34%),
            radial-gradient(circle at 30% 80%, rgba(0, 220, 180, 0.08), transparent 28%),
            linear-gradient(135deg, #020714 0%, #051225 52%, #020714 100%);
        }

        .stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.32;
          background-image:
            radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px);
          background-size: 70px 70px;
        }

        .page-shell {
          position: relative;
          z-index: 2;
          width: min(1450px, calc(100% - 48px));
          margin: 0 auto;
          padding: 36px 0 30px;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 34px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .brand-mark {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px dotted #26c7ff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #60e6c1;
          font-size: 13px;
          font-weight: 900;
          box-shadow: 0 0 22px rgba(0, 166, 255, 0.25);
        }

        .brand-title {
          font-size: 54px;
          line-height: 1;
          margin: 0;
          font-weight: 900;
          letter-spacing: -2px;
          background: linear-gradient(90deg, #ffffff, #5da9ff, #69f1b8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .brand-sub {
          border-left: 1px solid rgba(255,255,255,0.35);
          padding-left: 18px;
          color: #e8f2ff;
          font-size: 16px;
          line-height: 1.25;
          font-weight: 700;
        }

        .main-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr 1.18fr;
          gap: 26px;
          align-items: center;
        }

        .hero-copy {
          padding-left: 4px;
        }

        .hero-copy h2 {
          font-size: clamp(42px, 4.5vw, 70px);
          line-height: 1.02;
          margin: 0 0 22px;
          letter-spacing: -2px;
        }

        .accent {
          color: #22c7ff;
        }

        .hero-copy p {
          max-width: 520px;
          color: #c7d6e7;
          font-size: 18px;
          line-height: 1.55;
          margin-bottom: 30px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          max-width: 560px;
          margin-bottom: 18px;
        }

        .stat {
          text-align: center;
          padding: 13px 8px;
          border-right: 1px solid rgba(255,255,255,0.14);
        }

        .stat:last-child {
          border-right: none;
        }

        .stat-icon {
          font-size: 27px;
          margin-bottom: 6px;
        }

        .stat-value {
          color: #25e3b1;
          font-weight: 900;
          font-size: 18px;
        }

        .stat-label {
          color: #d9e6f3;
          font-size: 12px;
          margin-top: 4px;
        }

        .trust {
          display: inline-flex;
          gap: 12px;
          align-items: center;
          margin-top: 6px;
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid rgba(32, 211, 184, 0.34);
          background: rgba(0, 50, 72, 0.42);
          color: #dcebf6;
          font-size: 13px;
        }

        .trust-icon {
          color: #35e5bc;
          font-size: 24px;
        }

        .auth-card {
          position: relative;
          padding: 38px 28px 26px;
          border-radius: 28px;
          background:
            linear-gradient(
              145deg,
              rgba(8, 31, 63, 0.96),
              rgba(3, 15, 35, 0.98)
            );
          border: 1px solid rgba(83, 161, 255, 0.48);
          box-shadow:
            0 30px 90px rgba(0,0,0,0.42),
            0 0 45px rgba(0, 125, 255, 0.12);
          text-align: center;
          overflow: hidden;
        }

        .auth-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 28%, rgba(25, 130, 255, 0.15), transparent 42%);
          pointer-events: none;
        }

        .card-logo {
          position: relative;
          z-index: 1;
          font-size: 64px;
          font-weight: 900;
          margin: 0;
          background: linear-gradient(90deg, #2d8cff, #6cc8ff, #5ee6b1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .card-subtitle {
          position: relative;
          z-index: 1;
          color: #d4e3f2;
          margin: 8px 0 24px;
          font-size: 15px;
        }

        .mini-map {
          position: relative;
          z-index: 1;
          height: 205px;
          margin: 0 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .uz-shape {
          width: 190px;
          height: 92px;
          border: 2px solid #52f2bb;
          border-radius: 48% 36% 42% 50%;
          transform: rotate(-6deg);
          position: relative;
          background: rgba(30, 220, 175, 0.08);
          box-shadow:
            0 0 24px rgba(55, 245, 190, 0.45),
            inset 0 0 30px rgba(0, 160, 255, 0.2);
        }

        .arc {
          position: absolute;
          width: 160px;
          height: 80px;
          border-top: 2px solid #2d8cff;
          border-radius: 50%;
          opacity: 0.8;
        }

        .arc.a1 { transform: translate(-85px, -45px) rotate(-18deg); }
        .arc.a2 { transform: translate(70px, -50px) rotate(18deg); }
        .arc.a3 { transform: translate(-30px, -70px) rotate(4deg); }

        .pulse {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7af5ff;
          box-shadow: 0 0 14px #7af5ff, 0 0 24px #157dff;
          animation: pulseMove 3s linear infinite;
        }

        .pulse.p1 { animation-delay: 0s; }
        .pulse.p2 { animation-delay: 1s; }
        .pulse.p3 { animation-delay: 2s; }

        @keyframes pulseMove {
          0% {
            transform: translate(-85px, 0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translate(105px, -70px);
            opacity: 0;
          }
        }

        .primary-btn,
        .secondary-btn {
          position: relative;
          z-index: 1;
          width: 100%;
          min-height: 60px;
          border-radius: 15px;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;
        }

        .primary-btn {
          border: 0;
          color: white;
          background: linear-gradient(90deg, #116eff, #00c9ff, #18d99d);
          box-shadow: 0 12px 30px rgba(0, 131, 255, 0.24);
        }

        .secondary-btn {
          margin-top: 14px;
          border: 1px solid rgba(124, 177, 228, 0.35);
          color: white;
          background: rgba(3, 18, 40, 0.75);
        }

        .primary-btn:hover,
        .secondary-btn:hover {
          filter: brightness(1.08);
        }

        .languages {
          position: relative;
          z-index: 1;
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 23px;
          flex-wrap: wrap;
        }

        .lang-btn {
          border: 0;
          background: transparent;
          color: #a9bdd4;
          cursor: pointer;
          padding: 4px 7px;
          font-size: 12px;
        }

        .lang-btn.active {
          color: #29e2b0;
          font-weight: 900;
          border-bottom: 2px solid #29e2b0;
        }

        .globe-zone {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .globe {
          width: 470px;
          aspect-ratio: 1;
          border-radius: 50%;
          position: relative;
          background:
            radial-gradient(circle at 38% 35%, rgba(25, 165, 255, 0.25), transparent 25%),
            radial-gradient(circle at 50% 50%, #082a5c 0%, #031429 62%, #020811 100%);
          border: 2px solid rgba(45, 160, 255, 0.85);
          box-shadow:
            0 0 45px rgba(0, 140, 255, 0.45),
            inset 0 0 70px rgba(0, 120, 255, 0.2);
          overflow: visible;
        }

        .globe-grid {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background:
            repeating-radial-gradient(
              circle at center,
              transparent 0 38px,
              rgba(65, 148, 255, 0.18) 39px 40px
            ),
            repeating-linear-gradient(
              90deg,
              transparent 0 45px,
              rgba(65, 148, 255, 0.12) 46px 47px
            );
          animation: spinGrid 18s linear infinite;
        }

        @keyframes spinGrid {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .globe-core {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-7deg);
          width: 170px;
          height: 84px;
          border: 2px solid #53f3b9;
          border-radius: 45% 35% 42% 48%;
          background: rgba(42, 233, 179, 0.08);
          box-shadow:
            0 0 22px rgba(72, 255, 195, 0.7),
            0 0 60px rgba(0, 140, 255, 0.28);
        }

        .orbit {
          position: absolute;
          inset: -22px;
          border-radius: 50%;
          border: 1px solid rgba(55, 169, 255, 0.34);
          animation: orbitSpin 26s linear infinite;
        }

        .orbit.o2 {
          inset: 22px -45px;
          animation-duration: 34s;
          animation-direction: reverse;
        }

        @keyframes orbitSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .market-badge {
          position: absolute;
          padding: 12px 16px;
          border-radius: 14px;
          color: white;
          font-weight: 800;
          font-size: 14px;
          background: rgba(3, 20, 44, 0.92);
          border: 1px solid rgba(60, 156, 255, 0.42);
          box-shadow: 0 8px 24px rgba(0,0,0,0.32);
        }

        .amazon { top: -20px; left: 38%; }
        .ebay { top: 35px; right: -28px; }
        .walmart { top: 145px; right: -65px; }
        .shopify { bottom: 130px; right: -55px; }
        .mercari { bottom: 35px; right: 30px; }
        .poshmark { bottom: -15px; left: 38%; }
        .bonanza { bottom: 70px; left: -45px; }
        .facebook { top: 220px; left: -65px; }
        .google { top: 80px; left: -35px; }

        .bottom-strip {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1px;
          border-radius: 18px;
          overflow: hidden;
          border: 1px solid rgba(79, 151, 230, 0.26);
          background: rgba(5, 21, 43, 0.85);
        }

        .feature {
          min-height: 108px;
          padding: 16px;
          display: flex;
          gap: 12px;
          align-items: center;
          border-right: 1px solid rgba(255,255,255,0.08);
        }

        .feature:last-child {
          border-right: none;
        }

        .feature-icon {
          font-size: 30px;
        }

        .feature-title {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 5px;
        }

        .feature-sub {
          color: #9fb3c8;
          font-size: 12px;
          line-height: 1.3;
        }

        .phone-overlay {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(0, 6, 18, 0.82);
          backdrop-filter: blur(12px);
        }

        .phone-card {
          width: 100%;
          max-width: 450px;
          padding: 34px;
          border-radius: 28px;
          background:
            linear-gradient(145deg, rgba(8, 31, 63, 0.98), rgba(3, 15, 35, 0.99));
          border: 1px solid rgba(83, 161, 255, 0.48);
          box-shadow: 0 30px 90px rgba(0,0,0,0.55);
          text-align: center;
        }

        .back-btn {
          display: block;
          border: 0;
          background: transparent;
          color: #a9bdd4;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .phone-box {
          display: flex;
          align-items: center;
          border: 1px solid rgba(116, 178, 235, 0.34);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(1, 14, 31, 0.84);
          margin: 18px 0 16px;
        }

        .phone-box span {
          padding: 0 16px;
          font-weight: 800;
          border-right: 1px solid rgba(255,255,255,0.14);
        }

        .phone-box input {
          flex: 1;
          min-width: 0;
          padding: 18px 15px;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-size: 18px;
        }

        .security {
          color: #8398ae;
          font-size: 12px;
          margin-top: 18px;
        }

        @media (max-width: 1180px) {
          .main-grid {
            grid-template-columns: 1fr 1fr;
          }

          .globe-zone {
            grid-column: 1 / -1;
            min-height: 540px;
          }

          .bottom-strip {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 760px) {
          .page-shell {
            width: min(100% - 24px, 720px);
          }

          .topbar {
            align-items: flex-start;
          }

          .brand-title {
            font-size: 38px;
          }

          .brand-sub {
            font-size: 12px;
          }

          .main-grid {
            grid-template-columns: 1fr;
          }

          .hero-copy {
            text-align: center;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
            margin-inline: auto;
          }

          .auth-card {
            max-width: 520px;
            margin-inline: auto;
          }

          .globe {
            width: min(86vw, 470px);
          }

          .market-badge {
            font-size: 11px;
            padding: 9px 11px;
          }

          .bottom-strip {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <div className="auth-page">
        <div className="stars" />

        <div className="page-shell">
          <div className="topbar">
            <div className="brand">
              <div className="brand-mark">ECWT</div>

              <div>
                <h1 className="brand-title">ECWT</h1>
              </div>

              <div className="brand-sub">
                O‘ZBEKISTON
                <br />
                ELEKTRON TIJORAT
                <br />
                KOMPANIYASI
              </div>
            </div>
          </div>

          <div className="main-grid">
            <section className="hero-copy">
              <h2>
                {t.hero1}
                <br />
                <span className="accent">{t.hero2}</span>
              </h2>

              <p>{t.heroDesc}</p>

              <div className="stats">
                <div className="stat">
                  <div className="stat-icon">👥</div>
                  <div className="stat-value">25 000+</div>
                  <div className="stat-label">Hunarmand</div>
                </div>

                <div className="stat">
                  <div className="stat-icon">🏪</div>
                  <div className="stat-value">100 000+</div>
                  <div className="stat-label">Tadbirkor</div>
                </div>

                <div className="stat">
                  <div className="stat-icon">🌐</div>
                  <div className="stat-value">9+</div>
                  <div className="stat-label">Marketplace</div>
                </div>

                <div className="stat">
                  <div className="stat-icon">📈</div>
                  <div className="stat-value">AI</div>
                  <div className="stat-label">Smart marketing</div>
                </div>
              </div>

              <div className="trust">
                <div className="trust-icon">🛡️</div>
                <div>
                  <strong>Xavfsiz va ishonchli platforma</strong>
                  <br />
                  <span style={{ color: "#91a7bc" }}>
                    Ma’lumotlaringiz himoyalangan
                  </span>
                </div>
              </div>
            </section>

            <section className="auth-card">
              <h2 className="card-logo">ECWT</h2>

              <p className="card-subtitle">
                Dunyoni bog‘laymiz, biznesingizni oshiramiz
              </p>

              <div className="mini-map">
                <div className="arc a1" />
                <div className="arc a2" />
                <div className="arc a3" />

                <div className="uz-shape" />

                <div className="pulse p1" />
                <div className="pulse p2" />
                <div className="pulse p3" />
              </div>

              <button
                className="primary-btn"
                onClick={() => openPhone("register")}
              >
                {t.register}
              </button>

              <button
                className="secondary-btn"
                onClick={() => openPhone("login")}
              >
                {t.login}
              </button>

              <div className="languages">
                <button
                  className={`lang-btn ${language === "uz" ? "active" : ""}`}
                  onClick={() => setLanguage("uz")}
                >
                  O‘zbekcha
                </button>

                <button
                  className={`lang-btn ${language === "ru" ? "active" : ""}`}
                  onClick={() => setLanguage("ru")}
                >
                  Русский
                </button>

                <button
                  className={`lang-btn ${language === "en" ? "active" : ""}`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
              </div>
            </section>

            <section className="globe-zone">
              <div className="globe">
                <div className="globe-grid" />
                <div className="globe-core" />

                <div className="orbit" />
                <div className="orbit o2" />

                <div className="market-badge amazon">Amazon</div>
                <div className="market-badge ebay">eBay</div>
                <div className="market-badge walmart">Walmart</div>
                <div className="market-badge shopify">Shopify</div>
                <div className="market-badge mercari">Mercari</div>
                <div className="market-badge poshmark">Poshmark</div>
                <div className="market-badge bonanza">Bonanza</div>
                <div className="market-badge facebook">Facebook</div>
                <div className="market-badge google">Google</div>
              </div>
            </section>
          </div>

          <div className="bottom-strip">
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <div>
                <div className="feature-title">Global bozorga chiqish</div>
                <div className="feature-sub">9+ marketplace integratsiyasi</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">📷</div>
              <div>
                <div className="feature-title">Professional kontent</div>
                <div className="feature-sub">Foto va video xizmatlari</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🏷️</div>
              <div>
                <div className="feature-title">Brend va do‘kon</div>
                <div className="feature-sub">Shopify va brand yechimlari</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">📊</div>
              <div>
                <div className="feature-title">Marketing va AI</div>
                <div className="feature-sub">Sun’iy intellekt yordamida o‘sish</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <div>
                <div className="feature-title">Xavfsiz va ishonchli</div>
                <div className="feature-sub">Ma’lumotlaringiz himoyalangan</div>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon">🎧</div>
              <div>
                <div className="feature-title">24/7 qo‘llab-quvvatlash</div>
                <div className="feature-sub">Siz bilan doim aloqadamiz</div>
              </div>
            </div>
          </div>
        </div>

        {step === "phone" && (
          <div className="phone-overlay">
            <div className="phone-card">
              <button
                className="back-btn"
                onClick={() => setStep("welcome")}
              >
                {t.back}
              </button>

              <h2>
                {mode === "register"
                  ? t.phoneTitleRegister
                  : t.phoneTitleLogin}
              </h2>

              <p style={{ color: "#a9bdd4" }}>
                {t.phoneDesc}
              </p>

              <div className="phone-box">
                <span>+998</span>

                <input
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9 ]/g, ""))
                  }
                  placeholder="90 123 45 67"
                  inputMode="numeric"
                />
              </div>

              <button
                className="primary-btn"
                disabled={phone.replace(/\s/g, "").length < 9}
                onClick={() => alert("Keyingi bosqich: SMS tasdiqlash")}
                style={{
                  opacity:
                    phone.replace(/\s/g, "").length >= 9 ? 1 : 0.45,
                }}
              >
                {t.continue}
              </button>

              <div className="security">
                🔒 {t.secure}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Auth;
