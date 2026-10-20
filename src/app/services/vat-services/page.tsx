import React from "react";
import type { Metadata } from "next";
import VatServicesClient from "./VatServicesClient";

export const metadata: Metadata = {
  title: "UAE VAT Services | Auditclue Global Advisory Services LLC",
  description:
    "Our UAE VAT specialists provide end-to-end VAT compliance services — ensuring your business remains fully compliant with the Federal Tax Authority requirements.",
  openGraph: {
    title: "UAE VAT Services | Auditclue Advisory",
    description:
      "End-to-end VAT compliance services, registration, return filing, health checks, refunds, and FTA voluntary disclosures.",
    url: "https://auditclue.com/services/vat-services",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function VatServicesPage() {
  return <VatServicesClient />;
}
