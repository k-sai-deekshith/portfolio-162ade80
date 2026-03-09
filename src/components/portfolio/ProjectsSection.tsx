import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  company: string;
  problem: string;
  solution: string;
  challenges: string;
  stack: string[];
  impact: string[];
  seniorSignal: string;
}

const projects: Project[] = [
  {
    title: "Sanctions Screening Platform",
    company: "PayPal",
    problem: "Compliance analysts needed a scalable, error-free way to manage complex sanctions screening rules — existing tools led to frequent configuration errors.",
    solution: "Architected a modular frontend platform with a schema-driven rule editor featuring validations, diff views, and guided workflows. Integrated a function-calling chatbot that surfaced features contextually.",
    challenges: "Building a type-safe, schema-driven editor that handled deeply nested rule structures while maintaining fast render performance on large datasets.",
    stack: ["React.js", "TypeScript", "Redux", "Spring Boot", "Cypress", "Jest", "Harness CI/CD"],
    impact: [
      "70% reduction in configuration errors",
      "80% faster rule creation time",
      "40% reduction in onboarding time via chatbot",
      "95% test coverage with CI integration",
    ],
    seniorSignal: "End-to-end frontend ownership from architecture to CI/CD, mentoring engineers, and defining API/UX contracts across teams.",
  },
  {
    title: "Enterprise Customer Portal",
    company: "Jio Platforms",
    problem: "A large-scale customer portal needed reusable components, role-based access control, and optimized performance for millions of users across multiple product teams.",
    solution: "Designed and shipped a reusable component library and RBAC system. Led a 6-member frontend team, established testing strategy, and optimized state management for high-traffic dashboards.",
    challenges: "Coordinating across multiple teams while maintaining UI consistency, enforcing access control at the component level, and reducing load times on data-heavy pages.",
    stack: ["React.js", "Redux", "Jest", "Cypress", "REST APIs", "Material-UI"],
    impact: [
      "30% faster feature delivery with reusable components",
      "20% reduction in production UI defects",
      "20% faster page load times",
      "Promoted to Team Lead within 6 months",
    ],
    seniorSignal: "Led sprint execution, architected RBAC, built shared component systems, and established testing culture for the team.",
  },
  {
    title: "Internal Analytics Dashboard",
    company: "MathWorks",
    problem: "Internal stakeholders lacked real-time visibility into key operational metrics, relying on manual reporting and static data exports.",
    solution: "Built modular, reusable React components integrated with REST APIs to deliver real-time data-driven dashboards for internal analytics.",
    challenges: "Optimizing async data flows for real-time updates while maintaining smooth rendering performance.",
    stack: ["React.js", "JavaScript", "REST APIs"],
    impact: [
      "15% improvement in developer productivity",
      "10% faster feature load times",
      "Enabled real-time analytics for stakeholders",
    ],
    seniorSignal: "Component reusability thinking and performance optimization even as an intern.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="projects" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Work</p>
        <h2 className="section-heading">Featured projects.</h2>
        <p className="section-subheading">
          Real production systems — presented as engineering case studies, not just feature lists.
        </p>
      </motion.div>

      <div className="mt-12 space-y-5">
        {projects.map((project, i) => {
          const isExpanded = expandedIdx === i;
          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                isExpanded ? "border-primary/20" : ""
              }`}
            >
              <button
                onClick={() => setExpandedIdx(isExpanded ? null : i)}
                className="w-full p-6 flex items-start justify-between text-left group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground">{project.title}</h3>
                    <span className="text-xs text-primary font-medium px-2 py-0.5 rounded-full bg-primary/10">
                      {project.company}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-1">{project.problem}</p>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-muted-foreground transition-transform duration-300 mt-1 flex-shrink-0 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Problem</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Solution</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Challenges</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{project.challenges}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Impact</p>
                        <ul className="space-y-1.5">
                          {project.impact.map((item) => (
                            <li key={item} className="text-sm text-foreground flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-2">Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs text-primary font-heading uppercase tracking-wider mb-1">Senior Signal</p>
                        <p className="text-sm text-muted-foreground italic leading-relaxed">{project.seniorSignal}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
