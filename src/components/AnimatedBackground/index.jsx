import { useMemo } from "react";
import { motion } from "framer-motion";

const AnimatedBackground = ({ className = "", particleCount = 44 }) => {
  const particles = useMemo(() =>Array.from({ length: particleCount }, (_, index) =>
     {
        const depth = index % 3;
        const baseSize = depth === 0 ? 1.5 : depth === 1 ? 2.4 : 3.2;
        const speed = depth === 0 ? 12 : depth === 1 ? 16 : 21;
        const opacity = depth === 0 ? 0.22 : depth === 1 ? 0.3 : 0.4;

        return {
          id: index,
          left: Math.random() * 100,
          size: baseSize + Math.random() * 1.6,
          duration: speed + Math.random() * 7,
          delay: Math.random() * 12,
          drift: (Math.random() - 0.5) * 36,
          blur: depth === 2 ? 0.6 : depth === 1 ? 0.3 : 0,
          opacity,
        };
      }),
    [particleCount]
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#081224] to-[#020617]" />

      <motion.div
        className="absolute -inset-[25%] opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.16) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
        animate={{ x: [0, 22, 0], y: [0, 14, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute top-[-10%] rounded-full bg-white shadow-[0_0_14px_rgba(147,197,253,0.5)]"
            style={{
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              filter: `blur(${particle.blur}px)`,
            }}
            animate={{
              y: ["0%", "118%"],
              x: [0, particle.drift, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 top-[-30%] h-[55%] bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_0%,_rgba(15,23,42,0)_68%)] blur-3xl" />
      <div className="absolute inset-x-0 bottom-[-35%] h-[60%] bg-[radial-gradient(circle,_rgba(125,211,252,0.08)_0%,_rgba(2,6,23,0)_70%)] blur-3xl" />
    </div>
  );
};

export default AnimatedBackground;
