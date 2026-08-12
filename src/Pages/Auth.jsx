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
  },
  ru: {
    badge: "Создано для бизнеса Узбекистана",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",
    title1: "Продукцию",
    title2: "Узбекистана",
    title3: "выводим",
    title4: "в мир.",
    description:
      "ECWT AI анализирует ваш товар, готовит его к международной торговле и рекомендует подходящие маркетплейсы.",
    cardTitle: "Начните глобальные продажи",
    cardText:
      "Загрузите товар. ECWT AI пошагово покажет вам следующие действия.",
    register: "Регистрация",
    login: "У меня есть аккаунт",
    statMarket: "Глобальные маркетплейсы",
    statBusiness: "Возможности бизнеса",
    statAI: "Умный помощник",
  },
  en: {
    badge: "Built for Uzbek businesses",
    eyebrow: "GLOBAL COMMERCE INFRASTRUCTURE",
    title1: "Taking",
    title2: "Uzbek products",
    title3: "to the",
    title4: "world.",
    description:
      "ECWT AI analyzes your product, prepares it for international commerce and recommends the right marketplaces.",
    cardTitle: "Start selling globally",
    cardText:
      "Upload your product. ECWT AI will guide you through the next steps.",
    register: "Create account",
    login: "I have an account",
    statMarket: "Global marketplaces",
    statBusiness: "Business opportunities",
    statAI: "Smart assistant",
  },
};

const marketplaceItems = [
  { key: "amazon", text: "a", name: "Amazon" },
  { key: "ebay", text: "ebay", name: "eBay" },
  { key: "walmart", text: "✦", name: "Walmart" },
  { key: "google", text: "G", name: "Google Marketplace" },
  { key: "facebook", text: "f", name: "Facebook Marketplace" },
  { key: "mercari", text: "M", name: "Mercari" },
  { key: "bonanza", text: "b", name: "Bonanza" },
  { key: "poshmark", text: "P", name: "Poshmark" },
  { key: "shopify", text: "S", name: "Shopify" },
];

function LanguageSwitcher({ language, setLanguage, compact = false }) {
  return (
    <div className={compact ? "auth-language auth-language--card" : "auth-language auth-language--top"}>
      {[
        ["uz", compact ? "O‘zbekcha" : "UZ"],
        ["ru", compact ? "Русский" : "RU"],
        ["en", compact ? "English" : "EN"],
      ].map(([code, label]) => (
        <button
          key={code}
          type="button"
          className={language === code ? "is-active" : ""}
          onClick={() => setLanguage(code)}
        >
          {label}
        </button>
      ))}
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
    return saved === "uz" || saved === "ru" || saved === "en" ? saved : "uz";
  });

  useEffect(() => {
    localStorage.setItem("ecwt-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = useMemo(() => translations[language], [language]);

  return (
    <main className="auth-page">
      <div className="auth-bg" aria-hidden="true">
        <div className="auth-bg__image" />
        <div className="auth-bg__blue-overlay" />
        <div className="auth-world-map" />
        <div className="auth-bg__vignette" />
      </div>

      <header className="auth-header">
        <button
          type="button"
          className="ecwt-brand"
          onClick={() => window.location.assign("/")}
          aria-label="ECWT Home"
        >
          <span className="ecwt-brand__logo"><span>EC</span></span>
          <strong className="ecwt-brand__name">ECWT</strong>
          <i className="ecwt-brand__divider" />
          <span className="ecwt-brand__description">
            O‘ZBEKISTON ELEKTRON
            <br />
            TIJORAT KOMPANIYASI
          </span>
        </button>

        <div className="auth-header__right">
          <div className="business-badge"><i /><span>{t.badge}</span></div>
          <LanguageSwitcher language={language} setLanguage={setLanguage} />
        </div>
      </header>

      <section className="auth-main">
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

        <aside className="auth-panel">
          <div className="auth-card">
            <div className="auth-card__glow" />
            <div className="auth-card__header">
              <strong>ECWT ID</strong>
              <span className="live"><i />LIVE</span>
            </div>

            <div className="auth-card__orb"><EcwtOrb /></div>

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
                  onClick={() => window.location.assign("/register")}
                >
                  <span>{t.register}</span>
                  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
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
                onClick={() => window.location.assign("/login")}
              >
                {t.login}
              </button>
            </div>

            <LanguageSwitcher compact language={language} setLanguage={setLanguage} />
          </div>
        </aside>
      </section>

      <footer className="auth-footer">
        <div className="auth-stats">
          <div className="auth-stat">
            <div className="auth-stat__icon">◎</div>
            <div><strong>9+</strong><span>{t.statMarket}</span></div>
          </div>
          <i className="auth-stats__divider" />
          <div className="auth-stat">
            <div className="auth-stat__icon">▥</div>
            <div><strong>100K+</strong><span>{t.statBusiness}</span></div>
          </div>
          <i className="auth-stats__divider" />
          <div className="auth-stat">
            <div className="auth-stat__icon">✧</div>
            <div><strong>AI</strong><span>{t.statAI}</span></div>
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
