"use client";

import React, { useState } from "react";
import {
  Quote,
  Star,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  jurisdiction: string;
  sector: string;
  quote: string;
  statHighlight: string;
  statLabel: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "retail",
    name: "Tariq Mansoor",
    role: "Managing Director",
    company: "OmniStyle Retail Group LLC",
    jurisdiction: "Dubai Mainland DED",
    sector: "Retail & E-Commerce",
    quote:
      "When UAE Corporate Tax was enacted, we were overwhelmed by how to account for our multi-branch retail POS data. Auditclue took full ownership: reconciled 18 months of backlog transactions, recovered AED 64,000 in uncredited input VAT, and filed our Corporate Tax return with zero stress. Their digital portal saved us hundreds of administrative hours.",
    statHighlight: "+AED 64,000",
    statLabel: "VAT Credits Recovered",
  },
  {
    id: "tech",
    name: "Elena Rostova",
    role: "Chief Financial Officer",
    company: "NexaPay Technologies FZ-LLC",
    jurisdiction: "DIFC / DMCC Free Zone",
    sector: "Technology & SaaS",
    quote:
      "Operating across Free Zones and overseas tech clients, determining our Qualifying Free Zone Person (0% Corporate Tax) status required technical precision. Auditclue delivered a comprehensive transfer pricing and QFZP audit report that passed our board and VC investor review effortlessly. Fast, responsive, and 100% remote.",
    statHighlight: "0% QFZP",
    statLabel: "Tax Status Secured",
  },
  {
    id: "logistics",
    name: "Kareem Al-Husseini",
    role: "Operations Director",
    company: "Horizon Gulf Shipping & Marine LLC",
    jurisdiction: "JAFZA Designated Zone",
    sector: "Maritime & Freight Forwarding",
    quote:
      "Cross-border cargo movements and customs Box 6/7 reconciliations are notoriously prone to FTA penalties. Auditclue's FTA Registered Tax Agents restructured our billing flow and resolved historical customs mismatches in less than two weeks. I wouldn't trust any other advisory firm with our logistics books.",
    statHighlight: "100%",
    statLabel: "Customs Mismatch Resolved",
  },
  {
    id: "healthcare",
    name: "Dr. Sameer Patel",
    role: "Chief Executive Officer",
    company: "Apex Advanced Diagnostics LLC",
    jurisdiction: "Abu Dhabi Mainland",
    sector: "Healthcare & Life Sciences",
    quote:
      "We needed urgent audited financial statements to renew our commercial facility with First Abu Dhabi Bank (FAB). Auditclue deployed a dedicated Chartered Accountant team, reconciled our inventory and fixed asset registers, and delivered bank-ready IFRS financials within 10 days. Outstanding professional rigor.",
    statHighlight: "10 Days",
    statLabel: "Bank Audit Turnaround",
  },
];

const CREDENTIAL_BADGES = [
  {
    title: "FTA Registered Tax Agents",
    desc: "Licensed legal representation for EmaraTax submissions & audits",
  },
  {
    title: "Chartered CPAs & ACCA",
    desc: "All deliverables signed off by certified senior accountants",
  },
  {
    title: "ISA & IFRS Compliance",
    desc: "Global accounting benchmarks accepted by all UAE banks & courts",
  },
  {
    title: "99.4% On-Time SLA",
    desc: "Contractually committed delivery ahead of statutory deadlines",
  },
];

const SECTORS = [
  "Retail & E-Commerce",
  "Technology & Web3",
  "Maritime & Logistics",
  "Healthcare & Life Sciences",
  "Construction & Real Estate",
  "Financial Holdings & SPVs",
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-white text-[#071426] border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#36A783]" />
            <span>CLIENT PROOF & IMPACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight mb-4">
            Trusted by 500+ UAE Businesses Across Sectors
          </h2>

          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed">
            From high-growth Free Zone startups to established Mainland commercial groups, see how our fully digital advisory protects bottom lines and guarantees statutory peace of mind.
          </p>
        </div>

        {/* Featured Testimonial Interactive Showcase */}
        <div className="rounded-3xl bg-[#071426] text-white p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl mb-16">
          {/* Subtle Ambient Background Watermark */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#36A783]/15 rounded-full blur-3xl pointer-events-none" />
          <Quote className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.03] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Quote & Speaker Info (8 cols) */}
            <div className="lg:col-span-8 space-y-6">
              {/* Star Rating & Sector Tag */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1 text-[#C6F850]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#83D9BE] bg-white/10 px-3 py-1 rounded-full">
                  {current.sector}
                </span>
                <span className="text-xs font-mono text-[#CBD5E1]">
                  {current.jurisdiction}
                </span>
              </div>

              {/* The Quote */}
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-white leading-relaxed">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Speaker Metadata */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-lg font-serif font-bold text-white">
                    {current.name}
                  </div>
                  <div className="text-xs sm:text-sm text-[#A8B7C9] font-sans">
                    {current.role} — <span className="text-[#83D9BE]">{current.company}</span>
                  </div>
                </div>

                {/* Carousel Controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={prevTestimonial}
                    aria-label="Previous Testimonial"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#36A783] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextTestimonial}
                    aria-label="Next Testimonial"
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#36A783] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Impact Highlight Card (4 cols) */}
            <div className="lg:col-span-4 bg-white/[0.05] border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#83D9BE] mb-2">
                MEASURED OUTCOME
              </span>
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#C6F850] mb-2 tracking-tight">
                {current.statHighlight}
              </div>
              <div className="text-sm font-sans text-[#E2E8F0]">
                {current.statLabel}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-1.5 text-xs font-mono text-[#A8B7C9]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                <span>Verified Client Engagement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Credibility & Statutory Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CREDENTIAL_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] flex flex-col justify-between hover:border-[#36A783] transition-colors"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[#EAF4F0] text-[#216D56] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-[#36A783]" />
                </div>
                <h3 className="text-base font-serif font-bold text-[#071426] mb-1">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#64748B] font-sans leading-relaxed">
                  {badge.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#E2E8F0] text-[11px] font-mono text-[#216D56]">
                Statutory Grade
              </div>
            </div>
          ))}
        </div>

        {/* Sector Coverage Pill Strip */}
        <div className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071426] uppercase">
            <Building2 className="w-4 h-4 text-[#36A783]" />
            <span>Industries Supported:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {SECTORS.map((sector, sIdx) => (
              <span
                key={sIdx}
                className="text-xs font-sans text-[#334155] bg-white border border-[#CBD5E1] px-3 py-1 rounded-full shadow-2xs"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
