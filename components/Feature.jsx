
import { Building2, Users, Lightbulb, Rocket, Handshake, Search } from "lucide-react";
import BenefitsSectionClient from "./FeatureClient";


export default function BenefitsSection() {
    

    const benefits = [
        {
            icon: <Building2 size={24} />,
            title: "Halal Business Directory",
            description: "Discover, connect, and grow with trusted halal businesses around the world.",
        },
        {
            icon: <Users size={24} />,
            title: "Skilled Professionals",
            description: "Connect with talented Muslim professionals and grow your ummah-powered network.",
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Innovation Hub",
            description: "Share and discover meaningful, Shariah-compliant innovative ideas with purpose.",
        },
        {
            icon: <Rocket size={24} />,
            title: "Startup & Innovation Support",
            description: "Get expert guidance and Islamic-friendly support for your entrepreneurial journey.",
        },
        {
            icon: <Handshake size={24} />,
            title: "Business Partner Wall",
            description: "Find like-minded, values-driven business partners from across the Muslim world.",
        },
        {
            icon: <Search size={24} />,
            title: "Search by Skill or Category",
            description: "Easily find professionals, services, and startups aligned with Islamic values.",
        },
    ];

    

    return (
        <BenefitsSectionClient benefits={benefits}/>
        
    );
}