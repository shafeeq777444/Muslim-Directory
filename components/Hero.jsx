"use client"
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head"; // Import Next.js Head for SEO

const Hero = () => {
    const { scrollY } = useScroll();
    const yText = useTransform(scrollY, [0, 300], [0, -100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0.2]);
    const MotionHeader = motion("header");

    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>Muslim Directory Canada | Halal Businesses, Mosques & Islamic Services</title>
                <meta
                    name="description"
                    content="Find halal businesses, mosques, restaurants, and Islamic services across Canada. Your trusted guide to Muslim-friendly places and communities."
                />
                <meta name="author" content="The Muslim Directory Canada Team" />
                <meta
                    name="keywords"
                    content="Muslim directory, halal businesses, Islamic community, Muslim services, halal restaurants, mosques, Islamic centers"
                />
                <meta property="og:title" content="Muslim Directory - Find Halal Businesses & Community Places" />
                <meta
                    property="og:description"
                    content="Find halal businesses, mosques, and Islamic services across Canada. Connect with the Muslim community online."
                />
                <meta property="og:image" content="/hero/hero10.jpg" />
                <meta property="og:url" content="https://themuslimdirectory.ca" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Muslim Directory - Find Halal Businesses & Community Places" />
                <meta
                    name="twitter:description"
                    content="Discover Muslim community connections and find awesome halal businesses and places around the world."
                />
                <meta name="twitter:image" content="/hero/hero10.jpg" />
                <link rel="canonical" href="https://themuslimdirectory.ca" />

                {/* Structured Data for SEO */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify([
                            {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                name: "Muslim Directory",
                                url: "https://themuslimdirectory.ca",
                                description:
                                    "Find halal businesses, mosques, restaurants, and Islamic services across Canada.",
                                potentialAction: {
                                    "@type": "SearchAction",
                                    target: "https://themuslimdirectory.ca/search?q={search_term_string}",
                                    "query-input": "required name=search_term_string",
                                },
                            },
                            {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                name: "The Muslim Directory Canada",
                                url: "https://themuslimdirectory.ca",
                                logo: "https://themuslimdirectory.ca/logos/whiteLogo.svg",
                            },
                        ]),
                    }}
                />
            </Head>

            <main className="relative w-full h-[100dvh] overflow-hidden ">
                {/* Background Image */}

                {/* Dark Overlay */}
                
                    <img
                        src="/hero/hero10.jpg"
                        alt="Hero Background"
                        className="fixed -z-20 top-0 left-0 w-full h-full object-cover"
                    />
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-[-10]"/>

                {/* Hero Content */}

                <MotionHeader
                    className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-10"
                    style={{ y: yText, opacity: opacityText }}
                >
                    <div className="  p-8 rounded-3xl">
                        <img className="w-24 h-24 mx-auto mb-4" src="/logos/whiteLogo.svg" alt="Muslim Directory Logo" />
                        <h1 className="text-4xl md:text-6xl font-FMBoylar font-light drop-shadow-lg">Muslim Directory</h1>
                        <p className="text-xl md:text-2xl font-Gilroy font-light mt-2 drop-shadow">themuslimdirectory.ca</p>
                        <p className="text-lg md:text-xl font-light mt-4 max-w-2xl mx-auto drop-shadow">
                           Discover the Muslim community. Find trusted halal businesses and places across Canada.
                        </p>
                    </div>
                </MotionHeader>
            </main>
        </>
    );
};

export default Hero;
