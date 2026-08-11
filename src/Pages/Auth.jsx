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
          background: #020916;
          overflow-x: hidden;
        }

        .ecwt-auth {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #020916;
          font-family: Arial, Helvetica, sans-serif;
        }

        /* TASDIQLANGAN DIZAYN — QIMIRLAMAYDI */
        .ecwt-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: url("/5a0a29b6-117f-4a16-bc98-45f6ffaf07fc.png");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          z-index: 0;
        }

        /* FON RASMDAGI TUGMALAR USTIGA KO‘RINMAS KLIK ZONALARI */
        .auth-hotspots {
          position: absolute;
          inset: 0;
          z-index: 5;
        }

        .hotspot {
          position: absolute;
          left: 36%;
          width: 25%;
          border: 0;
          border-radius: 14px;
          background: transparent;
          cursor: pointer;
        }

        .hotspot-register {
          top: 59%;
          height: 7%;
        }

        .hotspot-login {
          top: 68%;
          height: 7%;
        }

        .hotspot-register:hover {
          box-shadow:
            0 0 22px rgba(0, 235, 190, 0.55),
            inset 0 0 22px rgba(0, 235, 190, 0.12);
        }

        .hotspot-login:hover {
          box-shadow:
            0 0 20px rgba(38, 132, 255, 0.45),
            inset 0 0 18px rgba(38, 132, 255, 0.10);
        }

        /* TELEFON OYNASI FAQAT TUGMA BOSILGANDA CHIQADI */
        .phone-overlay {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;

          background: rgba(1, 8, 20, 0.72);
          backdrop-filter: blur(10px);
        }

        .phone-card {
          width: 100%;
          max-width: 440px;
          padding: 32px;
          border-radius: 26px;

          background:
            linear-gradient(
              145deg,
              rgba(6, 30, 61, 0.97),
              rgba(3, 16, 36, 0.98)
            );

          border: 1px solid rgba(69, 163, 255, 0.45);

          box-shadow:
            0 0 45px rgba(0, 134, 255, 0.18),
            0 30px 80px rgba(0, 0, 0, 0.55);

          color: white;
          text-align: center;
        }

        .back-btn {
          display: block;
          border: 0;
          background: transparent;
          color: #a9bdd4;
          cursor: pointer;
          padding: 0;
          margin-bottom: 22px;
          font-size: 14px;
        }

        .mini-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          width: 82px;
          height: 58px;

          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #187aff,
            #00d2aa
          );

          font-size: 20px;
          font-weight: 900;
          margin-bottom: 20px;

          box-shadow: 0 10px 28px rgba(0, 132, 255, 0.25);
        }

        .phone-card h1 {
          margin: 0 0 10px;
          font-size: 28px;
        }

        .phone-card p {
          margin: 0 0 24px;
          color: #a9bdd4;
          font-size: 15px;
        }

        .phone-box {
          display: flex;
          align-items: center;
          width: 100%;
          min-height: 60px;
          margin-bottom: 16px;

          border: 1px solid rgba(122, 179, 235, 0.32);
          border-radius: 14px;
          overflow: hidden;

          background: rgba(1, 14, 31, 0.82);
        }

        .country-code {
          padding: 0 16px;
          font-size: 17px;
          font-weight: 800;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
        }

        .phone-input {
          flex: 1;
          min-width: 0;
          padding: 18px 15px;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          font-size: 18px;
        }

        .phone-input::placeholder {
          color: #6f849d;
        }

        .continue-btn {
          width: 100%;
          min-height: 58px;
          border: 0;
          border-radius: 14px;
          cursor: pointer;

          background: linear-gradient(
            90deg,
            #176fff,
            #00cfff,
            #15dda0
          );

          color: white;
          font-size: 16px;
          font-weight: 900;

          box-shadow: 0 10px 30px rgba(0, 132, 255, 0.23);
        }

        .continue-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .security {
          margin-top: 18px !important;
          margin-bottom: 0 !important;
          font-size: 12px !important;
          color: #8196ad !important;
        }

        @media (max-width: 900px) {
          .ecwt-bg {
            background-size: auto 100%;
          }

          .hotspot {
            left: 34%;
            width: 32%;
          }
        }
      `}</style>

      <div className="ecwt-auth">
        <div className="ecwt-bg" />

        {step === "welcome" && (
          <div className="auth-hotspots">
            <button
              className="hotspot hotspot-register"
              onClick={() => openPhoneStep("register")}
              aria-label="Ro‘yxatdan o‘tish"
            />

            <button
              className="hotspot hotspot-login"
              onClick={() => openPhoneStep("login")}
              aria-label="Kirish"
            />
          </div>
        )}

        {step === "phone" && (
          <div className="phone-overlay">
            <div className="phone-card">
              <button
                className="back-btn"
                onClick={() => setStep("welcome")}
              >
                ← Orqaga
              </button>

              <div className="mini-logo">ECWT</div>

              <h1>
                {mode === "register"
                  ? "Ro‘yxatdan o‘tish"
                  : "ECWT’ga kirish"}
              </h1>

              <p>
                Telefon raqamingizni kiriting
              </p>

              <div className="phone-box">
                <span className="country-code">
                  +998
                </span>

                <input
                  className="phone-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="90 123 45 67"
                  inputMode="numeric"
                />
              </div>

              <button
                className="continue-btn"
                disabled={phone.length < 7}
                onClick={() =>
                  alert("Keyingi bosqich: SMS tasdiqlash")
                }
              >
                DAVOM ETISH →
              </button>

              <p className="security">
                🔒 Ma’lumotlaringiz xavfsiz himoyalanadi
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Auth;
