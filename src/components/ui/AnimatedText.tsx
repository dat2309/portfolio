"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "motion/react";

interface AnimatedTextProps {
  texts: string[];
  className?: string;
}

export function AnimatedText({ texts, className = "" }: AnimatedTextProps) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseTime = 2000;

  const tick = useCallback(() => {
    const currentText = texts[index];

    if (!isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentText.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        return;
      }
    }
  }, [displayText, index, isDeleting, texts]);

  useEffect(() => {
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <div className={`${className}`}>
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-[0.15em] bg-gradient-to-b from-primary to-secondary"
      />
    </div>
  );
}
