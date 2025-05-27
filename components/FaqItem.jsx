import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
const smoothEase = [0.25, 0.46, 0.45, 0.94];
const gentleEase = [0.23, 1, 0.32, 1];
const FAQItem = ({ faq, isOpen, onClick }) => (
    <article className="border-b border-gray-200">
        <button
            className="flex justify-between w-full py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
            onClick={onClick}
            aria-expanded={isOpen}
            aria-controls={`faq-${faq.question}`}
        >
            <h3 className="text-lg font-medium">{faq.question}</h3>
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.p
                    key="content"
                    id={`faq-${faq.question}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                        duration: 1.2,
                        ease: smoothEase,
                        type: "spring",
                        stiffness: 100,
                        damping: 15,
                    }}
                    className="overflow-hidden text-gray-600 whitespace-pre-wrap"
                >
                    {faq.answer}
                </motion.p>
            )}
        </AnimatePresence>
    </article>
);

export default FAQItem;
