
import "./globals.css";

import ClientProviders from "@/components/Provider/ClientProvider";

export const metadata = {
  title: "Muslim Directory Canada | Free Halal Business Listings & Professional Network",
  description: "Canada's largest Muslim business directory connecting halal businesses, Islamic professionals, and job seekers. Free listings, B2B networking, local services. Join 10,000+ Muslim entrepreneurs nationwide.",
  keywords: [
    // Primary keywords
    "Muslim directory Canada",
    "halal business directory",
    "Islamic business listings",
    "Muslim professionals Canada",
    
    // Location-based keywords
    "Muslim businesses Toronto",
    "halal services Vancouver",
    "Islamic directory Calgary",
    "Muslim network Montreal",
    "halal directory Ottawa",
    
    // Service-based keywords
    "free business listing Canada",
    "B2B Muslim network",
    "halal restaurant directory",
    "Islamic wedding services",
    "Muslim real estate agents",
    "halal food suppliers",
    
    // Long-tail keywords
    "find Muslim businesses near me",
    "connect with Muslim professionals",
    "list my halal business free",
    "Muslim community directory",
    "Islamic service providers Canada"
  ].join(", "),
  
  authors: [{ name: "Muslim Directory Canada" }],
  creator: "Muslim Directory Canada",
  publisher: "Muslim Directory Canada",
  
  // Enhanced Open Graph
  openGraph: {
    title: "Muslim Directory Canada | Connect, Discover, Grow Your Halal Business",
    description: "Join Canada's premier Muslim business network. Discover halal services, connect with Islamic professionals, and grow your business in our thriving community of 10,000+ members.",
    url: "https://themuslimdirectory.ca",
    siteName: "Muslim Directory Canada",
    images: [
      {
        url: "https://res.cloudinary.com/dzznvyae4/image/upload/v1749356371/apple-home-icon_mcmudz.png",
        width: 1200,
        height: 630,
        alt: "Muslim Directory Canada - Connecting Halal Businesses and Islamic Professionals Nationwide",
      },
    ],
    locale: "en_CA",
    type: "website",
    countryName: "Canada",
  },
  
  // Enhanced Twitter/X metadata
  twitter: {
    card: "summary_large_image",
    site: "@MuslimDirCA", // Add your Twitter handle if available
    creator: "@MuslimDirCA",
    title: "Muslim Directory Canada | Halal Business Network & Professional Directory",
    description: "🇨🇦 Canada's #1 Muslim business directory. Find halal services, connect with Islamic professionals, grow your network. Join 10,000+ Muslim entrepreneurs! #HalalBusiness #MuslimCanada",
    images: [
      "https://res.cloudinary.com/dzznvyae4/image/upload/v1749356371/apple-home-icon_mcmudz.png",
    ],
  },
  
  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Additional SEO metadata
  category: "Business Directory",
  classification: "Business & Professional Services",
  
  // Structured data hints
  other: {
    "geo.region": "CA",
    "geo.placename": "Canada",
    "DC.title": "Muslim Directory Canada",
    "DC.creator": "Muslim Directory Canada",
    "DC.subject": "Muslim Business Directory, Halal Services, Islamic Professionals",
    "DC.description": "Canada's comprehensive Muslim business directory and professional network",
    "DC.publisher": "Muslim Directory Canada",
    "DC.type": "Service",
    "DC.format": "text/html",
    "DC.language": "en",
    "revisit-after": "7 days",
    "rating": "general",
    "distribution": "global",
  },
  
  // Language and locale
  alternates: {
    canonical: "https://themuslimdirectory.ca",
    languages: {
      "en-CA": "https://themuslimdirectory.ca",
      "fr-CA": "https://themuslimdirectory.ca/fr", // If you have French version
    },
  },
  
  // Additional verification and analytics preparation
  verification: {
    // google: "your-google-verification-code", // Add when you get it
    // bing: "your-bing-verification-code", // Add when you get it
  },
  
  // App-specific metadata for mobile
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Muslim Directory",
  },
  
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
};


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <ClientProviders>{children}</ClientProviders>
            </body>
        </html>
    );
}
