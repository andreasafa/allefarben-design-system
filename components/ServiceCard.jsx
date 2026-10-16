export function ServiceCard({ accent = "#ffe28d", title = "Haushalt", body = "", price = "", bullets = [] }) {
  return (
    <div style={{ background: "#fffdfa", borderRadius: 24, padding: "28px 24px", boxShadow: "0 6px 18px rgba(77,54,30,0.08)", display: "flex", flexDirection: "column", gap: 14, position: "relative", overflow: "hidden", minHeight: 260 }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: accent }}></div>
      <h3 style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: 28, color: "#1d1d1d", margin: "6px 0 0", letterSpacing: "-0.01em" }}>{title}</h3>
      <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 15, lineHeight: 1.6, color: "#4a4846", margin: 0 }}>{body}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
        {bullets.map((b) => (
          <li key={b} style={{ fontFamily: "Open Sans, sans-serif", fontSize: 13, color: "#1d1d1d", display: "flex", gap: 8 }}><span style={{ color: accent, fontWeight: 700 }}>✓</span>{b}</li>
        ))}
      </ul>
      <div style={{ marginTop: "auto", paddingTop: 10, borderTop: "1px solid #ecdfce", fontFamily: "Open Sans, sans-serif", fontSize: 13, fontWeight: 700, color: "#1d1d1d" }}>{price}</div>
    </div>
  );
}
