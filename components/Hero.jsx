"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 300], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.2]);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero/hero9.jpg"
        alt="Hero Background"
        className="fixed -z-20 top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-10]" />

      {/* Hero Content */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="  p-8 rounded-3xl">
          <img
            className="w-24 h-24 mx-auto mb-4"
            src="/logos/whiteLogo.svg"
            alt="Muslim Directory Logo"
          />
          <h1 className="text-4xl md:text-6xl font-FMBoylar font-light drop-shadow-lg">
            Muslim Directory
          </h1>
          <p className="text-xl md:text-2xl font-Gilroy font-light mt-2 drop-shadow">
            themuslimdirectory.ca
          </p>
          <p className="text-lg md:text-xl font-light mt-4 max-w-2xl mx-auto drop-shadow">
            Discover Muslim community. Find awesome halal businesses and places around the world.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
