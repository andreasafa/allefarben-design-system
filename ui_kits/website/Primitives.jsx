const { useState } = React;

// Reusable Button
window.Button = function Button({ variant = "primary", size = "md", children, onClick, icon, ...rest }) {
  const base = {
    fontFamily: "Dosis, system-ui, sans-serif",
    fontWeight: 700,
    border: "none",
    borderRadius: 999,
    cursor: "pointer",
    transition: "all 200ms cubic-bezier(0.22, 1, 0.36, 1)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    letterSpacing: "0.005em",
    textDecoration: "none",
  };
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 13 },
    md: { padding: "12px 22px", fontSize: 15 },
    lg: { padding: "16px 30px", fontSize: 18 },
  };
  const variants = {
    primary: { background: "#ffe28d", color: "#1d1d1d", boxShadow: "0 2px 6px rgba(77,54,30,0.10)" },
    secondary: { background: "transparent", color: "#1d1d1d", border: "1.5px solid #1d1d1d" },
    ghost: { background: "#fef3e8", color: "#1d1d1d" },
    dark: { background: "#1d1d1d", color: "#fffaf6" },
  };
  return (
    <button
      onClick={onClick}
      style={{ ...base, ...sizes[size], ...variants[variant] }}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "#fcd66b";
          e.currentTarget.style.boxShadow = "0 10px 28px rgba(77,54,30,0.16)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }
      }}
      onMouseLeave={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.background = "#ffe28d";
          e.currentTarget.style.boxShadow = "0 2px 6px rgba(77,54,30,0.10)";
          e.currentTarget.style.transform = "translateY(0)";
        }
      }}
      {...rest}
    >
      {children}
      {icon === "arrow" && <span style={{ fontWeight: 700 }}>→</span>}
    </button>
  );
};

// Pill
window.Pill = function Pill({ color = "#fef3e8", textColor = "#1d1d1d", active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "Open Sans, system-ui, sans-serif",
        fontSize: 13,
        fontWeight: 700,
        padding: "7px 14px",
        borderRadius: 999,
        background: active ? "#1d1d1d" : color,
        color: active ? "#ffe28d" : textColor,
        border: "none",
        cursor: onClick ? "pointer" : "default",
        transition: "all 200ms",
      }}
    >
      {children}
    </button>
  );
};

// Section wrapper
window.Section = function Section({ bg = "#fffaf6", children, style = {}, id }) {
  return (
    <section id={id} style={{ background: bg, padding: "80px 24px", ...style }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>{children}</div>
    </section>
  );
};

// Small rainbow bar
window.RainbowBar = function RainbowBar({ height = 4, style = {} }) {
  return (
    <div
      style={{
        height,
        background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)",
        ...style,
      }}
    />
  );
};

// AlleFarben colored wordmark
window.Wordmark = function Wordmark({ size = 18, onDark }) {
  const base = onDark ? "#fffaf6" : "#1d1d1d";
  return (
    <span style={{ fontFamily: "Dosis, sans-serif", fontWeight: 700, fontSize: size, letterSpacing: "0.02em", whiteSpace: "nowrap" }}>
      <span style={{ color: base }}>ALLE </span>
      <span style={{ color: "#e39f9a" }}>F</span>
      <span style={{ color: "#f4b896" }}>A</span>
      <span style={{ color: "#ffe28d" }}>R</span>
      <span style={{ color: "#98d7c2" }}>B</span>
      <span style={{ color: "#78a5dc" }}>E</span>
      <span style={{ color: "#b89bca" }}>N</span>
    </span>
  );
};
