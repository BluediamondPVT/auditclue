"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Layers,
  ArrowUpRight,
  Info,
} from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  startingPrice: string;
  billingPeriod: string;
  idealFor: string;
  popular?: boolean;
  features: string[];
  sla: string;
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: "accounting",
    name: "Accounting & Bookkeeping",
    badge: "MONTHLY RETAINER",
    startingPrice: "AED 1,500",
    billingPeriod: "per month",
    idealFor: "SMEs, startups & trading companies needing continuous, audit-proof books.",
    features: [
      "Up to 100 bank & sales transactions/month",
      "Cloud software setup (Zoho Books, Xero, QBO)",
      "Monthly bank, card & gateway reconciliations",
      "Monthly Statement of P&L & Balance Sheet",
      "Dedicated Chartered Accountant point-of-contact",
      "Free Zone & Mainland compliance aligned",
    ],
    sla: "Books Closed by 10th of each month",
  },
  {
    id: "corporate-tax",
    name: "UAE Corporate Tax Compliance",
    badge: "ANNUAL STATUTORY",
    startingPrice: "AED 2,500",
    billingPeriod: "per financial year",
    popular: true,
    idealFor: "Entities subject to 9% Corporate Tax or electing for 0% Small Business Relief.",
    features: [
      "Corporate Tax Registration & TRN acquisition",
      "Taxable income & permanent establishment audit",
      "Small Business Relief (0% SBR up to AED 3M) election",
      "Preparation & electronic submission of Form CT6",
      "Related party & interest limitation calculation",
      "Official FTA corporate tax submission receipt",
    ],
    sla: "Filing completed 14 days before deadline",
  },
  {
    id: "vat",
    name: "UAE VAT Compliance & Filing",
    badge: "QUARTERLY STATUTORY",
    startingPrice: "AED 650",
    billingPeriod: "per quarterly return",
    idealFor: "Registered businesses needing accurate 5% VAT calculations and input recovery.",
    features: [
      "Quarterly Form 201 return preparation & filing",
      "Input tax credit audit to maximize tax recovery",
      "Customs Box 6 & 7 declaration reconciliation",
      "Reverse charge mechanism (RCM) validation",
      "Tax invoice & credit note compliance check",
      "FTA Registered Tax Agent review & sign-off",
    ],
    sla: "Submitted 5 days ahead of 28th cut-off",
  },
  {
    id: "setup",
    name: "Company Formation & Setup",
    badge: "ONE-TIME INCORPORATION",
    startingPrice: "AED 12,500",
    billingPeriod: "all-inclusive package",
    idealFor: "Entrepreneurs & international groups establishing a presence in the UAE.",
    features: [
      "100% Foreign Ownership (Mainland DED or Free Zone)",
      "Trade license issuance & initial approvals",
      "Memorandum of Association (MOA) drafting",
      "Establishment Card & investor visa allocation",
      "Dedicated corporate bank account introduction (Wio, ENBD)",
      "Initial Corporate Tax & VAT statutory registration",
    ],
    sla: "Digital License in 3–5 Business Days",
  },
];

export default function PricingPackagesSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-[#F8FAFC] text-[#071426] border-t border-b border-[#E2E8F0] relative overflow-hidden">
      {/* Background Architectural Atmosphere Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-40" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#36A783]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative w-full max-w-[1600px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 bg-[#EAF4F0] text-[#216D56] border border-[#36A783]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#36A783]" />
            <span>TRANSPARENT VALUE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight mb-4">
            Transparent &ldquo;Starting From&rdquo; Advisory Packages
          </h2>

          <p className="text-base sm:text-lg text-[#475569] font-sans leading-relaxed max-w-2xl mx-auto">
            Zero hidden surcharges, surprise hourly bills, or administrative ambiguity. Every engagement is backed by an itemized scope of work and contractual SLAs.
          </p>
        </div>

        {/* 4 Pricing Cards Grid (Fluid Wide Container Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-7 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-6 sm:p-7 xl:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "bg-[#071426] text-white border-2 border-[#36A783] shadow-xl hover:-translate-y-1"
                  : "bg-white text-[#071426] border border-[#CBD5E1]/90 shadow-md hover:border-[#36A783] hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#36A783] text-white text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Badge & Name */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                      plan.popular
                        ? "bg-white/10 text-[#83D9BE]"
                        : "bg-[#EAF4F0] text-[#216D56]"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold mb-2 leading-snug">
                  {plan.name}
                </h3>

                <p
                  className={`text-xs leading-relaxed font-sans mb-6 min-h-[36px] ${
                    plan.popular ? "text-[#CBD5E1]" : "text-[#64748B]"
                  }`}
                >
                  {plan.idealFor}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-current/10">
                  <div className="text-xs font-mono uppercase tracking-wider opacity-70 mb-1">
                    Starting From
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-serif font-bold tracking-tight">
                      {plan.startingPrice}
                    </span>
                    <span className="text-xs font-sans opacity-75">
                      /{plan.billingPeriod.replace("per ", "")}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-2.5 mb-8">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-70 mb-3">
                    What&apos;s Included:
                  </div>
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs leading-relaxed">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          plan.popular ? "text-[#C6F850]" : "text-[#36A783]"
                        }`}
                      />
                      <span className={plan.popular ? "text-[#E2E8F0]" : "text-[#334155]"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action & SLA with Signature Liquid/Kinetic Button */}
              <div className="pt-4 border-t border-current/10 space-y-4">
                <div className="flex items-center gap-1.5 text-[11px] font-mono opacity-80">
                  <Clock className="w-3.5 h-3.5 shrink-0 text-[#36A783]" />
                  <span className="truncate">{plan.sla}</span>
                </div>

                <Link
                  href="/#consult-form"
                  className={`group/btn relative w-full inline-flex items-center justify-between overflow-hidden rounded-2xl py-3 px-4.5 text-xs font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] cursor-pointer shadow-sm ${
                    plan.popular
                      ? "bg-[#C6F850] text-[#071426] hover:shadow-lg hover:shadow-[#C6F850]/20"
                      : "bg-[#071426] text-white hover:shadow-lg hover:shadow-[#071426]/20"
                  }`}
                >
                  {/* 1. Liquid Fill Wipe */}
                  <span
                    className={`absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-2xl ${
                      plan.popular ? "bg-[#FFFFFF]" : "bg-[#36A783]"
                    }`}
                    aria-hidden="true"
                  />

                  {/* 2. Kinetic Text Roll / Flip */}
                  <span className="relative z-10 block overflow-hidden leading-tight font-sans">
                    <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                      Request Custom Scope
                    </span>
                    <span
                      className={`absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 ${
                        plan.popular ? "text-[#071426]" : "text-white"
                      }`}
                      aria-hidden="true"
                    >
                      Request Custom Scope
                    </span>
                  </span>

                  {/* 3. Dual-Arrow Flight Portal Badge */}
                  <span
                    className={`relative z-10 flex h-6.5 w-6.5 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-500 ${
                      plan.popular
                        ? "bg-[#071426]/10 group-hover/btn:bg-[#071426] text-[#071426] group-hover/btn:text-white"
                        : "bg-white/10 group-hover/btn:bg-white text-white group-hover/btn:text-[#071426]"
                    }`}
                  >
                    <ArrowUpRight
                      className="absolute h-3.5 w-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-4 group-hover/btn:-translate-y-4 group-hover/btn:opacity-0"
                      strokeWidth={2.4}
                    />
                    <ArrowUpRight
                      className="absolute h-3.5 w-3.5 -translate-x-4 translate-y-4 opacity-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0 group-hover/btn:opacity-100"
                      strokeWidth={2.4}
                    />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on Tailored Enterprise Quotes */}
        <div className="mt-12 text-center text-xs text-[#64748B] font-sans max-w-2xl mx-auto flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-[#36A783] shrink-0" />
          <span>
            *All rates are indicative starting baselines. Final fixed-fee engagement letters are tailored to transaction volume, corporate entity structure, and statutory deadlines following your initial consultation.
          </span>
        </div>
      </div>
    </section>
  );
}
