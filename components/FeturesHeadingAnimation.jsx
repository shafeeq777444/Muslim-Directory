import React, { useRef } from "react";
import { motion, useInView} from "framer-motion";

const FeturesHeadingAnimation = ({ children }) => {
    const gentleEase = [0.23, 1, 0.32, 1];
    const smoothEase = [0.25, 0.46, 0.45, 0.94];
     const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { 
            once: true, 
            margin: "0px 0px -150px 0px",
            amount: 0.2 
        });
          
    return (<>
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
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 1.4,
                ease: gentleEase,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
                damping: 20,
            }}
            className="text-xl md:text-4xl  text-center mb-16 max-w-3xl mx-auto font-bold leading-tight"
        >
            {children}
        </motion.div>
        </>
    );
};

export default FeturesHeadingAnimation;
