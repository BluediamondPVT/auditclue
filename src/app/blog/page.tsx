import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building2,
  Scale,
  Percent,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "UAE Tax & Regulatory Insights Blog | Auditclue Advisory",
  description:
    "Authoritative analysis on UAE Corporate Tax (9%), Small Business Relief (extended to 2029), FTA e-invoicing mandates, Qualifying Free Zone Person (QFZP) rules, and IFRS statutory audit compliance.",
};

interface Article {
  slug: string;
  category: string;
  categoryColor: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
}

const ARTICLES: Article[] = [
  {
    slug: "uae-corporate-tax-deadlines-penalties-guide",
    category: "Corporate Tax (9%)",
    categoryColor: "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30",
    title: "UAE Corporate Tax Filing Deadlines & FTA Penalty Prevention (2024–2026)",
    excerpt:
      "A comprehensive walkthrough of the 9-month statutory filing timeline following your financial year-end, deregistration protocols, and how to avoid the mandatory AED 10,000 to AED 20,000 late-submission penalties.",
    readTime: "6 min read",
    date: "October 2026",
    author: "Tax Advisory Practice",
    featured: true,
  },
  {
    slug: "small-business-relief-sbr-extended-2029",
    category: "Reliefs & Exemptions",
    categoryColor: "bg-[#EFF6FF] text-[#1D4ED8] border-[#93C5FD]/40",
    title: "Small Business Relief Extended to 31 December 2029: Eligibility Criteria & Revenue Caps",
    excerpt:
      "Ministerial decision updates on the AED 3,000,000 gross revenue threshold. How resident taxable persons can claim 0% effective tax and simplified accounting rules through tax periods ending 2029.",
    readTime: "5 min read",
    date: "October 2026",
    author: "Direct Tax Practice",
    featured: true,
  },
  {
    slug: "qualifying-free-zone-person-qfzp-rules",
    category: "Free Zones",
    categoryColor: "bg-[#F5F3FF] text-[#6D28D9] border-[#DDD6FE]/50",
    title: "Qualifying Free Zone Person (QFZP): 0% vs 9% Tax Treatment Decoded",
    excerpt:
      "Understanding Qualifying Income, de minimis rule requirements, adequate economic substance in UAE Free Zones, and disqualification triggers when dealing with mainland counterparties.",
    readTime: "7 min read",
    date: "September 2026",
    author: "Corporate Structuring Desk",
  },
  {
    slug: "uae-e-invoicing-mandate-peppol-compliance",
    category: "Digital Finance",
    categoryColor: "bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]/60",
    title: "UAE E-Invoicing System (EES): Peppol Network Integration & FTA Rollout",
    excerpt:
      "Preparation roadmap for B2B electronic invoice exchange, continuous transaction controls (CTC), data dictionary standards, and ERP connectivity ahead of statutory enforcement.",
    readTime: "4 min read",
    date: "September 2026",
    author: "Technology & Digital Advisory",
  },
  {
    slug: "ifrs-statutory-audit-checklist-uae",
    category: "Statutory Audit",
    categoryColor: "bg-[#ECFDF5] text-[#047857] border-[#A7F3D0]/50",
    title: "Annual Statutory Audit Checklist for UAE Mainland & Free Zone Enterprises",
    excerpt:
      "Key preparation schedules, bank confirmations, inventory physical counts, related party disclosures, and ISA standards required for trade license renewal and bank facility compliance.",
    readTime: "8 min read",
    date: "August 2026",
    author: "Audit & Assurance Practice",
  },
  {
    slug: "uae-vat-common-audit-triggers-fta",
    category: "VAT (5%)",
    categoryColor: "bg-[#FFF1F2] text-[#BE123C] border-[#FECDD3]/50",
    title: "Top 7 VAT Audit Triggers by the Federal Tax Authority and How to Protect Your Cashflow",
    excerpt:
      "Inaccurate input tax apportionment, export documentation deficiencies, delayed voluntary disclosures, and reverse charge mechanism errors that lead to automatic FTA tax assessments.",
    readTime: "6 min read",
    date: "August 2026",
    author: "Indirect Tax Practice",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* Editorial Header Banner */}
        <section className="relative bg-gradient-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 py-16 sm:py-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-6 font-mono"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold">Blog & Regulatory Insights</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 font-mono shadow-xs">
              <BookOpen className="w-3.5 h-3.5 text-[#36A783]" />
              <span>UAE STATUTORY INTELLIGENCE & ADVISORY BRIEFS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-tight mb-5 max-w-3xl">
              <FlowText
                text="Insights on UAE Corporate Tax, Statutory Audit & Digital Compliance"
                as="span"
              />
            </h1>

            <p className="text-base sm:text-lg text-[#475569] max-w-2xl leading-relaxed">
              Clear, practical regulatory explainers authored by our certified Chartered Tax
              Advisors, registered auditors, and corporate structuring specialists.
            </p>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
              Featured Regulatory Briefs
            </h2>
            <span className="text-xs font-mono text-[#64748B]">Updated for 2026/2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {ARTICLES.filter((a) => a.featured).map((article) => (
              <div
                key={article.slug}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#36A783]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border font-mono ${article.categoryColor}`}
                    >
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#64748B] font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#475569] leading-relaxed mb-6 font-sans">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#36A783]" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="font-medium text-[#071426]">{article.author}</span>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-[#216D56] font-semibold group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Advisory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All Articles Grid */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#071426] mb-2">
              Recent Analysis & Practice Notes
            </h2>
            <p className="text-sm text-[#64748B] mb-8">
              In-depth commentary on UAE Federal Tax Authority decrees and statutory accounting standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.filter((a) => !a.featured).map((article) => (
                <div
                  key={article.slug}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#36A783]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border font-mono ${article.categoryColor}`}
                      >
                        {article.category}
                      </span>
                      <span className="text-[11px] text-[#64748B] font-mono">
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug mb-2.5">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-5 line-clamp-3 font-sans">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#64748B]">
                    <span>{article.date}</span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-[#216D56] font-semibold group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisory Retainer CTA Banner */}
        <section className="py-14 sm:py-18 bg-[#071426] text-white relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-0 opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#36A783]/15 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#83D9BE]" />
              <span>CUSTOM ADVISORY ADAPTED TO YOUR FINANCIAL YEAR</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-tight mb-4">
              Need Direct Guidance for Your Business Entity?
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] max-w-2xl mx-auto mb-8 leading-relaxed font-sans">
              Schedule a confidential strategy call with our senior partners to review your
              corporate tax liability, audit scope, or Free Zone qualifying status.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#36A783] hover:bg-[#2E8C6D] text-[#071426] font-semibold text-sm px-6 py-3 rounded-full transition-all shadow-lg hover:scale-[1.02]"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm px-6 py-3 rounded-full transition-all border border-white/20"
              >
                <span>Simulate Corporate Tax</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
