import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "ARVEX Holdings LLC | Luxury E‑Commerce",
  description: "Luxury minimal e-commerce landing page for ARVEX Holdings LLC."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-beige text-espresso">{children}</body>
    </html>
  );
}
