window.CTABlock = function CTABlock({ onBook }) {
  return (
    <section style={{ background: "#fffaf6", padding: "40px 24px 80px" }}>
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          background: "#ffe28d",
          borderRadius: 32,
          padding: "64px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 6, background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <div style={{ fontFamily: "Caveat, cursive", fontSize: 28, color: "#1d1d1d", marginBottom: 4 }}>
              Bereit?
            </div>
            <h2 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 52, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textWrap: "balance" }}>
              Erzähl uns, was du brauchst. Wir melden uns zurück.
            </h2>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 18, lineHeight: 1.55, color: "#1d1d1d", marginTop: 16, maxWidth: "48ch" }}>
              Kostenloses Erstgespräch, kein Kleingedrucktes, keine Bindung. Du kannst jederzeit wieder aufhören.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
              <Button variant="dark" size="lg" icon="arrow" onClick={onBook}>Termin buchen</Button>
              <Button variant="secondary" size="lg">030 1234 5678</Button>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src="../../assets/logo-square.png" alt="" style={{ width: 220, height: 220, objectFit: "contain" }} />
          </div>
        </div>
      </div>
    </section>
  );
};
