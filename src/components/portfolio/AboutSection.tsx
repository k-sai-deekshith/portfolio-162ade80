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

      <div className="max-w-3xl mt-10 space-y-6 text-secondary-foreground text-base md:text-lg leading-relaxed">
        <FadeUp delay={0.1}>
          <p>
            Frontend engineer with <span className="text-foreground font-semibold">3+ years of production experience</span> building <span className="text-foreground font-semibold">scalable web applications</span>. I work at the intersection of <span className="text-primary font-semibold">frontend architecture</span>, <span className="text-primary font-semibold">reusable design systems</span>, and <span className="text-primary font-semibold">measurable engineering impact</span>.
          </p>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p>
            Beyond building UIs — I design <span className="text-foreground font-semibold">component systems</span>, establish <span className="text-foreground font-semibold">testing strategies</span>, optimize performance at scale, and mentor engineers toward consistent quality. I hold a <span className="text-foreground font-semibold">Master's in Software Engineering</span> and a <span className="text-foreground font-semibold">Bachelor's in Computer Science</span>.
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

export default AboutSection;
