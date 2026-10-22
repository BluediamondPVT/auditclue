import type { Metadata } from "next";
import { Lora, Kumbh_Sans, Caveat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auditclue.com"),
  title:
    "Auditclue Global Advisory Services LLC | UAE's Fully Digital Audit, Tax & Advisory Firm",
  description:
    "Business setup, statutory audit, Corporate Tax (9%), VAT, CFO advisory, and compliance — delivered end-to-end, 100% digitally across the UAE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${kumbhSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
