import React from "react";
import type { Metadata } from "next";
import AuditAssuranceClient from "./AuditAssuranceClient";

export const metadata: Metadata = {
  title:
    "Statutory Audit & Assurance Services UAE | IFRS Compliant | Auditclue",
  description:
    "Independent statutory audit, IFRS financial statements preparation, internal control reviews, and Free Zone compliance audit under UAE Federal Decree-Law No. 32 of 2021. Delivered 100% digitally across Dubai, Abu Dhabi, and UAE Free Zones.",
  keywords: [
    "statutory audit UAE",
    "audit firm Dubai",
    "IFRS financial statements preparation",
    "DMCC approved auditor",
    "internal audit services UAE",
    "agreed upon procedures UAE",
    "Free Zone annual audit renewal",
  ],
  openGraph: {
    title: "Statutory Audit & Assurance Services UAE | Auditclue Advisory",
    description:
      "Independent, standards-driven statutory audit and financial assurance for UAE Mainland and Free Zone companies. IFRS compliant, bank-ready deliverables.",
    url: "https://auditclue.com/services/audit-assurance",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function AuditAssurancePage() {
  return <AuditAssuranceClient />;
}
