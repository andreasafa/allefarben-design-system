export function RainbowBar({ height = 6, soft = false }) {
  const g = soft
    ? "linear-gradient(90deg,#e39f9a33 0%,#ffe28d33 40%,#98d7c233 60%,#b89bca33 100%)"
    : "linear-gradient(90deg,#e39f9a 0%,#f4b896 20%,#ffe28d 40%,#98d7c2 60%,#78a5dc 80%,#b89bca 100%)";
  return <div style={{ height, background: g, borderRadius: 999 }}></div>;
}
