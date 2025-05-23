"use client";
import { useRef, useState } from "react";
import { Building2, Users, Lightbulb, Rocket, Handshake, Search } from "lucide-react";
import { motion, useInView } from "framer-motion";

export default function BenefitsSection() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const benefits = [
        {
            icon: <Building2 size={24} />,
            title: "Halal Business Directory",
            description: "Discover, connect, and grow with trusted halal businesses around the world.",
        },
        {
            icon: <Users size={24} />,
            title: "Skilled Professionals",
            description: "Connect with talented Muslim professionals and grow your ummah-powered network.",
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Innovation Hub",
            description: "Share and discover meaningful, Shariah-compliant innovative ideas with purpose.",
        },
        {
            icon: <Rocket size={24} />,
            title: "Startup & Innovation Support",
            description: "Get expert guidance and Islamic-friendly support for your entrepreneurial journey.",
        },
        {
            icon: <Handshake size={24} />,
            title: "Business Partner Wall",
            description: "Find like-minded, values-driven business partners from across the Muslim world.",
        },
        {
            icon: <Search size={24} />,
            title: "Search by Skill or Category",
            description: "Easily find professionals, services, and startups aligned with Islamic values.",
        },
    ];

    // Create refs for header animation
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { 
        once: true, 
        margin: "0px 0px -150px 0px",
        amount: 0.2 
    });

    // Smooth easing functions
    const smoothEase = [0.25, 0.46, 0.45, 0.94];
    const gentleEase = [0.23, 1, 0.32, 1];

    return (
        <div className="bg-background w-full">
            <section className="py-16 px-4 max-w-6xl mx-auto min-h-screen ">
                {/* Features indicator */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{
                        duration: 1.2,
                        ease: smoothEase,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                    }}
                    className="flex justify-center absolute bg-white rounded-t-4xl -mt-10 mb-6 text-foregroundExtra"
                >
            
                </motion.div>
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{
                        duration: 1.4,
                        ease: gentleEase,
                        delay: 0.3,
                        type: "spring",
                        stiffness: 80,
                        damping: 20
                    }}
                    className="text-xl md:text-4xl  text-center mb-16 max-w-3xl mx-auto font-bold leading-tight"
                >
                    Key Benefits That Empower the Global Muslim Community
                </motion.h2>
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
                                className="flex flex-col items-center text-center md:items-start md:text-left cursor-pointer"
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