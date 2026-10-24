import React from "react";
import type { Metadata } from "next";
import CfoAdvisoryClient from "./CfoAdvisoryClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Virtual CFO & Financial Advisory Services UAE | Auditclue",
  description:
    "Fractional CFO and strategic financial advisory for UAE startups, scaleups, and enterprises. Financial modeling, cash flow forecasting, board reporting, bank facility structuring, and investor readiness.",
  keywords: [
    "Virtual CFO services UAE",
    "Fractional CFO Dubai",
    "Financial modeling services Dubai",
    "Cash flow forecasting UAE",
    "Board reporting MIS advisory",
    "Bank credit facility advisory Dubai",
    "Strategic finance advisory UAE",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/cfo-advisory",
  },
  openGraph: {
    title: "Virtual CFO & Financial Advisory Services UAE | Auditclue",
    description:
      "Virtual CFO services for UAE businesses: financial planning, cash flow management, budgeting, board reporting, and strategic advisory.",
    url: "https://auditclue.com/services/cfo-advisory",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CfoAdvisoryPage() {
  return (
    <>
      <ServiceSchema
        name="Virtual CFO & Strategic Financial Advisory"
        description="Executive financial leadership on a fractional model: cash flow management, financial modeling, budgeting, and bank facility structuring."
        url="https://auditclue.com/services/cfo-advisory"
        serviceType="FinancialService"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Virtual CFO Advisory", url: "https://auditclue.com/services/cfo-advisory" },
        ]}
      />
      <CfoAdvisoryClient />
    </>
  );
}
