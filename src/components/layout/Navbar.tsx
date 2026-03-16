"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { navItems } from "@/data/navigation";
import { FaBars, FaXmark, FaSun, FaMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scrollProgress = useScrollProgress();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handler = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-accent"
          style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
        />

        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <motion.a
            href="#"
            className="font-[family-name:var(--font-heading)] text-xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            NTD
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-sm text-text-dark-secondary transition-colors hover:text-text-dark-primary"
              >
                {item.label}
              </button>
            ))}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-text-dark-secondary transition-colors hover:text-text-dark-primary hover:bg-primary/10"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            )}
          </div>

          {/* Mobile hamburger + theme toggle */}
          <div className="flex items-center gap-2 md:hidden">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="rounded-full p-2 text-text-dark-secondary transition-colors hover:text-text-dark-primary hover:bg-primary/10"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            )}
            <button
              className="rounded-lg p-2 text-text-dark-secondary hover:text-text-dark-primary"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-bg-dark/95 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => handleNavClick(item.href)}
                className="text-2xl font-semibold text-text-dark-primary hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
