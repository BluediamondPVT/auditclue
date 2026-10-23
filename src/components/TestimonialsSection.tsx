"use client";

import React, { useState, useEffect } from "react";
import {
  Star,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  initials: string;
  rating: number;
  highlightTitle?: string;
  quote: string;
  jurisdiction?: string;
  sector?: string;
  statHighlight?: string;
  statLabel?: string;
  date?: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "retail",
    name: "Tariq Mansoor",
    role: "Managing Director",
    company: "OmniStyle Retail Group LLC",
    location: "Dubai, UAE",
    jurisdiction: "Dubai Mainland DED",
    sector: "Retail & E-Commerce",
    initials: "TM",
    rating: 5,
    highlightTitle: "Recovered AED 64K in uncredited input VAT",
    quote:
      "When UAE Corporate Tax was enacted, we were overwhelmed by multi-branch POS data. Auditclue took full ownership: reconciled 18 months of backlog transactions, recovered AED 64,000 in uncredited input VAT, and filed our Corporate Tax return with zero stress. Their digital portal saved us hundreds of administrative hours.",
    statHighlight: "+AED 64,000",
    statLabel: "VAT Credits Recovered",
    date: "Verified Engagement • FY 2026",
  },
  {
    id: "tech",
    name: "Elena Rostova",
    role: "Chief Financial Officer",
    company: "NexaPay Technologies FZ-LLC",
    location: "Dubai, UAE",
    jurisdiction: "DIFC / DMCC Free Zone",
    sector: "Technology & SaaS",
    initials: "ER",
    rating: 5,
    highlightTitle: "0% QFZP tax status audit passed VC review",
    quote:
      "Operating across Free Zones and overseas tech clients, determining our Qualifying Free Zone Person (0% Corporate Tax) status required technical precision. Auditclue delivered a comprehensive transfer pricing and QFZP audit report that passed our board and VC investor review effortlessly. Fast, responsive, and 100% remote.",
    statHighlight: "0% QFZP",
    statLabel: "Tax Status Secured",
    date: "Verified Free Zone Client",
  },
  {
    id: "logistics",
    name: "Kareem Al-Husseini",
    role: "Operations Director",
    company: "Horizon Gulf Shipping & Marine LLC",
    location: "Dubai, UAE",
    jurisdiction: "JAFZA Designated Zone",
    sector: "Maritime & Freight Forwarding",
    initials: "KA",
    rating: 5,
    highlightTitle: "Resolved customs Box 6/7 mismatches in 2 weeks",
    quote:
      "Cross-border cargo movements and customs Box 6/7 reconciliations are notoriously prone to FTA penalties. Auditclue's FTA Registered Tax Agents restructured our billing flow and resolved historical customs mismatches in less than two weeks. I wouldn't trust any other advisory firm with our logistics books.",
    statHighlight: "100%",
    statLabel: "Customs Mismatch Resolved",
    date: "Verified Logistics Client",
  },
  {
    id: "healthcare",
    name: "Dr. Sameer Patel",
    role: "Chief Executive Officer",
    company: "Apex Advanced Diagnostics LLC",
    location: "Abu Dhabi, UAE",
    jurisdiction: "Abu Dhabi Mainland",
    sector: "Healthcare & Life Sciences",
    initials: "SP",
    rating: 5,
    highlightTitle: "Bank-ready IFRS financials delivered in 10 days",
    quote:
      "We needed urgent audited financial statements to renew our commercial facility with First Abu Dhabi Bank (FAB). Auditclue deployed a dedicated Chartered Accountant team, reconciled our inventory and fixed asset registers, and delivered bank-ready IFRS financials within 10 days. Outstanding professional rigor.",
    statHighlight: "10 Days",
    statLabel: "Bank Audit Turnaround",
    date: "Verified Healthcare Audit",
  },
  {
    id: "luxury",
    name: "Amina Al-Falasi",
    role: "Founder & CEO",
    company: "Maison Éclat Luxury Goods LLC",
    location: "Dubai, UAE",
    jurisdiction: "Dubai Design District (d3)",
    sector: "Luxury Retail & Design",
    initials: "AF",
    rating: 5,
    highlightTitle: "Pristine monthly MIS & zero audit discrepancies",
    quote:
      "As a fast-growing luxury brand, multi-currency inventory reconciliations were constant headaches. Auditclue modernized our entire accounting setup on Zoho Books with Peppol e-invoicing. We now get pristine monthly P&L statements by the 7th of every month with total clarity.",
    statHighlight: "By 7th Monthly",
    statLabel: "MIS Books Closing",
    date: "Verified Retainer Client",
  },
  {
    id: "holding",
    name: "Marcus Vance",
    role: "Managing Partner",
    company: "Vance & Cole Capital Partners",
    location: "Abu Dhabi, UAE",
    jurisdiction: "ADGM Financial Free Zone",
    sector: "Private Equity & Holdings",
    initials: "MV",
    rating: 5,
    highlightTitle: "Seamless ESR, UBO & SPV holding compliance",
    quote:
      "Navigating ADGM regulatory guidelines, Economic Substance Regulations (ESR), and Ultimate Beneficial Ownership (UBO) reporting requires top-tier expertise. The Auditclue advisory team handled our multi-tier holding structure with speed, accuracy, and absolute confidentiality.",
    statHighlight: "100% Compliant",
    statLabel: "ADGM Regulatory Filing",
    date: "Verified Asset Holding Client",
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

const TRIPLED_TESTIMONIALS = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

export default function TestimonialsSection() {
  const N = TESTIMONIALS.length;
  const [currentIndex, setCurrentIndex] = useState(N);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);

  // Responsive cards per slide calculation
  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards, { passive: true });
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  // Seamless infinite loop on transition end
  const handleTransitionEnd = () => {
    if (currentIndex >= 2 * N) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - N);
    } else if (currentIndex < N) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + N);
    }
  };

  // Re-enable transition after silent teleport
  useEffect(() => {
    if (!isTransitioning) {
      const r1 = requestAnimationFrame(() => {
        const r2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
        return () => cancelAnimationFrame(r2);
      });
      return () => cancelAnimationFrame(r1);
    }
  }, [isTransitioning]);

  // Auto-slide effect with instant pause on hover (seamless forward motion)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3600);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[#F8FAFC] text-[#071426] border-t border-b border-slate-200/90 relative overflow-hidden"
    >
      {/* Subtle Background Glow Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#36A783]/6 rounded-full blur-[140px]" />
      </div>

      <div className="w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 relative z-10">
        {/* Header & Controls Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 font-mono shadow-xs">
              <span>VERIFIED CLIENT REVIEWS & IMPACT</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight mb-4">
              Trusted by 500+ UAE Businesses Across Sectors
            </h2>

            <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed">
              Read authentic reviews from Founders, CFOs, and Managing Directors
              who rely on Auditclue for corporate tax, statutory audits, and
              accounting.
            </p>

            {/* Aggregate Rating Proof Pill */}
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-2xs">
                <div className="flex items-center gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[#071426]">4.9 / 5.0</span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-[#64748B] font-medium">
                  120+ UAE Reviews
                </span>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/20 px-3 py-1.5 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783]" />
                100% FTA & IFRS Compliant
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Reviews"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#EAF4F0] border border-slate-200 hover:border-[#36A783]/50 text-[#071426] hover:text-[#216D56] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Reviews"
              className="w-11 h-11 rounded-full bg-white hover:bg-[#EAF4F0] border border-slate-200 hover:border-[#36A783]/50 text-[#071426] hover:text-[#216D56] flex items-center justify-center transition-all shadow-xs cursor-pointer active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* INTERACTIVE REVIEW SLIDER CONTAINER (Pauses on Hover, Never Rewinds) */}
        <div
          className="relative overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Slider Track with Seamless Infinite Forward Loop */}
          <div
            className="flex py-2"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              transition: isTransitioning
                ? "transform 0.75s cubic-bezier(0.16, 1, 0.3, 1)"
                : "none",
            }}
          >
            {TRIPLED_TESTIMONIALS.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="shrink-0 px-2.5 sm:px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <div className="h-full bg-white rounded-3xl p-6 sm:p-7 xl:p-8 border border-slate-200/90 hover:border-[#36A783]/60 shadow-[0_4px_24px_rgba(35,63,91,0.05)] hover:shadow-[0_16px_36px_rgba(35,63,91,0.1)] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-amber-400 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {/* Highlight Title */}
                    <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426] mb-3 leading-snug group-hover:text-[#216D56] transition-colors">
                      &ldquo;{item.highlightTitle}&rdquo;
                    </h3>

                    {/* Quote Text */}
                    <p className="text-sm text-[#475569] font-sans leading-relaxed">
                      {item.quote}
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-3.5">
                    {/* Initials Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#216D56] to-[#36A783] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                      {item.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-serif font-bold text-[#071426] truncate">
                        {item.name}
                      </div>
                      <div className="text-xs text-[#64748B] font-sans truncate">
                        {item.role} •{" "}
                        <span className="text-[#216D56] font-semibold">
                          {item.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#94A3B8] mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Credibility & Statutory Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 sm:mt-20">
          {CREDENTIAL_BADGES.map((badge, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between hover:border-[#36A783] transition-colors"
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
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-[#216D56] font-semibold">
                Statutory Grade
              </div>
            </div>
          ))}
        </div>

        {/* Sector Coverage Strip */}
        <div className="mt-6 rounded-2xl bg-white border border-slate-200/90 p-5 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#071426] uppercase">
            <Building2 className="w-4 h-4 text-[#36A783]" />
            <span>Industries Supported:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {SECTORS.map((sector, sIdx) => (
              <span
                key={sIdx}
                className="text-xs font-sans text-[#334155] bg-slate-50 border border-slate-200 px-3 py-1 rounded-full shadow-2xs"
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
