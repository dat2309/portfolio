"use client";

import Image from "next/image";
import avtImg from "../../../public/images/avt.jpg";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/lib/animations";

function AnimatedCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/\d/g, "");

  // Spring-based counter animation
  const springValue = useSpring(0, { stiffness: 50, damping: 20, mass: 1 });
  const displayValue = useTransform(springValue, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <motion.div
      ref={ref}
      className="text-center group"
      whileHover={{ scale: 1.1, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <div className="font-[family-name:var(--font-heading)] text-3xl font-bold gradient-text flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="mt-1 text-sm text-text-dark-secondary">{label}</div>
      {/* Animated underline on hover */}
      <motion.div
        className="mx-auto mt-2 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary rounded-full"
        whileHover={{ width: "80%" }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Image */}
          <motion.div variants={slideInLeft} className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="h-80 w-80 rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-[2px]">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={avtImg}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    sizes="320px"
                    priority
                    placeholder="blur"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-20 w-20 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-secondary/20 blur-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={slideInRight} className="flex flex-col justify-center">
            {profile.bio.map((paragraph, i) => (
              <motion.p
                key={i}
                variants={fadeInUp}
                className="mb-4 text-text-dark-secondary leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Fun facts / stats */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4"
            >
              {profile.funFacts.map((fact) => (
                <AnimatedCounter key={fact.label} value={fact.value} label={fact.label} />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
