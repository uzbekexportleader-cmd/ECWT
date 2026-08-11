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
    <div className="ecwt-auth">
      <div className="ecwt-background" />

      <div className="energy-line energy-1" />
      <div className="energy-line energy-2" />
      <div className="energy-line energy-3" />

      {step === "welcome" && (
        <div className="click-area">
          <button
            className="register-hotspot"
            onClick={() => openPhoneStep("register")}
            aria-label="Ro‘yxatdan o‘tish"
          />

          <button
            className="login-hotspot"
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

            <p>Telefon raqamingizni kiriting</p>

            <div className="phone-input">
              <span>+998</span>

              <input
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

            <small>🔒 Ma’lumotlaringiz xavfsiz himoyalanadi</small>
          </div>
        </div>
      )}

      <style>{`
        * {
          box-sizing: border-box;
        }

        .ecwt-auth {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #020914;
        }

        .ecwt-background {
          position: absolute;
          inset: -1.5%;
          background-image: url("/5a0a29b6-117f-4a16-bc98-45f6ffaf07fc.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          animation: backgroundAlive 12s ease-in-out infinite alternate;
        }

        @keyframes backgroundAlive {
          0% {
            transform: scale(1);
            filter: brightness(0.96);
          }

          100% {
            transform: scale(1.025);
            filter: brightness(1.08);
          }
        }

        .click-area {
          position: absolute;
          inset: 0;
          z-index: 5;
        }

        .register-hotspot,
        .login-hotspot {
          position: absolute;
          left: 36.4%;
          width: 24.8%;
          border: 0;
          background: transparent;
          cursor: pointer;
          border-radius: 14px;
        }

        .register-hotspot {
          top: 59.3%;
          height: 6.6%;
        }

        .login-hotspot {
          top: 68.1%;
          height: 6.4%;
        }

        .register-hotspot:hover {
          box-shadow:
            0 0 20px rgba(0, 238, 190, 0.5),
            inset 0 0 20px rgba(0, 238, 190, 0.15);
        }

        .login-hotspot:hover {
          box-shadow:
            0 0 18px rgba(35, 130, 255, 0.35),
            inset 0 0 15px rgba(35, 130, 255, 0.12);
        }

        .energy-line {
          position: absolute;
          z-index: 3;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #61f6ff;
          box-shadow:
            0 0 8px #61f6ff,
            0 0 18px #1677ff,
            0 0 35px #00dfbd;
          pointer-events: none;
          opacity: 0;
        }

        .energy-1 {
          animation: energyOne 4.5s linear infinite;
        }

        .energy-2 {
          animation: energyTwo 5.5s linear infinite 1.3s;
        }

        .energy-3 {
          animation: energyThree 4s linear infinite 2s;
        }

        @keyframes energyOne {
          0% {
            left: 47%;
            top: 47%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 82%;
            top: 18%;
            opacity: 0;
          }
        }

        @keyframes energyTwo {
          0% {
            left: 48%;
            top: 46%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 91%;
            top: 46%;
            opacity: 0;
          }
        }

        @keyframes energyThree {
          0% {
            left: 48%;
            top: 47%;
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            left: 71%;
            top: 8%;
            opacity: 0;
          }
        }

        .phone-overlay {
          position: absolute;
          inset: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: rgba(1, 8, 20, 0.72);
          backdrop-filter: blur(13px);
        }

        .phone-card {
          width: 100%;
          max-width: 450px;
          padding: 34px;
          border-radius: 28px;
          color: white;
          text-align: center;
          background:
            linear-gradient(
              145deg,
              rgba(14, 39, 77, 0.95),
              rgba(4, 18, 38, 0.96)
            );
          border: 1px solid rgba(85, 180, 255, 0.35);
          box-shadow:
            0 0 45px rgba(18, 112, 255, 0.16),
            0 30px 80px rgba(0, 0, 0, 0.55);
        }

        .phone-card h1 {
          margin: 20px 0 8px;
          font-size: 30px;
        }

        .phone-card p {
          color: #aebfd3;
          margin-bottom: 25px;
        }

        .mini-logo {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          padding: 14px 20px;
          border-radius: 16px;
          font-weight: 900;
          background: linear-gradient(135deg, #1677ff, #00d7a9);
        }

        .back-btn {
          display: block;
          border: 0;
          color: #b7c7dc;
          background: transparent;
          cursor: pointer;
        }

        .phone-input {
          display: flex;
          align-items: center;
          border-radius: 15px;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.08);
          overflow: hidden;
          margin-bottom: 14px;
        }

        .phone-input span {
          padding: 16px;
          font-weight: 700;
          border-right: 1px solid rgba(255,255,255,0.18);
        }

        .phone-input input {
          flex: 1;
          min-width: 0;
          padding: 16px;
          border: 0;
          outline: 0;
          color: white;
          font-size: 18px;
          background: transparent;
        }

        .continue-btn {
          width: 100%;
          padding: 17px;
          border: 0;
          border-radius: 15px;
          color: white;
          font-weight: 800;
          cursor: pointer;
          background: linear-gradient(90deg, #1677ff, #00d6a5);
        }

        .continue-btn:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .phone-card small {
          display: block;
          margin-top: 18px;
          color: #879bb2;
        }

        @media (max-width: 800px) {
          .ecwt-background {
            background-size: auto 100%;
          }

          .register-hotspot,
          .login-hotspot {
            left: 34%;
            width: 32%;
          }
        }
      `}</style>
    </div>
  );
}

export default Auth;
