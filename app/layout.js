"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Muslim Directory",
  description: "Discover and support Muslim businesses, professionals, and job seekers. Build a stronger Muslim community through trust, trade, and collaboration.",
  openGraph: {
    title: "Muslim Directory",
    description: "Discover and support Muslim businesses, professionals, and job seekers.",
    url: "https://themuslimdirectory.ca",
    siteName: "Muslim Directory",
    images: [
      {
        url: "https://res.cloudinary.com/dzznvyae4/image/upload/v1749356371/apple-home-icon_mcmudz.png",
        width: 1200,
        height: 630,
        alt: "Muslim Directory Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muslim Directory",
    description: "Discover and support Muslim businesses, professionals, and job seekers.",
    images: ["https://res.cloudinary.com/dzznvyae4/image/upload/v1749356371/apple-home-icon_mcmudz.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const queryClient=new QueryClient()
export default function RootLayout({ children }) {
  return (
      <body
        className={`antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster reverseOrder={false} />
        {children}
        </QueryClientProvider>
      </body>
  );
}
