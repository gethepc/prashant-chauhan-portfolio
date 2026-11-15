import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const basePath =
  process.env.NODE_ENV === "production" ? "/prashant-chauhan-portfolio" : "";
const siteOrigin = "https://gethepc.github.io";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("/prashant-chauhan-portfolio", siteOrigin),
  title: "Prashant Chauhan | Senior Cloud Platform Architect",
  description: "Senior Cloud Platform Architect at IBM Cloud. 20+ years designing secure, resilient platforms, secrets management, FinOps, and AI-assisted operations.",
  openGraph: {
    title: "Prashant Chauhan | Senior Cloud Platform Architect",
    description: "Senior Cloud Platform Architect at IBM Cloud.",
    images: [new URL(`${basePath}/prashant-chauhan.jpg`, siteOrigin)],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
