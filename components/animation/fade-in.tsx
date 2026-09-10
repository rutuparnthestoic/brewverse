"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  amount?: number;
}

const getInitial = (
  direction: FadeInProps["direction"],
  distance: number
): Record<string, number> => {
  const base: Record<string, number> = { opacity: 0 };
  switch (direction) {
    case "up":
      return { ...base, y: distance };
    case "down":
      return { ...base, y: -distance };
    case "left":
      return { ...base, x: distance };
    case "right":
      return { ...base, x: -distance };
    case "none":
    default:
      return base;
  }
};

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 30,
  once = true,
  amount = 0.3,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={getInitial(direction, distance)}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
    >
      {children}
    </motion.div>
  );
}
