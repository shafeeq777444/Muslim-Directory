
import "./globals.css";

export const metadata = {
  title: "Muslim Directory",
  description: "Discover and support Muslim businesses, professionals, and job seekers. Build a stronger Muslim community through trust, trade, and collaboration.",
};

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
        {children}
      </body>
    </html>
  );
}
