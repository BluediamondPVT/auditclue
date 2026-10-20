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
  Calculator,
  Calendar,
  FileCheck2,
  AlertTriangle,
  HelpCircle,
  ChevronDown,
  Building2,
  Landmark,
  Scale,
  FileSpreadsheet,
  Check,
  Lock,
  Clock,
  Layers,
  Search,
  BookOpen,
} from "lucide-react";

interface ServiceCluster {
  id: string;
  tag: string;
  title: string;
  summary: string;
  lawRef: string;
  deliverables: string[];
  servicesList: {
    name: string;
    description: string;
    deliverable: string;
  }[];
}

const CLUSTERS: ServiceCluster[] = [
  {
    id: "registration-assessment",
    tag: "PHASE 01 — INTAKE & DIAGNOSTIC",
    title: "Registration, Impact Assessment & Scoping",
    summary:
      "Statutory onboarding to ensure your entity obtains a valid Corporate Tax Registration Number (TRN) without missing FTA mandated deadlines or triggering late registration fines.",
    lawRef: "FTA Decision No. 3 of 2024 / Decree-Law 47 (Art. 51)",
    deliverables: [
      "Official Corporate Tax Registration Certificate (EmaraTax)",
      "Comprehensive Corporate Tax Impact Matrix",
      "Chart of Accounts Gap Analysis & Reclassification Report",
      "Statutory Corporate Tax Compliance Calendar",
    ],
    servicesList: [
      {
        name: "Corporate Tax Registration",
        description:
          "End-to-end registration on the EmaraTax portal for Mainland LLCs, Free Zone entities, branches, and foreign legal persons to secure official TRN issuance.",
        deliverable: "FTA Issued Corporate Tax Registration Number (TRN)",
      },
      {
        name: "Corporate Tax Impact Assessment",
        description:
          "Pre-tax diagnostics analyzing your corporate chart of accounts, business models, and contractual cash flows to determine taxable vs exempt revenue.",
        deliverable: "Executive Tax Impact & Exposure Analysis Dossier",
      },
      {
        name: "Corporate Tax Health Check",
        description:
          "Comprehensive audit of historical general ledgers, trial balance lines, and expense deductibility to spot compliance gaps before FTA filing.",
        deliverable: "Pre-Filing Vulnerability & Remediation Report",
      },
      {
        name: "Tax Compliance Calendar",
        description:
          "Custom corporate compliance roadmap tracking financial year-ends, 9-month filing deadlines, provisional calculation checkpoints, and payment milestones.",
        deliverable: "Automated Statutory Milestone & Notification Ledger",
      },
    ],
  },
  {
    id: "computation-reliefs",
    tag: "PHASE 02 — STATUTORY TAX COMPUTATION",
    title: "Taxable Income Computation & Reliefs",
    summary:
      "Accurate determination of your taxable net profit under IFRS standards, maximizing eligible statutory deductions and verifying Small Business Relief (SBR) or Qualifying Free Zone status.",
    lawRef: "Ministerial Decision No. 73 of 2023 & Cabinet Decision 55/2023",
    deliverables: [
      "IFRS Adjusted Taxable Net Profit Calculation Sheet",
      "Small Business Relief (SBR) Election Documentation",
      "Free Zone Qualifying Income (0%) Substantiation File",
      "Tax Loss Carry-Forward & Utilization Ledger",
    ],
    servicesList: [
      {
        name: "Taxable Income Computation",
        description:
          "Converting audited accounting net profit to taxable income by adjusting for exempt income, non-deductible entertainment expenses (50%), fines, and interest capping.",
        deliverable: "Statutory Taxable Income Reconciliation Schedule",
      },
      {
        name: "Small Business Relief Advisory",
        description:
          "Electing for 0% Corporate Tax under MD 73/2023 for resident taxable persons with gross revenue equal to or below AED 3,000,000 for tax periods up to 2026.",
        deliverable: "SBR Formal Election Dossier & FTA Compliance Filing",
      },
      {
        name: "Free Zone Corporate Tax Advisory",
        description:
          "Strategic advisory for Free Zone enterprises to ensure full compliance with the strict criteria required to enjoy 0% Corporate Tax on Qualifying Income.",
        deliverable: "Free Zone Tax Optimization & Compliance Blueprint",
      },
      {
        name: "Qualifying Free Zone Person Assessment",
        description:
          "Rigorous technical audit verifying adequate substance, core income-generating activities (CIGA), de minimis threshold compliance, and audited accounts.",
        deliverable: "QFZP Certification & De Minimis Risk Scorecard",
      },
      {
        name: "Tax Loss Review",
        description:
          "Validating and tracking allowable tax losses that can be carried forward indefinitely to offset up to 75% of taxable income in subsequent financial years.",
        deliverable: "75% Tax Loss Carry-Forward & Utilization Tracker",
      },
    ],
  },
  {
    id: "related-parties-groups",
    tag: "PHASE 03 — INTER-COMPANY STRUCTURING",
    title: "Related Parties, Tax Groups & Planning",
    summary:
      "Protecting corporate groups against FTA adjustments by ensuring related party pricing meets the Arm's Length Principle and structuring single tax group returns for 95% owned subsidiaries.",
    lawRef: "Federal Decree-Law No. 47 (Art. 34 & 40) / Transfer Pricing Guide",
    deliverables: [
      "Arm's Length Benchmark & Related Party Transaction Register",
      "Tax Group Formation & Single Tax Return Dossier",
      "Inter-Company Service & Loan Defense Pack",
      "Statutory Corporate Tax Structure Advisory Memorandum",
    ],
    servicesList: [
      {
        name: "Related Party Transaction Review",
        description:
          "Scrutinizing transactions between connected persons and affiliated entities to substantiate market valuation and maintain defense against FTA Article 34 audits.",
        deliverable: "Related Party Schedule & Arm's Length Proof Pack",
      },
      {
        name: "Tax Group Advisory",
        description:
          "Advisory on forming a statutory UAE Tax Group between a resident parent and UAE subsidiaries (95% share capital and voting rights) to file a single unified tax return.",
        deliverable: "Tax Group Feasibility, Setup & Consolidation Model",
      },
      {
        name: "Corporate Tax Planning",
        description:
          "Legitimate, compliant strategic planning to optimize business ownership structures, holding companies, IP asset allocation, and dividend distribution under UAE law.",
        deliverable: "Bespoke Corporate Tax Structure Advisory Memorandum",
      },
    ],
  },
  {
    id: "filing-representation",
    tag: "PHASE 04 — FILING & REPRESENTATION",
    title: "Return Filing, Documentation & FTA Representation",
    summary:
      "End-to-end execution of your official tax return on the FTA portal, maintaining 7-year bank-grade documentation vaults, and defending your filings against audit clarifications.",
    lawRef: "Federal Tax Procedures Law (Decree-Law No. 28 of 2022)",
    deliverables: [
      "Official FTA Tax Return Submission Confirmation & Receipt",
      "7-Year Statutory Audit & Corporate Tax Documentation Vault",
      "FTA Clarification & Information Request Response Brief",
      "Penalty Waiver / Reconsideration Petitions (if applicable)",
    ],
    servicesList: [
      {
        name: "Corporate Tax Return Filing",
        description:
          "Complete preparation, partner sign-off, and digital submission of the official Corporate Tax Return on EmaraTax within 9 months of your financial year-end.",
        deliverable: "Official FTA Submission Acknowledgment & Tax Payment Slip",
      },
      {
        name: "Corporate Tax Documentation",
        description:
          "Curating, indexing, and securing all financial statements, invoices, and statutory working papers in our AES-256 vault for the mandatory 7-year retention period.",
        deliverable: "Board-Ready 7-Year Tax Documentation Archive",
      },
      {
        name: "FTA Query Support",
        description:
          "Direct representation by registered FTA Tax Agents to draft legally sound, technically documented responses to FTA audit inquiries and information notices.",
        deliverable: "FTA Official Clarification Representation & Response Brief",
      },
      {
        name: "Corporate Tax Penalty Advisory",
        description:
          "Strategic advocacy for penalty mitigation, waiver requests, and reconsideration petitions submitted to the Tax Disputes Resolution Committee (TDRC).",
        deliverable: "Formal Penalty Reconsideration & Mitigation Appeal Dossier",
      },
    ],
  },
];

const TAX_RATE_BRACKETS = [
  {
    bracket: "Bracket 01",
    label: "0% Statutory Baseline",
    threshold: "Taxable Net Profit up to AED 375,000",
    rate: "0% Tax",
    appliesTo: "All UAE Mainland LLCs and Free Zone Entities",
    note: "Universal baseline threshold designed to foster SME growth across the UAE.",
  },
  {
    bracket: "Bracket 02",
    label: "9% Standard Corporate Tax",
    threshold: "Taxable Net Profit Exceeding AED 375,000",
    rate: "9% Tax",
    appliesTo: "Profits above AED 375,000",
    note: "One of the world's most competitive headline corporate tax rates.",
  },
  {
    bracket: "Bracket 03",
    label: "0% Small Business Relief (SBR)",
    threshold: "Gross Annual Revenue ≤ AED 3,000,000",
    rate: "0% Tax",
    appliesTo: "Resident Taxable Persons (periods ending on or before Dec 31, 2026)",
    note: "Taxable income is treated as NIL upon election under MD No. 73 of 2023.",
  },
  {
    bracket: "Bracket 04",
    label: "0% Qualifying Free Zone Person (QFZP)",
    threshold: "Qualifying Income Derived from Approved Activities",
    rate: "0% Tax",
    appliesTo: "Free Zone Entities with adequate substance & audited accounts",
    note: "Cabinet Decision 55/2023. Non-qualifying income taxed at 9%.",
  },
];

const PENALTY_SAFEGUARDS = [
  {
    violation: "Late Corporate Tax Registration",
    fine: "AED 10,000 Fixed Fine",
    impact: "Triggered automatically if TRN is not requested by FTA designated timelines.",
    solution: "Auditclue expedites EmaraTax application within 24–48 hours.",
  },
  {
    violation: "Late Return Submission",
    fine: "AED 500/mo rising to AED 1,000+",
    impact: "Progressive fines plus statutory compounding interest on unpaid dues.",
    solution: "Automated compliance calendar with 60-day pre-deadline execution.",
  },
  {
    violation: "Failure to Maintain 7-Year Records",
    fine: "AED 10,000 up to AED 20,000",
    impact: "Auditors and FTA inspectors reject deductions and disallow business expenses.",
    solution: "Secure AES-256 cloud documentation vault included with every engagement.",
  },
  {
    violation: "Incorrect Tax Return Filing",
    fine: "Percentage of Underpaid Tax + Fines",
    impact: "Penalties ranging from 1% up to 50% on understated tax liabilities.",
    solution: "Multi-tier review by Certified Chartered CPAs and registered FTA Tax Agents.",
  },
];

const STATUTORY_FAQS = [
  {
    q: "Who is required to register for UAE Corporate Tax?",
    a: "Every taxable person — including UAE Mainland LLCs, Free Zone companies, branch offices of foreign entities, and individuals conducting commercial business under a trade license in the UAE — must register with the Federal Tax Authority and obtain a Corporate Tax Registration Number (TRN), regardless of whether they have made a profit or not.",
  },
  {
    q: "How does Small Business Relief (SBR) apply in practice?",
    a: "Under Ministerial Decision No. 73 of 2023, resident entities with gross annual revenue of AED 3,000,000 or below in a tax period can elect for Small Business Relief. When elected, your taxable net profit is treated as zero (0% tax liability), and you are exempt from transfer pricing documentation requirements. However, you must still register, maintain financial records, and submit a simplified Corporate Tax Return.",
  },
  {
    q: "Can a Free Zone company maintain 0% Corporate Tax?",
    a: "Yes, if the entity qualifies as a Qualifying Free Zone Person (QFZP). The conditions under Federal Decree-Law No. 47 and Cabinet Decision No. 55 of 2023 include: (1) maintaining adequate economic substance in the UAE, (2) deriving Qualifying Income from transactions with other Free Zone entities or approved wholesale/manufacturing activities, (3) not electing to be subject to the standard 9% rate, (4) complying with transfer pricing rules, and (5) preparing audited IFRS financial statements.",
  },
  {
    q: "What is the official deadline to submit the Corporate Tax Return?",
    a: "The Corporate Tax Return and tax payments must be filed within 9 months from the end of the relevant financial tax period. For example, if your financial year ends on December 31, 2024, your statutory filing and settlement deadline is September 30, 2025.",
  },
  {
    q: "What documents must be maintained to defend deductions?",
    a: "Article 56 of the Corporate Tax Law requires taxable persons to retain all financial records, trial balances, general ledgers, commercial contracts, bank statements, and invoices for a statutory period of 7 years following the end of the tax period.",
  },
];

export default function CorporateTaxClient() {
  const [activeClusterId, setActiveClusterId] = useState<string>(
    CLUSTERS[0].id
  );
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const activeCluster =
    CLUSTERS.find((c) => c.id === activeClusterId) || CLUSTERS[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. CINEMATIC STATUTORY HERO: Editorial Split with Live Metrics    */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-14 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Ambient Lighting Orbs & Precision Grid */}
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
                UAE Corporate Tax Advisory
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Column: Editorial Headline & Value Thesis */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                  <span>FEDERAL DECREE-LAW NO. 47 • FTA REGISTERED</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.08] mb-6">
                  <FlowText
                    text="UAE Corporate Tax Advisory & Statutory Compliance."
                    as="span"
                  />
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-2xl mb-8">
                  Navigate the statutory 9% Corporate Tax regime with registered
                  FTA Tax Agents. From EmaraTax registration and 0% Small
                  Business Relief elections to Free Zone Qualifying Income
                  structuring and return filing — delivered 100% digitally.
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
                      <span>Schedule Tax Diagnostic</span>
                      <span className="text-lg leading-none font-sans">↳</span>
                    </span>
                  </a>

                  <Link
                    href="/calculator"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F1F5F9] text-[#071426] text-base font-semibold px-6 py-4 rounded-xl border border-[#CBD5E1] transition-all shadow-sm hover:border-[#36A783]"
                  >
                    <Calculator className="w-4 h-4 text-[#36A783]" />
                    <span>Launch 2024–2026 Tax Simulator</span>
                  </Link>
                </div>

                {/* Micro Assurance Checklist */}
                <div className="mt-8 pt-6 border-t border-[#CBD5E1]/70 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#556980]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>0% SBR Election (AED 3M)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Free Zone 0% QFZP Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>Zero Penalty Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Poster with Glassmorphism Overlay */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-[#CBD5E1]/80 shadow-2xl bg-white p-2 sm:p-3">
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden">
                    <Image
                      src="/images/services-images/UAE Corporate Tax Finance Poster.webp"
                      alt="UAE Corporate Tax Advisory Framework Auditclue"
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
                        STATUTORY BENCHMARK
                      </span>
                      <span className="text-xs font-mono bg-[#36A783]/20 border border-[#36A783]/40 text-[#C6F850] px-2 py-0.5 rounded-full">
                        EmaraTax Ready
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white mb-1">
                      9% Standard Rate
                    </div>
                    <p className="text-xs text-[#CBD5E1] font-sans">
                      0% on first AED 375k profit · 0% SBR up to AED 3M revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. STATUTORY TAX BRACKETS: Clean Typographic Architecture (NO BOXES)*/}
        {/* ================================================================= */}
        <section className="py-14 sm:py-20 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-6 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  STATUTORY TAX RATE BRACKETS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  Federal Decree-Law No. 47 Rate Architecture
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                Cabinet Decision No. 55 & MD No. 73 of 2023
              </div>
            </div>

            {/* Clean Typographic Hairline Strip (No Boring Card Grid) */}
            <div className="divide-y divide-[#E2E8F0]">
              {TAX_RATE_BRACKETS.map((item, idx) => (
                <div
                  key={idx}
                  className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-[#F8FAFC] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl"
                >
                  <div className="md:col-span-3 flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-[#36A783]">
                      [{item.bracket}]
                    </span>
                    <span className="text-lg sm:text-xl font-serif font-semibold text-[#071426]">
                      {item.label}
                    </span>
                  </div>

                  <div className="md:col-span-4">
                    <div className="text-2xl sm:text-3xl font-serif font-light text-[#216D56]">
                      {item.rate}
                    </div>
                    <div className="text-xs text-[#64748B] font-mono mt-0.5">
                      {item.threshold}
                    </div>
                  </div>

                  <div className="md:col-span-5">
                    <div className="text-sm font-semibold text-[#071426] mb-1">
                      {item.appliesTo}
                    </div>
                    <div className="text-xs text-[#556980] leading-relaxed">
                      {item.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. THE 16 GRANULAR SERVICES: Interactive Strategic Cluster Console*/}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 lg:py-28 bg-[#EEF2F7] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12 sm:mb-16">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                COMPLETE 16-PRACTICE DIRECTORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-tight">
                End-to-End Corporate Tax Scope & Deliverables
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                Rather than generic advice, our registered advisors execute all
                16 statutory deliverables under UAE Federal Tax Authority mandates.
              </p>
            </div>

            {/* Strategic Cluster Navigation Tabs (4 Strategic Pillars) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
              {CLUSTERS.map((cluster, cIdx) => {
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

            {/* Deep Interactive Cluster Showcase Stage */}
            <div className="bg-white border border-[#CBD5E1]/90 rounded-3xl p-6 sm:p-10 shadow-xl">
              {/* Cluster Header & Statutory Ref */}
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
                  {activeCluster.lawRef}
                </div>
              </div>

              {/* The Granular Services in this Cluster */}
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
                          Official Deliverable:
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
                  Engagement Milestone Output Deliverables Included:
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
        {/* 4. PENALTY RISK MATRIX: Protecting Clients from Late FTA Fines    */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-8 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#EF4444] font-bold block mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>STATUTORY PENALTY MITIGATION</span>
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  Protecting Your Entity from FTA Fines
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                Cabinet Decision No. 75 of 2023 on Penalties
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PENALTY_SAFEGUARDS.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FFFBFB] border border-[#FECACA] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[11px] font-bold text-[#DC2626] bg-[#FEE2E2] px-2.5 py-0.5 rounded-full inline-block mb-3">
                      {p.fine}
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#071426] mb-2 leading-snug">
                      {p.violation}
                    </h3>
                    <p className="text-xs text-[#7F1D1D] mb-4 leading-relaxed font-sans">
                      {p.impact}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#FCA5A5]/40 text-xs text-[#216D56] font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#36A783] shrink-0" />
                    <span>{p.solution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. 5-STEP AUDITCLUE OPERATING PROTOCOL: Timeline (Zero Boxes)     */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                DELIVERY PROTOCOL
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426]">
                5-Stage Digital Filing Lifecycle
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#4A5D73]">
                Zero physical office visits. Encrypted, trackable, and backed by
                firm sign-off.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {[
                {
                  step: "01",
                  title: "Digital Vault Intake",
                  desc: "Upload trial balances, TB schedules, and contracts to our AES-256 secure vault.",
                  sla: "Day 01",
                },
                {
                  step: "02",
                  title: "Tax Gap Diagnostic",
                  desc: "Senior advisors test for non-deductible items, entertainment caps, and related party terms.",
                  sla: "Day 02–03",
                },
                {
                  step: "03",
                  title: "Computation & Reliefs",
                  desc: "Compute IFRS taxable profit, claim Small Business Relief or Free Zone QFZP status.",
                  sla: "Day 04–05",
                },
                {
                  step: "04",
                  title: "Partner Sign-off",
                  desc: "Certified Chartered Accountant and registered Tax Agent review and sign the return pack.",
                  sla: "Day 06",
                },
                {
                  step: "05",
                  title: "EmaraTax Submission",
                  desc: "Official digital filing on EmaraTax portal with client receipt and 7-year storage.",
                  sla: "Filing Confirmation",
                },
              ].map((s, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-[#CBD5E1] flex flex-col justify-between shadow-xs"
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
        {/* 6. STATUTORY FAQS ACCORDION: Authoritative Editorial Clarity      */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                STATUTORY GUIDANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426]">
                Frequently Asked Statutory Questions
              </h2>
            </div>

            <div className="divide-y divide-[#E2E8F0]">
              {STATUTORY_FAQS.map((faq, fIdx) => {
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
        {/* 7. ADVISORY CONSULTATION & BOOKING STAGE                           */}
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
              {/* Left Column: Direct Advisor Access */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#83D9BE]" />
                  <span>FTA REGISTERED TAX AGENT REVIEW</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Schedule Your Confidential Corporate Tax Diagnostic
                </h2>

                <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans">
                  Submit your details to speak directly with our senior
                  chartered tax partners. We assess your Small Business Relief
                  eligibility, Free Zone qualifications, and provide itemized
                  fixed-fee scoping within 24 hours.
                </p>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#83D9BE]">
                    Direct Tax Desk Hotline
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    +971 54 733 8583
                  </div>
                  <div className="text-xs text-[#A8B7C9]">
                    Mon – Sat · 9:00 AM – 6:00 PM GST · WhatsApp & Phone
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    <span>Strict NDA protection & bank-grade data security</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    <span>Registered FTA Tax Agent representation</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7 bg-white text-[#071426] p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#36A783] font-bold block mb-1">
                    CONFIDENTIAL ENGAGEMENT FORM
                  </span>
                  <div className="text-xl font-serif font-bold text-[#071426]">
                    Request Corporate Tax Diagnostic Pack
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
