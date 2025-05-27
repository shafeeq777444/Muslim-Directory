
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function HoverLogoButton({ scrollToRef }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (scrollToRef?.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      className={`bg-foreground z-100 ${isMobile?'right-4 bottom-4':"right-10 bottom-10"} cursor-pointer scale-75 fixed   text-white rounded-full font-medium flex items-center overflow-hidden hover:bg-foregroundExtra transition-colors duration-300 shadow-lg`}
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        paddingLeft: isHovered ? "0.75rem" : "1.25rem",
        paddingRight: isHovered ? "0.75rem" : "1.25rem",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{ paddingTop: "0.75rem", paddingBottom: "0.75rem" }}
      aria-label="Get in touch"
    >
      <motion.div
        className="w-6 h-10 flex items-center justify-center"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src="/logos/whiteLogo.svg"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
      </motion.div>
      <motion.div
        className="items-center gap-2 ml-3 whitespace-nowrap hidden md:flex"
        animate={{
          opacity: isHovered ? 0 : 1,
          x: isHovered ? 20 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <span>Get in touch</span>
        <ArrowRight className="w-4 h-4" />
      </motion.div>
    </motion.button>
  );
}
