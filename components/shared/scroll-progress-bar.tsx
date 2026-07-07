"use client";

import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const animatedProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.22,
  });
  const progress = prefersReducedMotion ? scrollYProgress : animatedProgress;
  const clipInsetTop = useTransform(progress, [0, 1], ["100%", "0%"]);
  const clipPath = useMotionTemplate`inset(${clipInsetTop} 0 0 0 round 999px)`;
  const auraOpacity = useTransform(progress, [0, 0.08, 1], [0.16, 0.34, 0.9]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-[-0.45rem] z-30 flex items-center sm:right-0 sm:pr-2 lg:pr-4"
    >
      <div className="relative h-[11rem] w-[4.25rem] sm:h-[13.5rem] sm:w-[5.25rem] lg:h-[17rem] lg:w-[6.25rem]">
        <motion.div
          className="absolute inset-y-5 left-2 w-10 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,194,208,0.52),transparent_72%)] blur-2xl sm:left-3 sm:w-12"
          style={{ opacity: auraOpacity }}
        />

        <div className="absolute inset-0 bg-[url('/images/progress-bar.png')] bg-[length:auto_100%] bg-left-center bg-no-repeat opacity-25 [filter:grayscale(1)_brightness(.72)]" />

        <motion.div
          className="absolute inset-0 bg-[url('/images/progress-bar.png')] bg-[length:auto_100%] bg-left-center bg-no-repeat drop-shadow-[0_0_28px_rgba(255,181,198,0.52)]"
          style={{ clipPath }}
        />
      </div>
    </div>
  );
}
