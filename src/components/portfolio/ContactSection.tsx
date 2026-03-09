import { motion } from "framer-motion";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextReveal, FadeUp, MagneticButton, StaggerContainer, StaggerItem } from "./AnimationUtils";

const links = [
  { icon: Mail, label: "Email", href: "mailto:ksaideekshith16@gmail.com", display: "ksaideekshith16@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sai-deekshith-katukojwala-baa88a14b/", display: "linkedin.com/in/sai-deekshith" },
  { icon: Github, label: "GitHub", href: "https://github.com/k-sai-deekshith", display: "github.com/k-sai-deekshith" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-container">
      <div className="text-center max-w-xl mx-auto">
        <FadeUp>
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Contact</p>
        </FadeUp>
        <h2 className="section-heading">
          <TextReveal>Let's build something.</TextReveal>
        </h2>
        <FadeUp delay={0.15}>
          <p className="text-muted-foreground mt-2 mb-10">
            Open to frontend roles, architecture-focused opportunities, and interesting engineering challenges.
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-4" staggerDelay={0.1}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <StaggerItem key={link.label}>
                <motion.a
                  href={link.href}
                  target={link.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between glass-card rounded-xl px-6 py-4 group cursor-pointer"
                  whileHover={{ y: -4, boxShadow: "var(--glow-primary)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">{link.label}</span>
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                    {link.display}
                  </span>
                </motion.a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeUp delay={0.4}>
          <div className="mt-8">
            <MagneticButton>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="mailto:ksaideekshith16@gmail.com">
                  <FileText size={16} />
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <p className="text-xs text-muted-foreground mt-16">
            Designed & built by Sai Deekshith Katukojwala · {new Date().getFullYear()}
          </p>
        </FadeUp>
      </div>
    </section>
  );
};

export default ContactSection;
