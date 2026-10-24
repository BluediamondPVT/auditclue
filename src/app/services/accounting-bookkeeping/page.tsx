import React from "react";
import type { Metadata } from "next";
import AccountingBookkeepingClient from "./AccountingBookkeepingClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Cloud Accounting & Bookkeeping Services Dubai | Auditclue Advisory",
  description:
    "100% digital cloud bookkeeping across the UAE. Certified experts on Zoho Books, Xero, and QuickBooks. Monthly ledger maintenance, WPS payroll, bank reconciliations, and P&L reporting.",
  keywords: [
    "Accounting and bookkeeping Dubai",
    "Monthly Cloud Bookkeeping UAE",
    "Zoho Books accounting Dubai",
    "QuickBooks accounting services UAE",
    "Xero bookkeeping UAE",
    "Bank and credit card reconciliations",
    "WPS compliant payroll accounting UAE",
    "Backlog accounting clearance Dubai",
    "Management accounts MIS reporting",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/accounting-bookkeeping",
  },
  openGraph: {
    title: "Cloud Accounting & Bookkeeping Services Dubai | Auditclue Advisory",
    description:
      "Fully digital, scalable accounting and bookkeeping services for UAE businesses: monthly bookkeeping, MIS reporting, bank reconciliations, and year-end closing.",
    url: "https://auditclue.com/services/accounting-bookkeeping",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function AccountingBookkeepingPage() {
  return (
    <>
      <ServiceSchema
        name="Cloud Accounting & Bookkeeping Services UAE"
        description="Certified cloud accounting on Zoho, QuickBooks, and Xero. Monthly bookkeeping, bank reconciliations, VAT ledger alignment, and management accounts."
        url="https://auditclue.com/services/accounting-bookkeeping"
        serviceType="AccountingService"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Accounting & Bookkeeping", url: "https://auditclue.com/services/accounting-bookkeeping" },
        ]}
      />
      <AccountingBookkeepingClient />
    </>
  );
}
