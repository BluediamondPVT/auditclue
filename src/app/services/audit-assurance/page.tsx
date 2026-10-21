import React from "react";
import type { Metadata } from "next";
import AuditAssuranceClient from "./AuditAssuranceClient";

export const metadata: Metadata = {
  title: "Audit & Assurance Services | Auditclue Global Advisory Services LLC",
  description:
    "Auditclue provides comprehensive audit and assurance services designed to help UAE businesses meet statutory requirements, improve internal controls, and build stakeholder confidence. Our digital delivery model ensures speed, accuracy, and confidentiality across every engagement.",
  openGraph: {
    title: "Audit & Assurance Services | Auditclue Advisory",
    description:
      "Auditclue provides comprehensive audit and assurance services designed to help UAE businesses meet statutory requirements, improve internal controls, and build stakeholder confidence. Our digital delivery model ensures speed, accuracy, and confidentiality across every engagement.",
    url: "https://auditclue.com/services/audit-assurance",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function AuditAssurancePage() {
  return <AuditAssuranceClient />;
}
