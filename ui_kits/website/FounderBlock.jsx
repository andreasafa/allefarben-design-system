window.FounderBlock = function FounderBlock() {
  return (
    <Section id="team" bg="#fffaf6">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "4/5", boxShadow: "0 14px 36px rgba(77,54,30,0.14)" }}>
            <img src="../../assets/img-andreas-portrait.png" alt="Andreas, Gründer" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div
            style={{
              position: "absolute",
              top: -18,
              right: -18,
              background: "#ffe28d",
              borderRadius: "50%",
              width: 110,
              height: 110,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Caveat, cursive",
              fontSize: 20,
              fontWeight: 700,
              color: "#1d1d1d",
              lineHeight: 1.1,
              padding: 14,
              transform: "rotate(8deg)",
              boxShadow: "0 6px 18px rgba(77,54,30,0.14)",
            }}
          >
            Hi, ich bin Andreas!
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "#7a736c", marginBottom: 12 }}>
            Warum es uns gibt
          </div>
          <h2 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 42, lineHeight: 1.1, letterSpacing: "-0.01em", color: "#1d1d1d", margin: 0, textWrap: "balance" }}>
            Niemand sollte erklären müssen, wer er ist — schon gar nicht in der eigenen Küche.
          </h2>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#1d1d1d", marginTop: 20, maxWidth: "56ch" }}>
            Als examinierter Pfleger habe ich zu oft gesehen, wie queere Menschen im Alter wieder in den Schrank zurück mussten, nur um Hilfe zu bekommen. Deshalb gibt es <strong>AlleFarben</strong>: Alltagshilfe in Berlin von Kolleg:innen, bei denen du du sein kannst.
          </p>
          <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 17, lineHeight: 1.7, color: "#4a4846", marginTop: 16, maxWidth: "56ch" }}>
            Wir sind klein, wir sind solidarisch, und wir sind genau so bunt wie unser Name.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Pill color="#ffe28d">Examinierter Pfleger</Pill>
            <Pill color="#98d7c2">Berlin · seit 2023</Pill>
            <Pill color="#b89bca">Team von 8</Pill>
          </div>
        </div>
      </div>
    </Section>
  );
};
