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

const TECH_DIGITAL_PAIRS = [
  {
    phase: "01",
    label: "Core Cloud Architecture & Intuit Deployment",
    items: [
      {
        num: "01",
        title: "Accounting Software Implementation",
        scope:
          "End-to-end evaluation, chart-of-accounts customization, opening balance configuration, and user permission hierarchies tailored to UAE compliance.",
        deliverable: "Deployed & Configured Cloud Accounting Instance",
        turnaround: "3–5 Business Days",
      },
      {
        num: "02",
        title: "QuickBooks Setup",
        scope:
          "Certified Intuit QuickBooks Online architecture, multi-currency VAT ledger calibration, bank rule automation, and invoice customization.",
        deliverable: "Certified QuickBooks Online Environment & User Manual",
        turnaround: "3 Business Days",
      },
    ],
  },
  {
    phase: "02",
    label: "Alternative Cloud Platforms (Zoho & Xero)",
    items: [
      {
        num: "03",
        title: "Zoho Books Setup",
        scope:
          "End-to-end Zoho Books UAE edition deployment, FTA-compliant VAT templates, customer portal setup, and payment gateway integration.",
        deliverable: "Configured Zoho Books UAE Production Workspace",
        turnaround: "3 Business Days",
      },
      {
        num: "04",
        title: "Xero Setup",
        scope:
          "Certified Xero platform configuration, direct banking feeds, automated reconciliation rules, fixed asset schedules, and reporting layouts.",
        deliverable: "Fully Integrated Xero Ledger & Workflow Pack",
        turnaround: "3 Business Days",
      },
    ],
  },
  {
    phase: "03",
    label: "UAE E-Invoicing & Peppol Architecture",
    items: [
      {
        num: "05",
        title: "E-Invoicing Readiness",
        scope:
          "Aligning enterprise invoicing architectures with MoF and FTA Phase 1/Phase 2 mandatory digital e-invoicing regulatory frameworks.",
        deliverable: "FTA E-Invoicing Readiness & Integration Assessment",
        turnaround: "5–7 Business Days",
      },
      {
        num: "06",
        title: "Peppol Readiness Advisory",
        scope:
          "Connecting billing databases with accredited Peppol Access Points, cryptographic hash validation, and standard XML transmission schemas.",
        deliverable: "Peppol Transmission Architecture & Pilot Verification",
        turnaround: "5 Business Days",
      },
    ],
  },
  {
    phase: "04",
    label: "Compliance Gap Analysis & ERP Strategy",
    items: [
      {
        num: "07",
        title: "UAE E-Invoicing Gap Analysis",
        scope:
          "Technical code and process audit across existing POS, billing engines, and legacy ERPs to identify XML/PINT-AE compliance gaps.",
        deliverable: "UAE E-Invoicing Remediation Matrix & Tech Roadmap",
        turnaround: "4 Business Days",
      },
      {
        num: "08",
        title: "ERP Advisory",
        scope:
          "Scoping, vendor selection (NetSuite, SAP Business One, Microsoft Dynamics 365, Odoo), RFP drafting, and implementation project governance.",
        deliverable: "Enterprise ERP Evaluation & Vendor Selection Dossier",
        turnaround: "7–10 Business Days",
      },
    ],
  },
  {
    phase: "05",
    label: "Digital Approval & Document Governance",
    items: [
      {
        num: "09",
        title: "Digital Approval Workflow",
        scope:
          "Building multi-tiered purchase requisition, bill approval, and expense authorization matrices with cryptographic audit trails.",
        deliverable: "Automated Delegation-of-Authority (DoA) Approval Engine",
        turnaround: "3–5 Business Days",
      },
      {
        num: "10",
        title: "Digital Document Management",
        scope:
          "Establishing cloud-based optical character recognition (OCR), paperless receipt capture, centralized tax audit repositories, and FTA retention rules.",
        deliverable: "Paperless OCR & Audit-Ready Digital Document Repository",
        turnaround: "3 Business Days",
      },
    ],
  },
  {
    phase: "06",
    label: "Analytics, BI & Financial Automation",
    items: [
      {
        num: "11",
        title: "Dashboard and Reporting Automation",
        scope:
          "Engineering automated executive Power BI / Looker Studio KPI dashboards showing real-time cash flow, EBITDA margins, and receivables aging.",
        deliverable: "Executive KPI Dashboard & Real-Time Reporting Suite",
        turnaround: "5–7 Business Days",
      },
      {
        num: "12",
        title: "Finance Automation",
        scope:
          "Deploying no-code / low-code RPA bots to eliminate manual spreadsheet reconciliation, automated payment reminders, and bank imports.",
        deliverable: "Automated Robotic Reconciliation & Workflow Scripts",
        turnaround: "4–6 Business Days",
      },
    ],
  },
  {
    phase: "07",
    label: "Legacy Transformation & Training Continuity",
    items: [
      {
        num: "13",
        title: "Cloud-Based Accounting Migration",
        scope:
          "Forensic historical transaction scrubbing, multi-year journal migration from legacy on-premise software (Tally, Sage, Focus) to modern cloud ERP.",
        deliverable: "Verified Cloud Migration & Balance Sign-Off Certificate",
        turnaround: "5–7 Business Days",
      },
      {
        num: "14",
        title: "Continuous Digital Support & Team Training",
        scope:
          "Dedicated hands-on finance team training, SOP user guides, quarterly software patch audits, and continuous FTA compliance monitoring.",
        deliverable: "Staff Training Manual & Annual Digital Support Charter",
        turnaround: "On-Going Mandate",
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
  { name: "Corporate Finance", href: "/services/corporate-finance" },
  { name: "Business Advisory", href: "/services/business-advisory" },
  { name: "Compliance Services", href: "/services/compliance-services" },
];

export default function TechnologyDigitalClient() {
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
        {/* 1. HERO SECTION: Technology & Digital Finance                     */}
        {/* ================================================================= */}
        <section className="relative bg-gradient-to-b from-[#EDE9FE] via-[#F8FAFC] to-[#EEF2F7] border-b border-[#CBD5E1]/60 pt-16 pb-16 sm:pt-20 sm:pb-22 overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
            aria-hidden="true"
          >
            <div className="absolute -top-32 right-1/4 w-[600px] h-[450px] bg-gradient-to-br from-[#4F46E5]/15 via-[#818CF8]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-10 w-[550px] h-[400px] bg-gradient-to-tr from-[#233F5B]/12 via-[#4F46E5]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
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
                Technology & Digital Finance
              </span>
            </nav>

            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 bg-[#EEF2FF] text-[#4338CA] border border-[#4F46E5]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
                <span>E-INVOICING (PEPPOL) & FINANCE TRANSFORMATION</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#071426] tracking-tight leading-[1.1] mb-6">
                <FlowText text="Technology & Digital Finance" as="span" />
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#334155] font-sans font-normal leading-relaxed max-w-3xl mb-8">
                We help businesses transition to digital finance — implementing
                accounting software, automating workflows, and preparing for UAE
                e-invoicing mandates. Our technology advisory ensures your finance
                function is efficient, accurate, and future-ready.
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
        {/* 2. PRACTICE SCOPE: 14 SCOPED DELIVERABLES (Pinned Stacking Deck)  */}
        {/* ================================================================= */}
        <section
          ref={stackWrapperRef}
          className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-bold block mb-2">
                  DIGITAL ARCHITECTURE PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  14 Scoped Deliverables in Technology &amp; Digital Finance
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse" />
                <span className="hidden md:inline">Scroll to Reveal Tech Roadmap (7 Phases)</span>
                <span className="md:hidden">14 Scoped Deliverables</span>
              </div>
            </div>

            <div
              ref={cardsContainerRef}
              className="relative w-full flex flex-col gap-4 md:gap-0 md:overflow-hidden"
            >
              {TECH_DIGITAL_PAIRS.map((pair, pIdx) => (
                <div
                  key={pIdx}
                  className="setup-stacked-card w-full md:rounded-3xl md:bg-white md:p-7 md:border md:border-[#CBD5E1]/80 md:shadow-[0_-14px_36px_rgba(7,20,38,0.08)] flex flex-col justify-between"
                  style={{ zIndex: 10 + pIdx }}
                >
                  {/* Phase Row Header - HIDDEN on mobile as per user request */}
                  <div className="hidden md:flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-[#E2E8F0]">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#4338CA] bg-[#EEF2FF] border border-[#4F46E5]/30 px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Phase {pair.phase} / 07
                      </span>
                      <h3 className="text-base sm:text-lg font-serif font-bold text-[#071426]">
                        {pair.label}
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-[#64748B] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                      <span>
                        Deliverables {pair.items[0].num} &amp; {pair.items[1].num} of 14
                      </span>
                    </div>
                  </div>

                  {/* 2-by-2 Grid (Left & Right on Desktop, Clean Cards on Mobile) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {pair.items.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="p-5 sm:p-7 rounded-2xl bg-white md:bg-[#F8FAFC] border border-[#CBD5E1]/90 hover:border-[#4F46E5] hover:shadow-lg transition-all group flex flex-col justify-between shadow-xs"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-3 mb-3">
                            <span className="font-mono text-xs font-bold text-[#4F46E5] bg-[#EEF2FF] px-2.5 py-1 rounded-md">
                              [{item.num}] TECH &amp; DIGITAL
                            </span>
                            <span className="text-xs font-mono text-[#64748B] flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-[#4F46E5]" />
                              <span>{item.turnaround}</span>
                            </span>
                          </div>

                          <h4 className="text-lg sm:text-xl font-serif font-bold text-[#071426] group-hover:text-[#4338CA] transition-colors leading-snug mb-3">
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
                          <div className="text-xs font-medium text-[#4338CA] bg-[#EEF2FF] p-3 rounded-xl border border-[#4F46E5]/20 flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#4F46E5] shrink-0 mt-0.5" />
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
        {/* 3. NEED ACCOUNTING SOFTWARE OR DIGITAL FINANCE HELP?              */}
        {/* ================================================================= */}
        <section className="py-16 sm:py-20 bg-[#EEF2FF] border-b border-[#C7D2FE]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-3">
              Need Accounting Software or Digital Finance Help?
            </h2>
            <p className="text-base sm:text-lg text-[#4A5D73] font-sans mb-8">
              We set it up and train your team.
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
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-bold block mb-2">
                    DIRECT ADVISORY ACCESS
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#071426] mb-4">
                    Get a Free Consultation
                  </h2>
                  <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                    Speak directly with a qualified Auditclue advisor for
                    practical solutions on technology & digital finance.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Phone */}
                  <a
                    href="tel:+971547338583"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#4F46E5] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">
                        Call Now / Talk With an Advisor:
                      </div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#4338CA] transition-colors">
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
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] hover:border-[#4F46E5] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] text-[#4338CA] flex items-center justify-center shrink-0 group-hover:bg-[#4F46E5] group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#64748B]">Email:</div>
                      <div className="text-base sm:text-lg font-serif font-bold text-[#071426] group-hover:text-[#4338CA] transition-colors">
                        info@auditclue.com
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: Embedded Consultation Form */}
              <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#CBD5E1] p-6 sm:p-8 rounded-3xl shadow-sm">
                <ContactForm />
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
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4F46E5] font-bold block mb-1">
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
                  className="p-4 rounded-xl bg-white border border-[#CBD5E1] hover:border-[#4F46E5] hover:shadow-sm transition-all flex items-center justify-between group"
                >
                  <span className="text-sm font-serif font-medium text-[#071426] group-hover:text-[#4338CA] transition-colors">
                    {s.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#64748B] group-hover:text-[#4F46E5] transition-transform group-hover:translate-x-1" />
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
