"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import {
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  ShieldCheck,
  Scale,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Layers,
  Building2,
  Calendar,
  Lock,
  Calculator,
} from "lucide-react";

// =========================================================================
// 1. VAT PRACTICE SCOPE & 15 DEEP DELIVERABLES
// =========================================================================
const VAT_DETAILED_SERVICES = [
  {
    num: "01",
    title: "VAT Registration & TRN Acquisition",
    scope:
      "Full diagnostic of past 12-month and projected 30-day turnover. We prepare the complete EmaraTax dossier, liaise directly with the Federal Tax Authority, and secure your Tax Registration Number (TRN).",
    deliverable: "Official FTA TRN Certificate & EmaraTax Portal Provisioning",
    turnaround: "3–5 Business Days",
  },
  {
    num: "02",
    title: "VAT Return Preparation & Filing (Form 201)",
    scope:
      "Comprehensive reconciliation of standard-rated, zero-rated, and exempt supplies. We compute eligible input tax recovery, cross-validate reverse charge liabilities, and handle the formal quarterly/monthly filing.",
    deliverable: "Reconciled Tax Dossier & Official FTA Form 201 Submission Receipt",
    turnaround: "Guaranteed Ahead of 28th Deadline",
  },
  {
    num: "03",
    title: "VAT Health Check & Diagnostic Audit",
    scope:
      "Deep forensic audit of your historical VAT filings, sales invoices, tax credit notes, and purchase ledgers. We pinpoint compliance blind spots, misclassified supplies, and unrecovered input VAT credits.",
    deliverable: "Executive Diagnostic Report with Remediation Roadmap & Exposure Matrix",
    turnaround: "5–7 Business Days",
  },
  {
    num: "04",
    title: "VAT Deregistration & Clearance Advisory",
    scope:
      "For entities liquidating, restructuring, or whose taxable turnover has fallen below the statutory AED 187,500 threshold. We ensure timely deregistration within 20 business days to avoid punitive AED 10,000 fines.",
    deliverable: "FTA Final Clearance Letter & Formal TRN Deregistration Approval",
    turnaround: "Within Statutory Window",
  },
  {
    num: "05",
    title: "VAT Refund Claims & Input Recovery",
    scope:
      "Specialized representation for entities in credit positions (e.g. exporters, capital investors). We build an audit-proof paper trail of supplier invoices and customs declarations to expedite cash refunds from the FTA.",
    deliverable: "Audit-Ready Refund Application Dossier & Direct FTA Claims Follow-up",
    turnaround: "Expedited Processing",
  },
  {
    num: "06",
    title: "Voluntary Disclosure Submissions (Form 211)",
    scope:
      "Strategic remediation when an inadvertent error exceeds AED 10,000 in tax payable. We calculate exact retroactive liabilities and submit Form 211 proactively to mitigate heavy percentage-based penalties.",
    deliverable: "Form 211 Voluntary Disclosure Pack & Penalty Minimization Brief",
    turnaround: "Urgent Priority (24–48h)",
  },
  {
    num: "07",
    title: "FTA Penalty Reconsideration & Appeals",
    scope:
      "Drafting robust legal reconsiderations under Article 27 of the Tax Procedures Law against erroneous administrative penalties, late registration charges, or contested audit assessments.",
    deliverable: "Formal Legal Defense Memorandum to FTA Reconsideration Committee",
    turnaround: "Within 40-Day Appeal Window",
  },
  {
    num: "08",
    title: "VAT Tax Grouping Formation & Restructuring",
    scope:
      "Structuring economically, financially, and organizationally linked UAE entities under a single Tax Group. Eliminates VAT on intercompany recharges and streamlines compliance into a single consolidated return.",
    deliverable: "Tax Group Eligibility Audit & Consolidated TRN Group Registration",
    turnaround: "7–10 Business Days",
  },
  {
    num: "09",
    title: "Tax Invoice & POS System Compliance Audit",
    scope:
      "Technical review of your accounting software (Xero, Zoho, QuickBooks, SAP, NetSuite) and billing templates to guarantee compliance with Article 59 criteria (TRN display, sequential numbering, AED exchange rates).",
    deliverable: "Invoicing Compliance Sign-Off & ERP Tax Matrix Mapping",
    turnaround: "3 Business Days",
  },
  {
    num: "10",
    title: "Designated Zone & Free Zone VAT Advisory",
    scope:
      "Complex determination of Qualifying vs Non-Qualifying Designated Zones (e.g. JAFZA, DAFZA, KIZAD). We structure cross-border cargo transit, high-sea sales, and local consumption to protect your 0% zero-rated status.",
    deliverable: "Designated Zone Movement Protocol & Customs Border Validation",
    turnaround: "Case Specific",
  },
  {
    num: "11",
    title: "Import / Export VAT & Customs Clearance (Box 6 & 7)",
    scope:
      "Reconciling declaration numbers between Federal Customs Authority systems and EmaraTax Box 6 & 7. Eliminates double-taxation and resolves mismatch errors between customs bill of entries and tax returns.",
    deliverable: "Customs-VAT Reconciliation Ledger & Reverse Charge Validation",
    turnaround: "Monthly / Quarterly Routine",
  },
  {
    num: "12",
    title: "Financial Services & Mixed-Supply Apportionment",
    scope:
      "For financial institutions, investment funds, and property developers with both taxable commercial and exempt residential supplies. We calculate precise input tax apportionment ratios using special methods.",
    deliverable: "Standard & Special Input Tax Apportionment Model Signed by Tax Agent",
    turnaround: "Annual / Bi-annual Review",
  },
  {
    num: "13",
    title: "FTA Tax Audit Representation & Defense",
    scope:
      "Direct representation by certified chartered accountants and registered tax agents during official FTA field inspections, notice requests, and compliance interviews. We manage the audit queue from start to sign-off.",
    deliverable: "Certified Auditor Representation & Document Disclosure Queue Management",
    turnaround: "Active Case Management",
  },
  {
    num: "14",
    title: "Transfer of a Business as a Going Concern (TOGC)",
    scope:
      "Structuring corporate acquisitions, business unit spin-offs, and asset transfers outside the scope of VAT under Article 7 of the UAE VAT Law, ensuring seamless asset handover without 5% cash-flow drain.",
    deliverable: "TOGC Legal Compliance Brief & Joint Declaration Agreement",
    turnaround: "Transaction Timetable",
  },
  {
    num: "15",
    title: "Continuous VAT Advisory & Compliance Retainer",
    scope:
      "Dedicated tax agent helpline for everyday billing queries, international supplier VAT review, contract vetting, and proactive alerts on evolving FTA cabinet decisions and public clarifications.",
    deliverable: "Unlimited Senior Advisor Access & Quarterly Compliance Calendar Tracking",
    turnaround: "Year-Round Ongoing",
  },
];

// =========================================================================
// 2. STATUTORY REGISTRATION THRESHOLDS
// =========================================================================
const REGISTRATION_THRESHOLDS = [
  {
    type: "Mandatory Registration",
    amount: "AED 375,000",
    timeframe: "Past 12 Months or Next 30 Days",
    tag: "LEGAL REQUIREMENT",
    tagColor: "bg-red-50 text-red-700 border-red-200",
    desc: "Applicable to all UAE resident businesses whose taxable supplies and imports have exceeded AED 375,000 over the previous 12 months, or are legally anticipated to exceed this threshold in the next 30 days.",
    penaltyNote: "Failure to apply within 20 business days results in an automatic AED 10,000 FTA fine.",
  },
  {
    type: "Voluntary Registration",
    amount: "AED 187,500",
    timeframe: "Past 12 Months or Next 30 Days",
    tag: "STRATEGIC BENEFIT",
    tagColor: "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30",
    desc: "Available to growing businesses and startups whose taxable supplies or taxable expenses exceed AED 187,500. Enables full recovery of 5% input VAT incurred on equipment, setup costs, and commercial leases.",
    penaltyNote: "Voluntary registration provides a verified TRN, significantly improving corporate B2B credibility.",
  },
  {
    type: "Non-Resident Suppliers",
    amount: "AED 0.00",
    timeframe: "From First Taxable Supply",
    tag: "ZERO THRESHOLD",
    tagColor: "bg-amber-50 text-amber-700 border-amber-200",
    desc: "Non-resident entities making supplies of goods or services inside the UAE, where no other UAE-registered entity is obligated to account for the tax under the reverse charge mechanism, have NO minimum threshold.",
    penaltyNote: "Registration is mandatory prior to transacting the very first taxable supply inside the State.",
  },
];

// =========================================================================
// 3. STATUTORY PENALTIES SCHEDULE (Cabinet Decision No. 49 of 2021)
// =========================================================================
const VAT_PENALTIES_TABLE = [
  {
    violation: "Late Application for VAT Registration",
    timeLimit: "Within 20 business days of reaching AED 375k threshold",
    penalty: "AED 10,000 flat fine",
  },
  {
    violation: "Late Application for VAT Deregistration",
    timeLimit: "Within 20 business days of business cessation or falling below threshold",
    penalty: "AED 1,000 per month of delay (capped at AED 10,000)",
  },
  {
    violation: "Late Submission of Periodic Tax Return",
    timeLimit: "By the 28th day following the close of the tax period",
    penalty: "AED 1,000 for first offence; AED 2,000 if repeated within 24 months",
  },
  {
    violation: "Failure to Settle Tax Due by Due Date",
    timeLimit: "Payable simultaneously with return submission",
    penalty: "2% per month (or part thereof) on unpaid tax balance",
  },
  {
    violation: "Failure to Issue Tax Invoices or Credit Notes",
    timeLimit: "Per non-compliant transaction",
    penalty: "AED 2,500 per instance or non-compliant document",
  },
  {
    violation: "Failure to Display Prices Inclusive of 5% VAT",
    timeLimit: "Mandatory on all retail, web, and consumer quotes",
    penalty: "AED 5,000 per location or retail portal",
  },
  {
    violation: "Submission of Inaccurate Return (Remediated via Voluntary Disclosure)",
    timeLimit: "Prior to receipt of FTA inspection notice",
    penalty: "Reduced penalty scale: 5% to 40% based on disclosure timing",
  },
];

// =========================================================================
// 4. REQUIRED DOCUMENTS CHECKLIST
// =========================================================================
const REQUIRED_DOCUMENTS = [
  {
    category: "Entity Legal Identity",
    items: [
      "Valid UAE Commercial License / Trade License (Mainland DED or Free Zone)",
      "Certificate of Incorporation & Commercial Register Extract",
      "Memorandum & Articles of Association (MOA / AOA)",
      "Registered Tenancy Contract & Ejari / Free Zone Lease Agreement",
    ],
  },
  {
    category: "Signatory & Management",
    items: [
      "Passport and valid UAE Residence Visa copy of General Manager",
      "Emirates ID (Front & Back) of Authorized Signatory",
      "Power of Attorney (POA) or Board Resolution appointing Tax Agent",
    ],
  },
  {
    category: "Financial & Transactional Records",
    items: [
      "Itemized sales turnover spreadsheet for past 12 consecutive months",
      "Official UAE Corporate Bank Statements for past 6 to 12 months",
      "Sample copies of signed sales contracts and issued customer invoices",
      "Customs Code Certificate & sample Bill of Entry (for importers/exporters)",
    ],
  },
];

// =========================================================================
// 5. VAT ONBOARDING TIMELINE
// =========================================================================
const ENGAGEMENT_TIMELINE = [
  {
    day: "DAY 01",
    phase: "Intake & Threshold Diagnostic",
    desc: "Our chartered tax advisor reviews your past 12-month financials and verifies whether mandatory registration, voluntary registration, or exception from registration applies.",
  },
  {
    day: "DAYS 02–03",
    phase: "Document Audit & EmaraTax Compilation",
    desc: "Upload entity documents into our AES-256 encrypted vault. We validate trade licenses, Ejari, and invoices to eliminate common FTA rejection triggers.",
  },
  {
    day: "DAY 04",
    phase: "Formal FTA Submission & Tax Agent Sign-Off",
    desc: "We submit the verified dossier via the FTA EmaraTax platform under our certified Tax Agent credentials and track application progress in real time.",
  },
  {
    day: "DAYS 05–07",
    phase: "TRN Issuance & Post-Registration Compliance Pack",
    desc: "Your official Tax Registration Number (TRN) is generated. We configure your tax calendar and issue invoicing compliance guidelines to your finance team.",
  },
];

// =========================================================================
// 6. FREQUENTLY ASKED QUESTIONS (FAQS)
// =========================================================================
const VAT_FAQS = [
  {
    q: "Do UAE Free Zone companies need to register for VAT?",
    a: "Yes. UAE Free Zone entities are fully subject to UAE VAT Law (Federal Decree-Law No. 8 of 2017). A Free Zone company must register for VAT if its taxable turnover (including sales to mainland UAE or overseas) exceeds the AED 375,000 mandatory threshold. Companies located in designated Free Zones still require registration, although specific goods stored in designated zones may qualify for out-of-scope treatment.",
  },
  {
    q: "What is the difference between Zero-Rated (0%) and Exempt supplies?",
    a: "Under Zero-Rated supplies (such as exports of goods and services outside the GCC implementing states, international transport, and certain healthcare/education services), tax is charged at 0%, but the business CAN recover all input VAT paid on its expenses. Under Exempt supplies (such as residential property leases, bare land sales, and margin-based financial services), no VAT is charged, but the business CANNOT recover the input VAT incurred on related expenses.",
  },
  {
    q: "Can I recover input VAT paid on business setup expenses before registration?",
    a: "Yes. Under Article 56 of the Executive Regulations, a newly registered business can recover input VAT paid on goods purchased prior to the registration date, provided they are still on hand at the effective date of registration. Services acquired within the 6 months prior to the effective registration date can also be recovered if directly used for taxable supplies.",
  },
  {
    q: "What is the exact deadline for submitting UAE VAT returns?",
    a: "The standard tax period is quarterly for most SMEs (or monthly for high-turnover entities as mandated by the FTA). The statutory deadline for filing Form 201 and settling the net tax payable is the 28th day following the close of the tax period (or the next business day if the 28th falls on a UAE national holiday or weekend).",
  },
  {
    q: "What triggers an FTA VAT Audit, and how should a company prepare?",
    a: "Common audit triggers include recurring high VAT refund requests, frequent voluntary disclosures, severe mismatches between customs import data and Box 6/7 return figures, or cross-checks against customer/supplier declarations. To prepare, ensure you retain sequentially numbered tax invoices, proof of export, and audited trial balances for a minimum of 5 years.",
  },
  {
    q: "How does Auditclue resolve historical return errors through Voluntary Disclosure (Form 211)?",
    a: "If an error resulting in a tax shortfall of over AED 10,000 is uncovered, UAE law obligates the taxpayer to file a Voluntary Disclosure (Form 211) within 20 business days. Auditclue prepares the full recalculation, drafts the technical justification brief, and submits it to the FTA, securing significantly reduced penalty tiers compared to discovery via an unannounced FTA audit.",
  },
];

const OTHER_SERVICES = [
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { name: "UAE Corporate Tax", href: "/services/corporate-tax" },
  { name: "Business Setup & Formation", href: "/services/business-setup" },
  { name: "Transfer Pricing", href: "/services/transfer-pricing" },
  { name: "CFO & Finance Advisory", href: "/services/cfo-advisory" },
  { name: "Corporate Finance", href: "/services/corporate-finance" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Compliance Services", href: "/services/compliance-services" },
  { name: "Technology & Digital Finance", href: "/services/technology-digital" },
];

const VAT_PAIRS = [
  {
    phase: "01",
    label: "Registration & Return Filing",
    items: [VAT_DETAILED_SERVICES[0], VAT_DETAILED_SERVICES[1]],
  },
  {
    phase: "02",
    label: "Health Check & Deregistration",
    items: [VAT_DETAILED_SERVICES[2], VAT_DETAILED_SERVICES[3]],
  },
  {
    phase: "03",
    label: "Refund Claims & Voluntary Disclosures",
    items: [VAT_DETAILED_SERVICES[4], VAT_DETAILED_SERVICES[5]],
  },
  {
    phase: "04",
    label: "FTA Appeals & Tax Grouping",
    items: [VAT_DETAILED_SERVICES[6], VAT_DETAILED_SERVICES[7]],
  },
  {
    phase: "05",
    label: "POS Compliance & Free Zone VAT",
    items: [VAT_DETAILED_SERVICES[8], VAT_DETAILED_SERVICES[9]],
  },
  {
    phase: "06",
    label: "Customs Box 6/7 & Mixed-Supply",
    items: [VAT_DETAILED_SERVICES[10], VAT_DETAILED_SERVICES[11]],
  },
  {
    phase: "07",
    label: "Audit Defense & Going Concern (TOGC)",
    items: [VAT_DETAILED_SERVICES[12], VAT_DETAILED_SERVICES[13]],
  },
  {
    phase: "08",
    label: "Continuous Advisory Retainer",
    items: [VAT_DETAILED_SERVICES[14]],
  },
];

export default function VatServicesClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const stackWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // =========================================================================
  // GSAP SCROLLTRIGGER DECK-OF-CARDS STACKING
  // =========================================================================
  useEffect(() => {
    if (!cardsContainerRef.current || !stackWrapperRef.current) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
          ".setup-stacked-card",
        );
        cards?.forEach((card) => {
          gsap.set(card, {
            position: "relative",
            top: "auto",
            left: "auto",
            width: "100%",
            height: "auto",
            yPercent: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            clearProps: "all",
          });
        });
        return;
      }
    }

    let mm: gsap.MatchMedia | null = null;

    const setupCardStacking = () => {
      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
        ".setup-stacked-card",
      );
      if (!cards || cards.length <= 1) return;

      const totalCards = cards.length;

      let maxCardHeight = 0;
      cards.forEach((card) => {
        const h = card.getBoundingClientRect().height;
        if (h > maxCardHeight) maxCardHeight = h;
      });

      if (maxCardHeight > 0 && cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = `${Math.ceil(
          maxCardHeight,
        )}px`;
      }

      const startOffset = "top top+=104";
      const perCardScroll = 380;
      const totalScrollDistance = (totalCards - 1) * perCardScroll + 180;
      const scrubSpeed = 0.6;

      cards.forEach((card, idx) => {
        if (idx === 0) {
          gsap.set(card, {
            position: "relative",
            yPercent: 0,
            opacity: 1,
            visibility: "visible",
            force3D: false,
          });
        } else if (idx === 1) {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100%",
            yPercent: 100,
            opacity: 1,
            visibility: "visible",
            force3D: false,
          });
        } else {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100%",
            yPercent: 100,
            opacity: 0,
            visibility: "hidden",
            force3D: false,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackWrapperRef.current,
          start: startOffset,
          end: `+=${totalScrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: scrubSpeed,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const moveDuration = 1.0;
      const holdDuration = 0.8;
      const stepDuration = moveDuration + holdDuration;
      const initialHold = 0.7;

      for (let i = 1; i < totalCards; i++) {
        const currCard = cards[i];
        const nextCard = i + 1 < totalCards ? cards[i + 1] : null;
        const startTime = initialHold + (i - 1) * stepDuration;
        const arriveTime = startTime + moveDuration;

        if (i >= 2) {
          const olderCard = cards[i - 2];
          tl.to(
            olderCard,
            {
              opacity: 0,
              visibility: "hidden",
              ease: "none",
              duration: 0.2,
            },
            startTime,
          );
        }

        tl.to(
          currCard,
          {
            yPercent: 0,
            opacity: 1,
            visibility: "visible",
            ease: "none",
            duration: moveDuration,
            force3D: false,
          },
          startTime,
        );

        if (nextCard) {
          tl.to(
            nextCard,
            {
              opacity: 1,
              visibility: "visible",
              ease: "none",
              duration: 0.2,
            },
            arriveTime,
          );
        }
      }
    };

    mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      setupCardStacking();
    });
    mm.add("(max-width: 767px)", () => {
      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
        ".setup-stacked-card",
      );
      cards?.forEach((card) => {
        gsap.set(card, {
          clearProps: "all",
        });
      });
      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = "";
      }
    });

    return () => {
      mm?.revert();
      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = "";
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: UAE VAT Editorial Master Header                  */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Subtle Ambient Lighting Aura */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[600px] h-[450px] bg-gradient-to-br from-[#36A783]/20 via-[#83D9BE]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-[550px] h-[400px] bg-gradient-to-tr from-[#233F5B]/12 via-[#36A783]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-6"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#64748B]">Services</span>
              <span>/</span>
              <span className="text-[#071426] font-semibold">
                UAE VAT Services
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>FTA REGISTERED TAX AGENT PRACTICE • 5% VAT SPECIALISTS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText text="UAE VAT Advisory & Statutory Compliance" as="span" />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                Operating under Federal Decree-Law No. 8 of 2017, Auditclue delivers end-to-end Value Added Tax advisory across Dubai and the UAE. From strategic TRN registration and quarterly return filings to complex designated zone treatments and voluntary disclosures, our certified tax agents protect your business from statutory penalties.
              </p>

              {/* Statutory Metric Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-6 border-t border-[#CBD5E1]/70">
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Standard Rate</div>
                  <div className="text-2xl font-serif font-bold text-[#071426]">5.0%</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Goods & Services</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Mandatory Limit</div>
                  <div className="text-2xl font-serif font-bold text-[#071426]">AED 375k</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Annual Turnover</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Filing Frequency</div>
                  <div className="text-2xl font-serif font-bold text-[#071426]">Quarterly</div>
                  <div className="text-[11px] text-[#216D56] font-sans">28 Days Post-Close</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Audit Records</div>
                  <div className="text-2xl font-serif font-bold text-[#071426]">5 Years</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Statutory Retention</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#consultation"
                  className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                >
                  <span
                    className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Talk With an Advisor</span>
                    <span className="text-lg leading-none font-sans">↳</span>
                  </span>
                </a>

                <a
                  href="https://wa.me/971547338583"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#071426] hover:bg-[#12273F] text-white text-base font-semibold px-6 py-4 rounded-xl shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp Us</span>
                  <ArrowUpRight className="w-4 h-4 text-white/70" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. STATUTORY REGISTRATION THRESHOLDS: Mandatory vs Voluntary      */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                STATUTORY CRITERIA
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                UAE VAT Registration Thresholds & Legal Deadlines
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                Under UAE Federal Decree-Law No. 8 of 2017, determining your exact registration threshold is critical. Missing mandatory deadlines results in automatic FTA administrative fines of AED 10,000.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {REGISTRATION_THRESHOLDS.map((tier, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-7 flex flex-col justify-between hover:shadow-lg transition-all relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${tier.tagColor}`}>
                        {tier.tag}
                      </span>
                      <span className="text-xs font-mono text-[#64748B]">Tier {idx + 1}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#071426] mb-1">
                      {tier.type}
                    </h3>

                    <div className="text-3xl font-serif font-bold text-[#216D56] mb-2">
                      {tier.amount}
                    </div>

                    <div className="text-xs font-mono text-[#64748B] mb-4 pb-4 border-b border-[#CBD5E1]/80">
                      Basis: {tier.timeframe}
                    </div>

                    <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-6">
                      {tier.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2E8F0] text-xs font-sans text-[#216D56] bg-white -mx-6 -mb-6 p-4 rounded-b-3xl border-b">
                    <span className="font-semibold block mb-0.5">Statutory Note:</span>
                    <span className="text-[#64748B]">{tier.penaltyNote}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. 15 DETAILED SCOPED DELIVERABLES (Pinned Stacking Deck)         */}
        {/* ================================================================= */}
        <section
          ref={stackWrapperRef}
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  FULL PRACTICE SCOPE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  15 Scoped Deliverables in UAE VAT Compliance
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span className="hidden md:inline">Scroll to Reveal VAT Protocol (8 Phases)</span>
                <span className="md:hidden">15 Scoped Deliverables</span>
              </div>
            </div>

            <div
              ref={cardsContainerRef}
              className="relative w-full flex flex-col gap-4 md:gap-0 md:overflow-hidden"
            >
              {VAT_PAIRS.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="setup-stacked-card w-full md:rounded-3xl md:bg-white md:p-7 md:border md:border-[#CBD5E1]/80 md:shadow-[0_-14px_36px_rgba(7,20,38,0.08)] flex flex-col justify-between"
                  style={{ zIndex: 10 + pIdx }}
                >
                  {/* Phase Row Header - HIDDEN on mobile as per user request */}
                  <div className="hidden md:flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Phase {pair.phase} / 08
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426]">
                        {pair.label}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
                      <span>
                        Deliverable{pair.items.length > 1 ? `s ${pair.items[0].num} & ${pair.items[1].num}` : ` ${pair.items[0].num}`} of 15
                      </span>
                    </div>
                  </div>

                  {/* 2-by-2 Grid (Left & Right on Desktop, Clean Cards on Mobile) */}
                  <div className={`grid grid-cols-1 ${pair.items.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1"} gap-4 sm:gap-6`}>
                    {pair.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-5 sm:p-7 rounded-2xl bg-white md:bg-[#F8FAFC] border border-[#CBD5E1]/90 hover:border-[#36A783] hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="font-mono text-xs font-bold text-[#36A783] bg-[#EAF4F0] px-2.5 py-1 rounded-md">
                              [{item.num}] PRACTICE
                            </span>
                            <span className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#36A783]" />
                              <span>{item.turnaround}</span>
                            </span>
                          </div>

                          <h4 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug mb-3">
                            {item.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-5">
                            {item.scope}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#CBD5E1]/70">
                          <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mb-1.5">
                            Key Deliverable:
                          </div>
                          <div className="text-xs font-medium text-[#216D56] bg-[#EAF4F0] p-3 rounded-xl border border-[#36A783]/20 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
                            <span className="leading-snug">
                              {item.deliverable}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. STATUTORY FILING DEADLINES & FTA PENALTIES SCHEDULE            */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Statutory Filing Timetable Callout (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                    STATUTORY TIMETABLE
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    The 28-Day Filing Rule & Penalty Exposure
                  </h2>
                  <p className="text-sm sm:text-base text-[#475569] font-sans leading-relaxed">
                    Under Federal Law, tax periods are assigned on a quarterly basis (e.g. Q1 ending March 31, Q2 ending June 30) or monthly for specific corporate categories.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#071426] text-white border border-white/10 relative overflow-hidden shadow-xl">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#36A783]/15 rounded-full blur-2xl pointer-events-none" />
                  
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#83D9BE] bg-white/10 px-3 py-1 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-[#36A783]" />
                      <span>OFFICIAL SUBMISSION RULE</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white leading-snug">
                      28th Day of the Subsequent Month
                    </h3>

                    <p className="text-xs text-[#CBD5E1] font-sans leading-relaxed">
                      Your Form 201 must be officially submitted and tax payments received into the FTA account by the 28th. If the 28th falls on a weekend or public holiday, the deadline moves to the immediate first business day.
                    </p>

                    <div className="pt-3 border-t border-white/10 text-xs font-mono text-[#C6F850]">
                      ⚡ Auditclue guarantees filing sign-off 5 days prior to statutory cut-off.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Official Administrative Penalties Table (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-[#F8FAFC] border border-[#CBD5E1] rounded-3xl p-6 sm:p-7 shadow-sm">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#CBD5E1]">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span className="font-mono text-xs font-bold text-[#071426] uppercase">
                        Cabinet Decision No. 49 of 2021 Penalty Schedule
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#64748B]">Updated 2026</span>
                  </div>

                  <div className="divide-y divide-[#E2E8F0]">
                    {VAT_PENALTIES_TABLE.map((row, idx) => (
                      <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="text-xs sm:text-sm font-serif font-bold text-[#071426]">
                            {row.violation}
                          </div>
                          <div className="text-[11px] text-[#64748B] font-sans">
                            {row.timeLimit}
                          </div>
                        </div>
                        <div className="sm:text-right shrink-0">
                          <span className="inline-block text-xs font-mono font-bold text-red-700 bg-red-50 px-2.5 py-1 rounded-md border border-red-200">
                            {row.penalty}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-[#E2E8F0] text-center">
                    <span className="text-xs text-[#64748B] font-sans">
                      Need urgent penalty remediation or reconsideration?{" "}
                      <a href="#consultation" className="text-[#36A783] font-semibold underline hover:text-[#216D56]">
                        Speak with our Tax Agents
                      </a>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. REQUIRED DOCUMENTS & KYC ONBOARDING CHECKLIST                  */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                CLIENT PREPARATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                Required Documents for UAE VAT Registration & Filing
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                To guarantee zero rejection from the FTA EmaraTax portal, your dedicated Auditclue team reviews and pre-validates each of the following documentation sets:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REQUIRED_DOCUMENTS.map((group, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl bg-white border border-[#CBD5E1]/80 p-6 sm:p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-[#216D56] uppercase mb-4 pb-3 border-b border-[#E2E8F0]">
                      <FileText className="w-4 h-4 text-[#36A783]" />
                      <span>{group.category}</span>
                    </div>

                    <ul className="space-y-3">
                      {group.items.map((itemText, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2.5 text-xs text-[#334155] leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0 mt-0.5" />
                          <span>{itemText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E2E8F0] text-[11px] font-mono text-[#64748B]">
                    Secure AES-256 cloud upload provided via portal.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. STEP-BY-STEP ENGAGEMENT TIMELINE                               */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                SYSTEMATIC TIMELINE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                How Auditclue Delivers Your VAT Mandate
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                From initial turnover discovery to official FTA TRN acquisition or return submission, our 4-stage digital protocol eliminates administrative delays:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENGAGEMENT_TIMELINE.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-6 bg-[#F8FAFC] border border-[#CBD5E1] relative overflow-hidden flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#36A783]" />
                  
                  <div>
                    <div className="font-mono text-xs font-bold text-[#36A783] mb-2">
                      {step.day}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#071426] mb-3">
                      {step.phase}
                    </h3>
                    <p className="text-xs text-[#475569] leading-relaxed font-sans">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#CBD5E1]/60 flex items-center gap-1.5 text-[11px] font-mono text-[#216D56]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                    <span>Stage Verified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 7. FREQUENTLY ASKED QUESTIONS (FAQS) ACCORDION                    */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                EXPERT ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                UAE VAT Compliance FAQs
              </h2>
              <p className="text-base text-[#475569] font-sans">
                Clear statutory answers to common questions asked by UAE business owners and corporate finance teams.
              </p>
            </div>

            <div className="space-y-4">
              {VAT_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-[#CBD5E1]/90 shadow-2xs overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-[#071426] hover:text-[#216D56] transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <div className="w-7 h-7 rounded-full bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0">
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] font-sans leading-relaxed border-t border-[#F1F5F9]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 8. EMBEDDED CONSULTATION SECTION (With Turnstile & Anti-Spam)      */}
        {/* ================================================================= */}
        <section
          id="consultation"
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                    DIRECT ADVISORY ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Speak Directly With a UAE VAT Specialist
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Need immediate assistance with TRN registration, complex input recovery, or upcoming quarterly return filing? Speak with a licensed Tax Agent today.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Phone */}
                  <a
                    href="tel:+971547338583"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#36A783] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">
                        Call Now / Direct Line:
                      </div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/971547338583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#071426] text-white border border-white/10 hover:border-[#25D366] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#83D9BE]">
                        WhatsApp Priority Desk:
                      </div>
                      <div className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#83D9BE] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@auditclue.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#36A783] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">Email Inquiries:</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors">
                        info@auditclue.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7">
                <ContactForm defaultService="UAE VAT Services" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 9. EXPLORE OTHER SERVICES                                         */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-1">
                PRACTICE DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#071426]">
                Explore Other Services
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {OTHER_SERVICES.map((s, idx) => (
                <Link
                  key={idx}
                  href={s.href}
                  className="p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#36A783] hover:shadow-sm transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-serif font-medium text-[#071426] group-hover:text-[#216D56] transition-colors">
                    {s.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#36A783] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* CONTEXTUAL VAT & TAX CALCULATOR BANNER (Topic Clustering SEO)     */}
        {/* ================================================================= */}
        <section className="py-12 bg-gradient-to-r from-[#EAF4F0] via-white to-[#F1F5F9] border-y border-[#CBD5E1]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#216D56] uppercase tracking-wider mb-2">
                <Calculator className="w-3.5 h-3.5 text-[#36A783]" />
                <span>INSTANT 5% VAT & CORPORATE TAX SIMULATOR</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#071426] mb-2">
                Estimate Your VAT & Corporate Tax Position in Real Time
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed">
                Calculate input tax recovery, 5% standard rate supplies, and simulate your 2024–2029 UAE Corporate Tax liability with our certified statutory tool.
              </p>
            </div>
            <Link
              href="/calculator"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#071426] hover:bg-[#216D56] text-white text-sm font-semibold tracking-wide transition-all shadow-md hover:shadow-lg shrink-0 group"
            >
              <span>Open Tax & VAT Calculator</span>
              <ArrowRight className="w-4 h-4 text-[#C6F850] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 10. FINAL BOTTOM CALL TO ACTION                                    */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#071426] text-white text-center relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Protect Your Enterprise With FTA-Certified Tax Agents
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E1] font-sans max-w-2xl mx-auto mb-8">
              Guaranteed accuracy, itemized input tax optimization, and zero penalty liability across all seven Emirates.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6F850] hover:bg-white text-[#071426] text-base font-bold px-8 py-4 rounded-xl transition-all shadow-md"
              >
                <span>Talk With an Advisor</span>
                <span className="text-lg leading-none font-sans">↳</span>
              </a>

              <a
                href="https://wa.me/971547338583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-7 py-4 rounded-xl border border-white/15 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
