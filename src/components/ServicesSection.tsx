"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Calculator,
  Percent,
  Landmark,
  Repeat,
  TrendingUp,
  Briefcase,
  Compass,
  ShieldAlert,
  Cpu,
  ArrowUpRight,
  Check,
  Search,
  ChevronRight,
  ArrowRight,
  X,
  FileCheck2,
  HelpCircle,
} from "lucide-react";
import FlowText from "@/components/FlowText";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/servicesData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Curated bespoke corporate imagery for each service domain from public/images/services-images/
const serviceImages: Record<string, string> = {
  "corporate-tax":
    "/images/services-images/UAE Corporate Tax Finance Poster.webp",
  "audit-assurance":
    "/images/services-images/Magnified Audit Assurance Workspace.webp",
  "accounting-bookkeeping":
    "/images/services-images/Bookkeeping Desk with Financial Reports.webp",
  "vat-services":
    "/images/services-images/Corporate VAT Interface Touchscreen.webp",
  "business-setup":
    "/images/services-images/Business Advisory Brushstroke Concept.webp",
  "cfo-advisory": "/images/services-images/CFO Strategy Mind Map.webp",
  "transfer-pricing":
    "/images/services-images/Transfer Pricing_ UAE Documentation Essentials.webp",
  "corporate-finance":
    "/images/services-images/Corporate Compliance Desk with Financial Records.webp",
  "business-advisory":
    "/images/services-images/Business Advisory Brushstroke Concept.webp",
  "compliance-services":
    "/images/services-images/Modern Compliance Office Workspace.webp",
  "technology-digital":
    "/images/services-images/Futuristic Financial Technology Dashboard.webp",
};

const SERVICE_PAGES_MAP: Record<string, { href: string; label: string }> = {
  "corporate-tax": {
    href: "/services/corporate-tax",
    label: "Explore Dedicated Page (16 Services)",
  },
  "audit-assurance": {
    href: "/services/audit-assurance",
    label: "Explore Dedicated Page (18 Services)",
  },
  "business-setup": {
    href: "/services/business-setup",
    label: "Explore Dedicated Page (16 Services)",
  },
  "vat-services": {
    href: "/services/vat-services",
    label: "Explore Dedicated Page (15 Services)",
  },
  "cfo-advisory": {
    href: "/services/cfo-advisory",
    label: "Explore Dedicated Page (17 Services)",
  },
  "accounting-bookkeeping": {
    href: "/services/accounting-bookkeeping",
    label: "Explore Dedicated Page (20 Services)",
  },
  "transfer-pricing": {
    href: "/services/transfer-pricing",
    label: "Explore Dedicated Page (11 Services)",
  },
  "corporate-finance": {
    href: "/services/corporate-finance",
    label: "Explore Dedicated Page (16 Services)",
  },
  "business-advisory": {
    href: "/services/business-advisory",
    label: "Explore Dedicated Page (16 Services)",
  },
  "compliance-services": {
    href: "/services/compliance-services",
    label: "Explore Dedicated Page (13 Services)",
  },
  "technology-digital": {
    href: "/services/technology-digital",
    label: "Explore Dedicated Page (13 Services)",
  },
};

// Filter tab groups (preserved for future category filtering if needed)
const FILTER_TABS = [
  { id: "all", label: "All Practices" },
  {
    id: "tax-vat",
    label: "Tax & VAT",
    categoryIds: ["corporate-tax", "vat-services", "transfer-pricing"],
  },
  { id: "audit", label: "Audit & Assurance", categoryIds: ["audit-assurance"] },
  {
    id: "accounting-cfo",
    label: "Accounting & CFO",
    categoryIds: [
      "accounting-bookkeeping",
      "cfo-advisory",
      "corporate-finance",
    ],
  },
  {
    id: "advisory",
    label: "Business Advisory",
    categoryIds: ["business-advisory"],
  },
  {
    id: "compliance-tech",
    label: "Compliance & Tech",
    categoryIds: ["compliance-services", "technology-digital"],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalCategory, setActiveModalCategory] =
    useState<ServiceCategory | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const stackWrapperRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Filtered categories based on selected tab and search query
  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.filter((cat) => {
      let matchesTab = true;
      if (activeTab !== "all") {
        const currentTab = FILTER_TABS.find((t) => t.id === activeTab);
        matchesTab = currentTab?.categoryIds?.includes(cat.id) ?? false;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        cat.title.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q) ||
        cat.tagline.toLowerCase().includes(q) ||
        cat.services.some((s) => s.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  // =========================================================================
  // CALM, CINEMATIC GSAP CARD STACKING (Slower, Smooth & Mobile-Safe)
  // =========================================================================
  useEffect(() => {
    if (!cardsContainerRef.current || !stackWrapperRef.current) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) {
        const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
          ".service-stacked-card",
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
    let observer: IntersectionObserver | null = null;

    // =========================================================
    // RESPONSIVE COORDINATED GSAP DECK-OF-CARDS STACKING
    // (Preserves exact desktop pacing while enabling sticky mobile stacking)
    // =========================================================
    const setupCardStacking = (isMobile: boolean) => {
      const cards = cardsContainerRef.current?.querySelectorAll<HTMLElement>(
        ".service-stacked-card",
      );
      if (!cards || cards.length <= 1) return;

      const totalCards = cards.length;

      // Measure tallest card without mutating style before reading (prevents forced reflow)
      let maxCardHeight = 0;
      cards.forEach((card) => {
        const h = card.getBoundingClientRect().height;
        if (h > maxCardHeight) maxCardHeight = h;
      });

      if (maxCardHeight > 0 && cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = `${Math.ceil(maxCardHeight)}px`;
      }

      // Responsive configuration:
      // Mobile header is 76px -> top+=88 leaves 12px gap below navbar (matching reference screenshot)
      // Desktop header is 86px -> top+=104 leaves 18px gap below navbar
      const startOffset = isMobile ? "top top+=88" : "top top+=104";
      const perCardScroll = isMobile ? 260 : 340;
      const totalScrollDistance =
        (totalCards - 1) * perCardScroll + (isMobile ? 120 : 180);
      const scrubSpeed = isMobile ? 0.5 : 0.6;

      // Card 0 sits at relative 0, card 1 sits at yPercent 100 with opacity 1
      // Cards 2..N start at yPercent 100 with opacity 0 (hidden until their turn approaches)
      // Note: We avoid scale(...) and will-change to preserve native 1:1 subpixel font rendering and eliminate text blur
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
          scrub: scrubSpeed, // calm, buttery-smooth glide
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Sequential Timing Architecture:
      // 1. Move phase: incoming card glides from 100% to 0% and completely covers previous card.
      // 2. Settle/Hold phase: card sits 100% arrived and stationary so user can read content.
      // 3. Only AFTER hold phase completes does the next incoming card begin rising.
      const moveDuration = 1.0;
      const holdDuration = isMobile ? 0.6 : 0.8;
      const stepDuration = moveDuration + holdDuration;
      const initialHold = isMobile ? 0.5 : 0.7; // Initial hold for Card 0

      for (let i = 1; i < totalCards; i++) {
        const currCard = cards[i];
        const nextCard = i + 1 < totalCards ? cards[i + 1] : null;
        const startTime = initialHold + (i - 1) * stepDuration;
        const arriveTime = startTime + moveDuration;

        // Two cards back (once fully covered): cleanly fades out
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

        // Current card ensures visibility and smoothly glides up to 0% (full arrival)
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

        // Once current card has COMPLETELY arrived at the top, make the NEXT card visible at yPercent 100
        // (Next card does NOT begin rising until its own startTime after the hold duration)
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

      // Pin background atmosphere image throughout the entire services section until it ends
      if (bgRef.current && sectionRef.current) {
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: bgRef.current,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      }
    };

    const initAnimation = () => {
      gsap.registerPlugin(ScrollTrigger);
      mm = gsap.matchMedia();

      // Desktop configuration
      mm.add("(min-width: 768px)", () => {
        setupCardStacking(false);
      });

      // Mobile configuration
      mm.add("(max-width: 767px)", () => {
        setupCardStacking(true);
      });
    };

    // Defer initialization with IntersectionObserver (400px margin)
    // Eliminates initial main-thread blocking time (TBT) while keeping 100% of the visual animation
    if (typeof IntersectionObserver !== "undefined" && sectionRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            initAnimation();
            observer?.disconnect();
            observer = null;
          }
        },
        { rootMargin: "400px" },
      );
      observer.observe(sectionRef.current);
    } else {
      initAnimation();
    }

    return () => {
      observer?.disconnect();
      mm?.revert();
      if (cardsContainerRef.current) {
        cardsContainerRef.current.style.minHeight = "";
      }
    };
  }, [filteredCategories]);

  // Handle Book Consultant click -> smooth scroll to hero/consult form & pre-fill category
  const handleConsultClick = (categoryId?: string) => {
    setActiveModalCategory(null);
    const formElement = document.getElementById("consult-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "center" });
      const select = formElement.querySelector("select");
      if (select && categoryId) {
        select.value = categoryId;
        select.dispatchEvent(new Event("change", { bubbles: true }));
      }
    } else {
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        contactSec.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-[#F8FAFC] text-[#071426] py-14 sm:py-20 lg:py-24"
    >
      {/* Background Atmosphere Image with Subtle Blur (Pinned across entire Services section until it ends) */}
      <div
        ref={bgRef}
        className="pointer-events-none absolute top-0 left-0 w-full h-screen z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Image
          src="/images/bg/bg-service-audit.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center blur-[2px] opacity-90"
        />
        {/* Subtle elegant wash to preserve contrast while keeping graphics clearly visible */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ========================================================= */}
        {/* EDITORIAL HEADER */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
              <span>Our Services</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-[1.15]">
              <FlowText
                text="Comprehensive Advisory Services"
                as="span"
                triggerOnScroll={true}
                threshold={0.15}
              />
            </h2>
          </div>

          {/* Subtitle Description */}
          <div className="lg:max-w-md">
            <p className="text-sm sm:text-base lg:text-[17px] text-[#4A5D73] leading-relaxed">
              End-to-end digital professional services covering audit, tax,
              accounting, finance, compliance, and technology all tailored for
              UAE businesses.
            </p>
          </div>
        </div>

        {/* Full-width Divider Line */}
        <div className="w-full h-px bg-[#E2E8F0] mb-6 sm:mb-8" />

        {/* ========================================================= */}
        {/* STACKED ALTERNATING SERVICE CARDS (GSAP Calm Stacking Deck) */}
        {/* ========================================================= */}
        <div ref={stackWrapperRef} className="relative w-full pt-1 pb-2">
          <div
            ref={cardsContainerRef}
            className="relative w-full min-h-[560px] sm:min-h-[520px] lg:min-h-[480px]"
          >
            {filteredCategories.map((category, index) => {
              const isDark = index % 2 === 1; // Alternating theme: Light -> Dark -> Light -> Dark
              const isFirst = index === 0;
              const imageUrl =
                serviceImages[category.id] ||
                "/images/services-images/Magnified Audit Assurance Workspace.webp";

              return (
                <div
                  key={category.id}
                  className={`service-stacked-card group ${
                    isFirst
                      ? "relative w-full min-h-full"
                      : "absolute top-0 left-0 w-full min-h-full"
                  } rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-10 transition-shadow duration-300 border flex flex-col justify-between ${
                    isDark
                      ? "bg-[#071426] text-white border-[#12273F] shadow-[0_-16px_40px_rgba(7,20,38,0.45)]"
                      : "bg-[#F1F6F9] text-[#071426] border-[#E2E8F0] shadow-[0_-14px_36px_rgba(0,0,0,0.12)]"
                  }`}
                  style={{ zIndex: 10 + index }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-12 items-center">
                    {/* LEFT COLUMN: Service Details & CTA */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5">
                      <div>
                        {/* Title */}
                        <h3
                          className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight leading-snug mb-2 sm:mb-3 ${
                            isDark ? "text-white" : "text-[#071426]"
                          }`}
                        >
                          {category.title}
                        </h3>

                        {/* Description */}
                        <p
                          className={`text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-4 font-sans ${
                            isDark ? "text-[#CBD5E1]" : "text-[#363636]"
                          }`}
                        >
                          {category.description}
                        </p>

                        {/* 3 Core Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 pt-3 sm:pt-4 border-t border-dashed mb-1 border-slate-300/40">
                          {category.highlights.map((highlight, hIdx) => (
                            <div
                              key={hIdx}
                              className={`flex items-center gap-2 text-xs sm:text-[13px] px-3 py-2 rounded-xl ${
                                isDark
                                  ? "bg-white/5 text-white/90 border border-white/10"
                                  : "bg-white text-[#071426] border border-[#E2E8F0]"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                              <span className="truncate font-medium">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Row: The Signature Lime Button + Full Deliverables Scope */}
                      <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                        {/* Lime CTA Button (Book Consultant ↳) with Kinetic Liquid Hover */}
                        <button
                          onClick={() => handleConsultClick(category.id)}
                          className="group/btn relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm md:text-base font-bold text-[#071426] shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                        >
                          <span
                            className="absolute inset-0 bg-[#071426] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                            aria-hidden="true"
                          />
                          <span
                            className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover/btn:left-[150%]"
                            aria-hidden="true"
                          />
                          <span className="relative z-10 block overflow-hidden leading-tight">
                            <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                              Book Consultant
                            </span>
                            <span
                              className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 text-[#C6F850]"
                              aria-hidden="true"
                            >
                              Book Consultant
                            </span>
                          </span>
                          <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#071426]/10 group-hover/btn:bg-[#C6F850] text-[#071426] transition-all duration-500">
                            <span className="absolute text-base sm:text-lg leading-none font-sans transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-4 group-hover/btn:translate-y-4 group-hover/btn:opacity-0">
                              ↳
                            </span>
                            <span className="absolute text-base sm:text-lg leading-none font-sans -translate-x-4 -translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100">
                              ↳
                            </span>
                          </span>
                        </button>

                        {/* Secondary Link: Inspect Full Scope or Dedicated Page */}
                        {SERVICE_PAGES_MAP[category.id] ? (
                          <Link
                            href={SERVICE_PAGES_MAP[category.id].href}
                            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer py-2 px-3 rounded-lg ${
                              isDark
                                ? "text-[#C6F850] hover:text-white hover:bg-white/5"
                                : "text-[#216D56] hover:text-[#071426] hover:bg-white"
                            }`}
                          >
                            <span>{SERVICE_PAGES_MAP[category.id].label}</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </Link>
                        ) : (
                          <button
                            onClick={() => setActiveModalCategory(category)}
                            className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer py-2 px-3 rounded-lg ${
                              isDark
                                ? "text-[#83D9BE] hover:text-white hover:bg-white/5"
                                : "text-[#216D56] hover:text-[#071426] hover:bg-white"
                            }`}
                          >
                            <span>View all {category.count} deliverables</span>
                            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </button>
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Real High-Quality Corporate Image */}
                    <div className="lg:col-span-5">
                      <div className="relative w-full aspect-[21/9] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm border border-black/10">
                        <Image
                          src={imageUrl}
                          alt={
                            category.title.toLowerCase().includes("advisory")
                              ? `${category.title} in the UAE`
                              : `${category.title} advisory in the UAE`
                          }
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div
                          className={`absolute inset-0 pointer-events-none ${
                            isDark
                              ? "bg-gradient-to-t from-[#071426]/60 via-transparent to-transparent"
                              : "bg-gradient-to-t from-black/20 via-transparent to-transparent"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Empty State when search matches nothing */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-[#F1F6F9] border border-[#E2E8F0] rounded-3xl p-8">
            <HelpCircle className="w-10 h-10 text-[#8A9BAE] mx-auto mb-3" />
            <h4 className="text-lg font-serif font-medium text-[#071426] mb-1">
              No practice found matching &quot;{searchQuery}&quot;
            </h4>
            <p className="text-[#556980] text-sm mb-4">
              Try searching for keywords like Corporate Tax, Audit, VAT, Free
              Zone, or Payroll.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="px-5 py-2.5 rounded-xl bg-[#071426] text-white text-xs font-medium hover:bg-[#36A783] transition-colors cursor-pointer"
            >
              Reset filters & view all practices
            </button>
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM RETAINER / UNIFIED PROPOSAL BANNER */}
        {/* ========================================================= */}
        <div className="mt-14 bg-gradient-to-br from-[#071426] via-[#0E2038] to-[#071426] text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#162D4A] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#83D9BE] text-xs font-mono font-bold tracking-widest uppercase mb-2">
              <span>100% Digital UAE Delivery • FTA Registered</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2 leading-snug">
              Need a Unified UAE Advisory Retainer?
            </h3>
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
              Consolidate trade licence renewals, 9% Corporate Tax returns,
              periodic VAT filings, and annual IFRS statutory audit under a
              single predictable annual retainer.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <button
              onClick={() => handleConsultClick("corporate-tax")}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#C6F850] hover:bg-[#B3EE33] text-[#071426] text-sm font-bold px-6 py-4 rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Book Retainer Consultation</span>
              <span className="text-lg leading-none font-sans">↳</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DETAIL MODAL: Full Breakdown of Practice Deliverables */}
      {/* ========================================================= */}
      {activeModalCategory && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6 bg-[#071426]/75 backdrop-blur-sm animate-fadeIn">
          <div
            className="relative bg-white border border-[#CBD5E1] rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl text-[#071426]"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-8 border-b border-[#E2E8F0] flex items-start justify-between bg-[#F8FAFC]">
              <div className="pr-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#216D56] mb-2 font-mono">
                  <span>Practice Area {activeModalCategory.number}</span>
                  <span>•</span>
                  <span>{activeModalCategory.count} Full Deliverables</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-normal text-[#071426] mb-2">
                  {activeModalCategory.title}
                </h3>
                <p className="text-[#556980] text-sm leading-relaxed font-sans">
                  {activeModalCategory.description}
                </p>
              </div>

              <button
                onClick={() => setActiveModalCategory(null)}
                className="p-2 rounded-xl bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Deliverables Checklist */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-3 bg-white">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs uppercase tracking-wider text-[#64748B] font-bold">
                  Certified Scope of Work & Deliverables
                </h4>
                <span className="text-xs font-mono text-[#36A783] bg-[#EAF4F0] px-2.5 py-0.5 rounded-full font-semibold">
                  IFRS / ISA / FTA Compliant
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalCategory.services.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#36A783]/50 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#EAF4F0] flex items-center justify-center shrink-0 text-[#216D56]">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#071426] font-medium">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-[#E2E8F0] bg-[#F8FAFC] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#556980] text-center sm:text-left">
                Standard SLA: Scoped, engagement letter issued, and onboarded
                within 24–48 hours across UAE.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalCategory(null)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-[#CBD5E1] text-[#475569] hover:text-[#0F172A] text-sm font-semibold hover:bg-white cursor-pointer transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => handleConsultClick(activeModalCategory.id)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl bg-[#C6F850] hover:bg-[#B3EE33] text-[#071426] text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Book Consultant</span>
                  <span className="text-base leading-none">↳</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
