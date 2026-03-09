import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { year: "2017", text: "Started CS at IIT Palakkad — built strong foundations in algorithms, systems, and software design." },
  { year: "2019–20", text: "Interned at Timken and MathWorks — first production React experience, building internal tools and dashboards." },
  { year: "2021", text: "Joined Jio Platforms as Frontend Engineer — built reusable component libraries and led a 6-member team." },
  { year: "2023", text: "Pursued MS in Software Engineering at San Jose State University — deepened expertise in architecture and scalable systems." },
  { year: "2025", text: "Joined PayPal — architecting scalable compliance platforms, leading cross-team frontend initiatives." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">About</p>
        <h2 className="section-heading">
          Engineer first.<br />
          <span className="text-muted-foreground">Architect by practice.</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-secondary-foreground leading-relaxed"
        >
          <p>
            I'm a frontend engineer with 3+ years of production experience building scalable web applications
            at companies like <span className="text-foreground font-medium">PayPal</span> and{" "}
            <span className="text-foreground font-medium">Jio Platforms</span>. My work sits at the
            intersection of frontend architecture, reusable design systems, and measurable engineering impact.
          </p>
          <p>
            I don't just build UIs — I design component systems, establish testing strategies, optimize
            performance at scale, and mentor engineers toward consistent quality. I've led sprint execution
            for cross-functional teams and driven architectural decisions that reduced defects, accelerated
            delivery, and improved developer experience.
          </p>
          <p>
            I hold a Master's in Software Engineering from San Jose State University and a Bachelor's in
            Computer Science from IIT Palakkad. I bring both academic depth and real-world shipping
            experience to every system I build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative pl-8 border-l border-border">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="mb-6 last:mb-0 relative"
              >
                <div className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-primary/60 border-2 border-background" />
                <p className="text-primary font-heading text-sm font-semibold mb-1">{m.year}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
