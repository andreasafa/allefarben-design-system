window.ServiceCards = function ServiceCards() {
  const services = [
    {
      color: "#e39f9a",
      title: "Haushalt",
      body: "Putzen, Einkaufen, Wäsche, Kochen. Wir machen's mit dir oder für dich — so, wie du es magst.",
      bullets: ["Regelmäßig oder einmalig", "Eigene Reinigungsmittel möglich", "Keine Standard-Checkliste"],
      price: "ab 18 €/h",
    },
    {
      color: "#98d7c2",
      title: "Begleitung",
      body: "Zum Amt, zum Arzt, ins Café, zum Späti. Wir sind da, damit du nicht allein losziehen musst.",
      bullets: ["Behördengänge & Übersetzung", "Spaziergänge & Ausflüge", "Auch auf Englisch / Spanisch"],
      price: "ab 22 €/h",
    },
    {
      color: "#78a5dc",
      title: "Pflegefachwissen",
      body: "Fragen zu Pflegegrad, Anträgen, SGB XI? Wir beraten queer-sensibel und unabhängig.",
      bullets: ["Pflegegrad-Beratung", "Anträge & Widerspruch", "Vermittlung zu Fachstellen"],
      price: "Erstberatung kostenlos",
    },
  ];
  return (
    <Section id="leistungen" bg="#fef3e8">
      <div style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a736c", marginBottom: 12 }}>
        Was wir anbieten
      </div>
      <h2 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 44, lineHeight: 1.05, letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, maxWidth: 780, textWrap: "balance" }}>
        Drei Säulen. Eine Haltung: du sagst, was du brauchst.
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginTop: 48 }}>
        {services.map((s) => (
          <div
            key={s.title}
            style={{
              background: "#fffdfa",
              borderRadius: 24,
              padding: "28px 24px",
              boxShadow: "0 6px 18px rgba(77,54,30,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
              position: "relative",
              overflow: "hidden",
              transition: "all 200ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 14px 36px rgba(77,54,30,0.14)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 18px rgba(77,54,30,0.08)"; }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: s.color }} />
            <div style={{ marginTop: 6 }}>
              <h3 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 28, color: "#1d1d1d", letterSpacing: "-0.01em", margin: 0 }}>{s.title}</h3>
            </div>
            <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#4a4846", margin: 0 }}>{s.body}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {s.bullets.map((b) => (
                <li key={b} style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, color: "#1d1d1d", display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <span style={{ color: s.color, fontWeight: 700 }}>✓</span> {b}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid #ecdfce", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, fontWeight: 700, color: "#1d1d1d" }}>{s.price}</span>
              <a href="#" style={{ fontFamily: "Dosis, sans-serif", fontSize: 14, fontWeight: 700, color: "#1d1d1d", textDecoration: "underline", textDecorationColor: "#ffe28d", textDecorationThickness: 2, textUnderlineOffset: 3 }}>Mehr erfahren →</a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
