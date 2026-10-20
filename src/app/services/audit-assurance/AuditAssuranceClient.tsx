"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  Building2,
  FileSpreadsheet,
  Check,
  Lock,
  Clock,
  Layers,
  Search,
  BookOpen,
  Award,
  Scale,
  Landmark,
  FileText,
  BadgeCheck,
} from "lucide-react";

interface ServiceCluster {
  id: string;
  tag: string;
  title: string;
  summary: string;
  standardsRef: string;
  deliverables: string[];
  servicesList: {
    name: string;
    description: string;
    deliverable: string;
  }[];
}

const AUDIT_CLUSTERS: ServiceCluster[] = [
  {
    id: "statutory-reporting",
    tag: "PILLAR 01 — STATUTORY ASSURANCE",
    title: "Statutory Reporting & IFRS Statements",
    summary:
      "Full independent assurance aligning financial reporting with International Financial Reporting Standards (IFRS) and International Standards on Auditing (ISA) for UAE licensing and banking requirements.",
    standardsRef: "ISA 700 / IFRS Standards / Commercial Companies Law",
    deliverables: [
      "Signed Independent Auditor's Report & Opinion",
      "Full IFRS Compliant Financial Statement Pack",
      "Comprehensive Notes to Financial Statements & Accounting Policies",
      "Official Digital Regulatory Filing Pack (DMCC, DIFC, DED)",
    ],
    servicesList: [
      {
        name: "External Audit Support",
        description:
          "End-to-end technical liaison and verification support providing independent credibility for external stakeholders, shareholders, and lenders.",
        deliverable: "Independent Auditor's Report & Statement of Financial Position",
      },
      {
        name: "Statutory Audit Coordination",
        description:
          "Managing the end-to-end statutory audit lifecycle to ensure seamless sign-off before regulatory deadlines across Mainland and UAE Free Zones.",
        deliverable: "Board-Ready Statutory Audit Dossier & Clearance Notice",
      },
      {
        name: "IFRS Financial Statements Preparation",
        description:
          "Drafting full general-purpose financial statements in strict accordance with International Financial Reporting Standards (IFRS / IFRS for SMEs).",
        deliverable: "Full IFRS 5-Component Financial Statement Pack",
      },
      {
        name: "Financial Statement Review",
        description:
          "Limited assurance review of interim or annual financial statements under ISRE 2400 to provide lenders and boards with timely validation.",
        deliverable: "Independent Review Report with Negative Assurance Opinion",
      },
      {
        name: "Audit Report Assistance",
        description:
          "Drafting executive presentation summaries, board audit committee memorandums, and multi-currency reporting disclosures.",
        deliverable: "Audit Committee Executive Briefing & Financial Summary",
      },
    ],
  },
  {
    id: "audit-readiness",
    tag: "PILLAR 02 — PRE-AUDIT PREPARATION",
    title: "Audit Readiness & Working Paper Vault",
    summary:
      "Transforming messy accounting ledgers into structured, fully documented audit files before external auditors arrive, reducing audit friction, time, and costs by up to 50%.",
    standardsRef: "PBC (Provided by Client) Standardized Dossier Protocol",
    deliverables: [
      "Standardized Audit Working Paper File (PBC Dossier)",
      "General Ledger to Financial Statement Reconciliation",
      "Fixed Asset Register & Verification Certificate",
      "Physical Inventory Valuation & Observation Certificate",
    ],
    servicesList: [
      {
        name: "Audit Readiness Support",
        description:
          "Pre-audit technical diagnostics testing your trial balance, balance sheet schedules, and documentation trails to identify discrepancies before fieldwork.",
        deliverable: "Pre-Audit Readiness Diagnostic & Remediation Roadmap",
      },
      {
        name: "Audit File Preparation",
        description:
          "Assembling complete Prepared-by-Client (PBC) files, bank confirmations, loan covenants, and lead schedules indexed for auditor inspection.",
        deliverable: "Complete Indexed PBC Digital Working Paper Vault",
      },
      {
        name: "Fixed Asset Verification",
        description:
          "Physical verification, tagging reconciliation, and impairment assessment of property, plant, equipment, and intangible assets.",
        deliverable: "Fixed Asset Register & Physical Verification Certificate",
      },
      {
        name: "Inventory Audit",
        description:
          "Observation and testing of year-end stock counts, inventory valuation methodology (FIFO/Weighted Average), and dead-stock obsolescence reserves.",
        deliverable: "Physical Inventory Count Observation & Valuation Memo",
      },
      {
        name: "Revenue Assurance Review",
        description:
          "Testing revenue recognition criteria under IFRS 15 (5-step model) across customer contracts, milestones, and billing records.",
        deliverable: "IFRS 15 Revenue Recognition & Cut-Off Audit Schedule",
      },
    ],
  },
  {
    id: "internal-governance",
    tag: "PILLAR 03 — INTERNAL CONTROLS & GOVERNANCE",
    title: "Internal Audit & Risk Governance",
    summary:
      "Evaluating internal accounting controls, segregation of duties, operating efficiency, and compliance frameworks to safeguard company assets and executive liability.",
    standardsRef: "IIA International Professional Practices Framework (IPPF)",
    deliverables: [
      "Internal Audit Charter & Risk Assessment Matrix",
      "Internal Control Deficiency & Remediation Report (Management Letter)",
      "Standard Operating Procedures (SOP) Internal Control Gap Analysis",
      "Executive Board Risk Governance Scorecard",
    ],
    servicesList: [
      {
        name: "Internal Audit",
        description:
          "Independent evaluation of operational processes, financial integrity, and compliance policies to provide management with actionable risk intelligence.",
        deliverable: "Formal Internal Audit Report with Actionable Recommendations",
      },
      {
        name: "Risk-Based Internal Audit",
        description:
          "Focusing audit resources on the business areas with the highest exposure to fraud, regulatory sanctions, financial misstatement, or liquidity risk.",
        deliverable: "Enterprise Risk Assessment Matrix & Strategic Audit Plan",
      },
      {
        name: "Internal Control Review",
        description:
          "Testing segregation of duties, authorization matrices, procurement pipelines, and cash handling protocols under the COSO framework.",
        deliverable: "Management Letter on Internal Control Deficiencies",
      },
      {
        name: "Management Audit",
        description:
          "Systematic appraisal of managerial performance, departmental efficiency, resource allocation, and adherence to corporate strategic goals.",
        deliverable: "Operational Efficiency & Executive Management Review",
      },
      {
        name: "Compliance Audit",
        description:
          "Testing organizational adherence to UAE statutory laws, labor regulations, Ministry decrees, and internal corporate governance charters.",
        deliverable: "Regulatory Compliance Audit Verification Matrix",
      },
    ],
  },
  {
    id: "specialized-investigations",
    tag: "PILLAR 04 — FORENSIC & SPECIAL ASSURANCE",
    title: "Forensic Investigation & Special Procedures",
    summary:
      "High-stakes independent investigations, financial due diligence for M&A acquisitions, and tailored Agreed-Upon Procedures (AUP) for banks, investors, or legal disputes.",
    standardsRef: "ISRS 4400 (Agreed-Upon Procedures) & Forensic Standards",
    deliverables: [
      "Agreed-Upon Procedures (AUP) Factual Findings Report",
      "Buy-Side / Sell-Side Financial Due Diligence Pack",
      "Forensic Accounting Investigation & Fraud Defense Dossier",
      "Shareholder Dispute / Valuation Evidence Memorandum",
    ],
    servicesList: [
      {
        name: "Agreed-Upon Procedures (AUP)",
        description:
          "Executing bespoke testing procedures agreed between you, third-party lenders, or regulators, producing objective factual findings under ISRS 4400.",
        deliverable: "ISRS 4400 Report of Factual Findings for Third Parties",
      },
      {
        name: "Due Diligence Audit",
        description:
          "Comprehensive financial, tax, and debt quality-of-earnings (QoE) investigations for prospective investors or business acquisitions.",
        deliverable: "Quality of Earnings (QoE) & Financial Due Diligence Dossier",
      },
      {
        name: "Forensic Audit Support",
        description:
          "In-depth investigation of suspected financial irregularities, asset misappropriation, payroll fraud, or transaction manipulation with litigation-ready evidence.",
        deliverable: "Forensic Evidence & Transaction Traceability Brief",
      },
    ],
  },
];

const STATUTORY_AUDIT_MANDATES = [
  {
    mandate: "MANDATE 01",
    authority: "UAE Mainland (DED) Law",
    basis: "Federal Decree-Law No. 32 of 2021",
    requirement: "Annual Audited Accounts Mandatory",
    detail:
      "Article 27 mandates that every commercial company registered on the UAE Mainland must appoint an auditor and maintain audited accounts for renewal and shareholder inspection.",
  },
  {
    mandate: "MANDATE 02",
    authority: "Free Zone Authorities",
    basis: "DMCC, DIFC, ADGM, DAFZA, JAFZA Regulations",
    requirement: "Annual Trade Licence Renewal",
    detail:
      "Free Zone authorities require audited financial statements uploaded within 90 to 180 days of the financial year-end to maintain company good-standing.",
  },
  {
    mandate: "MANDATE 03",
    authority: "Corporate Tax (0% QFZP)",
    basis: "Federal Decree-Law No. 47 (Art. 18)",
    requirement: "Strict Prerequisite for 0% Tax Benefit",
    detail:
      "Qualifying Free Zone Persons MUST prepare audited financial statements to legally maintain 0% Corporate Tax. Failing to audit forfeits the 0% benefit for 5 years.",
  },
  {
    mandate: "MANDATE 04",
    authority: "UAE Commercial Banks",
    basis: "Central Bank of the UAE Credit Guidelines",
    requirement: "Credit Facilities & Account Continuity",
    detail:
      "Commercial banks require audited financial statements for working capital loans, letter of credit (LC) lines, and periodic corporate KYC reviews.",
  },
];

const AUDIT_LIFECYCLE = [
  {
    step: "01",
    title: "Scoping & Engagement",
    desc: "Define audit scope, materiality thresholds, timeline, and issue engagement letter.",
    sla: "Day 01",
  },
  {
    step: "02",
    title: "Digital Vault PBC Upload",
    desc: "Upload trial balances, bank statements, asset ledgers, and schedules to our secure vault.",
    sla: "Day 02–04",
  },
  {
    step: "03",
    title: "Fieldwork & Substantive Testing",
    desc: "Audit team tests revenue, samples expenses, validates reconciliations, and inspects assets.",
    sla: "Day 05–08",
  },
  {
    step: "04",
    title: "Draft Financials & Partner Review",
    desc: "Draft IFRS statements and note disclosures undergo senior CPA audit partner quality review.",
    sla: "Day 09–10",
  },
  {
    step: "05",
    title: "Management Representation (MRL)",
    desc: "Review audit adjustments and sign off on the standard Management Representation Letter.",
    sla: "Day 11",
  },
  {
    step: "06",
    title: "Final Report & Authority Upload",
    desc: "Issuance of signed, sealed audit reports formatted for Free Zone and bank compliance.",
    sla: "Final Sign-off",
  },
];

const AUDIT_FAQS = [
  {
    q: "Is an annual statutory audit legally mandatory in the UAE?",
    a: "Yes. Under UAE Federal Decree-Law No. 32 of 2021 (Commercial Companies Law), all Mainland LLCs are required to have their financial accounts audited. Additionally, major Free Zones including DMCC, DIFC, ADGM, DAFZA, and JAFZA mandate annual audited financial statements for trade license renewal.",
  },
  {
    q: "Why is an audit critical under the new UAE Corporate Tax regime?",
    a: "Under Federal Decree-Law No. 47 of 2022, preparing audited financial statements is a mandatory legal condition for Free Zone companies wanting to maintain Qualifying Free Zone Person (QFZP) status and claim the 0% Corporate Tax rate. If a Free Zone company fails to prepare audited accounts, it forfeits its 0% status and is taxed at the standard 9% rate for 5 consecutive tax periods. Taxable persons with revenue exceeding AED 50,000,000 must also maintain audited accounts.",
  },
  {
    q: "What accounting framework is used for UAE statutory audits?",
    a: "UAE statutory audits are conducted in strict accordance with International Standards on Auditing (ISA), and financial statements must be prepared following International Financial Reporting Standards (IFRS) or IFRS for SMEs.",
  },
  {
    q: "Can the audit be conducted 100% digitally without physical visits?",
    a: "Yes. Auditclue operates an uncompromising, fully digital audit practice. All ledgers, bank statements, contracts, and supporting documents are submitted through our encrypted AES-256 cloud documentation vault. Fieldwork, substantive testing, and partner discussions are completed remotely, drastically reducing turnaround times.",
  },
  {
    q: "How long does a statutory audit take from start to sign-off?",
    a: "Once complete Prepared-by-Client (PBC) documentation is received, our standard turnaround time for SME statutory audits is 10 to 14 business days. Expedited timelines are available for urgent Free Zone license renewal deadlines.",
  },
];

export default function AuditAssuranceClient() {
  const [activeClusterId, setActiveClusterId] = useState<string>(
    AUDIT_CLUSTERS[0].id
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCluster =
    AUDIT_CLUSTERS.find((c) => c.id === activeClusterId) || AUDIT_CLUSTERS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: Pure Editorial Statement with Statutory Badge    */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-14 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Ambient Lighting Orbs */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[650px] h-[500px] bg-gradient-to-br from-[#36A783]/22 via-[#83D9BE]/18 to-transparent rounded-full blur-[130px] pointer-events-none animate-glow-pulse" />
            <div className="absolute -bottom-24 -left-20 w-[600px] h-[450px] bg-gradient-to-tr from-[#233F5B]/14 via-[#36A783]/12 to-transparent rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] bg-[#C6F850]/10 rounded-full blur-[110px] pointer-events-none" />
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
              <span className="text-[#64748B]">Practices</span>
              <span>/</span>
              <span className="text-[#071426] font-semibold">
                Statutory Audit & Assurance
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Editorial Headline & Value Proposition */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                  <span>IFRS & ISA STANDARDS • UAE BANK-READY ASSURANCE</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.08] mb-6">
                  <FlowText
                    text="Statutory Audit & Assurance Engineered for Certainty."
                    as="span"
                  />
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-2xl mb-8">
                  Independent, standards-driven financial audits and assurance
                  services. Protect your entity against Free Zone non-renewal
                  penalties, meet UAE Commercial Companies Law mandates, and
                  maintain bank-grade financial credibility — delivered 100%
                  digitally.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#consultation"
                    className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                  >
                    <span
                      className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Schedule Audit Scoping</span>
                      <span className="text-lg leading-none font-sans">↳</span>
                    </span>
                  </a>

                  <a
                    href="https://wa.me/971547338583"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F1F5F9] text-[#071426] text-base font-semibold px-6 py-4 rounded-xl border border-[#CBD5E1] transition-all shadow-sm hover:border-[#36A783]"
                  >
                    <span>Chat With Audit Partner</span>
                    <ArrowUpRight className="w-4 h-4 text-[#36A783]" />
                  </a>
                </div>

                {/* Micro Assurance Checklist */}
                <div className="mt-8 pt-6 border-t border-[#CBD5E1]/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#556980]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Free Zone Renewal Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>0% Corporate Tax QFZP Proof</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>UAE Commercial Bank Approved</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Asset with Glassmorphism Overlay */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-[#CBD5E1]/80 shadow-2xl bg-white p-2 sm:p-3">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/services-images/Magnified Audit Assurance Workspace.webp"
                      alt="Statutory Audit and Assurance Services Auditclue"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 550px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071426]/90 via-[#071426]/30 to-transparent" />
                  </div>

                  {/* Floating Glassmorphism Metric Card */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#071426]/85 backdrop-blur-md border border-white/15 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[11px] font-bold text-[#83D9BE] uppercase tracking-wider">
                        ASSURANCE BENCHMARK
                      </span>
                      <span className="text-xs font-mono bg-[#36A783]/20 border border-[#36A783]/40 text-[#C6F850] px-2 py-0.5 rounded-full">
                        ISA & IFRS
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                      100% Statutory Ready
                    </div>
                    <p className="text-xs text-[#CBD5E1] font-sans">
                      Mainland DED, DMCC, DIFC, ADGM, and UAE Bank credit line ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. STATUTORY AUDIT MANDATES: UAE Statutory Imperatives (NO BOXES) */}
        {/* ================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-6 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  STATUTORY DRIVERS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  Why Audited Financials are Mandatory in the UAE
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                UAE Federal Commercial & Tax Laws
              </div>
            </div>

            {/* Clean Typographic Strip (Zero Generic Boxes) */}
            <div className="divide-y divide-[#E2E8F0]">
              {STATUTORY_AUDIT_MANDATES.map((item, idx) => (
                <div
                  key={idx}
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#F8FAFC] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
                >
                  <div className="md:col-span-3 flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-[#36A783]">
                      [{item.mandate}]
                    </span>
                    <span className="text-lg sm:text-xl font-serif font-semibold text-[#071426]">
                      {item.authority}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <div className="text-xl sm:text-2xl font-serif font-medium text-[#216D56]">
                      {item.requirement}
                    </div>
                    <div className="text-xs text-[#64748B] font-mono mt-0.5">
                      {item.basis}
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <p className="text-xs sm:text-sm text-[#556980] leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. THE 18 GRANULAR SERVICES: Interactive 4-Pillar Assurance Console*/}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-[#EEF2F7] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                COMPLETE 18-PRACTICE DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-tight">
                Full Scope of Statutory & Specialized Assurance
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                From statutory year-end external audit coordination to internal
                control design and forensic accounting — engineered for board-level
                certainty.
              </p>
            </div>

            {/* Strategic Pillar Tabs (4 Strategic Assurance Pillars) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
              {AUDIT_CLUSTERS.map((cluster, cIdx) => {
                const isActive = cluster.id === activeClusterId;
                return (
                  <button
                    key={cluster.id}
                    onClick={() => setActiveClusterId(cluster.id)}
                    className={`px-4 sm:px-5 py-3 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? "bg-[#071426] text-[#C6F850] shadow-md border border-[#071426]"
                        : "bg-white text-[#4A5D73] hover:text-[#071426] hover:bg-white/80 border border-[#CBD5E1]"
                    }`}
                  >
                    <span className="opacity-60">0{cIdx + 1}.</span>
                    <span>{cluster.title.split("&")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Interactive Pillar Showcase Stage */}
            <div className="bg-white border border-[#CBD5E1]/90 rounded-3xl p-6 sm:p-10 shadow-xl">
              {/* Pillar Header */}
              <div className="pb-8 border-b border-[#E2E8F0] flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="max-w-2xl">
                  <span className="font-mono text-xs font-bold text-[#36A783] block mb-1">
                    {activeCluster.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#071426] font-medium">
                    {activeCluster.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#4A5D73] leading-relaxed">
                    {activeCluster.summary}
                  </p>
                </div>
                <div className="text-xs font-mono text-[#216D56] bg-[#EAF4F0] px-3.5 py-2 rounded-xl border border-[#36A783]/20 shrink-0">
                  {activeCluster.standardsRef}
                </div>
              </div>

              {/* Granular Services List in this Pillar */}
              <div className="py-8 divide-y divide-[#E2E8F0]">
                {activeCluster.servicesList.map((svc, sIdx) => (
                  <div
                    key={sIdx}
                    className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
                  >
                    <div className="lg:col-span-4">
                      <div className="font-serif text-lg sm:text-xl font-medium text-[#071426] group-hover:text-[#216D56] transition-colors flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
                        <span>{svc.name}</span>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-sm text-[#4A5D73] font-sans leading-relaxed">
                        {svc.description}
                      </p>
                    </div>

                    <div className="lg:col-span-3">
                      <div className="text-xs font-mono text-[#071426] bg-[#F1F5F9] border border-[#CBD5E1] p-2.5 rounded-xl">
                        <span className="text-[10px] text-[#64748B] block uppercase tracking-wider">
                          Official Output:
                        </span>
                        <span className="font-semibold text-[#216D56]">
                          {svc.deliverable}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables Checklist Footer */}
              <div className="pt-6 border-t border-[#E2E8F0] bg-[#F8FAFC] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                <div className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider mb-4">
                  Standard Statutory Report Components Included:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {activeCluster.deliverables.map((d, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-xs text-[#071426] font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. 6-STAGE AUDIT LIFECYCLE: Digital Operating Model (No Boxes)     */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                ASSURANCE LIFECYCLE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426]">
                6-Stage Digital Audit Protocol
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#4A5D73]">
                Zero physical office visits. Encrypted, trackable, and backed by
                CPA firm sign-off.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
              {AUDIT_LIFECYCLE.map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-col justify-between shadow-xs hover:border-[#36A783] transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-3xl font-serif font-light text-[#216D56]">
                        {s.step}
                      </span>
                      <span className="text-[11px] font-mono text-[#36A783] font-semibold bg-[#EAF4F0] px-2 py-0.5 rounded-full">
                        {s.sla}
                      </span>
                    </div>
                    <h3 className="text-base font-serif font-semibold text-[#071426] mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-xs text-[#556980] leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. STATUTORY AUDIT FAQS ACCORDION: Authoritative Editorial Clarity */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                AUDIT COMPLIANCE ADVISORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426]">
                Frequently Asked Audit & Assurance Questions
              </h2>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {AUDIT_FAQS.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div key={fIdx} className="py-5">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full text-left flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-[#071426] group-hover:text-[#216D56] transition-colors">
                        {faq.q}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full border border-[#CBD5E1] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 bg-[#071426] text-white" : "bg-white text-[#071426]"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-12">
                        <p className="text-sm sm:text-base text-[#4A5D73] font-sans leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. AUDIT CONSULTATION & SCOPING FORM                               */}
        {/* ================================================================= */}
        <section
          id="consultation"
          className="py-16 sm:py-24 bg-[#071426] text-white relative overflow-hidden"
        >
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#36A783]/15 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Audit Partner Access */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#83D9BE]" />
                  <span>SENIOR CPA & AUDIT PARTNER REVIEW</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Request Your Confidential Audit Scoping & Fee Proposal
                </h2>

                <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
                  Submit your entity details to speak with our senior audit
                  partners. We assess your transaction volumes, Free Zone
                  mandates, and provide a transparent, fixed-fee audit engagement
                  proposal within 24 hours.
                </p>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#83D9BE]">
                    Direct Audit Desk Line
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    +971 54 733 8583
                  </div>
                  <div className="text-xs text-[#A8B7C9]">
                    Mon – Sat · 9:00 AM – 6:00 PM GST · Free Zone & Mainland Desk
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    <span>Strict NDA protection & bank-grade AES-256 cloud vault</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    <span>Free Zone approved & bank-ready statutory deliverables</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7 bg-white text-[#071426] p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#36A783] font-bold block mb-1">
                    AUDIT ENGAGEMENT SCOPING
                  </span>
                  <div className="text-xl font-serif font-bold text-[#071426]">
                    Request Audit Proposal & PBC Checklist
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
