import type { Metadata } from "next";
import { Lora, Kumbh_Sans, Caveat } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { OrganizationSchema } from "@/components/JsonLd";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const kumbhSans = Kumbh_Sans({
  variable: "--font-kumbh",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auditclue.com"),
  title: {
    default:
      "Auditclue Global Advisory Services LLC | UAE's Fully Digital Audit, Tax & Advisory Firm",
    template: "%s | Auditclue Advisory",
  },
  description:
    "UAE's 100% digital audit and tax advisory firm. Specializing in Corporate Tax (9%), statutory IFRS audit, VAT compliance (5%), Free Zone & Mainland business setup, bookkeeping, and virtual CFO advisory across Dubai, Abu Dhabi, and all Emirates.",
  keywords: [
    // Core Brand & Global Terminology
    "Fully digital audit firm UAE",
    "Corporate tax consultant Dubai",
    "Audit and assurance services UAE",
    "Accounting and bookkeeping Dubai",
    "Virtual CFO services UAE",
    "Business advisory firm UAE",
    "UAE VAT compliance services",
    "Company setup advisory Dubai",
    // UAE Corporate Tax Cluster
    "UAE Corporate Tax Registration",
    "Corporate Tax Return Filing UAE",
    "9% Corporate Tax Liability Computation",
    "Small Business Relief Advisory",
    "Qualifying Free Zone Person QFZP",
    "Corporate tax calculator UAE",
    "EmaraTax tax filing Dubai",
    // Statutory Audit Cluster
    "Statutory Audit Coordination UAE",
    "External Audit Readiness Support",
    "IFRS Compliant Financial Statements",
    "DMCC approved auditor Dubai",
    "DIFC audit compliance",
    "Audited financial statements for trade license renewal",
    // VAT Cluster
    "VAT Registration UAE",
    "VAT Return Filing Form 201",
    "5% VAT calculation UAE",
    "FTA tax audit representation",
    "Voluntary Disclosure Form 211",
    // Business Setup Cluster
    "Mainland LLC company setup Dubai",
    "UAE Free Zone company formation",
    "DMCC IFZA DAFZA setup",
    "Corporate bank account opening Dubai",
    // CFO & Compliance Cluster
    "Fractional CFO Dubai",
    "Transfer pricing local file UAE",
    "Economic substance regulations ESR UAE",
    "AML goAML compliance UAE",
  ],
  authors: [{ name: "Auditclue Global Advisory Services LLC", url: "https://auditclue.com" }],
  creator: "Auditclue Global Advisory Services LLC",
  publisher: "Auditclue Global Advisory Services LLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Auditclue Global Advisory Services LLC | UAE's Fully Digital Audit, Tax & Advisory Firm",
    description:
      "Statutory audit, Corporate Tax (9%), VAT compliance (5%), Free Zone setup, and virtual CFO advisory — delivered 100% digitally across the UAE.",
    url: "https://auditclue.com",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/hero-bg.webp",
        width: 1200,
        height: 630,
        alt: "Auditclue UAE Digital Audit, Tax & Corporate Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Auditclue Global Advisory Services LLC | UAE's Fully Digital Audit, Tax & Advisory Firm",
    description:
      "100% digital audit, tax and corporate advisory firm across Dubai, Abu Dhabi, and UAE Free Zones.",
    images: ["/images/hero-bg.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
      <head>
        <OrganizationSchema />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.webp"
          type="image/webp"
          fetchPriority="high"
          media="(min-width: 1024px)"
        />
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-mobile.webp"
          type="image/webp"
          fetchPriority="high"
          media="(max-width: 1023px)"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
