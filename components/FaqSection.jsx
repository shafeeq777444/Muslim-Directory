"use client"

import { useState } from "react";
import FAQItem from "./FaqItem";

const FAQSection = ({faqs}) => {
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

