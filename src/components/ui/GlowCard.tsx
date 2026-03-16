"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({
  children,
  className,
  glowColor = "rgba(99,102,241,0.15)",
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const glowOpacity = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 30 });
  const smoothOpacity = useSpring(glowOpacity, { stiffness: 200, damping: 30 });

  // Create dynamic gradient strings using useTransform
  const borderGlow = useTransform(
    [smoothX, smoothY],
    ([x, y]: number[]) =>
      `radial-gradient(400px circle at ${(x as number) * 100}% ${(y as number) * 100}%, ${glowColor}, transparent 60%)`
  );

  const innerGlow = useTransform(
    [smoothX, smoothY],
    ([x, y]: number[]) =>
      `radial-gradient(250px circle at ${(x as number) * 100}% ${(y as number) * 100}%, ${glowColor.replace("0.15", "0.06")}, transparent 60%)`
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
      glowOpacity.set(1);
    },
    [mouseX, mouseY, glowOpacity]
  );

  const handleMouseLeave = useCallback(() => {
    glowOpacity.set(0);
  }, [glowOpacity]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn("relative overflow-hidden rounded-xl", className)}
    >
      {/* Glow border effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl"
        style={{ opacity: smoothOpacity, background: borderGlow }}
      />
      {/* Inner glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl"
        style={{ opacity: smoothOpacity, background: innerGlow }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
