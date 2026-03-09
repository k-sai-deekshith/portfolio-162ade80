import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const layers = [
  {
    id: "ui",
    label: "UI Layer",
    items: ["React Components", "JSX / TSX", "CSS Modules / Tailwind", "Responsive Layouts"],
    color: "hsl(175, 75%, 45%)",
  },
  {
    id: "design-system",
    label: "Design System",
    items: ["Reusable Components", "Theme Tokens", "Variant System", "Accessibility Patterns"],
    color: "hsl(190, 70%, 45%)",
  },
  {
    id: "state",
    label: "State Management",
    items: ["Redux / Context API", "Local vs Global State", "Memoization", "Derived State"],
    color: "hsl(210, 65%, 50%)",
  },
  {
    id: "logic",
    label: "Business Logic",
    items: ["Custom Hooks", "Form Validation (Zod)", "Schema-Driven Rules", "RBAC Logic"],
    color: "hsl(230, 55%, 52%)",
  },
  {
    id: "api",
    label: "API Integration",
    items: ["REST Clients", "Error Handling", "Caching / Pagination", "Async Orchestration"],
    color: "hsl(250, 50%, 52%)",
  },
  {
    id: "quality",
    label: "Quality & Delivery",
    items: ["Jest / Cypress / Playwright", "CI/CD Pipelines", "Code Reviews", "Performance Budgets"],
    color: "hsl(270, 45%, 50%)",
  },
];

const ArchitectureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeLayer, setActiveLayer] = useState<string | null>(null);

  return (
    <section id="architecture" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">System Thinking</p>
        <h2 className="section-heading">How I architect frontends.</h2>
        <p className="section-subheading">
          I think in layers — each with clear responsibilities, interfaces, and quality contracts.
        </p>
      </motion.div>

      <div className="mt-12 max-w-3xl mx-auto space-y-3">
        {layers.map((layer, i) => {
          const isActive = activeLayer === layer.id;
          return (
            <motion.div
              key={layer.id}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              onMouseEnter={() => setActiveLayer(layer.id)}
              onMouseLeave={() => setActiveLayer(null)}
              className={`glass-card rounded-xl p-5 cursor-default transition-all duration-300 ${
                isActive ? "border-primary/30 scale-[1.01]" : ""
              }`}
              style={{
                borderLeftWidth: "3px",
                borderLeftColor: isActive ? layer.color : "transparent",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading font-semibold text-foreground flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: layer.color }}
                  />
                  {layer.label}
                </h3>
                <span className="text-xs text-muted-foreground font-heading uppercase tracking-wider">
                  Layer {i + 1}
                </span>
              </div>

              <motion.div
                initial={false}
                animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Connection arrow */}
              {i < layers.length - 1 && (
                <div className="flex justify-center mt-2 -mb-6 relative z-10">
                  <div className="w-px h-4 bg-border" />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ArchitectureSection;
