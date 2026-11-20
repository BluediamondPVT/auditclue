import React from "react";
import type { Metadata } from "next";
import BusinessSetupClient from "./BusinessSetupClient";
import { ServiceSchema, BreadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "UAE Business Setup & Company Formation | Mainland & Free Zones | Auditclue",
  description:
    "End-to-end UAE company formation across Dubai Mainland (DED), Free Zones (DMCC, IFZA, Meydan, DIFC), and Offshore. 100% foreign ownership, corporate bank account opening support, MoA drafting, and tax structuring.",
  keywords: [
    "UAE business setup",
    "company formation Dubai",
    "Dubai Mainland DED license",
    "Free Zone company setup UAE",
    "DMCC company formation",
    "corporate bank account opening Dubai",
    "UAE trade license cost",
    "100% foreign ownership UAE LLC",
    "Offshore company incorporation UAE",
    "Trade license renewal Dubai",
  ],
  alternates: {
    canonical: "https://auditclue.com/services/business-setup",
  },
  openGraph: {
    title: "UAE Company Formation & Business Setup | Auditclue Advisory",
    description:
      "Form your UAE entity across Mainland DED, Free Zones, and Offshore jurisdictions with expert bank-ready structuring and 100% foreign ownership.",
    url: "https://auditclue.com/services/business-setup",
    siteName: "Auditclue Global Advisory Services LLC",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/images/dubai-business-setup.jpg",
        width: 1200,
        height: 675,
        alt: "UAE Business Setup in Dubai DIFC Skyline",
      },
    ],
  },
};

export default function BusinessSetupPage() {
  return (
    <>
      <ServiceSchema
        name="UAE Business Setup & Company Formation"
        description="End-to-end company formation across Dubai Mainland (DED), major Free Zones (DMCC, IFZA, DAFZA, DIFC), and corporate bank account support."
        url="https://auditclue.com/services/business-setup"
        serviceType="BusinessConsulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://auditclue.com" },
          { name: "Services", url: "https://auditclue.com/#services" },
          { name: "Business Setup & Formation", url: "https://auditclue.com/services/business-setup" },
        ]}
      />
      <BusinessSetupClient />
    </>
  );
}
