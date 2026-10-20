import React from "react";
import type { Metadata } from "next";
import AccountingBookkeepingClient from "./AccountingBookkeepingClient";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services | Auditclue Global Advisory Services LLC",
  description:
    "Our accounting and bookkeeping services are fully digital, scalable, and designed for UAE businesses of all sizes. From monthly bookkeeping to year-end closing, our qualified accountants manage your financials so you can focus on growing your business.",
  openGraph: {
    title: "Accounting & Bookkeeping Services | Auditclue Advisory",
    description:
      "Fully digital, scalable accounting and bookkeeping services for UAE businesses: monthly bookkeeping, MIS reporting, bank reconciliations, and year-end closing.",
    url: "https://auditclue.com/services/accounting-bookkeeping",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function AccountingBookkeepingPage() {
  return <AccountingBookkeepingClient />;
}
