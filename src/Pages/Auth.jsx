import React, { useEffect, useMemo, useState } from "react";
import "./Auth.css";

const translations = {
  uz: {
    business: "O‘zbek biznesi uchun yaratilgan",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",
    title1: "O‘zbekiston",
    title2: "mahsulotlarini",
    title3: "dunyoga olib",
    title4: "chiqamiz.",
    description:
      "ECWT AI mahsulotingizni tahlil qiladi, xalqaro savdoga tayyorlaydi va mos marketplace’larni tavsiya qiladi.",

    marketplaceStat: "Global marketplace",
    businessStat: "Biznes imkoniyati",
    aiStat: "Smart yordamchi",

    id: "ECWT ID",
    live: "LIVE",
    cardTitle: "Global savdoni boshlang",
    cardText:
      "Mahsulotingizni yuklang. ECWT AI sizga keyingi qadamlarni bosqichma-bosqich ko‘rsatadi.",

    register: "Ro‘yxatdan o‘tish",
    login: "Akkauntim bor",

    languageUz: "O‘zbekcha",
    languageRu: "Русский",
    languageEn: "English",
  },

  ru: {
    business: "Создано для бизнеса Узбекистана",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",
    title1: "Выводим",
    title2: "продукцию",
    title3: "Узбекистана",
    title4: "на мировой рынок.",
    description:
      "ECWT AI анализирует ваш товар, подготавливает его к международным продажам и рекомендует подходящие маркетплейсы.",

    marketplaceStat: "Глобальных маркетплейсов",
    businessStat: "Возможностей для бизнеса",
    aiStat: "Умный помощник",

    id: "ECWT ID",
    live: "LIVE",
    cardTitle: "Начните глобальные продажи",
    cardText:
      "Загрузите свой товар. ECWT AI пошагово покажет вам дальнейшие действия.",

    register: "Регистрация",
    login: "У меня есть аккаунт",

    languageUz: "O‘zbekcha",
    languageRu: "Русский",
    languageEn: "English",
  },

  en: {
    business: "Built for Uzbek businesses",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",
    title1: "Taking",
    title2: "Uzbek products",
    title3: "to the",
    title4: "global market.",
    description:
      "ECWT AI analyzes your product, prepares it for international commerce and recommends the right marketplaces.",

    marketplaceStat: "Global marketplaces",
    businessStat: "Business opportunities",
    aiStat: "Smart assistant",

    id: "ECWT ID",
    live: "LIVE",
    cardTitle: "Start selling globally",
    cardText:
      "Upload your product. ECWT AI will guide you through the next steps one by one.",

    register: "Create account",
    login: "I have an account",

    languageUz: "O‘zbekcha",
    languageRu: "Русский",
    languageEn: "English",
  },
};

const marketplaces = [
  {
    id: "amazon",
    label: "a",
    aria: "Amazon",
  },
  {
    id: "ebay",
    label: "ebay",
    aria: "eBay",
  },
  {
    id: "walmart",
    label: "✦",
    aria: "Walmart",
  },
  {
    id: "shopify",
    label: "S",
    aria: "Shopify",
  },
  {
    id: "google",
    label: "G",
    aria: "Google Marketplace",
  },
  {
    id: "mercari",
    label: "M",
    aria: "Mercari",
  },
  {
    id: "bonanza",
    label: "b",
    aria: "Bonanza",
  },
  {
    id: "poshmark",
    label: "P",
    aria: "Poshmark",
  },
];

const networkNodes = [
  { left: "6%", top: "17%", delay: "0s", size: 3 },
  { left: "14%", top: "32%", delay: "1.1s", size: 4 },
  { left: "21%", top: "14%", delay: "2.6s", size: 3 },
  { left: "29%", top: "43%", delay: "0.7s", size: 5 },
  { left: "37%", top: "22%", delay: "3.3s", size: 3 },
  { left: "44%", top: "37%", delay: "1.8s", size: 4 },
  { left: "51%", top: "15%", delay: "2.1s", size: 3 },
  { left: "58%", top: "30%", delay: "0.4s", size: 5 },
  { left: "66%", top: "19%", delay: "2.9s", size: 4 },
  { left: "73%", top: "40%", delay: "1.2s", size: 3 },
  { left: "81%", top: "23%", delay: "3.6s", size: 4 },
  { left: "91%", top: "36%", delay: "0.9s", size: 3 },
  { left: "10%", top: "68%", delay: "3s", size: 4 },
  { left: "24%", top: "74%", delay: "0.2s", size: 3 },
  { left: "42%", top: "65%", delay: "1.4s", size: 4 },
  { left: "55%", top: "78%", delay: "2.3s", size: 5 },
  { left: "69%", top: "69%", delay: "0.5s", size: 3 },
  { left: "84%", top: "76%", delay: "2.7s", size: 4 },
  { left: "95%", top: "62%", delay: "1.7s", size: 3 },
];

function Auth() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("ecwt-language");

    if (
      savedLanguage === "uz" ||
      savedLanguage === "ru" ||
      savedLanguage === "en"
    ) {
      return savedLanguage;
    }

    return "uz";
  });

  useEffect(() => {
    localStorage.setItem("ecwt-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const goToRegister = () => {
    window.location.assign("/register");
  };

  const goToLogin = () => {
    window.location.assign("/login");
  };

  return (
    <main className="ecwt-auth">
      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="auth-background" aria-hidden="true">
        <div className="auth-background__glow auth-background__glow--one" />
        <div className="auth-background__glow auth-background__glow--two" />
        <div className="auth-background__glow auth-background__glow--three" />

        <div className="network-grid" />

        <div className="network-lines">
          <span className="network-line network-line--1" />
          <span className="network-line network-line--2" />
          <span className="network-line network-line--3" />
          <span className="network-line network-line--4" />
          <span className="network-line network-line--5" />
          <span className="network-line network-line--6" />
          <span className="network-line network-line--7" />
          <span className="network-line network-line--8" />
        </div>

        <div className="network-nodes">
          {networkNodes.map((node, index) => (
            <span
              key={index}
              className="network-node"
              style={{
                left: node.left,
                top: node.top,
                width: `${node.size}px`,
                height: `${node.size}px`,
                animationDelay: node.delay,
              }}
            />
          ))}
        </div>

        <div className="world-map" />

        <div className="energy-wave energy-wave--one" />
        <div className="energy-wave energy-wave--two" />
        <div className="energy-wave energy-wave--three" />

        <div className="background-vignette" />
      </div>

      {/* =========================
          HEADER
      ========================== */}
      <header className="auth-header">
        <button
          className="brand"
          type="button"
          onClick={() => window.location.assign("/")}
          aria-label="ECWT"
        >
          <span className="brand-logo">
            <span className="brand-logo__inner">EC</span>
          </span>

          <span className="brand-name">ECWT</span>

          <span className="brand-divider" />

          <span className="brand-description">
            O‘ZBEKISTON ELEKTRON
            <br />
            TIJORAT KOMPANIYASI
          </span>
        </button>

        <div className="header-actions">
          <div className="built-for-badge">
            <span className="built-for-badge__dot" />
            <span>{t.business}</span>
          </div>

          <div className="top-language-switcher">
            {["uz", "ru", "en"].map((lang) => (
              <button
                key={lang}
                type="button"
                className={`top-language-button ${
                  language === lang ? "is-active" : ""
                }`}
                onClick={() => changeLanguage(lang)}
                aria-pressed={language === lang}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="auth-content">
        {/* LEFT */}
        <div className="auth-hero">
          <div className="hero-copy">
            <p className="hero-eyebrow">{t.eyebrow}</p>

            <h1 className="hero-title">
              <span>{t.title1}</span>
              <span>{t.title2}</span>
              <span className="hero-title__gradient">{t.title3}</span>
              <span className="hero-title__gradient">{t.title4}</span>
            </h1>

            <p className="hero-description">{t.description}</p>
          </div>
        </div>

        {/* RIGHT */}
        <aside className="auth-card-wrapper">
          <div className="auth-card">
            <div className="auth-card__shine" />

            <div className="auth-card-header">
              <span>{t.id}</span>

              <span className="live-status">
                <span className="live-status__dot" />
                {t.live}
              </span>
            </div>

            <div className="identity-orb-wrap">
              <div className="identity-orb">
                <div className="identity-orb__ring identity-orb__ring--outer" />

                <div className="identity-orb__segments">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <span
                      key={index}
                      className={`identity-segment identity-segment--${index + 1}`}
                    />
                  ))}
                </div>

                <div className="identity-orb__glow" />

                <div className="identity-orb__center">
                  <span className="identity-orb__small">ECWT</span>
                  <strong>UZ</strong>
                </div>
              </div>
            </div>

            <div className="auth-card-copy">
              <h2>{t.cardTitle}</h2>
              <p>{t.cardText}</p>
            </div>

            <div className="auth-buttons">
              <div className="register-led-shell">
                <span className="register-led register-led--1" />
                <span className="register-led register-led--2" />

                <button
                  type="button"
                  className="register-button"
                  onClick={goToRegister}
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
                onClick={goToLogin}
              >
                {t.login}
              </button>
            </div>

            <div className="card-language-switcher">
              <button
                type="button"
                className={language === "uz" ? "is-active" : ""}
                onClick={() => changeLanguage("uz")}
              >
                {t.languageUz}
              </button>

              <button
                type="button"
                className={language === "ru" ? "is-active" : ""}
                onClick={() => changeLanguage("ru")}
              >
                {t.languageRu}
              </button>

              <button
                type="button"
                className={language === "en" ? "is-active" : ""}
                onClick={() => changeLanguage("en")}
              >
                {t.languageEn}
              </button>
            </div>
          </div>
        </aside>
      </section>

      {/* =========================
          BOTTOM
      ========================== */}
      <footer className="auth-footer">
        <div className="auth-stats">
          <div className="stat-item">
            <span className="stat-icon stat-icon--globe">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <circle
                  cx="20"
                  cy="20"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M5 20h30M20 5c5 5 7 10 7 15s-2 10-7 15M20 5c-5 5-7 10-7 15s2 10 7 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>

            <span className="stat-copy">
              <strong>9+</strong>
              <small>{t.marketplaceStat}</small>
            </span>
          </div>

          <span className="stat-divider" />

          <div className="stat-item">
            <span className="stat-icon">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M8 32V22h5v10M18 32V13h5v19M28 32V7h5v25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span className="stat-copy">
              <strong>100K+</strong>
              <small>{t.businessStat}</small>
            </span>
          </div>

          <span className="stat-divider" />

          <div className="stat-item">
            <span className="stat-icon">
              <svg viewBox="0 0 40 40" aria-hidden="true">
                <path
                  d="M20 5c1 7 4 10 11 11-7 1-10 4-11 11-1-7-4-10-11-11 7-1 10-4 11-11Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M31 27c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </span>

            <span className="stat-copy">
              <strong>AI</strong>
              <small>{t.aiStat}</small>
            </span>
          </div>
        </div>

        <div className="marketplace-strip">
          {marketplaces.map((marketplace) => (
            <div
              className={`marketplace marketplace--${marketplace.id}`}
              key={marketplace.id}
              title={marketplace.aria}
              aria-label={marketplace.aria}
            >
              <span>{marketplace.label}</span>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}

export default Auth;
