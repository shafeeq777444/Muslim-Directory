"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
const smoothEase = [0.25, 0.46, 0.45, 0.94];
const gentleEase = [0.23, 1, 0.32, 1];

const faqs = [
    {
        question: "Can I promote offers or run ads through this platform?",
        answer: "Yes, premium listings include options for promotions, seasonal offers, and featured visibility on our homepage and social media channels.",
    },
    {
        question: "How does being on this directory help my business grow?",
        answer: "You gain direct access to a supportive audience actively looking to spend within the community. This leads to better brand trust, more leads, and deeper customer loyalty.",
    },
    {
        question: "How does this directory contribute to the community?",
        answer: "By circulating wealth within the community, we fund more scholarships, charity, and uplift families. The more we support each other, the stronger we become — socially, spiritually, and economically.",
    },
    {
        question: "I’m trying to find a Muslim vendor but don’t know where to look — can this help?",
        answer: "That’s exactly why we exist. Whether you're planning a wedding, hiring a contractor, or shopping for halal products, our directory helps you connect with Muslim professionals you can trust.",
    },
    {
        question: "Why is it important to support Muslim-owned businesses?",
        answer: "Every transaction is a form of empowerment. Supporting Muslim businesses helps circulate wealth within the community, create jobs, and preserve cultural values.",
    },
    {
        question: "What categories of services can I list my business under?",
        answer: "From legal services and creative professionals to trades like plumbing and tailoring — if you serve the community, there’s a category for you.",
    },
    {
        question: "How can I improve online visibility for my Muslim-owned business?",
        answer: "By listing on our Muslim business directory, your services become discoverable by users specifically searching for culturally aligned and community-based businesses. This improves your search engine presence and builds trust with your target audience.",
    },
    {
        question: "What is the benefit of adding my business to this directory?",
        answer: `Adding your business to our directory connects you with a growing community that values trust, cultural alignment, and mutual support. Our app and online platform make it easier than ever for people to discover businesses that understand their unique needs and values. 

By listing your business, you gain visibility among customers who are actively looking to support Muslim-owned enterprises — whether in their neighborhood or across regions. 

This is more than just a directory — it's a movement to strengthen our community from within. Every time someone chooses to support a fellow Muslim-owned business, we’re reinvesting in our own growth, creating more opportunities for success, and building an ecosystem of empowerment.

Whether you're a small shop owner or a seasoned professional, being part of this directory means you're contributing to a larger cause: economic upliftment, cultural pride, and solidarity.`,
    },
    {
        question: "Where can I find Muslim-friendly services near me?",
        answer: "Our search and filter features help you discover Muslim-owned businesses based on your location and service needs — from halal catering to legal advice, all in one place.",
    },
    {
        question: "What’s the vision behind creating a Muslim directory platform?",
        answer: "Our vision is simple: to build a digital economy rooted in trust, unity, and cultural pride — where every listing represents opportunity, connection, and empowerment.",
    },
];

const FAQItem = ({ faq, isOpen, onClick }) => (
    <div className="border-b border-gray-200 ">
        <button
            className="flex justify-between w-full py-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
            onClick={onClick}
        >
            {faq.question}
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="content"
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
                    className="overflow-hidden text-gray-600  whitespace-pre-wrap"
                >
                    {faq.answer}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-background">
            <section className="max-w-3xl bg-background mx-auto px-4 py-16 ">
                <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
                <div className="space-y-4 grid grid-cols-1 ">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} faq={faq} isOpen={openIndex === index} onClick={() => toggleFAQ(index)} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default FAQSection;
