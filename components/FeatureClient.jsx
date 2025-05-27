// components/BenefitsSectionClient.jsx (Client Component)
"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import FeturesHeadingAnimation from "./FeturesHeadingAnimation";

export default function BenefitsSectionClient({ benefits=[] }) {
   // Create refs for header animation
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { 
        once: true, 
        margin: "0px 0px -150px 0px",
        amount: 0.2 
    });
const [hoveredIndex, setHoveredIndex] = useState(null);
    // Smooth easing functions
    const smoothEase = [0.25, 0.46, 0.45, 0.94];
    const gentleEase = [0.23, 1, 0.32, 1];
    return (
        <div className="bg-background w-full">
            <section className="py-16 px-4 max-w-6xl mx-auto min-h-screen ">
                {/* Features indicator */}
               
                {/* Heading */}
               <FeturesHeadingAnimation>
                    <h2>Key Benefits That Empower the Global Muslim Community</h2>
                </FeturesHeadingAnimation>
                {/* Benefits grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:h-[80vh]">
                    {benefits.map((benefit, index) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, {
                            once: true,
                            margin: "0px 0px -80px 0px",
                            amount: 0.2
                        });
            
                        return (
                            <motion.div
                                key={index}
                                ref={ref}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.95
                                }}
                                animate={isInView ? {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1
                                } : {
                                    opacity: 0,
                                    y: 60,
                                    scale: 0.95
                                }}
                                transition={{
                                    duration: 1.2,
                                    ease: gentleEase,
                                    delay: index * 0.12,
                                    type: "spring",
                                    stiffness: 90,
                                    damping: 18
                                }}
                                className="flex flex-col items-center  text-center md:items-start md:text-left cursor-pointer"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <motion.div
                                    className="w-14 h-14 text-white rounded-lg flex items-center justify-center mb-5"
                                    style={{
                                        backgroundColor: hoveredIndex === index ? "#002b7a" : "#001c54",
                                    }}
                                    initial={{ scale: 0, rotate: -10 }}
                                    animate={isInView ? {
                                        scale: 1,
                                        rotate: 0
                                    } : {
                                        scale: 0,
                                        rotate: -10
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: gentleEase,
                                        delay: index * 0.12 + 0.2,
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 12
                                    }}
                                    whileHover={{
                                        scale: 1.08,
                                        transition: {
                                            duration: 0.4,
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 25
                                        }
                                    }}
                                >
                                    {benefit.icon}
                                </motion.div>
            
                                <motion.h3
                                    className="text-xl font-normal mb-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{
                                        duration: 1,
                                        ease: smoothEase,
                                        delay: index * 0.12 + 0.4,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 20
                                    }}
                                >
                                    {benefit.title}
                                </motion.h3>
            
                                <motion.p
                                    className="text-gray-600"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                                    transition={{
                                        duration: 1.1,
                                        ease: smoothEase,
                                        delay: index * 0.12 + 0.6,
                                        type: "spring",
                                        stiffness: 80,
                                        damping: 25
                                    }}
                                >
                                    {benefit.description}
                                </motion.p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}