import { useMemo, useState } from "react";

const copy = {
  uz: {
    eyebrow: "AI-POWERED GLOBAL COMMERCE",
    title1: "Mahsulotingizni",
    title2: "dunyoga olib chiqing.",
    description:
      "ECWT AI mahsulotingizni tahlil qiladi, xalqaro savdoga tayyorlaydi va sizga mos global marketplace’larni tavsiya qiladi.",
    register: "RO‘YXATDAN O‘TISH",
    login: "KIRISH",
    trusted: "O‘zbek biznesi uchun yaratilgan",
    stat1: "Global marketplace",
    stat2: "Hunarmand va ishlab chiqaruvchi",
    stat3: "AI savdo yordamchisi",
    phoneRegister: "ECWT’ga qo‘shiling",
    phoneLogin: "ECWT’ga kirish",
    phoneText: "Telefon raqamingizni kiriting",
    continue: "DAVOM ETISH",
    back: "Orqaga",
    secure: "Ma’lumotlaringiz xavfsiz himoyalanadi",
  },

  ru: {
    eyebrow: "AI-POWERED GLOBAL COMMERCE",
    title1: "Выведите свой товар",
    title2: "на мировой рынок.",
    description:
      "ECWT AI анализирует ваш товар, готовит его к международным продажам и рекомендует подходящие глобальные маркетплейсы.",
    register: "РЕГИСТРАЦИЯ",
    login: "ВОЙТИ",
    trusted: "Создано для бизнеса Узбекистана",
    stat1: "Глобальных маркетплейсов",
    stat2: "Мастеров и производителей",
    stat3: "AI-помощник продаж",
    phoneRegister: "Присоединиться к ECWT",
    phoneLogin: "Войти в ECWT",
    phoneText: "Введите номер телефона",
    continue: "ПРОДОЛЖИТЬ",
    back: "Назад",
    secure: "Ваши данные надёжно защищены",
  },

  en: {
    eyebrow: "AI-POWERED GLOBAL COMMERCE",
    title1: "Take your products",
    title2: "to the world.",
    description:
      "ECWT AI analyzes your product, prepares it for international commerce and recommends the right global marketplaces.",
    register: "CREATE ACCOUNT",
    login: "SIGN IN",
    trusted: "Built for businesses in Uzbekistan",
    stat1: "Global marketplaces",
    stat2: "Artisans & manufacturers",
    stat3: "AI commerce assistant",
    phoneRegister: "Join ECWT",
    phoneLogin: "Sign in to ECWT",
    phoneText: "Enter your phone number",
    continue: "CONTINUE",
    back: "Back",
    secure: "Your information is securely protected",
  },
};

const marketplaces = [
  { name: "Amazon", className: "amazon" },
  { name: "eBay", className: "ebay" },
  { name: "Walmart", className: "walmart" },
  { name: "Shopify", className: "shopify" },
  { name: "Mercari", className: "mercari" },
  { name: "Poshmark", className: "poshmark" },
  { name: "Bonanza", className: "bonanza" },
  { name: "Google", className: "google" },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3 20 6v5c0 5-3.2 8.3-8 10-4.8-1.7-8-5-8-10V6l8-3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="m8.5 12 2.2 2.2 4.8-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

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
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #root {
          margin: 0;
          min-height: 100%;
          width: 100%;
        }

        body {
          background: #020713;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
          overflow-x: hidden;
        }

        button,
        input {
          font: inherit;
        }

        button {
          -webkit-tap-highlight-color: transparent;
        }

        .ecwt-page {
          --blue: #238cff;
          --cyan: #25d7ff;
          --green: #32e6b0;
          --text: #f6f9ff;
          --muted: #93a7bf;
          --panel: rgba(5, 20, 43, 0.72);

          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: var(--text);

          background:
            radial-gradient(
              circle at 78% 42%,
              rgba(21, 115, 255, 0.17),
              transparent 32%
            ),
            radial-gradient(
              circle at 25% 82%,
              rgba(33, 229, 175, 0.07),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #020713 0%,
              #031124 52%,
              #020713 100%
            );
        }

        .grid-background {
          position: absolute;
          inset: 0;
          opacity: 0.18;
          pointer-events: none;

          background-image:
            linear-gradient(
              rgba(78, 139, 203, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(78, 139, 203, 0.08) 1px,
              transparent 1px
            );

          background-size: 72px 72px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent,
              black 20%,
              black 75%,
              transparent
            );
        }

        .aurora {
          position: absolute;
          width: 700px;
          height: 700px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.08;
          pointer-events: none;
        }

        .aurora-one {
          right: -280px;
          top: -260px;
          background: #1882ff;
        }

        .aurora-two {
          left: -340px;
          bottom: -380px;
          background: #29ddb2;
        }

        .shell {
          position: relative;
          z-index: 2;

          width: min(1450px, calc(100% - 56px));
          min-height: 100vh;

          margin: 0 auto;
          padding: 34px 0 36px;

          display: flex;
          flex-direction: column;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .brand-symbol {
          position: relative;

          width: 46px;
          height: 46px;

          border-radius: 15px;

          display: grid;
          place-items: center;

          color: white;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.4px;

          border: 1px solid rgba(74, 172, 255, 0.42);

          background:
            linear-gradient(
              145deg,
              rgba(27, 126, 255, 0.26),
              rgba(31, 229, 176, 0.13)
            );

          box-shadow:
            inset 0 0 22px rgba(50, 169, 255, 0.13),
            0 0 30px rgba(18, 119, 255, 0.08);
        }

        .brand-symbol::before {
          content: "";
          position: absolute;
          inset: 5px;

          border: 1px dashed rgba(70, 219, 255, 0.34);
          border-radius: 11px;

          animation: logoSpin 18s linear infinite;
        }

        @keyframes logoSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .brand-word {
          font-size: 28px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .brand-description {
          padding-left: 15px;
          border-left: 1px solid rgba(255,255,255,0.16);

          color: #9eb2c9;

          font-size: 11px;
          line-height: 1.25;
          font-weight: 700;
        }

        .nav-chip {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 9px 13px;

          border-radius: 999px;

          border: 1px solid rgba(70, 222, 183, 0.2);

          background: rgba(6, 31, 45, 0.48);

          color: #a7c2d3;
          font-size: 11px;
        }

        .live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--green);

          box-shadow:
            0 0 8px var(--green),
            0 0 16px rgba(50, 230, 176, 0.45);
        }

        .hero {
          flex: 1;

          display: grid;
          grid-template-columns:
            minmax(0, 0.95fr)
            minmax(380px, 0.72fr)
            minmax(0, 1.18fr);

          align-items: center;

          gap: 42px;
          padding: 30px 0 20px;
        }

        /* LEFT */

        .copy-zone {
          max-width: 530px;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;

          margin-bottom: 20px;

          color: #8fd8ff;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.4px;
        }

        .eyebrow-line {
          width: 30px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              var(--green),
              transparent
            );
        }

        .main-title {
          margin: 0;

          font-size: clamp(52px, 5vw, 82px);
          line-height: 0.98;

          font-weight: 760;
          letter-spacing: -4px;
        }

        .gradient-title {
          display: inline-block;
          margin-top: 6px;

          background:
            linear-gradient(
              90deg,
              #57aaff,
              #25d5ff 47%,
              #43e7b0
            );

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          max-width: 490px;
          margin: 26px 0 28px;

          color: var(--muted);

          font-size: 16px;
          line-height: 1.65;
        }

        .stats-row {
          display: flex;
          align-items: stretch;

          margin-top: 28px;

          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .stat {
          flex: 1;

          padding: 17px 18px 17px 0;
        }

        .stat + .stat {
          padding-left: 18px;
          border-left: 1px solid rgba(255,255,255,0.08);
        }

        .stat-value {
          color: white;

          font-size: 19px;
          font-weight: 800;
        }

        .stat-label {
          margin-top: 5px;

          color: #7389a2;
          font-size: 10px;
          line-height: 1.35;
        }

        .trust-line {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-top: 20px;

          color: #7890aa;
          font-size: 11px;
        }

        .trust-line svg {
          width: 17px;
          color: var(--green);
        }

        /* CENTER */

        .auth-panel {
          position: relative;

          padding: 34px 28px 27px;

          border-radius: 30px;

          border: 1px solid rgba(93, 161, 236, 0.25);

          background:
            linear-gradient(
              160deg,
              rgba(12, 36, 70, 0.76),
              rgba(3, 15, 34, 0.91)
            );

          box-shadow:
            0 40px 110px rgba(0, 0, 0, 0.43),
            inset 0 1px rgba(255,255,255,0.04);

          backdrop-filter: blur(22px);
        }

        .auth-panel::before {
          content: "";
          position: absolute;
          inset: -1px;

          border-radius: inherit;
          pointer-events: none;

          background:
            linear-gradient(
              130deg,
              rgba(47, 146, 255, 0.22),
              transparent 35%,
              transparent 66%,
              rgba(44, 227, 173, 0.13)
            );

          mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);

          mask-composite: exclude;

          padding: 1px;
        }

        .auth-head {
          text-align: center;
        }

        .auth-logo {
          margin: 0;

          font-size: 43px;
          font-weight: 900;
          letter-spacing: -2px;

          background:
            linear-gradient(
              90deg,
              #5b9fff,
              #49d6ff,
              #54e3b5
            );

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .auth-subtitle {
          margin: 8px 0 25px;

          color: #8197b0;
          font-size: 11px;
        }

        .network-mini {
          position: relative;
          height: 160px;

          margin-bottom: 21px;

          overflow: hidden;
        }

        .mini-radar {
          position: absolute;
          left: 50%;
          top: 52%;

          width: 125px;
          height: 125px;

          transform: translate(-50%, -50%);

          border-radius: 50%;

          border: 1px solid rgba(58, 165, 255, 0.19);

          box-shadow:
            0 0 40px rgba(26, 133, 255, 0.08);
        }

        .mini-radar::before,
        .mini-radar::after {
          content: "";
          position: absolute;
          inset: 17px;

          border-radius: 50%;
          border: 1px solid rgba(58, 165, 255, 0.14);
        }

        .mini-radar::after {
          inset: 36px;
        }

        .mini-core {
          position: absolute;
          left: 50%;
          top: 52%;

          width: 56px;
          height: 56px;

          transform: translate(-50%, -50%);

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: #bcfff0;
          font-size: 12px;
          font-weight: 900;

          border: 1px solid rgba(69, 241, 191, 0.48);

          background:
            radial-gradient(
              circle,
              rgba(47, 229, 177, 0.22),
              rgba(5, 32, 53, 0.78)
            );

          box-shadow:
            0 0 28px rgba(44, 229, 177, 0.24);
        }

        .mini-orbit {
          position: absolute;
          left: 50%;
          top: 52%;

          border-radius: 50%;

          border:
            1px solid rgba(55, 145, 255, 0.24);

          animation: miniSpin 9s linear infinite;
        }

        .mini-orbit.o1 {
          width: 185px;
          height: 82px;

          transform: translate(-50%, -50%) rotate(-13deg);
        }

        .mini-orbit.o2 {
          width: 175px;
          height: 68px;

          transform: translate(-50%, -50%) rotate(22deg);

          animation-duration: 13s;
          animation-direction: reverse;
        }

        @keyframes miniSpin {
          to {
            rotate: 360deg;
          }
        }

        .mini-particle {
          position: absolute;

          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: #76eaff;

          box-shadow:
            0 0 8px #76eaff,
            0 0 16px #1c8aff;
        }

        .mp1 {
          left: 30%;
          top: 33%;
          animation: particlePulse 2.2s ease-in-out infinite;
        }

        .mp2 {
          right: 25%;
          top: 29%;
          animation: particlePulse 2.2s ease-in-out infinite 0.7s;
        }

        .mp3 {
          right: 31%;
          bottom: 22%;
          animation: particlePulse 2.2s ease-in-out infinite 1.3s;
        }

        @keyframes particlePulse {
          50% {
            opacity: 0.3;
            transform: scale(0.6);
          }
        }

        .register-btn,
        .login-btn {
          width: 100%;
          min-height: 55px;

          border-radius: 14px;

          cursor: pointer;

          font-size: 13px;
          font-weight: 800;

          transition:
            transform 0.18s ease,
            filter 0.18s ease,
            border-color 0.18s ease;
        }

        .register-btn {
          border: none;
          color: white;

          background:
            linear-gradient(
              100deg,
              #176eff,
              #22bfff 52%,
              #24dba6
            );

          box-shadow:
            0 15px 35px rgba(19, 128, 255, 0.17);
        }

        .login-btn {
          margin-top: 11px;

          color: #dbe9f7;

          border: 1px solid rgba(101, 159, 216, 0.24);

          background:
            rgba(4, 19, 39, 0.54);
        }

        .register-btn:hover,
        .login-btn:hover {
          transform: translateY(-1px);
          filter: brightness(1.07);
        }

        .login-btn:hover {
          border-color: rgba(73, 183, 255, 0.48);
        }

        .languages {
          display: flex;
          justify-content: center;
          gap: 4px;

          margin-top: 18px;
        }

        .lang {
          padding: 5px 8px;

          border: none;

          background: transparent;
          color: #647b94;

          cursor: pointer;

          font-size: 10px;
        }

        .lang.active {
          color: var(--green);
        }

        /* RIGHT / GLOBE */

        .visual-zone {
          position: relative;
          min-height: 600px;
        }

        .globe-wrap {
          position: absolute;
          left: 50%;
          top: 50%;

          width: min(560px, 100%);
          aspect-ratio: 1;

          transform: translate(-50%, -50%);
        }

        .globe-halo {
          position: absolute;
          inset: -12%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(31, 132, 255, 0.1),
              transparent 67%
            );

          animation: haloPulse 4s ease-in-out infinite;
        }

        @keyframes haloPulse {
          50% {
            transform: scale(1.05);
            opacity: 0.65;
          }
        }

        .globe {
          position: absolute;
          inset: 12%;

          border-radius: 50%;

          overflow: hidden;

          border: 1px solid rgba(65, 161, 255, 0.44);

          background:
            radial-gradient(
              circle at 35% 31%,
              rgba(45, 169, 255, 0.2),
              transparent 23%
            ),
            radial-gradient(
              circle at center,
              #082a55,
              #031429 58%,
              #020914
            );

          box-shadow:
            0 0 70px rgba(17, 122, 255, 0.28),
            inset 0 0 80px rgba(23, 129, 255, 0.15);
        }

        .globe-lines {
          position: absolute;
          inset: -15%;

          border-radius: 50%;

          background:
            repeating-radial-gradient(
              ellipse at center,
              transparent 0 31px,
              rgba(83, 154, 226, 0.11) 32px 33px
            );

          animation: globeSpin 24s linear infinite;
        }

        .globe-lines::before {
          content: "";
          position: absolute;
          inset: 0;

          background:
            repeating-linear-gradient(
              90deg,
              transparent 0 46px,
              rgba(70, 145, 218, 0.08) 47px 48px
            );
        }

        @keyframes globeSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .uz-node {
          position: absolute;
          left: 50%;
          top: 51%;

          width: 82px;
          height: 82px;

          transform: translate(-50%, -50%);

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: white;
          font-weight: 900;
          letter-spacing: 1px;

          border: 1px solid rgba(61, 242, 190, 0.64);

          background:
            radial-gradient(
              circle,
              rgba(41, 224, 171, 0.29),
              rgba(5, 36, 55, 0.8)
            );

          box-shadow:
            0 0 28px rgba(49, 230, 177, 0.48),
            0 0 70px rgba(13, 137, 255, 0.25);
        }

        .trade-ring {
          position: absolute;
          left: 50%;
          top: 50%;

          border-radius: 50%;

          border: 1px solid rgba(51, 150, 255, 0.25);

          transform: translate(-50%, -50%);
        }

        .trade-ring.r1 {
          width: 73%;
          height: 43%;

          animation: ringSpin 15s linear infinite;
        }

        .trade-ring.r2 {
          width: 86%;
          height: 54%;

          transform: translate(-50%, -50%) rotate(42deg);

          animation: ringSpinTwo 20s linear infinite reverse;
        }

        @keyframes ringSpin {
          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes ringSpinTwo {
          to {
            transform:
              translate(-50%, -50%)
              rotate(402deg);
          }
        }

        .market {
          position: absolute;

          padding: 10px 14px;

          border-radius: 13px;

          color: #eaf5ff;

          font-size: 11px;
          font-weight: 800;

          border: 1px solid rgba(71, 155, 239, 0.24);

          background:
            rgba(4, 19, 40, 0.82);

          backdrop-filter: blur(10px);

          box-shadow:
            0 12px 35px rgba(0,0,0,0.24);

          animation: floatBadge 5s ease-in-out infinite;
        }

        .market:nth-of-type(even) {
          animation-delay: -2.3s;
        }

        @keyframes floatBadge {
          50% {
            transform: translateY(-6px);
          }
        }

        .market.amazon {
          top: 4%;
          left: 43%;
        }

        .market.ebay {
          top: 15%;
          right: 3%;
        }

        .market.walmart {
          top: 39%;
          right: -2%;
        }

        .market.shopify {
          bottom: 24%;
          right: 3%;
        }

        .market.mercari {
          bottom: 6%;
          right: 24%;
        }

        .market.poshmark {
          bottom: 3%;
          left: 26%;
        }

        .market.bonanza {
          bottom: 21%;
          left: -1%;
        }

        .market.google {
          top: 23%;
          left: 0%;
        }

        .energy {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #9bfaff;

          box-shadow:
            0 0 8px #9bfaff,
            0 0 17px #289aff,
            0 0 27px #37e5b0;

          opacity: 0;
        }

        .e1 {
          animation: energyOne 3.7s linear infinite;
        }

        .e2 {
          animation: energyTwo 4.6s linear infinite 0.8s;
        }

        .e3 {
          animation: energyThree 4.1s linear infinite 1.7s;
        }

        .e4 {
          animation: energyFour 5.2s linear infinite 2.2s;
        }

        @keyframes energyOne {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          14% {
            opacity: 1;
          }

          100% {
            left: 68%;
            top: 8%;
            opacity: 0;
          }
        }

        @keyframes energyTwo {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          14% {
            opacity: 1;
          }

          100% {
            left: 91%;
            top: 37%;
            opacity: 0;
          }
        }

        @keyframes energyThree {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          14% {
            opacity: 1;
          }

          100% {
            left: 79%;
            top: 83%;
            opacity: 0;
          }
        }

        @keyframes energyFour {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          14% {
            opacity: 1;
          }

          100% {
            left: 10%;
            top: 65%;
            opacity: 0;
          }
        }

        /* PHONE */

        .overlay {
          position: fixed;
          inset: 0;

          z-index: 100;

          display: grid;
          place-items: center;

          padding: 24px;

          background:
            rgba(0, 6, 17, 0.84);

          backdrop-filter: blur(18px);
        }

        .phone-panel {
          width: min(430px, 100%);

          padding: 28px;

          border-radius: 28px;

          border:
            1px solid rgba(79, 156, 234, 0.28);

          background:
            linear-gradient(
              150deg,
              rgba(12, 37, 70, 0.96),
              rgba(3, 15, 33, 0.99)
            );

          box-shadow:
            0 35px 120px rgba(0,0,0,0.58);

          color: white;
        }

        .phone-back {
          border: none;
          background: transparent;
          color: #7790aa;

          cursor: pointer;
          padding: 0;

          font-size: 12px;
        }

        .phone-head {
          margin-top: 28px;
          text-align: center;
        }

        .phone-symbol {
          width: 54px;
          height: 54px;

          margin: 0 auto 17px;

          display: grid;
          place-items: center;

          border-radius: 16px;

          font-size: 13px;
          font-weight: 900;

          background:
            linear-gradient(
              135deg,
              #1778ff,
              #27ddb0
            );
        }

        .phone-head h2 {
          margin: 0;

          font-size: 25px;
        }

        .phone-head p {
          margin: 9px 0 24px;

          color: #8198b1;
          font-size: 13px;
        }

        .phone-input-wrap {
          display: flex;
          align-items: center;

          min-height: 58px;

          margin-bottom: 14px;

          overflow: hidden;

          border-radius: 14px;

          border:
            1px solid rgba(93, 157, 217, 0.25);

          background:
            rgba(1, 13, 29, 0.74);
        }

        .country-code {
          padding: 0 15px;

          color: #dcecff;
          font-size: 14px;
          font-weight: 700;

          border-right:
            1px solid rgba(255,255,255,0.1);
        }

        .phone-input {
          flex: 1;
          min-width: 0;

          padding: 17px 14px;

          border: none;
          outline: none;

          color: white;
          background: transparent;

          font-size: 17px;
        }

        .phone-continue {
          width: 100%;
          min-height: 55px;

          border: none;
          border-radius: 14px;

          color: white;

          background:
            linear-gradient(
              100deg,
              #176eff,
              #25c5ff 55%,
              #25dba6
            );

          font-size: 12px;
          font-weight: 900;

          cursor: pointer;
        }

        .phone-continue:disabled {
          opacity: 0.38;
          cursor: not-allowed;
        }

        .phone-security {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;

          margin-top: 17px;

          color: #657c94;
          font-size: 10px;
        }

        .phone-security svg {
          width: 14px;
          color: var(--green);
        }

        /* RESPONSIVE */

        @media (max-width: 1180px) {
          .hero {
            grid-template-columns: 1fr 0.9fr;
          }

          .visual-zone {
            grid-column: 1 / -1;
            min-height: 500px;
          }

          .copy-zone {
            justify-self: center;
          }
        }

        @media (max-width: 760px) {
          .shell {
            width: min(100% - 28px, 680px);
          }

          .nav-chip,
          .brand-description {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;

            gap: 32px;
            padding-top: 52px;
          }

          .copy-zone {
            text-align: center;
          }

          .main-title {
            font-size: clamp(46px, 14vw, 68px);
            letter-spacing: -3px;
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .stats-row {
            text-align: left;
          }

          .auth-panel {
            width: min(100%, 460px);
            margin: auto;
          }

          .visual-zone {
            min-height: 430px;
          }

          .market {
            padding: 7px 9px;
            font-size: 8px;
          }
        }
      `}</style>

      <main className="ecwt-page">
        <div className="grid-background" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />

        <div className="shell">
          <nav className="nav">
            <div className="brand">
              <div className="brand-symbol">ECWT</div>

              <div className="brand-word">ECWT</div>

              <div className="brand-description">
                O‘ZBEKISTON
                <br />
                ELEKTRON TIJORAT
                <br />
                KOMPANIYASI
              </div>
            </div>

            <div className="nav-chip">
              <span className="live-dot" />
              {t.trusted}
            </div>
          </nav>

          <section className="hero">
            <div className="copy-zone">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                {t.eyebrow}
              </div>

              <h1 className="main-title">
                {t.title1}
                <br />
                <span className="gradient-title">
                  {t.title2}
                </span>
              </h1>

              <p className="hero-description">
                {t.description}
              </p>

              <div className="stats-row">
                <div className="stat">
                  <div className="stat-value">9+</div>
                  <div className="stat-label">{t.stat1}</div>
                </div>

                <div className="stat">
                  <div className="stat-value">25 000+</div>
                  <div className="stat-label">{t.stat2}</div>
                </div>

                <div className="stat">
                  <div className="stat-value">AI</div>
                  <div className="stat-label">{t.stat3}</div>
                </div>
              </div>

              <div className="trust-line">
                <ShieldIcon />
                <span>{t.secure}</span>
              </div>
            </div>

            <div className="auth-panel">
              <div className="auth-head">
                <h2 className="auth-logo">ECWT</h2>

                <div className="auth-subtitle">
                  Global commerce. One intelligent platform.
                </div>
              </div>

              <div className="network-mini">
                <div className="mini-radar" />

                <div className="mini-orbit o1" />
                <div className="mini-orbit o2" />

                <div className="mini-core">UZ</div>

                <div className="mini-particle mp1" />
                <div className="mini-particle mp2" />
                <div className="mini-particle mp3" />
              </div>

              <button
                className="register-btn"
                onClick={() => openPhone("register")}
              >
                {t.register}
              </button>

              <button
                className="login-btn"
                onClick={() => openPhone("login")}
              >
                {t.login}
              </button>

              <div className="languages">
                <button
                  className={`lang ${
                    language === "uz" ? "active" : ""
                  }`}
                  onClick={() => setLanguage("uz")}
                >
                  O‘zbekcha
                </button>

                <button
                  className={`lang ${
                    language === "ru" ? "active" : ""
                  }`}
                  onClick={() => setLanguage("ru")}
                >
                  Русский
                </button>

                <button
                  className={`lang ${
                    language === "en" ? "active" : ""
                  }`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
              </div>
            </div>

            <div className="visual-zone">
              <div className="globe-wrap">
                <div className="globe-halo" />

                <div className="globe">
                  <div className="globe-lines" />
                  <div className="uz-node">UZ</div>
                </div>

                <div className="trade-ring r1" />
                <div className="trade-ring r2" />

                {marketplaces.map((market) => (
                  <div
                    key={market.name}
                    className={`market ${market.className}`}
                  >
                    {market.name}
                  </div>
                ))}

                <div className="energy e1" />
                <div className="energy e2" />
                <div className="energy e3" />
                <div className="energy e4" />
              </div>
            </div>
          </section>
        </div>

        {step === "phone" && (
          <div className="overlay">
            <div className="phone-panel">
              <button
                className="phone-back"
                onClick={() => setStep("welcome")}
              >
                ← {t.back}
              </button>

              <div className="phone-head">
                <div className="phone-symbol">ECWT</div>

                <h2>
                  {mode === "register"
                    ? t.phoneRegister
                    : t.phoneLogin}
                </h2>

                <p>{t.phoneText}</p>
              </div>

              <div className="phone-input-wrap">
                <span className="country-code">+998</span>

                <input
                  className="phone-input"
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
              </div>

              <button
                className="phone-continue"
                disabled={cleanPhone.length < 9}
                onClick={() =>
                  alert("Keyingi bosqich: SMS tasdiqlash")
                }
              >
                {t.continue}
              </button>

              <div className="phone-security">
                <ShieldIcon />
                <span>{t.secure}</span>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default Auth;
