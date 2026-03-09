import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { TextReveal, FadeUp, SmoothParallax } from "./AnimationUtils";

const timeline = [
  {
    type: "work" as const,
    title: "Software Developer",
    org: "PayPal",
    location: "San Jose, CA",
    dates: "Apr 2025 — Present",
    highlights: [
      "Architecting scalable sanctions screening platform with modular React/TypeScript frontend",
      "Built schema-driven rule editor reducing configuration errors by 70%",
      "Led chatbot development improving feature discoverability and onboarding",
      "Owned test automation — 95% coverage with Cypress, Jest, and Harness CI/CD",
      "Mentoring engineers and standardizing scalable UI practices across teams",
    ],
  },
  {
    type: "education" as const,
    title: "Master of Science — Software Engineering",
    org: "San Jose State University",
    location: "San Jose, CA",
    dates: "Aug 2023 — May 2025",
    highlights: [
      "Focused on software architecture, cloud computing, and enterprise systems",
    ],
  },
  {
    type: "work" as const,
    title: "Frontend Engineer",
    org: "Jio Platforms",
    location: "Mumbai, India",
    dates: "Jul 2021 — Jun 2023",
    highlights: [
      "Led sprint execution for a 6-member frontend team across multiple releases",
      "Designed reusable component libraries — 30% faster feature delivery",
      "Architected RBAC for customer portal with role-based UI rendering",
      "Established automated testing strategy — 20% fewer production defects",
      "Optimized state flows and API integration — 20% faster page loads",
    ],
  },
  {
    type: "education" as const,
    title: "Bachelor of Technology — Computer Science",
    org: "SRM Institute of Science and Technology",
    location: "Chennai, India",
    dates: "Jun 2017 — May 2021",
    highlights: [
      "Specialized in data structures, algorithms, and web technologies",
    ],
  },
  {
    type: "work" as const,
    title: "SDE Intern",
    org: "MathWorks",
    location: "Hyderabad, India",
    dates: "Jun 2020 — Jul 2020",
    highlights: [
      "Built modular React components improving internal tool usability",
      "Integrated data-driven dashboards with REST APIs for real-time analytics",
      "Optimized async data flows — 10% faster feature load times",
    ],
  },
  {
    type: "work" as const,
    title: "SDE Intern",
    org: "Timken India",
    location: "Bangalore, India",
    dates: "May 2019 — Jul 2019",
    highlights: [
      "Developed interactive internal web portal using React.js",
      "Contributed to REST API integrations and data visualization components",
      "Collaborated on cross-browser support and UI best practices",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-container">
      <SmoothParallax offset={30}>
        <FadeUp>
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Journey</p>
        </FadeUp>
        <h2 className="section-heading">
          <TextReveal>Experience & Education.</TextReveal>
        </h2>
        <FadeUp delay={0.15}>
          <p className="section-subheading">
            A progression from foundational internships to leading frontend architecture at enterprise scale.
          </p>
        </FadeUp>
      </SmoothParallax>

      <div className="mt-12 relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-[19px] top-0 bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px origin-top"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {timeline.map((item, i) => {
          const isLeft = i % 2 === 0;
          const isEducation = item.type === "education";
          const Icon = isEducation ? GraduationCap : Briefcase;
          return (
            <FadeUp
              key={item.org + item.dates}
              delay={0.15 * i}
              className={`relative mb-10 last:mb-0 pl-12 md:pl-0 md:w-1/2 ${
                isLeft ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Dot */}
              <motion.div
                className={`absolute top-1 left-[12px] w-[15px] h-[15px] rounded-full border-2 ${
                  isEducation ? 'border-accent bg-accent/20' : 'border-primary bg-background'
                } z-10 md:left-auto ${
                  isLeft ? "md:right-[-7.5px]" : "md:left-[-7.5px]"
                }`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * i + 0.2, type: "spring", stiffness: 300 }}
              />

              <motion.div
                className={`glass-card rounded-xl p-5 cursor-default ${isEducation ? 'border-accent/20' : ''}`}
                whileHover={{ y: -4, boxShadow: "var(--glow-primary)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={14} className="text-primary" />
                  <span className="text-xs text-primary font-heading font-medium">{item.dates}</span>
                  {isEducation && (
                    <span className="text-[10px] font-heading font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full ml-1">
                      EDUCATION
                    </span>
                  )}
                </div>
                <h3 className="font-heading font-semibold text-foreground text-base md:text-lg">
                  {item.title} <span className="text-muted-foreground font-normal">@ {item.org}</span>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
                <ul className="space-y-1.5">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-sm md:text-base text-secondary-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/60 mt-2.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
