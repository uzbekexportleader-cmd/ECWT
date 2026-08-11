import { useMemo, useState } from "react";
import "./Auth.css";

const copy = {
  uz: {
    eyebrow: "ECWT • GLOBAL COMMERCE OS",
    titleA: "O‘zbekiston mahsulotlarini",
    titleB: "dunyoga olib chiqamiz.",
    description:
      "ECWT AI mahsulotingizni tahlil qiladi, xalqaro savdoga tayyorlaydi va mos marketplace’larni tavsiya qiladi.",
    start: "Boshlash",
    login: "Kirish",
    trusted: "O‘zbek biznesi uchun yaratilgan",
    stat1: "Global marketplace",
    stat2: "Biznes imkoniyati",
    stat3: "AI yordamchi",
    register: "Ro‘yxatdan o‘tish",
    existing: "Akkauntim bor",
    phoneTitle: "Telefon raqamingiz",
    phoneText: "Tasdiqlash kodini yuborish uchun raqamingizni kiriting.",
    continue: "Davom etish",
    back: "Orqaga",
  },

  ru: {
    eyebrow: "ECWT • GLOBAL COMMERCE OS",
    titleA: "Товары Узбекистана",
    titleB: "выходят на мировой рынок.",
    description:
      "ECWT AI анализирует товар, готовит его к международной торговле и рекомендует подходящие маркетплейсы.",
    start: "Начать",
    login: "Войти",
    trusted: "Создано для бизнеса Узбекистана",
    stat1: "Глобальных маркетплейсов",
    stat2: "Возможности бизнеса",
    stat3: "AI помощник",
    register: "Регистрация",
    existing: "У меня есть аккаунт",
    phoneTitle: "Номер телефона",
    phoneText: "Введите номер, чтобы получить код подтверждения.",
    continue: "Продолжить",
    back: "Назад",
  },

  en: {
    eyebrow: "ECWT • GLOBAL COMMERCE OS",
    titleA: "Products from Uzbekistan",
    titleB: "built for the world.",
    description:
      "ECWT AI analyzes your product, prepares it for international commerce and recommends the right marketplaces.",
    start: "Get started",
    login: "Sign in",
    trusted: "Built for businesses in Uzbekistan",
    stat1: "Global marketplaces",
    stat2: "Business potential",
    stat3: "AI assistant",
    register: "Create account",
    existing: "I have an account",
    phoneTitle: "Phone number",
    phoneText: "Enter your number to receive a verification code.",
    continue: "Continue",
    back: "Back",
  },
};

const markets = [
  "Amazon",
  "eBay",
  "Walmart",
  "Shopify",
  "Google",
  "Mercari",
  "Bonanza",
  "Poshmark",
];

function Auth() {
  const [language, setLanguage] = useState("uz");
  const [step, setStep] = useState("welcome");
  const [mode, setMode] = useState("register");
  const [phone, setPhone] = useState("");

  const t = useMemo(() => copy[language], [language]);

  const openPhone = (selectedMode) => {
    setMode(selectedMode);
    setStep("phone");
  };

  const cleanPhone = phone.replace(/\D/g, "");

  return (
    <main className="premium-auth">
      <div className="premium-bg" />
      <div className="premium-grid" />
      <div className="premium-orb premium-orb-a" />
      <div className="premium-orb premium-orb-b" />

      <header className="premium-header">
        <div className="premium-brand">
          <div className="premium-logo">
            <span className="premium-logo-dot" />
            EC
          </div>

          <div className="premium-brand-word">ECWT</div>

          <div className="premium-brand-sub">
            O‘ZBEKISTON ELEKTRON
            <br />
            TIJORAT KOMPANIYASI
          </div>
        </div>

        <div className="premium-header-right">
          <div className="premium-status">
            <span />
            {t.trusted}
          </div>

          <div className="premium-langs">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                className={language === lang ? "active" : ""}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="premium-hero">
        <div className="premium-copy">
          <div className="premium-eyebrow">
            <span />
            {t.eyebrow}
          </div>

          <h1>
            {t.titleA}
            <strong>{t.titleB}</strong>
          </h1>

          <p>{t.description}</p>

          <div className="premium-actions">
            <button
              className="premium-primary"
              onClick={() => openPhone("register")}
            >
              {t.start}
              <span>→</span>
            </button>

            <button
              className="premium-secondary"
              onClick={() => openPhone("login")}
            >
              {t.login}
            </button>
          </div>

          <div className="premium-stats">
            <div>
              <strong>9+</strong>
              <span>{t.stat1}</span>
            </div>

            <div>
              <strong>100K+</strong>
              <span>{t.stat2}</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>{t.stat3}</span>
            </div>
          </div>
        </div>

        <div className="premium-center">
          <div className="premium-card">
            <div className="premium-card-top">
              <span>ECWT ID</span>

              <span className="premium-live">
                <i />
                LIVE
              </span>
            </div>

            <div className="premium-core">
              <div className="premium-core-ring core-ring-1" />
              <div className="premium-core-ring core-ring-2" />
              <div className="premium-core-ring core-ring-3" />

              <div className="premium-core-center">
                <small>ECWT</small>
                <strong>UZ</strong>
              </div>

              <i className="premium-core-light l1" />
              <i className="premium-core-light l2" />
              <i className="premium-core-light l3" />
            </div>

            <h2>Global savdoni boshlang</h2>

            <p>
              Mahsulotingizni yuklang. ECWT AI sizga keyingi qadamlarni
              bosqichma-bosqich ko‘rsatadi.
            </p>

            <button
              className="premium-register"
              onClick={() => openPhone("register")}
            >
              {t.register}
              <span>→</span>
            </button>

            <button
              className="premium-existing"
              onClick={() => openPhone("login")}
            >
              {t.existing}
            </button>

            <div className="premium-card-langs">
              <button
                className={language === "uz" ? "active" : ""}
                onClick={() => setLanguage("uz")}
              >
                O‘zbekcha
              </button>

              <button
                className={language === "ru" ? "active" : ""}
                onClick={() => setLanguage("ru")}
              >
                Русский
              </button>

              <button
                className={language === "en" ? "active" : ""}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
            </div>
          </div>
        </div>

        <div className="premium-world">
          <div className="premium-world-glow" />

          <div className="premium-sphere">
            <div className="premium-sphere-grid" />
            <div className="premium-sphere-shine" />

            <div className="premium-uz-core">
              <small>ECWT</small>
              <strong>UZ</strong>
            </div>

            <div className="premium-route route-a">
              <i />
            </div>

            <div className="premium-route route-b">
              <i />
            </div>

            <div className="premium-route route-c">
              <i />
            </div>

            <div className="premium-route route-d">
              <i />
            </div>
          </div>

          <div className="premium-orbit-ring orbit-a" />
          <div className="premium-orbit-ring orbit-b" />
          <div className="premium-orbit-ring orbit-c" />

          {markets.map((market, index) => (
            <div
              key={market}
              className={`premium-market premium-market-${index + 1}`}
            >
              <span>{market.slice(0, 1)}</span>
              {market}
            </div>
          ))}

          <div className="premium-world-label">
            <span />
            Uzbekistan
            <b>→</b>
            Global Commerce
          </div>
        </div>
      </section>

      <footer className="premium-footer">
        <span>ECWT / GLOBAL COMMERCE INFRASTRUCTURE</span>
        <span>AI • MARKETPLACE • BRAND • ANALYTICS</span>
      </footer>

      {step === "phone" && (
        <div className="premium-modal">
          <div className="premium-phone-card">
            <button
              className="premium-back"
              onClick={() => setStep("welcome")}
            >
              ← {t.back}
            </button>

            <div className="premium-phone-logo">EC</div>

            <span className="premium-phone-kicker">
              {mode === "register" ? t.register : t.login}
            </span>

            <h2>{t.phoneTitle}</h2>

            <p>{t.phoneText}</p>

            <label className="premium-phone-input">
              <span>+998</span>

              <input
                value={phone}
                onChange={(e) =>
                  setPhone(
                    e.target.value
                      .replace(/[^0-9 ]/g, "")
                      .slice(0, 12)
                  )
                }
                placeholder="90 123 45 67"
                inputMode="numeric"
                autoFocus
              />
            </label>

            <button
              className="premium-phone-continue"
              disabled={cleanPhone.length < 9}
              onClick={() => alert("Keyingi bosqich: SMS tasdiqlash")}
            >
              {t.continue}
              <span>→</span>
            </button>

            <div className="premium-phone-security">
              <i />
              Secure ECWT verification
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Auth;
