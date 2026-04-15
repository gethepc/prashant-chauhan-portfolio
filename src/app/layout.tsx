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
  title: "Prashant Chauhan | Cloud Architect & AI Builder",
  description: "Enterprise Cloud Architect, AI/ML Automation Builder, and Transformation Leader with 19+ years experience.",
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
