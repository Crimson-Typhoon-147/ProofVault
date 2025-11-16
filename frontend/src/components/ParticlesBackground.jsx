import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: { color: "transparent" },
      fullScreen: { enable: false },
      particles: {
        number: { value: 40 },
        size: { value: 2 },
        move: { speed: 0.4 },
        opacity: { value: 0.3 },
        links: {
          enable: true,
          opacity: 0.15,
          color: "#66ccff",
        },
        color: { value: "#99ffff" },
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
