export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  iconName: string;
  count: number;
  description: string;
  highlights: string[];
  services: string[];
}

export const BUSINESS_SETUP_CATEGORY: ServiceCategory = {
  id: "business-setup",
  number: "00",
  title: "Business Setup Services",
  tagline:
    "End-to-end company formation structured correctly from day one for tax, banking and compliance.",
  iconName: "Building2",
  count: 16,
  description:
    "Launch your UAE entity across Mainland, Free Zones, and offshore jurisdictions with optimized corporate tax and banking structuring.",
  highlights: [
    "Right jurisdiction and structure",
    "Licence issued without delays",
    "Tax- and bank-ready from day one",
  ],
  services: [
    "Mainland Company Formation",
    "Free Zone Company Formation",
    "Offshore Company Formation",
    "Jurisdiction & Activity Selection",
    "Legal Structure Advisory",
    "Trade Licence Application",
    "Licence Renewal & Amendments",
    "Branch & Representative Office Setup",
    "MOA / AOA Drafting Support",
    "Corporate Bank Account Opening Support",
    "UBO Register & Filing",
    "VAT & Corporate Tax Registration",
    "Visa & Establishment Card Assistance",
    "PRO & Government Liaison Support",
    "Business Plan for Licensing",
    "Post-Setup Compliance Onboarding",
  ],
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "audit-assurance",
    number: "01",
    title: "Audit & Assurance",
    tagline:
      "Independent, standards-driven assurance that strengthens internal controls and stakeholder confidence.",
    iconName: "ShieldCheck",
    count: 18,
    description:
      "Comprehensive audit support and financial assurance services to meet UAE statutory requirements.",
    highlights: [
      "Statutory-ready financial statements",
      "Stronger internal control environment",
      "Reduced audit time and cost",
    ],
    services: [
      "External Audit Support",
      "Statutory Audit Coordination",
      "Internal Audit",
      "Risk-Based Internal Audit",
      "Financial Statement Review",
      "IFRS Financial Statements Preparation",
      "Audit File Preparation",
      "Audit Readiness Support",
      "Management Audit",
      "Due Diligence Audit",
      "Forensic Audit Support",
      "Compliance Audit",
      "Inventory Audit",
      "Fixed Asset Verification",
      "Revenue Assurance Review",
      "Internal Control Review",
      "Agreed-Upon Procedures",
      "Audit Report Assistance",
    ],
  },
  {
    id: "accounting-bookkeeping",
    number: "02",
    title: "Accounting & Bookkeeping",
    tagline:
      "Scalable, cloud-based finance operations run by qualified senior accountants.",
    iconName: "Calculator",
    count: 20,
    description:
      "End-to-end accounting and bookkeeping services delivered digitally with precision and speed.",
    highlights: [
      "Accurate, up-to-date books",
      "Monthly MIS for decision-making",
      "Audit- and tax-ready records",
    ],
    services: [
      "Monthly Accounting",
      "Bookkeeping Services",
      "Cloud Accounting Setup",
      "Accounting System Implementation",
      "Chart of Accounts Setup",
      "Bank Reconciliation",
      "Customer Reconciliation",
      "Supplier Reconciliation",
      "Intercompany Reconciliation",
      "Accounts Receivable Management",
      "Accounts Payable Management",
      "Monthly MIS Reports",
      "Financial Statements Preparation",
      "Management Accounts",
      "Cash Flow Reports",
      "Budget vs Actual Reports",
      "Payroll Accounting",
      "Year-End Closing Support",
      "Backlog Accounting",
      "Accounting Supervision Services",
    ],
  },
  {
    id: "vat-services",
    number: "03",
    title: "UAE VAT Services",
    tagline:
      "End-to-end VAT compliance aligned with Federal Tax Authority (FTA) requirements.",
    iconName: "Percent",
    count: 15,
    description:
      "Complete VAT compliance management — from registration to filing, refunds, and FTA query support.",
    highlights: [
      "On-time, accurate VAT returns",
      "Penalty exposure identified early",
      "Recoverable input VAT maximised",
    ],
    services: [
      "VAT Registration",
      "VAT Deregistration",
      "VAT Return Filing",
      "VAT Health Check",
      "VAT Refund Assistance",
      "VAT Voluntary Disclosure",
      "VAT Reconsideration Support",
      "VAT Group Advisory",
      "VAT Compliance Review",
      "VAT Audit Support",
      "VAT Penalty Review",
      "VAT Transaction Advisory",
      "Designated Zone VAT Advisory",
      "Import / Export VAT Advisory",
      "VAT Accounting Review",
    ],
  },
  {
    id: "corporate-tax",
    number: "04",
    title: "UAE Corporate Tax",
    tagline:
      "Practical 9% Corporate Tax advisory, Free Zone qualifying person assessments, and filing.",
    iconName: "Landmark",
    count: 16,
    description:
      "Navigate UAE corporate tax with confidence — registration, filing, planning, and FTA advisory.",
    highlights: [
      "Full compliance with FTA deadlines",
      "Reliefs and exemptions correctly applied",
      "Defensible tax positions and documentation",
    ],
    services: [
      "Corporate Tax Registration",
      "Corporate Tax Return Filing",
      "Corporate Tax Health Check",
      "Corporate Tax Impact Assessment",
      "Small Business Relief Advisory",
      "Free Zone Corporate Tax Advisory",
      "Qualifying Free Zone Person Assessment",
      "Taxable Income Computation",
      "Tax Loss Review",
      "Related Party Transaction Review",
      "Corporate Tax Documentation",
      "FTA Query Support",
      "Corporate Tax Penalty Advisory",
      "Tax Group Advisory",
      "Corporate Tax Planning",
      "Tax Compliance Calendar",
    ],
  },
  {
    id: "transfer-pricing",
    number: "05",
    title: "Transfer Pricing",
    tagline:
      "Transfer pricing policies, arm's length documentation, and benchmarking studies.",
    iconName: "Repeat",
    count: 11,
    description:
      "Transfer pricing documentation, related party review, and arm's length analysis for UAE compliance.",
    highlights: [
      "Arm's length positions supported",
      "Local File / Master File readiness",
      "Lower risk of FTA adjustments",
    ],
    services: [
      "Transfer Pricing Assessment",
      "Related Party Transaction Review",
      "Transfer Pricing Policy",
      "Local File Preparation",
      "Master File Support",
      "Disclosure Form Assistance",
      "Arm's Length Pricing Review",
      "Intra-group Service Fee Review",
      "Management Fee Documentation",
      "Shareholder Loan Review",
      "Benchmarking Support",
    ],
  },
  {
    id: "cfo-advisory",
    number: "06",
    title: "CFO & Finance Advisory",
    tagline: "Virtual CFO capability without full-time executive overhead.",
    iconName: "TrendingUp",
    count: 17,
    description:
      "Virtual CFO and strategic finance advisory to drive business performance and growth.",
    highlights: [
      "Clear visibility of performance",
      "Disciplined cash and working capital",
      "Investor- and board-grade reporting",
    ],
    services: [
      "Virtual CFO Services",
      "Financial Planning & Analysis",
      "Budgeting and Forecasting",
      "Cash Flow Management",
      "Profitability Analysis",
      "Business Performance Review",
      "Financial Strategy",
      "Cost Control Advisory",
      "Working Capital Management",
      "Debt Restructuring Advisory",
      "Bank Facility Advisory",
      "Investor Reporting",
      "Board Reporting",
      "Financial Modelling",
      "Business Plan Preparation",
      "Feasibility Study",
      "MIS Dashboard Setup",
    ],
  },
  {
    id: "corporate-finance",
    number: "07",
    title: "Corporate Finance",
    tagline:
      "Funding advisory and credit-ready facility structuring for UAE businesses.",
    iconName: "Briefcase",
    count: 16,
    description:
      "Business loan advisory, SME finance, trade finance, and funding solutions tailored for UAE businesses.",
    highlights: [
      "Bank-ready financial packs",
      "Better-structured facilities",
      "Faster credit decisions",
    ],
    services: [
      "Business Loan Advisory",
      "SME Finance Advisory",
      "Trade Finance Advisory",
      "Invoice Discounting Advisory",
      "Working Capital Finance",
      "Mortgage Finance Advisory",
      "Project Finance Advisory",
      "Asset Finance Advisory",
      "Loan Restructuring Support",
      "Bank Proposal Preparation",
      "Credit Query Response Support",
      "Financial Document Preparation for Banks",
      "Investor Pitch Deck Support",
      "Funding Teaser Preparation",
      "Private Equity Introduction Support",
      "Debt Advisory",
    ],
  },
  {
    id: "business-advisory",
    number: "08",
    title: "Business Advisory",
    tagline:
      "Strategic advisory across company lifecycle: valuations, M&A, governance, and exits.",
    iconName: "Compass",
    count: 15,
    description:
      "Strategic business advisory — from setup and restructuring to M&A, valuations, and governance.",
    highlights: [
      "Informed strategic decisions",
      "Robust governance and processes",
      "Value protected in transactions",
    ],
    services: [
      "Business Restructuring",
      "Business Valuation",
      "Investor Documentation",
      "Financial Due Diligence",
      "Business Process Review",
      "Policy Documentation",
      "Board Resolution Drafting Support",
      "Business Exit Planning",
      "Share Transfer Advisory",
      "Mergers & Acquisitions Advisory",
      "Partnership Structuring",
      "Commercial Due Diligence",
      "Standard Operating Procedures",
      "Corporate Governance Advisory",
      "Management Approval Notes",
    ],
  },
  {
    id: "compliance-services",
    number: "09",
    title: "Compliance Services",
    tagline:
      "AML, ESR, UBO and regulatory mandates consolidated under a unified compliance calendar.",
    iconName: "ShieldAlert",
    count: 13,
    description:
      "AML, ESR, UBO, and full compliance calendar management to keep your business penalty-free.",
    highlights: [
      "Penalty-free regulatory standing",
      "Bank KYC handled smoothly",
      "One calendar for all obligations",
    ],
    services: [
      "Economic Substance Regulation Advisory",
      "UBO Advisory",
      "Compliance Calendar Management",
      "Bank KYC Support",
      "License Renewal Support",
      "Employee Final Settlement Working",
      "Gratuity Calculation Support",
      "AML Compliance Support",
      "GoAML Registration Support",
      "KYC Documentation Support",
      "Regulatory Filing Support",
      "Company Liquidation Support",
      "Payroll Compliance",
    ],
  },
  {
    id: "technology-digital",
    number: "10",
    title: "Technology & Digital Finance",
    tagline:
      "Modern finance technology, UAE e-invoicing (Peppol), and automated reporting.",
    iconName: "Cpu",
    count: 13,
    description:
      "Accounting software implementation, e-invoicing readiness, and finance automation for digital businesses.",
    highlights: [
      "E-invoicing mandate readiness",
      "Automated, paperless workflows",
      "Real-time financial dashboards",
    ],
    services: [
      "Accounting Software Implementation",
      "QuickBooks Setup",
      "ERP Advisory",
      "E-Invoicing Readiness",
      "Peppol Readiness Advisory",
      "Digital Approval Workflow",
      "Dashboard and Reporting Automation",
      "Zoho Books Setup",
      "Xero Setup",
      "Digital Document Management",
      "UAE E-Invoicing Gap Analysis",
      "Finance Automation",
      "Cloud-Based Accounting Migration",
    ],
  },
];

export const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Enquiry & Scoping",
    desc: "Contact via portal, WhatsApp, or phone. A qualified senior advisor analyzes your business context within 24 hours.",
    badge: "24h SLA",
  },
  {
    step: "02",
    title: "Proposal & Digital Onboarding",
    desc: "Transparent fixed-fee engagement letter agreed upfront. Identity verification and KYC executed 100% digitally.",
    badge: "Fixed Fee",
  },
  {
    step: "03",
    title: "Client Portal Access",
    desc: "Instant provisioning of your dedicated, bank-grade portal credentials to upload records and track deliverables.",
    badge: "Day 1 Provisioning",
  },
  {
    step: "04",
    title: "Review & Technical Execution",
    desc: "Certified UAE tax agents and auditors examine books, resolve data gaps, and structure defensible positions.",
    badge: "IFRS / ISA Standards",
  },
  {
    step: "05",
    title: "Digital Delivery & Filing",
    desc: "Final audit packs, FTA tax returns, and board certificates deposited directly into your searchable digital vault.",
    badge: "Instant Download",
  },
  {
    step: "06",
    title: "Ongoing Proactive Advisory",
    desc: "Automated compliance calendar alerts, regulatory tax changes, and direct advisor messaging year-round.",
    badge: "24/7 Continuity",
  },
];

export const REGULATORY_FRAMEWORKS = [
  {
    code: "IFRS",
    name: "International Financial Reporting Standards",
    desc: "Global benchmark accounting frameworks",
  },
  {
    code: "ISA",
    name: "International Standards on Auditing",
    desc: "Rigorous statutory assurance protocols",
  },
  {
    code: "FTA",
    name: "UAE Federal Tax Authority",
    desc: "Corporate Tax (9%) & VAT Law compliance",
  },
  {
    code: "AML / CFT",
    name: "Anti-Money Laundering & GoAML",
    desc: "UAE Ministry of Economy & Central Bank mandates",
  },
  {
    code: "PEPPOL",
    name: "UAE E-Invoicing Standard",
    desc: "Mandatory digital tax invoicing readiness",
  },
];

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  desc: string;
  iconName: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "digital-delivery",
    number: "01",
    title: "Fully Digital Service Delivery",
    desc: "All services are delivered digitally — no paperwork hassles, no office visits, just seamless professional support wherever you are.",
    iconName: "Laptop",
  },
  {
    id: "compliance-expertise",
    number: "02",
    title: "UAE Tax & Compliance Expertise",
    desc: "Deep expertise in UAE corporate tax, VAT, ESR, AML, and regulatory requirements updated with every FTA guideline.",
    iconName: "ShieldCheck",
  },
  {
    id: "fast-response",
    number: "03",
    title: "Fast Response & Execution",
    desc: "Committed turnaround times and proactive communication so you always know the status of your engagement.",
    iconName: "Clock",
  },
  {
    id: "transparent-pricing",
    number: "04",
    title: "Transparent Pricing",
    desc: "Clear, upfront service fees with no hidden charges. We believe in honest advisory relationships built on trust.",
    iconName: "CircleDollarSign",
  },
  {
    id: "secure-document",
    number: "05",
    title: "Secure Document Handling",
    desc: "Bank-grade document security and strict confidentiality protocols protect your sensitive financial information.",
    iconName: "LockKeyhole",
  },
  {
    id: "professional-reporting",
    number: "06",
    title: "Professional Reporting",
    desc: "Accurate, clear, and timely reports that meet UAE regulatory standards and give you actionable business insights.",
    iconName: "FileText",
  },
  {
    id: "end-to-end",
    number: "07",
    title: "End-to-End Advisory",
    desc: "From setup to growth and exit — we cover audit, tax, accounting, finance, and business advisory under one roof.",
    iconName: "BriefcaseBusiness",
  },
  {
    id: "sme-focus",
    number: "08",
    title: "For SMEs & Growing Businesses",
    desc: "Our services are specifically designed to be accessible and effective for small and medium-sized enterprises.",
    iconName: "UsersRound",
  },
];
