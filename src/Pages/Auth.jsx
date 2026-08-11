import { useState } from "react";
import "./Auth.css";

const translations = {
  uz: {
    eyebrow: "ECWT • GLOBAL COMMERCE OS",
    titleA: "O‘zbekiston mahsulotlarini",
    titleB: "dunyoga olib chiqamiz.",
    description:
      "Mahsulotingizni yuklang. ECWT AI uni tahlil qiladi, xalqaro savdoga tayyorlaydi va mos marketplace’larni tavsiya qiladi.",
    start: "Boshlash",
    login: "Kirish",
    trusted: "O‘zbek biznesi uchun yaratilgan",
    metric1: "Marketplace",
    metric2: "Biznes imkoniyati",
    metric3: "AI yordamchi",
    cardLabel: "ECWT ID",
    cardTitle: "Global savdoni boshlang",
    cardText:
      "Bir necha oddiy qadam orqali mahsulotingizni xalqaro bozorga tayyorlang.",
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
      "Загрузите товар. ECWT AI анализирует его, готовит к международной торговле и подбирает подходящие маркетплейсы.",
    start: "Начать",
    login: "Войти",
    trusted: "Создано для бизнеса Узбекистана",
    metric1: "Маркетплейсов",
    metric2: "Возможности бизнеса",
    metric3: "AI помощник",
    cardLabel: "ECWT ID",
    cardTitle: "Начните глобальные продажи",
    cardText:
      "Подготовьте свой товар к международному рынку за несколько простых шагов.",
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
      "Upload your product. ECWT AI analyzes it, prepares it for international commerce and recommends the right marketplaces.",
    start: "Get started",
    login: "Sign in",
    trusted: "Built for businesses in Uzbekistan",
    metric1: "Marketplaces",
    metric2: "Business potential",
    metric3: "AI assistant",
    cardLabel: "ECWT ID",
    cardTitle: "Start selling globally",
    cardText:
      "Prepare your product for international markets through a simple guided experience.",
    register: "Create account",
    existing: "I have an account",
    phoneTitle: "Phone number",
    phoneText: "Enter your number to receive a verification code.",
    continue: "Continue",
    back: "Back",
  },
};

const marketplaces = [
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

  const t = translations[language];

  const begin = (selectedMode) => {
    setMode(selectedMode);
    setStep("phone");
  };

  return (
    <main className="ecwt-auth">
      <div className="ecwt-noise" />
      <div className="ecwt-ambient ecwt-ambient-one" />
      <div className="ecwt-ambient ecwt-ambient-two" />

      <header className="ecwt-header">
        <div className="ecwt-brand">
          <div className="ecwt-mark">
            <span />
            EC
          </div>

          <div className="ecwt-brand-name">ECWT</div>

          <div className="ecwt-company">
            O‘ZBEKISTON ELEKTRON
            <br />
            TIJORAT KOMPANIYASI
          </div>
        </div>

        <div className="ecwt-header-right">
          <span className="ecwt-status">
            <i />
            {t.trusted}
          </span>

          <div className="ecwt-header-langs">
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

      <section className="ecwt-hero">
        <div className="ecwt-copy">
          <div className="ecwt-eyebrow">
            <span />
            {t.eyebrow}
          </div>

          <h1>
            {t.titleA}
            <strong>{t.titleB}</strong>
          </h1>

          <p className="ecwt-description">{t.description}</p>

          <div className="ecwt-actions">
            <button
              className="ecwt-main-action"
              onClick={() => begin("register")}
            >
              {t.start}
              <span>→</span>
            </button>

            <button
              className="ecwt-text-action"
              onClick={() => begin("login")}
            >
              {t.login}
            </button>
          </div>

          <div className="ecwt-metrics">
            <div>
              <strong>9+</strong>
              <span>{t.metric1}</span>
            </div>

            <div>
              <strong>100K+</strong>
              <span>{t.metric2}</span>
            </div>

            <div>
              <strong>AI</strong>
              <span>{t.metric3}</span>
            </div>
          </div>
        </div>

        <div className="ecwt-id-zone">
          <div className="ecwt-id-card">
            <div className="ecwt-id-top">
              <span className="ecwt-id-label">{t.cardLabel}</span>

              <span className="ecwt-id-live">
                <i />
                LIVE
              </span>
            </div>

            <div className="ecwt-mini-core">
              <div className="ecwt-mini-ring ring-one" />
              <div className="ecwt-mini-ring ring-two" />

              <div className="ecwt-mini-center">
                <span>UZ</span>
              </div>

              <i className="ecwt-mini-light light-one" />
              <i className="ecwt-mini-light light-two" />
              <i className="ecwt-mini-light light-three" />
            </div>

            <h2>{t.cardTitle}</h2>
            <p>{t.cardText}</p>

            <button
              className="ecwt-register"
              onClick={() => begin("register")}
            >
              {t.register}
              <span>→</span>
            </button>

            <button
              className="ecwt-existing"
              onClick={() => begin("login")}
            >
              {t.existing}
            </button>

            <div className="ecwt-id-languages">
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

        <div className="ecwt-world">
          <div className="ecwt-world-backlight" />

          <div className="ecwt-sphere">
            <div className="ecwt-sphere-surface" />
            <div className="ecwt-sphere-latitudes" />
            <div className="ecwt-sphere-longitudes" />
            <div className="ecwt-sphere-light" />

            <div className="ecwt-uz-core">
              <small>ECWT</small>
              <strong>UZ</strong>
            </div>

            <div className="ecwt-route route-one">
              <i />
            </div>

            <div className="ecwt-route route-two">
              <i />
            </div>

            <div className="ecwt-route route-three">
              <i />
            </div>

            <div className="ecwt-route route-four">
              <i />
            </div>
          </div>

          <div className="ecwt-orbit orbit-one" />
          <div className="ecwt-orbit orbit-two" />
          <div className="ecwt-orbit orbit-three" />

          {marketplaces.map((marketplace, index) => (
            <div
              key={marketplace}
              className={`ecwt-market market-${index + 1}`}
            >
              <span>{marketplace.slice(0, 1)}</span>
              {marketplace}
            </div>
          ))}

          <div className="ecwt-world-caption">
            <span />
            Uzbekistan
            <b>→</b>
            Global Commerce
          </div>
        </div>
      </section>

      <footer className="ecwt-footer">
        <span>ECWT / GLOBAL COMMERCE INFRASTRUCTURE</span>
        <span>AI • MARKETPLACE • BRAND • ANALYTICS</span>
      </footer>

      {step === "phone" && (
        <div className="ecwt-modal">
          <div className="ecwt-phone-card">
            <button
              className="ecwt-back"
              onClick={() => setStep("welcome")}
            >
              ← {t.back}
            </button>

            <div className="ecwt-phone-logo">EC</div>

            <span className="ecwt-phone-kicker">
              {mode === "register" ? t.register : t.login}
            </span>

            <h2>{t.phoneTitle}</h2>

            <p>{t.phoneText}</p>

            <label className="ecwt-phone-input">
              <span>+998</span>

              <input
                value={phone}
                onChange={(event) =>
                  setPhone(
                    event.target.value
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
              className="ecwt-phone-continue"
              disabled={phone.replace(/\D/g, "").length < 9}
            >
              {t.continue}
              <span>→</span>
            </button>

            <div className="ecwt-phone-security">
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
