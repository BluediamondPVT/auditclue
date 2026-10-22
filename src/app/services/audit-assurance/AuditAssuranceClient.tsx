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
  ShieldCheck,
  FileText,
  Clock,
  ChevronDown,
  ChevronUp,
  Scale,
  Layers,
  Building2,
} from "lucide-react";

const AUDIT_DETAILED_SERVICES = [
  {
    num: "01",
    title: "Statutory Financial Statement Audit Coordination",
    scope:
      "End-to-end management and coordination of mandatory annual statutory audits conducted in accordance with International Standards on Auditing (ISA) and UAE Commercial Companies Law.",
    deliverable: "Bank-Ready Signed & Sealed Independent Auditor's Report",
    turnaround: "Annual Mandate (10–14 Business Days)",
  },
  {
    num: "02",
    title: "IFRS Financial Statements Compilation",
    scope:
      "Drafting complete statutory financial statements, balance sheets, and comprehensive explanatory notes strictly aligned with International Financial Reporting Standards (IFRS) and IFRS for SMEs.",
    deliverable: "Full IFRS Financial Statement Pack with Disclosures",
    turnaround: "5–7 Business Days",
  },
  {
    num: "03",
    title: "Free Zone Annual Audit Compliance (DMCC, DIFC, ADGM, JAFZA)",
    scope:
      "Specialized audit dossier preparation to fulfill mandatory annual filing deadlines imposed by UAE Free Zone authorities (DMCC portal submission, JAFZA, DAFZA, RAKEZ, IFZA, ADGM, and DIFC).",
    deliverable: "Free Zone Authority Verified Audit Clearance & Renewal Filings",
    turnaround: "Expedited for Authority Deadlines",
  },
  {
    num: "04",
    title: "Risk-Based Internal Audit & Operational Reviews",
    scope:
      "Evaluating internal financial controls, corporate governance, operational workflows, and fraud vulnerability across procurement, sales, payroll, and treasury functions.",
    deliverable: "Internal Audit Report with Risk Heatmap & Governance Remediation",
    turnaround: "Quarterly / Semi-Annual",
  },
  {
    num: "05",
    title: "Agreed-Upon Procedures (AUP) Engagements (ISRS 4400)",
    scope:
      "Targeted factual investigations requested by lenders, shareholders, or regulatory bodies to verify specific metrics: gross revenue certificates, escrow accounts, or lease turnovers.",
    deliverable: "Official Factual Findings Report (ISRS 4400 Compliant)",
    turnaround: "3–5 Business Days",
  },
  {
    num: "06",
    title: "Financial Due Diligence & M&A Audit Support",
    scope:
      "Rigorous quality of earnings (QoE) analysis, normalized working capital assessment, and hidden liability verification for mergers, business sales, or private equity investments.",
    deliverable: "Comprehensive Due Diligence Memorandum & Red-Flag Matrix",
    turnaround: "Transaction Timetable",
  },
  {
    num: "07",
    title: "Fixed Asset & Physical Inventory Verification",
    scope:
      "Independent on-site and remote physical stock takes, barcode tagging audits, and warehouse reconciliation to identify phantom inventory and valuation write-downs.",
    deliverable: "Physical Inventory Certification & Fixed Asset Register Reconciliation",
    turnaround: "Year-End / Periodic",
  },
  {
    num: "08",
    title: "Revenue Assurance & Contractual Compliance Reviews",
    scope:
      "Testing revenue recognition policies under IFRS 15, matching deferred revenue schedules, and validating billing compliance for SaaS, construction, and high-volume retail sectors.",
    deliverable: "IFRS 15 Revenue Assurance Sign-Off & Gap Analysis",
    turnaround: "5 Business Days",
  },
  {
    num: "09",
    title: "Audit Readiness & Pre-Audit File Preparation",
    scope:
      "Acting on behalf of management to prepare audit schedules, lead sheets, bank confirmation letters, and trial balance reconciliations before external auditors begin fieldwork.",
    deliverable: "Audit-Ready Lead Sheets & PBC (Prepared by Client) File Pack",
    turnaround: "3–5 Business Days",
  },
  {
    num: "10",
    title: "Anti-Money Laundering (AML) Compliance Audit",
    scope:
      "Independent statutory audit of Designated Non-Financial Businesses and Professions (DNFBPs) verifying compliance with UAE Cabinet Decision No. 10 of 2019 and goAML reporting.",
    deliverable: "Independent AML Compliance Audit Report & Regulatory Filing",
    turnaround: "Annual Mandate",
  },
];

const AUDIT_FAQS = [
  {
    q: "Which companies are legally required to conduct an annual audit in the UAE?",
    a: "Under UAE Federal Decree-Law No. 32 of 2021 (Commercial Companies Law), all PJSCs and LLCs are required to have their accounts audited. Furthermore, major Free Zones including DMCC, DIFC, ADGM, JAFZA, and DAFZA make the submission of an annual audited financial statement mandatory for trade license renewal.",
  },
  {
    q: "What is the deadline for submitting audited financial statements in UAE Free Zones?",
    a: "Deadlines vary by jurisdiction. For example, DMCC mandates submission within 90 days of the company's financial year-end, while DIFC and ADGM allow up to 4 months. Other Free Zones allow between 3 to 6 months. Failure to submit on time can lead to license suspension and portal blockages.",
  },
  {
    q: "How does an audit report assist with UAE Corporate Tax compliance?",
    a: "Qualifying Free Zone Persons (QFZPs) benefiting from the 0% Corporate Tax rate are statutorily required under Ministerial Decision No. 139 of 2023 to maintain audited financial statements. Failure to obtain an audit forfeits the 0% regime, triggering standard 9% tax on all revenue.",
  },
  {
    q: "Can Auditclue assist our company if our accounts are messy or behind schedule?",
    a: "Yes. Our pre-audit readiness team specializes in backlog reconstruction. We prepare all reconciliations, compile IFRS financial statements, and organize the PBC (Prepared By Client) audit pack, ensuring external auditor sign-off with zero qualified opinions.",
  },
  {
    q: "What standards are used for audits in the UAE?",
    a: "Audits in the UAE are strictly conducted in accordance with International Standards on Auditing (ISA) issued by the IAASB, and the financial statements must be prepared in compliance with International Financial Reporting Standards (IFRS).",
  },
];

const OTHER_SERVICES = [
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
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

export default function AuditAssuranceClient() {
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
                Audit & Assurance
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>ISA & IFRS STANDARDS • MINISTRY & FREE ZONE APPROVED</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText text="Audit & Assurance Services" as="span" />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                Statutory and internal audit assurance engineered for transparency, stakeholder trust, and regulatory compliance. Auditclue provides comprehensive audit coordination, IFRS financial reporting, and agreed-upon procedures across Mainland UAE and premier Free Zones (DMCC, DIFC, ADGM, JAFZA).
              </p>

              {/* Statutory Metric Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-6 border-t border-[#CBD5E1]/70">
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Auditing Standard</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">ISA Aligned</div>
                  <div className="text-[11px] text-[#216D56] font-sans">International Standards</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Statutory Mandate</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">Free Zones</div>
                  <div className="text-[11px] text-[#216D56] font-sans">License Renewal Ready</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Tax Implication</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">0% QFZP Rule</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Corporate Tax Mandate</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">Turnaround SLA</div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">10–14 Days</div>
                  <div className="text-[11px] text-[#216D56] font-sans">Predictable Deadlines</div>
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
                    <span>Talk With an Auditor</span>
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
                  ASSURANCE CAPABILITIES
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  10 Scoped Deliverables in Audit & Assurance
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                Chartered CPA & ACCA Sign-Off · 100% Digital Delivery
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {AUDIT_DETAILED_SERVICES.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1]/80 hover:border-[#36A783] hover:shadow-md transition-all group"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                    <div className="lg:col-span-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-bold text-[#36A783] bg-[#EAF4F0] px-2.5 py-1 rounded-md">
                          [{item.num}] AUDIT
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
        {/* 3. FREE ZONE & STATUTORY AUDIT MANDATES                           */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                REGULATORY BLUEPRINT
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                Statutory Audit Deadlines Across Key UAE Jurisdictions
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                Free zone authorities and lenders require approved audit submissions within rigid timelines post-fiscal year end:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">DMCC DUBAI</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Within 90 Days</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Mandatory submission via DMCC portal for annual trade license renewal and company good standing status.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">DIFC / ADGM</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Within 4 Months</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Common law financial centers require full IFRS disclosure packs and DFSA / FSRA compliance reviews.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">JAFZA / DAFZA</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Within 3 Months</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  Annual submission required for industrial and commercial operations along with bank audit certifications.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD5E1] shadow-sm">
                <div className="font-mono text-xs font-bold text-[#36A783] mb-2">0% CORPORATE TAX</div>
                <h3 className="text-lg font-serif font-bold text-[#071426] mb-2">Mandatory Requirement</h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  All Qualifying Free Zone Persons (QFZPs) must obtain an annual statutory audit to maintain 0% tax relief.
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
                EXPERT CLARIFICATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                UAE Statutory & Internal Audit FAQs
              </h2>
              <p className="text-base text-[#475569] font-sans">
                Clear answers regarding audit obligations, free zone deadlines, and corporate tax implications.
              </p>
            </div>

            <div className="space-y-4">
              {AUDIT_FAQS.map((faq, idx) => {
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
        {/* 5. CONSULTATION FORM                                              */}
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
                    DIRECT AUDITOR ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Speak Directly With an Audit Partner
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Need annual statutory audit sign-off, Free Zone compliance clearance, or agreed-upon procedures? Contact our senior team.
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
                      <div className="text-xs font-mono text-[#64748B]">Call Direct Line:</div>
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
                      <div className="text-xs font-mono text-[#83D9BE]">WhatsApp Priority Desk:</div>
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
