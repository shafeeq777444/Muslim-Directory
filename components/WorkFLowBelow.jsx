"use client"
import { motion } from 'framer-motion'
import React from 'react'
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

const WorkFLowBelow = () => {
  return (
    <>
        <motion.div
          className="text-center bg-white rounded-3xl p-12 shadow-lg"
          variants={fadeUp(1.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-foregroundExtra mb-4">
            Join thousands of Muslims building careers and companies that please Allah
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Start with Bismillah and grow with barakah.
          </p>
        </motion.div>
        </>
  )
}

export default WorkFLowBelow
