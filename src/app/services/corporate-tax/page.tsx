import React from "react";
import type { Metadata } from "next";
import CorporateTaxClient from "./CorporateTaxClient";

export const metadata: Metadata = {
  title: "UAE Corporate Tax Services | Auditclue Global Advisory Services LLC",
  description:
    "UAE Corporate Tax is now a reality for most businesses. Auditclue helps you navigate every aspect of corporate tax compliance — from registration and return filing to health checks, impact assessments, and strategic tax planning to minimise your liability legally.",
  openGraph: {
    title: "UAE Corporate Tax Services | Auditclue Advisory",
    description:
      "UAE Corporate Tax is now a reality for most businesses. Auditclue helps you navigate every aspect of corporate tax compliance — from registration and return filing to health checks, impact assessments, and strategic tax planning to minimise your liability legally.",
    url: "https://auditclue.com/services/corporate-tax",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CorporateTaxPage() {
  return <CorporateTaxClient />;
}
