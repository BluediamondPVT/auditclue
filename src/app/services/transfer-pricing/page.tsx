import React from "react";
import type { Metadata } from "next";
import TransferPricingClient from "./TransferPricingClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Transfer Pricing Advisory & Local File Compliance UAE | Auditclue",
  description:
    "OECD and UAE Corporate Tax compliant transfer pricing services. Arm's length benchmarking, Master File and Local File documentation, related party agreements, and country-by-country reporting (CbCR).",
  keywords: [
    "Transfer Pricing services UAE",
    "Transfer pricing Master File Local File Dubai",
    "Arm's length pricing benchmarking UAE",
    "Related party transactions UAE Corporate Tax",
    "Country-by-country reporting CbCR Dubai",
    "Intercompany transfer pricing agreements",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/transfer-pricing",
  },
  openGraph: {
    title: "Transfer Pricing Advisory & Local File Compliance UAE | Auditclue",
    description:
      "Expert UAE transfer pricing documentation, related party review, Master File / Local File preparation, and arm's length benchmarking.",
    url: "https://auditclue.com/services/transfer-pricing",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function TransferPricingPage() {
  return (
    <>
      <ServiceSchema
        name="Transfer Pricing Documentation & Advisory"
        description="OECD and FTA compliant transfer pricing studies, arm's length benchmarking, Local File and Master File documentation."
        url="https://auditclue.com/services/transfer-pricing"
        serviceType="TaxConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Transfer Pricing", url: "https://auditclue.com/services/transfer-pricing" },
        ]}
      />
      <TransferPricingClient />
    </>
  );
}
