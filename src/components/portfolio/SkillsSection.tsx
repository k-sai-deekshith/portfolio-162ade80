import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Layers, GitBranch, Gauge, TestTubes, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Foundations",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Responsive Design"],
    description: "Deep command of web fundamentals — the bedrock of every scalable UI.",
  },
  {
    icon: Layers,
    title: "Frameworks & Ecosystem",
    skills: ["React.js", "Next.js", "Angular", "Redux", "Context API"],
    description: "Production-grade experience with modern frameworks and state management at scale.",
  },
  {
    icon: GitBranch,
    title: "Architecture & Systems",
    skills: ["Component Architecture", "Design Systems", "RBAC Systems", "Modular UI Patterns", "Schema-Driven UIs"],
    description: "Designing reusable, composable systems that accelerate team delivery.",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    skills: ["Lazy Loading", "Caching Strategies", "Async Optimization", "Bundle Analysis", "Pagination at Scale"],
    description: "Measurable performance improvements on high-traffic, data-heavy applications.",
  },
  {
    icon: TestTubes,
    title: "Testing & Reliability",
    skills: ["Jest", "Cypress", "Playwright", "Mocha", "95%+ Coverage", "CI Integration"],
    description: "Test strategies that prevent regressions and maintain shipping velocity.",
  },
  {
    icon: Wrench,
    title: "Tooling & Delivery",
    skills: ["Git", "GitHub", "Jenkins", "Harness CI/CD", "Figma", "REST APIs"],
    description: "End-to-end delivery pipeline awareness — from design handoff to production deploy.",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Capabilities</p>
        <h2 className="section-heading">Engineering at every layer.</h2>
        <p className="section-subheading">
          Skills organized by senior frontend engineering capability — not just a list of tools.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          const isHovered = hoveredIdx === i;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`glass-card rounded-xl p-6 hover-lift cursor-default transition-all duration-300 ${
                isHovered ? "border-primary/30" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
                isHovered ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
              }`}>
                <Icon size={20} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{group.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
