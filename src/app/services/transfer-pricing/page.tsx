import React from "react";
import type { Metadata } from "next";
import TransferPricingClient from "./TransferPricingClient";

export const metadata: Metadata = {
  title: "Transfer Pricing Services | Auditclue Global Advisory Services LLC",
  description:
    "With UAE corporate tax now in force, transfer pricing rules apply to related party transactions. Auditclue helps businesses comply with documentation requirements, conduct benchmarking, and ensure all intra-group transactions are structured at arm's length.",
  openGraph: {
    title: "Transfer Pricing Services | Auditclue Advisory",
    description:
      "Expert UAE transfer pricing documentation, related party review, Master File / Local File preparation, and arm's length benchmarking.",
    url: "https://auditclue.com/services/transfer-pricing",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
  },
};

export default function TransferPricingPage() {
  return <TransferPricingClient />;
}
