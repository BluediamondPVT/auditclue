import React from "react";
import type { Metadata } from "next";
import TechnologyDigitalClient from "./TechnologyDigitalClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Digital Finance & E-Invoicing Peppol Advisory UAE | Auditclue",
  description:
    "Future-proof your UAE finance function. Certified cloud ERP implementation (Zoho Books, QuickBooks, Xero, NetSuite) and UAE E-Invoicing System (EES) Peppol integration.",
  keywords: [
    "Technology and digital finance UAE",
    "UAE e-invoicing Peppol mandate",
    "Zoho Books implementation Dubai",
    "QuickBooks online setup UAE",
    "Accounting software migration UAE",
    "Cloud ERP integration Dubai",
    "Automated financial reporting dashboards",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/technology-digital",
  },
  openGraph: {
    title: "Digital Finance & E-Invoicing Peppol Advisory UAE | Auditclue",
    description:
      "UAE digital finance advisory: Zoho Books, QuickBooks, Xero, ERP advisory, Peppol e-invoicing readiness, and automated financial dashboards.",
    url: "https://auditclue.com/services/technology-digital",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function TechnologyDigitalPage() {
  return (
    <>
      <ServiceSchema
        name="Technology & Digital Finance Advisory"
        description="End-to-end digital finance transformation: cloud accounting implementation, API integrations, and UAE Peppol e-invoicing compliance."
        url="https://auditclue.com/services/technology-digital"
        serviceType="TechConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Technology & Digital Finance", url: "https://auditclue.com/services/technology-digital" },
        ]}
      />
      <TechnologyDigitalClient />
    </>
  );
}
