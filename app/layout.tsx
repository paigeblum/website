import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CursorTrail from "@/components/CursorTrail";

// Monospace coding font for modern developer aesthetic
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Paige Blum - AI Engineer",
  description: "Portfolio of Paige Blum, AI Engineer at Microsoft/Infinity Ward specializing in scalable systems, applied ML, and creative applications of GenAI.",
  keywords: ["AI Engineer", "Machine Learning", "Software Engineer", "GenAI", "Call of Duty"],
  authors: [{ name: "Paige Blum" }],
  openGraph: {
    title: "Paige Blum - AI Engineer",
    description: "AI Engineer specializing in scalable systems, applied ML, and creative applications of GenAI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${jetbrainsMono.variable} antialiased`}
      >
        <div className="gradient-bg" />
        <CursorTrail />
        <Navigation />
        {children}
      </body>
    </html>
  );
}