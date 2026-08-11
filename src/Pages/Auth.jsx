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
    badge: "O‘zbek biznesi uchun yaratilgan",
    stat1: "Global marketplace",
    stat2: "Hunarmand va ishlab chiqaruvchi",
    stat3: "AI savdo yordamchisi",
    phoneRegister: "ECWT’ga qo‘shiling",
    phoneLogin: "ECWT’ga kirish",
    phoneText: "Telefon raqamingizni kiriting",
    continue: "DAVOM ETISH →",
    back: "Orqaga",
    secure: "Ma’lumotlaringiz xavfsiz himoyalanadi",
  },

  ru: {
    eyebrow: "AI-POWERED GLOBAL COMMERCE",
    title1: "Выведите товар",
    title2: "на мировой рынок.",
    description:
      "ECWT AI анализирует товар, готовит его к международной торговле и рекомендует подходящие глобальные маркетплейсы.",
    register: "РЕГИСТРАЦИЯ",
    login: "ВОЙТИ",
    badge: "Создано для бизнеса Узбекистана",
    stat1: "Глобальных маркетплейсов",
    stat2: "Мастеров и производителей",
    stat3: "AI помощник продаж",
    phoneRegister: "Присоединиться к ECWT",
    phoneLogin: "Войти в ECWT",
    phoneText: "Введите номер телефона",
    continue: "ПРОДОЛЖИТЬ →",
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
    badge: "Built for businesses in Uzbekistan",
    stat1: "Global marketplaces",
    stat2: "Artisans & manufacturers",
    stat3: "AI commerce assistant",
    phoneRegister: "Join ECWT",
    phoneLogin: "Sign in to ECWT",
    phoneText: "Enter your phone number",
    continue: "CONTINUE →",
    back: "Back",
    secure: "Your information is securely protected",
  },
};

const marketplaces = [
  { name: "Amazon", cls: "amazon" },
  { name: "eBay", cls: "ebay" },
  { name: "Walmart", cls: "walmart" },
  { name: "Shopify", cls: "shopify" },
  { name: "Mercari", cls: "mercari" },
  { name: "Poshmark", cls: "poshmark" },
  { name: "Bonanza", cls: "bonanza" },
  { name: "Google", cls: "google" },
];

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
          width: 100%;
          min-height: 100%;
        }

        body {
          overflow-x: hidden;
          background: #020713;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        .ecwt-page {
          --blue: #248cff;
          --cyan: #26d4ff;
          --green: #36e4b2;
          --white: #f7faff;
          --muted: #8ea4bd;

          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: var(--white);

          background:
            radial-gradient(
              circle at 77% 46%,
              rgba(18, 107, 255, 0.18),
              transparent 31%
            ),
            radial-gradient(
              circle at 18% 87%,
              rgba(38, 222, 177, 0.08),
              transparent 27%
            ),
            linear-gradient(
              135deg,
              #020713 0%,
              #041226 52%,
              #020713 100%
            );
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.16;

          background-image:
            linear-gradient(
              rgba(75, 139, 205, 0.08) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(75, 139, 205, 0.08) 1px,
              transparent 1px
            );

          background-size: 76px 76px;

          mask-image:
            linear-gradient(
              to bottom,
              transparent 0%,
              black 16%,
              black 77%,
              transparent 100%
            );
        }

        .ambient {
          position: absolute;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
        }

        .ambient-one {
          width: 680px;
          height: 680px;
          right: -280px;
          top: -250px;
          background: rgba(27, 125, 255, 0.08);
        }

        .ambient-two {
          width: 620px;
          height: 620px;
          left: -300px;
          bottom: -350px;
          background: rgba(39, 224, 178, 0.06);
        }

        .shell {
          position: relative;
          z-index: 2;

          width: min(1360px, calc(100% - 64px));
          min-height: 100vh;

          margin: 0 auto;
          padding: 32px 0 28px;

          display: flex;
          flex-direction: column;
        }

        /* NAV */

        .nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-symbol {
          position: relative;

          width: 43px;
          height: 43px;

          display: grid;
          place-items: center;

          border-radius: 14px;

          font-size: 10px;
          font-weight: 900;

          border: 1px solid rgba(72, 167, 255, 0.42);

          background:
            linear-gradient(
              145deg,
              rgba(34, 125, 255, 0.23),
              rgba(38, 227, 177, 0.12)
            );

          box-shadow:
            inset 0 0 18px rgba(41, 151, 255, 0.13);
        }

        .brand-symbol::after {
          content: "";
          position: absolute;
          inset: 5px;

          border:
            1px dashed rgba(73, 219, 255, 0.3);

          border-radius: 10px;

          animation: symbolRotate 20s linear infinite;
        }

        @keyframes symbolRotate {
          to {
            transform: rotate(360deg);
          }
        }

        .brand-name {
          font-size: 27px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .brand-company {
          padding-left: 14px;

          border-left:
            1px solid rgba(255,255,255,0.15);

          color: #8fa5bd;

          font-size: 10px;
          line-height: 1.25;
          font-weight: 700;
        }

        .award-chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          padding: 8px 12px;

          border-radius: 999px;

          color: #a1bbcd;
          font-size: 10px;

          border:
            1px solid rgba(45, 221, 179, 0.2);

          background:
            rgba(3, 31, 45, 0.45);
        }

        .award-dot {
          width: 6px;
          height: 6px;

          border-radius: 50%;

          background: var(--green);

          box-shadow:
            0 0 8px var(--green),
            0 0 15px rgba(54, 228, 178, 0.45);
        }

        /* MAIN */

        .hero {
          flex: 1;

          display: grid;

          grid-template-columns:
            minmax(0, 0.93fr)
            minmax(330px, 0.72fr)
            minmax(420px, 1.05fr);

          gap: 48px;

          align-items: center;

          padding: 38px 0 22px;
        }

        /* LEFT */

        .copy-zone {
          min-width: 0;
          max-width: 480px;
        }

        .eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-bottom: 20px;

          color: #82d7ff;

          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 900;
        }

        .eyebrow::before {
          content: "";

          width: 28px;
          height: 1px;

          background:
            linear-gradient(
              90deg,
              var(--green),
              transparent
            );
        }

        .hero-title {
          margin: 0;

          max-width: 470px;

          font-size: clamp(48px, 4.2vw, 67px);
          line-height: 0.98;

          letter-spacing: -3.4px;
          font-weight: 760;
        }

        .hero-gradient {
          display: block;
          margin-top: 7px;

          background:
            linear-gradient(
              90deg,
              #5aa6ff 0%,
              #29d0ff 48%,
              #43e3ae 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .hero-description {
          max-width: 460px;

          margin: 24px 0 26px;

          color: var(--muted);

          font-size: 14px;
          line-height: 1.7;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);

          border-top:
            1px solid rgba(255,255,255,0.08);

          border-bottom:
            1px solid rgba(255,255,255,0.08);
        }

        .stat {
          padding: 16px 15px 16px 0;
        }

        .stat + .stat {
          padding-left: 15px;

          border-left:
            1px solid rgba(255,255,255,0.08);
        }

        .stat-value {
          color: white;
          font-size: 17px;
          font-weight: 850;
        }

        .stat-label {
          margin-top: 5px;

          color: #6e849d;

          font-size: 9px;
          line-height: 1.35;
        }

        .secure-line {
          display: flex;
          align-items: center;
          gap: 8px;

          margin-top: 18px;

          color: #7087a0;
          font-size: 10px;
        }

        .secure-line svg {
          width: 15px;
          color: var(--green);
        }

        /* AUTH PANEL */

        .auth-panel {
          position: relative;

          width: 100%;
          max-width: 365px;

          justify-self: center;

          padding: 30px 25px 24px;

          border-radius: 27px;

          background:
            linear-gradient(
              160deg,
              rgba(12, 37, 71, 0.73),
              rgba(3, 15, 34, 0.94)
            );

          border:
            1px solid rgba(87, 158, 229, 0.27);

          box-shadow:
            0 35px 100px rgba(0,0,0,0.43),
            inset 0 1px rgba(255,255,255,0.035);

          backdrop-filter: blur(24px);
        }

        .auth-panel::after {
          content: "";

          position: absolute;
          inset: 0;

          border-radius: inherit;

          pointer-events: none;

          background:
            radial-gradient(
              circle at 50% 12%,
              rgba(38, 139, 255, 0.12),
              transparent 40%
            );
        }

        .auth-content {
          position: relative;
          z-index: 2;
        }

        .auth-logo {
          margin: 0;

          text-align: center;

          font-size: 40px;
          font-weight: 900;
          letter-spacing: -2px;

          background:
            linear-gradient(
              90deg,
              #5c9fff,
              #46d0ff,
              #52e2b5
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;
        }

        .auth-subtitle {
          margin: 7px 0 19px;

          text-align: center;

          color: #748ba4;

          font-size: 9px;
        }

        .micro-network {
          position: relative;
          height: 138px;

          margin-bottom: 19px;
        }

        .network-circle {
          position: absolute;
          left: 50%;
          top: 49%;

          transform: translate(-50%, -50%);

          width: 100px;
          height: 100px;

          border-radius: 50%;

          border:
            1px solid rgba(57, 151, 244, 0.18);

          box-shadow:
            0 0 35px rgba(30, 137, 255, 0.08);
        }

        .network-circle::before,
        .network-circle::after {
          content: "";

          position: absolute;

          border-radius: 50%;

          border:
            1px solid rgba(57, 151, 244, 0.14);
        }

        .network-circle::before {
          inset: 17px;
        }

        .network-circle::after {
          inset: 34px;
        }

        .network-core {
          position: absolute;

          left: 50%;
          top: 49%;

          transform: translate(-50%, -50%);

          width: 48px;
          height: 48px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: #baffec;

          font-size: 10px;
          font-weight: 900;

          border:
            1px solid rgba(64, 235, 187, 0.55);

          background:
            radial-gradient(
              circle,
              rgba(47, 223, 174, 0.24),
              rgba(5, 30, 48, 0.86)
            );

          box-shadow:
            0 0 25px rgba(43, 222, 175, 0.22);
        }

        .micro-orbit {
          position: absolute;

          left: 50%;
          top: 49%;

          border-radius: 50%;

          border:
            1px solid rgba(45, 142, 255, 0.26);
        }

        .micro-orbit.one {
          width: 163px;
          height: 67px;

          animation:
            orbitOne 11s linear infinite;
        }

        .micro-orbit.two {
          width: 153px;
          height: 58px;

          animation:
            orbitTwo 15s linear infinite reverse;
        }

        @keyframes orbitOne {
          from {
            transform:
              translate(-50%, -50%)
              rotate(-15deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(345deg);
          }
        }

        @keyframes orbitTwo {
          from {
            transform:
              translate(-50%, -50%)
              rotate(25deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(385deg);
          }
        }

        .mini-dot {
          position: absolute;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #7cecff;

          box-shadow:
            0 0 8px #7cecff,
            0 0 15px #258bff;
        }

        .mini-dot.d1 {
          left: 29%;
          top: 34%;
        }

        .mini-dot.d2 {
          right: 25%;
          top: 29%;
        }

        .mini-dot.d3 {
          right: 31%;
          bottom: 22%;
        }

        .auth-register,
        .auth-login {
          position: relative;
          z-index: 3;

          width: 100%;
          min-height: 52px;

          border-radius: 13px;

          cursor: pointer;

          font-size: 11px;
          font-weight: 900;

          transition:
            transform 0.18s ease,
            filter 0.18s ease;
        }

        .auth-register {
          border: 0;

          color: white;

          background:
            linear-gradient(
              100deg,
              #176eff,
              #23c3ff 54%,
              #25dba7
            );

          box-shadow:
            0 13px 32px rgba(20, 127, 255, 0.16);
        }

        .auth-login {
          margin-top: 10px;

          border:
            1px solid rgba(98, 156, 211, 0.23);

          color: #d7e7f7;

          background:
            rgba(3, 17, 36, 0.54);
        }

        .auth-register:hover,
        .auth-login:hover {
          transform: translateY(-1px);
          filter: brightness(1.08);
        }

        .languages {
          position: relative;
          z-index: 3;

          display: flex;
          justify-content: center;
          gap: 3px;

          margin-top: 15px;
        }

        .language-button {
          padding: 4px 7px;

          border: 0;

          background: transparent;

          color: #637991;

          cursor: pointer;

          font-size: 9px;
        }

        .language-button.active {
          color: var(--green);
          font-weight: 800;
        }

        /* GLOBE */

        .visual-zone {
          position: relative;
          min-height: 535px;
        }

        .globe-system {
          position: absolute;

          left: 50%;
          top: 50%;

          width: min(500px, 100%);

          aspect-ratio: 1;

          transform: translate(-50%, -50%);
        }

        .globe-glow {
          position: absolute;
          inset: -15%;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(25, 127, 255, 0.12),
              transparent 62%
            );

          animation:
            glowBreath 4.5s ease-in-out infinite;
        }

        @keyframes glowBreath {
          50% {
            transform: scale(1.06);
            opacity: 0.65;
          }
        }

        .globe {
          position: absolute;
          inset: 14%;

          overflow: hidden;

          border-radius: 50%;

          border:
            1px solid rgba(72, 157, 244, 0.48);

          background:
            radial-gradient(
              circle at 36% 30%,
              rgba(61, 179, 255, 0.18),
              transparent 22%
            ),
            radial-gradient(
              circle at center,
              #082752,
              #031429 59%,
              #020914
            );

          box-shadow:
            0 0 70px rgba(19, 125, 255, 0.25),
            inset 0 0 75px rgba(24, 128, 255, 0.16);
        }

        .latitudes {
          position: absolute;
          inset: -7%;

          border-radius: 50%;

          background:
            repeating-radial-gradient(
              ellipse at center,
              transparent 0 28px,
              rgba(74, 151, 225, 0.11) 29px 30px
            );

          animation:
            globeRotate 28s linear infinite;
        }

        .longitudes {
          position: absolute;
          inset: -10%;

          border-radius: 50%;

          background:
            repeating-linear-gradient(
              90deg,
              transparent 0 47px,
              rgba(72, 147, 220, 0.07) 48px 49px
            );

          animation:
            globeRotateReverse 35s linear infinite;
        }

        @keyframes globeRotate {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes globeRotateReverse {
          to {
            transform: rotate(-360deg);
          }
        }

        .uz-center {
          position: absolute;

          left: 50%;
          top: 51%;

          transform: translate(-50%, -50%);

          width: 72px;
          height: 72px;

          display: grid;
          place-items: center;

          border-radius: 50%;

          color: white;

          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;

          border:
            1px solid rgba(61, 240, 190, 0.66);

          background:
            radial-gradient(
              circle,
              rgba(43, 222, 174, 0.3),
              rgba(5, 34, 52, 0.88)
            );

          box-shadow:
            0 0 26px rgba(50, 228, 179, 0.47),
            0 0 60px rgba(19, 130, 255, 0.21);
        }

        .orbit-ring {
          position: absolute;

          left: 50%;
          top: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          border:
            1px solid rgba(60, 148, 236, 0.22);
        }

        .orbit-ring.one {
          width: 76%;
          height: 42%;

          animation:
            tradeRingOne 16s linear infinite;
        }

        .orbit-ring.two {
          width: 85%;
          height: 52%;

          animation:
            tradeRingTwo 22s linear infinite reverse;
        }

        @keyframes tradeRingOne {
          from {
            transform:
              translate(-50%, -50%)
              rotate(-11deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(349deg);
          }
        }

        @keyframes tradeRingTwo {
          from {
            transform:
              translate(-50%, -50%)
              rotate(38deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(398deg);
          }
        }

        .marketplace {
          position: absolute;

          padding: 9px 13px;

          border-radius: 12px;

          color: #eaf5ff;

          font-size: 10px;
          font-weight: 800;

          white-space: nowrap;

          border:
            1px solid rgba(70, 150, 233, 0.25);

          background:
            rgba(3, 18, 39, 0.88);

          backdrop-filter: blur(10px);

          box-shadow:
            0 10px 26px rgba(0,0,0,0.25);

          animation:
            badgeFloat 4.8s ease-in-out infinite;
        }

        .marketplace:nth-child(even) {
          animation-delay: -2.1s;
        }

        @keyframes badgeFloat {
          50% {
            transform: translateY(-5px);
          }
        }

        .marketplace.amazon {
          top: 3%;
          left: 43%;
        }

        .marketplace.ebay {
          top: 13%;
          right: 2%;
        }

        .marketplace.walmart {
          top: 39%;
          right: -1%;
        }

        .marketplace.shopify {
          bottom: 25%;
          right: 2%;
        }

        .marketplace.mercari {
          bottom: 6%;
          right: 24%;
        }

        .marketplace.poshmark {
          bottom: 2%;
          left: 27%;
        }

        .marketplace.bonanza {
          bottom: 23%;
          left: 0;
        }

        .marketplace.google {
          top: 23%;
          left: 0;
        }

        .energy-pulse {
          position: absolute;

          width: 7px;
          height: 7px;

          border-radius: 50%;

          background: #a0faff;

          box-shadow:
            0 0 8px #a0faff,
            0 0 17px #278fff,
            0 0 25px #35e0b0;

          opacity: 0;
        }

        .energy-pulse.one {
          animation:
            energyOne 3.7s linear infinite;
        }

        .energy-pulse.two {
          animation:
            energyTwo 4.5s linear infinite 1s;
        }

        .energy-pulse.three {
          animation:
            energyThree 4s linear infinite 1.8s;
        }

        .energy-pulse.four {
          animation:
            energyFour 5s linear infinite 2.4s;
        }

        @keyframes energyOne {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            left: 67%;
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

          15% {
            opacity: 1;
          }

          100% {
            left: 91%;
            top: 38%;
            opacity: 0;
          }
        }

        @keyframes energyThree {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            left: 76%;
            top: 84%;
            opacity: 0;
          }
        }

        @keyframes energyFour {
          0% {
            left: 50%;
            top: 50%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          100% {
            left: 10%;
            top: 62%;
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
            rgba(0, 6, 18, 0.84);

          backdrop-filter: blur(20px);
        }

        .phone-panel {
          width: min(425px, 100%);

          padding: 29px;

          border-radius: 27px;

          color: white;

          background:
            linear-gradient(
              150deg,
              rgba(12, 37, 70, 0.97),
              rgba(3, 15, 34, 0.99)
            );

          border:
            1px solid rgba(85, 157, 227, 0.28);

          box-shadow:
            0 35px 120px rgba(0,0,0,0.58);
        }

        .back-button {
          padding: 0;

          border: 0;

          background: transparent;

          color: #7289a2;

          cursor: pointer;

          font-size: 11px;
        }

        .phone-header {
          text-align: center;

          margin-top: 25px;
        }

        .phone-logo {
          width: 52px;
          height: 52px;

          margin: 0 auto 16px;

          display: grid;
          place-items: center;

          border-radius: 15px;

          font-size: 12px;
          font-weight: 900;

          background:
            linear-gradient(
              135deg,
              #1777ff,
              #27dcb0
            );
        }

        .phone-header h2 {
          margin: 0;

          font-size: 24px;
        }

        .phone-header p {
          margin: 8px 0 22px;

          color: #8198b1;

          font-size: 12px;
        }

        .phone-input-wrap {
          display: flex;
          align-items: center;

          min-height: 57px;

          margin-bottom: 13px;

          overflow: hidden;

          border-radius: 13px;

          border:
            1px solid rgba(94, 158, 218, 0.25);

          background:
            rgba(1, 13, 29, 0.75);
        }

        .country-code {
          padding: 0 14px;

          color: #d9eaff;

          font-size: 14px;
          font-weight: 700;

          border-right:
            1px solid rgba(255,255,255,0.1);
        }

        .phone-input {
          flex: 1;
          min-width: 0;

          padding: 16px 14px;

          border: 0;
          outline: 0;

          color: white;

          background: transparent;

          font-size: 17px;
        }

        .continue-button {
          width: 100%;
          min-height: 54px;

          border: 0;
          border-radius: 13px;

          color: white;

          cursor: pointer;

          font-size: 11px;
          font-weight: 900;

          background:
            linear-gradient(
              100deg,
              #176eff,
              #23c4ff 54%,
              #25dba7
            );
        }

        .continue-button:disabled {
          opacity: 0.38;
          cursor: not-allowed;
        }

        .phone-security {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 7px;

          margin-top: 16px;

          color: #647c95;

          font-size: 9px;
        }

        .phone-security svg {
          width: 14px;
          color: var(--green);
        }

        /* RESPONSIVE */

        @media (max-width: 1200px) {
          .shell {
            width: min(1120px, calc(100% - 44px));
          }

          .hero {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(320px, 0.82fr);

            gap: 36px;
          }

          .visual-zone {
            grid-column: 1 / -1;
            min-height: 470px;
          }
        }

        @media (max-width: 760px) {
          .shell {
            width: min(680px, calc(100% - 28px));
          }

          .brand-company,
          .award-chip {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
            gap: 34px;
            padding-top: 50px;
          }

          .copy-zone {
            max-width: none;
            text-align: center;
          }

          .hero-title {
            margin-inline: auto;

            font-size:
              clamp(45px, 13vw, 65px);
          }

          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }

          .auth-panel {
            max-width: 430px;
          }

          .visual-zone {
            min-height: 410px;
          }

          .globe-system {
            width: min(430px, 95vw);
          }

          .marketplace {
            padding: 7px 9px;
            font-size: 8px;
          }
        }
      `}</style>

      <main className="ecwt-page">
        <div className="bg-grid" />
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <div className="shell">
          <nav className="nav">
            <div className="brand">
              <div className="brand-symbol">ECWT</div>

              <div className="brand-name">ECWT</div>

              <div className="brand-company">
                O‘ZBEKISTON
                <br />
                ELEKTRON TIJORAT
                <br />
                KOMPANIYASI
              </div>
            </div>

            <div className="award-chip">
              <span className="award-dot" />
              {t.badge}
            </div>
          </nav>

          <section className="hero">
            <section className="copy-zone">
              <div className="eyebrow">
                {t.eyebrow}
              </div>

              <h1 className="hero-title">
                {t.title1}

                <span className="hero-gradient">
                  {t.title2}
                </span>
              </h1>

              <p className="hero-description">
                {t.description}
              </p>

              <div className="stats">
                <div className="stat">
                  <div className="stat-value">9+</div>
                  <div className="stat-label">
                    {t.stat1}
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-value">
                    25 000+
                  </div>

                  <div className="stat-label">
                    {t.stat2}
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-value">AI</div>

                  <div className="stat-label">
                    {t.stat3}
                  </div>
                </div>
              </div>

              <div className="secure-line">
                <ShieldIcon />
                <span>{t.secure}</span>
              </div>
            </section>

            <section className="auth-panel">
              <div className="auth-content">
                <h2 className="auth-logo">
                  ECWT
                </h2>

                <div className="auth-subtitle">
                  Global commerce. One intelligent platform.
                </div>

                <div className="micro-network">
                  <div className="network-circle" />

                  <div className="micro-orbit one" />
                  <div className="micro-orbit two" />

                  <div className="network-core">
                    UZ
                  </div>

                  <div className="mini-dot d1" />
                  <div className="mini-dot d2" />
                  <div className="mini-dot d3" />
                </div>

                <button
                  className="auth-register"
                  onClick={() =>
                    openPhone("register")
                  }
                >
                  {t.register}
                </button>

                <button
                  className="auth-login"
                  onClick={() =>
                    openPhone("login")
                  }
                >
                  {t.login}
                </button>

                <div className="languages">
                  <button
                    className={`language-button ${
                      language === "uz"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setLanguage("uz")
                    }
                  >
                    O‘zbekcha
                  </button>

                  <button
                    className={`language-button ${
                      language === "ru"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setLanguage("ru")
                    }
                  >
                    Русский
                  </button>

                  <button
                    className={`language-button ${
                      language === "en"
                        ? "active"
                        : ""
                    }`}
                    onClick={() =>
                      setLanguage("en")
                    }
                  >
                    English
                  </button>
                </div>
              </div>
            </section>

            <section className="visual-zone">
              <div className="globe-system">
                <div className="globe-glow" />

                <div className="globe">
                  <div className="latitudes" />
                  <div className="longitudes" />

                  <div className="uz-center">
                    UZ
                  </div>
                </div>

                <div className="orbit-ring one" />
                <div className="orbit-ring two" />

                {marketplaces.map(
                  (marketplace) => (
                    <div
                      key={marketplace.name}
                      className={`marketplace ${marketplace.cls}`}
                    >
                      {marketplace.name}
                    </div>
                  )
                )}

                <div className="energy-pulse one" />
                <div className="energy-pulse two" />
                <div className="energy-pulse three" />
                <div className="energy-pulse four" />
              </div>
            </section>
          </section>
        </div>

        {step === "phone" && (
          <div className="overlay">
            <div className="phone-panel">
              <button
                className="back-button"
                onClick={() =>
                  setStep("welcome")
                }
              >
                ← {t.back}
              </button>

              <div className="phone-header">
                <div className="phone-logo">
                  ECWT
                </div>

                <h2>
                  {mode === "register"
                    ? t.phoneRegister
                    : t.phoneLogin}
                </h2>

                <p>{t.phoneText}</p>
              </div>

              <div className="phone-input-wrap">
                <span className="country-code">
                  +998
                </span>

                <input
                  className="phone-input"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                        .replace(
                          /[^0-9 ]/g,
                          ""
                        )
                        .slice(0, 12)
                    )
                  }
                  placeholder="90 123 45 67"
                  inputMode="numeric"
                  autoFocus
                />
              </div>

              <button
                className="continue-button"
                disabled={
                  cleanPhone.length < 9
                }
                onClick={() =>
                  alert(
                    "Keyingi bosqich: SMS tasdiqlash"
                  )
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
