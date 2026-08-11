import { useState } from "react";

const texts = {
  uz: {
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
          margin: 0;
          background: #020814;
          overflow-x: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .auth-page {
          position: relative;
          width: 100vw;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #020814;
        }

        .design-stage {
          position: relative;
          width: min(100vw, calc(100vh * 16 / 9));
          aspect-ratio: 16 / 9;
          flex-shrink: 0;
        }

        .design-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }

        /* LIGHT / GLOBE ANIMATION */
        .globe-light {
          position: absolute;
          left: 64.5%;
          top: 12.5%;
          width: 29%;
          aspect-ratio: 1;
          border-radius: 50%;
          z-index: 2;
          pointer-events: none;
          background:
            conic-gradient(
              from 0deg,
              rgba(0, 153, 255, 0),
              rgba(0, 153, 255, 0.18),
              rgba(66, 255, 199, 0.08),
              rgba(0, 153, 255, 0)
            );
          filter: blur(8px);
          opacity: 0.7;
          animation: globeRotate 16s linear infinite;
        }

        @keyframes globeRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* ENERGY TOKLAR */
        .energy-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #7af8ff;
          box-shadow:
            0 0 10px #7af8ff,
            0 0 20px #1e86ff,
            0 0 30px #00dfb8;
          z-index: 3;
          pointer-events: none;
          opacity: 0;
        }

        .energy-1 {
          animation: energy1 3.8s linear infinite;
        }

        .energy-2 {
          animation: energy2 4.7s linear infinite 1.2s;
        }

        .energy-3 {
          animation: energy3 4.2s linear infinite 2.1s;
        }

        @keyframes energy1 {
          0% {
            left: 49%;
            top: 44%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 80%;
            top: 18%;
            opacity: 0;
          }
        }

        @keyframes energy2 {
          0% {
            left: 50%;
            top: 45%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 89%;
            top: 39%;
            opacity: 0;
          }
        }

        @keyframes energy3 {
          0% {
            left: 50%;
            top: 45%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 72%;
            top: 11%;
            opacity: 0;
          }
        }

        /* REAL BUTTONS */
        .real-register,
        .real-login {
          position: absolute;
          left: 36.5%;
          width: 24.4%;
          min-height: 0;
          border-radius: 14px;
          z-index: 10;
          cursor: pointer;
          font-weight: 900;
          font-size: clamp(10px, 1vw, 17px);
        }

        .real-register {
          top: 61.4%;
          height: 6.3%;
          border: none;
          color: white;
          background: linear-gradient(90deg, #1370ff, #00cfff, #18dda2);
          box-shadow: none;
        }

        .real-login {
          top: 70.0%;
          height: 6.3%;
          border: 1px solid rgba(110, 170, 225, 0.34);
          color: white;
          background: rgba(4, 20, 42, 0.92);
          box-shadow: none;
        }

        .real-register:hover,
        .real-login:hover {
          filter: brightness(1.06);
        }

        .real-register:active,
        .real-login:active {
          transform: translateY(1px);
        }

        /* REAL LANGUAGE BUTTONS */
        .real-languages {
          position: absolute;
          left: 37.6%;
          top: 77.7%;
          width: 22.3%;
          height: 4%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3%;
          z-index: 11;
        }

        .real-lang {
          border: none;
          background: transparent;
          color: #a7bbcf;
          font-size: clamp(9px, 0.75vw, 13px);
          cursor: pointer;
          padding: 2px 5px 4px;
        }

        .real-lang.active {
          color: #2ae4b2;
          font-weight: 900;
          border-bottom: 2px solid #2ae4b2;
        }

        /* PHONE STEP */
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
            linear-gradient(
              145deg,
              rgba(8, 31, 63, 0.98),
              rgba(3, 15, 35, 0.99)
            );
          border: 1px solid rgba(83, 161, 255, 0.48);
          box-shadow:
            0 30px 90px rgba(0,0,0,0.55),
            0 0 40px rgba(0,130,255,0.15);
          color: white;
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

        .phone-logo {
          width: 88px;
          height: 60px;
          margin: 0 auto 22px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 900;
          background: linear-gradient(135deg, #1478ff, #00d4aa);
        }

        .phone-card h2 {
          margin: 0 0 10px;
          font-size: 28px;
        }

        .phone-card p {
          color: #a9bdd4;
        }

        .phone-box {
          display: flex;
          align-items: center;
          margin: 20px 0 16px;
          border: 1px solid rgba(116, 178, 235, 0.34);
          border-radius: 14px;
          overflow: hidden;
          background: rgba(1, 14, 31, 0.84);
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

        .continue-btn {
          width: 100%;
          min-height: 58px;
          border: 0;
          border-radius: 14px;
          cursor: pointer;
          color: white;
          font-size: 16px;
          font-weight: 900;
          background: linear-gradient(90deg, #176fff, #00cfff, #13dda1);
        }

        .continue-btn:disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }

        .security {
          margin-top: 18px;
          color: #8398ae;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .auth-page {
            overflow: auto;
            align-items: flex-start;
          }

          .design-stage {
            width: 1000px;
            max-width: none;
          }
        }
      `}</style>

      <div className="auth-page">
        <div className="design-stage">
          <img
            className="design-image"
            src="/5a0a29b6-117f-4a16-bc98-45f6ffaf07fc.png"
            alt="ECWT"
          />

          <div className="globe-light" />

          <div className="energy-dot energy-1" />
          <div className="energy-dot energy-2" />
          <div className="energy-dot energy-3" />

          {step === "welcome" && (
            <>
              <button
                className="real-register"
                onClick={() => openPhone("register")}
              >
                {t.register}
              </button>

              <button
                className="real-login"
                onClick={() => openPhone("login")}
              >
                {t.login}
              </button>

              <div className="real-languages">
                <button
                  className={`real-lang ${language === "uz" ? "active" : ""}`}
                  onClick={() => setLanguage("uz")}
                >
                  O‘zbekcha
                </button>

                <button
                  className={`real-lang ${language === "ru" ? "active" : ""}`}
                  onClick={() => setLanguage("ru")}
                >
                  Русский
                </button>

                <button
                  className={`real-lang ${language === "en" ? "active" : ""}`}
                  onClick={() => setLanguage("en")}
                >
                  English
                </button>
              </div>
            </>
          )}
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

              <div className="phone-logo">ECWT</div>

              <h2>
                {mode === "register"
                  ? t.phoneTitleRegister
                  : t.phoneTitleLogin}
              </h2>

              <p>{t.phoneDesc}</p>

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
                className="continue-btn"
                disabled={phone.replace(/\s/g, "").length < 9}
                onClick={() => alert("Keyingi bosqich: SMS tasdiqlash")}
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
