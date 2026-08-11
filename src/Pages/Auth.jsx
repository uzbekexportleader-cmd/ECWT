import React, { useEffect, useMemo, useState } from "react";
import "./Auth.css";

const translations = {
  uz: {
    badge: "O‘zbek biznesi uchun yaratilgan",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",

    title1: "O‘zbekiston",
    title2: "mahsulotlarini",
    title3: "dunyoga olib",
    title4: "chiqamiz.",

    description:
      "ECWT AI mahsulotingizni tahlil qiladi, xalqaro savdoga tayyorlaydi va mos marketplace’larni tavsiya qiladi.",

    cardTitle: "Global savdoni boshlang",
    cardText:
      "Mahsulotingizni yuklang. ECWT AI sizga keyingi qadamlarni bosqichma-bosqich ko‘rsatadi.",

    register: "Ro‘yxatdan o‘tish",
    login: "Akkauntim bor",

    statMarket: "Global marketplace",
    statBusiness: "Biznes imkoniyati",
    statAI: "Smart yordamchi",

    uzbek: "O‘zbekcha",
    russian: "Русский",
    english: "English",
  },

  ru: {
    badge: "Создано для бизнеса Узбекистана",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",

    title1: "Продукцию",
    title2: "Узбекистана",
    title3: "выводим",
    title4: "на мировой рынок.",

    description:
      "ECWT AI анализирует ваш товар, подготавливает его к международной торговле и рекомендует подходящие маркетплейсы.",

    cardTitle: "Начните глобальные продажи",
    cardText:
      "Загрузите свой товар. ECWT AI пошагово покажет вам следующие действия.",

    register: "Регистрация",
    login: "У меня есть аккаунт",

    statMarket: "Глобальных маркетплейсов",
    statBusiness: "Возможностей для бизнеса",
    statAI: "Умный помощник",

    uzbek: "O‘zbekcha",
    russian: "Русский",
    english: "English",
  },

  en: {
    badge: "Built for Uzbek businesses",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",

    title1: "Taking",
    title2: "Uzbek products",
    title3: "to the",
    title4: "global market.",

    description:
      "ECWT AI analyzes your product, prepares it for international commerce and recommends the right marketplaces.",

    cardTitle: "Start selling globally",
    cardText:
      "Upload your product. ECWT AI will guide you through the next steps one by one.",

    register: "Create account",
    login: "I have an account",

    statMarket: "Global marketplaces",
    statBusiness: "Business opportunities",
    statAI: "Smart assistant",

    uzbek: "O‘zbekcha",
    russian: "Русский",
    english: "English",
  },
};

const marketplaceItems = [
  { key: "amazon", text: "a", name: "Amazon" },
  { key: "ebay", text: "ebay", name: "eBay" },
  { key: "walmart", text: "✦", name: "Walmart" },
  { key: "google", text: "G", name: "Google Marketplace" },
  { key: "facebook", text: "f", name: "Facebook Marketplace" },
  { key: "mercari", text: "M", name: "Mercari" },
  { key: "bonanza", text: "bonanza", name: "Bonanza" },
  { key: "poshmark", text: "P", name: "Poshmark" },
  { key: "shopify", text: "S", name: "Shopify" },
];

const networkNodes = [
  { x: "5%", y: "18%", size: 3, delay: "0s" },
  { x: "13%", y: "29%", size: 4, delay: "-1s" },
  { x: "21%", y: "15%", size: 3, delay: "-2.4s" },
  { x: "28%", y: "37%", size: 4, delay: "-0.6s" },
  { x: "35%", y: "24%", size: 3, delay: "-3.1s" },
  { x: "42%", y: "43%", size: 5, delay: "-1.8s" },
  { x: "49%", y: "18%", size: 3, delay: "-4s" },
  { x: "55%", y: "31%", size: 4, delay: "-2.2s" },
  { x: "62%", y: "21%", size: 3, delay: "-0.8s" },
  { x: "68%", y: "39%", size: 5, delay: "-3.7s" },
  { x: "75%", y: "17%", size: 3, delay: "-2.9s" },
  { x: "82%", y: "32%", size: 4, delay: "-1.2s" },
  { x: "91%", y: "22%", size: 3, delay: "-4.4s" },

  { x: "8%", y: "67%", size: 3, delay: "-2s" },
  { x: "18%", y: "76%", size: 4, delay: "-3.4s" },
  { x: "31%", y: "62%", size: 3, delay: "-0.9s" },
  { x: "45%", y: "71%", size: 5, delay: "-2.6s" },
  { x: "59%", y: "64%", size: 3, delay: "-1.4s" },
  { x: "72%", y: "74%", size: 4, delay: "-3.9s" },
  { x: "87%", y: "68%", size: 3, delay: "-2.1s" },
  { x: "96%", y: "57%", size: 4, delay: "-1.1s" },
];

function LanguageSwitcher({ language, setLanguage, compact = false }) {
  return (
    <div
      className={
        compact
          ? "auth-language auth-language--card"
          : "auth-language auth-language--top"
      }
    >
      <button
        type="button"
        className={language === "uz" ? "is-active" : ""}
        onClick={() => setLanguage("uz")}
      >
        {compact ? "O‘zbekcha" : "UZ"}
      </button>

      <button
        type="button"
        className={language === "ru" ? "is-active" : ""}
        onClick={() => setLanguage("ru")}
      >
        {compact ? "Русский" : "RU"}
      </button>

      <button
        type="button"
        className={language === "en" ? "is-active" : ""}
        onClick={() => setLanguage("en")}
      >
        {compact ? "English" : "EN"}
      </button>
    </div>
  );
}

function EcwtOrb() {
  return (
    <div className="ecwt-orb">
      <div className="ecwt-orb__halo" />

      <div className="ecwt-orb__segments">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${index * 22.5}deg) translateY(-67px)`,
            }}
          />
        ))}
      </div>

      <div className="ecwt-orb__ring" />

      <div className="ecwt-orb__core">
        <span>ECWT</span>
        <strong>UZ</strong>
      </div>
    </div>
  );
}

function Auth() {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("ecwt-language");

    if (saved === "uz" || saved === "ru" || saved === "en") {
      return saved;
    }

    return "uz";
  });

  useEffect(() => {
    localStorage.setItem("ecwt-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  const handleRegister = () => {
    window.location.assign("/register");
  };

  const handleLogin = () => {
    window.location.assign("/login");
  };

  return (
    <main className="auth-page">
      {/* BACKGROUND */}
      <div className="auth-bg" aria-hidden="true">
        <div className="auth-bg__base" />
        <div className="auth-bg__glow auth-bg__glow--1" />
        <div className="auth-bg__glow auth-bg__glow--2" />

        <div className="auth-bg__network">
          <span className="network-line line-1" />
          <span className="network-line line-2" />
          <span className="network-line line-3" />
          <span className="network-line line-4" />
          <span className="network-line line-5" />
          <span className="network-line line-6" />
          <span className="network-line line-7" />
          <span className="network-line line-8" />

          {networkNodes.map((node, index) => (
            <i
              key={index}
              className="network-dot"
              style={{
                left: node.x,
                top: node.y,
                width: `${node.size}px`,
                height: `${node.size}px`,
                animationDelay: node.delay,
              }}
            />
          ))}
        </div>

        {/*
          MUHIM:
          public/auth-world-map.png ishlatiladi.
          CSS uni to‘rtburchak ko‘rinmasligi uchun crop + mask + blend qiladi.
        */}
        <div className="auth-world-map" />

        <div className="auth-wave auth-wave--1" />
        <div className="auth-wave auth-wave--2" />
        <div className="auth-wave auth-wave--3" />

        <div className="auth-bg__vignette" />
      </div>

      {/* HEADER */}
      <header className="auth-header">
        <button
          type="button"
          className="ecwt-brand"
          onClick={() => window.location.assign("/")}
          aria-label="ECWT Home"
        >
          <span className="ecwt-brand__logo">
            <span>EC</span>
          </span>

          <strong className="ecwt-brand__name">ECWT</strong>

          <i className="ecwt-brand__divider" />

          <span className="ecwt-brand__description">
            O‘ZBEKISTON ELEKTRON
            <br />
            TIJORAT KOMPANIYASI
          </span>
        </button>

        <div className="auth-header__right">
          <div className="business-badge">
            <i />
            <span>{t.badge}</span>
          </div>

          <LanguageSwitcher
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </header>

      {/* MAIN */}
      <section className="auth-main">
        {/* LEFT HERO */}
        <section className="auth-hero">
          <div className="auth-hero__content">
            <p className="auth-eyebrow">{t.eyebrow}</p>

            <h1 className="auth-title">
              <span>{t.title1}</span>
              <span>{t.title2}</span>
              <span className="auth-title__purple">{t.title3}</span>
              <span className="auth-title__purple">{t.title4}</span>
            </h1>

            <p className="auth-description">{t.description}</p>
          </div>
        </section>

        {/* RIGHT CARD */}
        <aside className="auth-panel">
          <div className="auth-card">
            <div className="auth-card__glow" />

            <div className="auth-card__header">
              <strong>ECWT ID</strong>

              <span className="live">
                <i />
                LIVE
              </span>
            </div>

            <div className="auth-card__orb">
              <EcwtOrb />
            </div>

            <div className="auth-card__copy">
              <h2>{t.cardTitle}</h2>
              <p>{t.cardText}</p>
            </div>

            <div className="auth-card__actions">
              <div className="register-led">
                <div className="register-led__beam" />

                <button
                  type="button"
                  className="register-button"
                  onClick={handleRegister}
                >
                  <span>{t.register}</span>

                  <svg
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <button
                type="button"
                className="login-button"
                onClick={handleLogin}
              >
                {t.login}
              </button>
            </div>

            <LanguageSwitcher
              compact
              language={language}
              setLanguage={setLanguage}
            />
          </div>
        </aside>
      </section>

      {/* FOOTER */}
      <footer className="auth-footer">
        <div className="auth-stats">
          <div className="auth-stat">
            <div className="auth-stat__icon">
              <svg viewBox="0 0 42 42" aria-hidden="true">
                <circle
                  cx="21"
                  cy="21"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M6 21h30M21 6c5 5 7 10 7 15s-2 10-7 15M21 6c-5 5-7 10-7 15s2 10 7 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>

            <div>
              <strong>9+</strong>
              <span>{t.statMarket}</span>
            </div>
          </div>

          <i className="auth-stats__divider" />

          <div className="auth-stat">
            <div className="auth-stat__icon">
              <svg viewBox="0 0 42 42" aria-hidden="true">
                <path
                  d="M8 33V23h5v10M18 33V14h5v19M28 33V8h5v25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <strong>100K+</strong>
              <span>{t.statBusiness}</span>
            </div>
          </div>

          <i className="auth-stats__divider" />

          <div className="auth-stat">
            <div className="auth-stat__icon">
              <svg viewBox="0 0 42 42" aria-hidden="true">
                <path
                  d="M20 6c1.2 7.3 4.6 10.7 12 12-7.4 1.3-10.8 4.7-12 12-1.2-7.3-4.6-10.7-12-12 7.4-1.3 10.8-4.7 12-12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />

                <path
                  d="M32 28c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </div>

            <div>
              <strong>AI</strong>
              <span>{t.statAI}</span>
            </div>
          </div>
        </div>

        <div className="marketplace-row">
          {marketplaceItems.map((item) => (
            <div
              key={item.key}
              className={`marketplace-box marketplace-box--${item.key}`}
              title={item.name}
            >
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default Auth;
