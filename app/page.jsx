

import AnimatedOnScroll from "@/components/AnimatedScrollerOnWrapper";
import ContactSection from "@/components/ContactUs";
import FAQSection from "@/components/Faq";
import BenefitsSection from "@/components/Feature";
import ButtonAForm from "@/components/form/ButtonAForm";
import Hero from "@/components/Hero";

import HowItWorks from "@/components/WorkFlow";


export default function Home() {
    
    return (
        <>
            <Hero />
            <div className="bg-background">
                <BenefitsSection />
                <AnimatedOnScroll>
                    <HowItWorks />
                </AnimatedOnScroll>
                <ButtonAForm/>
                <FAQSection />
                <ContactSection />
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
