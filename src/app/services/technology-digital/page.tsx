import React from "react";
import type { Metadata } from "next";
import TechnologyDigitalClient from "./TechnologyDigitalClient";

export const metadata: Metadata = {
  title:
    "Technology & Digital Finance Services | Auditclue Global Advisory Services LLC",
  description:
    "We help businesses transition to digital finance — implementing accounting software, automating workflows, and preparing for UAE e-invoicing mandates. Our technology advisory ensures your finance function is efficient, accurate, and future-ready.",
  openGraph: {
    title: "Technology & Digital Finance | Auditclue Advisory",
    description:
      "UAE digital finance advisory: Zoho Books, QuickBooks, Xero, ERP advisory, Peppol e-invoicing readiness, and automated financial dashboards.",
    url: "https://auditclue.com/services/technology-digital",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function TechnologyDigitalPage() {
  return <TechnologyDigitalClient />;
}
