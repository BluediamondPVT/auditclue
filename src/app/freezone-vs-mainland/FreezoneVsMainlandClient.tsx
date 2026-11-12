"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import {
  Building2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Scale,
  Percent,
  Compass,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Briefcase,
  Layers,
  Globe2,
  FileText,
} from "lucide-react";

interface ComparisonRow {
  dimension: string;
  category: "legal" | "tax" | "operational" | "banking";
  mainland: {
    status: "positive" | "neutral" | "warning";
    summary: string;
    detail: string;
  };
  freezone: {
    status: "positive" | "neutral" | "warning";
    summary: string;
    detail: string;
  };
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    dimension: "1. UAE Local Trading Rights",
    category: "operational",
    mainland: {
      status: "positive",
      summary: "Direct Unrestricted UAE Trading",
      detail: "Can sell directly to any consumer (B2C) and business (B2B) across all 7 Emirates without intermediaries.",
    },
    freezone: {
      status: "neutral",
      summary: "Restricted to Free Zone & International",
      detail: "Can trade freely internationally or within the Free Zone. Local mainland trading requires an onshore distributor or commercial agent.",
    },
  },
  {
    dimension: "2. 100% Foreign Ownership",
    category: "legal",
    mainland: {
      status: "positive",
      summary: "100% Foreign Ownership Permitted",
      detail: "Under UAE Commercial Companies Law No. 32 of 2021, over 1,000+ commercial and industrial activities allow 100% foreign ownership with zero local sponsor required.",
    },
    freezone: {
      status: "positive",
      summary: "100% Foreign Ownership Guaranteed",
      detail: "Standard since inception. 100% foreign equity ownership with 100% capital and profit repatriation guaranteed by Free Zone law.",
    },
  },
  {
    dimension: "3. UAE Corporate Tax (9% vs 0% QFZP)",
    category: "tax",
    mainland: {
      status: "positive",
      summary: "9% Standard (or 0% SBR up to AED 3M)",
      detail: "Profits up to AED 375,000 taxed at 0%. Profits above taxed at 9%. Small Business Relief (SBR) allows 0% tax on turnover up to AED 3M through Dec 31, 2029.",
    },
    freezone: {
      status: "positive",
      summary: "0% Corporate Tax for Qualifying Entities",
      detail: "Qualifying Free Zone Persons (QFZP) pay 0% on Qualifying Income. Non-qualifying revenue taxed at 9%. Audited financial statements strictly mandatory to retain 0%.",
    },
  },
  {
    dimension: "4. Physical Office Requirement",
    category: "operational",
    mainland: {
      status: "neutral",
      summary: "Ejari Tenancy Contract Required",
      detail: "Must register a physical lease (Ejari) in the respective Emirate. Co-working and business centers accepted for certain license categories.",
    },
    freezone: {
      status: "positive",
      summary: "Flexi-Desk & Virtual Options",
      detail: "Most Free Zones allow cost-effective flexi-desks, smart desks, or virtual offices without requiring dedicated physical commercial space.",
    },
  },
  {
    dimension: "5. UAE Residence Visa Quotas",
    category: "operational",
    mainland: {
      status: "neutral",
      summary: "Calculated by Office Square Meters",
      detail: "Visa quota is issued by MoHRE based on physical office square meters (roughly 8-10 sqm per visa) or approved electronic quota upgrades.",
    },
    freezone: {
      status: "positive",
      summary: "Predictable Package-Based Quotas",
      detail: "Visas allocated per package tier (e.g., 1 to 6+ visas on a flexi-desk agreement). Additional visas easily added by upgrading package tier.",
    },
  },
  {
    dimension: "6. UAE Government & Ministerial Tenders",
    category: "legal",
    mainland: {
      status: "positive",
      summary: "Full Eligibility for Public Tenders",
      detail: "Can register on UAE Federal Procurement portals and bid on all federal, municipal, and semi-government contracts.",
    },
    freezone: {
      status: "warning",
      summary: "Restricted from Onshore Tenders",
      detail: "Cannot bid directly on most UAE federal government contracts unless operating through a mainland branch or onshore joint venture partner.",
    },
  },
  {
    dimension: "7. Customs Duties & Import Tariffs",
    category: "tax",
    mainland: {
      status: "neutral",
      summary: "Standard 5% Customs Duty",
      detail: "5% customs tariff applies on goods imported into the UAE mainland for domestic consumption.",
    },
    freezone: {
      status: "positive",
      summary: "0% Customs in Designated Zones",
      detail: "Designated Free Zones (e.g., JAFZA, DAFZA) are treated as outside the UAE customs territory. 0% duty applies until goods enter mainland.",
    },
  },
  {
    dimension: "8. Statutory Audit Requirement",
    category: "tax",
    mainland: {
      status: "neutral",
      summary: "Mandatory for Revenue > AED 50M or Tax Relief",
      detail: "Mandatory under Corporate Tax Law for revenue > AED 50M, or entities claiming Small Business Relief / group tax relief.",
    },
    freezone: {
      status: "warning",
      summary: "Mandatory for License Renewal & 0% QFZP",
      detail: "DMCC, DIFC, ADGM, and JAFZA enforce mandatory annual audit filing. All Free Zone entities electing for 0% QFZP tax must submit audited IFRS accounts.",
    },
  },
  {
    dimension: "9. Corporate Bank Account Opening",
    category: "banking",
    mainland: {
      status: "positive",
      summary: "High Bank Approval Velocity",
      detail: "Having an onshore physical office (Ejari) and DED license provides top credibility during UAE tier-1 bank KYC reviews (Emirates NBD, FAB, Wio).",
    },
    freezone: {
      status: "neutral",
      summary: "Standard KYC Review Process",
      detail: "Accepted across all UAE banks. Requires robust proof of business substance (invoices, client contracts, CVs) for flexi-desk holders.",
    },
  },
  {
    dimension: "10. Minimum Paid-Up Capital",
    category: "legal",
    mainland: {
      status: "positive",
      summary: "Zero Minimum Capital for Most LLCs",
      detail: "General commercial licenses have no statutory minimum paid-up deposit required in the bank for incorporation.",
    },
    freezone: {
      status: "neutral",
      summary: "Varies from AED 0 to AED 300,000",
      detail: "Some Free Zones (like IFZA/Meydan) require no capital deposit, while specialized authorities (like DMCC) require nominal AED 50,000 share capital.",
    },
  },
];

interface QuizRecommendation {
  title: string;
  jurisdiction: string;
  rationale: string;
  taxPosition: string;
  setupCostEstimate: string;
}

const QUIZ_OPTIONS: { id: string; label: string; recommendation: QuizRecommendation }[] = [
  {
    id: "retail",
    label: "Local Retail, Restaurant, Clinic, or B2C Service in Dubai",
    recommendation: {
      title: "Dubai Mainland (Department of Economy & Tourism - DET)",
      jurisdiction: "Mainland LLC",
      rationale: "Required for operating physical storefronts, clinics, or selling directly to UAE residents anywhere in the country.",
      taxPosition: "9% Corporate Tax on profit > AED 375k (or 0% Small Business Relief if revenue under AED 3M).",
      setupCostEstimate: "Starting from AED 18,500 + Ejari rent",
    },
  },
  {
    id: "tech",
    label: "Global SaaS, Tech Startup, Crypto/Web3, or Venture Capital",
    recommendation: {
      title: "DIFC (Dubai) or ADGM (Abu Dhabi)",
      jurisdiction: "Common Law Free Zone",
      rationale: "English common law framework, world-class intellectual property protection, and preferred by international VC investors.",
      taxPosition: "0% Corporate Tax under Qualifying Free Zone Person (QFZP) rules for foreign SaaS subscriptions.",
      setupCostEstimate: "Starting from AED 25,000 + annual regulatory fee",
    },
  },
  {
    id: "trade",
    label: "Physical Goods, Commodities, Shipping, Import-Export",
    recommendation: {
      title: "DMCC (JLT Dubai) or JAFZA (Jebel Ali)",
      jurisdiction: "Designated Trade Free Zone",
      rationale: "Port access, 0% customs bonded warehouses, and international commodity trading hub infrastructure.",
      taxPosition: "0% Corporate Tax on Qualifying Commodity Trading (Designated Zone rules).",
      setupCostEstimate: "Starting from AED 16,500",
    },
  },
  {
    id: "consulting",
    label: "Remote Digital Consulting, Marketing, Freelancer, Single Founder",
    recommendation: {
      title: "IFZA, Meydan, or Shams Free Zone",
      jurisdiction: "Flexi-Desk Free Zone",
      rationale: "Fastest digital incorporation (48h), 100% remote KYC, zero paid-up capital deposit, and cost-effective flexi-desk visas.",
      taxPosition: "Eligible for 0% SBR or standard 9% on net profit above AED 375k.",
      setupCostEstimate: "Starting from AED 12,500 complete package",
    },
  },
];

export default function FreezoneVsMainlandClient() {
  const [selectedQuiz, setSelectedQuiz] = useState<string>("retail");

  const currentRec = QUIZ_OPTIONS.find((o) => o.id === selectedQuiz)?.recommendation || QUIZ_OPTIONS[0].recommendation;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ===================================================================== */}
        {/* HERO: Editorial Header                                                */}
        {/* ===================================================================== */}
        <section className="relative bg-[#071426] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
          {/* Subtle Ambient Texture */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[700px] h-[400px] bg-[#36A783]/20 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-[#233F5B]/50 rounded-full blur-[120px]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#83D9BE] font-mono mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-white font-semibold">Mainland vs Free Zone Guide</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/20 border border-[#36A783]/40 px-3.5 py-1.5 rounded-full mb-4">
                <Compass className="w-3.5 h-3.5 text-[#36A783]" />
                <span>UAE Domiciliation Blueprint</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-6">
                <FlowText
                  text="Mainland vs Free Zone: The Definitive UAE Decision Guide"
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans mb-8">
                A rigorous side-by-side comparison of UAE commercial jurisdictions across 10 statutory dimensions: trading rights, 100% foreign ownership, 9% Corporate Tax vs 0% QFZP status, visa quotas, and bank KYC approval velocity.
              </p>

              {/* Fast Trust Strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#83D9BE]">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  All 7 Emirates Covered
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  40+ UAE Free Zones
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  Cabinet Decision Compliant
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* INTERACTIVE JURISDICTION RECOMMENDER (QUIZ)                           */}
        {/* ===================================================================== */}
        <section className="py-12 bg-white border-b border-[#CBD5E1]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] px-3 py-1 rounded-full">
                Interactive Decision Tool
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#071426] tracking-tight mt-3">
                Which Jurisdiction Fits Your Business Model?
              </h2>
              <p className="text-sm text-[#4A5D73] mt-1 font-sans">
                Select your primary commercial operation to see the recommended statutory vehicle and tax impact:
              </p>
            </div>

            {/* Selector Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {QUIZ_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedQuiz(opt.id)}
                  className={`p-4 rounded-xl text-left border transition-all text-xs sm:text-sm font-medium ${
                    selectedQuiz === opt.id
                      ? "bg-[#071426] text-white border-[#071426] shadow-lg"
                      : "bg-[#F8FAFC] text-[#071426] border-[#CBD5E1] hover:border-[#36A783]"
                  }`}
                >
                  <span className="font-mono text-[10px] block opacity-70 mb-1">
                    USE CASE [{opt.id.toUpperCase()}]
                  </span>
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Recommendation Display Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#EAF4F0] to-[#F1F6F9] border border-[#36A783]/40 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#216D56] font-bold">
                    RECOMMENDED DOMICILIATION
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] mb-2">
                  {currentRec.title} ({currentRec.jurisdiction})
                </h3>
                <p className="text-sm text-[#4A5D73] leading-relaxed mb-3">
                  {currentRec.rationale}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs">
                  <span className="font-semibold text-[#071426]">
                    Tax Treatment: <span className="font-normal text-[#216D56]">{currentRec.taxPosition}</span>
                  </span>
                  <span className="text-[#CBD5E1]">•</span>
                  <span className="font-semibold text-[#071426]">
                    Indicative Cost: <span className="font-normal text-[#216D56]">{currentRec.setupCostEstimate}</span>
                  </span>
                </div>
              </div>

              <Link
                href="/#consult-form"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#071426] hover:bg-[#36A783] text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Structure This Setup</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* 10-DIMENSION STATUTORY COMPARISON MATRIX                               */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs uppercase tracking-wider text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3.5 py-1.5 rounded-full">
              STATUTORY COMPARISON MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] tracking-tight mt-4 mb-3">
              10-Point UAE Jurisdiction Comparison
            </h2>
            <p className="text-base text-[#4A5D73] font-sans leading-relaxed">
              Every detail verified under UAE Commercial Companies Law No. 32 of 2021, Corporate Tax Law No. 47 of 2022, and Cabinet Decision No. 139 of 2023 on Qualifying Free Zone Persons.
            </p>
          </div>

          {/* Comparison Cards Stack */}
          <div className="space-y-6">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#CBD5E1] p-6 sm:p-8 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-lg sm:text-xl font-serif font-bold text-[#071426] mb-5 pb-3 border-b border-[#E2E8F0]">
                  {row.dimension}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Mainland Column */}
                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#071426] flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-[#36A783]" />
                          MAINLAND (DED LLC)
                        </span>
                        {row.mainland.status === "positive" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Optimal
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            Standard Rule
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-[#071426] mb-1.5">
                        {row.mainland.summary}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4A5D73] leading-relaxed font-sans">
                        {row.mainland.detail}
                      </p>
                    </div>
                  </div>

                  {/* Free Zone Column */}
                  <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#071426] flex items-center gap-1.5">
                          <Globe2 className="w-3.5 h-3.5 text-[#216D56]" />
                          FREE ZONE (FZ-LLC)
                        </span>
                        {row.freezone.status === "positive" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Optimal
                          </span>
                        ) : row.freezone.status === "warning" ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            Statutory Limitation
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            Standard Rule
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-bold text-[#071426] mb-1.5">
                        {row.freezone.summary}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4A5D73] leading-relaxed font-sans">
                        {row.freezone.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* CLOSING CONVERSION BANNER                                             */}
        {/* ===================================================================== */}
        <section className="py-16 sm:py-20 bg-[#071426] text-white border-t border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block text-xs font-mono font-bold uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/20 px-3.5 py-1 rounded-full mb-4">
              PERSONALIZED JURISDICTION STRUCTURING
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight mb-4">
              Need Direct Advisory on Structuring Your UAE Entity?
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
              Schedule a scoping consultation with our senior Corporate Services and UAE Tax Advisory team. We analyze your commercial contracts, target revenue, and bank requirements to design the optimal vehicle.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#consult-form"
                className="px-7 py-4 rounded-xl bg-[#C6F850] text-[#071426] font-bold text-sm sm:text-base hover:bg-white transition-colors cursor-pointer w-full sm:w-auto shadow-lg"
              >
                Book Free Domiciliation Scoping
              </Link>
              <Link
                href="/services/business-setup"
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/15 transition-colors w-full sm:w-auto"
              >
                Explore Business Setup Services (16 Svcs)
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
