"use client";
import About from "@/components/About";
import AnimatedOnScroll from "@/components/AnimatedScrollerOnWrapper";
import ContactSection from "@/components/ContactUs";
import FAQSection from "@/components/Faq";

import BenefitsSection from "@/components/Feature";
import BusinessOwnerForm from "@/components/form/BuisnessForm/BuisnessForm";
import MainForm from "@/components/form/MainForm";
import MuslimDirectoryForm from "@/components/form/SkillPerson";

import Hero from "@/components/Hero";
import MainButton from "@/components/MainButton";
import HowItWorks from "@/components/WorkFlow";
import { useRef } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
    const mainFormRef = useRef(null);
    return (
        <>
            <Hero />
            {/* <About /> */}
            <div className="bg-background">
                <BenefitsSection />
                <AnimatedOnScroll>
                    <HowItWorks />
                </AnimatedOnScroll>
                <div ref={mainFormRef}>
                    <AnimatedOnScroll>
                        <MainForm />
                    </AnimatedOnScroll>
                </div>
                <FAQSection />
                <ContactSection />
                <MainButton scrollToRef={mainFormRef} />
                <Toaster reverseOrder={false} />
            </div>
        </>
    );
}

// export async function getStaticProps() {
//   // You can fetch static content here
//   return {
//     props: {}, // Passed to the page component as props
//   };
// }
