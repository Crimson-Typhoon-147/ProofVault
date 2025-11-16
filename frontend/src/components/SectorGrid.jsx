import { useEffect, useRef, useState } from "react";

const SECTORS = [
  { title: "Police", text: "Chain-anchored evidence & chain-of-custody." },
  { title: "Land Registry", text: "Immutable land records, titles & transfers." },
  { title: "Legal", text: "Time-stamped evidence for litigations." },
  { title: "Corporate Compliance", text: "Audit trails & records retention." },
  { title: "Individuals", text: "Personal docs & verifiable receipts." },
  { title: "Healthcare", text: "Secure medical records verification." },
];

export default function SectorGrid() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setVisible(e.isIntersecting),
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold">Designed for multiple sectors</h2>
        <p className="text-gray-300 mt-2">Plug ProofVault into your workflow — flexible integrations for every industry.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTORS.map((s, i) => (
          <article
            key={s.title}
            className={`rounded-2xl p-6 bg-white/3 border border-white/6 backdrop-blur-sm transform transition-all duration-700
              ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-98"}`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                <span className="font-semibold text-lg text-white/90">{s.title[0]}</span>
              </div>
              <div>
                <h3 className="text-lg font-medium">{s.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{s.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
