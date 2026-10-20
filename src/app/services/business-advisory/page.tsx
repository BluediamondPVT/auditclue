import React from "react";
import type { Metadata } from "next";
import BusinessAdvisoryClient from "./BusinessAdvisoryClient";

export const metadata: Metadata = {
  title: "Business Advisory Services | Auditclue Global Advisory Services LLC",
  description:
    "Whether you are setting up a new company, restructuring an existing one, planning an acquisition, or preparing for exit — Auditclue provides practical business advisory tailored to your goals. We support every stage of the business lifecycle in the UAE.",
  openGraph: {
    title: "Business Advisory Services | Auditclue Advisory",
    description:
      "UAE business advisory, valuations, M&A due diligence, restructuring, corporate governance, and exit planning.",
    url: "https://auditclue.com/services/business-advisory",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function BusinessAdvisoryPage() {
  return <BusinessAdvisoryClient />;
}
