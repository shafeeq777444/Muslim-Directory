"use client"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function AnimatedOnScroll({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const smoothEase = [0.25, 0.46, 0.45, 0.94]; // same as BenefitsSection

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40, },
        visible: {
          opacity: 1,
          y: 0,

          transition: {
            duration: 0.7,
            ease: smoothEase,
            type: "spring",
            stiffness: 80,
            damping: 20,
            // delay: 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
