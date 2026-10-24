import React from "react";
import type { Metadata } from "next";
import CorporateFinanceClient from "./CorporateFinanceClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Corporate Finance Advisory & Business Loans Dubai | Auditclue",
  description:
    "Corporate finance advisory for UAE enterprises. Bank loan structuring, trade finance facilities (LC/LG), working capital optimization, debt restructuring, and investor financial memoranda.",
  keywords: [
    "Corporate finance advisory UAE",
    "Bank loan facilities Dubai",
    "Trade finance advisory UAE Letter of Credit",
    "Working capital finance Dubai",
    "Debt restructuring UAE",
    "Investor pitch deck financial model Dubai",
    "SME business loan advisory Dubai",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/corporate-finance",
  },
  openGraph: {
    title: "Corporate Finance Advisory & Business Loans Dubai | Auditclue",
    description:
      "UAE corporate finance advisory: business loans, SME finance, trade finance facilities, working capital, and investor funding packs.",
    url: "https://auditclue.com/services/corporate-finance",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CorporateFinancePage() {
  return (
    <>
      <ServiceSchema
        name="Corporate Finance Advisory Services UAE"
        description="Strategic debt and equity advisory: commercial bank loans, working capital facilities, trade finance lines, and debt restructuring across the UAE."
        url="https://auditclue.com/services/corporate-finance"
        serviceType="FinancialService"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Corporate Finance", url: "https://auditclue.com/services/corporate-finance" },
        ]}
      />
      <CorporateFinanceClient />
    </>
  );
}
