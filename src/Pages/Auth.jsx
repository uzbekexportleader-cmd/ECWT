import { useState } from "react";

function Auth() {
  const [step, setStep] = useState("welcome");
  const [mode, setMode] = useState("register");
  const [phone, setPhone] = useState("");

  const openPhoneStep = (selectedMode) => {
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
          overflow-x: hidden;
          background: #020916;
        }

        .ecwt-auth-page {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: Arial, Helvetica, sans-serif;
          background: #020916;
        }

        /* FON — ANIMATSIYA YO‘Q, ZOOM YO‘Q */
        .ecwt-background {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(
              rgba(1, 8, 22, 0.08),
              rgba(1, 8, 22, 0.08)
            ),
            url("/5a0a29b6-117f-4a16-bc98-45f6ffaf07fc.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 0;
        }

        .ecwt-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(
              circle at center,
              rgba(0, 153, 255, 0.03),
              rgba(0, 0, 0, 0.05)
            );
          pointer-events: none;
          z-index: 1;
        }

        .ecwt-auth-card {
          position: relative;
          z-index: 5;
          width: min(460px, calc(100% - 40px));
          padding: 34px 30px 28px;
          border-radius: 28px;

          background: linear-gradient(
            145deg,
            rgba(5, 28, 58, 0.94),
            rgba(3, 17, 38, 0.96)
          );

          border: 1px solid rgba(70, 164, 255, 0.55);

          box-shadow:
            0 0 35px rgba(0, 132, 255, 0.22),
            0 25px 70px rgba(0, 0, 0, 0.48);

          backdrop-filter: blur(8px);
          text-align: center;
          color: white;
        }

        .ecwt-logo {
          font-size: 56px;
          line-height: 1;
          margin: 0;
          font-weight: 900;
          letter-spacing: 1px;

          background: linear-gradient(
            90deg,
            #2588ff,
            #39cfff,
            #4de6a5
          );

          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          text-shadow: 0 0 30px rgba(0, 153, 255, 0.22);
        }

        .ecwt-slogan {
          margin: 10px 0 22px;
          color: #d7e6f7;
          font-size: 15px;
        }

        .ecwt-title {
          margin: 0 0 10px;
          color: white;
          font-size: 28px;
          line-height: 1.25;
          font-weight: 800;
        }

        .ecwt-description {
          margin: 0 0 26px;
          color: #a9bdd4;
          font-size: 15px;
          line-height: 1.6;
        }

        .ecwt-primary {
          width: 100%;
          min-height: 58px;
          border: none;
          border-radius: 14px;

          background: linear-gradient(
            90deg,
            #126cff,
            #00cfff,
            #18dfa0
          );

          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;

          box-shadow:
            0 10px 30px rgba(0, 132, 255, 0.28),
            0 0 20px rgba(0, 225, 190, 0.12);

          transition:
            transform 0.2s ease,
            filter 0.2s ease;
        }

        .ecwt-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
        }

        .ecwt-primary:disabled {
          cursor: not-allowed;
          transform: none;
        }

        .ecwt-secondary {
          width: 100%;
          min-height: 58px;
          margin-top: 13px;

          border-radius: 14px;
          border: 1px solid rgba(129, 177, 226, 0.38);

          background: rgba(3, 20, 43, 0.78);

          color: white;
          font-size: 17px;
          font-weight: 900;
          cursor: pointer;

          transition:
            background 0.2s ease,
            border-color 0.2s ease;
        }

        .ecwt-secondary:hover {
          background: rgba(10, 42, 76, 0.9);
          border-color: rgba(60, 170, 255, 0.7);
        }

        .ecwt-languages {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .ecwt-language {
          padding: 4px 7px;
          border: none;
          background: transparent;
          color: #a5b8ce;
          font-size: 12px;
          cursor: pointer;
        }

        .ecwt-language:first-child {
          color: #27e3b1;
          font-weight: 800;
        }

        .ecwt-back {
          display: block;
          margin: 0 0 20px;
          padding: 0;

          border: none;
          background: transparent;

          color: #a9bdd4;
          font-size: 14px;
          cursor: pointer;
        }

        .ecwt-small-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 90px;
          height: 50px;
          padding: 0 18px;
          margin-bottom: 20px;

          border-radius: 14px;

          background: linear-gradient(
            135deg,
            #1677ff,
            #00cfa6
          );

          color: white;
          font-size: 20px;
          font-weight: 900;

          box-shadow: 0 12px 30px rgba(0, 132, 255, 0.25);
        }

        .ecwt-phone-box {
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 60px;
          margin: 20px 0 16px;

          border: 1px solid rgba(110, 171, 230, 0.35);
          border-radius: 14px;

          background: rgba(1, 14, 31, 0.78);
          overflow: hidden;
        }

        .ecwt-country-code {
          padding: 0 16px;
          color: white;
          font-size: 17px;
          font-weight: 800;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .ecwt-phone-input {
          flex: 1;
          min-width: 0;
          padding: 18px 15px;

          border: none;
          outline: none;
          background: transparent;

          color: white;
          font-size: 18px;
        }

        .ecwt-phone-input::placeholder {
          color: #72869d;
        }

        .ecwt-security {
          margin: 18px 0 0;
          color: #8499b0;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .ecwt-auth-page {
            padding: 20px 0;
          }

          .ecwt-background {
            background-position: center center;
          }

          .ecwt-auth-card {
            width: calc(100% - 28px);
            padding: 30px 22px 24px;
          }

          .ecwt-logo {
            font-size: 45px;
          }

          .ecwt-title {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="ecwt-auth-page">
        <div className="ecwt-background" />
        <div className="ecwt-overlay" />

        <div className="ecwt-auth-card">
          {step === "welcome" && (
            <>
              <h1 className="ecwt-logo">ECWT</h1>

              <p className="ecwt-slogan">
                Dunyoni bog‘laymiz, biznesingizni oshiramiz
              </p>

              <h2 className="ecwt-title">
                O‘zbekiston mahsulotlarini dunyoga soting
              </h2>

              <p className="ecwt-description">
                Mahsulotingizni global marketplace’larda sotishni boshlang.
                Xalqaro savdo endi yanada oson.
              </p>

              <button
                className="ecwt-primary"
                onClick={() => openPhoneStep("register")}
              >
                RO‘YXATDAN O‘TISH
              </button>

              <button
                className="ecwt-secondary"
                onClick={() => openPhoneStep("login")}
              >
                KIRISH
              </button>

              <div className="ecwt-languages">
                <button className="ecwt-language">
                  🇺🇿 O‘zbekcha
                </button>

                <button className="ecwt-language">
                  🇷🇺 Русский
                </button>

                <button className="ecwt-language">
                  🇬🇧 English
                </button>
              </div>
            </>
          )}

          {step === "phone" && (
            <>
              <button
                className="ecwt-back"
                onClick={() => setStep("welcome")}
              >
                ← Orqaga
              </button>

              <div className="ecwt-small-logo">
                ECWT
              </div>

              <h1 className="ecwt-title">
                {mode === "register"
                  ? "ECWT’ga xush kelibsiz!"
                  : "ECWT’ga kirish"}
              </h1>

              <p className="ecwt-description">
                Telefon raqamingizni kiriting
              </p>

              <div className="ecwt-phone-box">
                <span className="ecwt-country-code">
                  +998
                </span>

                <input
                  className="ecwt-phone-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="90 123 45 67"
                  inputMode="numeric"
                />
              </div>

              <button
                className="ecwt-primary"
                style={{
                  opacity: phone.length >= 7 ? 1 : 0.5,
                }}
                disabled={phone.length < 7}
                onClick={() =>
                  alert("Keyingi bosqich: SMS tasdiqlash")
                }
              >
                DAVOM ETISH →
              </button>

              <p className="ecwt-security">
                🔒 Ma’lumotlaringiz xavfsiz himoyalanadi
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Auth;
