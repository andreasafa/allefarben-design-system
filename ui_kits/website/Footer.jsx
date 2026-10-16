window.Footer = function Footer() {
  return (
    <footer style={{ background: "#1d1d1d", color: "#fffaf6", position: "relative" }}>
      <div style={{ height: 4, background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 24px 32px", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <img src="../../assets/logo-square.png" alt="" style={{ width: 40, height: 40, filter: "brightness(0) invert(1) drop-shadow(0 0 0 transparent)", display: "none" }} />
            <img src="../../assets/logo-square.png" alt="" style={{ width: 40, height: 40 }} />
            <Wordmark size={20} onDark />
          </div>
          <div style={{ fontFamily: "Caveat, cursive", fontSize: 24, color: "#ffe28d", marginTop: 6 }}>Für alle, die Vielfalt l(i)eben!</div>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 14, color: "#fffaf6cc", marginTop: 14, lineHeight: 1.6, maxWidth: "38ch" }}>
            Queere Alltagshilfe in Berlin. Haushalt · Begleitung · Pflegefachwissen. Seit 2023.
          </p>
        </div>
        {[
          { title: "Leistungen", items: ["Haushalt", "Begleitung", "Pflegefachwissen", "Preise"] },
          { title: "Über uns", items: ["Team", "Jobs", "Presse", "Blog"] },
          { title: "Kontakt", items: ["hallo@allefarben.de", "030 1234 5678", "Mo–Fr · 9–18 Uhr", "Friedrichshain"] },
        ].map((col) => (
          <div key={col.title}>
            <h5 style={{ fontFamily: "Dosis, sans-serif", fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fffaf6aa", marginBottom: 14, fontWeight: 700 }}>{col.title}</h5>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {col.items.map((i) => (
                <li key={i} style={{ fontFamily: "Open Sans, sans-serif", fontSize: 14, lineHeight: 2, color: "#fffaf6" }}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "20px 24px", borderTop: "1px solid #ffffff1f", display: "flex", justifyContent: "space-between", fontFamily: "Open Sans, sans-serif", fontSize: 12, color: "#fffaf699" }}>
        <span>© 2026 AlleFarben Alltagshilfe</span>
        <span>Impressum · Datenschutz · Barrierefreiheit</span>
      </div>
    </footer>
  );
};
