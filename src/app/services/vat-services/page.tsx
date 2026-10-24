import React from "react";
import type { Metadata } from "next";
import VatServicesClient from "./VatServicesClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "UAE VAT Compliance & Return Filing (5%) | Auditclue Advisory Dubai",
  description:
    "FTA registered tax agents in Dubai. Complete UAE VAT compliance: VAT registration, quarterly Form 201 return filing, Voluntary Disclosure (Form 211), input VAT recovery, and customs Box 6/7 reconciliation.",
  keywords: [
    "UAE VAT compliance services",
    "VAT Registration UAE",
    "Quarterly VAT Return Filing Form 201",
    "5% VAT calculation UAE",
    "FTA Tax Audit Representation",
    "Voluntary Disclosure Form 211",
    "VAT de-registration UAE",
    "Customs VAT reconciliation Box 6 Box 7",
    "FTA Registered Tax Agent Dubai",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/vat-services",
  },
  openGraph: {
    title: "UAE VAT Compliance & Return Filing (5%) | Auditclue Advisory",
    description:
      "End-to-end VAT compliance services: registration, quarterly returns, health checks, refunds, and FTA audit representation.",
    url: "https://auditclue.com/services/vat-services",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function VatServicesPage() {
  return (
    <>
      <ServiceSchema
        name="UAE VAT Compliance & Filing Services"
        description="Comprehensive Federal Tax Authority VAT advisory: registration, Form 201 return submissions, voluntary disclosures, and refund claims."
        url="https://auditclue.com/services/vat-services"
        serviceType="TaxConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "UAE VAT Services (5%)", url: "https://auditclue.com/services/vat-services" },
        ]}
      />
      <VatServicesClient />
    </>
  );
}
