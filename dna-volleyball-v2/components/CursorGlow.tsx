"use client";

import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  });

  const { scrollYProgress } = useScroll();

  // Hero = strongest
  // Middle = softer
  // Footer = nearly invisible
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75, 1],
    [1, 0.7, 0.35, 0]
  );

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 275);
      mouseY.set(e.clientY - 275);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{
        x,
        y,
        opacity,
      }}
    >
      <div
        className="
          h-[550px]
          w-[550px]
          rounded-full
          blur-[90px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.22) 0%, rgba(168,85,247,.10) 35%, rgba(168,85,247,0) 75%)",
        }}
      />
    </motion.div>
  );
}