export function Button({ variant = "primary", size = "md", children, onClick, arrow }) {
  const sizes = { sm: { padding: "8px 16px", fontSize: 13 }, md: { padding: "12px 22px", fontSize: 15 }, lg: { padding: "16px 30px", fontSize: 18 } };
  const variants = {
    primary: { background: "#ffe28d", color: "#1d1d1d", boxShadow: "0 2px 6px rgba(77,54,30,0.10)" },
    secondary: { background: "transparent", color: "#1d1d1d", border: "1.5px solid #1d1d1d" },
    ghost: { background: "#fef3e8", color: "#1d1d1d" },
    dark: { background: "#1d1d1d", color: "#fffaf6" },
  };
  return (
    <button onClick={onClick} style={{ fontFamily: "Dosis, system-ui, sans-serif", fontWeight: 700, border: "none", borderRadius: 999, cursor: "pointer", transition: "all 200ms cubic-bezier(0.22,1,0.36,1)", display: "inline-flex", alignItems: "center", gap: 8, ...sizes[size], ...variants[variant] }}>
      {children}{arrow && <span>→</span>}
    </button>
  );
}
