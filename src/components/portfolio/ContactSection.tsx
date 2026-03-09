import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { icon: Mail, label: "Email", href: "mailto:ksaideekshith16@gmail.com", display: "ksaideekshith16@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sai-deekshith-katukojwala-baa88a14b/", display: "linkedin.com/in/sai-deekshith" },
  { icon: Github, label: "GitHub", href: "https://github.com/k-sai-deekshith", display: "github.com/k-sai-deekshith" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-container" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto"
      >
        <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">Contact</p>
        <h2 className="section-heading">Let's build something.</h2>
        <p className="text-muted-foreground mt-2 mb-10">
          Open to frontend roles, architecture-focused opportunities, and interesting engineering challenges.
        </p>

        <div className="space-y-4">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 * i }}
                className="flex items-center justify-between glass-card rounded-xl px-6 py-4 hover-lift group"
              >
                <div className="flex items-center gap-3">
                  <Icon size={18} className="text-primary" />
                  <span className="text-sm font-medium text-foreground">{link.label}</span>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {link.display}
                </span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <Button variant="hero-outline" size="lg" asChild>
            <a href="mailto:ksaideekshith16@gmail.com">
              <FileText size={16} />
              Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xs text-muted-foreground mt-16"
        >
          Designed & built by Sai Deekshith Katukojwala · {new Date().getFullYear()}
        </motion.p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
