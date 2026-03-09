import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mt-10 space-y-5 text-secondary-foreground leading-relaxed"
      >
        <p>
          I'm a frontend engineer with 3+ years of production experience building scalable web applications. My work sits at the intersection of frontend architecture, reusable design systems, and measurable engineering impact.
        </p>
        <p>
          I don't just build UIs — I design component systems, establish testing strategies, optimize performance at scale, and mentor engineers toward consistent quality. I've led sprint execution for cross-functional teams and driven architectural decisions that reduced defects, accelerated delivery, and improved developer experience.
        </p>
        <p>
          I hold a Master's in Software Engineering and a Bachelor's in Computer Science. I bring both academic depth and real-world shipping experience to every system I build.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
