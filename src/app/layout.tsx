import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nguyen The Dat | Fullstack & Mobile Developer",
  description:
    "Portfolio of Nguyen The Dat - Fullstack and Mobile Developer specializing in React, React Native, Android, and NestJS",
  keywords: [
    "developer",
    "portfolio",
    "react",
    "react native",
    "android",
    "nestjs",
    "fullstack",
  ],
  authors: [{ name: "Nguyen The Dat" }],
  openGraph: {
    title: "Nguyen The Dat | Fullstack & Mobile Developer",
    description: "Building seamless experiences across web and mobile",
    siteName: "Nguyen The Dat Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
