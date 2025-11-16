import { useEffect, useRef, useState } from "react";

export default function BackgroundLayer() {
  const ref = useRef();
  const [theme, setTheme] = useState("purple");

  //
  // LISTEN FOR SECTION COLOR CHANGE EVENTS
  //
  useEffect(() => {
    const handler = (e) => setTheme(e.detail);
    document.addEventListener("sectionChange", handler);
    return () => document.removeEventListener("sectionChange", handler);
  }, []);

  //
  // PARALLAX MOUSE MOVEMENT
  //
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 8;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  //
  // THEME COLORS (MATCHING KALEIDO/Axon STYLE)
  //
  const blobColors = {
    purple: ["#A236FF", "#FF55AF"],
    blue: ["#00F0C6", "#008CFF"],
    pink: ["#FF55AF", "#FF2E8D"],
    default: ["#A236FF", "#00F0C6"],
  };

  const [c1, c2] = blobColors[theme] || blobColors.default;

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* LAYER 1 — PARALLAX GRADIENT BLOBS */}
      <div
        ref={ref}
        className="absolute inset-0 transition-transform duration-700"
      >
        {/* Blob 1 */}
        <div
          className="absolute -left-40 -top-60 w-[900px] h-[900px] rounded-full blur-[150px] opacity-50 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${c1} 0%, transparent 70%)`,
          }}
        />

        {/* Blob 2 */}
        <div
          className="absolute -right-40 top-40 w-[900px] h-[900px] rounded-full blur-[150px] opacity-50 transition-all duration-700"
          style={{
            background: `radial-gradient(circle, ${c2} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* LAYER 2 — LIGHT BEAMS */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-screen transition-all duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rotate-12" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -rotate-12" />
      </div>

      {/* LAYER 3 — MESH GRID */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.10] transition-all duration-700"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 30 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={`${(i / 30) * 100}%`}
            y1="0%"
            x2={`${(i / 30) * 100}%`}
            y2="100%"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.8"
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <line
            key={`d-${i}`}
            x1="0%"
            y1={`${(i / 20) * 100}%`}
            x2="100%"
            y2={`${((i + 10) / 20) * 100}%`}
            stroke="rgba(255,255,255,0.03)"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* LAYER 4 — FLOATING DOTS */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatDot ${
                6 + Math.random() * 6
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* LAYER 5 — NOISE OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay transition-all duration-700"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      <style>{`
        @keyframes floatDot {
          0% { transform: translateY(0px); opacity: 0.2; }
          50% { transform: translateY(-15px); opacity: 0.5; }
          100% { transform: translateY(0px); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
