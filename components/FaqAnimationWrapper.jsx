"use client"
import { motion, AnimatePresence } from "framer-motion";

const smoothEase = [0.25, 0.46, 0.45, 0.94];

const FAQContent = ({ isOpen, children }) => {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                                    key="content"
                                    initial={{ height: 0, opacity: 0 }}
                                    layout
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 1.2,
                                        ease: smoothEase,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15,
                                    }}
                                    className="overflow-hidden text-gray-600  whitespace-pre-wrap"
                                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FAQContent;
