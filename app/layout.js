import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="portafolio empresa noble creations para desarrollos a la medida y diseño UI/UX" />
        <meta name="author" content="noble" />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon.ico.png"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/favicon.ico.png" />
        <title>NOBLE</title>
        
      </head>
      <body>{children}</body>
    </html>
  );
}
