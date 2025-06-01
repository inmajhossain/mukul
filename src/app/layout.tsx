import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/layout-components/header/Header";
import Footer from "@/components/layout-components/footer/Footer";

const inter = localFont({
  src: "../fonts/InterFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
});

const manrope = localFont({
  src: "../fonts/ManropeFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
  variable: "--font-manrope",
});

const lobster = localFont({
  src: "../fonts/Lobster.ttf",
  // Weight: "400, 500, 600, 700, 800",
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Mukul",
  description: "Website Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${manrope.variable} ${lobster.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
