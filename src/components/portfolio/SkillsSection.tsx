import { motion } from "framer-motion";
import { TextReveal, FadeUp, StaggerContainer, StaggerItem, SmoothParallax } from "./AnimationUtils";

const skillCategories = [
  {
    title: "FRONTEND",
    skills: [
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    ],
  },
  {
    title: "BACKEND",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
  {
    title: "DATABASE",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    title: "TESTING",
    skills: [
      { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
      { name: "Cypress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg" },
      { name: "Playwright", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
      { name: "Mocha", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" },
    ],
  },
  {
    title: "TOOLS",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    ],
  },
  {
    title: "AI TOOLS",
    skills: [
      { name: "Cursor", icon: "https://www.cursor.com/favicon.ico" },
      { name: "Claude Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anthropic/anthropic-original.svg" },
      { name: "ChatGPT", icon: "https://cdn.jsdelivr.net/gh/nicehash/icons@latest/openai.svg" },
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <SmoothParallax offset={30}>
        <FadeUp>
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-3">✦ My Stack</p>
        </FadeUp>
        <h2 className="section-heading">
          <TextReveal>Skills</TextReveal>
        </h2>
        <FadeUp delay={0.15}>
          <p className="section-subheading">Technologies I work with daily to build production-grade applications.</p>
        </FadeUp>
      </SmoothParallax>

      <div className="mt-16 space-y-12">
        {skillCategories.map((category, catIdx) => (
          <FadeUp key={category.title} delay={0.08 * catIdx}>
            <div className="grid md:grid-cols-[180px_1fr] gap-6 items-start">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-muted-foreground/30 tracking-wider">
                {category.title}
              </h3>
              <StaggerContainer className="flex flex-wrap gap-3" staggerDelay={0.05}>
                {category.skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card hover:border-primary/30 transition-colors duration-300 cursor-default"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-7 h-7"
                        loading="lazy"
                      />
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
