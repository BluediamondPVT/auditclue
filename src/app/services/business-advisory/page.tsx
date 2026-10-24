import React from "react";
import type { Metadata } from "next";
import BusinessAdvisoryClient from "./BusinessAdvisoryClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Business Advisory, M&A Due Diligence & Valuation UAE | Auditclue",
  description:
    "Strategic business advisory for UAE companies. Certified corporate business valuations, buy-side & sell-side M&A due diligence, operational restructuring, and corporate governance frameworks.",
  keywords: [
    "Business advisory firm UAE",
    "Business valuation Dubai",
    "M&A due diligence UAE",
    "Corporate restructuring Dubai",
    "Feasibility study consultants UAE",
    "Company exit planning Dubai",
    "Corporate governance advisory UAE",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/business-advisory",
  },
  openGraph: {
    title: "Business Advisory, M&A Due Diligence & Valuation UAE | Auditclue",
    description:
      "UAE business advisory, valuations, M&A due diligence, restructuring, corporate governance, and exit planning.",
    url: "https://auditclue.com/services/business-advisory",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function BusinessAdvisoryPage() {
  return (
    <>
      <ServiceSchema
        name="Business Advisory & M&A Due Diligence"
        description="Comprehensive business advisory: independent corporate valuations, financial due diligence, feasibility studies, and restructuring."
        url="https://auditclue.com/services/business-advisory"
        serviceType="BusinessConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Business Advisory", url: "https://auditclue.com/services/business-advisory" },
        ]}
      />
      <BusinessAdvisoryClient />
    </>
  );
}
