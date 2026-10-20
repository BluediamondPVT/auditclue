import React from "react";
import type { Metadata } from "next";
import CorporateTaxClient from "./CorporateTaxClient";

export const metadata: Metadata = {
  title:
    "UAE Corporate Tax Advisory & FTA Return Filing (9%) | Auditclue Advisory",
  description:
    "End-to-end statutory UAE Corporate Tax compliance under Federal Decree-Law No. 47 of 2022. Registration, 9% CT return filing, Small Business Relief (AED 3M), and Qualifying Free Zone Person (0%) advisory.",
  keywords: [
    "UAE corporate tax consultant",
    "corporate tax return filing Dubai",
    "FTA registered tax agent UAE",
    "Small Business Relief UAE CT",
    "qualifying free zone person corporate tax",
    "corporate tax registration UAE",
  ],
  openGraph: {
    title: "UAE Corporate Tax Advisory & Return Filing | Auditclue",
    description:
      "Statutory 9% Corporate Tax compliance, Small Business Relief, and Free Zone 0% tax structuring delivered digitally across the UAE.",
    url: "https://auditclue.com/services/corporate-tax",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CorporateTaxPage() {
  return <CorporateTaxClient />;
}
