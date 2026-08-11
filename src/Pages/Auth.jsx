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
    <div style={styles.page}>
      <div style={styles.backgroundGlowOne} />
      <div style={styles.backgroundGlowTwo} />

      <div style={styles.card}>
        {step === "welcome" && (
          <>
            <div style={styles.logoCircle}>ECWT</div>

            <h1 style={styles.title}>ECWT</h1>

            <h2 style={styles.subtitle}>
              O‘zbekiston mahsulotlarini dunyoga soting
            </h2>

            <p style={styles.description}>
              Xalqaro savdoni boshlash endi oson.
            </p>

            <button
              style={styles.primaryButton}
              onClick={() => openPhoneStep("register")}
            >
              RO‘YXATDAN O‘TISH
            </button>

            <button
              style={styles.secondaryButton}
              onClick={() => openPhoneStep("login")}
            >
              KIRISH
            </button>

            <div style={styles.languages}>
              <button style={styles.languageButton}>🇺🇿 O‘zbekcha</button>
              <button style={styles.languageButton}>🇷🇺 Русский</button>
              <button style={styles.languageButton}>🇬🇧 English</button>
            </div>
          </>
        )}

        {step === "phone" && (
          <>
            <button
              style={styles.backButton}
              onClick={() => setStep("welcome")}
            >
              ← Orqaga
            </button>

            <div style={styles.logoSmall}>ECWT</div>

            <h1 style={styles.phoneTitle}>
              {mode === "register"
                ? "ECWT’ga xush kelibsiz!"
                : "ECWT’ga kirish"}
            </h1>

            <p style={styles.phoneDescription}>
              Telefon raqamingizni kiriting
            </p>

            <div style={styles.phoneBox}>
              <span style={styles.countryCode}>+998</span>

              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="90 123 45 67"
                style={styles.input}
                inputMode="numeric"
              />
            </div>

            <button
              style={{
                ...styles.primaryButton,
                opacity: phone.length >= 7 ? 1 : 0.5,
              }}
              disabled={phone.length < 7}
              onClick={() => alert("Keyingi bosqich: SMS tasdiqlash")}
            >
              DAVOM ETISH →
            </button>

            <p style={styles.securityText}>
              🔒 Ma’lumotlaringiz xavfsiz himoyalanadi
            </p>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #122c58 0%, #071426 45%, #030912 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "24px",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Arial, sans-serif",
  },

  backgroundGlowOne: {
    position: "absolute",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: "rgba(0, 132, 255, 0.16)",
    filter: "blur(100px)",
    top: "-150px",
    right: "-100px",
  },

  backgroundGlowTwo: {
    position: "absolute",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "rgba(0, 255, 198, 0.10)",
    filter: "blur(100px)",
    bottom: "-160px",
    left: "-120px",
  },

  card: {
    width: "100%",
    maxWidth: "470px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "30px",
    padding: "42px 32px",
    backdropFilter: "blur(18px)",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    textAlign: "center",
    zIndex: 2,
  },

  logoCircle: {
    width: "92px",
    height: "92px",
    margin: "0 auto 20px",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
    fontSize: "22px",
    color: "#ffffff",
    background: "linear-gradient(135deg, #1677ff, #00cfa6)",
    boxShadow: "0 15px 35px rgba(22,119,255,0.35)",
  },

  logoSmall: {
    display: "inline-block",
    padding: "10px 18px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #1677ff, #00cfa6)",
    color: "#fff",
    fontWeight: "900",
    marginBottom: "24px",
  },

  title: {
    color: "#ffffff",
    fontSize: "42px",
    margin: "0",
    fontWeight: "900",
  },

  subtitle: {
    color: "#ffffff",
    fontSize: "25px",
    lineHeight: "1.3",
    margin: "16px 0 10px",
  },

  description: {
    color: "#aebdd0",
    fontSize: "16px",
    marginBottom: "30px",
  },

  primaryButton: {
    width: "100%",
    padding: "17px",
    border: "none",
    borderRadius: "15px",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    background: "linear-gradient(135deg, #1677ff, #00b894)",
    color: "#ffffff",
    marginBottom: "13px",
    boxShadow: "0 10px 24px rgba(22,119,255,0.22)",
  },

  secondaryButton: {
    width: "100%",
    padding: "17px",
    borderRadius: "15px",
    fontSize: "16px",
    fontWeight: "800",
    cursor: "pointer",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.20)",
  },

  languages: {
    marginTop: "28px",
    display: "flex",
    gap: "7px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  languageButton: {
    background: "transparent",
    border: "none",
    color: "#93a4ba",
    cursor: "pointer",
    fontSize: "13px",
  },

  backButton: {
    position: "absolute",
    background: "transparent",
    border: "none",
    color: "#9eb1c8",
    cursor: "pointer",
    fontSize: "14px",
  },

  phoneTitle: {
    color: "#ffffff",
    fontSize: "30px",
    margin: "0 0 10px",
  },

  phoneDescription: {
    color: "#aebdd0",
    marginBottom: "28px",
    fontSize: "16px",
  },

  phoneBox: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    borderRadius: "15px",
    padding: "4px",
    marginBottom: "16px",
    boxSizing: "border-box",
  },

  countryCode: {
    color: "#ffffff",
    fontWeight: "700",
    padding: "0 12px",
    borderRight: "1px solid rgba(255,255,255,0.20)",
  },

  input: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#ffffff",
    fontSize: "18px",
    padding: "15px 12px",
    minWidth: 0,
  },

  securityText: {
    color: "#8294aa",
    fontSize: "13px",
    marginTop: "18px",
  },
};

export default Auth;
