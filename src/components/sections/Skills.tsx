"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills, skillCategories } from "@/data/skills";
import { staggerContainer, scaleIn } from "@/lib/animations";
import {
  FaReact, FaAndroid, FaNodeJs, FaGitAlt,
} from "react-icons/fa6";
import {
  SiNextdotjs, SiTypescript, SiNestjs, SiPostgresql,
  SiFirebase, SiKotlin, SiApachekafka, SiSocketdotio,
  SiMysql, SiRedis,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { HiServerStack } from "react-icons/hi2";

const iconMap: Record<string, React.ReactNode> = {
  FaReact: <FaReact size={28} />,
  FaAndroid: <FaAndroid size={28} />,
  FaNodeJs: <FaNodeJs size={28} />,
  FaGitAlt: <FaGitAlt size={28} />,
  SiNextdotjs: <SiNextdotjs size={28} />,
  SiTypescript: <SiTypescript size={28} />,
  SiNestjs: <SiNestjs size={28} />,
  SiPostgresql: <SiPostgresql size={28} />,
  SiFirebase: <SiFirebase size={28} />,
  SiKotlin: <SiKotlin size={28} />,
  SiApachekafka: <SiApachekafka size={28} />,
  SiSocketdotio: <SiSocketdotio size={28} />,
  SiGrpc: <HiServerStack size={28} />,
  SiMysql: <SiMysql size={28} />,
  SiRedis: <SiRedis size={28} />,
  TbBrandReactNative: <TbBrandReactNative size={28} />,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 bg-bg-dark-secondary/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="Skills & Tech" subtitle="Technologies I work with" />

        {/* Category filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {skillCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/25"
                  : "border border-white/10 text-text-dark-secondary hover:border-primary/30 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={scaleIn}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group relative flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-bg-dark-secondary p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}10, transparent 70%)`,
                  }}
                />

                <div className="relative" style={{ color: skill.color }}>
                  {iconMap[skill.icon] || <div className="h-7 w-7" />}
                </div>

                <span className="relative text-sm font-medium text-text-dark-primary">
                  {skill.name}
                </span>

                {/* Proficiency bar */}
                <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
