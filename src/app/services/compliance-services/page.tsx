import React from "react";
import type { Metadata } from "next";
import ComplianceServicesClient from "./ComplianceServicesClient";

export const metadata: Metadata = {
  title: "Compliance Services | Auditclue Global Advisory Services LLC",
  description:
    "UAE compliance requirements span multiple regulatory bodies — FTA, UAE Central Bank, MOHRE, and more. Auditclue manages your compliance calendar, handles filings, and ensures your business stays fully compliant with all current UAE regulatory requirements.",
  openGraph: {
    title: "Compliance Services | Auditclue Advisory",
    description:
      "UAE regulatory compliance: AML/GoAML registration, ESR, UBO register, Bank KYC, and compliance calendar management.",
    url: "https://auditclue.com/services/compliance-services",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function ComplianceServicesPage() {
  return <ComplianceServicesClient />;
}
