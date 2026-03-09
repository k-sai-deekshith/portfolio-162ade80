import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen } from "lucide-react";

const recognitions = [
  "Performer of the Quarter at Jio Platforms (Aug–Dec 2021)",
  "Promoted to Team Lead at Jio Platforms within 6 months (Jan 2022)",
  "Recognized at PayPal for building a chatbot that streamlined configuration workflows",
  "Performance Excellence recognition at Jio for RBAC architecture contributions",
  "Recognized for mentoring developers and strengthening engineering practices",
];

const certifications = [
  "Meta Front-End Developer Professional Certificate — Coursera",
  "Frontend Architecture and Design Systems — Udemy",
  "Advanced React Patterns — Frontend Masters",
  "TypeScript Design Patterns and Best Practices — LinkedIn Learning",
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Recognition</p>
        <h2 className="section-heading">Achievements & credentials.</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <Award size={18} className="text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Recognitions</h3>
          </div>
          <ul className="space-y-3">
            {recognitions.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="text-sm text-secondary-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                {r}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card rounded-xl p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <BookOpen size={18} className="text-primary" />
            <h3 className="font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="space-y-3">
            {certifications.map((c, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="text-sm text-secondary-foreground flex items-start gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                {c}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
