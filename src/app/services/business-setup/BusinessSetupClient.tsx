"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Award,
  Globe2,
  Landmark,
  Scale,
  CreditCard,
  FileCheck2,
  Users2,
  FileText,
  BadgeCheck,
  ChevronDown,
  Layers,
  Clock,
  Briefcase,
  SlidersHorizontal,
  Compass,
  Check,
  Zap,
} from "lucide-react";

// Interactive Jurisdiction Engine Types & Presets
type IndustryType = "tech" | "trading" | "advisory" | "holding";
type MarketScope = "uae-mainland" | "global-export";
type VisaTier = "1-2" | "3-5" | "6+";

interface RecommendationProfile {
  jurisdiction: string;
  type: string;
  timeline: string;
  foreignOwnership: string;
  corporateTaxStatus: string;
  bankReadiness: string;
  keyAdvantage: string;
  authorityBadge: string;
}

const JURISDICTION_RECOMMENDATIONS: Record<
  string,
  RecommendationProfile
> = {
  "tech-global-export": {
    jurisdiction: "Meydan / DMCC Free Zone",
    type: "Free Zone FZCO / LLC",
    timeline: "72 Hours to 4 Days",
    foreignOwnership: "100% Direct Foreign Ownership",
    corporateTaxStatus: "0% Qualifying Free Zone Person (QFZP) Eligible",
    bankReadiness: "Grade A+ (Wio Digital & Emirates NBD Priority)",
    keyAdvantage: "Zero customs duty on software/IP, central Dubai prime business address, premier tech ecosystem.",
    authorityBadge: "Dubai Free Zones Council Approved",
  },
  "tech-uae-mainland": {
    jurisdiction: "Dubai Economy & Tourism (DET Mainland)",
    type: "Mainland LLC (100% Expat Owned)",
    timeline: "3 to 5 Business Days",
    foreignOwnership: "100% Foreign Equity (No Local Sponsor Required)",
    corporateTaxStatus: "9% Standard Corporate Tax (0% on first AED 375k profit)",
    bankReadiness: "Grade A (Seamless Onboarding across all UAE Tier-1 Banks)",
    keyAdvantage: "Direct commercial contracts with UAE government entities, local banks, and retail clients without branch friction.",
    authorityBadge: "Government of Dubai Licensed",
  },
  "trading-global-export": {
    jurisdiction: "DMCC / JAFZA Free Zone",
    type: "Free Zone Trading Entity",
    timeline: "4 to 7 Business Days",
    foreignOwnership: "100% Direct Foreign Ownership",
    corporateTaxStatus: "0% on Qualifying Income from International Trading",
    bankReadiness: "Grade A (Recognized by Global Trade Finance Lenders)",
    keyAdvantage: "World's flagship commodities and multi-commodities center with direct port & customs integration.",
    authorityBadge: "DMCC Authority Certified",
  },
  "trading-uae-mainland": {
    jurisdiction: "Dubai Mainland (DED General Trading LLC)",
    type: "Mainland Commercial LLC",
    timeline: "3 to 5 Business Days",
    foreignOwnership: "100% Expat Ownership under Commercial Companies Law",
    corporateTaxStatus: "9% Standard Corporate Tax (SBR 0% up to AED 3M revenue)",
    bankReadiness: "Grade A+ (Immediate Working Capital & Trade Finance Access)",
    keyAdvantage: "Sell directly into Dubai, Abu Dhabi, Sharjah retail markets and import goods without customs bonded limitations.",
    authorityBadge: "DET Mainland Commercial License",
  },
  "advisory-global-export": {
    jurisdiction: "IFZA / Meydan / DIFC Prescribed",
    type: "Professional Consultancy FZCO",
    timeline: "48 to 72 Hours",
    foreignOwnership: "100% Direct Foreign Ownership",
    corporateTaxStatus: "0% Qualifying Free Zone Person Potential",
    bankReadiness: "Grade A (Wio, Mashreq NeoBiz & Commercial Bank of Dubai)",
    keyAdvantage: "Zero paid-up share capital requirement upon incorporation with premier executive flexi-desk allowances.",
    authorityBadge: "Dubai Premier Free Zone",
  },
  "advisory-uae-mainland": {
    jurisdiction: "Dubai Mainland Professional LLC",
    type: "Sole Establishment or Mainland LLC",
    timeline: "3 to 4 Business Days",
    foreignOwnership: "100% Foreign Ownership with Corporate Service Agent",
    corporateTaxStatus: "9% Corporate Tax with 0% SBR Election up to AED 3M",
    bankReadiness: "Grade A (Priority Account Opening across All Banks)",
    keyAdvantage: "Bid on UAE corporate advisory tenders, government contracts, and establish physical offices across any Dubai street.",
    authorityBadge: "DET Professional License",
  },
  "holding-global-export": {
    jurisdiction: "DIFC / ADGM / RAK ICC Offshore",
    type: "Private Holding Company / Special Purpose Vehicle (SPV)",
    timeline: "5 to 8 Business Days",
    foreignOwnership: "100% Foreign Ownership under English Common Law",
    corporateTaxStatus: "0% Participation Exemption on Dividends & Capital Gains",
    bankReadiness: "Grade A (Private Banking & Wealth Management Approved)",
    keyAdvantage: "Global investor gold standard for asset protection, international equity holding, and family office continuity.",
    authorityBadge: "Common Law Financial Center Regulated",
  },
  "holding-uae-mainland": {
    jurisdiction: "Dubai Mainland Holding LLC",
    type: "Corporate Holding Company",
    timeline: "4 to 6 Business Days",
    foreignOwnership: "100% Expat Ownership",
    corporateTaxStatus: "Participation Exemption under Article 23 (Decree-Law 47)",
    bankReadiness: "Grade A (Corporate Banking Priority)",
    keyAdvantage: "Consolidate UAE Mainland operating subsidiaries under a unified parent holding entity.",
    authorityBadge: "DET Holding Company License",
  },
};

// 4 Architectural Stages mapping all 16 granular services
const FORMATION_BLUEPRINT = [
  {
    phase: "PHASE 01",
    phaseName: "Legal Architecture & Activity Engineering",
    objective:
      "Precision selection of jurisdiction, statutory activities, and shareholder capitalization to maximize banking approval and minimize corporate tax liabilities.",
    deliverables: [
      "Jurisdiction Feasibility Matrix (Mainland vs Free Zone)",
      "Approved Activity Code Classification Dossier",
      "Draft Shareholding & Equity Distribution Framework",
      "Executive Business Plan for Licensing Clearance",
    ],
    services: [
      {
        title: "Jurisdiction & Activity Selection",
        desc: "Selecting the precise combination from 3,000+ official UAE economic activities across Mainland DED or 40+ Free Zones to prevent future licensing roadblocks.",
        output: "Official Activity Selection & Jurisdiction Feasibility Dossier",
      },
      {
        title: "Legal Structure Advisory",
        desc: "Structuring your corporate entity (LLC, FZCO, Branch Office, Holding Co, or Subsidiary) for 100% foreign equity and liability protection.",
        output: "Corporate Legal Structure Advisory Memorandum",
      },
      {
        title: "Business Plan for Licensing",
        desc: "Drafting bank- and regulator-compliant 3-year commercial business plans required by Free Zone authorities and financial institutions.",
        output: "Authority-Approved Institutional Business Plan",
      },
      {
        title: "Branch & Representative Office Setup",
        desc: "Establishing legal branch extensions for foreign multinationals or UAE mainland entities seeking operational presence across other emirates.",
        output: "Ministry of Economy Branch Incorporation Pack",
      },
    ],
  },
  {
    phase: "PHASE 02",
    phaseName: "Licensing, Charters & Government Formation",
    objective:
      "Direct electronic submission to government registries, drafting custom Articles of Association (AoA), and securing your official commercial trade license.",
    deliverables: [
      "Official UAE Commercial Trade License (DED / Free Zone)",
      "Notarized Electronic Memorandum of Association (e-MoA)",
      "Certificate of Commercial Registration (Chamber of Commerce)",
      "Lease Agreement / Virtual Office Ejari Certificate",
    ],
    services: [
      {
        title: "Mainland Company Formation",
        desc: "End-to-end setup with the Department of Economy & Tourism (DET) in Dubai, Abu Dhabi, or Sharjah with 100% foreign ownership rights.",
        output: "Mainland Commercial Trade License & Chamber of Commerce Certificate",
      },
      {
        title: "Free Zone Company Formation",
        desc: "Fast-track incorporation across flagship UAE Free Zones (DMCC, DIFC, ADGM, IFZA, Meydan, RAKEZ) with zero physical presence required.",
        output: "Official Free Zone Trade License & Certificate of Incorporation",
      },
      {
        title: "Offshore Company Formation",
        desc: "Incorporating asset-holding offshore SPVs (JAFZA Offshore, RAK ICC) for international property holding, confidentiality, and global restructuring.",
        output: "Certificate of Incorporation & Offshore Register of Members",
      },
      {
        title: "Trade Licence Application",
        desc: "Preparing all initial approvals, security clearances, name reservation certificates, and final electronic trade license issuance.",
        output: "Government Initial Approval & Official Trade License",
      },
      {
        title: "MOA / AOA Drafting Support",
        desc: "Custom bilingual (English/Arabic) drafting of Memorandum & Articles of Association with custom shareholder rights and profit distribution clauses.",
        output: "Notarized Digital MoA / AoA with UAE Ministry of Justice Seal",
      },
    ],
  },
  {
    phase: "PHASE 03",
    phaseName: "Corporate Banking, Residency & Sovereign Liaison",
    objective:
      "Overcoming the #1 UAE setup bottleneck: fast-track pre-clearance with Tier-1 UAE commercial banks and executive residency visa issuance.",
    deliverables: [
      "Operational Corporate Bank Account (IBAN & Multi-Currency)",
      "Investor / Partner Residency Visa (2-Year / 10-Year Golden Visa)",
      "Ministry of Human Resources (MoHRE) Establishment Card",
      "Federal Authority for Identity & Citizenship (ICP) E-Channel",
    ],
    services: [
      {
        title: "Corporate Bank Account Opening Support",
        desc: "Guaranteed pre-vetting of company documentation, source-of-wealth profiles, and direct introduction to relationship managers at Tier-1 UAE banks.",
        output: "Active Corporate IBAN (AED / USD / EUR) & Online Banking Tokens",
      },
      {
        title: "Visa & Establishment Card Assistance",
        desc: "End-to-end processing of corporate establishment cards, medical fitness VIP testing, biometric Emirates ID registration, and passport visa stamping.",
        output: "Residency Visas, Emirates IDs & MoHRE Quota Registration",
      },
      {
        title: "PRO & Government Liaison Support",
        desc: "Dedicated corporate PRO officers handling external ministry approvals (Dubai Civil Defence, Municipality, RTA, Ministry of Economy).",
        output: "External Regulatory Clearances & Ministerial Approvals",
      },
    ],
  },
  {
    phase: "PHASE 04",
    phaseName: "Post-Setup Compliance, UBO & Tax Onboarding",
    objective:
      "Transitioning your newly formed company into a fully compliant, tax-efficient operating entity within 30 days of trade license issuance.",
    deliverables: [
      "Official Corporate Tax Registration Certificate (EmaraTax TRN)",
      "Value Added Tax (VAT) Registration Certificate (5%)",
      "Statutory Ultimate Beneficial Ownership (UBO) Register",
      "First Financial Year Compliance & Accounting Setup Pack",
    ],
    services: [
      {
        title: "VAT & Corporate Tax Registration",
        desc: "Immediate post-setup registration on the Federal Tax Authority (FTA) EmaraTax portal to secure your Corporate Tax and VAT TRNs without delay.",
        output: "FTA Tax Registration Number (TRN) Certificates",
      },
      {
        title: "UBO Register & Filing",
        desc: "Establishing and filing the mandatory Ultimate Beneficial Ownership (UBO) and Register of Nominee Directors under Cabinet Decision No. 109/2023.",
        output: "Statutory UBO Register & Ministry Compliance Certificate",
      },
      {
        title: "Licence Renewal & Amendments",
        desc: "Annual license renewals, adding new business activities, appointing new directors, share transfers, and corporate address amendments.",
        output: "Renewed Trade License & Share Transfer Resolutions",
      },
      {
        title: "Post-Setup Compliance Onboarding",
        desc: "Setting up your corporate accounting chart of accounts, WPS payroll, statutory audit calendar, and annual compliance schedule.",
        output: "Auditclue Digital Compliance & Accounting Onboarding Pack",
      },
    ],
  },
];

const COMPARISON_DATA = [
  {
    parameter: "100% Foreign Ownership",
    mainland: "Yes (under Decree-Law 32/2021)",
    freezone: "Yes (100% Expat Ownership)",
    offshore: "Yes (100% Foreign Equity)",
  },
  {
    parameter: "UAE Local Market Trading",
    mainland: "Direct, unrestricted across all Emirates",
    freezone: "Requires local distributor / mainland branch",
    offshore: "Prohibited from trading inside UAE",
  },
  {
    parameter: "Physical Office Mandate",
    mainland: "Mandatory physical office / Ejari",
    freezone: "Flexible: Flexi-Desk, Smart Desk, or Office",
    offshore: "Registered agent address only",
  },
  {
    parameter: "UAE Corporate Tax Status",
    mainland: "Standard 9% (0% on profits up to AED 375k)",
    freezone: "0% on Qualifying Income (QFZP) / 9% Standard",
    offshore: "Exempt from local corporate tax",
  },
  {
    parameter: "UAE Residency Visas",
    mainland: "Uncapped (based on square footage)",
    freezone: "Pre-allocated package (1–10+ visas)",
    offshore: "Zero residency visa eligibility",
  },
  {
    parameter: "Bank Account Opening Speed",
    mainland: "Fastest (Highest acceptance by UAE banks)",
    freezone: "Fast (Tier-1 banks approve digital & physical)",
    offshore: "Strict KYC (Mainly International / Private Banks)",
  },
];

const SETUP_FAQS = [
  {
    q: "Is 100% foreign ownership really possible for UAE Mainland companies?",
    a: "Yes. Following Federal Decree-Law No. 32 of 2021 (Commercial Companies Law), the historical requirement for a 51% UAE national local sponsor was completely abolished across over 3,000 commercial and industrial economic activities. Foreign investors can now own 100% of their Dubai and UAE Mainland LLCs without any local partner or sponsor fees.",
  },
  {
    q: "How fast can my UAE company be incorporated?",
    a: "Through Auditclue's 100% digital operating model, Free Zone entities (such as Meydan or IFZA) are typically incorporated within 48 to 72 hours. Dubai Mainland DED licenses are issued in 3 to 5 business days upon trade name reservation and digital MoA signing.",
  },
  {
    q: "How does Auditclue guarantee corporate bank account opening?",
    a: "Bank rejection in the UAE almost always happens because of improper activity selection, poor business plans, or weak source-of-wealth documentation. Auditclue pre-screens your business profile before submitting it to the bank. We maintain direct relationships with relationship managers at Wio Bank, Emirates NBD, Mashreq NeoBiz, and First Abu Dhabi Bank (FAB) to secure multi-currency corporate IBANs.",
  },
  {
    q: "Can I obtain a UAE Golden Visa through business setup?",
    a: "Yes. Foreign entrepreneurs and investors establishing a UAE company with capital of AED 2,000,000 or more, or business founders approved by an official UAE incubator, can qualify for the prestigious 10-Year UAE Golden Visa, granting self-sponsored long-term residency for you and your family.",
  },
  {
    q: "What are the immediate tax obligations after company setup?",
    a: "Every new UAE commercial entity — whether Mainland or Free Zone — must register for Corporate Tax with the Federal Tax Authority (FTA) and obtain a Corporate Tax TRN. If your taxable supplies or imports exceed AED 375,000 annually, you must also register for UAE VAT (5%). Auditclue includes both tax registrations in our post-setup onboarding pack.",
  },
];

export default function BusinessSetupClient() {
  const [industry, setIndustry] = useState<IndustryType>("tech");
  const [marketScope, setMarketScope] = useState<MarketScope>("global-export");
  const [visaTier, setVisaTier] = useState<VisaTier>("1-2");
  const [activeBlueprintPhase, setActiveBlueprintPhase] = useState<number>(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Dynamic recommendation lookup key
  const engineKey = `${industry}-${marketScope}`;
  const recommendation =
    JURISDICTION_RECOMMENDATIONS[engineKey] ||
    JURISDICTION_RECOMMENDATIONS["tech-global-export"];

  return (
    <div className="min-h-screen flex flex-col bg-[#050C15] text-[#EDF2F7] selection:bg-[#C6F850] selection:text-[#050C15]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. CINEMATIC HERO: Full-Bleed Dubai DIFC Skyline with Specimen    */}
        {/* ================================================================= */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden border-b border-white/10">
          {/* Real High-Resolution DIFC Sunset Skyline Visual Backdrop */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/dubai-business-setup.jpg"
              alt="Dubai DIFC Business Setup Architecture"
              fill
              priority
              className="object-cover object-center brightness-[0.38] contrast-[1.15]"
              sizes="100vw"
            />
            {/* Dark Obsidian & Champagne Ambient Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050C15]/80 via-[#050C15]/65 to-[#050C15]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_35%,rgba(54,167,131,0.18),transparent_80%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
            {/* Minimalist Top Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#83D9BE] font-mono mb-8"
            >
              <Link href="/" className="hover:text-white transition-colors">
                HOME
              </Link>
              <span>/</span>
              <span className="text-white/60">PRACTICES</span>
              <span>/</span>
              <span className="text-[#C6F850] font-semibold">
                BUSINESS SETUP & FORMATION
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Bold Architectural Value Proposition */}
              <div className="lg:col-span-7">
                {/* Authority Eyebrow Badge */}
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md text-[#C6F850] border border-white/15 px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase mb-6 font-mono shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-[#C6F850] animate-pulse" />
                  <span>100% FOREIGN OWNERSHIP • DUBAI & UAE FREE ZONES</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-[1.04] mb-7">
                  <FlowText
                    text="Architecting Your Enterprise in the UAE."
                    as="span"
                  />
                </h1>

                <p className="text-lg sm:text-xl text-[#CBD5E1] font-sans font-light leading-relaxed max-w-2xl mb-10">
                  End-to-end commercial formation across Dubai Mainland (DED),
                  flagship Free Zones (DMCC, DIFC, Meydan, IFZA), and Offshore.
                  Structured correctly from day one for corporate tax
                  optimization and guaranteed Tier-1 bank account opening.
                </p>

                {/* Primary Kinetic Action Triggers */}
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="#jurisdiction-engine"
                    className="group/btn relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#C6F850] px-8 py-4 text-base font-bold text-[#050C15] shadow-[0_8px_30px_rgba(198,248,80,0.25)] hover:shadow-[0_12px_40px_rgba(198,248,80,0.4)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer transition-all"
                  >
                    <span
                      className="absolute inset-0 bg-white transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                      aria-hidden="true"
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <span>Launch Jurisdiction Engine</span>
                      <span className="text-lg leading-none font-sans">↳</span>
                    </span>
                  </a>

                  <a
                    href="#consultation"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-base font-semibold px-7 py-4 rounded-xl border border-white/20 backdrop-blur-md transition-all shadow-sm"
                  >
                    <span>Request Incorporation Scoping</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C6F850]" />
                  </a>
                </div>

                {/* Sovereign Assurance Micro-Metrics */}
                <div className="mt-12 pt-8 border-t border-white/15 grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      72 Hours
                    </div>
                    <div className="text-xs text-[#83D9BE] font-mono mt-0.5">
                      Fast-Track Licence Issuance
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      100%
                    </div>
                    <div className="text-xs text-[#83D9BE] font-mono mt-0.5">
                      Expat Foreign Equity
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      Tier-1 Bank
                    </div>
                    <div className="text-xs text-[#83D9BE] font-mono mt-0.5">
                      Pre-Clearance Protocol
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tangible Digital UAE Commercial Trade License Specimen */}
              <div className="lg:col-span-5 relative">
                {/* Tactical Holographic Golden License Frame */}
                <div className="relative rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-white/10 p-6 sm:p-7 backdrop-blur-xl border border-white/25 shadow-2xl text-white">
                  {/* Top License Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C6F850] to-[#36A783] flex items-center justify-center text-[#050C15] font-bold shadow-md">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono uppercase tracking-wider text-[#83D9BE]">
                          UNITED ARAB EMIRATES
                        </div>
                        <div className="text-sm font-serif font-bold text-white">
                          Commercial Trade License Specimen
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono bg-[#C6F850]/20 text-[#C6F850] border border-[#C6F850]/30 px-2 py-0.5 rounded-full">
                      ACTIVE · 2025–2026
                    </span>
                  </div>

                  {/* Specimen Core Fields */}
                  <div className="space-y-4 font-mono text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/60">Legal Structure:</span>
                      <span className="text-white font-semibold">
                        Limited Liability Company (LLC)
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/60">Foreign Equity:</span>
                      <span className="text-[#C6F850] font-bold">
                        100% Direct Ownership
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/60">Activity Codes:</span>
                      <span className="text-white font-semibold">
                        7020 (Consultancy) & 6201 (Tech)
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/60">Corporate Tax Status:</span>
                      <span className="text-[#83D9BE] font-semibold">
                        Pre-Registered with FTA TRN
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/10">
                      <span className="text-white/60">Bank Account Protocol:</span>
                      <span className="text-white font-semibold">
                        Wio & Emirates NBD Pre-Cleared
                      </span>
                    </div>
                  </div>

                  {/* Holographic Seal Footer */}
                  <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70">
                    <div className="flex items-center gap-2">
                      <BadgeCheck className="w-4 h-4 text-[#C6F850]" />
                      <span>Certified Auditclue Formation Pack</span>
                    </div>
                    <span className="font-mono text-[#83D9BE]">AES-256 Vaulted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. THE JURISDICTION ARCHITECTURE ENGINE: Interactive Simulator    */}
        {/* ================================================================= */}
        <section
          id="jurisdiction-engine"
          className="py-18 sm:py-24 bg-[#081320] text-white relative border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-white/15">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6F850] font-bold block mb-2 flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>INTERACTIVE FORMATION SIMULATOR</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
                  The Jurisdiction Architecture Engine
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#A8B7C9] max-w-md font-sans">
                Select your business model parameters to generate instant
                statutory jurisdiction, tax exposure, and banking recommendations.
              </p>
            </div>

            {/* Interactive Control Console */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Interactive Selectors (7 Cols) */}
              <div className="lg:col-span-7 space-y-8">
                {/* Parameter 1: Industry Vertical */}
                <div>
                  <label className="font-mono text-xs text-[#83D9BE] uppercase tracking-wider block mb-3">
                    01 · Select Business Activity & Sector
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "tech", label: "Tech & SaaS", icon: Zap },
                      { id: "trading", label: "Trading & Import", icon: Globe2 },
                      { id: "advisory", label: "Consulting", icon: Briefcase },
                      { id: "holding", label: "Holding & SPV", icon: Landmark },
                    ].map((item) => {
                      const Icon = item.icon;
                      const active = industry === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setIndustry(item.id as IndustryType)}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between h-24 ${
                            active
                              ? "bg-[#C6F850] text-[#050C15] border-[#C6F850] shadow-lg font-bold"
                              : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="text-xs tracking-tight">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Parameter 2: Geographic Market Scope */}
                <div>
                  <label className="font-mono text-xs text-[#83D9BE] uppercase tracking-wider block mb-3">
                    02 · Targeted Commercial Market Horizon
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      {
                        id: "global-export",
                        title: "100% International / B2B Export",
                        desc: "Zero local retail selling. Clients located overseas or in other Free Zones.",
                      },
                      {
                        id: "uae-mainland",
                        title: "Direct UAE Local Mainland Market",
                        desc: "Sell to retail customers, local UAE businesses, or bid on UAE government tenders.",
                      },
                    ].map((item) => {
                      const active = marketScope === item.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() =>
                            setMarketScope(item.id as MarketScope)
                          }
                          className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                            active
                              ? "bg-white/15 border-[#C6F850] text-white shadow-md ring-1 ring-[#C6F850]"
                              : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-serif font-semibold text-sm">
                              {item.title}
                            </span>
                            {active && (
                              <CheckCircle2 className="w-4 h-4 text-[#C6F850]" />
                            )}
                          </div>
                          <p className="text-xs text-[#A8B7C9] leading-relaxed">
                            {item.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Parameter 3: Visa Allocation Tier */}
                <div>
                  <label className="font-mono text-xs text-[#83D9BE] uppercase tracking-wider block mb-3">
                    03 · Required Residency Visa Quota
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "1-2", label: "1 to 2 Visas", note: "Founders" },
                      { id: "3-5", label: "3 to 5 Visas", note: "Core Team" },
                      { id: "6+", label: "6+ Visas", note: "Enterprise" },
                    ].map((v) => {
                      const active = visaTier === v.id;
                      return (
                        <button
                          key={v.id}
                          onClick={() => setVisaTier(v.id as VisaTier)}
                          className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                            active
                              ? "bg-[#C6F850] text-[#050C15] border-[#C6F850] font-bold"
                              : "bg-white/5 border-white/15 text-white/80 hover:bg-white/10"
                          }`}
                        >
                          <div className="text-sm font-serif">{v.label}</div>
                          <div className="text-[10px] font-mono opacity-80">
                            {v.note}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Real-Time Dynamic Architectural Recommendation (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-gradient-to-b from-[#0D1E33] to-[#081525] p-6 sm:p-8 border border-[#36A783]/40 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#36A783]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 border-b border-white/15 mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#C6F850]">
                      ENGINE RECOMMENDATION
                    </span>
                    <span className="text-[11px] font-mono bg-[#36A783]/20 text-[#83D9BE] px-2.5 py-0.5 rounded-full border border-[#36A783]/30">
                      {recommendation.authorityBadge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                    {recommendation.jurisdiction}
                  </h3>
                  <div className="text-xs font-mono text-[#83D9BE] mb-6">
                    Recommended Structure: {recommendation.type}
                  </div>

                  {/* Key Metrics Spectrum */}
                  <div className="space-y-4 text-xs font-mono mb-8">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/60">Setup Timeline:</span>
                      <span className="text-[#C6F850] font-bold">
                        {recommendation.timeline}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/60">Foreign Ownership:</span>
                      <span className="text-white font-semibold">
                        {recommendation.foreignOwnership}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/60">Corporate Tax:</span>
                      <span className="text-[#83D9BE] font-semibold text-right">
                        {recommendation.corporateTaxStatus}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <span className="text-white/60">Banking Pre-Clearance:</span>
                      <span className="text-white font-semibold">
                        {recommendation.bankReadiness}
                      </span>
                    </div>
                  </div>

                  {/* Strategic Advantage */}
                  <div className="p-4 rounded-xl bg-[#C6F850]/10 border border-[#C6F850]/30 text-xs text-[#E2E8F0] mb-8">
                    <strong className="text-[#C6F850] block font-mono uppercase mb-1">
                      Key Strategic Advantage:
                    </strong>
                    {recommendation.keyAdvantage}
                  </div>

                  {/* Direct Action Trigger */}
                  <a
                    href="#consultation"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#C6F850] hover:bg-white text-[#050C15] font-bold text-sm py-4 rounded-xl transition-all shadow-md cursor-pointer"
                  >
                    <span>Request Exact Quotation Pack</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. THE 16 FORMATION SERVICES: 4-Stage Architectural Blueprint     */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28 bg-[#050C15] text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6F850] font-bold block mb-2">
                COMPLETE 16-SERVICE INVENTORY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                The 4-Stage Enterprise Formation Blueprint
              </h2>
              <p className="mt-3 text-base sm:text-lg text-[#CBD5E1] font-sans font-light">
                Every service executed under sovereign UAE mandates. No generic
                broker packages — pure institutional formation.
              </p>
            </div>

            {/* Stage Selector Tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {FORMATION_BLUEPRINT.map((stage, sIdx) => {
                const active = activeBlueprintPhase === sIdx;
                return (
                  <button
                    key={sIdx}
                    onClick={() => setActiveBlueprintPhase(sIdx)}
                    className={`px-5 py-3.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2.5 ${
                      active
                        ? "bg-[#C6F850] text-[#050C15] shadow-lg border border-[#C6F850]"
                        : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/15"
                    }`}
                  >
                    <span>{stage.phase}:</span>
                    <span>{stage.phaseName.split("&")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Stage Blueprint Display */}
            {(() => {
              const currentStage = FORMATION_BLUEPRINT[activeBlueprintPhase];
              return (
                <div className="rounded-3xl bg-gradient-to-b from-[#0A1726] to-[#060F1A] border border-white/20 p-6 sm:p-10 shadow-2xl">
                  {/* Stage Headline & Objective */}
                  <div className="pb-8 border-b border-white/15 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <span className="font-mono text-xs font-bold text-[#C6F850] block mb-1">
                        {currentStage.phase} · SOVEREIGN PROTOCOL
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-serif text-white">
                        {currentStage.phaseName}
                      </h3>
                      <p className="mt-2 text-sm text-[#CBD5E1] leading-relaxed">
                        {currentStage.objective}
                      </p>
                    </div>
                  </div>

                  {/* Granular Services in this Stage */}
                  <div className="py-8 divide-y divide-white/10">
                    {currentStage.services.map((svc, idx) => (
                      <div
                        key={idx}
                        className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
                      >
                        <div className="lg:col-span-4">
                          <div className="font-serif text-lg sm:text-xl font-medium text-white group-hover:text-[#C6F850] transition-colors flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6F850]" />
                            <span>{svc.title}</span>
                          </div>
                        </div>

                        <div className="lg:col-span-5">
                          <p className="text-sm text-[#A8B7C9] leading-relaxed">
                            {svc.desc}
                          </p>
                        </div>

                        <div className="lg:col-span-3">
                          <div className="text-xs font-mono text-white bg-white/5 border border-white/10 p-3 rounded-xl">
                            <span className="text-[10px] text-[#83D9BE] block uppercase tracking-wider mb-0.5">
                              Institutional Output:
                            </span>
                            <span className="font-semibold text-white">
                              {svc.output}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Checklist Footer */}
                  <div className="pt-6 border-t border-white/15 bg-white/5 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                    <div className="text-xs font-mono font-bold text-[#83D9BE] uppercase tracking-wider mb-4">
                      Official Government Milestone Deliverables in this Stage:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {currentStage.deliverables.map((d, dIdx) => (
                        <div
                          key={dIdx}
                          className="flex items-start gap-2 text-xs text-white"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#C6F850] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. STATUTORY COMPARISON STRIP: Mainland vs Free Zone vs Offshore   */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28 bg-[#081320] text-white border-t border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6F850] font-bold block mb-2">
                JURISDICTIONAL COMPARISON MATRIX
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Mainland DED vs Free Zone vs Offshore
              </h2>
            </div>

            {/* High-Contrast Table Architecture */}
            <div className="overflow-x-auto rounded-2xl border border-white/15 bg-white/5">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/15 bg-white/10 text-white font-bold">
                    <th className="py-4 px-6 uppercase tracking-wider">
                      Strategic Parameter
                    </th>
                    <th className="py-4 px-6 uppercase tracking-wider text-[#C6F850]">
                      Dubai Mainland (DED)
                    </th>
                    <th className="py-4 px-6 uppercase tracking-wider text-[#83D9BE]">
                      UAE Free Zones (DMCC/IFZA)
                    </th>
                    <th className="py-4 px-6 uppercase tracking-wider text-white/70">
                      Offshore Entity (RAK/JAFZA)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-white/80">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">
                        {row.parameter}
                      </td>
                      <td className="py-4 px-6 text-[#EDF2F7]">
                        {row.mainland}
                      </td>
                      <td className="py-4 px-6 text-[#EDF2F7]">
                        {row.freezone}
                      </td>
                      <td className="py-4 px-6 text-white/60">
                        {row.offshore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. STATUTORY FAQS ACCORDION: Authoritative Sovereign Clarity      */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28 bg-[#050C15] text-white border-b border-white/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C6F850] font-bold block mb-2">
                FORMATION ADVISORY
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Frequently Asked Company Formation Questions
              </h2>
            </div>

            <div className="divide-y divide-white/15">
              {SETUP_FAQS.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div key={fIdx} className="py-5">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full text-left flex items-center justify-between gap-4 group cursor-pointer"
                    >
                      <h3 className="text-lg sm:text-xl font-serif font-medium text-white group-hover:text-[#C6F850] transition-colors">
                        {faq.q}
                      </h3>
                      <div
                        className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-[#C6F850] text-[#050C15]"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-12">
                        <p className="text-sm sm:text-base text-[#CBD5E1] font-sans font-light leading-relaxed">
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
        {/* 6. BUSINESS SETUP CONSULTATION & PROPOSAL DESK                     */}
        {/* ================================================================= */}
        <section
          id="consultation"
          className="py-20 sm:py-28 bg-[#081320] text-white relative overflow-hidden"
        >
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Setup Partner Consultation */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#C6F850]/15 border border-[#C6F850]/30 text-[#C6F850] text-xs font-semibold px-4 py-1.5 rounded-full font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>DIRECT FORMATION ADVISOR DESK</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                  Launch Your UAE Business With Absolute Certainty
                </h2>

                <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans font-light">
                  Submit your details to receive an itemized government fee
                  breakdown, license cost estimate, and bank pre-clearance
                  scoping within 24 hours.
                </p>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C6F850]">
                    Direct UAE Business Desk
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-white">
                    +971 54 733 8583
                  </div>
                  <div className="text-xs text-[#A8B7C9]">
                    Mon – Sat · 9:00 AM – 6:00 PM GST · WhatsApp & VIP Call Desk
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6F850]" />
                    <span>Itemized milestone pricing with zero hidden fees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6F850]" />
                    <span>Tier-1 bank account opening pre-clearance guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C6F850]" />
                    <span>100% digital remote execution anywhere in the world</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7 bg-white text-[#071426] p-6 sm:p-8 rounded-3xl shadow-2xl">
                <div className="mb-6 pb-4 border-b border-[#E2E8F0]">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#216D56] font-bold block mb-1">
                    INCORPORATION SCOPING FORM
                  </span>
                  <div className="text-xl font-serif font-bold text-[#071426]">
                    Request Custom UAE Formation Pack & Quotation
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
