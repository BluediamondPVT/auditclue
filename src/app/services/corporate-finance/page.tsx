import React from "react";
import type { Metadata } from "next";
import CorporateFinanceClient from "./CorporateFinanceClient";

export const metadata: Metadata = {
  title: "Corporate Finance Services | Auditclue Global Advisory Services LLC",
  description:
    "Access to the right finance at the right time is critical for business growth. Our Corporate Finance team helps UAE businesses secure bank loans, trade finance, working capital facilities, and investor funding — with fully prepared documentation and proposals.",
  openGraph: {
    title: "Corporate Finance Services | Auditclue Advisory",
    description:
      "UAE corporate finance advisory: business loans, SME finance, trade finance facilities, working capital, and investor funding packs.",
    url: "https://auditclue.com/services/corporate-finance",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CorporateFinancePage() {
  return <CorporateFinanceClient />;
}
