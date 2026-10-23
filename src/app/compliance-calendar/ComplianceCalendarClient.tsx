"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import {
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Bell,
  Scale,
  Percent,
  Building2,
  FileText,
  ShieldCheck,
  ArrowRight,
  ArrowUpRight,
  Download,
  Info,
  ChevronRight,
  Lock,
} from "lucide-react";

interface StatutoryDeadline {
  id: string;
  category: "tax" | "vat" | "esr" | "audit";
  title: string;
  authority: string;
  rule: string;
  standardDeadline: string;
  nextUpcoming2026: string;
  penaltyStatute: string;
  penaltyAmount: string;
  actionRequired: string;
  status: "CRITICAL" | "UPCOMING" | "CONTINUOUS";
}

const STATUTORY_DEADLINES: StatutoryDeadline[] = [
  {
    id: "ct-annual",
    category: "tax",
    title: "UAE Corporate Tax Annual Return & Payment (Form CT6)",
    authority: "Federal Tax Authority (FTA)",
    rule: "Mandatory within 9 months from the end of the entity's financial year.",
    standardDeadline: "9 Months Post FY-End",
    nextUpcoming2026: "30 Sept 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "Cabinet Decision No. 75 of 2023 on Tax Violations",
    penaltyAmount: "AED 500/mo for late filing + AED 10,000 late registration + 14% p.a. interest",
    actionRequired: "File audited/unadjusted financial statements on EmaraTax portal & settle 9% or 0% SBR.",
    status: "CRITICAL",
  },
  {
    id: "ct-sbr-election",
    category: "tax",
    title: "Small Business Relief (SBR 0% CT) Formal Election",
    authority: "Federal Tax Authority (Ministerial Decision No. 73 of 2023)",
    rule: "Must be elected inside the annual Corporate Tax Return for revenue <= AED 3,000,000.",
    standardDeadline: "Simultaneous with Form CT6",
    nextUpcoming2026: "30 Sept 2026 (Active for all tax periods through 31 Dec 2029)",
    penaltyStatute: "Ministerial Decision No. 73 of 2023",
    penaltyAmount: "Forfeiture of 0% tax benefit, resulting in default 9% tax liability on profits",
    actionRequired: "Submit audited financial statements proving gross revenue under AED 3M threshold.",
    status: "UPCOMING",
  },
  {
    id: "vat-q1",
    category: "vat",
    title: "Quarterly VAT Return & Payment — Tax Period Q1 (Jan–Mar)",
    authority: "Federal Tax Authority (Cabinet Decision No. 52 of 2017)",
    rule: "28th day of the month following the end of the tax period.",
    standardDeadline: "28th of April",
    nextUpcoming2026: "28 April 2026",
    penaltyStatute: "Cabinet Decision No. 49 of 2021",
    penaltyAmount: "AED 1,000 first time, AED 2,000 repeat + 2% per month unpaid tax penalty",
    actionRequired: "Reconcile taxable sales, import VAT box 6, zero-rated exports, and input credits.",
    status: "CRITICAL",
  },
  {
    id: "vat-q2",
    category: "vat",
    title: "Quarterly VAT Return & Payment — Tax Period Q2 (Apr–Jun)",
    authority: "Federal Tax Authority (Cabinet Decision No. 52 of 2017)",
    rule: "28th day of the month following the end of the tax period.",
    standardDeadline: "28th of July",
    nextUpcoming2026: "28 July 2026",
    penaltyStatute: "Cabinet Decision No. 49 of 2021",
    penaltyAmount: "AED 1,000 first time, AED 2,000 repeat + 2% per month unpaid tax penalty",
    actionRequired: "File Form VAT201 on EmaraTax portal with verified tax invoice backing.",
    status: "UPCOMING",
  },
  {
    id: "vat-q3",
    category: "vat",
    title: "Quarterly VAT Return & Payment — Tax Period Q3 (Jul–Sep)",
    authority: "Federal Tax Authority (Cabinet Decision No. 52 of 2017)",
    rule: "28th day of the month following the end of the tax period.",
    standardDeadline: "28th of October",
    nextUpcoming2026: "28 October 2026",
    penaltyStatute: "Cabinet Decision No. 49 of 2021",
    penaltyAmount: "AED 1,000 first time, AED 2,000 repeat + 2% per month unpaid tax penalty",
    actionRequired: "Electronic filing and payment via UAE Central Bank direct debit or GBRIS credit card.",
    status: "UPCOMING",
  },
  {
    id: "vat-q4",
    category: "vat",
    title: "Quarterly VAT Return & Payment — Tax Period Q4 (Oct–Dec)",
    authority: "Federal Tax Authority (Cabinet Decision No. 52 of 2017)",
    rule: "28th day of the month following the end of the tax period.",
    standardDeadline: "28th of January",
    nextUpcoming2026: "28 January 2027",
    penaltyStatute: "Cabinet Decision No. 49 of 2021",
    penaltyAmount: "AED 1,000 first time, AED 2,000 repeat + 2% per month unpaid tax penalty",
    actionRequired: "Year-end VAT reconciliation aligning total VAT returns to audited statutory financial ledger.",
    status: "UPCOMING",
  },
  {
    id: "esr-notification",
    category: "esr",
    title: "Economic Substance Regulations (ESR) Annual Notification",
    authority: "Ministry of Finance (MoF Cabinet Resolution No. 57 of 2020)",
    rule: "Within 6 months from the end of the licensee's financial year.",
    standardDeadline: "6 Months Post FY-End",
    nextUpcoming2026: "30 June 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "Cabinet Resolution No. 57 of 2020",
    penaltyAmount: "AED 20,000 for failure to submit notification",
    actionRequired: "Submit notification on MoF portal declaring Relevant Activities undertaken in the year.",
    status: "UPCOMING",
  },
  {
    id: "esr-report",
    category: "esr",
    title: "Economic Substance Regulations (ESR) Full Annual Report",
    authority: "Ministry of Finance (MoF Cabinet Resolution No. 57 of 2020)",
    rule: "Within 12 months from the end of the financial year for entities with relevant income.",
    standardDeadline: "12 Months Post FY-End",
    nextUpcoming2026: "31 Dec 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "Cabinet Resolution No. 57 of 2020",
    penaltyAmount: "AED 50,000 initial penalty + AED 400,000 for repeated failure & potential license revocation",
    actionRequired: "Demonstrate adequate CIGA (Core Income-Generating Activities), employees, and expenditure in the UAE.",
    status: "UPCOMING",
  },
  {
    id: "ubo-declaration",
    category: "esr",
    title: "Ultimate Beneficial Owner (UBO) Register Maintenance",
    authority: "Ministry of Economy (Cabinet Decision No. 109 of 2023)",
    rule: "Mandatory update within 15 calendar days of any change in ownership or management.",
    standardDeadline: "15 Days from Modification",
    nextUpcoming2026: "Continuous Statutory Mandate",
    penaltyStatute: "Cabinet Decision No. 109 of 2023",
    penaltyAmount: "AED 15,000 to AED 100,000 plus commercial license suspension",
    actionRequired: "Maintain internal register of beneficial owners (>25% shareholding) and register with DED/Free Zone.",
    status: "CONTINUOUS",
  },
  {
    id: "freezone-audit-dmcc",
    category: "audit",
    title: "DMCC Statutory Audit Submission & Portal Upload",
    authority: "Dubai Multi Commodities Centre (DMCC Authority)",
    rule: "Mandatory upload within 90 days from the end of the financial year.",
    standardDeadline: "90 Days Post FY-End",
    nextUpcoming2026: "31 March 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "DMCC Company Regulations",
    penaltyAmount: "Financial fines up to AED 10,000 + portal block on employment visas and trade license renewal",
    actionRequired: "Approved DMCC registered auditor sign-off and balance sheet portal submission.",
    status: "CRITICAL",
  },
  {
    id: "freezone-audit-difc-adgm",
    category: "audit",
    title: "DIFC & ADGM Statutory Audit & Annual Return Filing",
    authority: "Dubai International Financial Centre (DIFC) / Abu Dhabi Global Market (ADGM)",
    rule: "Within 4 months of financial year-end for DIFC; 4 months for ADGM.",
    standardDeadline: "4 Months Post FY-End",
    nextUpcoming2026: "30 April 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "DIFC Companies Law / ADGM Companies Regulations",
    penaltyAmount: "USD 1,000 to USD 5,000 late filing fine + regulatory compliance flag",
    actionRequired: "Audit report prepared strictly in accordance with IFRS and audited by DFSA/ADGM registered firm.",
    status: "UPCOMING",
  },
  {
    id: "freezone-audit-jafza-dafza",
    category: "audit",
    title: "JAFZA & DAFZA Statutory Financial Statements Filing",
    authority: "Jebel Ali Free Zone (JAFZA) / Dubai Airport Freezone (DAFZA)",
    rule: "Within 3 months of financial year-end.",
    standardDeadline: "3 Months Post FY-End",
    nextUpcoming2026: "31 March 2026 (For FY ending 31 Dec 2025)",
    penaltyStatute: "JAFZA Offshore/Onshore Regulations",
    penaltyAmount: "AED 5,000 initial late penalty + license renewal block",
    actionRequired: "Deposit signed auditor's report and audited balance sheet on the Dubai Trade portal.",
    status: "CRITICAL",
  },
];

export default function ComplianceCalendarClient() {
  const [activeTab, setActiveTab] = useState<"all" | "tax" | "vat" | "esr" | "audit">("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredDeadlines = STATUTORY_DEADLINES.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ===================================================================== */}
        {/* HERO: Editorial Header & Statutory Assurance Thesis                   */}
        {/* ===================================================================== */}
        <section className="relative bg-[#071426] text-white py-16 sm:py-24 overflow-hidden border-b border-white/10">
          {/* Subtle Atmospheric Backdrop */}
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
              <span className="text-white font-semibold">Compliance Calendar</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/20 border border-[#36A783]/40 px-3.5 py-1.5 rounded-full mb-4">
                <Calendar className="w-3.5 h-3.5 text-[#36A783]" />
                <span>UAE Statutory Deadlines 2026 / 2027</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-white tracking-tight leading-[1.15] mb-6">
                <FlowText
                  text="Never Miss a Statutory Deadline. Zero Penalties Guaranteed."
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg text-[#CBD5E1] leading-relaxed font-sans mb-8">
                Official statutory calendar tracking UAE Corporate Tax (Form CT6), Quarterly VAT (Form 201), Economic Substance Regulations (ESR), UBO disclosures, and Free Zone statutory audit submissions across all 7 Emirates.
              </p>

              {/* Quick Stat Pill Strip */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#83D9BE]">
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  9 Months CT Rule
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  28-Day VAT Rule
                </span>
                <span className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                  SBR 0% Active Thru 2029
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================== */}
        {/* INTERACTIVE DEADLINES DIRECTORY                                       */}
        {/* ===================================================================== */}
        <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-[#CBD5E1]">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-white text-[#4A5D73] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                All Mandates ({STATUTORY_DEADLINES.length})
              </button>
              <button
                onClick={() => setActiveTab("tax")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "tax"
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-white text-[#4A5D73] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                Corporate Tax (9% & 0% SBR)
              </button>
              <button
                onClick={() => setActiveTab("vat")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "vat"
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-white text-[#4A5D73] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                Quarterly VAT (5%)
              </button>
              <button
                onClick={() => setActiveTab("esr")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "esr"
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-white text-[#4A5D73] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                ESR & UBO Compliance
              </button>
              <button
                onClick={() => setActiveTab("audit")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === "audit"
                    ? "bg-[#071426] text-white shadow-md"
                    : "bg-white text-[#4A5D73] border border-[#CBD5E1] hover:bg-[#F1F5F9]"
                }`}
              >
                Free Zone Statutory Audits
              </button>
            </div>

            <Link
              href="/#consult-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3.5 py-2 rounded-xl hover:bg-[#36A783] hover:text-white transition-all"
            >
              <span>Request Practice Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Deadlines List Cards */}
          <div className="space-y-6">
            {filteredDeadlines.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#36A783]/60 transition-all duration-300 p-6 sm:p-8 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                {/* Top Row: Authority & Status */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-[#216D56] bg-[#EAF4F0] px-2.5 py-0.5 rounded-full">
                      {item.authority}
                    </span>
                    <span className="text-xs text-[#64748B] font-mono">
                      Rule: {item.standardDeadline}
                    </span>
                  </div>

                  <span
                    className={`font-mono text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                      item.status === "CRITICAL"
                        ? "bg-rose-50 text-rose-700 border border-rose-200"
                        : item.status === "UPCOMING"
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    }`}
                  >
                    ● {item.status}
                  </span>
                </div>

                {/* Main Obligation Title */}
                <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#071426] tracking-tight leading-snug mb-3">
                  {item.title}
                </h3>

                {/* Rule Detail */}
                <p className="text-sm text-[#4A5D73] leading-relaxed mb-6 font-sans">
                  {item.rule}
                </p>

                {/* 3-Column Specifics Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6">
                  {/* Next Date */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#64748B] block mb-1">
                      Next Statutory Deadline (2026)
                    </span>
                    <span className="text-sm font-bold text-[#071426]">
                      {item.nextUpcoming2026}
                    </span>
                  </div>

                  {/* Statutory Penalty Risk */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-rose-700 block mb-1">
                      Statutory Non-Compliance Penalty
                    </span>
                    <span className="text-xs font-semibold text-rose-600 leading-snug block">
                      {item.penaltyAmount}
                    </span>
                  </div>

                  {/* Action Required */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#216D56] block mb-1">
                      Auditclue Execution Deliverable
                    </span>
                    <span className="text-xs text-[#071426] leading-snug block">
                      {item.actionRequired}
                    </span>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0]">
                  <span className="text-xs font-mono text-[#64748B]">
                    Governed by: {item.penaltyStatute}
                  </span>

                  <Link
                    href="/#consult-form"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#216D56] hover:text-[#071426] transition-colors"
                  >
                    <span>Engage Advisory for this Filing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================== */}
        {/* EMAIL DEADLINE ALERT SUBSCRIPTION WIDGET                              */}
        {/* ===================================================================== */}
        <section className="py-14 bg-[#071426] text-white border-t border-white/10 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1 rounded-full mb-4 font-mono">
              <Bell className="w-3.5 h-3.5 text-[#83D9BE]" />
              <span>COMPLIANCE RADAR NOTIFICATIONS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight mb-4">
              Get Automated Filing Reminders 60, 30 & 7 Days in Advance
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mb-8 font-sans leading-relaxed">
              Never get surprised by an FTA penalty. Receive customized statutory reminders directly to your corporate inbox aligned with your specific financial year-end.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-[#36A783]/20 border border-[#36A783]/50 text-white max-w-md mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#83D9BE] mx-auto mb-2" />
                <p className="font-semibold text-sm">You are subscribed to UAE Statutory Reminders!</p>
                <p className="text-xs text-[#CBD5E1] mt-1">Our advisory team will monitor your deadlines.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter corporate email address..."
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#36A783]"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#C6F850] text-[#071426] font-bold text-sm hover:bg-white transition-colors cursor-pointer shrink-0"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono text-[#83D9BE]">
              <span>✓ No Spam</span>
              <span>•</span>
              <span>✓ Official FTA & MoF Alerts Only</span>
              <span>•</span>
              <span>✓ 100% Free Service</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
