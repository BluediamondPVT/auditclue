import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlowText from "@/components/FlowText";
import { PROCESS_STEPS_DATA, PROCESS_PAGE_INTRO } from "@/data/processData";
import {
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
  CheckCircle2,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Lock,
  Clock,
  Laptop,
  Check,
  Shield,
  Layers,
  Compass,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Process | Auditclue Global Advisory Services LLC",
  description:
    "An open, transparent, 6-phase digital operating architecture engineered for modern UAE businesses across Mainland and Free Zones.",
};

// Map icons to the 6 steps
const STEP_ICONS = [
  MessageSquareQuote,
  Calculator,
  UploadCloud,
  ShieldCheck,
  FileCheck2,
  Headphones,
];

// Architectural Stage Labels
const STAGE_LABELS = [
  "STAGE 01 — INTAKE & DIAGNOSTIC",
  "STAGE 02 — SCOPING & PROPOSAL",
  "STAGE 03 — VAULT & DOCUMENTATION",
  "STAGE 04 — EXECUTION & TESTING",
  "STAGE 05 — REPORTING & SIGN-OFF",
  "STAGE 06 — CONTINUOUS COMPLIANCE",
];

// Step Key Takeaways
const STEP_TAKEAWAYS: Record<string, string[]> = {
  "01": [
    "Mainland DED & Free Zone activity mapping",
    "Senior chartered advisor review",
    "Zero office visits required",
  ],
  "02": [
    "Itemized milestone deliverables",
    "Fixed-fee engagement contract",
    "Clear statutory deadlines guaranteed",
  ],
  "03": [
    "AES-256 cloud encryption vault",
    "Bank-grade confidentiality protocols",
    "Secure global upload anytime",
  ],
  "04": [
    "Chartered Accountants & FTA Tax Agents",
    "IFRS & ISA audit trail validation",
    "Proactive tax gap resolution",
  ],
  "05": [
    "Bank-ready financial assurance packs",
    "Official FTA tax filing receipts",
    "Digital partner sign-off and seal",
  ],
  "06": [
    "Proactive compliance calendar tracking",
    "Upcoming VAT & Corporate Tax alerts",
    "Year-round senior advisory access",
  ],
};

// Sleek horizontal meta benchmarks (No boxes, pure open typography)
const ARCHITECTURAL_BENCHMARKS = [
  {
    num: "01",
    title: "100% Cloud Execution",
    desc: "Complete remote delivery across UAE",
  },
  {
    num: "02",
    title: "AES-256 Encrypted",
    desc: "Bank-grade client data vault",
  },
  {
    num: "03",
    title: "FTA Registered Team",
    desc: "Chartered CPAs & FTA Tax Agents",
  },
  {
    num: "04",
    title: "Committed Turnaround",
    desc: "Predictable, contractual SLAs",
  },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#071426] selection:bg-[#C6F850] selection:text-[#071426]">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1 pt-[76px] lg:pt-[86px]">
        {/* ================================================================= */}
        {/* 1. HERO SECTION: Pure Editorial Statement (Zero Boxes)            */}
        {/* ================================================================= */}
        <section className="relative bg-white border-b border-[#E2E8F0] pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 overflow-hidden">
          {/* Subtle Atmospheric Background with Centered Blurred 3D Abstract Sculpture */}
          <div
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center select-none"
            aria-hidden="true"
          >
            {/* The 3D Abstract Sculpture centered in background with cinematic floating motion & organic aura */}
            <div className="relative w-[700px] h-[480px] sm:w-[920px] sm:h-[600px] lg:w-[1100px] lg:h-[700px] opacity-30 sm:opacity-35 filter blur-[12px] sm:blur-[18px] pointer-events-none transform-gpu animate-bg-drift [mask-image:radial-gradient(ellipse_65%_65%_at_50%_50%,#000_30%,transparent_85%)]">
              <Image
                src="/images/process/abstract-hero-ribbon.jpg"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1100px"
              />
            </div>

            {/* Subtle emerald atmospheric glow halo with living pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#36A783]/14 rounded-full blur-[140px] pointer-events-none animate-glow-pulse" />

            {/* Fine architectural grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(35,63,91,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(35,63,91,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_55%_at_50%_45%,#000_65%,transparent_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            {/* Minimalist Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-[#64748B] font-medium mb-8"
            >
              <Link href="/" className="hover:text-[#36A783] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#071426] font-semibold">Operating Architecture</span>
            </nav>

            {/* Open Editorial Header (Full Grand Width, Zero Boxes) */}
            <div className="max-w-4xl mb-12 lg:mb-14">
              <div className="inline-flex items-center gap-2 bg-[#EAF4F0]/90 backdrop-blur-xs text-[#216D56] border border-[#36A783]/25 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 font-mono">
                <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                <span>Operating Model • 6-Step Protocol</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-[#071426] tracking-tight leading-[1.08] mb-8">
                <FlowText
                  text="The 6-Phase Digital Operating Architecture"
                  as="span"
                />
              </h1>

              <p className="text-lg sm:text-xl lg:text-xl text-[#363636] font-sans font-light leading-relaxed max-w-3xl">
                Traditional advisory relied on physical office visits, courier
                envelopes, and unpredictable bills. We engineered an uncompromising,
                fully digital protocol for UAE Mainland and Free Zone enterprises.
              </p>
            </div>

            {/* Horizontal Specs Bar: Clean Typographic Hairlines (NO BOXES) */}
            <div className="pt-8 border-t border-[#E2E8F0] grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {ARCHITECTURAL_BENCHMARKS.map((item, idx) => (
                <div key={idx} className="group">
                  <div className="font-mono text-xs font-bold text-[#36A783] mb-1">
                    [{item.num}] — SPEC
                  </div>
                  <div className="text-base sm:text-lg font-serif font-medium text-[#071426] tracking-tight mb-1">
                    {item.title}
                  </div>
                  <div className="text-xs text-[#64748B] font-sans">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 2. THE 6 OPERATING PHASES: Open Editorial Timeline (Zero Boxes)   */}
        {/* ================================================================= */}
        <section className="py-12 sm:py-20 lg:py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section Index Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 mb-4 border-b border-[#071426]/10">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold block mb-2">
                  EXECUTION PROTOCOL
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426]">
                  Step-by-Step Delivery Lifecycle
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-[#64748B] font-mono">
                [06 Phases] • End-to-End SLA Guaranteed
              </div>
            </div>

            {/* The 6 Phases Rows */}
            <div className="divide-y divide-[#E2E8F0]">
              {PROCESS_STEPS_DATA.map((item, index) => {
                const Icon = STEP_ICONS[index] || CheckCircle2;
                const takeaways = STEP_TAKEAWAYS[item.number] || [];
                const stageLabel = STAGE_LABELS[index] || `STAGE ${item.number}`;

                return (
                  <article
                    key={item.step}
                    id={`stage-${item.step}`}
                    className="py-14 sm:py-20 lg:py-24 group transition-colors duration-500 hover:bg-white/60 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                      
                      {/* Left Column: Huge Typographic Numeral & Pace Indicator */}
                      <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                        <div>
                          {/* Giant Minimalist Serif Numeral */}
                          <div className="flex items-baseline gap-3 mb-4">
                            <span className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light text-[#216D56]/80 group-hover:text-[#36A783] transition-colors duration-500 tracking-tight leading-none">
                              {item.number}
                            </span>
                            <span className="text-xs font-mono font-bold text-[#64748B] uppercase tracking-wider">
                              / 06
                            </span>
                          </div>

                          {/* Stage Identifier */}
                          <div className="font-mono text-xs font-bold text-[#071426] tracking-wider uppercase mb-3">
                            {stageLabel}
                          </div>

                          {/* SLA Pulse Indicator */}
                          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#216D56] bg-[#EAF4F0] px-3 py-1.5 rounded-full border border-[#36A783]/25">
                            <span className="w-2 h-2 rounded-full bg-[#36A783] animate-pulse" />
                            <span>{item.slaBadge}</span>
                          </div>
                        </div>

                        {/* Subtle Minimal Icon Accent */}
                        <div className="hidden lg:flex items-center gap-3 pt-6 text-xs text-[#64748B] font-mono">
                          <div className="w-8 h-8 rounded-lg bg-white border border-[#CBD5E1] flex items-center justify-center text-[#216D56] shadow-2xs group-hover:bg-[#36A783] group-hover:text-white group-hover:border-[#36A783] transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <span>Stage Protocol Validated</span>
                        </div>
                      </div>

                      {/* Right Column: Editorial Narrative & Scope Breakdown */}
                      <div className="lg:col-span-8 flex flex-col justify-between">
                        <div>
                          {/* Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#071426] tracking-tight leading-tight mb-3 group-hover:text-[#216D56] transition-colors">
                            {item.title}
                          </h3>

                          {/* Preview Tagline */}
                          <p className="text-base sm:text-lg font-serif italic text-[#36A783] mb-6">
                            &ldquo;{item.homepagePreview}&rdquo;
                          </p>

                          {/* Full Deep Walkthrough Paragraph */}
                          <p className="text-base sm:text-lg text-[#4A5D73] font-sans leading-[1.8] mb-8 font-normal">
                            {item.fullDescription}
                          </p>

                          {/* Highlight Deliverable Banner (Ultra-fine Hairline, No Gray Box) */}
                          <div className="py-3.5 px-4 mb-4 rounded-xl bg-[#EAF4F0]/60 border-l-4 border-[#36A783] text-sm text-[#071426] font-medium flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#36A783] shrink-0" />
                            <span>{item.deliverableHighlight}</span>
                          </div>

                          {/* Step 3 Direct Portal Access Button */}
                          {item.number === "03" && (
                            <div className="mb-6">
                              <Link
                                href="/#portal"
                                className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-[#071426] bg-[#C6F850] hover:bg-[#36A783] hover:text-white px-4 py-2.5 rounded-xl border border-[#071426]/10 shadow-xs transition-all group/btn"
                              >
                                <Lock className="w-3.5 h-3.5 text-[#071426] group-hover/btn:text-white" />
                                <span>Access Digital Client Portal (AES-256 Vault)</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                              </Link>
                            </div>
                          )}
                        </div>

                        {/* Three Key Execution Benchmarks (Minimalist check items) */}
                        <div className="pt-6 border-t border-[#E2E8F0] grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {takeaways.map((takeaway, tIdx) => (
                            <div
                              key={tIdx}
                              className="flex items-center gap-2 text-xs text-[#556980] font-sans"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#36A783] shrink-0" />
                              <span className="leading-snug">{takeaway}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  </article>
                );
              })}
            </div>

          </div>
        </section>

        {/* ================================================================= */}
        {/* 3. EDITORIAL MANIFESTO: Why Operating Architecture Matters         */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28 bg-white border-t border-b border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-5">
                <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#36A783] font-bold mb-4">
                  OPERATING PHILOSOPHY
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#071426] tracking-tight leading-[1.14]">
                  Clarity Over Bureaucracy. Speed Over Paperwork.
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#4A5D73] font-sans leading-relaxed">
                <p>
                  Every engagement at Auditclue runs through our standardized,
                  repeatable digital workflow. By eliminating physical paperwork,
                  courier transit times, and administrative friction, we accelerate
                  audit completion and statutory filings by up to 60%.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#E2E8F0]">
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-[#071426] mb-1">
                      24–48 Hours
                    </div>
                    <div className="text-xs text-[#64748B] font-mono">
                      Average engagement scoping & contract issuance
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-serif text-[#071426] mb-1">
                      Zero Penalties
                    </div>
                    <div className="text-xs text-[#64748B] font-mono">
                      Strict FTA statutory deadline adherence record
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================================================= */}
        {/* 4. CLOSING CONVERSION BANNER (Signature Kinetic Callout)          */}
        {/* ================================================================= */}
        <section className="py-20 sm:py-28 bg-[#071426] text-white relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div
            className="pointer-events-none absolute inset-0 z-0 opacity-40"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#36A783]/15 rounded-full blur-[140px]" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center z-10">
            <div className="inline-flex items-center gap-2 bg-[#36A783]/20 border border-[#36A783]/40 text-[#83D9BE] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#83D9BE]" />
              <span>READY TO BEGIN STAGE 01?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-5">
              Initiate Your 100% Digital Advisory Engagement
            </h2>

            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              Submit your enquiry today. Our senior chartered advisors will review
              your requirements and provide a clear, itemized proposal within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#consult-form"
                className="group/btn relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#C6F850] px-7 py-4 text-base font-bold text-[#071426] shadow-lg hover:shadow-[#C6F850]/20 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer w-full sm:w-auto"
              >
                <span
                  className="absolute inset-0 bg-[#FFFFFF] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover/btn:translate-y-0 rounded-xl"
                  aria-hidden="true"
                />
                <span className="relative z-10 block overflow-hidden leading-tight">
                  <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:-translate-y-full">
                    Initiate Stage 01 Now
                  </span>
                  <span
                    className="absolute top-0 left-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 text-[#071426]"
                    aria-hidden="true"
                  >
                    Initiate Stage 01 Now
                  </span>
                </span>
                <span className="relative z-10 text-lg leading-none font-sans">
                  ↳
                </span>
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-medium px-6 py-4 rounded-xl border border-white/15 transition-colors w-full sm:w-auto"
              >
                <span>Explore All 10 Services</span>
                <ArrowRight className="w-4 h-4 text-white/70" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer />
    </div>
  );
}
