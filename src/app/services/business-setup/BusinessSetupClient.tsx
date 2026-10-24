"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Building2,
  Globe2,
  FileText,
  Clock,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Landmark,
  CreditCard,
  UserCheck,
} from "lucide-react";

const SETUP_DETAILED_SERVICES = [
  {
    num: "01",
    title: "Mainland DED Company Formation (All 7 Emirates)",
    scope:
      "Full advisory and incorporation for Dubai Economy and Tourism (DET), Abu Dhabi DED, Sharjah, and Northern Emirates. Enjoy 100% foreign ownership and direct trading rights across the entire local UAE market and government tenders.",
    deliverable:
      "Commercial License, Memorandum of Association (MOA) & Commercial Register Extract",
    turnaround: "3–5 Business Days",
  },
  {
    num: "02",
    title: "UAE Free Zone Incorporation (DMCC, IFZA, DAFZA, JAFZA, ADGM, DIFC)",
    scope:
      "Jurisdiction matching across 40+ UAE Free Zones based on tax optimization, visa quotas, and operational requirements. We manage lease agreements, flexi-desk solutions, and fast-track authority approvals.",
    deliverable: "Free Zone Trade License, Share Certificate & Lease Agreement",
    turnaround: "3–5 Business Days",
  },
  {
    num: "03",
    title: "Corporate Bank Account Opening Assistance",
    scope:
      "Overcoming the #1 hurdle for new UAE entities. We curate compliance business plans, source of wealth dossiers, and liaise with partner managers across Tier-1 banks: Emirates NBD, Mashreq NEO, FAB, ADCB, and digital-first banks like Wio Business.",
    deliverable:
      "Approved Multi-Currency Corporate Bank Account (AED, USD, EUR, GBP)",
    turnaround: "10–20 Business Days",
  },
  {
    num: "04",
    title: "Investor, Partner & Employment Visa Processing",
    scope:
      "End-to-end immigration processing including Establishment Card registration, entry permit issuance, VIP medical fitness test, Emirates ID biometric appointment, and electronic residency visa stamping.",
    deliverable: "2-Year Investor Residence Visa & Emirates ID Card",
    turnaround: "5–7 Business Days",
  },
  {
    num: "05",
    title: "UAE 10-Year Golden Visa Nomination & Processing",
    scope:
      "Specialized legal structuring for high-net-worth investors, entrepreneurs, executives, and property owners seeking the self-sponsored 10-year UAE Golden Visa for themselves and their families.",
    deliverable: "Federal Authority for Identity (ICP) Golden Visa Approval",
    turnaround: "7–14 Business Days",
  },
  {
    num: "06",
    title: "Ultimate Beneficial Owner (UBO) & Economic Substance (ESR) Filings",
    scope:
      "Drafting mandatory Register of Partners and Register of Beneficial Owners in compliance with Cabinet Decision No. 109 of 2023, along with annual ESR notifications.",
    deliverable: "Official Ministry of Economy UBO Declaration Certificate",
    turnaround: "Immediate with Formation",
  },
  {
    num: "07",
    title: "Corporate Tax & VAT Registration Bundle",
    scope:
      "Seamless statutory onboarding post-incorporation. We register your new trade license with the Federal Tax Authority (FTA) for Corporate Tax and obtain your VAT TRN certificate.",
    deliverable:
      "FTA Tax Registration Number (TRN) & Corporate Tax Registration Pack",
    turnaround: "Within First 30 Days",
  },
  {
    num: "08",
    title: "Local Service Agent & Corporate Nominee Governance",
    scope:
      "For regulated commercial activities still requiring a local corporate presence, we provide transparent corporate sponsorship frameworks with full beneficial ownership protection agreements.",
    deliverable:
      "Notarized Court Powers of Attorney & Nominee Protective Agreements",
    turnaround: "Court Schedule",
  },
  {
    num: "09",
    title: "Special Regulatory Approvals (DHA, KHDA, SIRA, Central Bank)",
    scope:
      "Securing initial approvals and NOCs from specific statutory bodies for healthcare, education, security, transport, food trading, and fintech business activities.",
    deliverable: "Statutory Ministry NOC & Activity Endorsement",
    turnaround: "Authority Schedule",
  },
  {
    num: "10",
    title: "Company Liquidation, Share Transfer & Amendments",
    scope:
      "Statutory amendment of existing licenses: adding new partners, changing trade names, transferring shares, increasing share capital, or formal company deregistration and liquidation clearance.",
    deliverable:
      "Amended MOA, Court Notarization & Official Liquidation Clearance",
    turnaround: "5–10 Business Days",
  },
];

const SETUP_PAIRS = [
  {
    phase: "01",
    label: "Foundation & Jurisdiction",
    items: [SETUP_DETAILED_SERVICES[0], SETUP_DETAILED_SERVICES[1]],
  },
  {
    phase: "02",
    label: "Corporate Banking & Visas",
    items: [SETUP_DETAILED_SERVICES[2], SETUP_DETAILED_SERVICES[3]],
  },
  {
    phase: "03",
    label: "Golden Visa & Statutory Registers",
    items: [SETUP_DETAILED_SERVICES[4], SETUP_DETAILED_SERVICES[5]],
  },
  {
    phase: "04",
    label: "Tax Registration & Nominee Governance",
    items: [SETUP_DETAILED_SERVICES[6], SETUP_DETAILED_SERVICES[7]],
  },
  {
    phase: "05",
    label: "Special NOCs & Amendments",
    items: [SETUP_DETAILED_SERVICES[8], SETUP_DETAILED_SERVICES[9]],
  },
];

const SETUP_COMPARISON_MATRIX = [
  {
    feature: "Foreign Ownership",
    mainland: "100% Foreign Ownership (Commercial Companies Law)",
    freezone: "100% Foreign Ownership guaranteed",
  },
  {
    feature: "Local UAE Market Access",
    mainland: "Direct trading across all 7 Emirates without local agent",
    freezone: "Within Free Zone or via Mainland distributor",
  },
  {
    feature: "Government Contracts",
    mainland: "Eligible to tender directly for federal & municipal contracts",
    freezone: "Restricted unless partnering with a mainland entity",
  },
  {
    feature: "Office Requirement",
    mainland: "Physical office / Sustainability desk / Ejari required",
    freezone: "Flexi-desk, smart desk, or dedicated physical office",
  },
  {
    feature: "Visa Quotas",
    mainland: "Scalable based on physical office square meters",
    freezone: "Package-based (typically 1 to 6 visas per flexi-desk)",
  },
  {
    feature: "Corporate Tax Treatment",
    mainland: "Standard 9% (0% on profit up to AED 375k or SBR relief)",
    freezone: "0% for Qualifying Persons (QFZP) on qualifying income",
  },
];

const SETUP_FAQS = [
  {
    q: "Can a foreigner own 100% of a mainland UAE company?",
    a:
      "Yes. Following the landmark amendments to the UAE Commercial Companies Law (Federal Decree-Law No. 32 of 2021), foreign investors and entrepreneurs can own 100% of commercial and industrial companies in mainland Dubai, Abu Dhabi, and across all Emirates without requiring a local Emirati sponsor for over 1,000 approved activities.",
  },
  {
    q: "How long does it take to register a business in Dubai?",
    a:
      "With Auditclue's digital incorporation protocol, trade license issuance can be completed within 3 to 5 business days for both Mainland (DED) and premier Free Zones (IFZA, DMCC, DAFZA). Investor residency visa stamping takes an additional 5 to 7 business days.",
  },
  {
    q: "Why do companies face delays opening a UAE corporate bank account?",
    a:
      "UAE banks adhere to rigorous Central Bank Anti-Money Laundering (AML) and Common Reporting Standard (CRS) compliance. Incomplete business plans, absence of physical UAE residency, or unclear international supplier/customer trails are the main causes of rejection. Auditclue prepares bank-grade compliance documentation and directly introduces your dossier to senior relationship managers at Emirates NBD, Mashreq, FAB, and Wio Business.",
  },
  {
    q: "What is the difference between a Mainland and a Free Zone license?",
    a:
      "A Mainland license (issued by the Department of Economy and Tourism) permits you to trade directly anywhere in the local UAE consumer and B2B market and bid on government contracts. A Free Zone license offers 100% foreign ownership, quick setup, and potential 0% Corporate Tax relief for Qualifying Free Zone Persons, but local mainland trading requires working through a local distributor or mainland branch.",
  },
  {
    q: "What are the ongoing compliance requirements post-incorporation?",
    a:
      "Every new UAE company must comply with: 1) Corporate Tax registration with the FTA, 2) VAT registration (once reaching AED 375k turnover), 3) Ultimate Beneficial Owner (UBO) declaration, 4) Annual trade license renewal, and 5) Maintaining IFRS-compliant accounting records for a minimum of 5 years.",
  },
];

const OTHER_SERVICES = [
  { name: "Audit & Assurance", href: "/services/audit-assurance" },
  {
    name: "Accounting & Bookkeeping",
    href: "/services/accounting-bookkeeping",
  },
  { name: "UAE VAT Services", href: "/services/vat-services" },
  { name: "UAE Corporate Tax", href: "/services/corporate-tax" },
  { name: "Transfer Pricing", href: "/services/transfer-pricing" },
  { name: "CFO & Finance Advisory", href: "/services/cfo-advisory" },
  { name: "Corporate Finance", href: "/services/corporate-finance" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Compliance Services", href: "/services/compliance-services" },
  {
    name: "Technology & Digital Finance",
    href: "/services/technology-digital",
  },
];

export default function BusinessSetupClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const stackWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // =========================================================================
  // GSAP SCROLLTRIGGER DECK-OF-CARDS STACKING (Identical to Homepage Services)
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

      // Measure tallest card
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

      // Initial card states
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

        // Two cards back cleanly fades out
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

        // Current pair glides up to 0% and cleanly covers previous pair
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

        // Next card becomes visible ready at yPercent 100
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

      <main className="flex-1 pt-19 lg:pt-21.5">
        {/* ================================================================= */}
        {/* 1. HERO SECTION                                                   */}
        {/* ================================================================= */}
        <section className="relative bg-linear-to-b from-[#EDF5F1] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-150 h-112.5 bg-linear-to-br from-[#36A783]/20 via-[#83D9BE]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-137.5 h-100 bg-linear-to-tr from-[#233F5B]/12 via-[#36A783]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-size-[3.5rem_3.5rem] mask-[radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />
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
                Business Setup & Formation
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>
                  FAST-TRACK UAE COMPANY FORMATION • 100% FOREIGN OWNERSHIP
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText
                  text="UAE Business Setup & Company Formation"
                  as="span"
                />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                Establish your enterprise with precision. Auditclue provides
                end-to-end corporate formation across Mainland DED (Dubai, Abu
                Dhabi) and 40+ premier Free Zones (DMCC, IFZA, DAFZA, JAFZA,
                ADGM, DIFC). We combine company registration with guaranteed
                corporate banking assistance, investor residency visas, and
                seamless tax compliance.
              </p>

              {/* Metric Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 pt-6 border-t border-[#CBD5E1]/70">
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">
                    Ownership
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
                    100% Expat
                  </div>
                  <div className="text-[11px] text-[#216D56] font-sans">
                    Mainland & Free Zone
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">
                    License Speed
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
                    3–5 Days
                  </div>
                  <div className="text-[11px] text-[#216D56] font-sans">
                    Digital Issuance
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">
                    Banking Support
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
                    Multi-Bank
                  </div>
                  <div className="text-[11px] text-[#216D56] font-sans">
                    Wio, ENBD, Mashreq
                  </div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#64748B] uppercase">
                    Visa Stamping
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#071426]">
                    2-Year VIP
                  </div>
                  <div className="text-[11px] text-[#216D56] font-sans">
                    Investor & Family
                  </div>
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
                    <span>Talk With a Setup Specialist</span>
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
        {/* 2. PRACTICE SCOPE: 10 SCOPED DELIVERABLES (Pinned Stacking Deck)  */}
        {/* ================================================================= */}
        <section
          ref={stackWrapperRef}
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  FORMATION PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  10 Scoped Deliverables in UAE Company Formation
                </h2>
              </div>
            </div>

            <div
              ref={cardsContainerRef}
              className="relative w-full flex flex-col gap-4 md:gap-0 md:overflow-hidden"
            >
              {SETUP_PAIRS.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="setup-stacked-card w-full md:rounded-3xl md:bg-white md:p-7 md:border md:border-[#CBD5E1]/80 md:shadow-[0_-14px_36px_rgba(7,20,38,0.08)] flex flex-col justify-between"
                  style={{ zIndex: 10 + pIdx }}
                >
                  {/* Phase Row Header - HIDDEN on mobile as per user request */}
                  <div className="hidden md:flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Phase {pair.phase} / 05
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426]">
                        {pair.label}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
                      <span>
                        Deliverables {pair.items[0].num} &amp; {pair.items[1].num} of 10
                      </span>
                    </div>
                  </div>

                  {/* 2-by-2 Grid (Left & Right on Desktop, Clean Cards on Mobile) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {pair.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-5 sm:p-7 rounded-2xl bg-white md:bg-[#F8FAFC] border border-[#CBD5E1]/90 hover:border-[#36A783] hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="font-mono text-xs font-bold text-[#36A783] bg-[#EAF4F0] px-2.5 py-1 rounded-md">
                              [{item.num}] SETUP
                            </span>
                            <span className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#36A783]" />
                              <span>{item.turnaround}</span>
                            </span>
                          </div>

                          <h4 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#216D56] transition-colors leading-snug mb-3">
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
                          <div className="text-xs font-medium text-[#216D56] bg-[#EAF4F0] p-3 rounded-xl border border-[#36A783]/20 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0 mt-0.5" />
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
        {/* 3. MAINLAND VS FREE ZONE COMPARISON MATRIX                        */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                STRATEGIC EVALUATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                Mainland DED vs UAE Free Zone Comparison
              </h2>
              <p className="text-base text-[#475569] font-sans leading-relaxed">
                Choosing the optimal jurisdiction dictates your market access,
                tax positioning, and banking velocity:
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl bg-white border border-[#CBD5E1] shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#071426] text-white text-xs font-mono uppercase tracking-wider">
                      <th className="p-4 sm:p-5">Feature</th>
                      <th className="p-4 sm:p-5 border-l border-white/10">
                        Mainland DED
                      </th>
                      <th className="p-4 sm:p-5 border-l border-white/10">
                        UAE Free Zone
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2E8F0] text-xs sm:text-sm font-sans">
                    {SETUP_COMPARISON_MATRIX.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-[#F8FAFC] transition-colors"
                      >
                        <td className="p-4 sm:p-5 font-serif font-bold text-[#071426] bg-[#F8FAFC]/50 whitespace-nowrap">
                          {row.feature}
                        </td>
                        <td className="p-4 sm:p-5 text-[#334155] border-l border-[#E2E8F0]">
                          {row.mainland}
                        </td>
                        <td className="p-4 sm:p-5 text-[#334155] border-l border-[#E2E8F0]">
                          {row.freezone}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                FOUNDER QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                UAE Business Formation FAQs
              </h2>
              <p className="text-base text-[#475569] font-sans">
                Clear statutory answers regarding 100% foreign ownership,
                timelines, and banking requirements.
              </p>
            </div>

            <div className="space-y-4">
              {SETUP_FAQS.map((faq, idx) => {
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
                    DIRECT FORMATION ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Speak With a Business Setup Director
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Compare Mainland vs Free Zone costs, plan your visa
                    structure, and fast-track bank account opening. Request a
                    tailored setup proposal today.
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
                      <div className="text-xs font-mono text-[#64748B]">
                        Call Direct Line:
                      </div>
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
                      <div className="text-xs font-mono text-[#83D9BE]">
                        WhatsApp Priority Desk:
                      </div>
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
                      <div className="text-xs font-mono text-[#64748B]">
                        Email Inquiries:
                      </div>
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
