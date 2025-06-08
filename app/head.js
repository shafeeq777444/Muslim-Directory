// app/head.js

export default function Head() {
  return (
    <>
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
    </>
  );
}
