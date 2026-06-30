import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Single confident sans family for both display and body — closer to the
// SF Pro Display/Text pairing Apple uses, rather than mixing a serif in.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cameron Liquori — Content Designer",
  description:
    "Cameron Liquori is an L4 Content Designer with five years of experience leading 0→1 systems, growth programs, and product strategy through content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
