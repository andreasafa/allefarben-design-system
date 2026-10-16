window.Hero = function Hero({ onBook }) {
  return (
    <section style={{ background: "#fffaf6", padding: "80px 24px 96px", position: "relative" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a736c", marginBottom: 18 }}>
            Berlins erste queere Alltagshilfe
          </div>
          <h1 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 68, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textWrap: "balance" }}>
            Für alle, die Vielfalt{" "}
            <span style={{ color: "#e39f9a" }}>l(i)eben</span>.
          </h1>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 20, lineHeight: 1.55, color: "#4a4846", marginTop: 24, maxWidth: "32ch", textWrap: "pretty" }}>
            Haushalt, Begleitung und Pflegefachwissen — von Kolleg:innen, die dich nicht erklären lassen, was Community heißt.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button size="lg" icon="arrow" onClick={onBook}>Termin buchen</Button>
            <Button size="lg" variant="secondary">So arbeiten wir</Button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 32, alignItems: "center", color: "#4a4846", fontFamily: "Open Sans, sans-serif", fontSize: 14 }}>
            <span>✓ Berlin-weit</span>
            <span>✓ Du-Form, immer</span>
            <span>✓ Ab 18 €/h</span>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 14px 36px rgba(77,54,30,0.14)", aspectRatio: "4/5" }}>
            <img src="../../assets/img-shopping-help.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -24,
              left: -24,
              background: "#ffe28d",
              padding: "18px 22px",
              borderRadius: 20,
              fontFamily: "Caveat, cursive",
              fontSize: 28,
              fontWeight: 700,
              color: "#1d1d1d",
              boxShadow: "0 6px 18px rgba(77,54,30,0.14)",
              transform: "rotate(-3deg)",
              maxWidth: 240,
              lineHeight: 1.1,
            }}
          >
            Alltagshilfe, die dich versteht.
          </div>
        </div>
      </div>
    </section>
  );
};
