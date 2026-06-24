"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  ReactNode,
  MouseEvent,
} from "react";

type Props = {
  children: ReactNode;
};

export default function InteractiveImage({
  children,
}: Props) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springX = useSpring(rotateX, {
    stiffness: 140,
    damping: 18,
  });

  const springY = useSpring(rotateY, {
    stiffness: 140,
    damping: 18,
  });

  function handleMove(
    e: MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    rotateY.set((x - centerX) / 25);
    rotateX.set(-(y - centerY) / 25);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}