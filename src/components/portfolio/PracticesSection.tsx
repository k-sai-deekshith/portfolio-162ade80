import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, GitMerge, Users } from "lucide-react";

const practices = [
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Pagination, caching, async processing, and bundle optimization for data-heavy enterprise UIs.",
    metric: "35%",
    metricLabel: "runtime improvement",
  },
  {
    icon: Shield,
    title: "Test Coverage & Reliability",
    description: "Comprehensive Jest unit, Cypress integration, and Playwright E2E suites integrated into CI/CD pipelines.",
    metric: "95%",
    metricLabel: "test coverage",
  },
  {
    icon: GitMerge,
    title: "CI/CD & Automation",
    description: "Harness CI/CD and GitHub workflows for automated testing, linting, and deployment gates.",
    metric: "Zero",
    metricLabel: "manual deploys",
  },
  {
    icon: Users,
    title: "Mentoring & Standards",
    description: "Code reviews, API/UX contract documentation, and engineering practice standardization across teams.",
    metric: "6+",
    metricLabel: "engineers mentored",
  },
];

const PracticesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Engineering Rigor</p>
        <h2 className="section-heading">Quality is non-negotiable.</h2>
        <p className="section-subheading">
          Senior engineering means owning performance, reliability, and developer experience — not just features.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-5 mt-12">
        {practices.map((practice, i) => {
          const Icon = practice.icon;
          return (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.12 * i }}
              className="glass-card rounded-xl p-6 hover-lift"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={20} />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-heading font-bold text-gradient">{practice.metric}</p>
                  <p className="text-xs text-muted-foreground">{practice.metricLabel}</p>
                </div>
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{practice.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{practice.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default PracticesSection;
