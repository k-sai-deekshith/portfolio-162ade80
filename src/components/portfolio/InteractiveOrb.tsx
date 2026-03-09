import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const techLabels = [
  "React", "TypeScript", "Next.js", "Node.js", "Redux",
  "Docker", "AWS", "GraphQL", "CI/CD", "REST",
  "Jest", "MongoDB", "PostgreSQL", "Tailwind",
];

const InteractiveOrb = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => { setIsHovering(false); setMousePos({ x: 0, y: 0 }); }}
      className="relative w-[420px] h-[420px] cursor-crosshair select-none"
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-8 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(175 75% 45% / 0.06) 0%, transparent 70%)",
        }}
        animate={{
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />

      {/* Orbiting rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-primary/10"
          style={{
            inset: `${40 + ring * 35}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: isHovering ? 1 + ring * 0.02 : 1,
          }}
          transition={{
            rotate: { duration: 20 + ring * 10, repeat: Infinity, ease: "linear" },
            scale: { type: "spring", stiffness: 200, damping: 20 },
          }}
        >
          {/* Orbiting dot */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              top: "-4px",
              left: "50%",
              marginLeft: "-4px",
              boxShadow: "0 0 12px hsl(175 75% 45% / 0.4)",
            }}
          />
        </motion.div>
      ))}

      {/* Central orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "130px",
          background: "radial-gradient(circle at 35% 35%, hsl(175 75% 55% / 0.3), hsl(195 80% 45% / 0.15), hsl(215 70% 50% / 0.08))",
          boxShadow: "0 0 60px hsl(175 75% 45% / 0.15), inset 0 0 40px hsl(175 75% 45% / 0.1)",
          backdropFilter: "blur(20px)",
          border: "1px solid hsl(175 75% 45% / 0.2)",
        }}
        animate={{
          x: mousePos.x * 20,
          y: mousePos.y * 20,
          scale: isHovering ? 1.08 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Inner core glow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "155px",
          background: "radial-gradient(circle, hsl(175 75% 60% / 0.4), transparent 70%)",
        }}
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 25,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Floating tech labels */}
      {techLabels.map((label, i) => {
        const angle = (i / techLabels.length) * Math.PI * 2;
        const radius = 155 + (i % 3) * 25;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.span
            key={label}
            className="absolute text-[10px] font-heading font-medium text-muted-foreground/60 whitespace-nowrap pointer-events-none"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: mousePos.x * (8 + i * 2),
              y: mousePos.y * (8 + i * 2),
              opacity: isHovering ? 0.9 : 0.4,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.01 }}
          >
            {label}
          </motion.span>
        );
      })}

      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i / 12) * Math.PI * 2 + Math.PI / 6;
        const radius = 80 + (i % 4) * 30;
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
            }}
            animate={{
              x: mousePos.x * (5 + i * 3),
              y: mousePos.y * (5 + i * 3),
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 },
              scale: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveOrb;
