import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: "Prashant Chauhan | Senior Cloud Platform Architect",
  description: "Senior Cloud Platform Architect at IBM Cloud. 19+ years designing secure, resilient platforms, secrets management, FinOps, and AI-assisted operations.",
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
