"use client";

import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education } from "@/data/education";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FaGraduationCap } from "react-icons/fa6";

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading title="Education" subtitle="My academic background" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="group rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-primary">
                  <FaGraduationCap size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-text-dark-primary">
                      {edu.institution}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary-light">
                      {edu.startDate} — {edu.endDate}
                    </span>
                  </div>
                  <p className="text-sm text-primary-light">
                    {edu.degree} in {edu.field}
                  </p>
                  {edu.description && (
                    <p className="mt-2 text-sm text-text-dark-secondary">
                      {edu.description}
                    </p>
                  )}
                  {edu.achievements && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-accent-green/20 bg-accent-green/5 px-3 py-1 text-xs text-accent-green"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
