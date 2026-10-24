import React from "react";
import type { Metadata } from "next";
import ComplianceServicesClient from "./ComplianceServicesClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Regulatory Compliance Services UAE | AML, GoAML, ESR & UBO | Auditclue",
  description:
    "End-to-end UAE regulatory compliance. Anti-Money Laundering (AML) & goAML registration, Economic Substance Regulations (ESR), Ultimate Beneficial Ownership (UBO) filing, and regulatory health checks.",
  keywords: [
    "Compliance Services UAE",
    "AML compliance Dubai",
    "goAML registration UAE Ministry of Economy",
    "Economic Substance Regulations ESR reporting",
    "Ultimate Beneficial Owner UBO filing Dubai",
    "DNFBPs compliance UAE",
    "Regulatory risk audit UAE",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/compliance-services",
  },
  openGraph: {
    title: "Regulatory Compliance Services UAE | AML, GoAML, ESR & UBO | Auditclue",
    description:
      "UAE regulatory compliance: AML/GoAML registration, ESR, UBO register, Bank KYC, and compliance calendar management.",
    url: "https://auditclue.com/services/compliance-services",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function ComplianceServicesPage() {
  return (
    <>
      <ServiceSchema
        name="UAE Regulatory Compliance Services"
        description="Comprehensive compliance management: AML policy drafting, goAML reporting, ESR notifications, and UBO register filings."
        url="https://auditclue.com/services/compliance-services"
        serviceType="LegalService"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Compliance Services", url: "https://auditclue.com/services/compliance-services" },
        ]}
      />
      <ComplianceServicesClient />
    </>
  );
}
