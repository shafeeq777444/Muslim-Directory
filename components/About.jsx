"use client"
import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <motion.div
            // initial={{ opacity: 0, y: -20 }}
            // animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-10 bg-white rounded-t-4xl -mt-10 absolute w-full"
        >

        </motion.div>
    );
};

export default About;
