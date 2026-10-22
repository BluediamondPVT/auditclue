"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Laptop,
  ShieldCheck,
  Clock,
  CircleDollarSign,
  LockKeyhole,
  FileText,
  BriefcaseBusiness,
  UsersRound,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Layers,
  Building2,
} from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/servicesData";
import FlowText from "@/components/FlowText";
export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Zero forced reflows or blocking scroll triggers
  }, []);

  const card1 = WHY_CHOOSE_ITEMS[0]; // Fully Digital
  const card2 = WHY_CHOOSE_ITEMS[1]; // UAE Tax & Compliance
  const card3 = WHY_CHOOSE_ITEMS[2]; // Fast Response
  const card4 = WHY_CHOOSE_ITEMS[3]; // Transparent Pricing
  const card5 = WHY_CHOOSE_ITEMS[4]; // Secure Document
  const card6 = WHY_CHOOSE_ITEMS[5]; // Professional Reporting
  const card7 = WHY_CHOOSE_ITEMS[6]; // End-to-End Advisory
  const card8 = WHY_CHOOSE_ITEMS[7]; // For SMEs

  return (
    <section
      id="why-choose-us"
      ref={sectionRef}
      className="relative bg-[#071426] text-[#F7FAFC] py-28 sm:py-36 overflow-hidden border-t border-b border-white/10"
    >
      {/* Industries Anchor */}
      <div id="industries" className="absolute -top-20" aria-hidden="true" />
      {/* Architectural Atmospheric Backdrop (Subtle Vignette + Ultra-Fine Grid) */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(54,167,131,0.09),transparent_70%)]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(35,63,91,0.45),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_50%_at_50%_35%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative max-w-[1320px] mx-auto px-5 sm:px-8 lg:px-10 z-10">
        {/* ===================================================================== */}
        {/* EDITORIAL AWWWARDS HEADER: Bold Asymmetrical Thesis */}
        {/* ===================================================================== */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 sm:mb-20 pb-10 border-b border-white/10"
        >
          {/* Left Column: Eyebrow + Huge Heading */}
          <div className="lg:col-span-7">
            <div className="why-header-item inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.2em] text-[#83D9BE] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] animate-pulse" />
              <span>[02] — Strategic Distinction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-normal text-white leading-[1.16] tracking-tight">
              <FlowText
                text="Why Businesses Trust Auditclue"
                as="span"
                triggerOnScroll={true}
              />
            </h2>
          </div>

          {/* Right Column: Editorial Mission Statement */}
          <div className="lg:col-span-5">
            <p className="why-header-item text-base sm:text-[17px] text-[#A8B7C9] font-sans leading-relaxed">
              We combine professional expertise with digital efficiency to
              deliver practical solutions for your business challenges.
            </p>

            {/* Quick Minimalist Trust Strip */}
            <div className="why-header-item mt-5 pt-4 border-t border-white/10 flex items-center gap-6 text-xs font-mono text-[#83D9BE]">
              <span>100% Digital Delivery</span>
              <span className="text-white/30">•</span>
              <span>FTA Certified Agents</span>
              <span className="text-white/30">•</span>
              <span>Fixed Transparent Fees</span>
            </div>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* MAIN COMPOSITION: Minimalist Bento Architecture With Curated Visuals */}
        {/* ===================================================================== */}
        <div ref={gridRef} className="space-y-6">
          {/* ───────────────────────────────────────────────────────────────── */}
          {/* TIER 1: Dual Feature Flagships (7 Cols Photo Showcase + 5 Cols Regulatory) */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Card 01: Flagship 100% Digital Delivery (With Moody Glass Tower Photo) */}
            <div className="awwwards-card-item lg:col-span-7 group relative rounded-3xl bg-[#0D1F38]/90 border border-white/12 hover:border-[#36A783]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between p-7 sm:p-10 shadow-2xl hover:shadow-[0_24px_50px_rgba(3,10,20,0.6)]">
              {/* Background Curated Architectural Photography with Dark Gradient Scrim */}
              <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Corporate Advisory Infrastructure"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/80 to-[#071426]/40" />
              </div>

              {/* Top ambient hairline */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#36A783]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Header Tag + Step Index */}
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/15 border border-[#36A783]/30 px-3.5 py-1 rounded-full">
                    <Laptop className="w-3.5 h-3.5" />
                    <span>01 • Core Operating Infrastructure</span>
                  </span>
                  <span className="font-serif text-3xl font-light text-white/20 group-hover:text-[#83D9BE] transition-colors">
                    {card1.number}
                  </span>
                </div>

                {/* Main Heading */}
                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight leading-snug mb-3">
                  {card1.title}
                </h3>

                {/* Description */}
                <p className="text-base text-[#A8B7C9] leading-relaxed max-w-xl font-sans">
                  {card1.desc}
                </p>
              </div>

              {/* Bottom Feature Highlights */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-5 text-xs text-[#CBD5E1]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    Paperless Audits
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    Instant Cloud Vault
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#36A783]" />
                    UAE-Wide Delivery
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#83D9BE] uppercase tracking-wider">
                  100% Cloud-Native
                </span>
              </div>
            </div>

            {/* Card 02: Regulatory Rigor (5 Cols) */}
            <div className="awwwards-card-item lg:col-span-5 group relative rounded-3xl bg-[#0D1B30] border border-white/10 hover:border-[#36A783]/50 transition-all duration-500 overflow-hidden flex flex-col justify-between p-7 sm:p-10 shadow-2xl hover:shadow-[0_24px_50px_rgba(3,10,20,0.6)]">
              {/* Top ambient hairline */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#36A783]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Subtle radial ambient */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#36A783]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header Tag + Step Index */}
                <div className="flex items-center justify-between mb-8">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#83D9BE] bg-[#36A783]/15 border border-[#36A783]/30 px-3.5 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>02 • Statutory Mandate</span>
                  </span>
                  <span className="font-serif text-3xl font-light text-white/20 group-hover:text-[#83D9BE] transition-colors">
                    {card2.number}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight leading-snug mb-3">
                  FTA Certified Practice & EmaraTax Filing Authority
                </h3>

                <p className="text-base text-[#A8B7C9] leading-relaxed font-sans mb-6">
                  Direct statutory representation before the Federal Tax Authority. Every audit, corporate tax filing, and VAT reconciliation is prepared under IFRS / ISA standards and signed off by qualified CPAs and registered FTA Tax Agents.
                </p>

                {/* Explicit Regulatory Verification Checklist */}
                <div className="space-y-2.5 mb-6 text-xs text-[#CBD5E1]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                    <span>EmaraTax Agency Linked • Direct Return Submissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                    <span>FTA Audit Defense & Penalty Reconsideration Rights</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#36A783] shrink-0" />
                    <span>All 7 Emirates & 40+ Free Zones Statutory Accreditation</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="font-semibold text-[#83D9BE] bg-[#36A783]/15 px-3 py-1 rounded-md border border-[#36A783]/25">
                  FTA Tax Agent Authorization
                </span>
                <span className="text-[#A8B7C9] font-mono">
                  IFRS • ISA • CPA / ACCA
                </span>
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* TIER 2: Four Architectural Precision Pillars (4 Cols Each) */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* 03: Fast Response & Execution */}
            <div className="awwwards-card-item group relative rounded-2xl bg-[#091524] border border-white/10 hover:border-[#36A783]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#36A783]/40 to-transparent group-hover:via-[#36A783] transition-all" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#36A783]/15 border border-[#36A783]/30 flex items-center justify-center text-[#36A783] group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                    <Clock className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-xs text-white/30 group-hover:text-[#83D9BE] transition-colors">
                    {card3.number}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-white mb-2 leading-snug">
                  {card3.title}
                </h3>

                <p className="text-sm text-[#A8B7C9] leading-relaxed font-sans">
                  {card3.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#83D9BE]">
                <span>24h Turnaround SLA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
              </div>
            </div>

            {/* 04: Transparent Pricing */}
            <div className="awwwards-card-item group relative rounded-2xl bg-[#091524] border border-white/10 hover:border-[#36A783]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#36A783]/40 to-transparent group-hover:via-[#36A783] transition-all" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#36A783]/15 border border-[#36A783]/30 flex items-center justify-center text-[#36A783] group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                    <CircleDollarSign className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-xs text-white/30 group-hover:text-[#83D9BE] transition-colors">
                    {card4.number}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-white mb-2 leading-snug">
                  {card4.title}
                </h3>

                <p className="text-sm text-[#A8B7C9] leading-relaxed font-sans">
                  {card4.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#83D9BE]">
                <span>100% Fixed Scopes</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
              </div>
            </div>

            {/* 05: Secure Document Handling */}
            <div className="awwwards-card-item group relative rounded-2xl bg-[#091524] border border-white/10 hover:border-[#36A783]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#36A783]/40 to-transparent group-hover:via-[#36A783] transition-all" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#36A783]/15 border border-[#36A783]/30 flex items-center justify-center text-[#36A783] group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                    <LockKeyhole className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-xs text-white/30 group-hover:text-[#83D9BE] transition-colors">
                    {card5.number}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-white mb-2 leading-snug">
                  {card5.title}
                </h3>

                <p className="text-sm text-[#A8B7C9] leading-relaxed font-sans">
                  {card5.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#83D9BE]">
                <span>AES-256 Vault</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
              </div>
            </div>

            {/* 06: Professional Reporting */}
            <div className="awwwards-card-item group relative rounded-2xl bg-[#091524] border border-white/10 hover:border-[#36A783]/50 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 shadow-lg hover:shadow-2xl overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#36A783]/40 to-transparent group-hover:via-[#36A783] transition-all" />
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#36A783]/15 border border-[#36A783]/30 flex items-center justify-center text-[#36A783] group-hover:bg-[#36A783] group-hover:text-white transition-colors duration-300">
                    <FileText className="w-5 h-5" strokeWidth={1.6} />
                  </div>
                  <span className="font-mono text-xs text-white/30 group-hover:text-[#83D9BE] transition-colors">
                    {card6.number}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-medium text-white mb-2 leading-snug">
                  {card6.title}
                </h3>

                <p className="text-sm text-[#A8B7C9] leading-relaxed font-sans">
                  {card6.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-[#83D9BE]">
                <span>Executive MIS Packs</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#36A783]" />
              </div>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* TIER 3: Strategic Growth Anchor (End-to-End Advisory + SME Practice) */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="awwwards-card-item group relative rounded-3xl bg-gradient-to-r from-[#0C1B30] via-[#0D223D] to-[#0A1728] border border-white/12 hover:border-[#36A783]/50 transition-all duration-500 p-8 sm:p-10 shadow-2xl overflow-hidden">
            {/* Ambient fine glow */}
            <div className="pointer-events-none absolute top-0 right-1/4 w-96 h-96 bg-[#36A783]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: 07 End-to-End Lifecycle */}
              <div className="lg:col-span-7 space-y-3">
                <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider text-[#83D9BE]">
                  <BriefcaseBusiness className="w-3.5 h-3.5 text-[#36A783]" />
                  <span>07 • Full Lifecycle Enterprise Coverage</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-medium text-white tracking-tight">
                  {card7.title}
                </h3>

                <p className="text-base text-[#A8B7C9] leading-relaxed max-w-2xl font-sans">
                  {card7.desc}
                </p>
              </div>

              {/* Right Column: 08 SME Practice & Direct Action */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 lg:border-l lg:border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs uppercase text-[#83D9BE] mb-2">
                  <UsersRound className="w-3.5 h-3.5 text-[#36A783]" />
                  <span>08 • {card8.title}</span>
                </div>

                <p className="text-sm text-[#CBD5E1] leading-relaxed mb-5 font-sans">
                  {card8.desc}
                </p>

                <a
                  href="#consult-form"
                  className="group/btn relative inline-flex items-center justify-between overflow-hidden rounded-xl bg-[#36A783] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[#36A783]/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer"
                >
                  <span
                    className="absolute inset-0 bg-[#071426] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                    aria-hidden="true"
                  />
                  <span
                    className="absolute -left-full top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transition-all duration-700 ease-out group-hover/btn:left-[150%]"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 block overflow-hidden leading-tight">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                      Discuss Your Business Requirements
                    </span>
                    <span
                      className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 text-white"
                      aria-hidden="true"
                    >
                      Discuss Your Business Requirements
                    </span>
                  </span>
                  <span className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20 transition-all duration-500 group-hover/btn:bg-white text-white group-hover/btn:text-[#071426] ml-3">
                    <ArrowRight
                      className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-4 group-hover/btn:opacity-0"
                      strokeWidth={2.4}
                    />
                    <ArrowRight
                      className="absolute h-3.5 w-3.5 -translate-x-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                      strokeWidth={2.4}
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
