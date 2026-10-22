import React from "react";
import type { Metadata } from "next";
import ComplianceCalendarClient from "./ComplianceCalendarClient";

export const metadata: Metadata = {
  title: "UAE Statutory Compliance Calendar 2026 / 2027 | Deadlines & Penalties | Auditclue",
  description:
    "Official UAE tax and regulatory compliance calendar for 2026/2027. Critical statutory deadlines for Corporate Tax Form CT6 (9-month rule), Quarterly VAT Form 201 (28 days), ESR, UBO, and Free Zone audit filing dates across all 7 Emirates.",
  keywords: [
    "UAE compliance calendar 2026",
    "UAE corporate tax deadline 2026",
    "UAE VAT return deadline",
    "DMCC audit deadline",
    "DIFC statutory audit date",
    "Cabinet Decision 49 penalties",
    "Small Business Relief 2029",
  ],
};

export default function ComplianceCalendarPage() {
  return <ComplianceCalendarClient />;
}
