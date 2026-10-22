"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import {
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Layers,
  Building2,
  Lock,
} from "lucide-react";

const ACCOUNTING_DETAILED_SERVICES = [
  {
    num: "01",
    title: "Monthly Accounting & General Ledger Maintenance",
    scope:
      "Recording all day-to-day business transactions, sales ledgers, purchase ledgers, and journal entries in strict compliance with IFRS for SMEs and UAE Corporate Tax rules.",
    deliverable: "Monthly Verified Trial Balance & General Ledger Audit Trail",
    turnaround: "Monthly Close (By 10th of following month)",
  },
  {
    num: "02",
    title: "Bank, Credit Card & Gateway Reconciliation",
    scope:
      "Reconciling UAE corporate bank accounts (ENBD, Mashreq, FAB, ADCB, Wio), corporate credit cards, and payment gateway payouts (Stripe, Telr, Tabby, Tamara) to ensure zero unrecorded cash leakages.",
    deliverable: "Reconciled Bank Statements & Variance Elimination Reports",
    turnaround: "Weekly / Monthly Routine",
  },
  {
    num: "03",
    title: "Accounts Receivable (AR) & Credit Control",
    scope:
      "Tracking customer balances, issuing accurate sequential tax invoices, generating monthly customer statements, and identifying overdue receivables to optimize operational cash flow.",
    deliverable: "Aged Debtor Analysis (30/60/90+ days) & Provisioning Matrix",
    turnaround: "Continuous Monitoring",
  },
  {
    num: "04",
    title: "Accounts Payable (AP) & Vendor Management",
    scope:
      "Reviewing supplier bills against purchase orders and delivery notes, matching input VAT eligibility, and preparing batch payment schedules for management sign-off.",
    deliverable: "Aged Creditors Schedule & Authorized Supplier Payment Run Packs",
    turnaround: "Bi-Weekly / Monthly",
  },
  {
    num: "05",
    title: "Chart of Accounts (COA) Design & Implementation",
    scope:
      "Structuring a bespoke multi-currency Chart of Accounts reflecting your unique business lines, cost centres, and statutory UAE VAT and Corporate Tax deductible categories.",
    deliverable: "Standardized IFRS Chart of Accounts with Tax Mapping",
    turnaround: "Initial Setup (3–5 Days)",
  },
  {
    num: "06",
    title: "Cloud Accounting Setup & ERP Migration",
    scope:
      "End-to-end setup and migration of financial data to leading cloud platforms: Zoho Books (FTA Accredited), Xero, QuickBooks Online, Sage, Odoo, or NetSuite.",
    deliverable: "Fully Configured Cloud Environment with Automated Bank Feeds",
    turnaround: "5–7 Business Days",
  },
  {
    num: "07",
    title: "Monthly Financial Statements & Executive MIS",
    scope:
      "Preparation of comprehensive management accounts: Statement of Profit or Loss, Balance Sheet, Statement of Cash Flows, and custom department KPI variance analysis.",
    deliverable: "Board-Ready Executive MIS Pack & Senior Advisor Debrief Call",
    turnaround: "Monthly Delivery",
  },
  {
    num: "08",
    title: "Historical Backlog Accounting & Clean-Up",
    scope:
      "Reconstructing incomplete, disorganized, or multi-year backlog financial records for companies needing urgent bank loan approvals, trade license renewals, or FTA tax audit defense.",
    deliverable: "Audit-Ready Reconstructed Financial Books & Audit Clearance",
    turnaround: "Expedited Timetable",
  },
  {
    num: "09",
    title: "Payroll Accounting & UAE WPS Compliance",
    scope:
      "Computing monthly staff salaries, allowances, deductions, and End of Service Gratuity (EOSG) accruals under the UAE Labour Law, generating Wages Protection System (WPS) SIF files.",
    deliverable: "WPS SIF File, Gratuity Accrual Schedule & Employee Pay Slips",
    turnaround: "Monthly Payroll Run",
  },
  {
    num: "10",
    title: "Accounting Supervision & Quality Controller Sign-Off",
    scope:
      "Senior Chartered Accountant (CPA/ACCA) oversight for companies with junior in-house bookkeepers. We perform monthly reviews, test journal entries, and sign off on internal financial integrity.",
    deliverable: "Monthly Controller Review Memorandum & Internal Control Audit",
    turnaround: "Monthly Retainer",
  },
];

const ACCOUNTING_FAQS = [
  {
    q: "Is bookkeeping legally mandatory for all companies in the UAE?",
    a: "Yes. Under Federal Decree-Law No. 32 of 2021 (Commercial Companies Law) and UAE Corporate Tax Law (Federal Decree-Law No. 47 of 2022), every UAE business — whether Mainland DED or Free Zone — is legally obligated to maintain commercial books of account and retain accounting records and supporting documents for a minimum of 5 years (7 years for real estate).",
  },
  {
    q: "Can our company maintain books in foreign currency (USD, EUR, GBP)?",
    a: "Yes. While accounting records can be maintained in your functional operational currency (such as USD or EUR), statutory tax filings (Corporate Tax and VAT) submitted to the Federal Tax Authority (FTA) must be translated into UAE Dirhams (AED) using the official Central Bank of the UAE exchange rates.",
  },
  {
    q: "How does Auditclue handle data security and document sharing?",
    a: "We operate a 100% cloud-based delivery architecture. Your financial statements, receipts, and bank statements are shared through our dedicated AES-256 encrypted digital client portal, ensuring bank-grade confidentiality and eliminating physical paperwork or courier transit.",
  },
  {
    q: "Which cloud accounting software does Auditclue support?",
    a: "Our certified advisors support and implement all major platforms, with specialized accreditation in Zoho Books (FTA Accredited Accounting Software), Xero, QuickBooks Online, Sage, Odoo, and NetSuite. We assist in migrating your data seamlessly with zero operational downtime.",
  },
  {
    q: "How does monthly bookkeeping connect with UAE Corporate Tax filing?",
    a: "Under the UAE Corporate Tax regime, taxable income is calculated directly from your standalone IFRS financial statements. Accurate, monthly reconciled bookkeeping guarantees that allowable deductions, non-deductible entertainment expenses, and interest caps are correctly categorized throughout the year, preventing retroactive tax adjustments and penalties.",
  },
];

const OTHER_SERVICES = [
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "UAE VAT Services", href: "/services/vat-services" },
  { name: "UAE Corporate Tax", href: "/services/corporate-tax" },
  { name: "Business Setup & Formation", href: "/services/business-setup" },
  { name: "Transfer Pricing", href: "/services/transfer-pricing" },
  { name: "CFO & Finance Advisory", href: "/services/cfo-advisory" },
  { name: "Corporate Finance", href: "/services/corporate-finance" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Compliance Services", href: "/services/compliance-services" },
  { name: "Technology & Digital Finance", href: "/services/technology-digital" },
];

export default function AccountingBookkeepingClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION                                                   */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[600px] h-[450px] bg-gradient-to-br from-[#36A783]/20 via-[#83D9BE]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-[550px] h-[400px] bg-gradient-to-tr from-[#233F5B]/12 via-[#36A783]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
                Accounting & Bookkeeping
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>IFRS COMPLIANT • CLOUD-ENABLED DELIVERY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText text="Accounting & Bookkeeping Services" as="span" />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                Accurate, compliant financial records are the foundation of every thriving enterprise. Auditclue delivers fully digital, IFRS-compliant accounting and bookkeeping solutions tailored to UAE Mainland and Free Zone companies. From day-to-day transaction recording to board-ready monthly MIS packs and year-end closing support.
              </p>

              {/* Statutory Metric Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-6 border-t border-[#CBD5E1]/70">
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Reporting Standard</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">IFRS for SMEs</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Global GAAP Aligned</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Statutory Rule</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">Article 26</div>
                  <div className="text-[11px] text-[#216D56] font-sans">CCL Mandatory Books</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Record Retention</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">5 Years</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Audit-Proof Vault</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Software Support</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">Cloud ERP</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Zoho / Xero / QBO</div>
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
        {/* 2. PRACTICE SCOPE: 10 SCOPED DELIVERABLES                         */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  PRACTICE SCOPE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  What&apos;s Included in Our Accounting & Bookkeeping
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                Chartered CPA Oversight · 100% Digital Delivery
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {ACCOUNTING_DETAILED_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1]/80 hover:border-[#36A783] hover:shadow-md transition-all group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-bold text-[#36A783] bg-[#EAF4F0] px-2.5 py-1 rounded-md">
                          [{item.num}] PRACTICE
                        </span>
                        <span className="text-xs font-mono text-[#64748B]">
                          {item.turnaround}
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-5">
                      <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed">
                        {item.scope}
                      </p>
                    </div>

                    <div className="lg:col-span-3 lg:border-l lg:border-[#CBD5E1] lg:pl-6">
                      <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mb-1">
                        Key Deliverable:
                      </div>
                      <div className="text-xs font-medium text-[#216D56] bg-[#EAF4F0] p-2.5 rounded-xl border border-[#36A783]/20 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
                        <span>{item.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. EXECUTIVE DELIVERABLES MATRIX (What You Receive Each Month)    */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                EXECUTIVE PACK
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                What You Receive in Your Monthly Financial Dossier
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                Clean, reconciled numbers delivered by the 10th of every month, giving management and investors real-time visibility into business performance:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">[01] STATUTORY</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Statement of P&L</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Revenue breakdown, cost of goods sold (COGS), gross margins, operating expenses, and net profit trends.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">[02] LIQUIDITY</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Balance Sheet & Net Worth</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Current assets, fixed assets depreciation, current liabilities, shareholder equity, and working capital ratios.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">[03] CASH RUNWAY</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Cash Flow Statement</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Operating, investing, and financing cash movements tracking net cash burn and future runway projections.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">[04] WORKING CAPITAL</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">AR & AP Aging Ledgers</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Overdue invoice aging schedules, credit risk alerts, and scheduled supplier payment approvals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. FAQS ACCORDION                                                 */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                COMMON QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                UAE Accounting & Bookkeeping FAQs
              </h2>
              <p className="text-base text-[#475569] font-sans">
                Statutory answers regarding record retention, currencies, and corporate tax compliance in the UAE.
              </p>
            </div>

            <div className="space-y-4">
              {ACCOUNTING_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1]/90 shadow-2xs overflow-hidden transition-colors"
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#475569] font-sans leading-relaxed border-t border-[#E2E8F0]">
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
        {/* 5. GET A FREE CONSULTATION: Embedded Form                         */}
        {/* ================================================================= */}
        <section
          id="consultation"
          className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                    DIRECT ADVISORY ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Speak Directly With a Senior Accountant
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Need monthly accounting retainer support, backlog cleanup, or cloud software implementation? Request a free consultation.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="tel:+971547338583"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#36A783] transition-all group shadow-2xs"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center shrink-0 group-hover:bg-[#36A783] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">Call Now / Talk With an Advisor:</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

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
                      <div className="text-xs font-mono text-[#83D9BE]">WhatsApp Us (Live Support):</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#83D9BE] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@auditclue.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#CBD5E1] hover:border-[#36A783] transition-all group shadow-2xs"
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

              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. EXPLORE OTHER SERVICES                                         */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-[#E2E8F0]">
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
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#36A783] hover:shadow-sm transition-all flex items-center justify-between group"
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
      </main>

      <Footer />
    </div>
  );
}
