import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, FileText } from "lucide-react";
import ArchitectureCanvas from "./ArchitectureCanvas";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p className="text-primary font-heading font-medium text-sm tracking-widest uppercase mb-4">
                Senior Frontend Engineer
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
              Building scalable
              <br />
              <span className="text-gradient">frontend systems</span>
              <br />
              that ship.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
            >
              I architect production-grade React applications with a focus on
              performance, design systems, and engineering rigor. Currently at PayPal.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Work
                  <ArrowDown size={16} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#contact">
                  <Mail size={16} />
                  Contact
                </a>
              </Button>
              <Button variant="ghost" size="lg" className="text-muted-foreground" asChild>
                <a href="#contact">
                  <FileText size={16} />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex gap-6 mt-10 text-xs text-muted-foreground font-heading tracking-wider uppercase"
            >
              <span>React</span>
              <span className="text-border">·</span>
              <span>TypeScript</span>
              <span className="text-border">·</span>
              <span>Architecture</span>
              <span className="text-border">·</span>
              <span>Performance</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block"
          >
            <ArchitectureCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
