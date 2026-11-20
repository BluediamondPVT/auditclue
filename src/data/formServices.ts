export interface FormServiceItem {
  id: string;
  title: string;
  svcs: string;
  desc: string;
  href: string;
}

/**
 * The 11 core UAE advisory practices exactly matching the Navbar Services Dropdown,
 * plus the general advisory enquiry option.
 */
export const FORM_SERVICES: FormServiceItem[] = [
  {
    id: "business-setup",
    title: "Business Setup & Formation",
    svcs: "16 Svcs",
    desc: "Mainland DED, Free Zones & bank-ready setup",
    href: "/services/business-setup",
  },
  {
    id: "corporate-tax",
    title: "UAE Corporate Tax",
    svcs: "16 Svcs",
    desc: "Small Business Relief, QFZP 0% & FTA filing",
    href: "/services/corporate-tax",
  },
  {
    id: "audit-assurance",
    title: "Statutory Audit & Assurance",
    svcs: "18 Svcs",
    desc: "IFRS financial statements & Free Zone renewal",
    href: "/services/audit-assurance",
  },
  {
    id: "vat-services",
    title: "UAE VAT Services",
    svcs: "15 Svcs",
    desc: "Registrations, return filing & refund claims",
    href: "/services/vat-services",
  },
  {
    id: "cfo-advisory",
    title: "Virtual CFO Advisory",
    svcs: "17 Svcs",
    desc: "Financial modeling, budgeting & board reporting",
    href: "/services/cfo-advisory",
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    svcs: "20 Svcs",
    desc: "Monthly bookkeeping, MIS & year-end closing",
    href: "/services/accounting-bookkeeping",
  },
  {
    id: "transfer-pricing",
    title: "Transfer Pricing",
    svcs: "11 Svcs",
    desc: "Arm's length policy, Local & Master file",
    href: "/services/transfer-pricing",
  },
  {
    id: "corporate-finance",
    title: "Corporate Finance",
    svcs: "16 Svcs",
    desc: "Bank loan facilities, trade finance & debt advisory",
    href: "/services/corporate-finance",
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    svcs: "16 Svcs",
    desc: "Valuations, M&A due diligence & restructuring",
    href: "/services/business-advisory",
  },
  {
    id: "compliance-services",
    title: "Compliance Services",
    svcs: "13 Svcs",
    desc: "AML, GoAML, UBO & regulatory filing",
    href: "/services/compliance-services",
  },
  {
    id: "technology-digital",
    title: "Technology & Digital Finance",
    svcs: "13 Svcs",
    desc: "Zoho, QuickBooks, Xero & e-invoicing Peppol",
    href: "/services/technology-digital",
  },
];

export const OTHER_SERVICE_OPTION: FormServiceItem = {
  id: "other",
  title: "Other Advisory Requirements",
  svcs: "Bespoke",
  desc: "Custom advisory and cross-border solutions",
  href: "/contact",
};

export const ALL_FORM_SERVICES: FormServiceItem[] = [
  ...FORM_SERVICES,
  OTHER_SERVICE_OPTION,
];
