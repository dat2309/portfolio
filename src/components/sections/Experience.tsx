"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experiences } from "@/data/experience";
import { staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-24 bg-bg-dark-secondary/50">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Experience" subtitle="My professional journey" />

        <motion.div
          ref={containerRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line background (static) */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 md:left-1/2 md:-translate-x-px" />

          {/* Timeline line animated (draws on scroll) */}
          <motion.div
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2 md:-translate-x-px origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
              } pl-8 md:pl-0`}
            >
              {/* Timeline dot with pulse */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                className={`absolute top-2 z-10 h-4 w-4 rounded-full border-2 border-primary bg-bg-dark ${
                  index % 2 === 0
                    ? "left-[-8px] md:left-auto md:right-[-8px]"
                    : "left-[-8px]"
                }`}
              >
                {exp.endDate === null && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/50" />
                )}
              </motion.div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                    {exp.startDate} — {exp.endDate || "Present"}
                  </span>
                  {!exp.endDate && (
                    <span className="flex items-center gap-1 text-xs text-accent-green">
                      <span className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-lg font-bold text-text-dark-primary">
                  {exp.role}
                </h3>
                <p className="text-sm text-primary-light">{exp.company}</p>

                <ul className="mt-3 space-y-2">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="flex gap-2 text-sm text-text-dark-secondary"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.04 }}
                      whileHover={{ scale: 1.1 }}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-text-dark-secondary"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
