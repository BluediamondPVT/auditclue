import React from "react";
import type { Metadata } from "next";
import CfoAdvisoryClient from "./CfoAdvisoryClient";

export const metadata: Metadata = {
  title: "CFO & Finance Advisory | Auditclue Global Advisory Services LLC",
  description:
    "Our Virtual CFO services give SMEs and growing businesses access to senior-level financial expertise without the cost of a full-time hire. Budgeting, forecasting, board reporting, and financial modelling.",
  openGraph: {
    title: "CFO & Finance Advisory | Auditclue Advisory",
    description:
      "Virtual CFO services for UAE businesses: financial planning, cash flow management, budgeting, board reporting, and strategic advisory.",
    url: "https://auditclue.com/services/cfo-advisory",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function CfoAdvisoryPage() {
  return <CfoAdvisoryClient />;
}
