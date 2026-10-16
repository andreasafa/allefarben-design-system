window.Testimonial = function Testimonial() {
  return (
    <Section bg="#f7ede2">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 56, alignItems: "center" }}>
        <div style={{ borderRadius: 24, overflow: "hidden", aspectRatio: "1/1", boxShadow: "0 14px 36px rgba(77,54,30,0.14)" }}>
          <img src="../../assets/img-couch-portrait.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
        <div>
          <div style={{ fontFamily: "Dosis, sans-serif", fontSize: 120, lineHeight: 0.6, color: "#ffe28d", marginBottom: -10 }}>„</div>
          <blockquote style={{ margin: 0, fontFamily: "Dosis, sans-serif", fontWeight: 600, fontSize: 34, lineHeight: 1.25, color: "#1d1d1d", letterSpacing: "-0.01em", textWrap: "balance" }}>
            Zum ersten Mal seit Jahren muss ich nicht entscheiden, welche Bilder ich von der Wand nehme, bevor jemand zum Helfen kommt.
          </blockquote>
          <div style={{ marginTop: 24, fontFamily: "Open Sans, sans-serif", fontSize: 15, color: "#4a4846" }}>
            <strong style={{ color: "#1d1d1d" }}>Micha, 71</strong> · seit 8 Monaten Kund:in · Schöneberg
          </div>
        </div>
      </div>
    </Section>
  );
};
