import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "../fonts/InterFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
});

const manrope = localFont({
  src: "../fonts/ManropeFont.ttf",
  // Weight: "400, 500, 600, 700, 800",
  variable: "--font-manrope",
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
      <body className={`${inter.className} ${manrope.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
