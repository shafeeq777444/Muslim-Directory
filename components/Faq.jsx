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

import React from "react";
import FAQSection from "./FaqSection";

const Faq = () => {
    return <FAQSection faqs={faqs} />;
};

export default Faq;
