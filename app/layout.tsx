import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./favicon.ico";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Miranda Oporto - Desarrollador Web Front End",
  description:
    "Desarrollador web front end especializado en crear experiencias de usuario atractivas y funcionales.",
  openGraph: {
    title: "Daniel Miranda Oporto - Desarrollador Web Front End",
    description:
      "Portafolio de proyectos y trabajos en desarrollo web front end.",
    url: "https://danmirandadev.vercel.app", // 👈 pon aquí tu dominio en Vercel
    siteName: "Daniel Miranda Dev",
    images: [
      {
        url: "/portafolios.png", // 👈 guarda esta imagen en /public/og-image.png
        width: 1200,
        height: 630,
        alt: "Vista previa del portafolio de Daniel Miranda Oporto",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Miranda Oporto - Desarrollador Web Front End",
    description:
      "Portafolio de proyectos y trabajos en desarrollo web front end.",
    images: ["/portafolios.png"], // misma imagen que Open Graph
    creator: "@DanMirandaDev", // opcional si tienes cuenta
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

