import { useState } from "react";

const texts = {
  uz: {
    register: "Ro‘yxatdan o‘tish",
    login: "ECWT’ga kirish",
    phone: "Telefon raqamingizni kiriting",
    continue: "DAVOM ETISH →",
    back: "← Orqaga",
    secure: "🔒 Ma’lumotlaringiz xavfsiz himoyalanadi",
    selected: "O‘zbek tili tanlandi",
  },

  ru: {
    register: "Регистрация",
    login: "Войти в ECWT",
    phone: "Введите номер телефона",
    continue: "ПРОДОЛЖИТЬ →",
    back: "← Назад",
    secure: "🔒 Ваши данные надёжно защищены",
    selected: "Выбран русский язык",
  },

  en: {
    register: "Create account",
    login: "Sign in to ECWT",
    phone: "Enter your phone number",
    continue: "CONTINUE →",
    back: "← Back",
    secure: "🔒 Your information is securely protected",
    selected: "English selected",
  },
};

function Auth() {
  const [step, setStep] = useState("welcome");
  const [mode, setMode] = useState("register");
  const [phone, setPhone] = useState("");
  const [language, setLanguage] = useState("uz");
  const [toast, setToast] = useState("");

  const t = texts[language];

  const openPhoneStep = (selectedMode) => {
    setMode(selectedMode);
    setStep("phone");
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setToast(texts[lang].selected);

    setTimeout(() => {
      setToast("");
    }, 1400);
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
          background: #010816;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .ecwt-auth {
          width: 100vw;
          height: 100vh;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at center,
              #071b38 0%,
              #020b19 55%,
              #010510 100%
            );
        }

        /*
          RASM ENDI VIEWPORTNI TO‘LDIRIB CROP BO‘LMAYDI.
          BUTUN 16:9 DIZAYN SAL ORQAROQ KO‘RINADI.
        */

        .design-stage {
          position: relative;

          width: min(
            100vw,
            calc(100vh * 16 / 9)
          );

          aspect-ratio: 16 / 9;

          flex-shrink: 0;
        }

        .design-image {
          position: absolute;
          inset: 0;

          width: 100%;
          height: 100%;

          display: block;
          object-fit: contain;

          user-select: none;
          pointer-events: none;
        }

        /*
          RASMDAGI REAL REGISTER / LOGIN
          USTIDAGI KO‘RINMAS TUGMALAR
        */

        .hotspot {
          position: absolute;

          padding: 0;
          margin: 0;

          border: none;
          outline: none;

          background: transparent;

          cursor: pointer;

          z-index: 10;
        }

        .register-hotspot {
          left: 36.4%;
          top: 61.5%;

          width: 24.8%;
          height: 6.7%;

          border-radius: 15px;
        }

        .login-hotspot {
          left: 36.4%;
          top: 70.3%;

          width: 24.8%;
          height: 6.7%;

          border-radius: 15px;
        }

        /*
          OLDINGI KERAKSIZ SOYA OLIB TASHLANDI.
          HOVER PAYTIDA RASM BUZILMAYDI.
        */

        .register-hotspot:hover,
        .login-hotspot:hover {
          background: transparent;
          box-shadow: none;
          filter: none;
        }

        .register-hotspot:focus-visible,
        .login-hotspot:focus-visible {
          outline: 2px solid rgba(65, 225, 255, 0.8);
          outline-offset: 3px;
        }

        /*
          TIL TUGMALARI
          RASMDAGI MATNLAR USTIGA JOYLASHADI
        */

        .lang-hotspot {
          position: absolute;

          top: 78.3%;
          height: 4.4%;

          border: none;
          background: transparent;

          cursor: pointer;
          z-index: 11;

          border-radius: 8px;
        }

        .lang-uz {
          left: 38.2%;
          width: 6.5%;
        }

        .lang-ru {
          left: 44.7%;
          width: 7%;
        }

        .lang-en {
          left: 51.7%;
          width: 7%;
        }

        .lang-hotspot:hover {
          background: rgba(40, 220, 200, 0.05);
        }

        /*
          QAYSI TIL TANLANGANINI KO‘RSATADIGAN
          MAYDA BELGI
        */

        .language-dot {
          position: absolute;

          top: 82.1%;

          width: 5px;
          height: 5px;

          border-radius: 50%;

          background: #21e5b3;

          box-shadow:
            0 0 6px #21e5b3,
            0 0 14px #21e5b3;

          z-index: 12;

          transition: left 0.25s ease;
        }

        .language-dot.uz {
          left: 41.2%;
        }

        .language-dot.ru {
          left: 48%;
        }

        .language-dot.en {
          left: 55%;
        }

        /*
          TIL TANLANGANDA CHIQADIGAN KICHIK XABAR
        */

        .toast {
          position: fixed;

          left: 50%;
          bottom: 30px;

          transform: translateX(-50%);

          z-index: 100;

          padding: 12px 22px;

          border-radius: 999px;

          background: rgba(3, 26, 52, 0.95);

          border: 1px solid rgba(57, 216, 204, 0.55);

          color: white;

          font-size: 14px;
          font-weight: 700;

          box-shadow:
            0 15px 40px rgba(0,0,0,0.4),
            0 0 20px rgba(0,210,190,0.16);
        }

        /*
          TELEFON OYNASI
        */

        .phone-overlay {
          position: fixed;
          inset: 0;

          z-index: 50;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 24px;

          background: rgba(0, 6, 18, 0.78);

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
              rgba(7, 33, 67, 0.98),
              rgba(2, 17, 38, 0.98)
            );

          border: 1px solid rgba(58, 157, 255, 0.5);

          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.6),
            0 0 40px rgba(0, 125, 255, 0.16);

          color: white;
          text-align: center;
        }

        .back-btn {
          display: block;

          padding: 0;
          margin: 0 0 22px;

          border: none;

          background: transparent;

          color: #a9bdd4;

          cursor: pointer;

          font-size: 14px;
        }

        .mini-logo {
          width: 86px;
          height: 60px;

          margin: 0 auto 22px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;

          background:
            linear-gradient(
              135deg,
              #167cff,
              #00d6a5
            );

          color: white;

          font-size: 20px;
          font-weight: 900;

          box-shadow:
            0 10px 30px rgba(0, 136, 255, 0.25);
        }

        .phone-card h1 {
          margin: 0 0 10px;

          font-size: 29px;
          line-height: 1.25;
        }

        .phone-description {
          margin: 0 0 25px;

          color: #a9bdd4;

          font-size: 15px;
        }

        .phone-box {
          display: flex;
          align-items: center;

          width: 100%;
          min-height: 60px;

          margin-bottom: 16px;

          overflow: hidden;

          border-radius: 14px;

          border:
            1px solid rgba(120, 178, 235, 0.35);

          background:
            rgba(1, 14, 31, 0.84);
        }

        .country-code {
          padding: 0 16px;

          color: white;

          font-size: 17px;
          font-weight: 800;

          border-right:
            1px solid rgba(255,255,255,0.15);
        }

        .phone-input {
          flex: 1;

          min-width: 0;

          padding: 18px 15px;

          border: none;
          outline: none;

          background: transparent;

          color: white;

          font-size: 18px;
        }

        .phone-input::placeholder {
          color: #71879f;
        }

        .continue-btn {
          width: 100%;
          min-height: 58px;

          border: none;
          border-radius: 14px;

          cursor: pointer;

          background:
            linear-gradient(
              90deg,
              #176fff,
              #00cfff,
              #13dda1
            );

          color: white;

          font-size: 16px;
          font-weight: 900;

          box-shadow:
            0 12px 30px rgba(0, 132, 255, 0.24);
        }

        .continue-btn:disabled {
          opacity: 0.42;
          cursor: not-allowed;
        }

        .security {
          margin: 18px 0 0;

          color: #8196ad;

          font-size: 12px;
        }

        /*
          TELEFONDA DIZAYN JUDA MAYDA
          BO‘LIB KETMASLIGI UCHUN
        */

        @media (max-width: 700px) {
          .ecwt-auth {
            overflow: auto;
          }

          .design-stage {
            width: 1000px;
            max-width: none;

            flex-shrink: 0;
          }
        }
      `}</style>

      <div className="ecwt-auth">
        <div className="design-stage">

          <img
            className="design-image"
            src="/5a0a29b6-117f-4a16-bc98-45f6ffaf07fc.png"
            alt="ECWT global e-commerce"
          />

          {step === "welcome" && (
            <>
              <button
                className="hotspot register-hotspot"
                onClick={() => openPhoneStep("register")}
                aria-label="Ro‘yxatdan o‘tish"
              />

              <button
                className="hotspot login-hotspot"
                onClick={() => openPhoneStep("login")}
                aria-label="Kirish"
              />

              <button
                className="lang-hotspot lang-uz"
                onClick={() => selectLanguage("uz")}
                aria-label="O‘zbekcha"
              />

              <button
                className="lang-hotspot lang-ru"
                onClick={() => selectLanguage("ru")}
                aria-label="Русский"
              />

              <button
                className="lang-hotspot lang-en"
                onClick={() => selectLanguage("en")}
                aria-label="English"
              />

              <div
                className={`language-dot ${language}`}
              />
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

              <div className="mini-logo">
                ECWT
              </div>

              <h1>
                {mode === "register"
                  ? t.register
                  : t.login}
              </h1>

              <p className="phone-description">
                {t.phone}
              </p>

              <div className="phone-box">
                <span className="country-code">
                  +998
                </span>

                <input
                  className="phone-input"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value.replace(
                        /[^0-9 ]/g,
                        ""
                      )
                    )
                  }
                  placeholder="90 123 45 67"
                  inputMode="numeric"
                />
              </div>

              <button
                className="continue-btn"
                disabled={phone.replace(/\s/g, "").length < 9}
                onClick={() =>
                  alert("Keyingi bosqich: SMS tasdiqlash")
                }
              >
                {t.continue}
              </button>

              <p className="security">
                {t.secure}
              </p>
            </div>
          </div>
        )}

        {toast && (
          <div className="toast">
            {toast}
          </div>
        )}
      </div>
    </>
  );
}

export default Auth;
