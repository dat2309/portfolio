"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const categories = [
  { key: "all", label: "All" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "fullstack", label: "Fullstack" },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Projects" subtitle="Some of my recent work" />

        {/* Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "border border-white/10 text-text-dark-secondary hover:border-primary/30 hover:text-white"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Project cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          style={{ perspective: "1200px" }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <TiltCard
                key={project.id}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-bg-dark-secondary transition-all duration-300 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <motion.div
                  variants={fadeInUp}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  {/* Image placeholder */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <span className="text-4xl">
                        {project.category === "mobile" ? "📱" : project.category === "web" ? "🌐" : "💻"}
                      </span>
                    </motion.div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 bg-bg-dark/80 backdrop-blur-sm opacity-0 transition-all duration-300 group-hover:opacity-100">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                          className="rounded-full bg-primary p-3 text-white shadow-lg shadow-primary/30"
                        >
                          <FaArrowUpRightFromSquare size={16} />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                          className="rounded-full bg-white/10 p-3 text-white backdrop-blur-sm"
                        >
                          <FaGithub size={16} />
                        </motion.a>
                      )}
                    </div>
                    {project.featured && (
                      <span className="absolute top-3 right-3 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-text-dark-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-text-dark-secondary leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary-light cursor-default transition-colors hover:bg-primary/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
