import React from "react";
import type { Metadata } from "next";
import FreezoneVsMainlandClient from "./FreezoneVsMainlandClient";

export const metadata: Metadata = {
  title: "Mainland vs Free Zone UAE Comparison Guide 2026 | Domiciliation & Tax | Auditclue",
  description:
    "Comprehensive guide comparing Dubai Mainland DED vs UAE Free Zones across 10 statutory dimensions: 100% foreign ownership, 9% Corporate Tax vs 0% QFZP, local trading rights, visa quotas, and bank KYC approval velocity.",
  keywords: [
    "Mainland vs Freezone UAE",
    "Dubai Mainland 100% foreign ownership",
    "QFZP 0% corporate tax freezone",
    "UAE company formation guide",
    "DMCC vs Mainland LLC",
    "DIFC vs DED Dubai",
    "Auditclue corporate setup advisory",
  ],
};

export default function FreezoneVsMainlandPage() {
  return <FreezoneVsMainlandClient />;
}
