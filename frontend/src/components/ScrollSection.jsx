import { useEffect, useRef, useState } from "react";

export default function ScrollSection({
  title,
  subtitle,
  children,
  ctas = [],
  bg = "default",
  variant = "hero", // allow future styling variations
}) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          document.dispatchEvent(new CustomEvent("sectionChange", { detail: bg }));
        }
      },
      { threshold: 0.45 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [bg]);

  return (
    <section
      ref={ref}
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-6 relative z-10 transition-all duration-700
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-98"}`}
    >
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg max-w-4xl">{title}</h1>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">{subtitle}</p>

      <div className="flex gap-4 mt-6">
        {ctas.map((cta, i) => (
          <button
            key={i}
            className="px-6 py-3 rounded-lg bg-white/8 hover:bg-white/16 border border-white/10 hover:border-white/30 transition-all text-sm md:text-base backdrop-blur-md shadow-sm"
          >
            {cta.label}
          </button>
        ))}
      </div>

      <p className="text-gray-400 max-w-xl text-sm md:text-base mt-4">{children}</p>
    </section>
  );
}
