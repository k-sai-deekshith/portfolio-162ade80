import { useRef } from "react";
import { TextReveal, FadeUp, SmoothParallax } from "./AnimationUtils";

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <SmoothParallax offset={30}>
        <FadeUp>
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">About</p>
        </FadeUp>
        <h2 className="section-heading">
          <TextReveal>Engineer first.</TextReveal>
          <br />
          <span className="text-muted-foreground">
            <TextReveal delay={0.3}>Architect by practice.</TextReveal>
          </span>
        </h2>
      </SmoothParallax>

      <div className="max-w-3xl mt-10 space-y-5 text-secondary-foreground leading-relaxed">
        <FadeUp delay={0.1}>
          <p>
            I'm a frontend engineer with 3+ years of production experience building scalable web applications. My work sits at the intersection of frontend architecture, reusable design systems, and measurable engineering impact.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p>
            I don't just build UIs — I design component systems, establish testing strategies, optimize performance at scale, and mentor engineers toward consistent quality. I've led sprint execution for cross-functional teams and driven architectural decisions that reduced defects, accelerated delivery, and improved developer experience.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <p>
            I hold a Master's in Software Engineering and a Bachelor's in Computer Science. I bring both academic depth and real-world shipping experience to every system I build.
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

export default AboutSection;
