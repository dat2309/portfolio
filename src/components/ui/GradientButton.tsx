"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useCallback } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function GradientButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: GradientButtonProps) {
  const ref = useRef<HTMLElement>(null);

  // Magnetic effect: button follows cursor slightly on hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  // Glow position for hover effect
  const glowX = useMotionValue(0.5);
  const glowY = useMotionValue(0.5);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      // Magnetic pull: move button slightly toward cursor
      mouseX.set((e.clientX - centerX) * 0.15);
      mouseY.set((e.clientY - centerY) * 0.15);
      // Glow position
      glowX.set((e.clientX - rect.left) / rect.width);
      glowY.set((e.clientY - rect.top) / rect.height);
    },
    [mouseX, mouseY, glowX, glowY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
    glowX.set(0.5);
    glowY.set(0.5);
  }, [mouseX, mouseY, glowX, glowY]);

  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]: number[]) =>
      `radial-gradient(120px circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.15), transparent 60%)`
  );

  const baseClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-lg hover:shadow-primary/25",
    outline:
      "border border-primary/30 text-text-dark-primary hover:border-primary hover:bg-primary/10",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref as React.Ref<never>}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseClasses, variants[variant], className)}
    >
      {/* Hover glow overlay */}
      <motion.span
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground, opacity: useTransform(springX, (v) => (v !== 0 ? 1 : 0)) }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Component>
  );
}
