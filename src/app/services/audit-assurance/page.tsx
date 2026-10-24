import React from "react";
import type { Metadata } from "next";
import AuditAssuranceClient from "./AuditAssuranceClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Statutory Audit & Assurance Services Dubai | Auditclue Advisory",
  description:
    "Ministry of Economy registered statutory auditors in the UAE. Annual IFRS financial statement audits, Free Zone trade license renewals (DMCC, DIFC, JAFZA, DAFZA), and internal audit readiness.",
  keywords: [
    "Statutory Audit Coordination UAE",
    "External Audit Readiness Support",
    "Internal Audit UAE",
    "IFRS Compliant Financial Statements",
    "DMCC approved auditor Dubai",
    "DIFC audit compliance",
    "Trade license renewal audit UAE",
    "Agreed-Upon Procedures AUP Dubai",
    "Audited financial statements Dubai",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/audit-assurance",
  },
  openGraph: {
    title: "Statutory Audit & Assurance Services Dubai | Auditclue Advisory",
    description:
      "Bank-ready IFRS audited financial statements, Free Zone trade license renewal audits, and statutory assurance across Dubai and UAE.",
    url: "https://auditclue.com/services/audit-assurance",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function AuditAssurancePage() {
  return (
    <>
      <ServiceSchema
        name="Statutory Audit & Assurance Services UAE"
        description="Independent statutory audit reports prepared under IFRS for mainland commercial law compliance, Free Zone renewals, and banking facilities."
        url="https://auditclue.com/services/audit-assurance"
        serviceType="AuditingService"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Statutory Audit & Assurance", url: "https://auditclue.com/services/audit-assurance" },
        ]}
      />
      <AuditAssuranceClient />
    </>
  );
}
