export function Pill({ tone = "ghost", children }) {
  const tones = {
    yellow: { background: "#ffe28d", color: "#1d1d1d" },
    peach: { background: "#f4b896", color: "#1d1d1d" },
    mint: { background: "#98d7c2", color: "#1d1d1d" },
    blue: { background: "#78a5dc", color: "#1d1d1d" },
    lavender: { background: "#b89bca", color: "#1d1d1d" },
    ghost: { background: "#fef3e8", color: "#1d1d1d" },
    outline: { background: "transparent", color: "#1d1d1d", boxShadow: "inset 0 0 0 1.5px #1d1d1d" },
  };
  return <span style={{ fontFamily: "Open Sans, system-ui, sans-serif", fontSize: 13, fontWeight: 700, padding: "6px 14px", borderRadius: 999, display: "inline-flex", alignItems: "center", gap: 6, ...tones[tone] }}>{children}</span>;
}
