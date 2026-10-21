"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Shield,
  Layers,
  Lock,
} from "lucide-react";
import FlowText from "@/components/FlowText";
import { PROCESS_STEPS_DATA, PROCESS_PAGE_INTRO } from "@/data/processData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STEP_ICONS = [
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
];

export default function WorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const desktopSvgPathRef = useRef<SVGPathElement>(null);
  const mobileSvgPathRef = useRef<SVGPathElement>(null);
  const journeyContainerRef = useRef<HTMLDivElement>(null);

  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Desktop Curved SVG Path scroll-scrubbing animation
      if (desktopSvgPathRef.current && journeyContainerRef.current) {
        const path = desktopSvgPathRef.current;
        const totalLen = path.getTotalLength();

        gsap.set(path, {
          strokeDasharray: totalLen,
          strokeDashoffset: totalLen,
        });

        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: journeyContainerRef.current,
            start: "top 72%",
            end: "bottom 82%",
            scrub: 0.7,
            onUpdate: (self) => {
              // Calculate which of the 6 steps should be active based on progress (0 to 1)
              const stepIdx = Math.min(5, Math.floor(self.progress * 6));
              setActiveStepIndex(stepIdx);
            },
          },
        });
      }

      // 2. Mobile Spine SVG Path scroll-scrubbing animation
      if (mobileSvgPathRef.current && journeyContainerRef.current) {
        const mPath = mobileSvgPathRef.current;
        const mTotalLen = mPath.getTotalLength();

        gsap.set(mPath, {
          strokeDasharray: mTotalLen,
          strokeDashoffset: mTotalLen,
        });

        gsap.to(mPath, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: journeyContainerRef.current,
            start: "top 72%",
            end: "bottom 82%",
            scrub: 0.7,
          },
        });
      }

      // 3. Staggered reveal for each process step item
      const stepCards = section.querySelectorAll(".workflow-card-item");
      stepCards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            force3D: false,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#F6F8FA] text-[#233F5B] py-24 sm:py-28 lg:py-32 overflow-hidden border-t border-[#E1E7ED]"
    >
      {/* Background Architectural Atmosphere Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#36A783]/6 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header & Editorial Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#EAF4F0] border border-[#36A783]/30 text-[#216D56] text-xs sm:text-[13px] font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#36A783]" />
            <span>Digital Client Journey</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-[#233F5B] leading-[1.18] tracking-tight mb-5">
            <FlowText
              text={PROCESS_PAGE_INTRO.heading}
              triggerOnScroll
              as="span"
            />
          </h2>

          <p className="text-base sm:text-lg text-[#556980] font-sans leading-relaxed max-w-2xl mx-auto">
            {PROCESS_PAGE_INTRO.subtitle}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAIN VISUAL: Custom Curved Scroll-Progress Path with Dynamic Milestones */}
        {/* ========================================================================= */}
        <div ref={journeyContainerRef} className="relative w-full">
          {/* ===================================================================== */}
          {/* DESKTOP VIEW: Sleek Center-Weaving S-Curve Path with Alternating Cards */}
          {/* ===================================================================== */}
          <div className="hidden lg:block relative">
            {/* Center SVG Spine Corridor */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-44 pointer-events-none z-0"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 160 1520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <defs>
                  {/* Glowing linear gradient for active progress */}
                  <linearGradient
                    id="workflow-active-grad"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#233F5B" />
                    <stop offset="35%" stopColor="#36A783" />
                    <stop offset="70%" stopColor="#83D9BE" />
                    <stop offset="100%" stopColor="#2B896B" />
                  </linearGradient>

                  {/* Soft ambient glow filter */}
                  <filter
                    id="glow-filter"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>

                {/* Background Track (Muted Grey 4px) */}
                <path
                  d="M 80, 20
                     C 80, 60, 48, 80, 55, 125
                     C 65, 185, 115, 305, 105, 375
                     C 95, 445, 45, 565, 55, 625
                     C 65, 685, 115, 805, 105, 875
                     C 95, 945, 45, 1065, 55, 1125
                     C 65, 1185, 115, 1305, 105, 1375
                     C 95, 1425, 80, 1465, 80, 1500"
                  stroke="#E2E8F0"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Soft ambient aura track */}
                <path
                  d="M 80, 20
                     C 80, 60, 48, 80, 55, 125
                     C 65, 185, 115, 305, 105, 375
                     C 95, 445, 45, 565, 55, 625
                     C 65, 685, 115, 805, 105, 875
                     C 95, 945, 45, 1065, 55, 1125
                     C 65, 1185, 115, 1305, 105, 1375
                     C 95, 1425, 80, 1465, 80, 1500"
                  stroke="#36A783"
                  strokeWidth="10"
                  strokeOpacity="0.16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Progressively Animated Green Path (Sleek 4px Gradient) */}
                <path
                  ref={desktopSvgPathRef}
                  d="M 80, 20
                     C 80, 60, 48, 80, 55, 125
                     C 65, 185, 115, 305, 105, 375
                     C 95, 445, 45, 565, 55, 625
                     C 65, 685, 115, 805, 105, 875
                     C 95, 945, 45, 1065, 55, 1125
                     C 65, 1185, 115, 1305, 105, 1375
                     C 95, 1425, 80, 1465, 80, 1500"
                  stroke="url(#workflow-active-grad)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow-filter)"
                />
              </svg>
            </div>

            {/* 6 Step Rows (Alternating Left & Right around Central Spine) */}
            <div className="space-y-12 xl:space-y-16">
              {PROCESS_STEPS_DATA.map((item, idx) => {
                const Icon = STEP_ICONS[idx] || CheckCircle2;
                const isLeft = item.side === "left";
                const isPassed = activeStepIndex >= idx;

                return (
                  <div
                    key={item.step}
                    className="grid grid-cols-12 gap-6 items-center min-h-[200px] relative z-10"
                  >
                    {/* LEFT COLUMN: Card if left-aligned, otherwise empty */}
                    <div className="col-span-5 flex justify-end">
                      {isLeft && (
                        <div
                          className={`workflow-card-item w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border transition-all duration-300 group relative overflow-hidden ${
                            isPassed
                              ? "border-[#36A783]/50 shadow-[0_12px_36px_rgba(54,167,131,0.12)] -translate-y-1"
                              : "border-slate-200/90 shadow-[0_6px_24px_rgba(35,63,91,0.04)] hover:border-[#36A783]/40 hover:-translate-y-0.5"
                          }`}
                        >
                          {/* Top ambient hairline */}
                          <div
                            className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-300 ${
                              isPassed
                                ? "bg-gradient-to-r from-[#233F5B] via-[#36A783] to-[#83D9BE] opacity-100"
                                : "bg-gradient-to-r from-transparent via-[#36A783]/30 to-transparent opacity-0 group-hover:opacity-100"
                            }`}
                          />

                          {/* Giant subtle watermark number in corner */}
                          <span className="pointer-events-none absolute -bottom-4 -right-2 text-6xl font-serif font-bold text-slate-100 select-none group-hover:text-[#EAF4F0] transition-colors">
                            {item.number}
                          </span>

                          <div className="relative z-10">
                            {/* Step Badge & SLA Pill */}
                            <div className="flex items-center justify-between mb-3.5">
                              {/* <span
                                className={`font-mono text-xs font-bold px-3 py-1 rounded-full border transition-colors ${
                                  isPassed
                                    ? "bg-[#36A783] text-white border-[#36A783]"
                                    : "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30"
                                }`}
                              >
                                STEP {item.number}
                              </span> */}
                              <span className="text-[11px] font-mono font-medium text-[#556980] bg-slate-100 px-2.5 py-0.5 rounded-md">
                                {item.slaBadge}
                              </span>
                            </div>

                            {/* Title & Icon Header */}
                            <div className="flex items-start gap-4 mb-2">
                              <div
                                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                  isPassed
                                    ? "bg-[#36A783] text-white border-[#36A783] shadow-md shadow-[#36A783]/20"
                                    : "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30 group-hover:bg-[#36A783] group-hover:text-white"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#233F5B] tracking-tight leading-snug">
                                  {item.number}. {item.title}
                                </h3>
                                <p className="font-sans text-sm text-[#556980] leading-relaxed mt-1.5">
                                  {item.homepagePreview}
                                </p>
                              </div>
                            </div>

                            {/* Deliverable highlight tag */}
                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#216D56] font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                              <span className="truncate">
                                {item.deliverableHighlight}
                              </span>
                            </div>

                            {/* Step 3 Portal Action Link */}
                            {item.number === "03" && (
                              <div className="mt-3.5 pt-2 border-t border-dashed border-slate-200">
                                <Link
                                  href="/#portal"
                                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#216D56] hover:text-[#071426] bg-[#EAF4F0] hover:bg-[#C6F850] px-3.5 py-1.5 rounded-lg border border-[#36A783]/30 transition-all shadow-2xs group/btn"
                                >
                                  <Lock className="w-3.5 h-3.5 text-[#36A783]" />
                                  <span>Open Digital Client Portal (AES-256)</span>
                                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* CENTER COLUMN: Interactive Milestone Orb on the Spine */}
                    <div className="col-span-2 flex items-center justify-center relative">
                      {/* Connection Hairline linking Milestone Orb to the Card */}
                      <div
                        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 h-0.5 transition-all duration-300 ${
                          isLeft
                            ? "right-1/2 w-24 bg-gradient-to-l"
                            : "left-1/2 w-24 bg-gradient-to-r"
                        } ${
                          isPassed
                            ? "from-[#36A783] to-transparent opacity-100"
                            : "from-slate-300 to-transparent opacity-40"
                        }`}
                      />

                      {/* Milestone Orb Button */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm transition-all duration-300 shadow-md relative z-20 ${
                          isPassed
                            ? "bg-[#36A783] text-white ring-4 ring-[#EAF4F0] shadow-lg shadow-[#36A783]/30 scale-110"
                            : "bg-white border-2 border-slate-300 text-[#556980] hover:border-[#36A783] hover:text-[#216D56]"
                        }`}
                      >
                        {item.number}
                        {isPassed && (
                          <span className="absolute inset-0 rounded-full bg-[#36A783] animate-ping opacity-25" />
                        )}
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Card if right-aligned, otherwise empty */}
                    <div className="col-span-5 flex justify-start">
                      {!isLeft && (
                        <div
                          className={`workflow-card-item w-full max-w-lg bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border transition-all duration-300 group relative overflow-hidden ${
                            isPassed
                              ? "border-[#36A783]/50 shadow-[0_12px_36px_rgba(54,167,131,0.12)] -translate-y-1"
                              : "border-slate-200/90 shadow-[0_6px_24px_rgba(35,63,91,0.04)] hover:border-[#36A783]/40 hover:-translate-y-0.5"
                          }`}
                        >
                          {/* Top ambient hairline */}
                          <div
                            className={`absolute top-0 inset-x-0 h-1 transition-opacity duration-300 ${
                              isPassed
                                ? "bg-gradient-to-r from-[#233F5B] via-[#36A783] to-[#83D9BE] opacity-100"
                                : "bg-gradient-to-r from-transparent via-[#36A783]/30 to-transparent opacity-0 group-hover:opacity-100"
                            }`}
                          />

                          {/* Giant subtle watermark number in corner */}
                          <span className="pointer-events-none absolute -bottom-4 -right-2 text-6xl font-serif font-bold text-slate-100 select-none group-hover:text-[#EAF4F0] transition-colors">
                            {item.number}
                          </span>

                          <div className="relative z-10">
                            {/* Step Badge & SLA Pill */}
                            <div className="flex items-center justify-between mb-3.5">
                              {/* <span
                                className={`font-mono text-xs font-bold px-3 py-1 rounded-full border transition-colors ${
                                  isPassed
                                    ? "bg-[#36A783] text-white border-[#36A783]"
                                    : "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30"
                                }`}
                              >
                                STEP {item.number}
                              </span> */}
                              <span className="text-[11px] font-mono font-medium text-[#556980] bg-slate-100 px-2.5 py-0.5 rounded-md">
                                {item.slaBadge}
                              </span>
                            </div>

                            {/* Title & Icon Header */}
                            <div className="flex items-start gap-4 mb-2">
                              <div
                                className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                                  isPassed
                                    ? "bg-[#36A783] text-white border-[#36A783] shadow-md shadow-[#36A783]/20"
                                    : "bg-[#EAF4F0] text-[#216D56] border-[#36A783]/30 group-hover:bg-[#36A783] group-hover:text-white"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                              </div>
                              <div>
                                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#233F5B] tracking-tight leading-snug">
                                  {item.number}. {item.title}
                                </h3>
                                <p className="font-sans text-sm text-[#556980] leading-relaxed mt-1.5">
                                  {item.homepagePreview}
                                </p>
                              </div>
                            </div>

                            {/* Deliverable highlight tag */}
                            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#216D56] font-medium">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                              <span className="truncate">
                                {item.deliverableHighlight}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ===================================================================== */}
          {/* MOBILE & TABLET VIEW: Sleek Left Vertical Track with Connected Cards */}
          {/* ===================================================================== */}
          <div className="lg:hidden relative pl-8 sm:pl-10 space-y-6">
            {/* Mobile SVG Spine */}
            <div
              className="absolute left-3 sm:left-4 top-2 bottom-2 w-4 pointer-events-none z-0"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 16 1400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M 8, 0 L 8, 1400"
                  stroke="#E2E8F0"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  ref={mobileSvgPathRef}
                  d="M 8, 0 L 8, 1400"
                  stroke="#36A783"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {PROCESS_STEPS_DATA.map((item, idx) => {
              const Icon = STEP_ICONS[idx] || CheckCircle2;
              const isPassed = activeStepIndex >= idx;

              return (
                <div
                  key={item.step}
                  className="workflow-card-item relative bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm transition-all duration-300 relative z-10"
                >
                  {/* Node on the mobile spine */}
                  <div
                    className={`absolute -left-8 sm:-left-10 top-5 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-all ${
                      isPassed
                        ? "bg-[#36A783] text-white ring-4 ring-[#EAF4F0] shadow-md shadow-[#36A783]/20"
                        : "bg-white border-2 border-slate-300 text-[#556980]"
                    }`}
                  >
                    {item.number}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    {/* <span className="font-mono text-xs font-bold text-[#216D56] bg-[#EAF4F0] border border-[#36A783]/30 px-2.5 py-0.5 rounded-full">
                      STEP {item.number}
                    </span> */}
                    <span className="text-[10px] font-mono text-[#556980] bg-slate-100 px-2 py-0.5 rounded">
                      {item.slaBadge}
                    </span>
                  </div>

                  <div className="flex items-start gap-3 mt-2">
                    <div className="w-9 h-9 rounded-xl bg-[#EAF4F0] flex items-center justify-center text-[#216D56] shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-[#233F5B] leading-snug">
                        {item.number}. {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-[#556980] leading-relaxed mt-1">
                        {item.homepagePreview}
                      </p>
                    </div>
                  </div>

                  {item.number === "03" && (
                    <div className="mt-3 pt-2 border-t border-dashed border-slate-200">
                      <Link
                        href="/#portal"
                        className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#216D56] bg-[#EAF4F0] px-3 py-1.5 rounded-lg border border-[#36A783]/30"
                      >
                        <Lock className="w-3.5 h-3.5 text-[#36A783]" />
                        <span>Client Portal Link</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasteful Action to Explore Complete Dedicated Process Page */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E1E7ED] flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#556980]">
            <Clock className="w-4 h-4 text-[#36A783]" />
            <span className="font-semibold text-[#233F5B]">
              Full Operational Transparency:
            </span>
            <span>Detailed scope, deliverables, and SLAs documented.</span>
          </div>

          <Link
            href="/process"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#36A783] px-6 sm:px-8 py-3.5 text-sm sm:text-base font-semibold text-white shadow-md transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-lg hover:shadow-[#36A783]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
          >
            <span
              className="absolute inset-0 bg-[#172D43] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0 rounded-xl"
              aria-hidden="true"
            />
            <span
              className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover:left-[150%]"
              aria-hidden="true"
            />
            <span className="relative z-10 block overflow-hidden leading-tight">
              <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
                View Operational Blueprint & SLAs
              </span>
              <span
                className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-white"
                aria-hidden="true"
              >
                View Operational Blueprint & SLAs
              </span>
            </span>
            <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white text-white group-hover:text-[#172D43]">
              <ArrowRight
                className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-4 group-hover:opacity-0"
                strokeWidth={2.4}
              />
              <ArrowRight
                className="absolute h-3.5 w-3.5 -translate-x-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0 group-hover:opacity-100"
                strokeWidth={2.4}
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
