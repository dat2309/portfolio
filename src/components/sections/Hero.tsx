"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useRef, useCallback } from "react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { GradientButton } from "@/components/ui/GradientButton";
import { profile } from "@/data/profile";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FaArrowDown } from "react-icons/fa6";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Smooth spring for spotlight
  const spotlightX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const spotlightY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Parallax on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const blob3Y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse move handler for spotlight
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY]
  );

  // Convert 0-1 to percentage for radial gradient
  const spotlightXPercent = useTransform(spotlightX, (v) => `${v * 100}%`);
  const spotlightYPercent = useTransform(spotlightY, (v) => `${v * 100}%`);

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="hero-bg absolute inset-0 bg-gradient-to-br from-bg-dark via-[#1a1a2e] to-[#16213e]" />

      {/* Mouse-following spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[1] opacity-40"
        style={{
          background: useTransform(
            [spotlightXPercent, spotlightYPercent],
            ([x, y]) =>
              `radial-gradient(600px circle at ${x} ${y}, rgba(99,102,241,0.12), transparent 60%)`
          ),
        }}
      />

      {/* Floating gradient blobs with parallax */}
      <motion.div
        style={{ y: blob1Y }}
        animate={{
          x: [0, 30, -20, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-[100px]"
      />
      <motion.div
        style={{ y: blob2Y }}
        animate={{
          x: [0, -30, 20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/20 blur-[100px]"
      />
      <motion.div
        style={{ y: blob3Y }}
        animate={{
          x: [0, 20, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]"
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content with parallax fade */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <motion.span
              className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary-light"
              whileHover={{ scale: 1.05, borderColor: "rgba(99,102,241,0.5)" }}
            >
              Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-[family-name:var(--font-heading)] text-5xl font-bold leading-tight md:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">{profile.name}</span>
          </motion.h1>

          <motion.div variants={fadeInUp} className="mt-6 flex justify-center">
            <AnimatedText
              texts={[
                "Fullstack Developer",
                "ReactJS Developer",
                "React Native Developer",
                "NestJS Backend Engineer",
                "Android Developer",
              ]}
              className="text-xl text-text-dark-secondary md:text-2xl"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-text-dark-secondary"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <GradientButton
              variant="primary"
              onClick={() =>
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </GradientButton>
            <GradientButton variant="outline" href="#contact">
              Get In Touch
            </GradientButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-text-dark-secondary"
        >
          <span className="text-xs">Scroll Down</span>
          <FaArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
