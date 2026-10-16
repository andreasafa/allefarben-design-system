window.Navbar = function Navbar({ active = "start", onNav, onBook }) {
  const links = [
    { id: "start", label: "Start" },
    { id: "leistungen", label: "Leistungen" },
    { id: "team", label: "Über uns" },
    { id: "jobs", label: "Jobs" },
    { id: "kontakt", label: "Kontakt" },
  ];
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255, 250, 246, 0.88)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1px solid #ecdfce",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a href="#start" onClick={(e) => { e.preventDefault(); onNav?.("start"); }} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="../../assets/logo-square.png" alt="" style={{ width: 36, height: 36 }} />
          <Wordmark size={18} />
        </a>
        <nav style={{ display: "flex", gap: 26 }}>
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => { e.preventDefault(); onNav?.(l.id); }}
              style={{
                fontFamily: "Dosis, sans-serif",
                fontWeight: 600,
                fontSize: 15,
                color: "#1d1d1d",
                textDecoration: active === l.id ? "underline" : "none",
                textDecorationColor: "#ffe28d",
                textDecorationThickness: 3,
                textUnderlineOffset: 6,
                paddingBottom: 2,
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <Button size="sm" onClick={onBook}>Termin buchen</Button>
      </div>
      <RainbowBar height={3} />
    </header>
  );
};
