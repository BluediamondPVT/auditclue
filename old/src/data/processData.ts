export interface ProcessStepItem {
  step: string;
  number: string;
  title: string;
  homepagePreview: string;
  fullDescription: string;
  slaBadge: string;
  iconName: string;
  side: "left" | "right";
  deliverableHighlight: string;
}

export const PROCESS_PAGE_INTRO = {
  heading: "Our Simple 6-Step Process",
  subtitle:
    "From your first query to ongoing support — a clear, transparent, and fully digital process designed for modern UAE businesses.",
};

export const PROCESS_STEPS_DATA: ProcessStepItem[] = [
  {
    step: "01",
    number: "01",
    title: "Submit Your Service Query",
    homepagePreview: "Tell us what your business needs.",
    fullDescription:
      "Fill in our enquiry form, call, or WhatsApp us to tell us what you need. Our advisor will listen and understand your specific business requirements.",
    slaBadge: "Initial Review < 24h",
    iconName: "MessageSquareQuote",
    side: "left",
    deliverableHighlight:
      "Requirements mapped to Mainland or Free Zone regulations",
  },
  {
    step: "02",
    number: "02",
    title: "Receive Your Tailored Quote",
    homepagePreview: "Get a clear, transparent service proposal.",
    fullDescription:
      "Our team reviews your requirements and provides a clear, transparent proposal outlining the scope of work, timeline, and service fee — no hidden charges.",
    slaBadge: "Zero Hidden Surcharges",
    iconName: "Calculator",
    side: "right",
    deliverableHighlight:
      "Binding engagement letter with itemized deliverables",
  },
  {
    step: "03",
    number: "03",
    title: "Submit Documents Digitally",
    homepagePreview: "Share documents securely from anywhere.",
    fullDescription:
      "Securely share your documents through our digital portal or encrypted file transfer. No physical visits required — work from anywhere in the UAE or abroad.",
    slaBadge: "AES-256 Vault Provisioned",
    iconName: "UploadCloud",
    side: "left",
    deliverableHighlight: "No in-office visits; upload from anywhere globally",
  },
  {
    step: "04",
    number: "04",
    title: "Professional Review & Execution",
    homepagePreview: "Our advisors handle your requirements precisely.",
    fullDescription:
      "Our qualified advisors review your documents, identify gaps, and execute your audit, tax filing, accounting, or compliance requirements with precision.",
    slaBadge: "Chartered CPA & Tax Agents",
    iconName: "ShieldCheck",
    side: "right",
    deliverableHighlight:
      "IFRS / ISA aligned audit trails and tax gap resolution",
  },
  {
    step: "05",
    number: "05",
    title: "Delivery & Digital Reporting",
    homepagePreview: "Receive deliverables and progress updates digitally.",
    fullDescription:
      "Receive completed reports, filed returns, and compliance deliverables digitally — with full transparency and real-time progress updates at every stage.",
    slaBadge: "Digital Sign-Off",
    iconName: "FileCheck2",
    side: "left",
    deliverableHighlight:
      "Bank-ready audit packs & FTA verified tax submission receipts",
  },
  {
    step: "06",
    number: "06",
    title: "Continuous Advisory & Support",
    homepagePreview: "Stay compliant with ongoing expert guidance.",
    fullDescription:
      "Our engagement doesn't end at delivery. We provide ongoing advisory, compliance calendar management, and proactive guidance to keep your business ahead.",
    slaBadge: "Year-Round Compliance",
    iconName: "Headphones",
    side: "right",
    deliverableHighlight: "Automated VAT & Corporate Tax calendar reminders",
  },
];
