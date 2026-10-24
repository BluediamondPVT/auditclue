import React from "react";
import type { Metadata } from "next";
import CorporateTaxClient from "./CorporateTaxClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "UAE Corporate Tax Services (9%) | Auditclue Advisory Dubai",
  description:
    "Navigate UAE Corporate Tax with FTA Registered Tax Agents. Registration, 9% liability computation, Small Business Relief (up to AED 3M revenue), QFZP 0% status, and EmaraTax return filing.",
  keywords: [
    "UAE Corporate Tax Registration",
    "Corporate Tax Return Filing UAE",
    "9% Corporate Tax Liability Computation",
    "Small Business Relief Advisory",
    "0% Taxable Income Threshold AED 375000",
    "Corporate Tax Health Check",
    "Qualifying Free Zone Person QFZP",
    "EmaraTax corporate tax Dubai",
    "Corporate tax consultant Dubai",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/corporate-tax",
  },
  openGraph: {
    title: "UAE Corporate Tax Services (9%) | Auditclue Advisory",
    description:
      "Expert corporate tax compliance, small business relief, Free Zone 0% qualification, and return filing across the UAE.",
    url: "https://auditclue.com/services/corporate-tax",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CorporateTaxPage() {
  return (
    <>
      <ServiceSchema
        name="UAE Corporate Tax Advisory & Return Filing"
        description="Comprehensive UAE corporate tax compliance: FTA registration, 9% computation, Small Business Relief, QFZP assessment, and EmaraTax filing."
        url="https://auditclue.com/services/corporate-tax"
        serviceType="TaxConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Corporate Tax (9%)", url: "https://auditclue.com/services/corporate-tax" },
        ]}
      />
      <CorporateTaxClient />
    </>
  );
}
