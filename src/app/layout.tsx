import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { siteUrl, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Prashant Chauhan | Senior Cloud Platform Architect & AI Automation Leader",
  description:
    "Prashant Chauhan is a Bengaluru-based Senior Cloud Platform Architect at IBM Cloud with 20+ years in multi-cloud, AI automation, AIOps, security, and FinOps.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Prashant Chauhan | Senior Cloud Platform Architect & AI Automation Leader",
    description:
      "Bengaluru-based cloud and AI architect with 20+ years designing secure, resilient enterprise platforms.",
    images: [siteUrl("prashant-chauhan.jpg")],
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
