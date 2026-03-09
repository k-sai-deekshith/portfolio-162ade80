import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";
import InteractiveOrb from "./InteractiveOrb";
import { CharReveal, FadeUp, MagneticButton } from "./AnimationUtils";
import { useRef } from "react";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb behind content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden lg:block z-0"
      >
        <InteractiveOrb />
      </motion.div>

      <motion.div style={{ opacity: heroOpacity, y: heroY }} className="section-container relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="font-heading text-6xl md:text-7xl lg:text-[6.5rem] font-extrabold tracking-tight leading-[0.95] mb-6">
            <span className="text-gradient">
              <CharReveal delay={2.8}>SOFTWARE</CharReveal>
            </span>
            <br />
            <CharReveal delay={3.2}>ENGINEER</CharReveal>
          </h1>

          <FadeUp delay={3.6}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Hi! I'm <span className="text-foreground font-semibold">Sai Deekshith Katukojwala</span>. A software engineer with 3+ years of experience building high-performance, scalable, and production-grade web applications.
            </p>
          </FadeUp>

          <FadeUp delay={3.9}>
            <div className="flex flex-wrap gap-4">
              <MagneticButton>
                <Button variant="hero" size="lg" asChild>
                  <a href="#experience">
                    View Work
                    <ArrowDown size={16} />
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href="#contact">
                    <Mail size={16} />
                    Contact
                  </a>
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button variant="ghost" size="lg" className="text-muted-foreground" asChild>
                  <a href="#contact">
                    <FileText size={16} />
                    Resume
                  </a>
                </Button>
              </MagneticButton>
            </div>
          </FadeUp>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
