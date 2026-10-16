const { useState } = React;

window.BookingSheet = function BookingSheet({ open, onClose }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Haushalt");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (!open) return null;

  const reset = () => { setStep(1); setDone(false); setName(""); setEmail(""); onClose(); };

  return (
    <div
      onClick={reset}
      style={{
        position: "fixed", inset: 0, background: "rgba(29,29,29,0.5)",
        backdropFilter: "blur(4px)", zIndex: 100, display: "flex",
        alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fffdfa", borderRadius: 28, width: "100%", maxWidth: 520,
          padding: 36, position: "relative", overflow: "hidden",
          boxShadow: "0 24px 60px rgba(77,54,30,0.30)",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)" }} />
        <button onClick={reset} style={{ position: "absolute", top: 18, right: 18, background: "transparent", border: "none", fontSize: 24, cursor: "pointer", color: "#4a4846", lineHeight: 1 }}>×</button>
        {done ? (
          <div>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: 36, color: "#1d1d1d" }}>Danke, {name || "du"}!</div>
            <h3 style={{ fontFamily: "Dosis, sans-serif", fontSize: 28, color: "#1d1d1d", margin: "8px 0 12px", letterSpacing: "-0.01em" }}>Wir melden uns zurück.</h3>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 15, color: "#4a4846", lineHeight: 1.6 }}>
              In der Regel innerhalb von 24 Stunden, immer werktags. Dein Anliegen: <strong>{service}</strong>.
            </p>
            <div style={{ marginTop: 24 }}>
              <Button onClick={reset}>Schließen</Button>
            </div>
          </div>
        ) : step === 1 ? (
          <div>
            <div style={{ fontFamily: "Open Sans, sans-serif", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a736c" }}>Schritt 1 von 2</div>
            <h3 style={{ fontFamily: "Dosis, sans-serif", fontSize: 30, color: "#1d1d1d", margin: "6px 0 8px", letterSpacing: "-0.01em" }}>Was brauchst du?</h3>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 14, color: "#4a4846", marginBottom: 20 }}>Wähl einfach — wir klären Details im Gespräch.</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
              {["Haushalt", "Begleitung", "Pflegefachwissen", "Mehreres"].map((s) => (
                <Pill key={s} active={service === s} onClick={() => setService(s)}>{s}</Pill>
              ))}
            </div>
            <Button size="lg" icon="arrow" onClick={() => setStep(2)}>Weiter</Button>
          </div>
        ) : (
          <div>
            <div style={{ fontFamily: "Open Sans, sans-serif", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a736c" }}>Schritt 2 von 2</div>
            <h3 style={{ fontFamily: "Dosis, sans-serif", fontSize: 30, color: "#1d1d1d", margin: "6px 0 16px", letterSpacing: "-0.01em" }}>Wie erreichen wir dich?</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontFamily: "Open Sans, sans-serif", fontSize: 12, fontWeight: 700, color: "#1d1d1d", display: "block", marginBottom: 4 }}>Dein Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Vor- und Nachname"
                  style={{ fontFamily: "Open Sans, sans-serif", fontSize: 15, background: "#fffdfa", border: "1.5px solid #ecdfce", borderRadius: 12, padding: "12px 14px", color: "#1d1d1d", width: "100%", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontFamily: "Open Sans, sans-serif", fontSize: 12, fontWeight: 700, color: "#1d1d1d", display: "block", marginBottom: 4 }}>E-Mail oder Telefon</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="du@example.de"
                  style={{ fontFamily: "Open Sans, sans-serif", fontSize: 15, background: "#fffdfa", border: "1.5px solid #ecdfce", borderRadius: 12, padding: "12px 14px", color: "#1d1d1d", width: "100%", outline: "none" }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              <Button variant="secondary" onClick={() => setStep(1)}>Zurück</Button>
              <Button icon="arrow" onClick={() => setDone(true)}>Absenden</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
