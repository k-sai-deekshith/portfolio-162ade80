import { useRef, useState } from "react";
import { motion } from "framer-motion";

const techLabels = [
  "React", "TypeScript", "Next.js", "Node.js", "Redux",
  "Docker", "AWS", "Spring Boot", "Jest",
  "MongoDB", "PostgreSQL", "Tailwind", "Angular",
  "Python", "Java", "Express", "Cypress",
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
      className="relative w-[420px] h-[420px] xl:w-[520px] xl:h-[520px] cursor-crosshair select-none"
    >
      {/* Outer glow */}
      <motion.div
        className="absolute inset-4 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(175 75% 45% / 0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: isHovering ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />

      {/* Orbiting rings */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-primary/15"
          style={{ inset: `${20 + ring * 45}px` }}
          animate={{
            rotate: ring % 2 === 0 ? [0, 360] : [360, 0],
            scale: isHovering ? 1 + ring * 0.015 : 1,
          }}
          transition={{
            rotate: { duration: 25 + ring * 12, repeat: Infinity, ease: "linear" },
            scale: { type: "spring", stiffness: 200, damping: 20 },
          }}
        >
          <motion.div
            className="absolute w-2.5 h-2.5 rounded-full bg-primary/70"
            style={{
              top: "-5px",
              left: "50%",
              marginLeft: "-5px",
              boxShadow: "0 0 16px hsl(175 75% 45% / 0.5)",
            }}
          />
          {ring < 3 && (
            <motion.div
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40"
              style={{
                bottom: "-3px",
                left: "30%",
                boxShadow: "0 0 10px hsl(175 75% 45% / 0.3)",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Central orb */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "160px",
          background: "radial-gradient(circle at 35% 35%, hsl(175 75% 55% / 0.4), hsl(195 80% 45% / 0.2), hsl(215 70% 50% / 0.1))",
          boxShadow: "0 0 80px hsl(175 75% 45% / 0.25), 0 0 160px hsl(175 75% 45% / 0.1), inset 0 0 60px hsl(175 75% 45% / 0.15)",
          backdropFilter: "blur(20px)",
          border: "1px solid hsl(175 75% 45% / 0.3)",
        }}
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 25,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ type: "spring", stiffness: 180, damping: 22 }}
      />

      {/* Inner core */}
      <motion.div
        className="absolute rounded-full"
        style={{
          inset: "185px",
          background: "radial-gradient(circle, hsl(175 75% 60% / 0.5), transparent 70%)",
        }}
        animate={{
          x: mousePos.x * 30,
          y: mousePos.y * 30,
          opacity: isHovering ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* Floating tech labels */}
      {techLabels.map((label, i) => {
        const angle = (i / techLabels.length) * Math.PI * 2;
        const radius = 170 + (i % 3) * 28;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <motion.span
            key={label}
            className="absolute text-xs font-heading font-medium text-muted-foreground/60 whitespace-nowrap pointer-events-none"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
            }}
            animate={{
              x: mousePos.x * (10 + i * 2),
              y: mousePos.y * (10 + i * 2),
              opacity: isHovering ? 0.95 : 0.5,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: i * 0.01 }}
          >
            {label}
          </motion.span>
        );
      })}

      {/* Floating particles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const angle = (i / 14) * Math.PI * 2 + Math.PI / 6;
        const radius = 80 + (i % 4) * 30;
        return (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/30"
            style={{
              left: `calc(50% + ${Math.cos(angle) * radius}px)`,
              top: `calc(50% + ${Math.sin(angle) * radius}px)`,
            }}
            animate={{
              x: mousePos.x * (6 + i * 2.5),
              y: mousePos.y * (6 + i * 2.5),
              scale: [1, 1.6, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              x: { type: "spring", stiffness: 100, damping: 20 },
              y: { type: "spring", stiffness: 100, damping: 20 },
              scale: { duration: 2.5 + i * 0.25, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2.5 + i * 0.25, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        );
      })}
    </div>
  );
};

export default InteractiveOrb;
