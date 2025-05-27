"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./globals.css";
import { Toaster } from "react-hot-toast";

// export const metadata = {
//   title: "Muslim Directory",
//   description: "Discover and support Muslim businesses, professionals, and job seekers. Build a stronger Muslim community through trust, trade, and collaboration.",
// };
const queryClient=new QueryClient()
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        {/* Light mode favicon */}
        <link
          rel="icon"
          href="/favIcon-light.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
          sizes="32x32"
        />

        {/* Dark mode favicon */}
        <link
          rel="icon"
          href="/favIcon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />

        {/* Apple touch icon */}
        <link rel="apple-touch-icon" href="/apple-home-icon.png" />
      </head>
      <body
        className={`antialiased`}
      >
        <QueryClientProvider client={queryClient}>
          <Toaster reverseOrder={false} />
        {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
