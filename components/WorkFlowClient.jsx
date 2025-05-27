'use client';


import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  },
});



export default function AnimatedSection({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
