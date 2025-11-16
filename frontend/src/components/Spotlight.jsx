import { useEffect } from "react";

export default function Spotlight({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return;

    const onMove = (e) => {
      // set CSS vars on root for GPU-friendly updates
      document.documentElement.style.setProperty(
        "--spot-x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--spot-y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20"
      style={{
        // blend mode and subtleness — tweak opacity if needed
        background:
          "radial-gradient(600px 400px at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.06), rgba(255,255,255,0.02) 15%, transparent 40%)",
        mixBlendMode: "overlay",
        transition: "background 120ms linear",
      }}
    />
  );
}
