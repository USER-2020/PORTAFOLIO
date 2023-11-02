import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
          href="/Logos/logoNOBLE.svg"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Logos/logoNOBLE.svg"
        />

        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href="/Logos/logoNOBLE.svg" />
        <title>KUMANDAY STUDIOS</title>
        
      </head>
      <body>{children}</body>
    </html>
  );
}
