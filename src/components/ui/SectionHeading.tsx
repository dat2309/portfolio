"use client";

import { motion } from "motion/react";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const letters = title.split("");

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold md:text-5xl">
        <span className="gradient-text">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: i * 0.03,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
              style={{ display: letter === " " ? "inline" : "inline-block" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: letters.length * 0.03 + 0.1, duration: 0.5 }}
          className="mt-4 text-lg text-text-dark-secondary"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: letters.length * 0.03 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-4 h-1 w-20 origin-left rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={align === "left" ? { marginLeft: 0 } : undefined}
      />
    </motion.div>
  );
}
