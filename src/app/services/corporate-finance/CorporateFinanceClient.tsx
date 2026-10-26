"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import ContactForm from "@/components/ContactForm";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import {
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

const CORPORATE_FINANCE_PAIRS = [
  {
    phase: "01",
    label: "Commercial Debt & SME Capital",
    items: [
      {
        num: "01",
        title: "Business Loan Advisory",
        scope:
          "Structuring collateral-free and asset-backed corporate debt facilities with UAE conventional and Islamic banking institutions.",
        deliverable: "Bank Term Sheet & Sanction Advisory Note",
        turnaround: "7–10 Business Days",
      },
      {
        num: "02",
        title: "SME Finance Advisory",
        scope:
          "Custom borrowing solutions for growing enterprises: cash-flow lending, revenue-based finance, and equipment leases.",
        deliverable: "SME Credit Appraisal Dossier",
        turnaround: "5 Business Days",
      },
    ],
  },
  {
    phase: "02",
    label: "Trade Finance & Invoice Liquidity",
    items: [
      {
        num: "03",
        title: "Trade Finance Advisory",
        scope:
          "Securing documentary letters of credit (LC), standby LCs (SBLC), and shipping guarantees for regional and global trade.",
        deliverable: "Trade Finance Facility Structure & Bank Mandate",
        turnaround: "Bank Schedule",
      },
      {
        num: "04",
        title: "Invoice Discounting Advisory",
        scope:
          "Unlocking instant working capital by monetizing verified customer invoices through non-recourse factoring facilities.",
        deliverable: "Receivables Factoring Facility Term Sheet",
        turnaround: "3–5 Business Days",
      },
    ],
  },
  {
    phase: "03",
    label: "Working Capital & Commercial Real Estate",
    items: [
      {
        num: "05",
        title: "Working Capital Finance",
        scope:
          "Revolving overdraft (OD) lines, short-term promissory notes, and supplier credit lines stabilizing intra-month payroll cycles.",
        deliverable: "Working Capital Facility Sanction Pack",
        turnaround: "Bank Schedule",
      },
      {
        num: "06",
        title: "Mortgage Finance Advisory",
        scope:
          "Financing commercial office spaces, industrial warehouses, and freehold investment assets across Dubai and Abu Dhabi.",
        deliverable: "Commercial Property Mortgage Pre-Approval Dossier",
        turnaround: "7 Business Days",
      },
    ],
  },
  {
    phase: "04",
    label: "Project Finance & Capital Assets",
    items: [
      {
        num: "07",
        title: "Project Finance Advisory",
        scope:
          "Non-recourse or limited-recourse financial engineering for infrastructure, renewable energy, and industrial development projects.",
        deliverable: "Project Financial Feasibility & Bankability Memorandum",
        turnaround: "10–14 Business Days",
      },
      {
        num: "08",
        title: "Asset Finance Advisory",
        scope:
          "Financing machinery, heavy transportation fleets, medical technology, and capital equipment under lease-to-own models.",
        deliverable: "Asset Financing Terms & Security Schedule",
        turnaround: "5 Business Days",
      },
    ],
  },
  {
    phase: "05",
    label: "Debt Restructuring & Credit Proposals",
    items: [
      {
        num: "09",
        title: "Loan Restructuring Support",
        scope:
          "Renegotiating distressed loan schedules, interest step-downs, and maturity tenure extensions with banking special recovery units.",
        deliverable: "Consolidated Debt Settlement & Rescheduling Proposal",
        turnaround: "Active Mediation",
      },
      {
        num: "10",
        title: "Bank Proposal Preparation",
        scope:
          "Drafting rigorous Credit Information Memorandums (CIM) with audited ratios, debt-service coverage (DSCR), and repayment plans.",
        deliverable: "Underwriter-Grade Credit Information Memorandum",
        turnaround: "5 Business Days",
      },
    ],
  },
  {
    phase: "06",
    label: "Credit Queries & Bank Verification",
    items: [
      {
        num: "11",
        title: "Credit Query Response Support",
        scope:
          "Handling risk committee queries, stress-test interrogatories, and AECB credit score clarifications during bank approval stages.",
        deliverable: "Official Credit Committee Clarification Memo",
        turnaround: "24–48 Hours",
      },
      {
        num: "12",
        title: "Financial Document Preparation for Banks",
        scope:
          "Compiling trailing 12-month bank statements, VAT cross-checks, ageing ledgers, and signed auditor comfort letters.",
        deliverable: "Complete Bank Credit Due Diligence Dossier",
        turnaround: "3 Business Days",
      },
    ],
  },
  {
    phase: "07",
    label: "Pitch Decks & Teasers",
    items: [
      {
        num: "13",
        title: "Investor Pitch Deck Support",
        scope:
          "Designing high-impact visual pitch decks highlighting TAM/SAM, competitive moats, unit economics, and capital ask.",
        deliverable: "Institutional-Grade Investor Deck (15–20 Slides)",
        turnaround: "5–7 Business Days",
      },
      {
        num: "14",
        title: "Funding Teaser Preparation",
        scope:
          "Creating blind one-page corporate teasers for distribution across accredited Angel networks and VC syndicates.",
        deliverable: "Confidential Executive 1-Page Investment Teaser",
        turnaround: "2 Business Days",
      },
    ],
  },
  {
    phase: "08",
    label: "Private Equity & Debt Advisory",
    items: [
      {
        num: "15",
        title: "Private Equity Introduction Support",
        scope:
          "Targeted buyer mapping and presentation to regional family offices, private equity syndicates, and sovereign-backed funds.",
        deliverable: "Investor Outreach Matrix & Data Room Staging",
        turnaround: "Transaction Timetable",
      },
      {
        num: "16",
        title: "Debt Advisory",
        scope:
          "Holistic capital structure optimization balancing equity dilution against senior secured, mezzanine, and venture debt options.",
        deliverable: "Optimal Capital Structure & WACC Strategy Report",
        turnaround: "Advisory Mandate",
      },
    ],
  },
];

const OTHER_SERVICES = [
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  { name: "Accounting & Bookkeeping", href: "/services/accounting-bookkeeping" },
  { name: "UAE VAT Services", href: "/services/vat-services" },
  { name: "UAE Corporate Tax", href: "/services/corporate-tax" },
  { name: "Business Setup & Formation", href: "/services/business-setup" },
  { name: "Transfer Pricing", href: "/services/transfer-pricing" },
  { name: "CFO & Finance Advisory", href: "/services/cfo-advisory" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Compliance Services", href: "/services/compliance-services" },
  { name: "Technology & Digital Finance", href: "/services/technology-digital" },
];

export default function CorporateFinanceClient() {
  const stackWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // =========================================================================
  // GSAP SCROLLTRIGGER DECK-OF-CARDS STACKING
  // =========================================================================
  useEffect(() => {
    if (!cardsContainerRef.current || !stackWrapperRef.current) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
          ".setup-stacked-card",
        );
        cards?.forEach((card) => {
          gsap.set(card, {
            position: "relative",
            top: "auto",
            left: "auto",
            width: "100%",
            height: "auto",
            yPercent: 0,
            scale: 1,
            y: 0,
            opacity: 1,
            clearProps: "all",
          });
        });
        return;
      }
    }

    let mm: gsap.MatchMedia | null = null;

    const setupCardStacking = () => {
      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
        ".setup-stacked-card",
      );
      if (!cards || cards.length <= 1) return;

      const totalCards = cards.length;

      let maxCardHeight = 0;
      cards.forEach((card) => {
        const h = card.getBoundingClientRect().height;
        if (h > maxCardHeight) maxCardHeight = h;
      });

      if (maxCardHeight > 0 && cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = `${Math.ceil(
          maxCardHeight,
        )}px`;
      }

      const startOffset = "top top+=104";
      const perCardScroll = 380;
      const totalScrollDistance = (totalCards - 1) * perCardScroll + 180;
      const scrubSpeed = 0.6;

      cards.forEach((card, idx) => {
        if (idx === 0) {
          gsap.set(card, {
            position: "relative",
            yPercent: 0,
            opacity: 1,
            visibility: "visible",
            force3D: false,
          });
        } else if (idx === 1) {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100%",
            yPercent: 100,
            opacity: 1,
            visibility: "visible",
            force3D: false,
          });
        } else {
          gsap.set(card, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            minHeight: "100%",
            yPercent: 100,
            opacity: 0,
            visibility: "hidden",
            force3D: false,
          });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stackWrapperRef.current,
          start: startOffset,
          end: `+=${totalScrollDistance}`,
          pin: true,
          pinSpacing: true,
          scrub: scrubSpeed,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const moveDuration = 1.0;
      const holdDuration = 0.8;
      const stepDuration = moveDuration + holdDuration;
      const initialHold = 0.7;

      for (let i = 1; i < totalCards; i++) {
        const currCard = cards[i];
        const nextCard = i + 1 < totalCards ? cards[i + 1] : null;
        const startTime = initialHold + (i - 1) * stepDuration;
        const arriveTime = startTime + moveDuration;

        if (i >= 2) {
          const olderCard = cards[i - 2];
          tl.to(
            olderCard,
            {
              opacity: 0,
              visibility: "hidden",
              ease: "none",
              duration: 0.2,
            },
            startTime,
          );
        }

        tl.to(
          currCard,
          {
            yPercent: 0,
            opacity: 1,
            visibility: "visible",
            ease: "none",
            duration: moveDuration,
            force3D: false,
          },
          startTime,
        );

        if (nextCard) {
          tl.to(
            nextCard,
            {
              opacity: 1,
              visibility: "visible",
              ease: "none",
              duration: 0.2,
            },
            arriveTime,
          );
        }
      }
    };

    mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      setupCardStacking();
    });
    mm.add("(max-width: 767px)", () => {
      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
        ".setup-stacked-card",
      );
      cards?.forEach((card) => {
        gsap.set(card, {
          clearProps: "all",
        });
      });
      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = "";
      }
    });

    return () => {
      mm?.revert();
      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = "";
      }
    };
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: Corporate Finance                                */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EBF6F8] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[600px] h-[450px] bg-gradient-to-br from-[#0284C7]/15 via-[#38BDF8]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-[550px] h-[400px] bg-gradient-to-tr from-[#233F5B]/12 via-[#0284C7]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
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
              <span className="text-[#64748B]">Services</span>
              <span>/</span>
              <span className="text-[#071426] font-semibold">
                Corporate Finance
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#E0F2FE] text-[#0369A1] border border-[#0284C7]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span>CREDIT-READY DEBT & FUNDING ADVISORY</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText text="Corporate Finance" as="span" />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                Access to the right finance at the right time is critical for
                business growth. Our Corporate Finance team helps UAE businesses
                secure bank loans, trade finance, working capital facilities, and
                investor funding — with fully prepared documentation and
                proposals.
              </p>

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
        {/* 2. PRACTICE SCOPE: 16 SCOPED DELIVERABLES (Pinned Stacking Deck)  */}
        {/* ================================================================= */}
        <section
          ref={stackWrapperRef}
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-bold block mb-2">
                  FINANCE PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  16 Scoped Deliverables in Corporate Finance
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span className="hidden md:inline">Scroll to Reveal Finance Protocol (8 Phases)</span>
                <span className="md:hidden">16 Scoped Deliverables</span>
              </div>
            </div>

            <div
              ref={cardsContainerRef}
              className="relative w-full flex flex-col gap-4 md:gap-0 md:overflow-hidden"
            >
              {CORPORATE_FINANCE_PAIRS.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="setup-stacked-card w-full md:rounded-3xl md:bg-white md:p-7 md:border md:border-[#CBD5E1]/80 md:shadow-[0_-14px_36px_rgba(7,20,38,0.08)] flex flex-col justify-between"
                  style={{ zIndex: 10 + pIdx }}
                >
                  {/* Phase Row Header - HIDDEN on mobile as per user request */}
                  <div className="hidden md:flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#0369A1] bg-[#E0F2FE] border border-[#0284C7]/30 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Phase {pair.phase} / 08
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426]">
                        {pair.label}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                      <span>
                        Deliverables {pair.items[0].num} &amp; {pair.items[1].num} of 16
                      </span>
                    </div>
                  </div>

                  {/* 2-by-2 Grid (Left & Right on Desktop, Clean Cards on Mobile) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {pair.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-5 sm:p-7 rounded-2xl bg-white md:bg-[#F8FAFC] border border-[#CBD5E1]/90 hover:border-[#0284C7] hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="font-mono text-xs font-bold text-[#0284C7] bg-[#E0F2FE] px-2.5 py-1 rounded-md">
                              [{item.num}] FINANCE
                            </span>
                            <span className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>{item.turnaround}</span>
                            </span>
                          </div>

                          <h4 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#0369A1] transition-colors leading-snug mb-3">
                            {item.title}
                          </h4>

                          <p className="text-xs sm:text-sm text-[#475569] font-sans leading-relaxed mb-5">
                            {item.scope}
                          </p>
                        </div>

                        <div className="pt-4 border-t border-[#CBD5E1]/70">
                          <div className="text-[11px] font-mono font-bold text-[#64748B] uppercase mb-1.5">
                            Key Deliverable:
                          </div>
                          <div className="text-xs font-medium text-[#0369A1] bg-[#E0F2FE] p-3 rounded-xl border border-[#0284C7]/20 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                            <span className="leading-snug">
                              {item.deliverable}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. NEED CORPORATE FINANCE SUPPORT?                                */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#F0F9FF] border-b border-[#BAE6FD]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-3">
              Need Corporate Finance Support?
            </h2>
            <p className="text-base sm:text-lg text-[#4A5D73] font-sans mb-8">
              Our finance advisory team can help.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#071426] hover:bg-[#12273F] text-white text-base font-semibold px-7 py-3.5 rounded-xl transition-all shadow-md"
              >
                <span>Talk With an Advisor</span>
                <span className="text-xs">↳</span>
              </a>

              <a
                href="https://wa.me/971547338583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-base font-bold px-7 py-3.5 rounded-xl transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. GET A FREE CONSULTATION                                         */}
        {/* ================================================================= */}
        <section
          id="consultation"
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Direct Contact Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-bold block mb-2">
                    DIRECT ADVISORY ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Get a Free Consultation
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Speak directly with a qualified Auditclue advisor for
                    practical solutions on corporate finance.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Phone */}
                  <a
                    href="tel:+971547338583"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0284C7] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">
                        Call Now / Talk With an Advisor:
                      </div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#0369A1] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

                  {/* WhatsApp */}
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
                      <div className="text-xs font-mono text-[#83D9BE]">
                        WhatsApp Us (Quick response guaranteed):
                      </div>
                      <div className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#83D9BE] transition-colors">
                        +971 54 733 8583
                      </div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@auditclue.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#0284C7] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0369A1] flex items-center justify-center shrink-0 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">Email:</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#0369A1] transition-colors">
                        info@auditclue.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 rounded-3xl shadow-sm">
                <ContactForm defaultService="Corporate Finance" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 5. EXPLORE OTHER SERVICES                                         */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-bold block mb-1">
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
                  className="p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#0284C7] hover:shadow-sm transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-serif font-medium text-[#071426] group-hover:text-[#0369A1] transition-colors">
                    {s.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#0284C7] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 6. SPEAK WITH AN ADVISOR TODAY                                    */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#071426] text-white text-center relative overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-4">
              Speak With an Advisor Today
            </h2>
            <p className="text-base sm:text-lg text-[#CBD5E1] font-sans max-w-2xl mx-auto mb-8">
              Get professional support for audit, tax, accounting, compliance,
              finance and business advisory services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C6F850] hover:bg-white text-[#071426] text-base font-bold px-8 py-4 rounded-xl transition-all shadow-md"
              >
                <span>Talk With an Advisor</span>
                <span className="text-lg leading-none font-sans">↳</span>
              </a>

              <a
                href="https://wa.me/971547338583"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-7 py-4 rounded-xl border border-white/15 transition-all"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
